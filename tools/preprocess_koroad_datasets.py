#!/usr/bin/env python3
import csv
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "data" / "raw"
OUT = ROOT / "data"

HEADERS = [
    "id",
    "district",
    "area",
    "lat",
    "lng",
    "accidents",
    "casualties",
    "serious",
    "children",
    "elderly",
    "night",
    "commute",
    "pm",
    "weatherRisk",
    "speedLimit",
    "schoolZone",
    "roadType",
    "signalDensity",
    "trafficVolume",
    "note",
]


def load_items(name):
    with (RAW / name).open(encoding="utf-8") as f:
        data = json.load(f)
    return data["response"]["items"]["item"]


def load_stats():
    stats = {}
    for row in load_items("koroad_daejeon_stt_2024_raw.json"):
        district = row["sido_sgg_nm"].replace("대전광역시 ", "")
        stats.setdefault(district, {})[row["acc_cl_nm"]] = row
    return stats


def number(value):
    try:
        return float(value)
    except (TypeError, ValueError):
        return 0.0


def district_from_spot(spot_name):
    match = re.search(r"대전\s+([가-힣]+구)", spot_name)
    return match.group(1) if match else "대전"


def clean_area(spot_name):
    return spot_name.replace("대전 ", "", 1)


def road_type(spot_name, category):
    if category == "schoolzone":
        return "스쿨존"
    if "시장" in spot_name:
        return "전통시장"
    if "역" in spot_name:
        return "역세권"
    if "네거리" in spot_name or "삼거리" in spot_name or "오거리" in spot_name or "사거리" in spot_name:
        return "교차로"
    if "둔산" in spot_name or "상점가" in spot_name:
        return "상업보행"
    return "도시도로"


def ratio(stats, district, key, denominator="전체사고"):
    district_stats = stats.get(district, {})
    top = number(district_stats.get(key, {}).get("acc_cnt"))
    bottom = number(district_stats.get(denominator, {}).get("acc_cnt"))
    return round(top / bottom, 4) if bottom else 0


def commute_score(spot_name, category):
    if category == "schoolzone":
        if "초등" in spot_name:
            return 0.64
        return 0.58
    if "역" in spot_name:
        return 0.43
    if "네거리" in spot_name or "사거리" in spot_name:
        return 0.4
    if "시장" in spot_name:
        return 0.32
    return 0.36


def speed_limit(spot_name, category):
    if category == "schoolzone":
        return 30
    if "시장" in spot_name or "유치원" in spot_name or "초등" in spot_name:
        return 30
    if "상점가" in spot_name:
        return 40
    return 50


def signal_density(spot_name, accidents, max_accidents):
    base = 0.58
    if "네거리" in spot_name or "사거리" in spot_name or "삼거리" in spot_name or "오거리" in spot_name:
        base += 0.18
    if "역" in spot_name:
        base += 0.08
    base += 0.14 * (accidents / max_accidents if max_accidents else 0)
    return round(min(0.95, base), 2)


def traffic_volume(accidents, max_accidents, spot_name):
    value = 0.38 + 0.52 * (accidents / max_accidents if max_accidents else 0)
    if "역" in spot_name or "시장" in spot_name:
        value += 0.05
    return round(min(0.95, value), 2)


def weather_risk(spot_name, category):
    value = 0.33
    if "시장" in spot_name:
        value += 0.05
    if "역" in spot_name:
        value += 0.03
    if category == "schoolzone":
        value -= 0.05
    return round(max(0.22, min(0.48, value)), 2)


def note_for(row, category):
    area = clean_area(row["spot_nm"])
    if category == "pedestrian":
        return f"KOROAD 보행자 사고다발지역 원자료 기반. {area}은 차량 사고 전체보다 보행자 피해가 두드러지는 지점이므로 횡단 동선, 신호 대기, 보행 집중 시간을 중심으로 해석합니다."
    if category == "oldman":
        return f"KOROAD 노인 보행자 사고다발지역 원자료 기반. {area}은 고령 보행자 피해가 집중된 지점이므로 보행 속도, 시장/역 접근성, 보호시간 확대를 함께 봅니다."
    if category == "schoolzone":
        return f"KOROAD 어린이보호구역 사고다발지역 원자료 기반. {area}은 사고 건수보다 어린이 노출과 등하교 시간대 관리가 핵심 해석 기준입니다."
    return "KOROAD 원자료 기반 수업용 가공 데이터입니다."


def convert(items, stats, category, prefix):
    max_accidents = max(number(item["occrrnc_cnt"]) for item in items) or 1
    rows = []
    for index, item in enumerate(items, 1):
        district = district_from_spot(item["spot_nm"])
        accidents = int(number(item["occrrnc_cnt"]))
        casualties = int(number(item["caslt_cnt"]))
        serious = int(number(item.get("se_dnv_cnt"))) + int(number(item.get("dth_dnv_cnt")))
        night = ratio(stats, district, "야간사고")
        pm = round(number(stats.get(district, {}).get("개인형이동수단(PM)사고", {}).get("acc_cnt")) / 10)

        if category == "pedestrian":
            children = round(accidents * ratio(stats, district, "어린이보행사고", "보행자사고"))
            elderly = round(accidents * ratio(stats, district, "고령보행자사고", "보행자사고"))
            school_zone = 0
        elif category == "oldman":
            children = 0
            elderly = accidents
            school_zone = 0
        else:
            children = accidents
            elderly = 0
            school_zone = 1

        rows.append(
            {
                "id": f"{prefix}-{index:03d}",
                "district": district,
                "area": clean_area(item["spot_nm"]),
                "lat": item["la_crd"],
                "lng": item["lo_crd"],
                "accidents": accidents,
                "casualties": casualties,
                "serious": serious,
                "children": children,
                "elderly": elderly,
                "night": night,
                "commute": commute_score(item["spot_nm"], category),
                "pm": pm,
                "weatherRisk": weather_risk(item["spot_nm"], category),
                "speedLimit": speed_limit(item["spot_nm"], category),
                "schoolZone": school_zone,
                "roadType": road_type(item["spot_nm"], category),
                "signalDensity": signal_density(item["spot_nm"], accidents, max_accidents),
                "trafficVolume": traffic_volume(accidents, max_accidents, item["spot_nm"]),
                "note": note_for(item, category),
            }
        )
    return rows


def write_csv(path, rows):
    with path.open("w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=HEADERS, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def main():
    stats = load_stats()
    datasets = [
        (
            "koroad_daejeon_pedestrian_2022_2024_raw.json",
            "daejeon_traffic_risk_pedestrian_2022_2024_upload.csv",
            "pedestrian",
            "PED-DJ",
        ),
        (
            "koroad_daejeon_oldman_2024_raw.json",
            "daejeon_traffic_risk_oldman_2024_upload.csv",
            "oldman",
            "OLD-DJ",
        ),
        (
            "koroad_daejeon_schoolzone_child_2024_raw.json",
            "daejeon_traffic_risk_schoolzone_child_2024_upload.csv",
            "schoolzone",
            "SCH-DJ",
        ),
    ]
    for raw_name, out_name, category, prefix in datasets:
        rows = convert(load_items(raw_name), stats, category, prefix)
        write_csv(OUT / out_name, rows)
        print(f"{out_name}: {len(rows)} rows")


if __name__ == "__main__":
    main()

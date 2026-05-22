# KOROAD Daejeon Traffic Risk Upload Data, 2024

Generated on 2026-05-22 from Korea Road Traffic Authority / TAAS open data endpoints.

## Upload file

- `data/daejeon_traffic_risk_koroad_2024_upload.csv`
- Rows: 15
- Encoding: UTF-8 with BOM
- App compatibility: matches the CSV columns required by `app.js`.

## Raw source files

- `data/raw/koroad_daejeon_frequentzone_lg_2024_raw.json`
- `data/raw/koroad_daejeon_stt_2024_raw.json`
- `data/raw/koroad_daejeon_schoolzone_child_2024_raw.json`
- `data/raw/koroad_daejeon_oldman_2024_raw.json`
- `data/raw/koroad_daejeon_pedestrian_2022_2024_raw.json`

## Sources

- 지자체별 교통사고 다발지역 API: https://opendata.koroad.or.kr/data/rest/frequentzone/lg?searchYearCd=2025119&sido=30&guGun=&authKey=[authKey]&type=json
- 지자체별 대상 교통사고 통계 API: https://opendata.koroad.or.kr/data/rest/stt?searchYearCd=2024&sido=2500&guGun=&authKey=[authKey]&type=json
- 어린이보호구역내 어린이 교통사고 다발지역 API: https://opendata.koroad.or.kr/data/rest/frequentzone/schoolzone/child?searchYearCd=2025066&sido=30&guGun=&authKey=[authKey]&type=json
- 보행노인 교통사고 다발지역 API: https://opendata.koroad.or.kr/data/rest/frequentzone/oldman?searchYearCd=2025076&sido=30&guGun=&authKey=[authKey]&type=json
- 보행자 교통사고 다발지역 API: https://opendata.koroad.or.kr/data/rest/frequentzone/pedstrians?searchYearCd=2025083&sido=30&guGun=&authKey=[authKey]&type=json

## Processing Notes

Official point-level fields used directly: location, hotspot name, occurrence count, casualty count, severe injury count, coordinates.

The current web app also requires classroom context fields that are not all provided at hotspot level. `children`, `elderly`, `night`, and `pm` were derived from 2024 district-level official statistics; `schoolZone` was supported by nearby school-zone hotspot data. `commute`, `weatherRisk`, `speedLimit`, `roadType`, `signalDensity`, and `trafficVolume` are educational features engineered from hotspot type, accident scale, and location keywords so the existing app can run without code changes.

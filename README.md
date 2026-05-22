# 대전 교통사고 위험지역 분석/예측 학습 프로그램

고등학교 2학년 데이터과학 공동교육과정에서 사용할 수 있는 정적 웹앱입니다. 대전 지역 교통사고 위험지역을 지도, 차트, 상관관계 히트맵, 시나리오 예측으로 살펴보도록 구성했습니다.

## 실행 방법

설치 없이 `index.html`을 브라우저로 열면 됩니다.

```bash
cd /home/spark-robotics/work/daejeon-traffic-risk-edu
python3 -m http.server 8765
```

브라우저에서 `http://localhost:8765`로 접속합니다. 파일을 직접 열어도 대부분 동작하지만, 지도/차트 CDN을 안정적으로 불러오려면 위 방식이 좋습니다.

## GitHub Pages 배포

이 프로젝트는 빌드 과정이 없는 정적 사이트입니다. `.github/workflows/pages.yml`이 포함되어 있어 GitHub 저장소 설정에서 Pages 배포 소스를 `GitHub Actions`로 지정하면 `main` 브랜치에 push될 때 자동 배포됩니다.

```bash
cd /home/spark-robotics/work/daejeon-traffic-risk-edu
git init
git add .
git commit -m "Create Daejeon traffic risk education app"
git branch -M main
git remote add origin https://github.com/<account>/<repo>.git
git push -u origin main
```

GitHub CLI 로그인이 되어 있다면 저장소 생성까지 한 번에 처리할 수 있습니다.

```bash
gh repo create <account>/<repo> --public --source=. --remote=origin --push
```

## 수업 흐름

1. 샘플 데이터로 대전 전체 위험 분포를 지도에서 확인합니다.
2. KOROAD 전체 사고다발지역, 보행자, 노인 보행자, 어린이보호구역 데이터셋을 바꾸며 같은 모델의 결과가 어떻게 달라지는지 비교합니다.
3. 지역별 사고/위험도, 시간대별 패턴, 속도 제한과 사고 규모를 차트로 해석합니다.
4. 상관관계 히트맵으로 `사고`, `중상`, `야간`, `출퇴근`, `속도`, `교통량` 사이의 관계를 토론합니다.
5. 예측 시나리오를 바꿔 스쿨존 관리, 야간 단속/조명, 제한속도 하향의 효과를 비교합니다.

## 수업/프로젝트 노트

- [레포 설명 노트](docs/REPOSITORY_GUIDE_KO.md): 파일 구조, 데이터셋, 전처리, 위험도 모델, 지도 데이터 확인 방법을 설명합니다.
- [바이브코딩 데이터과학 노트](docs/VIBE_CODING_DATA_SCIENCE_NOTE_KO.md): 사용자의 요청과 AI의 제안을 순서대로 정리해 학생들이 데이터과학 프로젝트를 만들어 가는 방법을 학습할 수 있게 했습니다.

## 데이터 구조

앱에는 수업용 샘플 데이터가 내장되어 있습니다. 실제 공공데이터를 사용하려면 CSV를 아래 컬럼으로 맞춘 뒤 `CSV 불러오기`를 사용합니다.

필수 컬럼:

```text
district,area,lat,lng,accidents,casualties,serious,children,elderly,night,commute,pm,weatherRisk,speedLimit,schoolZone,roadType,signalDensity,trafficVolume
```

선택 컬럼:

```text
id,note
```

비율 컬럼인 `night`, `commute`, `weatherRisk`, `signalDensity`, `trafficVolume`은 `0.35` 또는 `35`처럼 입력할 수 있습니다. `35`는 자동으로 35%로 처리됩니다.

## 사용할 수 있는 공공데이터 후보

앱에 바로 선택할 수 있게 들어간 전처리 CSV:

- `data/daejeon_traffic_risk_koroad_2024_upload.csv`: KOROAD 2024 지자체별 교통사고 다발지역
- `data/daejeon_traffic_risk_pedestrian_2022_2024_upload.csv`: KOROAD 2022-2024 보행자 사고다발지역
- `data/daejeon_traffic_risk_oldman_2024_upload.csv`: KOROAD 2024 노인 보행자 사고다발지역
- `data/daejeon_traffic_risk_schoolzone_child_2024_upload.csv`: KOROAD 2024 어린이보호구역 어린이 사고다발지역

전처리 스크립트:

```bash
python3 tools/preprocess_koroad_datasets.py
```

- 공공데이터포털: 한국도로교통공단 교통사고 GIS정보  
  https://www.data.go.kr/data/15075668/fileData.do
- 공공데이터포털: 한국도로교통공단 어린이보호구역내 어린이 교통사고 다발지역 OpenAPI  
  https://www.data.go.kr/data/15058311/openapi.do
- 공공데이터포털: 한국도로교통공단 보행자 교통사고 다발지역정보 OpenAPI  
  https://www.data.go.kr/data/15105289/openapi.do
- 공공데이터포털: 한국도로교통공단 노인 교통사고 다발지역정보 OpenAPI  
  https://www.data.go.kr/data/15057666/openapi.do
- 공공데이터포털: 한국도로교통공단 지자체별 교통사고 다발지역 OpenAPI  
  https://www.data.go.kr/data/15057467/openapi.do
- TAAS 교통사고분석시스템  
  https://taas.koroad.or.kr/

공공데이터포털 OpenAPI는 보통 인증키가 필요합니다. 그래서 이 앱은 인증키 없이도 수업이 가능한 샘플 데이터를 먼저 제공하고, 실제 데이터를 받은 뒤 CSV로 교체하는 방식을 사용합니다.

## 데이터과학 요소

- 데이터 수집: 공공데이터포털, TAAS, 행정구역/지도 자료
- 전처리: 결측치 확인, 수치형 변환, 비율 변환, 좌표 검증
- 탐색적 분석: 지역별 집계, 시간대별 비교, 산점도, 상관계수
- 공간 분석: Leaflet 기반 지도 마커와 밀도 히트맵
- 예측 모델: 정규화된 변수에 가중치를 부여한 위험도 점수 모델
- 시나리오 분석: 조건 변화에 따른 위험도 변화 비교

## 모델 해석

이 앱의 예측은 실제 정책 결정을 위한 확정 모델이 아니라 교육용 위험도 모델입니다. 사고 건수, 중상자 수, 사상자 수, 어린이/고령자 변수, 야간/출퇴근 비중, 제한속도, 교통량, 기상 취약성을 0~1 범위로 정규화한 뒤 가중 합산합니다.

학생에게 강조할 점은 “점수가 정답”이라는 결론이 아니라, 어떤 변수를 넣었는지에 따라 결과가 달라지고 그 선택을 설명해야 한다는 점입니다.

---

# Daejeon Traffic Accident Risk Analysis and Prediction Learning App

This is a static web app for a high school data science class. It visualizes and explains traffic accident risk areas in Daejeon with a map, charts, a correlation heatmap, and scenario-based prediction.

## How to Run

Open `index.html` in a browser, or run a small local server:

```bash
cd /home/spark-robotics/work/daejeon-traffic-risk-edu
python3 -m http.server 8765
```

Then open `http://localhost:8765`.

## Classroom Flow

1. Start with the embedded sample data and inspect the city-wide risk map.
2. Change district, time, and speed-limit filters to compare patterns.
3. Read charts for district-level risk, time patterns, and speed-limit relationships.
4. Use the correlation heatmap to discuss relationships between accidents, severe injuries, nighttime risk, commute risk, speed, and traffic volume.
5. Switch prediction scenarios to compare school-zone management, nighttime enforcement/lighting, and speed-limit reduction.

## Data Format

The app includes sample teaching data. To use real public data, prepare a CSV with these required columns:

```text
district,area,lat,lng,accidents,casualties,serious,children,elderly,night,commute,pm,weatherRisk,speedLimit,schoolZone,roadType,signalDensity,trafficVolume
```

Optional columns:

```text
id,note
```

Ratio fields can be entered either as `0.35` or `35`; values over 1 are treated as percentages.

## Public Data Candidates

- Korea Road Traffic Authority traffic accident GIS data on Korea Public Data Portal  
  https://www.data.go.kr/data/15075668/fileData.do
- Korea Road Traffic Authority child school-zone accident hotspot OpenAPI  
  https://www.data.go.kr/data/15058311/openapi.do
- TAAS Traffic Accident Analysis System  
  https://taas.koroad.or.kr/

Most Public Data Portal APIs require an API key. This app therefore starts with an embedded teaching dataset and supports replacing it with a CSV exported from official sources.

## Data Science Concepts

- Data collection: public data portals, TAAS, map and administrative data
- Preprocessing: missing values, numeric conversion, ratio conversion, coordinate validation
- Exploratory analysis: district aggregation, time comparison, scatter plots, correlation coefficients
- Spatial analysis: Leaflet map markers and density heatmap
- Prediction model: weighted risk scoring after feature normalization
- Scenario analysis: comparing risk changes under different intervention assumptions

## Model Interpretation

The prediction model is for education, not for final policy decisions. It normalizes accident count, severe injuries, casualties, vulnerable road users, nighttime/commute ratios, speed limit, traffic volume, and weather vulnerability, then combines them into a weighted score.

The main teaching point is not that the score is the final answer. Students should learn that model results depend on feature choices and weights, and those choices must be explained.

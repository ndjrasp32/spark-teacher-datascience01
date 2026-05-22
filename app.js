const sampleData = [
  { id: "DJ-001", district: "서구", area: "둔산동 시청역 주변", lat: 36.3517, lng: 127.3848, accidents: 31, casualties: 42, serious: 7, children: 2, elderly: 5, night: 0.31, commute: 0.44, pm: 5, weatherRisk: 0.25, speedLimit: 50, schoolZone: 0, roadType: "간선도로", signalDensity: 0.78, trafficVolume: 0.92, note: "업무지구와 환승 수요가 겹쳐 출퇴근 시간 집중도가 큽니다." },
  { id: "DJ-002", district: "서구", area: "갈마역 사거리", lat: 36.3574, lng: 127.3726, accidents: 24, casualties: 30, serious: 5, children: 1, elderly: 4, night: 0.38, commute: 0.39, pm: 4, weatherRisk: 0.3, speedLimit: 50, schoolZone: 0, roadType: "교차로", signalDensity: 0.7, trafficVolume: 0.76, note: "상업지역 진출입 차량과 보행 동선이 함께 나타납니다." },
  { id: "DJ-003", district: "서구", area: "관저동 학교밀집 구간", lat: 36.3017, lng: 127.3378, accidents: 18, casualties: 22, serious: 3, children: 6, elderly: 2, night: 0.18, commute: 0.51, pm: 3, weatherRisk: 0.22, speedLimit: 30, schoolZone: 1, roadType: "생활도로", signalDensity: 0.52, trafficVolume: 0.47, note: "등하교 시간대 위험도가 높아지는 스쿨존 사례입니다." },
  { id: "DJ-004", district: "서구", area: "월평동 갑천변 도로", lat: 36.3625, lng: 127.3643, accidents: 15, casualties: 17, serious: 3, children: 1, elderly: 2, night: 0.47, commute: 0.28, pm: 6, weatherRisk: 0.38, speedLimit: 50, schoolZone: 0, roadType: "하천변도로", signalDensity: 0.35, trafficVolume: 0.58, note: "야간 이동과 개인형 이동장치 비중을 함께 볼 필요가 있습니다." },
  { id: "DJ-005", district: "서구", area: "도마동 전통시장 주변", lat: 36.3163, lng: 127.3765, accidents: 22, casualties: 28, serious: 6, children: 1, elderly: 8, night: 0.33, commute: 0.34, pm: 2, weatherRisk: 0.28, speedLimit: 40, schoolZone: 0, roadType: "상업이면도로", signalDensity: 0.63, trafficVolume: 0.65, note: "고령 보행자와 생활도로 차량 흐름을 함께 분석하기 좋습니다." },

  { id: "DJ-006", district: "유성구", area: "충남대 정문 오거리", lat: 36.3667, lng: 127.3452, accidents: 27, casualties: 34, serious: 5, children: 1, elderly: 3, night: 0.42, commute: 0.36, pm: 8, weatherRisk: 0.29, speedLimit: 50, schoolZone: 0, roadType: "대학가", signalDensity: 0.74, trafficVolume: 0.81, note: "보행, 버스, PM 이동이 섞이는 대학가 지점입니다." },
  { id: "DJ-007", district: "유성구", area: "유성온천역 일대", lat: 36.3539, lng: 127.3414, accidents: 29, casualties: 38, serious: 8, children: 1, elderly: 6, night: 0.49, commute: 0.33, pm: 5, weatherRisk: 0.33, speedLimit: 50, schoolZone: 0, roadType: "상업지역", signalDensity: 0.82, trafficVolume: 0.88, note: "야간 유동인구가 많아 시간대별 비교가 뚜렷합니다." },
  { id: "DJ-008", district: "유성구", area: "도안신도시 초등학교 주변", lat: 36.3316, lng: 127.3371, accidents: 14, casualties: 18, serious: 2, children: 5, elderly: 1, night: 0.16, commute: 0.55, pm: 2, weatherRisk: 0.2, speedLimit: 30, schoolZone: 1, roadType: "스쿨존", signalDensity: 0.46, trafficVolume: 0.52, note: "사고 건수는 크지 않아도 어린이 변수 때문에 관리 우선순위가 올라갑니다." },
  { id: "DJ-009", district: "유성구", area: "관평동 테크노밸리", lat: 36.4236, lng: 127.3915, accidents: 21, casualties: 27, serious: 4, children: 0, elderly: 2, night: 0.36, commute: 0.48, pm: 3, weatherRisk: 0.25, speedLimit: 60, schoolZone: 0, roadType: "산업단지도로", signalDensity: 0.55, trafficVolume: 0.79, note: "출퇴근 차량 집중과 높은 제한속도 조건을 함께 살펴봅니다." },
  { id: "DJ-010", district: "유성구", area: "노은역 환승 구간", lat: 36.3739, lng: 127.3188, accidents: 19, casualties: 24, serious: 3, children: 1, elderly: 5, night: 0.34, commute: 0.41, pm: 2, weatherRisk: 0.27, speedLimit: 50, schoolZone: 0, roadType: "환승도로", signalDensity: 0.69, trafficVolume: 0.67, note: "버스정류장과 지하철 접근 보행량이 위험도를 설명합니다." },

  { id: "DJ-011", district: "중구", area: "대전역 서광장", lat: 36.3326, lng: 127.4348, accidents: 33, casualties: 45, serious: 9, children: 1, elderly: 9, night: 0.44, commute: 0.38, pm: 4, weatherRisk: 0.31, speedLimit: 50, schoolZone: 0, roadType: "역세권", signalDensity: 0.86, trafficVolume: 0.91, note: "대중교통 환승과 보행 밀도가 높은 대표 지점입니다." },
  { id: "DJ-012", district: "중구", area: "중앙로역 상권", lat: 36.3276, lng: 127.4259, accidents: 30, casualties: 40, serious: 7, children: 1, elderly: 7, night: 0.53, commute: 0.31, pm: 5, weatherRisk: 0.35, speedLimit: 40, schoolZone: 0, roadType: "상업지역", signalDensity: 0.9, trafficVolume: 0.85, note: "야간 보행량과 상가 진출입 차량이 겹치는 구간입니다." },
  { id: "DJ-013", district: "중구", area: "은행동 보행우선구역", lat: 36.3296, lng: 127.4283, accidents: 16, casualties: 19, serious: 3, children: 2, elderly: 6, night: 0.46, commute: 0.25, pm: 4, weatherRisk: 0.29, speedLimit: 30, schoolZone: 0, roadType: "보행우선", signalDensity: 0.77, trafficVolume: 0.48, note: "속도는 낮지만 보행자 접촉 가능성이 큰 곳입니다." },
  { id: "DJ-014", district: "중구", area: "서대전네거리역", lat: 36.3223, lng: 127.4123, accidents: 26, casualties: 35, serious: 8, children: 1, elderly: 8, night: 0.39, commute: 0.42, pm: 2, weatherRisk: 0.32, speedLimit: 50, schoolZone: 0, roadType: "교차로", signalDensity: 0.84, trafficVolume: 0.82, note: "큰 교차로에서는 신호 밀도와 교통량을 함께 비교합니다." },
  { id: "DJ-015", district: "중구", area: "태평동 주거지역", lat: 36.3238, lng: 127.3986, accidents: 17, casualties: 21, serious: 4, children: 3, elderly: 5, night: 0.28, commute: 0.37, pm: 1, weatherRisk: 0.24, speedLimit: 30, schoolZone: 1, roadType: "생활도로", signalDensity: 0.51, trafficVolume: 0.44, note: "주거지와 학교 주변 안전대책을 연결해 볼 수 있습니다." },

  { id: "DJ-016", district: "동구", area: "복합터미널 앞", lat: 36.3504, lng: 127.4376, accidents: 34, casualties: 47, serious: 10, children: 1, elderly: 8, night: 0.46, commute: 0.4, pm: 3, weatherRisk: 0.34, speedLimit: 50, schoolZone: 0, roadType: "터미널", signalDensity: 0.88, trafficVolume: 0.94, note: "차량 진출입과 보행 환승이 동시에 큰 지점입니다." },
  { id: "DJ-017", district: "동구", area: "용전동 상업도로", lat: 36.3538, lng: 127.4311, accidents: 23, casualties: 29, serious: 5, children: 0, elderly: 5, night: 0.51, commute: 0.32, pm: 4, weatherRisk: 0.33, speedLimit: 50, schoolZone: 0, roadType: "상업지역", signalDensity: 0.7, trafficVolume: 0.73, note: "야간 사고 비중과 상업지역 특성이 잘 드러납니다." },
  { id: "DJ-018", district: "동구", area: "가오동 초등학교 주변", lat: 36.3069, lng: 127.4546, accidents: 13, casualties: 16, serious: 2, children: 5, elderly: 1, night: 0.14, commute: 0.58, pm: 1, weatherRisk: 0.19, speedLimit: 30, schoolZone: 1, roadType: "스쿨존", signalDensity: 0.43, trafficVolume: 0.42, note: "어린이 사고 비중과 등하교 시간대 집중을 확인합니다." },
  { id: "DJ-019", district: "동구", area: "판암역 주변", lat: 36.3174, lng: 127.4584, accidents: 20, casualties: 25, serious: 4, children: 1, elderly: 6, night: 0.37, commute: 0.43, pm: 2, weatherRisk: 0.27, speedLimit: 50, schoolZone: 0, roadType: "환승도로", signalDensity: 0.66, trafficVolume: 0.61, note: "도시철도 접근 보행량과 교차로 사고를 비교합니다." },
  { id: "DJ-020", district: "동구", area: "대동역 언덕길", lat: 36.3291, lng: 127.4421, accidents: 18, casualties: 23, serious: 5, children: 1, elderly: 7, night: 0.41, commute: 0.3, pm: 1, weatherRisk: 0.46, speedLimit: 40, schoolZone: 0, roadType: "경사도로", signalDensity: 0.48, trafficVolume: 0.52, note: "비·눈 날씨 취약성과 고령 보행자 변수를 설명하기 좋습니다." },

  { id: "DJ-021", district: "대덕구", area: "오정동 농수산시장 주변", lat: 36.3579, lng: 127.4075, accidents: 28, casualties: 36, serious: 8, children: 0, elderly: 6, night: 0.4, commute: 0.36, pm: 2, weatherRisk: 0.28, speedLimit: 50, schoolZone: 0, roadType: "물류상업", signalDensity: 0.7, trafficVolume: 0.83, note: "화물·상업 차량과 보행 동선이 섞이는 지점입니다." },
  { id: "DJ-022", district: "대덕구", area: "신탄진역 주변", lat: 36.4518, lng: 127.4287, accidents: 25, casualties: 32, serious: 7, children: 1, elderly: 8, night: 0.43, commute: 0.35, pm: 2, weatherRisk: 0.32, speedLimit: 50, schoolZone: 0, roadType: "역세권", signalDensity: 0.68, trafficVolume: 0.7, note: "역세권 고령 보행자 안전을 토론하기 좋은 사례입니다." },
  { id: "DJ-023", district: "대덕구", area: "송촌동 주거상권", lat: 36.3659, lng: 127.4425, accidents: 19, casualties: 24, serious: 4, children: 2, elderly: 5, night: 0.35, commute: 0.39, pm: 2, weatherRisk: 0.25, speedLimit: 40, schoolZone: 0, roadType: "주거상권", signalDensity: 0.58, trafficVolume: 0.57, note: "생활권 상권에서 보행자와 차량 흐름을 비교합니다." },
  { id: "DJ-024", district: "대덕구", area: "대화동 산업단지", lat: 36.3726, lng: 127.4101, accidents: 22, casualties: 31, serious: 6, children: 0, elderly: 2, night: 0.32, commute: 0.5, pm: 1, weatherRisk: 0.24, speedLimit: 60, schoolZone: 0, roadType: "산업단지도로", signalDensity: 0.5, trafficVolume: 0.77, note: "출퇴근 시간대와 제한속도 변수가 강하게 작용합니다." },
  { id: "DJ-025", district: "대덕구", area: "법동 초등학교 주변", lat: 36.3677, lng: 127.427, accidents: 12, casualties: 15, serious: 2, children: 4, elderly: 2, night: 0.15, commute: 0.56, pm: 1, weatherRisk: 0.18, speedLimit: 30, schoolZone: 1, roadType: "스쿨존", signalDensity: 0.45, trafficVolume: 0.41, note: "건수 중심 순위와 보호대상 중심 순위가 달라지는 예시입니다." }
];

const requiredColumns = [
  ["id", "선택", "지점 ID. 없으면 자동 생성"],
  ["district", "필수", "구/군 이름"],
  ["area", "필수", "지점 또는 사고다발지역 이름"],
  ["lat", "필수", "위도"],
  ["lng", "필수", "경도"],
  ["accidents", "필수", "사고 건수"],
  ["casualties", "필수", "사상자 수"],
  ["serious", "필수", "중상 이상 인원"],
  ["children", "필수", "어린이 사고 또는 관련 건수"],
  ["elderly", "필수", "고령자 사고 또는 관련 건수"],
  ["night", "필수", "야간 비중. 0.35 또는 35% 모두 가능"],
  ["commute", "필수", "출퇴근/등하교 시간 비중"],
  ["pm", "필수", "개인형 이동장치 관련 건수"],
  ["weatherRisk", "필수", "기상 취약도. 0~1 또는 %"],
  ["speedLimit", "필수", "제한속도 km/h"],
  ["schoolZone", "필수", "스쿨존 여부. 1 또는 0"],
  ["roadType", "필수", "도로 유형"],
  ["signalDensity", "필수", "신호/교차로 밀도. 0~1 또는 %"],
  ["trafficVolume", "필수", "교통량 지표. 0~1 또는 %"],
  ["note", "선택", "수업 해설 문장"]
];

const builtInDatasets = {
  sample: {
    source: "수업용 샘플 데이터",
    rows: () => sampleData.map((row) => ({ ...row }))
  },
  koroad2024: {
    source: "KOROAD 2024 대전 사고다발지역 가공 CSV",
    url: "./data/daejeon_traffic_risk_koroad_2024_upload.csv"
  }
};

const districtBounds = {
  type: "FeatureCollection",
  features: [
    { type: "Feature", properties: { name: "서구" }, geometry: { type: "Polygon", coordinates: [[[127.315, 36.285], [127.392, 36.292], [127.405, 36.372], [127.354, 36.392], [127.315, 36.365], [127.296, 36.323], [127.315, 36.285]]] } },
    { type: "Feature", properties: { name: "유성구" }, geometry: { type: "Polygon", coordinates: [[[127.285, 36.315], [127.365, 36.325], [127.415, 36.39], [127.398, 36.455], [127.313, 36.47], [127.265, 36.408], [127.285, 36.315]]] } },
    { type: "Feature", properties: { name: "중구" }, geometry: { type: "Polygon", coordinates: [[[127.385, 36.304], [127.433, 36.304], [127.445, 36.346], [127.41, 36.36], [127.377, 36.338], [127.385, 36.304]]] } },
    { type: "Feature", properties: { name: "동구" }, geometry: { type: "Polygon", coordinates: [[[127.425, 36.295], [127.49, 36.305], [127.492, 36.382], [127.438, 36.386], [127.41, 36.345], [127.425, 36.295]]] } },
    { type: "Feature", properties: { name: "대덕구" }, geometry: { type: "Polygon", coordinates: [[[127.39, 36.35], [127.465, 36.36], [127.475, 36.465], [127.405, 36.47], [127.375, 36.405], [127.39, 36.35]]] } }
  ]
};

const state = {
  data: sampleData.map((row) => ({ ...row })),
  source: "수업용 샘플 데이터",
  datasetId: "sample",
  filters: { district: "all", time: "all", speed: "all", scenario: "base" },
  selectedId: null,
  charts: {},
  layers: {}
};

const fields = [
  ["accidents", "사고"],
  ["serious", "중상"],
  ["night", "야간"],
  ["commute", "출퇴근"],
  ["speedLimit", "속도"],
  ["trafficVolume", "교통량"]
];

const map = L.map("map", { scrollWheelZoom: true }).setView([36.35, 127.39], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJSON(districtBounds, {
  style: (feature) => ({
    color: districtColor(feature.properties.name),
    weight: 2,
    fillColor: districtColor(feature.properties.name),
    fillOpacity: 0.07
  })
}).addTo(map);

document.getElementById("datasetSelect").addEventListener("change", (event) => {
  loadDataset(event.target.value);
});
document.getElementById("districtFilter").addEventListener("change", (event) => {
  state.filters.district = event.target.value;
  render();
});
document.getElementById("timeFilter").addEventListener("change", (event) => {
  state.filters.time = event.target.value;
  render();
});
document.getElementById("speedFilter").addEventListener("change", (event) => {
  state.filters.speed = event.target.value;
  render();
});
document.getElementById("scenarioSelect").addEventListener("change", (event) => {
  state.filters.scenario = event.target.value;
  render();
});
document.getElementById("resetData").addEventListener("click", () => {
  state.data = sampleData.map((row) => ({ ...row }));
  state.source = "수업용 샘플 데이터";
  state.datasetId = "sample";
  state.selectedId = null;
  document.getElementById("datasetSelect").value = "sample";
  document.getElementById("csvInput").value = "";
  render();
});
document.getElementById("downloadSample").addEventListener("click", downloadSampleCsv);
document.getElementById("csvInput").addEventListener("change", loadCsv);

function districtColor(name) {
  return {
    서구: "#1f7a5c",
    유성구: "#256d9d",
    중구: "#c8761a",
    동구: "#8b5fbf",
    대덕구: "#c63f31"
  }[name] || "#60706b";
}

function riskColor(score) {
  if (score >= 74) return "#c63f31";
  if (score >= 55) return "#c8761a";
  return "#1f7a5c";
}

function normalize(value, min, max) {
  if (max === min) return 0;
  return (Number(value) - min) / (max - min);
}

function getRanges(data) {
  const keys = ["accidents", "casualties", "serious", "children", "elderly", "pm", "speedLimit", "trafficVolume", "signalDensity"];
  return Object.fromEntries(keys.map((key) => {
    const values = data.map((row) => Number(row[key]) || 0);
    return [key, { min: Math.min(...values), max: Math.max(...values) }];
  }));
}

function riskScore(row, ranges, scenario = "base") {
  const adjusted = { ...row };
  if (scenario === "school" && adjusted.schoolZone) {
    adjusted.children *= 0.78;
    adjusted.commute *= 0.85;
  }
  if (scenario === "night") {
    adjusted.night *= 0.72;
    adjusted.weatherRisk *= 0.9;
  }
  if (scenario === "speed") {
    adjusted.speedLimit = Math.max(30, adjusted.speedLimit - 10);
  }

  const score =
    normalize(adjusted.accidents, ranges.accidents.min, ranges.accidents.max) * 24 +
    normalize(adjusted.serious, ranges.serious.min, ranges.serious.max) * 18 +
    normalize(adjusted.casualties, ranges.casualties.min, ranges.casualties.max) * 12 +
    normalize(adjusted.children + adjusted.elderly, 0, 16) * 12 +
    Number(adjusted.night) * 10 +
    Number(adjusted.commute) * 8 +
    normalize(adjusted.speedLimit, ranges.speedLimit.min, ranges.speedLimit.max) * 7 +
    Number(adjusted.trafficVolume) * 5 +
    Number(adjusted.weatherRisk) * 4;

  return Math.round(Math.max(0, Math.min(100, score + 8)));
}

function filteredData() {
  const ranges = getRanges(state.data);
  return state.data
    .map((row) => ({
      ...row,
      risk: riskScore(row, ranges, state.filters.scenario),
      baseRisk: riskScore(row, ranges, "base")
    }))
    .filter((row) => {
      if (state.filters.district !== "all" && row.district !== state.filters.district) return false;
      if (state.filters.speed === "30" && row.speedLimit > 30) return false;
      if (state.filters.speed === "50" && row.speedLimit > 50) return false;
      if (state.filters.speed === "60" && row.speedLimit < 60) return false;
      if (state.filters.time === "night" && row.night < 0.35) return false;
      if (state.filters.time === "commute" && row.commute < 0.4) return false;
      if (state.filters.time === "children" && !(row.children >= 3 || row.schoolZone)) return false;
      if (state.filters.time === "elderly" && row.elderly < 5) return false;
      return true;
    });
}

function render() {
  const data = filteredData();
  renderDatasetGuide();
  renderSource(data);
  renderDistrictOptions();
  renderKpis(data);
  renderMap(data);
  renderSelected(data);
  renderCharts(data);
  renderCorrelation(data);
  renderPredictions(data);
}

async function loadDataset(datasetId) {
  if (datasetId === "custom") {
    document.getElementById("csvInput").click();
    document.getElementById("datasetSelect").value = state.datasetId;
    return;
  }

  const dataset = builtInDatasets[datasetId];
  if (!dataset) return;

  const previousDatasetId = state.datasetId;
  const previousSource = state.source;
  const previousData = state.data;

  try {
    state.datasetId = datasetId;
    state.source = `${dataset.source} 불러오는 중`;
    state.selectedId = null;
    render();

    if (dataset.rows) {
      state.data = dataset.rows();
    } else {
      const response = await fetch(dataset.url, { cache: "no-store" });
      if (!response.ok) throw new Error(`데이터셋을 불러오지 못했습니다: ${response.status}`);
      state.data = normalizeRows(parseCsv(await response.text()));
    }

    state.source = dataset.source;
    render();
  } catch (error) {
    state.datasetId = previousDatasetId;
    state.source = previousSource;
    state.data = previousData;
    document.getElementById("datasetSelect").value = previousDatasetId;
    alert(error.message);
    render();
  }
}

function renderSource(data) {
  document.getElementById("sourceName").textContent = state.source;
  document.getElementById("recordCount").textContent = `${data.length}개 지점 표시`;
}

function renderDatasetGuide() {
  document.getElementById("datasetSelect").value = state.datasetId;
  document.getElementById("requiredColumns").innerHTML = requiredColumns.map(([name, type, description]) => `
    <span class="column-chip ${type === "필수" ? "is-required" : ""}" title="${escapeAttr(description)}">
      <strong>${escapeHtml(name)}</strong>
      <small>${escapeHtml(type)}</small>
    </span>
  `).join("");
}

function renderDistrictOptions() {
  const select = document.getElementById("districtFilter");
  const districts = ["all", ...Array.from(new Set(state.data.map((row) => row.district))).sort()];
  const current = select.value || "all";
  select.innerHTML = districts.map((name) => `<option value="${escapeAttr(name)}">${name === "all" ? "전체" : escapeHtml(name)}</option>`).join("");
  select.value = districts.includes(current) ? current : "all";
}

function renderKpis(data) {
  const sum = (key) => data.reduce((total, row) => total + Number(row[key] || 0), 0);
  const avgRisk = data.length ? Math.round(data.reduce((total, row) => total + row.risk, 0) / data.length) : 0;
  document.getElementById("kpiRisk").textContent = avgRisk;
  document.getElementById("kpiAccidents").textContent = sum("accidents");
  document.getElementById("kpiSerious").textContent = sum("serious");
  document.getElementById("kpiHotspots").textContent = data.filter((row) => row.risk >= 74).length;
}

function renderMap(data) {
  if (state.layers.markers) state.layers.markers.remove();
  if (state.layers.heat) state.layers.heat.remove();

  const markerLayer = L.layerGroup();
  data.forEach((row) => {
    const marker = L.circleMarker([row.lat, row.lng], {
      radius: 7 + row.risk / 10,
      color: "#ffffff",
      weight: 2,
      fillColor: riskColor(row.risk),
      fillOpacity: 0.82
    });
    marker.bindPopup(`<span class="popup-title">${escapeHtml(row.area)}</span>위험도 ${row.risk}점<br>${escapeHtml(row.district)} · 사고 ${row.accidents}건`);
    marker.on("click", () => {
      state.selectedId = row.id;
      renderSelected(data);
    });
    marker.addTo(markerLayer);
  });
  const heatPoints = data.map((row) => [row.lat, row.lng, Math.max(0.2, row.risk / 100)]);
  const heatLayer = L.heatLayer(heatPoints, { radius: 32, blur: 24, maxZoom: 15, minOpacity: 0.28 });
  heatLayer.addTo(map);
  markerLayer.addTo(map);

  state.layers.markers = markerLayer;
  state.layers.heat = heatLayer;

  if (data.length) {
    const bounds = L.latLngBounds(data.map((row) => [row.lat, row.lng]));
    map.fitBounds(bounds.pad(0.18), { animate: false });
  }
}

function renderSelected(data) {
  const row = data.find((item) => item.id === state.selectedId) || data.slice().sort((a, b) => b.risk - a.risk)[0];
  if (!row) {
    document.getElementById("selectedTitle").textContent = "표시할 지점이 없습니다";
    document.getElementById("selectedStats").innerHTML = "";
    document.getElementById("selectedInsight").textContent = "필터 조건을 완화하거나 CSV 데이터의 좌표와 필수 컬럼을 확인하세요.";
    return;
  }
  document.getElementById("selectedTitle").textContent = row.area;
  document.getElementById("selectedStats").innerHTML = `
    <div><dt>위험도</dt><dd>${row.risk}점</dd></div>
    <div><dt>사고 건수</dt><dd>${row.accidents}건</dd></div>
    <div><dt>중상 이상</dt><dd>${row.serious}명</dd></div>
    <div><dt>제한속도</dt><dd>${row.speedLimit}km/h</dd></div>
    <div><dt>야간 비중</dt><dd>${Math.round(row.night * 100)}%</dd></div>
    <div><dt>출퇴근 비중</dt><dd>${Math.round(row.commute * 100)}%</dd></div>
  `;
  const delta = row.risk - row.baseRisk;
  const changeText = delta === 0 ? "현재 조건 기준" : `${delta > 0 ? "+" : ""}${delta}점 변화`;
  document.getElementById("selectedInsight").textContent = `${row.note} 예측 모델은 이 지점을 ${riskLabel(row.risk)}으로 분류합니다. 시나리오 적용 결과는 ${changeText}입니다.`;
}

function riskLabel(score) {
  if (score >= 74) return "고위험";
  if (score >= 55) return "주의";
  return "관찰";
}

function groupByDistrict(data) {
  const grouped = {};
  data.forEach((row) => {
    grouped[row.district] ||= { district: row.district, accidents: 0, risk: 0, count: 0 };
    grouped[row.district].accidents += row.accidents;
    grouped[row.district].risk += row.risk;
    grouped[row.district].count += 1;
  });
  return Object.values(grouped).map((row) => ({ ...row, risk: Math.round(row.risk / row.count) }));
}

function renderCharts(data) {
  const districts = groupByDistrict(data);
  drawChart("districtChart", "bar", {
    labels: districts.map((row) => row.district),
    datasets: [
      { label: "사고 건수", data: districts.map((row) => row.accidents), backgroundColor: "#256d9d" },
      { label: "평균 위험도", data: districts.map((row) => row.risk), backgroundColor: "#c8761a" }
    ]
  }, { responsive: true, maintainAspectRatio: false });

  const timeValues = [
    avg(data, "night") * 100,
    avg(data, "commute") * 100,
    avg(data, "weatherRisk") * 100,
    avg(data, "trafficVolume") * 100,
    avg(data, "signalDensity") * 100
  ].map(Math.round);
  drawChart("timeChart", "radar", {
    labels: ["야간", "출퇴근", "기상 취약", "교통량", "신호 밀도"],
    datasets: [{ label: "위험 패턴", data: timeValues, backgroundColor: "rgba(31, 122, 92, 0.22)", borderColor: "#1f7a5c", pointBackgroundColor: "#1f7a5c" }]
  }, { responsive: true, maintainAspectRatio: false, scales: { r: { suggestedMin: 0, suggestedMax: 100 } } });

  drawChart("speedChart", "bubble", {
    datasets: data.map((row) => ({
      label: row.area,
      data: [{ x: row.speedLimit, y: row.accidents, r: Math.max(5, row.serious + 4) }],
      backgroundColor: colorAlpha(riskColor(row.risk), 0.68),
      borderColor: riskColor(row.risk)
    }))
  }, {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { title: { display: true, text: "제한속도(km/h)" }, suggestedMin: 20, suggestedMax: 70 },
      y: { title: { display: true, text: "사고 건수" }, beginAtZero: true }
    }
  });
}

function drawChart(id, type, data, options) {
  if (state.charts[id]) state.charts[id].destroy();
  state.charts[id] = new Chart(document.getElementById(id), { type, data, options });
}

function avg(data, key) {
  if (!data.length) return 0;
  return data.reduce((total, row) => total + Number(row[key] || 0), 0) / data.length;
}

function colorAlpha(hex, alpha) {
  const value = hex.replace("#", "");
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderCorrelation(data) {
  const grid = document.getElementById("correlationGrid");
  grid.innerHTML = `<div class="corr-top"></div>${fields.map(([, label]) => `<div class="corr-top">${label}</div>`).join("")}`;
  fields.forEach(([leftKey, leftLabel]) => {
    grid.insertAdjacentHTML("beforeend", `<div class="corr-cell corr-label">${leftLabel}</div>`);
    fields.forEach(([topKey]) => {
      const corr = correlation(data.map((row) => Number(row[leftKey]) || 0), data.map((row) => Number(row[topKey]) || 0));
      const hue = corr >= 0 ? 8 : 205;
      const lightness = 70 - Math.abs(corr) * 30;
      grid.insertAdjacentHTML("beforeend", `<div class="corr-cell" style="background:hsl(${hue}, 62%, ${lightness}%);" title="${leftLabel} / ${topKey}: ${corr.toFixed(2)}">${corr.toFixed(2)}</div>`);
    });
  });
}

function correlation(xs, ys) {
  if (xs.length < 2 || ys.length < 2) return 0;
  const meanX = xs.reduce((a, b) => a + b, 0) / xs.length;
  const meanY = ys.reduce((a, b) => a + b, 0) / ys.length;
  let numerator = 0;
  let denX = 0;
  let denY = 0;
  xs.forEach((x, index) => {
    const dx = x - meanX;
    const dy = ys[index] - meanY;
    numerator += dx * dy;
    denX += dx * dx;
    denY += dy * dy;
  });
  const denominator = Math.sqrt(denX * denY);
  return denominator ? numerator / denominator : 0;
}

function renderPredictions(data) {
  const top = data.slice().sort((a, b) => b.risk - a.risk).slice(0, 5);
  const scenarioText = {
    base: "현재 조건에서는 사고 규모, 중상 피해, 보행 취약 집단, 시간대 요인이 함께 높은 지점이 우선 관리 후보로 나타납니다.",
    school: "스쿨존 관리 강화 시나리오는 어린이 사고와 등하교 시간 비중이 큰 지점의 위험도를 낮추는 효과를 비교합니다.",
    night: "야간 단속/조명 개선 시나리오는 밤 시간 사고 비중과 기상 취약성이 큰 지점의 변화를 확인합니다.",
    speed: "제한속도 하향 시나리오는 50~60km/h 구간의 위험 점수가 얼마나 낮아지는지 비교합니다."
  }[state.filters.scenario];
  document.getElementById("scenarioSummary").textContent = scenarioText;
  if (!top.length) {
    document.getElementById("predictionList").innerHTML = "<li>현재 필터 조건에 해당하는 지점이 없습니다.</li>";
    return;
  }
  document.getElementById("predictionList").innerHTML = top.map((row) => {
    const delta = row.risk - row.baseRisk;
    const deltaText = delta === 0 ? "변화 없음" : `${delta > 0 ? "+" : ""}${delta}점`;
    return `<li><strong>${row.risk}점</strong> ${escapeHtml(row.area)} (${escapeHtml(row.district)}) · ${riskLabel(row.risk)} · 시나리오 변화 ${deltaText}<br><span>${escapeHtml(row.note)}</span></li>`;
  }).join("");
}

function loadCsv(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const rows = parseCsv(String(reader.result));
      state.data = normalizeRows(rows);
      state.source = file.name;
      state.datasetId = "custom";
      state.selectedId = null;
      document.getElementById("datasetSelect").value = "custom";
      render();
    } catch (error) {
      alert(error.message);
      event.target.value = "";
    }
  };
  reader.readAsText(file, "utf-8");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  if (rows.length < 2) throw new Error("CSV에 헤더와 데이터 행이 필요합니다.");
  const headers = rows[0].map((header) => header.replace(/^\ufeff/, "").trim());
  return rows.slice(1).map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

function normalizeRows(rows) {
  const required = requiredColumns.filter(([, type]) => type === "필수").map(([name]) => name);
  const missing = required.filter((key) => !(key in rows[0]));
  if (missing.length) throw new Error(`CSV 필수 컬럼이 없습니다: ${missing.join(", ")}`);

  return rows.map((row, index) => ({
    id: row.id || `CSV-${String(index + 1).padStart(3, "0")}`,
    district: row.district,
    area: row.area,
    lat: toNumber(row.lat),
    lng: toNumber(row.lng),
    accidents: toNumber(row.accidents),
    casualties: toNumber(row.casualties),
    serious: toNumber(row.serious),
    children: toNumber(row.children),
    elderly: toNumber(row.elderly),
    night: toRatio(row.night),
    commute: toRatio(row.commute),
    pm: toNumber(row.pm),
    weatherRisk: toRatio(row.weatherRisk),
    speedLimit: toNumber(row.speedLimit),
    schoolZone: toNumber(row.schoolZone),
    roadType: row.roadType || "미분류",
    signalDensity: toRatio(row.signalDensity),
    trafficVolume: toRatio(row.trafficVolume),
    note: row.note || "업로드한 공공데이터 지점입니다."
  })).filter((row) => Number.isFinite(row.lat) && Number.isFinite(row.lng));
}

function toNumber(value) {
  const number = Number(String(value).replace("%", ""));
  return Number.isFinite(number) ? number : 0;
}

function toRatio(value) {
  const number = toNumber(value);
  return number > 1 ? number / 100 : number;
}

function downloadSampleCsv() {
  const headers = ["id", "district", "area", "lat", "lng", "accidents", "casualties", "serious", "children", "elderly", "night", "commute", "pm", "weatherRisk", "speedLimit", "schoolZone", "roadType", "signalDensity", "trafficVolume", "note"];
  const lines = [
    headers.join(","),
    ...sampleData.map((row) => headers.map((key) => csvCell(row[key])).join(","))
  ];
  const blob = new Blob(["\ufeff" + lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "daejeon_traffic_risk_sample.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

render();

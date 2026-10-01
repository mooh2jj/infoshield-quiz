import type { MindmapSection } from "@/types/mindmap";

export const kecStandardsMindmap: MindmapSection = {
  id: "kec-standards",
  title: "전기설비기술기준 (KEC 전압·접지·보호·시설기준)",
  description: "KEC 전압 종별과 전선 색상 식별, 계통접지(TN·TT·IT) 방식, 누전차단기 감전보호 및 가공전선로 지표상 높이",
  chart: `mindmap
  root((전기설비기술기준))
    전압 종별 및 전선 규정
      전압 구분 기준
        voltageClassBox["KEC 전압 구분<br/>1) 저압: 교류(AC) 1,000V 이하, 직류(DC) 1,500V 이하<br/>2) 고압: 저압 초과 ~ 7,000V 이하<br/>3) 특고압: 7,000V 초과 (22.9kV, 154kV, 345kV, 765kV)"]
      전선 식별 색상
        wireColorBox["전선 식별 색상<br/>1) L1상: 갈색 (Brown)<br/>2) L2상: 흑색 (Black)<br/>3) L3상: 회색 (Grey)<br/>4) 중성선 N: 청색 (Blue)<br/>5) 보호도체 PE: 녹색-노란색 줄무늬 (Green-Yellow)"]
    KEC 접지 시스템
      접지 시스템 구분
        groundSystemBox["접지 시스템 분류<br/>1) 단독접지: 개별 설비 독립 접지<br/>2) 공통접지: 고압/특고압/저압 계통 접지극을 공통 연계<br/>3) 통합접지: 전력계통 + 통신설비 + 피뢰설비 통합 접지 (서지보호장치 SPD 필수)"]
      계통접지 3대 방식
        earthingTypeBox["계통접지 방식 (TN, TT, IT)<br/>1) TN-S: 전원 직접접지, N선과 PE선 전 구간 완전 분리<br/>2) TN-C: N선과 PE선이 PEN 겸용선으로 일체화<br/>3) TN-C-S: 전원측 일부 PEN, 부하측 일부 N/PE 분리<br/>4) TT: 전원 1점 직접접지, 기기 외함은 독립된 별도 접지극 접속<br/>5) IT: 전원 비접지(또는 고임피던스), 외함 개별 접지 (병원 수술실 무정전 전원)"]
    감전 및 과전류 보호설비
      감전보호 및 누전차단기
        shockProtectBox["감전보호와 RCD<br/>1) 직접접촉(기본보호): 충전부 절연, 격벽 또는 외함(IP2X/IPXXB 이상)<br/>2) 간접접촉(고장보호): 전원 자동 차단 (TN: Zs × Ia ≤ U0, TT: RA × Ia ≤ 50V)<br/>3) 누전차단기(인체감전): 정격감도전류 30mA 이하, 동작시간 0.03초 이내 고속형<br/>4) 물기 많은 장소(욕실): 정격감도전류 15mA 이하, 동작시간 0.03초 이내"]
      과전류 보호 협조
        overcurrentBox["배선 차단기와 도체 보호<br/>1) 설계전류 IB ≤ 보호장치 정격 In ≤ 케이블 허용전류 Iz<br/>2) 규약동작전류 I2 ≤ 1.45 Iz (도체 과부하 완전 보호)"]
    시설 기준 및 이격 거리
      가공전선로 지표상 높이
        lineHeightBox["가공전선 높이 기준<br/>1) 도로 횡단: 저·고압 6m 이상, 특고압 6m 이상 (철도 6.5m 공통)<br/>2) 횡단보도교: 저·고압 3.5m 이상 (절연전선 3m)<br/>3) 특고압(35kV 이하): 평지 5m 이상<br/>4) 특고압(160kV 이하): 6m 이상 (160kV 초과: 6m + 10kV당 12cm 가산)"]
      옥내배선 및 캡타이어 케이블
        indoorWiringBox["옥내배선 공사<br/>1) 금속관·합성수지관·가요전선관 공사<br/>2) 케이블 트레이 공사 (난연성 케이블)<br/>3) 분기회로: 과전류차단기는 분기점으로부터 3m 이내 시설 (단, 전선 허용전류 35% 이상 시 8m, 55% 이상 시 제한 없음)"]`,
};

"use client";

import React from "react";

interface AdspQuestionDiagramProps {
  questionId: string;
}

/**
 * ADsP 기출문제 전용 시각 다이어그램 / 차트 / 도표 컴포넌트
 * 각 문제 ID에 대응하는 정밀 벡터 SVG 도표를 렌더링합니다.
 */
export function AdspQuestionDiagram({ questionId }: AdspQuestionDiagramProps) {
  switch (questionId) {
    // -------------------------------------------------------------
    // [1번] SECI 모델 지식 변환 2x2 매트릭스
    // -------------------------------------------------------------
    case "adsp-48-001":
    case "adsp-47-001":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [SECI 모형 지식 변환 4단계 매트릭스]
          </div>
          <svg viewBox="0 0 540 230" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 상단/좌측 레이블 */}
            <text x="270" y="20" textAnchor="middle" className="fill-muted-foreground font-semibold">
              변환 후 지식 형태 (To)
            </text>
            <text x="180" y="42" textAnchor="middle" className="fill-foreground font-bold">
              암묵지 (Tacit)
            </text>
            <text x="380" y="42" textAnchor="middle" className="fill-foreground font-bold">
              형식지 (Explicit)
            </text>

            <text x="20" y="105" textAnchor="middle" className="fill-foreground font-bold">
              암묵지
            </text>
            <text x="20" y="120" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (From)
            </text>
            <text x="20" y="175" textAnchor="middle" className="fill-foreground font-bold">
              형식지
            </text>
            <text x="20" y="190" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (From)
            </text>

            {/* 그리드 박스 4개 */}
            {/* 공통화 */}
            <rect x="90" y="55" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="180" y="85" textAnchor="middle" className="fill-foreground font-bold text-sm">
              공통화 (Socialization)
            </text>
            <text x="180" y="105" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              암묵지 ➔ 암묵지 (경험·노하우 공유)
            </text>

            {/* 표출화 */}
            <rect x="290" y="55" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="380" y="85" textAnchor="middle" className="fill-foreground font-bold text-sm">
              표출화 (Externalization)
            </text>
            <text x="380" y="105" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              암묵지 ➔ 형식지 (개념화·문서화)
            </text>

            {/* 내면화 */}
            <rect x="90" y="135" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="180" y="165" textAnchor="middle" className="fill-foreground font-bold text-sm">
              내면화 (Internalization)
            </text>
            <text x="180" y="185" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              형식지 ➔ 암묵지 (학습·개인 체화)
            </text>

            {/* 연결화 (정답 하이라이트) */}
            <rect x="290" y="135" width="180" height="70" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="2" />
            <text x="380" y="165" textAnchor="middle" className="fill-primary font-bold text-sm">
              ★ 연결화 (Combination)
            </text>
            <text x="380" y="185" textAnchor="middle" className="fill-foreground font-medium text-[11px]">
              형식지 ➔ 형식지 (새로운 지식 조합·분류)
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [10번] 빅데이터 가치 패러다임 3단계 발전도
    // -------------------------------------------------------------
    case "adsp-48-010":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [빅데이터 가치 패러다임 변화 3단계 흐름]
          </div>
          <svg viewBox="0 0 540 100" className="w-full max-w-[500px] mx-auto text-xs">
            {/* Step 1: 디지털화 */}
            <rect x="10" y="20" width="145" height="60" rx="8" className="fill-muted/50 stroke-border" strokeWidth="1.5" />
            <text x="82" y="44" textAnchor="middle" className="fill-foreground font-bold text-sm">1. 디지털화</text>
            <text x="82" y="62" textAnchor="middle" className="fill-muted-foreground text-[10px]">Digitalization (정보화)</text>

            {/* 화살표 1 */}
            <path d="M 165 50 L 190 50 M 183 44 L 190 50 L 183 56" fill="none" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />

            {/* Step 2: 연결 */}
            <rect x="200" y="20" width="145" height="60" rx="8" className="fill-muted/50 stroke-border" strokeWidth="1.5" />
            <text x="272" y="44" textAnchor="middle" className="fill-foreground font-bold text-sm">2. 연결</text>
            <text x="272" y="62" textAnchor="middle" className="fill-muted-foreground text-[10px]">Connection (사물인터넷/통합)</text>

            {/* 화살표 2 */}
            <path d="M 355 50 L 380 50 M 373 44 L 380 50 L 373 56" fill="none" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />

            {/* Step 3: 에이전시 */}
            <rect x="390" y="20" width="140" height="60" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="2" />
            <text x="460" y="44" textAnchor="middle" className="fill-primary font-bold text-sm">3. 에이전시</text>
            <text x="460" y="62" textAnchor="middle" className="fill-foreground font-medium text-[10px]">Agency (지능형 대행·자율)</text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [11번] 분석 과제 발굴 4사분면 매트릭스 도표
    // -------------------------------------------------------------
    case "adsp-48-011":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [분석 과제 발굴 4사분면 매트릭스]
          </div>
          <svg viewBox="0 0 540 230" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 상단/좌측 축 레이블 */}
            <text x="270" y="20" textAnchor="middle" className="fill-muted-foreground font-semibold">
              분석 방법 (How)
            </text>
            <text x="180" y="40" textAnchor="middle" className="fill-foreground font-bold">
              알고 있음 (Known)
            </text>
            <text x="380" y="40" textAnchor="middle" className="fill-foreground font-bold">
              모름 (Unknown)
            </text>

            <text x="25" y="100" textAnchor="middle" className="fill-foreground font-bold">
              알고 있음
            </text>
            <text x="25" y="115" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (What)
            </text>
            <text x="25" y="170" textAnchor="middle" className="fill-foreground font-bold">
              모름
            </text>
            <text x="25" y="185" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (What)
            </text>

            {/* 그리드 4영역 */}
            {/* 최적화 */}
            <rect x="90" y="52" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="180" y="85" textAnchor="middle" className="fill-foreground font-bold text-sm">
              최적화 (Optimization)
            </text>
            <text x="180" y="104" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              What 앎 · How 앎
            </text>

            {/* 솔루션 */}
            <rect x="290" y="52" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="380" y="85" textAnchor="middle" className="fill-foreground font-bold text-sm">
              솔루션 (Solution)
            </text>
            <text x="380" y="104" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              What 앎 · How 모름
            </text>

            {/* 통찰 (정답 강조) */}
            <rect x="90" y="132" width="180" height="70" rx="8" className="fill-primary/15 stroke-primary" strokeWidth="2" />
            <text x="180" y="165" textAnchor="middle" className="fill-primary font-bold text-sm">
              ★ 통찰 (Insight)
            </text>
            <text x="180" y="184" textAnchor="middle" className="fill-foreground font-semibold text-[11px]">
              What 모름 · How 앎 (정답)
            </text>

            {/* 발견 */}
            <rect x="290" y="132" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="380" y="165" textAnchor="middle" className="fill-foreground font-bold text-sm">
              발견 (Discovery)
            </text>
            <text x="380" y="184" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              What 모름 · How 모름
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [15번] 분석 우선순위 평가 매트릭스 도표 (시급성 vs 난이도)
    // -------------------------------------------------------------
    case "adsp-48-015":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [분석 과제 우선순위 매트릭스 (시급성 vs 난이도)]
          </div>
          <svg viewBox="0 0 540 230" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 축 레이블 */}
            <text x="270" y="20" textAnchor="middle" className="fill-muted-foreground font-semibold">
              난이도 (Difficulty: 데이터 양·범위·신기술 도입 비용)
            </text>
            <text x="180" y="40" textAnchor="middle" className="fill-foreground font-bold">
              쉬움 (Easy / 낮음)
            </text>
            <text x="380" y="40" textAnchor="middle" className="fill-foreground font-bold">
              어려움 (Hard / 높음)
            </text>

            <text x="25" y="100" textAnchor="middle" className="fill-foreground font-bold">
              시급성
            </text>
            <text x="25" y="115" textAnchor="middle" className="fill-primary font-bold text-[10px]">
              (높음/현재)
            </text>
            <text x="25" y="170" textAnchor="middle" className="fill-foreground font-bold">
              시급성
            </text>
            <text x="25" y="185" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (낮음/중장기)
            </text>

            {/* 3사분면 (Quick-Win 1순위) */}
            <rect x="90" y="52" width="180" height="70" rx="8" className="fill-emerald-500/15 stroke-emerald-500" strokeWidth="2" />
            <text x="180" y="82" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-sm">
              [3사분면] 1순위 최우선
            </text>
            <text x="180" y="102" textAnchor="middle" className="fill-foreground font-medium text-[11px]">
              시급성 높음 · 난이도 쉬움 (Quick-Win)
            </text>

            {/* 1사분면 (2순위) */}
            <rect x="290" y="52" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="380" y="82" textAnchor="middle" className="fill-foreground font-bold text-sm">
              [1사분면] 2순위
            </text>
            <text x="380" y="102" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              시급성 높음 · 난이도 어려움
            </text>

            {/* 4사분면 (3순위) */}
            <rect x="90" y="132" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="180" y="162" textAnchor="middle" className="fill-foreground font-bold text-sm">
              [4사분면] 3순위
            </text>
            <text x="180" y="182" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              시급성 낮음 · 난이도 쉬움
            </text>

            {/* 2사분면 (최하위 4순위) */}
            <rect x="290" y="132" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="380" y="162" textAnchor="middle" className="fill-foreground font-bold text-sm">
              [2사분면] 4순위 (최하위)
            </text>
            <text x="380" y="182" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              시급성 낮음 · 난이도 어려움
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [21번] 사료 종류별 상자 그림 (R chickwts Box Plot) ★ 핵심
    // -------------------------------------------------------------
    case "adsp-48-021":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-bold text-foreground">
              [R chickwts] 사료 종류(feed)별 닭의 체중(weight, g) 분포 상자 그림
            </span>
            <span className="rounded bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
              실제 기출 도표 복원
            </span>
          </div>

          <svg viewBox="0 0 580 320" className="w-full max-w-[560px] mx-auto text-xs">
            {/* 배경 및 격자선 */}
            <line x1="70" y1="260" x2="550" y2="260" className="stroke-border" strokeWidth="1.5" />
            <line x1="70" y1="20" x2="70" y2="260" className="stroke-border" strokeWidth="1.5" />

            {/* Y축 눈금 (100, 200, 300, 400, 450) */}
            {/* scale: y = 260 - (val / 500) * 240 */}
            <text x="60" y="264" textAnchor="end" className="fill-muted-foreground text-[10px]">0</text>
            <line x1="66" y1="260" x2="550" y2="260" className="stroke-border/40" strokeDasharray="3 3" />

            <text x="60" y="216" textAnchor="end" className="fill-muted-foreground text-[10px]">100</text>
            <line x1="66" y1="212" x2="550" y2="212" className="stroke-border/40" strokeDasharray="3 3" />

            <text x="60" y="168" textAnchor="end" className="fill-muted-foreground text-[10px]">200</text>
            <line x1="66" y1="164" x2="550" y2="164" className="stroke-border/40" strokeDasharray="3 3" />

            <text x="60" y="120" textAnchor="end" className="fill-muted-foreground text-[10px]">300</text>
            <line x1="66" y1="116" x2="550" y2="116" className="stroke-border/40" strokeDasharray="3 3" />

            <text x="60" y="72" textAnchor="end" className="fill-primary font-bold text-[10px]">400</text>
            <line x1="66" y1="68" x2="550" y2="68" className="stroke-primary/50" strokeDasharray="4 2" />

            {/* Y축 레이블 */}
            <text x="25" y="140" textAnchor="middle" transform="rotate(-90 25 140)" className="fill-muted-foreground font-semibold text-[11px]">
              Weight (체중, g)
            </text>

            {/* 1. Casein (x = 110) */}
            {/* min 216(y=156), Q1 276(y=127), Med 323(y=105), Q3 380(y=77), max 404(y=66) */}
            <line x1="110" y1="66" x2="110" y2="77" className="stroke-foreground" strokeWidth="1.5" />
            <line x1="100" y1="66" x2="120" y2="66" className="stroke-foreground" strokeWidth="1.5" />
            <rect x="90" y="77" width="40" height="50" rx="3" className="fill-primary/20 stroke-primary" strokeWidth="1.5" />
            <line x1="90" y1="105" x2="130" y2="105" className="stroke-primary" strokeWidth="3" />
            <line x1="110" y1="127" x2="110" y2="156" className="stroke-foreground" strokeWidth="1.5" />
            <line x1="100" y1="156" x2="120" y2="156" className="stroke-foreground" strokeWidth="1.5" />
            <text x="110" y="280" textAnchor="middle" className="fill-foreground font-bold text-[11px]">casein</text>
            <text x="110" y="295" textAnchor="middle" className="fill-primary font-semibold text-[9px]">중앙값 최고(~323)</text>

            {/* 2. Horsebean (x = 190) */}
            {/* min 108(y=208), Q1 138(y=193), Med 151(y=187), Q3 177(y=175), max 227(y=151) */}
            <line x1="190" y1="151" x2="190" y2="175" className="stroke-foreground" strokeWidth="1.5" />
            <line x1="180" y1="151" x2="200" y2="151" className="stroke-foreground" strokeWidth="1.5" />
            <rect x="170" y="175" width="40" height="18" rx="3" className="fill-muted/50 stroke-border" strokeWidth="1.5" />
            <line x1="170" y1="187" x2="210" y2="187" className="stroke-foreground" strokeWidth="3" />
            <line x1="190" y1="193" x2="190" y2="208" className="stroke-foreground" strokeWidth="1.5" />
            <line x1="180" y1="208" x2="200" y2="208" className="stroke-foreground" strokeWidth="1.5" />
            <text x="190" y="280" textAnchor="middle" className="fill-foreground font-bold text-[11px]">horsebean</text>
            <text x="190" y="295" textAnchor="middle" className="fill-muted-foreground text-[9px]">전반적 무게 최저</text>

            {/* 3. Linseed (x = 270) */}
            {/* min 141(y=192), Q1 178(y=174), Med 221(y=154), Q3 258(y=136), max 309(y=112) */}
            <line x1="270" y1="112" x2="270" y2="136" className="stroke-foreground" strokeWidth="1.5" />
            <line x1="260" y1="112" x2="280" y2="112" className="stroke-foreground" strokeWidth="1.5" />
            <rect x="250" y="136" width="40" height="38" rx="3" className="fill-amber-500/15 stroke-amber-500" strokeWidth="1.5" />
            <line x1="250" y1="154" x2="290" y2="154" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="3" />
            <line x1="270" y1="174" x2="270" y2="192" className="stroke-foreground" strokeWidth="1.5" />
            <line x1="260" y1="192" x2="280" y2="192" className="stroke-foreground" strokeWidth="1.5" />
            <text x="270" y="280" textAnchor="middle" className="fill-foreground font-bold text-[11px]">linseed</text>
            <text x="270" y="295" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-semibold text-[9px]">관측수 알수없음(②정답)</text>

            {/* 4. Meatmeal (x = 350) */}
            {/* min 153(y=186), Q1 205(y=161), Med 263(y=133), Q3 315(y=108), max 380(y=77) */}
            <line x1="350" y1="77" x2="350" y2="108" className="stroke-foreground" strokeWidth="1.5" />
            <line x1="340" y1="77" x2="360" y2="77" className="stroke-foreground" strokeWidth="1.5" />
            <rect x="330" y="108" width="40" height="53" rx="3" className="fill-muted/50 stroke-border" strokeWidth="1.5" />
            <line x1="330" y1="133" x2="370" y2="133" className="stroke-foreground" strokeWidth="3" />
            <line x1="350" y1="161" x2="350" y2="186" className="stroke-foreground" strokeWidth="1.5" />
            <line x1="340" y1="186" x2="360" y2="186" className="stroke-foreground" strokeWidth="1.5" />
            <text x="350" y="280" textAnchor="middle" className="fill-foreground font-bold text-[11px]">meatmeal</text>

            {/* 5. Soybean (x = 430) */}
            {/* min 158(y=184), Q1 206(y=161), Med 248(y=140), Q3 285(y=123), max 329(y=102) */}
            <line x1="430" y1="102" x2="430" y2="123" className="stroke-foreground" strokeWidth="1.5" />
            <line x1="420" y1="102" x2="440" y2="102" className="stroke-foreground" strokeWidth="1.5" />
            <rect x="410" y="123" width="40" height="38" rx="3" className="fill-muted/50 stroke-border" strokeWidth="1.5" />
            <line x1="410" y1="140" x2="450" y2="140" className="stroke-foreground" strokeWidth="3" />
            <line x1="430" y1="161" x2="430" y2="184" className="stroke-foreground" strokeWidth="1.5" />
            <line x1="420" y1="184" x2="440" y2="184" className="stroke-foreground" strokeWidth="1.5" />
            <text x="430" y="280" textAnchor="middle" className="fill-foreground font-bold text-[11px]">soybean</text>

            {/* 6. Sunflower (x = 510) */}
            {/* min 226(y=151), Q1 270(y=130), Med 328(y=102), Q3 340(y=96), max 423(y=57 > 400!) */}
            <line x1="510" y1="57" x2="510" y2="96" className="stroke-emerald-500" strokeWidth="1.5" />
            <line x1="500" y1="57" x2="520" y2="57" className="stroke-emerald-500" strokeWidth="2" />
            {/* 400 초과 표시 */}
            <circle cx="510" cy="57" r="3.5" className="fill-emerald-500" />
            <text x="525" y="55" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-[10px]">최댓값 423 &gt; 400</text>

            <rect x="490" y="96" width="40" height="34" rx="3" className="fill-emerald-500/15 stroke-emerald-500" strokeWidth="1.5" />
            <line x1="490" y1="102" x2="530" y2="102" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="3" />
            <line x1="510" y1="130" x2="510" y2="151" className="stroke-emerald-500" strokeWidth="1.5" />
            <line x1="500" y1="151" x2="520" y2="151" className="stroke-emerald-500" strokeWidth="1.5" />
            <text x="510" y="280" textAnchor="middle" className="fill-foreground font-bold text-[11px]">sunflower</text>
            <text x="510" y="295" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-semibold text-[9px]">최댓값 &gt; 400</text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [29번] 회귀 잔차도 (Residuals vs Fitted Plot - 2차 곡선 U자 형태)
    // -------------------------------------------------------------
    case "adsp-48-029":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-bold text-foreground">
              [회귀 잔차도 (Residuals vs Fitted)] 2차 비선형(U-자형) 패턴 발견
            </span>
            <span className="rounded bg-destructive/10 px-2 py-0.5 text-[10px] font-semibold text-destructive">
              선형성 위배
            </span>
          </div>

          <svg viewBox="0 0 540 240" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 격자 및 축 */}
            <line x1="60" y1="200" x2="500" y2="200" className="stroke-border" strokeWidth="1.5" />
            <line x1="60" y1="30" x2="60" y2="200" className="stroke-border" strokeWidth="1.5" />

            {/* 잔차 = 0 기준선 */}
            <line x1="60" y1="115" x2="500" y2="115" className="stroke-muted-foreground/60" strokeDasharray="4 4" strokeWidth="1.5" />
            <text x="50" y="119" textAnchor="end" className="fill-muted-foreground font-bold text-[10px]">e = 0</text>
            <text x="50" y="45" textAnchor="end" className="fill-muted-foreground text-[10px]">+20</text>
            <text x="50" y="190" textAnchor="end" className="fill-muted-foreground text-[10px]">-20</text>

            <text x="280" y="225" textAnchor="middle" className="fill-muted-foreground font-medium text-[11px]">
              적합값 (Fitted values: ŷ)
            </text>
            <text x="25" y="115" textAnchor="middle" transform="rotate(-90 25 115)" className="fill-muted-foreground font-medium text-[11px]">
              잔차 (Residuals: $e$)
            </text>

            {/* 잔차 산점도 점들 (U자 형태 분포) */}
            {/* 좌측 (+ 잔차) */}
            <circle cx="85" cy="50" r="3" className="fill-primary" />
            <circle cx="105" cy="65" r="3" className="fill-primary" />
            <circle cx="130" cy="80" r="3" className="fill-primary" />
            <circle cx="150" cy="70" r="3" className="fill-primary" />
            <circle cx="170" cy="100" r="3" className="fill-primary" />

            {/* 중앙 바닥 (- 잔차) */}
            <circle cx="210" cy="145" r="3" className="fill-primary" />
            <circle cx="240" cy="165" r="3" className="fill-primary" />
            <circle cx="270" cy="175" r="3" className="fill-primary" />
            <circle cx="300" cy="160" r="3" className="fill-primary" />
            <circle cx="330" cy="140" r="3" className="fill-primary" />

            {/* 우측 (+ 잔차) */}
            <circle cx="370" cy="105" r="3" className="fill-primary" />
            <circle cx="400" cy="75" r="3" className="fill-primary" />
            <circle cx="430" cy="60" r="3" className="fill-primary" />
            <circle cx="455" cy="55" r="3" className="fill-primary" />
            <circle cx="480" cy="45" r="3" className="fill-primary" />

            {/* U자 곡선 추세선 (적색 파선) */}
            <path
              d="M 80 50 Q 275 220 485 45"
              fill="none"
              className="stroke-destructive"
              strokeWidth="2.5"
              strokeDasharray="6 3"
            />
            <text x="275" y="95" textAnchor="middle" className="fill-destructive font-bold text-xs">
              U-자형 비선형 곡선 패턴 발견!
            </text>
          </svg>
          <div className="mt-1 text-center text-xs text-muted-foreground">
            💡 잔차도가 U자 곡선을 나타내면 선형 모형이 아닌 <strong className="text-foreground">다항 회귀(Polynomial Regression)</strong> 모형을 적용해야 합니다.
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // [36번] 전통적 시계열 분해법(Decomposition) 4대 요소
    // -------------------------------------------------------------
    case "adsp-48-036":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [전통적 시계열 분해법 (Decomposition) 4대 구성 요인]
          </div>
          <svg viewBox="0 0 540 180" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 원계열 = 추세 + 계절 + 순환 + 불규칙 */}
            <rect x="20" y="15" width="115" height="65" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
            <text x="77" y="40" textAnchor="middle" className="fill-primary font-bold text-xs">1. 추세 요인</text>
            <text x="77" y="55" textAnchor="middle" className="fill-foreground font-medium text-[11px]">(Trend: T)</text>
            <text x="77" y="70" textAnchor="middle" className="fill-muted-foreground text-[9px]">장기적 변동</text>

            <rect x="150" y="15" width="115" height="65" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
            <text x="207" y="40" textAnchor="middle" className="fill-primary font-bold text-xs">2. 계절 요인</text>
            <text x="207" y="55" textAnchor="middle" className="fill-foreground font-medium text-[11px]">(Seasonal: S)</text>
            <text x="207" y="70" textAnchor="middle" className="fill-muted-foreground text-[9px]">고정 주기 변동</text>

            <rect x="280" y="15" width="115" height="65" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
            <text x="337" y="40" textAnchor="middle" className="fill-primary font-bold text-xs">3. 순환 요인</text>
            <text x="337" y="55" textAnchor="middle" className="fill-foreground font-medium text-[11px]">(Cyclical: C)</text>
            <text x="337" y="70" textAnchor="middle" className="fill-muted-foreground text-[9px]">불규칙 주기 변동</text>

            <rect x="410" y="15" width="115" height="65" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
            <text x="467" y="40" textAnchor="middle" className="fill-primary font-bold text-xs">4. 불규칙 요인</text>
            <text x="467" y="55" textAnchor="middle" className="fill-foreground font-medium text-[11px]">(Irregular: I)</text>
            <text x="467" y="70" textAnchor="middle" className="fill-muted-foreground text-[9px]">무작위 오차</text>

            {/* 오답 규칙 요인 경고 */}
            <rect x="70" y="105" width="400" height="55" rx="8" className="fill-destructive/10 stroke-destructive" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x="270" y="128" textAnchor="middle" className="fill-destructive font-bold text-xs">
              ⚠️ 주의: &apos;규칙 요인(Regular)&apos;은 시계열 분해법에 존재하지 않는 오답입니다!
            </text>
            <text x="270" y="146" textAnchor="middle" className="fill-foreground text-[10px]">
              시계열 4대 분해식: Yt = Tt + St + Ct + It (가법 모형) 또는 Yt = Tt × St × Ct × It (승법 모형)
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [40번] 정형 데이터마이닝 5단계 표준 수행 절차 순서도
    // -------------------------------------------------------------
    case "adsp-48-040":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [정형 데이터마이닝 표준 5단계 수행 절차]
          </div>
          <svg viewBox="0 0 540 100" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 1. 목적 정의 */}
            <rect x="5" y="20" width="88" height="60" rx="8" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
            <text x="49" y="44" textAnchor="middle" className="fill-foreground font-bold text-[11px]">1. 목적 정의</text>
            <text x="49" y="60" textAnchor="middle" className="fill-muted-foreground text-[9px]">(가. 문제 정의)</text>

            <path d="M 98 50 L 110 50 M 106 46 L 110 50 L 106 54" fill="none" className="stroke-primary" strokeWidth="2" />

            {/* 2. 데이터 준비 */}
            <rect x="114" y="20" width="88" height="60" rx="8" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
            <text x="158" y="44" textAnchor="middle" className="fill-foreground font-bold text-[11px]">2. 데이터 준비</text>
            <text x="158" y="60" textAnchor="middle" className="fill-muted-foreground text-[9px]">(나. 수집/적재)</text>

            <path d="M 206 50 L 218 50 M 214 46 L 218 50 L 214 54" fill="none" className="stroke-primary" strokeWidth="2" />

            {/* 3. 데이터 가공 */}
            <rect x="222" y="20" width="88" height="60" rx="8" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
            <text x="266" y="44" textAnchor="middle" className="fill-foreground font-bold text-[11px]">3. 데이터 가공</text>
            <text x="266" y="60" textAnchor="middle" className="fill-muted-foreground text-[9px]">(다. 전처리/변수)</text>

            <path d="M 314 50 L 326 50 M 322 46 L 326 50 L 322 54" fill="none" className="stroke-primary" strokeWidth="2" />

            {/* 4. 기법 적용 */}
            <rect x="330" y="20" width="95" height="60" rx="8" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
            <text x="377" y="44" textAnchor="middle" className="fill-foreground font-bold text-[11px]">4. 기법 적용</text>
            <text x="377" y="60" textAnchor="middle" className="fill-muted-foreground text-[9px]">(라. 모델링)</text>

            <path d="M 429 50 L 441 50 M 437 46 L 441 50 L 437 54" fill="none" className="stroke-primary" strokeWidth="2" />

            {/* 5. 검증 및 평가 */}
            <rect x="445" y="20" width="90" height="60" rx="8" className="fill-emerald-500/15 stroke-emerald-500" strokeWidth="2" />
            <text x="490" y="44" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-[11px]">5. 검증·평가</text>
            <text x="490" y="60" textAnchor="middle" className="fill-foreground text-[9px]">(마. 최종 평가)</text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [42번] 인공신경망 퍼셉트론 / 활성화 함수 구조도
    // -------------------------------------------------------------
    case "adsp-48-042":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [인공신경망 뉴런 구조: 가중합과 활성화 함수(Activation Function)]
          </div>
          <svg viewBox="0 0 540 200" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 입력 신호들 */}
            <circle cx="60" cy="50" r="18" className="fill-muted/60 stroke-border" strokeWidth="1.5" />
            <text x="60" y="54" textAnchor="middle" className="fill-foreground font-bold">x1</text>

            <circle cx="60" cy="100" r="18" className="fill-muted/60 stroke-border" strokeWidth="1.5" />
            <text x="60" y="104" textAnchor="middle" className="fill-foreground font-bold">x2</text>

            <circle cx="60" cy="150" r="18" className="fill-muted/60 stroke-border" strokeWidth="1.5" />
            <text x="60" y="154" textAnchor="middle" className="fill-foreground font-bold">xn</text>

            {/* 편향 bias */}
            <circle cx="160" cy="20" r="14" className="fill-muted/40 stroke-border" strokeWidth="1" />
            <text x="160" y="24" textAnchor="middle" className="fill-muted-foreground text-[10px]">bias b</text>

            {/* 연결선과 가중치 */}
            <line x1="78" y1="50" x2="200" y2="100" className="stroke-border" strokeWidth="1.5" />
            <text x="125" y="65" textAnchor="middle" className="fill-muted-foreground text-[10px]">w1</text>

            <line x1="78" y1="100" x2="200" y2="100" className="stroke-border" strokeWidth="1.5" />
            <text x="135" y="94" textAnchor="middle" className="fill-muted-foreground text-[10px]">w2</text>

            <line x1="78" y1="150" x2="200" y2="100" className="stroke-border" strokeWidth="1.5" />
            <text x="125" y="140" textAnchor="middle" className="fill-muted-foreground text-[10px]">wn</text>

            <line x1="174" y1="20" x2="230" y2="70" className="stroke-border" strokeWidth="1.5" strokeDasharray="2 2" />

            {/* 뉴런 연산 본체 (원) */}
            {/* 좌측: 가중합 */}
            <path d="M 260 40 A 60 60 0 0 0 260 160 Z" className="fill-muted/60 stroke-border" strokeWidth="1.5" />
            <text x="235" y="97" textAnchor="middle" className="fill-foreground font-bold text-sm">Σ</text>
            <text x="235" y="112" textAnchor="middle" className="fill-muted-foreground text-[9px]">w_i x_i + b</text>

            {/* 우측: 활성화 함수 (정답 하이라이트) */}
            <path d="M 260 40 A 60 60 0 0 1 260 160 Z" className="fill-primary/20 stroke-primary" strokeWidth="2" />
            <text x="285" y="97" textAnchor="middle" className="fill-primary font-bold text-sm">f(·)</text>
            <text x="285" y="112" textAnchor="middle" className="fill-foreground font-bold text-[9px]">활성화 함수</text>

            {/* 출력선 */}
            <line x1="320" y1="100" x2="420" y2="100" className="stroke-primary" strokeWidth="2.5" />
            <polygon points="420,95 430,100 420,105" className="fill-primary" />

            {/* 출력 노드 */}
            <rect x="435" y="75" width="85" height="50" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
            <text x="477" y="97" textAnchor="middle" className="fill-primary font-bold text-sm">출력 y</text>
            <text x="477" y="112" textAnchor="middle" className="fill-muted-foreground text-[9px]">비선형 신호 강도</text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [44번] 이진분류 혼동행렬 (Confusion Matrix) & F1-Score
    // -------------------------------------------------------------
    case "adsp-48-044":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [이진분류 혼동행렬(Confusion Matrix)과 조화평균 F1-Score]
          </div>
          <svg viewBox="0 0 540 220" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 상단 레이블: 예측값 */}
            <text x="220" y="20" textAnchor="middle" className="fill-muted-foreground font-semibold">
              예측 클래스 (Predicted)
            </text>
            <text x="160" y="40" textAnchor="middle" className="fill-foreground font-bold">Positive (참)</text>
            <text x="280" y="40" textAnchor="middle" className="fill-foreground font-bold">Negative (거짓)</text>

            {/* 좌측 레이블: 실제값 */}
            <text x="25" y="100" textAnchor="middle" className="fill-foreground font-bold">실제 Positive</text>
            <text x="25" y="160" textAnchor="middle" className="fill-foreground font-bold">실제 Negative</text>

            {/* 2x2 셀 */}
            {/* TP */}
            <rect x="100" y="52" width="120" height="55" rx="6" className="fill-emerald-500/15 stroke-emerald-500" strokeWidth="1.5" />
            <text x="160" y="76" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-sm">TP</text>
            <text x="160" y="94" textAnchor="middle" className="fill-muted-foreground text-[10px]">True Positive</text>

            {/* FN */}
            <rect x="230" y="52" width="120" height="55" rx="6" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="290" y="76" textAnchor="middle" className="fill-foreground font-bold text-sm">FN</text>
            <text x="290" y="94" textAnchor="middle" className="fill-muted-foreground text-[10px]">False Negative</text>

            {/* FP */}
            <rect x="100" y="117" width="120" height="55" rx="6" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="160" y="141" textAnchor="middle" className="fill-foreground font-bold text-sm">FP</text>
            <text x="160" y="159" textAnchor="middle" className="fill-muted-foreground text-[10px]">False Positive</text>

            {/* TN */}
            <rect x="230" y="117" width="120" height="55" rx="6" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="290" y="141" textAnchor="middle" className="fill-foreground font-bold text-sm">TN</text>
            <text x="290" y="159" textAnchor="middle" className="fill-muted-foreground text-[10px]">True Negative</text>

            {/* 우측 공식 카드: F1-Score */}
            <rect x="370" y="52" width="160" height="120" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="2" />
            <text x="450" y="78" textAnchor="middle" className="fill-primary font-bold text-sm">★ F1-Score</text>
            <text x="450" y="100" textAnchor="middle" className="fill-foreground font-medium text-[11px]">
              정밀도와 재현율의
            </text>
            <text x="450" y="118" textAnchor="middle" className="fill-primary font-bold text-xs">
              조화평균 (Harmonic)
            </text>
            <text x="450" y="145" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              2 × (P × R) / (P + R)
            </text>
            <text x="450" y="160" textAnchor="middle" className="fill-foreground font-semibold text-[9px]">
              불균형 데이터 필수 지표
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [47회 14번] 분석 과제 발굴 4사분면 매트릭스 (Solution 하이라이트)
    // -------------------------------------------------------------
    case "adsp-47-014":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [분석 과제 발굴 4사분면 매트릭스]
          </div>
          <svg viewBox="0 0 540 230" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 상단/좌측 축 레이블 */}
            <text x="270" y="20" textAnchor="middle" className="fill-muted-foreground font-semibold">
              분석 방법 (How)
            </text>
            <text x="180" y="40" textAnchor="middle" className="fill-foreground font-bold">
              알고 있음 (Known)
            </text>
            <text x="380" y="40" textAnchor="middle" className="fill-foreground font-bold">
              모름 (Unknown)
            </text>

            <text x="25" y="100" textAnchor="middle" className="fill-foreground font-bold">
              알고 있음
            </text>
            <text x="25" y="115" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (What)
            </text>
            <text x="25" y="170" textAnchor="middle" className="fill-foreground font-bold">
              모름
            </text>
            <text x="25" y="185" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (What)
            </text>

            {/* 그리드 4영역 */}
            {/* 최적화 */}
            <rect x="90" y="52" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="180" y="85" textAnchor="middle" className="fill-foreground font-bold text-sm">
              최적화 (Optimization)
            </text>
            <text x="180" y="104" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              What 앎 · How 앎
            </text>

            {/* 솔루션 (정답 강조) */}
            <rect x="290" y="52" width="180" height="70" rx="8" className="fill-primary/15 stroke-primary" strokeWidth="2" />
            <text x="380" y="85" textAnchor="middle" className="fill-primary font-bold text-sm">
              ★ 솔루션 (Solution)
            </text>
            <text x="380" y="104" textAnchor="middle" className="fill-foreground font-semibold text-[11px]">
              What 앎 · How 모름 (정답)
            </text>

            {/* 통찰 */}
            <rect x="90" y="132" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="180" y="165" textAnchor="middle" className="fill-foreground font-bold text-sm">
              통찰 (Insight)
            </text>
            <text x="180" y="184" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              What 모름 · How 앎
            </text>

            {/* 발견 */}
            <rect x="290" y="132" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="380" y="165" textAnchor="middle" className="fill-foreground font-bold text-sm">
              발견 (Discovery)
            </text>
            <text x="380" y="184" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              What 모름 · How 모름
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [47회 17번] 분석 수준 진단 4사분면 (준비도 vs 성숙도 - 정착형)
    // -------------------------------------------------------------
    case "adsp-47-017":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [데이터 분석 수준 진단: 준비도(Readiness) vs 성숙도(Maturity)]
          </div>
          <svg viewBox="0 0 540 230" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 축 레이블 */}
            <text x="270" y="20" textAnchor="middle" className="fill-muted-foreground font-semibold">
              분석 성숙도 (Maturity: 비즈니스·조직역량·IT)
            </text>
            <text x="180" y="40" textAnchor="middle" className="fill-foreground font-bold">
              낮음 (Low)
            </text>
            <text x="380" y="40" textAnchor="middle" className="fill-foreground font-bold">
              높음 (High)
            </text>

            <text x="25" y="100" textAnchor="middle" className="fill-foreground font-bold">
              높음
            </text>
            <text x="25" y="115" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (준비도)
            </text>
            <text x="25" y="170" textAnchor="middle" className="fill-foreground font-bold">
              낮음
            </text>
            <text x="25" y="185" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (준비도)
            </text>

            {/* 1. 정착형 (정답: 준비도 높음, 성숙도 낮음) */}
            <rect x="90" y="52" width="180" height="70" rx="8" className="fill-primary/15 stroke-primary" strokeWidth="2" />
            <text x="180" y="85" textAnchor="middle" className="fill-primary font-bold text-sm">
              ★ 정착형 (Settle)
            </text>
            <text x="180" y="104" textAnchor="middle" className="fill-foreground font-semibold text-[11px]">
              준비도 높음 · 성숙도 낮음 (정답)
            </text>

            {/* 2. 확산형 (준비도 높음, 성숙도 높음) */}
            <rect x="290" y="52" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="380" y="85" textAnchor="middle" className="fill-foreground font-bold text-sm">
              확산형 (Spread)
            </text>
            <text x="380" y="104" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              준비도 높음 · 성숙도 높음
            </text>

            {/* 3. 준비형 (준비도 낮음, 성숙도 낮음) */}
            <rect x="90" y="132" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="180" y="165" textAnchor="middle" className="fill-foreground font-bold text-sm">
              준비형 (Preparation)
            </text>
            <text x="180" y="184" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              준비도 낮음 · 성숙도 낮음
            </text>

            {/* 4. 도입형 (준비도 낮음, 성숙도 높음) */}
            <rect x="290" y="132" width="180" height="70" rx="8" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="380" y="165" textAnchor="middle" className="fill-foreground font-bold text-sm">
              도입형 (Introduction)
            </text>
            <text x="380" y="184" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              준비도 낮음 · 성숙도 높음
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [47회 23번] 상자수염그림 안쪽 울타리(Inner Fence) 계산 도표
    // -------------------------------------------------------------
    case "adsp-47-023":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [상자수염그림(Box Plot) 안쪽 울타리(Inner Fence) 계산 구조]
          </div>
          <svg viewBox="0 0 540 220" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 수평 축 */}
            <line x1="50" y1="130" x2="490" y2="130" className="stroke-border" strokeWidth="1.5" />

            {/* 하한 울타리 (Lower Fence = -8) */}
            <line x1="80" y1="100" x2="80" y2="160" className="stroke-destructive" strokeWidth="2" strokeDasharray="4 2" />
            <text x="80" y="90" textAnchor="middle" className="fill-destructive font-bold text-xs">
              하한: -8
            </text>
            <text x="80" y="178" textAnchor="middle" className="fill-destructive text-[10px]">
              Q1 - 1.5×IQR
            </text>
            <text x="80" y="192" textAnchor="middle" className="fill-muted-foreground text-[9px]">
              (4 - 12 = -8)
            </text>

            {/* 수염 왼쪽 선 */}
            <line x1="80" y1="130" x2="190" y2="130" className="stroke-foreground" strokeWidth="1.5" />

            {/* 상자 (Q1=4, Q3=12) */}
            <rect x="190" y="95" width="160" height="70" rx="4" className="fill-primary/15 stroke-primary" strokeWidth="2" />
            <text x="190" y="85" textAnchor="middle" className="fill-foreground font-bold text-xs">
              Q1 = 4
            </text>
            <text x="350" y="85" textAnchor="middle" className="fill-foreground font-bold text-xs">
              Q3 = 12
            </text>

            {/* 중앙값 line */}
            <line x1="260" y1="95" x2="260" y2="165" className="stroke-primary" strokeWidth="2.5" />
            <text x="260" y="85" textAnchor="middle" className="fill-primary font-bold text-[11px]">
              Median
            </text>

            {/* IQR 표시 (Q3 - Q1 = 8) */}
            <line x1="190" y1="180" x2="350" y2="180" className="stroke-primary" strokeWidth="1.5" />
            <path d="M 190 176 L 190 184 M 350 176 L 350 184" className="stroke-primary" strokeWidth="1.5" />
            <text x="270" y="196" textAnchor="middle" className="fill-primary font-bold text-[11px]">
              IQR = Q3 - Q1 = 8 (1.5 × IQR = 12)
            </text>

            {/* 수염 오른쪽 선 */}
            <line x1="350" y1="130" x2="460" y2="130" className="stroke-foreground" strokeWidth="1.5" />

            {/* 상한 울타리 (Upper Fence = 24) */}
            <line x1="460" y1="100" x2="460" y2="160" className="stroke-destructive" strokeWidth="2" strokeDasharray="4 2" />
            <text x="460" y="90" textAnchor="middle" className="fill-destructive font-bold text-xs">
              상한: 24
            </text>
            <text x="460" y="178" textAnchor="middle" className="fill-destructive text-[10px]">
              Q3 + 1.5×IQR
            </text>
            <text x="460" y="192" textAnchor="middle" className="fill-muted-foreground text-[9px]">
              (12 + 12 = 24)
            </text>
          </svg>
          <div className="mt-1 text-center text-xs text-muted-foreground">
            정답: 하한 <strong className="text-foreground">-8</strong>, 상한 <strong className="text-foreground">24</strong> (울타리 밖 데이터는 이상치 처리)
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // [47회 26번] 오른쪽 꼬리가 긴 비대칭 분포 (양의 왜도: 최빈값 < 중앙값 < 평균)
    // -------------------------------------------------------------
    case "adsp-47-026":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [오른쪽 꼬리가 긴 분포 (양의 왜도, Right-Skewed) 대푯값 대소 관계]
          </div>
          <svg viewBox="0 0 540 220" className="w-full max-w-[500px] mx-auto text-xs">
            {/* X축 */}
            <line x1="50" y1="180" x2="490" y2="180" className="stroke-border" strokeWidth="1.5" />

            {/* 오른쪽 꼬리 곡선 (피크는 왼쪽, 오른쪽으로 길게 완만하게 뻗음) */}
            <path
              d="M 60 180 C 110 180, 140 40, 160 40 C 190 40, 230 140, 480 180"
              fill="none"
              className="stroke-primary"
              strokeWidth="2.5"
            />
            <path
              d="M 60 180 C 110 180, 140 40, 160 40 C 190 40, 230 140, 480 180 Z"
              className="fill-primary/10"
            />

            {/* 1. 최빈값 (Mode) - 정점 x=160 */}
            <line x1="160" y1="40" x2="160" y2="180" className="stroke-indigo-500" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="160" cy="40" r="4" className="fill-indigo-500" />
            <text x="160" y="196" textAnchor="middle" className="fill-indigo-600 dark:fill-indigo-400 font-bold text-xs">
              최빈값
            </text>
            <text x="160" y="210" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (Mode: 정점)
            </text>

            {/* 2. 중앙값 (Median) - x=210 */}
            <line x1="210" y1="90" x2="210" y2="180" className="stroke-amber-500" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="210" cy="90" r="4" className="fill-amber-500" />
            <text x="210" y="196" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs">
              중앙값
            </text>
            <text x="210" y="210" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (Median: 50%)
            </text>

            {/* 3. 평균 (Mean) - x=270 (우측 이상치에 끌려감) */}
            <line x1="270" y1="130" x2="270" y2="180" className="stroke-rose-500" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="270" cy="130" r="4" className="fill-rose-500" />
            <text x="270" y="196" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-bold text-xs">
              평균
            </text>
            <text x="270" y="210" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              (Mean: 우측 이동)
            </text>

            {/* 요약 카드 */}
            <rect x="330" y="45" width="180" height="75" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
            <text x="420" y="68" textAnchor="middle" className="fill-primary font-bold text-xs">
              ★ 대소 관계 공식
            </text>
            <text x="420" y="88" textAnchor="middle" className="fill-foreground font-extrabold text-sm">
              최빈값 &lt; 중앙값 &lt; 평균
            </text>
            <text x="420" y="106" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              왜도 &gt; 0 (오른쪽 꼬리)
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [47회 30번] 주성분 분석(PCA) 스크리 산점도(Scree Plot) & 엘보우 지점
    // -------------------------------------------------------------
    case "adsp-47-030":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [주성분 분석(PCA) 스크리 산점도 (Scree Plot)와 엘보우 지점]
          </div>
          <svg viewBox="0 0 540 220" className="w-full max-w-[500px] mx-auto text-xs">
            {/* X, Y 축 */}
            <line x1="60" y1="180" x2="490" y2="180" className="stroke-border" strokeWidth="1.5" />
            <line x1="60" y1="30" x2="60" y2="180" className="stroke-border" strokeWidth="1.5" />

            <text x="275" y="205" textAnchor="middle" className="fill-muted-foreground font-semibold text-[11px]">
              주성분 번호 (Principal Component Number)
            </text>
            <text x="25" y="105" textAnchor="middle" transform="rotate(-90 25 105)" className="fill-muted-foreground font-semibold text-[11px]">
              고유값 (Eigenvalue)
            </text>

            {/* 고유값 1 기준선 (Kaiser rule) */}
            <line x1="60" y1="130" x2="490" y2="130" className="stroke-muted-foreground/40" strokeDasharray="3 3" />
            <text x="50" y="134" textAnchor="end" className="fill-muted-foreground text-[10px]">λ = 1</text>

            {/* 포인트 좌표들: PC1(100, 45), PC2(180, 85), PC3(260, 135), PC4(340, 155), PC5(420, 165) */}
            <polyline
              points="100,45 180,85 260,135 340,155 420,165"
              fill="none"
              className="stroke-primary"
              strokeWidth="2.5"
            />

            {/* 점 1 */}
            <circle cx="100" cy="45" r="5" className="fill-primary" />
            <text x="100" y="35" textAnchor="middle" className="fill-foreground font-bold text-[10px]">PC1 (λ=3.2)</text>
            <text x="100" y="195" textAnchor="middle" className="fill-muted-foreground text-[10px]">1</text>

            {/* 점 2 */}
            <circle cx="180" cy="85" r="5" className="fill-primary" />
            <text x="180" y="75" textAnchor="middle" className="fill-foreground font-bold text-[10px]">PC2 (λ=2.1)</text>
            <text x="180" y="195" textAnchor="middle" className="fill-muted-foreground text-[10px]">2</text>

            {/* 점 3 (Elbow 지점) */}
            <circle cx="260" cy="135" r="7" className="fill-emerald-500 stroke-card" strokeWidth="2" />
            <text x="260" y="122" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-[11px]">
              ★ Elbow 지점
            </text>
            <text x="260" y="195" textAnchor="middle" className="fill-foreground font-bold text-[10px]">3</text>

            {/* 점 4 */}
            <circle cx="340" cy="155" r="5" className="fill-primary" />
            <text x="340" y="195" textAnchor="middle" className="fill-muted-foreground text-[10px]">4</text>

            {/* 점 5 */}
            <circle cx="420" cy="165" r="5" className="fill-primary" />
            <text x="420" y="195" textAnchor="middle" className="fill-muted-foreground text-[10px]">5</text>

            {/* 설명 주석 */}
            <rect x="310" y="45" width="180" height="60" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
            <text x="400" y="68" textAnchor="middle" className="fill-primary font-bold text-xs">
              스크리 산점도 (Scree Plot)
            </text>
            <text x="400" y="88" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              경사가 완만해지는 지점에서 컷!
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [47회 41번] 다중 분류 활성화 함수 소프트맥스 (Softmax)
    // -------------------------------------------------------------
    case "adsp-47-041":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [다중 분류 신경망 출력층: 소프트맥스(Softmax) 확률 변환]
          </div>
          <svg viewBox="0 0 540 190" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 입력 로짓 (Logits z) */}
            <rect x="30" y="30" width="90" height="35" rx="6" className="fill-muted/60 stroke-border" strokeWidth="1.5" />
            <text x="75" y="52" textAnchor="middle" className="fill-foreground font-bold">z1 = 2.0</text>

            <rect x="30" y="75" width="90" height="35" rx="6" className="fill-muted/60 stroke-border" strokeWidth="1.5" />
            <text x="75" y="97" textAnchor="middle" className="fill-foreground font-bold">z2 = 1.0</text>

            <rect x="30" y="120" width="90" height="35" rx="6" className="fill-muted/60 stroke-border" strokeWidth="1.5" />
            <text x="75" y="142" textAnchor="middle" className="fill-foreground font-bold">z3 = 0.1</text>

            {/* 화살표들 */}
            <path d="M 125 47 L 175 90 M 125 92 L 175 92 M 125 137 L 175 95" fill="none" className="stroke-border" strokeWidth="1.5" />

            {/* 소프트맥스 변환기 박스 */}
            <rect x="180" y="30" width="160" height="125" rx="8" className="fill-primary/15 stroke-primary" strokeWidth="2" />
            <text x="260" y="60" textAnchor="middle" className="fill-primary font-bold text-sm">
              ★ Softmax 함수
            </text>
            <text x="260" y="85" textAnchor="middle" className="fill-foreground font-semibold text-xs">
              P(y=k) = e^(z_k) / Σ e^(z_j)
            </text>
            <text x="260" y="115" textAnchor="middle" className="fill-muted-foreground text-[11px]">
              모든 출력값을 (0, 1) 확률로 변환
            </text>
            <text x="260" y="135" textAnchor="middle" className="fill-primary font-bold text-xs">
              총합(Sum) = 1.0 (100%)
            </text>

            {/* 화살표들 */}
            <path d="M 345 90 L 390 47 M 345 92 L 390 92 M 345 95 L 390 137" fill="none" className="stroke-primary" strokeWidth="1.5" />

            {/* 최종 확률 출력 */}
            <rect x="395" y="30" width="115" height="35" rx="6" className="fill-emerald-500/15 stroke-emerald-500" strokeWidth="1.5" />
            <text x="452" y="52" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold">P(Class 1) = 0.7</text>

            <rect x="395" y="75" width="115" height="35" rx="6" className="fill-muted/60 stroke-border" strokeWidth="1.5" />
            <text x="452" y="97" textAnchor="middle" className="fill-foreground font-bold">P(Class 2) = 0.2</text>

            <rect x="395" y="120" width="115" height="35" rx="6" className="fill-muted/60 stroke-border" strokeWidth="1.5" />
            <text x="452" y="142" textAnchor="middle" className="fill-foreground font-bold">P(Class 3) = 0.1</text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [47회 44번] 혼동행렬(Confusion Matrix) 기반 정밀도(Precision) 계산
    // -------------------------------------------------------------
    case "adsp-47-044":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [혼동행렬(Confusion Matrix)과 정밀도(Precision) 산출]
          </div>
          <svg viewBox="0 0 540 220" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 상단 레이블: 예측값 */}
            <text x="210" y="20" textAnchor="middle" className="fill-muted-foreground font-semibold">
              예측 클래스 (Predicted)
            </text>
            <text x="150" y="40" textAnchor="middle" className="fill-primary font-bold">Positive (예측 참)</text>
            <text x="270" y="40" textAnchor="middle" className="fill-foreground font-bold">Negative (예측 거짓)</text>

            {/* 좌측 레이블: 실제값 */}
            <text x="25" y="85" textAnchor="middle" className="fill-foreground font-bold">실제 Positive</text>
            <text x="25" y="145" textAnchor="middle" className="fill-foreground font-bold">실제 Negative</text>

            {/* 2x2 셀 */}
            {/* TP = 40 (하이라이트) */}
            <rect x="90" y="52" width="120" height="55" rx="6" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="2" />
            <text x="150" y="78" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-base">TP = 40</text>
            <text x="150" y="96" textAnchor="middle" className="fill-muted-foreground text-[10px]">실제 참 &amp; 예측 참</text>

            {/* FN = 20 */}
            <rect x="220" y="52" width="120" height="55" rx="6" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="280" y="78" textAnchor="middle" className="fill-foreground font-bold text-base">FN = 20</text>
            <text x="280" y="96" textAnchor="middle" className="fill-muted-foreground text-[10px]">실제 참 &amp; 예측 거짓</text>

            {/* FP = 10 (하이라이트) */}
            <rect x="90" y="117" width="120" height="55" rx="6" className="fill-amber-500/20 stroke-amber-500" strokeWidth="2" />
            <text x="150" y="143" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-base">FP = 10</text>
            <text x="150" y="161" textAnchor="middle" className="fill-muted-foreground text-[10px]">실제 거짓 &amp; 예측 참</text>

            {/* TN = 30 */}
            <rect x="220" y="117" width="120" height="55" rx="6" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="280" y="143" textAnchor="middle" className="fill-foreground font-bold text-base">TN = 30</text>
            <text x="280" y="161" textAnchor="middle" className="fill-muted-foreground text-[10px]">실제 거짓 &amp; 예측 거짓</text>

            {/* 우측 공식 카드: Precision */}
            <rect x="360" y="52" width="170" height="120" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="2" />
            <text x="445" y="76" textAnchor="middle" className="fill-primary font-bold text-sm">★ 정밀도 (Precision)</text>
            <text x="445" y="98" textAnchor="middle" className="fill-foreground font-medium text-[11px]">
              TP / (TP + FP)
            </text>
            <text x="445" y="122" textAnchor="middle" className="fill-primary font-extrabold text-base">
              40 / (40 + 10)
            </text>
            <text x="445" y="142" textAnchor="middle" className="fill-foreground font-bold text-sm">
              = 40 / 50 = 0.8 (80%)
            </text>
            <text x="445" y="160" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              예측 Positive 중 정답 비율
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [47회 49번] 계층적 군집분석 와드 연결법 (Ward's Linkage: SSE 최소화)
    // -------------------------------------------------------------
    case "adsp-47-049":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [계층적 군집분석: 와드 연결법(Ward&apos;s Linkage) 원리]
          </div>
          <svg viewBox="0 0 540 190" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 군집 A */}
            <ellipse cx="120" cy="80" rx="60" ry="40" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
            <text x="120" y="75" textAnchor="middle" className="fill-foreground font-bold text-sm">군집 A</text>
            <text x="120" y="93" textAnchor="middle" className="fill-muted-foreground text-[10px]">오차제곱합 SSE_A</text>

            {/* + 기호 */}
            <text x="210" y="85" textAnchor="middle" className="fill-muted-foreground font-bold text-xl">+</text>

            {/* 군집 B */}
            <ellipse cx="290" cy="80" rx="60" ry="40" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
            <text x="290" y="75" textAnchor="middle" className="fill-foreground font-bold text-sm">군집 B</text>
            <text x="290" y="93" textAnchor="middle" className="fill-muted-foreground text-[10px]">오차제곱합 SSE_B</text>

            {/* 화살표 병합 */}
            <path d="M 360 80 L 400 80 M 392 74 L 400 80 L 392 86" fill="none" className="stroke-primary" strokeWidth="2.5" />

            {/* 병합 군집 AB */}
            <ellipse cx="465" cy="80" rx="65" ry="48" className="fill-emerald-500/15 stroke-emerald-500" strokeWidth="2" />
            <text x="465" y="75" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-sm">병합 군집 (A ∪ B)</text>
            <text x="465" y="93" textAnchor="middle" className="fill-foreground font-medium text-[10px]">SSE_AB</text>

            {/* 하단 공식 및 요약 카드 */}
            <rect x="60" y="135" width="420" height="45" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
            <text x="270" y="153" textAnchor="middle" className="fill-primary font-bold text-xs">
              ★ 와드 연결법(Ward Linkage) 기준: ΔSSE = SSE_AB - (SSE_A + SSE_B)
            </text>
            <text x="270" y="169" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              병합 시 군집 내 오차제곱합의 증가량(ΔSSE)이 가장 작아지는 두 군집을 우선 병합!
            </text>
          </svg>
        </div>
      );

    // =============================================================
    // 제50회 기출 시각 다이어그램 (9개 핵심 문항)
    // =============================================================

    // -------------------------------------------------------------
    // [50회 1번] DIKW 피라미드 4단계 계층 구조
    // -------------------------------------------------------------
    case "adsp-50-001":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [DIKW 피라미드 4대 핵심 계층 구조]
          </div>
          <svg viewBox="0 0 540 220" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 4층: 지혜 (Wisdom) */}
            <polygon points="270,25 210,65 330,65" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1.5" />
            <text x="270" y="52" textAnchor="middle" className="fill-purple-600 dark:fill-purple-400 font-extrabold text-xs">지혜 (Wisdom)</text>

            {/* 3층: 지식 (Knowledge) */}
            <polygon points="210,68 160,110 380,110 330,68" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1.5" />
            <text x="270" y="94" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 font-bold text-xs">지식 (Knowledge)</text>

            {/* 2층: 정보 (Information) */}
            <polygon points="160,113 110,155 430,155 380,113" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="1.5" />
            <text x="270" y="139" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-bold text-xs">정보 (Information)</text>

            {/* 1층: 데이터 (Data) */}
            <polygon points="110,158 60,200 480,200 430,158" className="fill-amber-500/20 stroke-amber-500" strokeWidth="1.5" />
            <text x="270" y="184" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-xs">데이터 (Data)</text>

            {/* 좌측 상세 설명 */}
            <text x="50" y="182" textAnchor="end" className="fill-muted-foreground text-[10px]">순수 사실/관측값</text>
            <text x="100" y="137" textAnchor="end" className="fill-muted-foreground text-[10px]">가공·맥락 부여</text>
            <text x="150" y="92" textAnchor="end" className="fill-muted-foreground text-[10px]">규칙·행동 지침</text>
            <text x="200" y="47" textAnchor="end" className="fill-muted-foreground text-[10px]">창의적 통찰/예측</text>

            {/* 우측 주의 배지 (통찰 Insight는 기본 4단계 아님) */}
            <rect x="425" y="30" width="105" height="55" rx="6" className="fill-rose-500/10 stroke-rose-500/50" strokeWidth="1.2" />
            <text x="477" y="52" textAnchor="middle" className="fill-rose-500 font-bold text-[11px]">⚠️ 오답 주의</text>
            <text x="477" y="70" textAnchor="middle" className="fill-muted-foreground text-[10px]">통찰(Insight) ✕</text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [50회 13번] KDD 분석 방법론 5단계 파이프라인
    // -------------------------------------------------------------
    case "adsp-50-013":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [KDD(Knowledge Discovery in Databases) 5단계 프로세스]
          </div>
          <svg viewBox="0 0 540 180" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 1. Selection */}
            <rect x="10" y="40" width="95" height="60" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
            <text x="57" y="62" textAnchor="middle" className="fill-primary font-bold text-[11px]">1. 데이터 선택</text>
            <text x="57" y="78" textAnchor="middle" className="fill-muted-foreground text-[9px]">Selection</text>
            <text x="57" y="92" textAnchor="middle" className="fill-foreground text-[9px]">목표 데이터셋 추출</text>

            <path d="M 108 70 L 113 70" className="stroke-muted-foreground" strokeWidth="2" />

            {/* 2. Preprocessing */}
            <rect x="115" y="40" width="95" height="60" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
            <text x="162" y="62" textAnchor="middle" className="fill-primary font-bold text-[11px]">2. 전처리</text>
            <text x="162" y="78" textAnchor="middle" className="fill-muted-foreground text-[9px]">Preprocessing</text>
            <text x="162" y="92" textAnchor="middle" className="fill-foreground text-[9px]">잡음·이상치·결측치</text>

            <path d="M 213 70 L 218 70" className="stroke-muted-foreground" strokeWidth="2" />

            {/* 3. Transformation */}
            <rect x="220" y="40" width="95" height="60" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
            <text x="267" y="62" textAnchor="middle" className="fill-primary font-bold text-[11px]">3. 데이터 변환</text>
            <text x="267" y="78" textAnchor="middle" className="fill-muted-foreground text-[9px]">Transformation</text>
            <text x="267" y="92" textAnchor="middle" className="fill-foreground text-[9px]">차원축소·변수생성</text>

            <path d="M 318 70 L 323 70" className="stroke-muted-foreground" strokeWidth="2" />

            {/* 4. Data Mining */}
            <rect x="325" y="40" width="95" height="60" rx="8" className="fill-primary/10 stroke-primary" strokeWidth="2" />
            <text x="372" y="62" textAnchor="middle" className="fill-primary font-bold text-[11px]">4. 데이터마이닝</text>
            <text x="372" y="78" textAnchor="middle" className="fill-primary text-[9px]">Data Mining</text>
            <text x="372" y="92" textAnchor="middle" className="fill-foreground text-[9px]">패턴 탐색·모델링</text>

            <path d="M 423 70 L 428 70" className="stroke-muted-foreground" strokeWidth="2" />

            {/* 5. Interpretation/Evaluation */}
            <rect x="430" y="40" width="100" height="60" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
            <text x="480" y="62" textAnchor="middle" className="fill-primary font-bold text-[11px]">5. 해석 및 평가</text>
            <text x="480" y="78" textAnchor="middle" className="fill-muted-foreground text-[9px]">Evaluation</text>
            <text x="480" y="92" textAnchor="middle" className="fill-foreground text-[9px]">지식 도출·유효성</text>

            {/* 하단 요약 */}
            <rect x="20" y="120" width="500" height="42" rx="6" className="fill-muted/30 stroke-border" strokeWidth="1" />
            <text x="270" y="137" textAnchor="middle" className="fill-foreground font-semibold text-[11px]">
              순서 암기: <tspan className="fill-primary font-bold">선택(Selection)</tspan> → <tspan className="fill-primary font-bold">전처리</tspan> → <tspan className="fill-primary font-bold">변환</tspan> → <tspan className="fill-primary font-bold">마이닝</tspan> → <tspan className="fill-primary font-bold">해석/평가</tspan>
            </text>
            <text x="270" y="152" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              데이터 전처리(정제)가 변환(차원축소)보다 먼저 수행되는 점에 유의!
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [50회 14번] CRISP-DM 모델링 vs 평가 태스크 분리
    // -------------------------------------------------------------
    case "adsp-50-014":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [CRISP-DM 6단계 중 &apos;모델링&apos; vs &apos;평가&apos; 태스크 비교]
          </div>
          <svg viewBox="0 0 540 200" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 좌측: 모델링 (Modeling) */}
            <rect x="30" y="30" width="220" height="150" rx="10" className="fill-primary/10 stroke-primary" strokeWidth="2" />
            <text x="140" y="55" textAnchor="middle" className="fill-primary font-bold text-sm">4. 모델링 (Modeling)</text>
            <line x1="50" y1="65" x2="230" y2="65" className="stroke-border" strokeWidth="1" />
            <text x="50" y="88" className="fill-foreground font-medium text-[11px]">• 모델링 기법 선택 (Select Technique)</text>
            <text x="50" y="112" className="fill-foreground font-medium text-[11px]">• 테스트 설계 (Generate Test Design)</text>
            <text x="50" y="136" className="fill-foreground font-medium text-[11px]">• 모델 작성 (Build Model)</text>
            <text x="50" y="160" className="fill-foreground font-medium text-[11px]">• 모델 평가 (Assess Model - 기술적)</text>

            {/* 피드백 화살표 */}
            <path d="M 255 105 L 285 105" className="stroke-primary" strokeWidth="2.5" />
            <polygon points="285,105 277,100 277,110" className="fill-primary" />

            {/* 우측: 평가 (Evaluation) */}
            <rect x="290" y="30" width="220" height="150" rx="10" className="fill-rose-500/10 stroke-rose-500" strokeWidth="1.5" />
            <text x="400" y="55" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-bold text-sm">5. 평가 (Evaluation)</text>
            <line x1="310" y1="65" x2="490" y2="65" className="stroke-border" strokeWidth="1" />
            <text x="310" y="88" className="fill-foreground font-medium text-[11px]">• 비즈니스 목표 달성 검토 (Evaluate)</text>
            <text x="310" y="112" className="fill-foreground font-medium text-[11px]">• 프로세스 전체 리뷰 (Review Process)</text>
            <text x="310" y="136" className="fill-rose-600 dark:fill-rose-400 font-bold text-[11px]">★ 다음 단계/배포 결정 (Next Steps)</text>
            <text x="310" y="160" className="fill-muted-foreground text-[10px]">(비즈니스 관점의 최종 승인 단계)</text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [50회 20번] 분석 수준 진단 사분면 (준비형 하이라이트)
    // -------------------------------------------------------------
    case "adsp-50-020":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [분석 수준 진단 4사분면: 준비형(Preparation) 매트릭스]
          </div>
          <svg viewBox="0 0 540 220" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 축 레이블 */}
            <text x="270" y="18" textAnchor="middle" className="fill-muted-foreground font-bold">
              분석 성숙도 (Maturity) ➔ 높음
            </text>
            <text x="18" y="115" textAnchor="middle" className="fill-muted-foreground font-bold" transform="rotate(-90 18 115)">
              준비도 (Readiness)
            </text>

            {/* 좌하단: 준비형 (정답 - 하이라이트) */}
            <rect x="70" y="115" width="190" height="85" rx="8" className="fill-primary/20 stroke-primary" strokeWidth="2.5" />
            <text x="165" y="145" textAnchor="middle" className="fill-primary font-extrabold text-sm">★ 준비형 (Preparation)</text>
            <text x="165" y="165" textAnchor="middle" className="fill-foreground font-bold text-[11px]">준비도 낮음 + 성숙도 낮음</text>
            <text x="165" y="182" textAnchor="middle" className="fill-muted-foreground text-[10px]">사전 인프라·인력 정비 최우선</text>

            {/* 우하단: 도입형 */}
            <rect x="280" y="115" width="190" height="85" rx="8" className="fill-muted/30 stroke-border" strokeWidth="1.2" />
            <text x="375" y="145" textAnchor="middle" className="fill-foreground font-bold text-sm">도입형 (Introduction)</text>
            <text x="375" y="165" textAnchor="middle" className="fill-muted-foreground text-[11px]">준비도 낮음 + 성숙도 높음</text>
            <text x="375" y="182" textAnchor="middle" className="fill-muted-foreground text-[10px]">조직·인프라 보강 필요</text>

            {/* 좌상단: 정착형 */}
            <rect x="70" y="25" width="190" height="85" rx="8" className="fill-muted/30 stroke-border" strokeWidth="1.2" />
            <text x="165" y="55" textAnchor="middle" className="fill-foreground font-bold text-sm">정착형 (Settlement)</text>
            <text x="165" y="75" textAnchor="middle" className="fill-muted-foreground text-[11px]">준비도 높음 + 성숙도 낮음</text>
            <text x="165" y="92" textAnchor="middle" className="fill-muted-foreground text-[10px]">조직 내재화·활용 확산 집중</text>

            {/* 우상단: 확산형 */}
            <rect x="280" y="25" width="190" height="85" rx="8" className="fill-muted/30 stroke-border" strokeWidth="1.2" />
            <text x="375" y="55" textAnchor="middle" className="fill-foreground font-bold text-sm">확산형 (Spreading)</text>
            <text x="375" y="75" textAnchor="middle" className="fill-muted-foreground text-[11px]">준비도 높음 + 성숙도 높음</text>
            <text x="375" y="92" textAnchor="middle" className="fill-muted-foreground text-[10px]">전사적 최적화 및 지속 혁신</text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [50회 23번] 동전 5회 독립 던지기 이항확률 (1/32)
    // -------------------------------------------------------------
    case "adsp-50-023":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [독립 시행 이항분포: 동전 5회 연속 뒷면 확률]
          </div>
          <svg viewBox="0 0 540 180" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 5개 독립 시행 원형 표시 */}
            {[
              { num: 1, label: "1회(뒷면)", x: 60 },
              { num: 2, label: "2회(뒷면)", x: 140 },
              { num: 3, label: "3회(뒷면)", x: 220 },
              { num: 4, label: "4회(뒷면)", x: 300 },
              { num: 5, label: "5회(뒷면)", x: 380 },
            ].map((item, idx) => (
              <g key={idx}>
                <circle cx={item.x} cy="55" r="26" className="fill-primary/15 stroke-primary" strokeWidth="2" />
                <text x={item.x} y="53" textAnchor="middle" className="fill-foreground font-extrabold text-xs">1/2</text>
                <text x={item.x} y="68" textAnchor="middle" className="fill-muted-foreground text-[9px]">{item.label}</text>
                {idx < 4 && (
                  <text x={item.x + 40} y="58" textAnchor="middle" className="fill-muted-foreground font-bold text-sm">×</text>
                )}
              </g>
            ))}

            <text x="425" y="58" textAnchor="middle" className="fill-primary font-bold text-base">=</text>

            {/* 결과 상자 */}
            <rect x="445" y="30" width="80" height="50" rx="8" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="2" />
            <text x="485" y="54" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-extrabold text-sm">1/32</text>
            <text x="485" y="70" textAnchor="middle" className="fill-muted-foreground text-[10px]">≈ 3.125%</text>

            {/* 수식 요약 */}
            <rect x="30" y="110" width="480" height="50" rx="8" className="fill-card stroke-border" strokeWidth="1.2" />
            <text x="270" y="130" textAnchor="middle" className="fill-primary font-bold text-xs">
              P(X = 0) = ₅C₀ × (1/2)⁰ × (1/2)⁵ = (1/2)⁵ = 1/32
            </text>
            <text x="270" y="148" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              각 시행이 독립(Independent)이므로 결합확률은 각 개별 확률의 곱으로 산출
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [50회 26번] 회귀분석 총제곱합 분해 (SST = SSR + SSE)
    // -------------------------------------------------------------
    case "adsp-50-026":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [선형 회귀분석: 분산분석(ANOVA) 총변동 분해 구조]
          </div>
          <svg viewBox="0 0 540 190" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 전체 SST 바 */}
            <rect x="40" y="30" width="460" height="40" rx="6" className="fill-muted/40 stroke-border" strokeWidth="1.5" />
            <text x="270" y="55" textAnchor="middle" className="fill-foreground font-extrabold text-sm">
              총제곱합: SST (Total Sum of Squares) = Σ(Yᵢ - Ȳ)²
            </text>

            {/* 분해 화살표 */}
            <path d="M 270 73 L 270 95" className="stroke-primary" strokeWidth="2" />
            <polygon points="270,95 265,87 275,87" className="fill-primary" />

            {/* SSR 바 */}
            <rect x="40" y="100" width="290" height="45" rx="6" className="fill-primary/20 stroke-primary" strokeWidth="2" />
            <text x="185" y="122" textAnchor="middle" className="fill-primary font-bold text-xs">회귀제곱합 (SSR)</text>
            <text x="185" y="137" textAnchor="middle" className="fill-muted-foreground text-[10px]">회귀선에 의해 설명되는 변동</text>

            {/* + 기호 */}
            <circle cx="340" cy="122" r="10" className="fill-card stroke-border" />
            <text x="340" y="126" textAnchor="middle" className="fill-foreground font-bold text-sm">+</text>

            {/* SSE 바 */}
            <rect x="350" y="100" width="150" height="45" rx="6" className="fill-rose-500/15 stroke-rose-500" strokeWidth="1.5" />
            <text x="425" y="122" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-bold text-xs">오차제곱합 (SSE)</text>
            <text x="425" y="137" textAnchor="middle" className="fill-muted-foreground text-[10px]">설명되지 않는 잔차 변동</text>

            {/* 하단 결정계수 관계 */}
            <text x="270" y="172" textAnchor="middle" className="fill-muted-foreground font-semibold text-[11px]">
              결정계수(R²) = SSR / SST = 1 - (SSE / SST)
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [50회 36번] 하이퍼볼릭 탄젠트(tanh) 활성화 함수 출력 범위 [-1, 1]
    // -------------------------------------------------------------
    case "adsp-50-036":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [활성화 함수 비교: tanh ([-1, 1]) vs Sigmoid ([0, 1])]
          </div>
          <svg viewBox="0 0 540 210" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 좌측 좌표계: tanh */}
            <g transform="translate(40, 20)">
              <rect x="0" y="0" width="210" height="150" rx="8" className="fill-card stroke-border" strokeWidth="1" />
              {/* x축, y축 */}
              <line x1="15" y1="75" x2="195" y2="75" className="stroke-border" strokeWidth="1" />
              <line x1="105" y1="15" x2="105" y2="135" className="stroke-border" strokeWidth="1" />
              {/* y=+1, y=-1 점선 */}
              <line x1="15" y1="30" x2="195" y2="30" strokeDasharray="3 3" className="stroke-muted-foreground/40" />
              <text x="100" y="28" textAnchor="end" className="fill-primary font-bold text-[10px]">+1</text>
              <line x1="15" y1="120" x2="195" y2="120" strokeDasharray="3 3" className="stroke-muted-foreground/40" />
              <text x="100" y="125" textAnchor="end" className="fill-primary font-bold text-[10px]">-1</text>
              <text x="100" y="73" textAnchor="end" className="fill-muted-foreground text-[9px]">0</text>

              {/* tanh 곡선 */}
              <path d="M 20 118 Q 80 115, 105 75 T 190 32" fill="none" className="stroke-primary" strokeWidth="3" />
              <text x="105" y="145" textAnchor="middle" className="fill-primary font-bold text-xs">★ tanh ([-1, 1])</text>
            </g>

            {/* 우측 좌표계: Sigmoid */}
            <g transform="translate(290, 20)">
              <rect x="0" y="0" width="210" height="150" rx="8" className="fill-card stroke-border" strokeWidth="1" />
              {/* x축, y축 */}
              <line x1="15" y1="125" x2="195" y2="125" className="stroke-border" strokeWidth="1" />
              <line x1="105" y1="15" x2="105" y2="135" className="stroke-border" strokeWidth="1" />
              {/* y=+1 점선 */}
              <line x1="15" y1="30" x2="195" y2="30" strokeDasharray="3 3" className="stroke-muted-foreground/40" />
              <text x="100" y="28" textAnchor="end" className="fill-muted-foreground font-semibold text-[10px]">1</text>
              <text x="100" y="123" textAnchor="end" className="fill-muted-foreground text-[9px]">0</text>

              {/* Sigmoid 곡선 */}
              <path d="M 20 123 Q 80 121, 105 75 T 190 32" fill="none" className="stroke-muted-foreground" strokeWidth="2.5" />
              <text x="105" y="145" textAnchor="middle" className="fill-muted-foreground font-bold text-xs">Sigmoid ([0, 1])</text>
            </g>

            <text x="270" y="195" textAnchor="middle" className="fill-foreground font-semibold text-[11px]">
              tanh는 중심이 0(Zero-centered)으로 대칭되어 신경망 학습 효율이 시그모이드보다 개선됨
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [50회 38번] DBSCAN 밀도 기반 군집화: Core, Border, Noise
    // -------------------------------------------------------------
    case "adsp-50-038":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [DBSCAN 밀도 기반 군집화 핵심 구성 원리]
          </div>
          <svg viewBox="0 0 540 210" className="w-full max-w-[500px] mx-auto text-xs">
            {/* Core 반경 원 */}
            <circle cx="160" cy="90" r="55" className="fill-primary/10 stroke-primary" strokeDasharray="3 3" strokeWidth="1.5" />
            <circle cx="230" cy="90" r="55" className="fill-primary/10 stroke-primary" strokeDasharray="3 3" strokeWidth="1.5" />

            {/* Core 점들 */}
            <circle cx="160" cy="90" r="7" className="fill-primary" />
            <text x="160" y="78" textAnchor="middle" className="fill-primary font-bold text-[11px]">Core 점</text>

            <circle cx="140" cy="110" r="5" className="fill-primary/80" />
            <circle cx="175" cy="115" r="5" className="fill-primary/80" />
            <circle cx="180" cy="70" r="5" className="fill-primary/80" />

            {/* Border 점 */}
            <circle cx="270" cy="110" r="6" className="fill-amber-500" />
            <text x="270" y="130" textAnchor="middle" className="fill-amber-600 dark:fill-amber-400 font-bold text-[11px]">Border 점</text>

            {/* Noise 점 (잡음/이상치) */}
            <circle cx="440" cy="70" r="6" className="fill-rose-500" />
            <text x="440" y="52" textAnchor="middle" className="fill-rose-600 dark:fill-rose-400 font-bold text-xs">★ Noise 점 (잡음/이상치)</text>
            <text x="440" y="90" textAnchor="middle" className="fill-muted-foreground text-[10px]">어느 군집에도 속하지 않음</text>

            {/* 하단 특성 카드 */}
            <rect x="30" y="155" width="480" height="45" rx="6" className="fill-card stroke-border" strokeWidth="1" />
            <text x="270" y="172" textAnchor="middle" className="fill-primary font-bold text-[11px]">
              특징: 1. 군집 수(K) 사전 지정 불필요 | 2. 불규칙·기하학적 형상 탐색 | 3. 잡음(Noise) 자동 분리
            </text>
            <text x="270" y="188" textAnchor="middle" className="fill-muted-foreground text-[10px]">
              주요 하이퍼파라미터: 이웃 반경(ε, Epsilon)과 최소 데이터 수(MinPts)
            </text>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // [50회 47번] 시계열 AR(2) 식별: ACF 점진 감소 vs PACF 시차 2 절단
    // -------------------------------------------------------------
    case "adsp-50-047":
      return (
        <div className="my-3 rounded-xl border border-border bg-card/70 p-4 shadow-sm">
          <div className="mb-2 text-center text-xs font-bold text-muted-foreground">
            [시계열 AR(2) 식별: ACF 감쇄 vs PACF 시차 2 절단(Cut-off)]
          </div>
          <svg viewBox="0 0 540 210" className="w-full max-w-[500px] mx-auto text-xs">
            {/* 좌측: ACF 플롯 (지수적 감쇄) */}
            <g transform="translate(30, 25)">
              <rect x="0" y="0" width="225" height="130" rx="6" className="fill-card stroke-border" strokeWidth="1" />
              <text x="112" y="20" textAnchor="middle" className="fill-foreground font-bold text-xs">ACF (자기상관함수)</text>
              <line x1="20" y1="75" x2="205" y2="75" className="stroke-border" strokeWidth="1" />
              {/* 바 차트: 점진적 지수 감쇄 */}
              <line x1="45" y1="75" x2="45" y2="35" className="stroke-primary" strokeWidth="6" strokeLinecap="round" />
              <line x1="75" y1="75" x2="75" y2="48" className="stroke-primary" strokeWidth="6" strokeLinecap="round" />
              <line x1="105" y1="75" x2="105" y2="58" className="stroke-primary" strokeWidth="6" strokeLinecap="round" />
              <line x1="135" y1="75" x2="135" y2="66" className="stroke-primary" strokeWidth="6" strokeLinecap="round" />
              <line x1="165" y1="75" x2="165" y2="71" className="stroke-primary" strokeWidth="6" strokeLinecap="round" />
              <line x1="195" y1="75" x2="195" y2="73" className="stroke-primary" strokeWidth="6" strokeLinecap="round" />
              <text x="112" y="118" textAnchor="middle" className="fill-primary font-bold text-[11px]">점진적 지수 감쇄 (Tails off)</text>
            </g>

            {/* 우측: PACF 플롯 (시차 2 절단) */}
            <g transform="translate(285, 25)">
              <rect x="0" y="0" width="225" height="130" rx="6" className="fill-primary/10 stroke-primary" strokeWidth="1.5" />
              <text x="112" y="20" textAnchor="middle" className="fill-primary font-bold text-xs">★ PACF (편자기상관함수)</text>
              <line x1="20" y1="75" x2="205" y2="75" className="stroke-border" strokeWidth="1" />
              {/* 바 차트: 시차 1, 2만 유의미하고 시차 3부터 0 */}
              <line x1="45" y1="75" x2="45" y2="35" className="stroke-emerald-500" strokeWidth="6" strokeLinecap="round" />
              <text x="45" y="90" textAnchor="middle" className="fill-foreground text-[9px]">시차1</text>
              <line x1="75" y1="75" x2="75" y2="45" className="stroke-emerald-500" strokeWidth="6" strokeLinecap="round" />
              <text x="75" y="90" textAnchor="middle" className="fill-foreground text-[9px]">시차2</text>
              {/* 시차 3, 4, 5 절단 */}
              <line x1="105" y1="75" x2="105" y2="76" className="stroke-muted-foreground/40" strokeWidth="4" />
              <line x1="135" y1="75" x2="135" y2="74" className="stroke-muted-foreground/40" strokeWidth="4" />
              <line x1="165" y1="75" x2="165" y2="75" className="stroke-muted-foreground/40" strokeWidth="4" />
              <text x="140" y="90" textAnchor="middle" className="fill-rose-500 font-bold text-[9px]">시차 2 이후 절단</text>
              <text x="112" y="118" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 font-extrabold text-[11px]">시차 2 이후 절단 (Cut-off)</text>
            </g>

            {/* 하단 요약 문구 */}
            <text x="270" y="185" textAnchor="middle" className="fill-foreground font-semibold text-xs">
              AR(p) 모형 판별 공식: <tspan className="fill-primary font-bold">PACF가 시차 p 이후 급격히 0으로 절단</tspan> (AR(2)는 시차 2 이후 절단!)
            </text>
          </svg>
        </div>
      );

    default:
      return null;
  }
}

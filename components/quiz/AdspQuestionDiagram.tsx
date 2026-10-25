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

    default:
      return null;
  }
}

export type NetadminExamRound = "20261101";

export interface NetadminExamSection {
  id: string;
  name: string;
  rangeLabel: string;
  startIndex: number;
  count: number;
  maxScore: number;
  cutoffScore: number; // 40% 미만 과락 기준 참고 (전체 60점 이상 합격)
}

// =================================================================
// 네트워크관리사 2급 20261101 필기 실전 기출 복원 (31문항 전수 1:1 매핑)
// 1과목 네트워크 일반&프로토콜(11) + 2과목 기기&토폴로지(8) + 3과목 Windows Server(4) + 4과목 Linux(8)
// =================================================================
export const NETADMIN_EXAM_20261101_IDS: string[] = [
  // 1과목: 네트워크 일반 & 프로토콜 (1 ~ 11번)
  "netadmin-20261101-001", // 1번: IPv6 주소 표기 및 축약 규칙
  "netadmin-20261101-002", // 2번: 멀티캐스트(Multicast)의 정의
  "netadmin-20261101-003", // 3번: 서브넷 마스크(Subnet Mask)의 기본 용도
  "netadmin-20261101-004", // 4번: 서브넷 마스크 계산 및 호스트 할당
  "netadmin-20261101-005", // 5번: ICMP(Internet Control Message Protocol)의 기능
  "netadmin-20261101-006", // 6번: 프로토콜 계층별 데이터 전송 단위(PDU)
  "netadmin-20261101-007", // 7번: 웹 프로토콜 기본 포트(HTTP vs HTTPS)
  "netadmin-20261101-008", // 8번: FTP 서버 및 포트 번호
  "netadmin-20261101-009", // 9번: NTP(Network Time Protocol)의 전송 계층
  "netadmin-20261101-010", // 10번: MTU 초과와 IP 단편화(Fragmentation)
  "netadmin-20261101-011", // 11번: NAT(Network Address Translation) 기술

  // 2과목: 네트워크 기기 및 토폴로지 (12 ~ 19번)
  "netadmin-20261101-012", // 12번: 무선 LAN CSMA/CA 표준 규격
  "netadmin-20261101-013", // 13번: 네트워크 토폴로지(링형 vs 성형)
  "netadmin-20261101-014", // 14번: ARQ(자동 재전송 요구) 오류 제어 방식
  "netadmin-20261101-015", // 15번: 부하 분산(Load Balancing) 알고리즘
  "netadmin-20261101-016", // 16번: 라우팅 방식 - 정적 라우팅(Static Routing)
  "netadmin-20261101-017", // 17번: 동적 라우팅 프로토콜 - RIP
  "netadmin-20261101-018", // 18번: VLAN(Virtual Local Area Network)의 특징
  "netadmin-20261101-019", // 19번: 스위치 루프(Loop) 및 동작 특성

  // 3과목: Windows Server (20 ~ 23번)
  "netadmin-20261101-020", // 20번: Windows 성능 모니터 도구 (perfmon)
  "netadmin-20261101-021", // 21번: 파일 시스템 - ReFS vs NTFS
  "netadmin-20261101-022", // 22번: 스토리지 RAID 구성 - 미러링 (RAID 1)
  "netadmin-20261101-023", // 23번: 원격 데스크톱 및 사용자 관리 (Remote Desktop Users)

  // 4과목: Linux 시스템 관리 (24 ~ 31번)
  "netadmin-20261101-024", // 24번: vi 편집기 삭제 명령어 (x)
  "netadmin-20261101-025", // 25번: Linux 파일 및 디렉터리 관리 명령어 (rmdir)
  "netadmin-20261101-026", // 26번: Linux 파일 권한 표기법 (chmod 751)
  "netadmin-20261101-027", // 27번: Linux 파일 시스템 마운트 확인 명령어 (mount, df)
  "netadmin-20261101-028", // 28번: Linux 시스템 메모리 사용량 확인 (free)
  "netadmin-20261101-029", // 29번: Linux 프로세스 상태 확인 명령어 (ps -ef)
  "netadmin-20261101-030", // 30번: 네트워크 인터페이스 확인 명령어 (ip addr)
  "netadmin-20261101-031", // 31번: Apache 웹 서버 환경 설정 (Listen)
];

export interface NetadminRoundInfo {
  round: NetadminExamRound;
  year: string;
  name: string;
  badge: string;
  description: string;
  questionIds: string[];
}

export const NETADMIN_EXAM_ROUNDS: Record<NetadminExamRound, NetadminRoundInfo> = {
  "20261101": {
    round: "20261101",
    year: "2026년",
    name: "20261101 필기 실전 기출 복원",
    badge: "2026.11.01 시행",
    description: "2026년 11월 1일 실시 네트워크관리사 2급 필기 실전 기출 복원 문항 (31문항 풀세트)",
    questionIds: NETADMIN_EXAM_20261101_IDS,
  },
};

export const NETADMIN_ROUND_KEYS: NetadminExamRound[] = ["20261101"];

export function getNetadminExamRound(round?: string | null): NetadminRoundInfo {
  if (round && round in NETADMIN_EXAM_ROUNDS) {
    return NETADMIN_EXAM_ROUNDS[round as NetadminExamRound];
  }
  return NETADMIN_EXAM_ROUNDS["20261101"];
}

export const NETADMIN_EXAM_SECTIONS: NetadminExamSection[] = [
  {
    id: "general",
    name: "제1과목 네트워크 일반 & 프로토콜",
    rangeLabel: "1-11",
    startIndex: 0,
    count: 11,
    maxScore: 35,
    cutoffScore: 14,
  },
  {
    id: "devices",
    name: "제2과목 네트워크 기기 & 토폴로지",
    rangeLabel: "12-19",
    startIndex: 11,
    count: 8,
    maxScore: 26,
    cutoffScore: 10,
  },
  {
    id: "windows",
    name: "제3과목 Windows Server",
    rangeLabel: "20-23",
    startIndex: 19,
    count: 4,
    maxScore: 13,
    cutoffScore: 5,
  },
  {
    id: "linux",
    name: "제4과목 Linux 시스템 관리",
    rangeLabel: "24-31",
    startIndex: 23,
    count: 8,
    maxScore: 26,
    cutoffScore: 10,
  },
];

export function getNetadminSectionByQuestionIndex(index: number): NetadminExamSection {
  if (index < 11) return NETADMIN_EXAM_SECTIONS[0];
  if (index < 19) return NETADMIN_EXAM_SECTIONS[1];
  if (index < 23) return NETADMIN_EXAM_SECTIONS[2];
  return NETADMIN_EXAM_SECTIONS[3];
}

export interface NetadminSectionEvaluation {
  section: NetadminExamSection;
  correctCount: number;
  totalCount: number;
  score: number;
  accuracy: number;
  isCutoffFailed: boolean;
}

export interface NetadminExamEvaluation {
  totalQuestions: number;
  totalCorrect: number;
  totalScore: number; // 100점 만점 환산
  rawScorePercentage: number;
  sections: NetadminSectionEvaluation[];
  isPassed: boolean; // 100점 만점 기준 60점 이상 합격
  hasCutoffFailure: boolean;
}

export function evaluateNetadminExam(
  answers: Record<string, { submitted: string; correct: boolean }>,
  queue: string[] = NETADMIN_EXAM_20261101_IDS
): NetadminExamEvaluation {
  const sections: NetadminSectionEvaluation[] = NETADMIN_EXAM_SECTIONS.map((sec) => {
    const secQuestionIds = queue.slice(sec.startIndex, sec.startIndex + sec.count);
    const correctCount = secQuestionIds.filter((id) => answers[id]?.correct).length;
    const accuracy = secQuestionIds.length > 0 ? Math.round((correctCount / secQuestionIds.length) * 100) : 0;
    const score = Math.round((correctCount / Math.max(1, secQuestionIds.length)) * sec.maxScore);
    const isCutoffFailed = accuracy < 40;

    return {
      section: sec,
      correctCount,
      totalCount: secQuestionIds.length,
      score,
      accuracy,
      isCutoffFailed,
    };
  });

  const totalCorrect = queue.filter((id) => answers[id]?.correct).length;
  const rawScorePercentage = queue.length > 0 ? Math.round((totalCorrect / queue.length) * 100) : 0;
  const totalScore = rawScorePercentage;
  const hasCutoffFailure = sections.some((s) => s.isCutoffFailed);
  const isPassed = totalScore >= 60;

  return {
    totalQuestions: queue.length,
    totalCorrect,
    totalScore,
    rawScorePercentage,
    sections,
    isPassed,
    hasCutoffFailure,
  };
}

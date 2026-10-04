import type { SpeedQuizChapter, SpeedQuizItem } from "./types";

export const PROCESSING_CHAPTERS: SpeedQuizChapter[] = [
  { id: "ch1", name: "제1과목 소프트웨어 설계", shortName: "소프트웨어 설계" },
  { id: "ch2", name: "제2과목 소프트웨어 개발", shortName: "소프트웨어 개발" },
  { id: "ch3", name: "제3과목 데이터베이스 구축", shortName: "DB 구축" },
  { id: "ch4", name: "제4과목 프로그래밍 언어 활용", shortName: "프로그래밍 언어" },
  { id: "ch5", name: "제5과목 정보시스템 구축 관리", shortName: "시스템 구축 관리" },
];

export const PROCESSING_QUIZ_LIST: SpeedQuizItem[] = [
  // =================================================================
  // === [제1과목] 소프트웨어 설계 (6문항)
  // =================================================================
  {
    id: 1,
    chapterId: "ch1",
    chapterName: "제1과목 소프트웨어 설계",
    question: "객체지향 설계 5대 원칙(SOLID) 중 '기존 코드를 수정하지 않고 확장은 유연해야 한다'는 원칙은?",
    answer: "OCP (개방-폐쇄 원칙)"
  },
  {
    id: 2,
    chapterId: "ch1",
    chapterName: "제1과목 소프트웨어 설계",
    question: "생성 디자인 패턴 중, 인스턴스가 오직 하나만 생성되도록 보장하고 전역 접근을 제공하는 패턴은?",
    answer: "싱글톤 패턴 (Singleton Pattern)"
  },
  {
    id: 3,
    chapterId: "ch1",
    chapterName: "제1과목 소프트웨어 설계",
    question: "바람직한 소프트웨어 모듈 설계의 기본 원칙은? (응집도와 결합도의 관계)",
    answer: "높은 응집도(High Cohesion), 낮은 결합도(Low Coupling)"
  },
  {
    id: 4,
    chapterId: "ch1",
    chapterName: "제1과목 소프트웨어 설계",
    question: "SOLID 원칙 중 '하위 클래스는 상위 클래스의 기능을 온전히 대체할 수 있어야 한다'는 원칙은?",
    answer: "LSP (리스코프 치환 원칙)"
  },
  {
    id: 5,
    chapterId: "ch1",
    chapterName: "제1과목 소프트웨어 설계",
    question: "복잡한 서브시스템의 여러 인터페이스를 단순한 통합 인터페이스 하나로 감싸서 제공하는 구조 패턴은?",
    answer: "퍼사드 패턴 (Facade Pattern)"
  },
  {
    id: 6,
    chapterId: "ch1",
    chapterName: "제1과목 소프트웨어 설계",
    question: "시스템이 제공하는 기능을 사용자(액터) 관점에서 모델링하고 상호작용을 표현한 다이어그램은?",
    answer: "유스케이스 다이어그램 (Use Case Diagram)"
  },

  // =================================================================
  // === [제2과목] 소프트웨어 개발 (5문항)
  // =================================================================
  {
    id: 7,
    chapterId: "ch2",
    chapterName: "제2과목 소프트웨어 개발",
    question: "코드 내부 구조를 들여다보지 않고, 요구사항 명세 기반으로 입력과 출력을 검증하는 테스트 기법은?",
    answer: "블랙박스 테스트 (Black-Box Testing)"
  },
  {
    id: 8,
    chapterId: "ch2",
    chapterName: "제2과목 소프트웨어 개발",
    question: "Git에서 원격 저장소(Remote)의 최신 커밋 이력을 로컬로 가져오면서 현재 브랜치에 자동 병합하는 명령어는?",
    answer: "git pull (fetch + merge)"
  },
  {
    id: 9,
    chapterId: "ch2",
    chapterName: "제2과목 소프트웨어 개발",
    question: "Key-Value 쌍으로 데이터를 저장하며, 평균 O(1)의 탐색 시간과 해시 충돌(Collision) 해결이 핵심인 자료구조는?",
    answer: "해시 테이블 (Hash Table)"
  },
  {
    id: 10,
    chapterId: "ch2",
    chapterName: "제2과목 소프트웨어 개발",
    question: "테스트 코드를 먼저 작성하고, 이를 통과하는 코드를 작성한 뒤 리팩토링하는 개발 방법론은?",
    answer: "TDD (테스트 주도 개발)"
  },
  {
    id: 11,
    chapterId: "ch2",
    chapterName: "제2과목 소프트웨어 개발",
    question: "소프트웨어 테스트 오라클 중, 모든 입력값에 대하여 기대하는 참(True) 결과를 완벽하게 제공하는 오라클은?",
    answer: "참 오라클 (True Oracle)"
  },

  // =================================================================
  // === [제3과목] 데이터베이스 구축 (6문항)
  // =================================================================
  {
    id: 12,
    chapterId: "ch3",
    chapterName: "제3과목 데이터베이스 구축",
    question: "트랜잭션이 성공적으로 완료되면 시스템 장애가 발생해도 영구적으로 보존되어야 한다는 ACID 특성은?",
    answer: "지속성 / 영속성 (Durability)"
  },
  {
    id: 13,
    chapterId: "ch3",
    chapterName: "제3과목 데이터베이스 구축",
    question: "관계형 데이터베이스에서 릴레이션의 모든 속성값이 '원자값(Atomic Value)'을 갖도록 분해하는 정규형은?",
    answer: "제1정규형 (1NF)"
  },
  {
    id: 14,
    chapterId: "ch3",
    chapterName: "제3과목 데이터베이스 구축",
    question: "RDBMS에서 대용량 데이터의 빠른 인덱싱 검색을 위해 기본적으로 채택하는 균형 트리 구조는?",
    answer: "B-Tree / B+Tree 인덱스"
  },
  {
    id: 15,
    chapterId: "ch3",
    chapterName: "제3과목 데이터베이스 구축",
    question: "제1정규형(1NF)에서 기본키가 아닌 일반 속성이 기본키에 완전 함수 종속되도록 '부분 함수 종속'을 제거한 정규형은?",
    answer: "제2정규형 (2NF)"
  },
  {
    id: 16,
    chapterId: "ch3",
    chapterName: "제3과목 데이터베이스 구축",
    question: "A ➔ B, B ➔ C 관계에서 성립하는 '이행적 함수 종속(Transitive Dependency)'을 제거한 정규형은?",
    answer: "제3정규형 (3NF)"
  },
  {
    id: 17,
    chapterId: "ch3",
    chapterName: "제3과목 데이터베이스 구축",
    question: "동시에 실행되는 여러 트랜잭션이 서로 간섭하지 못하도록 격리되어야 한다는 ACID 특성은?",
    answer: "격리성 / 고립성 (Isolation)"
  },

  // =================================================================
  // === [제4과목] 프로그래밍 언어 활용 (5문항)
  // =================================================================
  {
    id: 18,
    chapterId: "ch4",
    chapterName: "제4과목 프로그래밍 언어 활용",
    question: "2개 이상의 프로세스가 서로 상대방이 점유한 자원을 무한정 기다리는 교착상태(Deadlock)의 4대 필요조건은?",
    answer: "상호 배제, 점유와 대기, 비선점, 환형 대기"
  },
  {
    id: 19,
    chapterId: "ch4",
    chapterName: "제4과목 프로그래밍 언어 활용",
    question: "프로세스 내에서 실행 흐름의 단위로, 코드·데이터·힙 영역을 공유하고 고유한 스택(Stack)을 갖는 것은?",
    answer: "스레드 (Thread)"
  },
  {
    id: 20,
    chapterId: "ch4",
    chapterName: "제4과목 프로그래밍 언어 활용",
    question: "프로그래밍 언어에서 런타임 시 동적으로 할당되는 메모리 영역으로, 해제하지 않으면 메모리 누수가 발생하는 영역은?",
    answer: "힙 (Heap) 영역"
  },
  {
    id: 21,
    chapterId: "ch4",
    chapterName: "제4과목 프로그래밍 언어 활용",
    question: "CPU 스케줄링 알고리즘 중, 준비 큐에서 실행 시간이 가장 짧은 프로세스에 먼저 CPU를 할당하는 비선점형 방식은?",
    answer: "SJF (Shortest Job First)"
  },
  {
    id: 22,
    chapterId: "ch4",
    chapterName: "제4과목 프로그래밍 언어 활용",
    question: "가상 메모리 환경에서 프로세스가 페이지를 교체하느라 실제 CPU 작업 시간보다 페이지 부재 처리 시간이 더 길어지는 현상은?",
    answer: "스래싱 (Thrashing)"
  },

  // =================================================================
  // === [제5과목] 정보시스템 구축 관리 (5문항)
  // =================================================================
  {
    id: 23,
    chapterId: "ch5",
    chapterName: "제5과목 정보시스템 구축 관리",
    question: "웹 브라우저가 다른 도메인의 자원 요청을 보안상 제한하는 정책 및 이를 서버가 제어하는 HTTP 보안 메커니즘은?",
    answer: "CORS (교차 출처 리소스 공유)"
  },
  {
    id: 24,
    chapterId: "ch5",
    chapterName: "제5과목 정보시스템 구축 관리",
    question: "정보보안의 3대 핵심 목표(CIA Triad)에 해당하는 3가지 원칙은?",
    answer: "기밀성(Confidentiality), 완전성(Integrity), 가용성(Availability)"
  },
  {
    id: 25,
    chapterId: "ch5",
    chapterName: "제5과목 정보시스템 구축 관리",
    question: "128비트 블록 크기를 사용하며, 미국 표준 기술 연구소(NIST)에서 채택한 대표적인 표준 대칭키 암호화 알고리즘은?",
    answer: "AES (Advanced Encryption Standard)"
  },
  {
    id: 26,
    chapterId: "ch5",
    chapterName: "제5과목 정보시스템 구축 관리",
    question: "웹 페이지에 악성 스크립트를 삽입하여 방문자의 세션 쿠키를 탈취하거나 비정상적인 행위를 유도하는 대표적인 웹 보안 취약점은?",
    answer: "XSS (크로스 사이트 스크립팅)"
  },
  {
    id: 27,
    chapterId: "ch5",
    chapterName: "제5과목 정보시스템 구축 관리",
    question: "TCP 3-Way Handshake 과정에서 SYN 패킷만 대량으로 전송하여 서버의 백로그 큐를 고갈시키는 대표적인 DoS 공격은?",
    answer: "SYN 플러딩 (SYN Flooding)"
  }
];

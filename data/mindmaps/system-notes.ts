import type { MindmapNodeNote } from "@/types/mindmap";

export const SYSTEM_NOTES: Record<string, MindmapNodeNote> = {
  // =================================================================
  // 1. 유닉스 파일시스템
  // =================================================================
  "구조": {
    title: "유닉스 파일시스템 4대 블록 구조 (Boot, Super, Inode, Data)",
    importance: 5,
    badge: "필기/실기 기초 1순위",
    definition:
      "유닉스/리눅스 디스크 파티션은 부팅 코드, 메타데이터, 파일 속성, 사용자 데이터를 분리 저장하는 4개 영역으로 구성된다.",
    keyPoints: [
      "Boot Block: 운영체제 부팅을 위한 부트스트랩 코드가 위치함",
      "Super Block: 파일시스템 크기, 총 블록 수, 빈 블록/Inode 목록 등 전체 파일시스템 상태 저장 (손상 시 마운트 불가)",
      "Inode Block: 파일의 소유자(UID/GID), 파일 크기, 권한(rwx), 생성/수정 시간, 데이터 블록 포인터 등 메타데이터 저장 (⚠️ 파일명은 디렉터리 데이터 블록에 저장됨!)",
      "Data Block: 실제 파일 내용 데이터가 저장되는 블록",
    ],
    examTip: "Inode에 '파일명(File Name)'이 저장되지 않고 '디렉터리의 데이터 블록'에 저장된다는 점이 초빈출 함정!",
  },

  "Ext": {
    title: "리눅스 Ext 파일시스템과 저널링(Journaling)",
    importance: 4,
    badge: "시스템 아키텍처",
    definition:
      "리눅스의 표준 파일시스템 계열로, Ext3부터 데이터 무결성 보장을 위한 저널링(Journaling) 기능이 도입되었다.",
    keyPoints: [
      "Ext2: 비저널링 파일시스템. 비정상 종료 시 e2fsck 전수 검사로 부팅 지연 발생",
      "Ext3: 저널링(Journaling) 도입으로 비정상 종료 시 저널 로그만 검사하여 초고속 복구",
      "Ext4: 1EB 대용량 볼륨 지원, 익스텐트(Extent) 기반 단편화 방지, 지연 할당(Delayed Allocation)",
    ],
    examTip: "Ext2와 Ext3의 가장 결정적인 차이점을 묻는다면 100% '저널링(Journaling) 지원 여부'!",
  },

  "UFS": {
    title: "UFS (Unix File System) 및 실린더 그룹",
    importance: 3,
    badge: "유닉스 표준",
    definition:
      "전통적인 BSD 및 Solaris 유닉스의 표준 파일시스템으로, 디스크 탐색 시간을 최소화하기 위해 실린더 그룹(Cylinder Group) 구조를 사용한다.",
    keyPoints: [
      "실린더 그룹: 디스크 헤드의 이동 거리를 줄이기 위해 Inode와 관련 Data Block을 가까운 실린더에 모아 배치",
      "슈퍼블록 복사본: 슈퍼블록 손상에 대비하여 각 실린더 그룹마다 슈퍼블록 복사본을 분산 보관",
      "fsck 명령어로 복구 시 백업 슈퍼블록 위치를 지정하여 복구 가능",
    ],
    examTip: "슈퍼블록이 깨졌을 때 백업 슈퍼블록(32, 8192 등)을 이용해 복구하는 도구가 바로 'fsck'!",
  },

  "특수 권한": {
    title: "유닉스/리눅스 3대 특수 권한 (SetUID, SetGID, Sticky Bit)",
    importance: 5,
    badge: "실기/필기 초빈출 1순위",
    definition:
      "일반 사용자가 일시적으로 관리자 권한을 행사하거나 공용 디렉터리를 안전하게 공유하기 위해 부여하는 4000/2000/1000 단위의 확장 권한 비트이다.",
    keyPoints: [
      "SetUID (4000): 실행 중 소유자(User) 권한 획득 (소문자 's' = 실행권한+SetUID, 대문자 'S' = 실행권한 없는 상태)",
      "SetGID (2000): 실행 중 그룹(Group) 권한 획득 또는 디렉터리 내 생성 파일이 상위 디렉터리 그룹 상속",
      "Sticky Bit (1000): /tmp 등 공용 디렉터리에서 누구나 생성 가능하지만, 삭제는 파일 소유자와 root만 가능 (소문자 't' / 대문자 'T')",
    ],
    examTip: "find / -user root -perm -4000 (SetUID 검색) & chmod u-s /경로 (권한 회수) 명령어 연계 암기 필수!",
  },

  "8진수 권한": {
    title: "리눅스 파일 권한 및 8진수 표기법 (chmod)",
    importance: 4,
    badge: "실기 기초 계산",
    definition:
      "소유자(User), 그룹(Group), 기타 사용자(Others) 3영역에 대해 읽기(r=4), 쓰기(w=2), 실행(x=1)의 가중치 합산으로 파일 접근 권한을 제어하는 방식이다.",
    keyPoints: [
      "r=4, w=2, x=1 가중치 합산 (예: rwxr-xr-- = 754)",
      "기호 모드(Symbolic): u(User), g(Group), o(Others), a(All) / +(추가), -(제거), =(설정)",
      "예시: chmod g+w,o-r file.txt (그룹에 쓰기 권한 추가, 타인에게서 읽기 권한 박탈)",
    ],
    examTip: "숫자 755는 'rwxr-xr-x', 숫자 644는 'rw-r--r--'로 즉시 변환할 수 있도록 숙달할 것!",
  },

  "umask": {
    title: "기본 생성 권한 차단 마스크 (umask)",
    importance: 5,
    badge: "계산 공식 필수",
    definition:
      "새로운 파일이나 디렉터리가 생성될 때 부여되지 않도록 '차단(Masking)'할 권한 비트를 지정하는 8진수 값이다.",
    keyPoints: [
      "파일 최대 기본 권한: 666 (rw-rw-rw-, 실행 권한 x는 보안상 기본 제외)",
      "디렉터리 최대 기본 권한: 777 (rwxrwxrwx, 진입을 위해 실행 권한 x 필요)",
      "계산 공식: 최대 권한 - umask (비트 연산: Max AND NOT umask)",
      "예시 (umask 022): 파일 666 - 022 = 644 (rw-r--r--) / 디렉터리 777 - 022 = 755 (rwxr-xr-x)",
    ],
    examTip: "만약 umask가 027이면 파일 권한은 666 - 027 = 640이 아니라 '640' (6에서 7의 1인 x가 없으므로) 주의!",
  },

  "ACL": {
    title: "POSIX 파일 접근 제어 목록 (ACL - Access Control List)",
    importance: 4,
    badge: "세부 권한 통제",
    definition:
      "전통적인 소유자/그룹/기타 3단계 권한의 한계를 극복하여 특정 사용자나 그룹별로 개별적인 rwx 권한을 정밀 부여하는 확장 메커니즘이다.",
    keyPoints: [
      "getfacl: 파일이나 디렉터리에 설정된 세부 ACL 목록 조회",
      "setfacl -m u:user01:rwx file.txt: 특정 사용자에게 개별 권한 부여",
      "setfacl -x u:user01 file.txt: 특정 사용자의 ACL 항목 제거",
      "ls -l 결과 권한 끝에 '+' 표시(예: -rwxr-xr--+)가 나타나면 ACL이 적용된 상태",
    ],
    examTip: "권한 뒤에 붙는 '+' 표시는 ACL 적용을 의미하며, 확인 명령어는 'getfacl', 설정은 'setfacl'!",
  },

  // =================================================================
  // 2. 유닉스 로그
  // =================================================================
  "유닉스 로그": {
    title: "유닉스/리눅스 5대 핵심 로그 파일 분석",
    importance: 5,
    badge: "침해사고 분석 1순위",
    definition:
      "/var/log 디렉터리에 기록되는 시스템 로그인 및 사용자 행위 추적 바이너리·텍스트 로그 체계이다.",
    keyPoints: [
      "utmp (/var/run/utmp): 현재 시스템에 로그인 중인 사용자 상태 (who, w, finger 명령어)",
      "wtmp (/var/log/wtmp): 성공한 로그인/로그아웃 및 시스템 재부팅 이력 누적 (last 명령어)",
      "btmp (/var/log/btmp): 로그인 실패 기록으로 무차별 대입 공격 추적 1순위 (lastb 명령어)",
      "lastlog (/var/log/lastlog): 각 사용자 계정별 가장 최근 성공한 로그인 시간 (lastlog 명령어)",
      "sulog (/var/log/sulog): su 명령어로 다른 계정(root 등) 전환 시도 성공(+) 및 실패(-) 기록",
    ],
    examTip: "utmp/wtmp/btmp는 바이너리 파일이므로 cat이나 vi로 열리지 않고 전용 명령어(last, lastb, who)로 열람함!",
  },

  // =================================================================
  // 3. 계정 관리
  // =================================================================
  "etc passwd": {
    title: "리눅스 계정 정보 파일 (/etc/passwd) 7필드 구조",
    importance: 5,
    badge: "단답형 단골",
    definition:
      "시스템에 등록된 모든 사용자 계정의 기본 정보를 콜론(:)으로 구분하여 저장하는 전원 열람 가능(권한 644) 파일이다.",
    keyPoints: [
      "7개 필드 구조: username : password(x) : UID : GID : comment : home_dir : login_shell",
      "UID 0: root 슈퍼유저 권한 식별자 (계정명이 다르더라도 UID가 0이면 root 권한 행사 가능)",
      "login_shell을 '/sbin/nologin' 또는 '/bin/false'로 지정하면 셸 로그인이 차단됨 (시스템 데몬 계정 보안)",
      "두 번째 필드의 'x': 암호화된 비밀번호가 /etc/shadow 파일에 별도 분리 저장되어 있음을 의미",
    ],
    examTip: "관리자 권한의 본질은 이름 'root'가 아니라 'UID 0'이라는 점이 실기/필기 단골 빈출!",
  },

  "etc shadow": {
    title: "리눅스 계정 패스워드 해시 구조 (/etc/shadow)",
    importance: 5,
    badge: "단답형 단골",
    definition:
      "일반 사용자가 읽을 수 없는 root 전용(권한 000 또는 400) 암호화 패스워드 및 계정 에이징(Aging) 관리 파일이다.",
    keyPoints: [
      "형식: $id$salt$encrypted_hash (예: $6$qZ4...)",
      "$1 : MD5 (128bit)",
      "$5 : SHA-256 (256bit)",
      "$6 : SHA-512 (512bit, 최신 리눅스 기본 표준)",
      "Salt: 동일한 비밀번호라도 서로 다른 해시값이 생성되도록 무작위 난수를 덧붙여 레인보우 테이블 공격 무력화",
    ],
    examTip: "$6$이 나오면 무조건 'SHA-512'! 2번째 필드가 '*' 또는 '!'이면 로그인 비활성화(계정 잠금) 상태!",
  },

  "Run Level": {
    title: "리눅스 런레벨 (Run Level) 6단계",
    importance: 3,
    badge: "시스템 관리",
    definition:
      "시스템의 부팅 및 운영 상태를 단계별로 정의한 모드로, systemd 환경에서는 target 유닛으로 매핑된다.",
    keyPoints: [
      "0: Halt (시스템 종료)",
      "1: Single User Mode (단일 사용자 / root 패스워드 복구용 콘솔 모드)",
      "3: Multi-User Mode (네트워크 지원 텍스트 콘솔 모드 - 서버 표준)",
      "5: Multi-User GUI Mode (X-Window 지원 그래픽 모드)",
      "6: Reboot (시스템 재부팅)",
    ],
    examTip: "root 패스워드 분실 시 GRUB 부트로더에서 런레벨 1(single)로 진입하여 비밀번호를 재설정함!",
  },

  "PAM": {
    title: "리눅스 플러그형 인증 모듈 (PAM - Pluggable Authentication Modules)",
    importance: 5,
    badge: "실기 14점 초빈출",
    definition:
      "응용 프로그램(login, sshd, su 등)을 수정하지 않고도 시스템 인증 방식을 플러그인 형태로 유연하게 교체·제어하는 인터페이스 아키텍처이다.",
    keyPoints: [
      "4대 모듈 타입: auth(신원 인증), account(계정 유효성), password(암호 변경/규칙), session(환경 설정/정리)",
      "required: 실패해도 스택 내 나머지 모듈 끝까지 수행 후 최종 실패 (모듈 실패 정보 은폐)",
      "requisite: 모듈 실패 시 나머지 모듈을 중단하고 그 즉시 실패 반환",
      "sufficient: 앞서 실패가 없었고 이 모듈이 성공하면 나머지 auth 스택 건너뛰고 즉시 성공 반환",
    ],
    examTip: "pam_faillock.so (또는 pam_tally2.so)의 deny=5 unlock_time=600 옵션으로 브루트포스 계정 잠금 정책 수립!",
  },

  "점검": {
    title: "실전 시스템 점검 및 계정 잠금 명령어",
    importance: 5,
    badge: "실무 작업형 단골",
    definition:
      "침해사고 조사 및 KISA 취약점 점검 기준에 따른 리눅스 계정·권한 실무 명령어 체계이다.",
    keyPoints: [
      "find / -user root -perm -4000: root 소유의 SetUID 비인가 백도어 파일 검색",
      "passwd -l 계정 / usermod -L 계정: 계정 강제 잠금 (/etc/shadow 패스워드 필드 앞에 '!' 삽입)",
      "usermod -U 계정: 계정 잠금 해제 (Unlock)",
      "chage -l 계정: 패스워드 만료일, 최소/최대 변경 주기 등 계정 에이징 정보 상세 열람",
    ],
    examTip: "사용자 로그인 셸을 '/sbin/nologin' 또는 '/bin/false'로 변경하면 대화형 셸 로그인을 원천 차단함!",
  },

  "xinetd": {
    title: "슈퍼 데몬 (inetd / xinetd) 접근 제어",
    importance: 4,
    badge: "네트워크 서비스 보안",
    definition:
      "외부 서비스 요청(포트)을 상시 대기하다가 패킷 유입 시 해당 개별 데몬을 메모리에 띄워 전달하는 수퍼 데몬이다.",
    keyPoints: [
      "xinetd.conf 주요 보안 설정 지시자:",
      "only_from: 서비스 접속을 허용할 IP 대역 지정 (화이트리스트)",
      "no_access: 서비스 접속을 차단할 IP 대역 지정 (블랙리스트)",
      "cps = 50 10: 초당 50개 이상 요청 유입 시 10초간 해당 서비스 임시 중단 (DoS 공격 방어)",
      "instances: 동시 최대 접속 클라이언트 수 제한",
    ],
    examTip: "only_from(접속 허용)과 cps(초당 연결 수 제한) 지시자의 철자와 역할을 확실히 암기할 것!",
  },

  // =================================================================
  // 4. 리눅스 실무 명령어
  // =================================================================
  "네트워크·프로세스": {
    title: "리눅스 네트워크 및 프로세스 실무 분석 명령어",
    importance: 5,
    badge: "실무 작업형 필수",
    definition:
      "침해사고 발생 시 백도어 연결 및 이상 프로세스를 추적하기 위해 사용하는 리눅스 기본 유틸리티 명령어 군이다.",
    keyPoints: [
      "netstat -anp (또는 ss -tulnp): 열려 있는 포트(Listen) 및 연결 상태(Established)와 담당 프로세스(PID) 확인",
      "lsof -i :포트번호: 특정 포트를 열고 있는 프로세스와 실행 파일 경로 추적",
      "ps -ef (또는 ps aux): 시스템에서 실행 중인 모든 프로세스의 PID, PPID, 실행 경로 확인",
      "kill -9 PID: 프로세스를 강제 종료(SIGKILL)하여 악성 프로세스 긴급 차단",
      "who / w: 현재 시스템에 접속 중인 사용자의 계정명, 터미널, 접속 IP 및 수행 중인 작업 확인",
    ],
    examTip: "특정 포트를 사용하는 프로세스를 찾을 땐 'lsof -i :포트', 프로세스 강제 종료 시그널은 '-9(SIGKILL)'!",
  },

  "find 명령어": {
    title: "리눅스 find 파일 검색 명령어 실무 옵션",
    importance: 5,
    badge: "실기 14점 단골",
    definition:
      "조건에 맞는 파일을 파일시스템 전체에서 고속 탐색하여 악성 파일이나 권한 취약점을 색출하는 유틸리티이다.",
    keyPoints: [
      "-name '파일명': 파일 이름으로 검색 (와일드카드 '*' 사용 가능)",
      "-user 계정명: 특정 사용자가 소유한 파일 검색 (예: -user root)",
      "-perm -4000: SetUID 권한이 포함된 파일 검색 (-perm /4000)",
      "-mtime -n: 최근 n일 이내에 수정된 파일 검색 (+n은 n일 이전)",
      "-size +100M: 크기가 100MB 이상인 대용량 파일 검색",
      "-exec 명령어 {} \\;: 검색된 파일들을 대상으로 후속 명령어 일괄 실행",
    ],
    examTip: "find / -user root -perm -4000 -exec ls -l {} \\; 구문은 서술형에서 1글자도 틀리지 않고 쓸 수 있어야 함!",
  },

  // =================================================================
  // 5. 윈도우 아키텍처 및 계정
  // =================================================================
  "메시지 기반": {
    title: "윈도우 메시지 기반(Message-driven) 아키텍처",
    importance: 3,
    badge: "윈도우 구조",
    definition:
      "키보드, 마우스 등 사용자의 모든 하드웨어 인터럽트를 시스템 메시지로 변환하여 메시지 큐에 넣고 순차 처리하는 이벤트 구동 방식이다.",
    keyPoints: [
      "시스템 메시지 큐: 디바이스 드라이버가 입력 이벤트를 감지하여 OS 메시지 큐에 저장",
      "스레드 메시지 큐: OS가 해당 이벤트를 수신할 애플리케이션의 큐로 라우팅",
      "메시지 루프: GetMessage()로 큐에서 메시지를 꺼내 DispatchMessage()로 윈도우 프로시저(WndProc)에 전달",
    ],
    examTip: "윈도우 후킹(Hooking) 악성코드는 이 메시지 전달 경로(SetWindowsHookEx)를 가로채 키로깅을 수행함!",
  },

  "핵심 프로세스": {
    title: "윈도우 보안 핵심 5대 프로세스 (Winlogon, GINA, LSA, SAM, SRM)",
    importance: 5,
    badge: "윈도우 보안 1순위",
    definition:
      "윈도우 시스템의 사용자 인증, 자격증명 저장 및 객체 접근 제어(ACL)를 담당하는 커널/사용자 모드 프로세스 군이다.",
    keyPoints: [
      "Winlogon: SAS(Ctrl+Alt+Del) 감지 및 로그인 UI 구동 담당",
      "GINA / Credential Provider: 사용자 계정과 암호를 받아 LSA로 안전하게 전달",
      "LSA (lsass.exe): 로컬 보안 정책 강제, 인증 토큰 발급, 보안 감사 로그 기록",
      "SAM (Security Accounts Manager): 로컬 계정 패스워드 NTLM 해시값을 저장하는 보안 DB",
      "SRM (Security Reference Monitor): 프로세스의 접근 토큰(SID)과 파일의 ACL을 비교하여 실제 접근 허용/거부 결정",
    ],
    examTip: "사용자 식별자는 'SID(Security Identifier)', 접근 권한 검사 엔진은 'SRM', 해시 저장은 'SAM'!",
  },

  "내장 계정": {
    title: "윈도우 내장 그룹 및 계정 권한 체계",
    importance: 4,
    badge: "윈도우 관리",
    definition:
      "윈도우 설치 시 자동 생성되는 기본 보안 그룹으로, 시스템 관리 및 리소스 접근 범위를 규정한다.",
    keyPoints: [
      "Administrators: 컴퓨터/도메인 전체에 대한 완전한 무제한 제어 권한 보유 (SID 끝자리 500/544)",
      "Users: 로컬 사용자 계정. 시스템 전체 설정 변경은 불가능하며 응용프로그램 실행 및 개인 파일만 제어",
      "Guests: 임시 접속자 계정. 기본 비활성화 권장",
      "Backup Operators: 보안 권한과 무관하게 백업 및 복원 목적으로 시스템의 모든 파일을 읽고 쓸 수 있음",
    ],
    examTip: "관리자 계정명(Administrator)은 잘 알려진 계정이므로 다른 이름으로 변경(Rename)하는 것이 보안 모범 실무!",
  },

  "로그 종류": {
    title: "윈도우 이벤트 뷰어 3대 기본 로그",
    importance: 4,
    badge: "윈도우 감사 로그",
    definition:
      "윈도우 이벤트 뷰어(eventvwr.msc)에서 시스템 상태와 보안 이벤트를 추적하는 3대 채널 로그이다.",
    keyPoints: [
      "응용 프로그램(Application) 로그: 설치된 응용 프로그램이 발생시키는 이벤트 기록",
      "보안(Security) 로그: 유효하거나 유효하지 않은 로그온 시도, 파일 생성/열람/삭제 등 감사 정책(Audit Policy)에 의해 설정된 보안 이벤트 기록 (공격자가 변조 시도 1순위)",
      "시스템(System) 로그: 윈도우 시스템 구성 요소(디바이스 드라이버 로드 실패, 서비스 시작/중단)의 이벤트 기록",
    ],
    examTip: "보안 로그는 '로컬 보안 정책 > 감사 정책'에서 감사를 활성화해야만 기록된다는 점을 기억할 것!",
  },

  // =================================================================
  // 6. 시스템 해킹 방어
  // =================================================================
  "버퍼 오버플로우": {
    title: "버퍼 오버플로우(BOF) 3대 시스템 방어 기법",
    importance: 5,
    badge: "보안 메커니즘 필수",
    definition:
      "스택이나 힙 버퍼의 경계값을 초과하여 RET(복귀 주소)를 변조하는 공격을 운영체제 및 컴파일러 레벨에서 방어하는 기술이다.",
    keyPoints: [
      "ASLR (Address Space Layout Randomization): 실행 시마다 스택, 힙, 라이브러리 메모리 주소를 무작위 배치하여 고정 주소 점프 무력화",
      "DEP / NX bit (Data Execution Prevention): 데이터 영역(스택/힙)에서 코드 실행 권한을 박탈하여 쉘코드 실행 차단",
      "스택 가드 (Stack Guard / Canary): 버퍼와 RET 사이에 무작위 '카나리(Canary)' 값을 삽입하고 함수 종료 전 변조 여부를 검사하여 조기 종료",
    ],
    examTip: "ASLR(주소 무작위화), DEP/NX(실행 권한 박탈), Canary(스택 무결성 검증)의 영문 약어와 메커니즘 매칭 필수!",
  },

  "TOCTOU": {
    title: "경쟁 조건 (Race Condition / TOCTOU) 취약점",
    importance: 4,
    badge: "시스템 취약점",
    definition:
      "자원을 검사하는 시점(Time of Check)과 실제 사용하는 시점(Time of Use) 사이의 시간차(Race Window)를 악용하여 파일 링크나 권한을 바꿔치기하는 공격이다.",
    keyPoints: [
      "심볼릭 링크 공격: 권한 검사 통과 후 실제 파일 열기 직전에 /etc/shadow 등의 심볼릭 링크로 교체",
      "대응 방안 1: 임시 파일 생성 시 예측 불가능한 임의의 파일명 사용 (mkstemp() 함수 사용)",
      "대응 방안 2: 파일 오픈 시 `O_CREAT | O_EXCL` 플래그를 조합하여 이미 파일이 존재하면 열지 않고 즉시 에러 처리",
    ],
    examTip: "TOCTOU의 영문 풀이(Time of Check to Time of Use)와 안전한 함수(mkstemp), 플래그(O_CREAT | O_EXCL) 암기!",
  },

  "루트킷": {
    title: "루트킷 (Rootkit) 및 시스템 무결성 점검",
    importance: 4,
    badge: "침해사고 은닉 방어",
    definition:
      "공격자가 시스템에 침투한 후 백도어, 악성 프로세스, 네트워크 포트, 파일 등을 관리자로부터 은폐(Stealth)하기 위해 커널이나 시스템 바이너리를 조작하는 도구 모음이다.",
    keyPoints: [
      "은폐 기법: 시스템 콜(Syscall) 후킹, 커널 오브젝트 조작(DKOM), 기본 명령어(ps, ls, netstat) 변조",
      "탐지 및 점검: Tripwire, AIDE 등 파일 무결성 점검 도구로 중요 실행 파일의 해시값(SHA-256) 변조 여부 주기적 검증",
      "전용 탐지 도구: rkhunter, chkrootkit",
    ],
    examTip: "파일 무결성 검증 도구(Tripwire, AIDE)의 원리는 사전에 계산해둔 해시 DB와 현재 파일의 해시값을 비교하는 것!",
  },

  // =================================================================
  // 7. 악성코드 분류
  // =================================================================
  "바이러스": {
    title: "컴퓨터 바이러스 (Virus)의 특징과 매크로 바이러스",
    importance: 4,
    badge: "악성코드 기초",
    definition:
      "정상적인 실행 파일이나 문서(숙주 프로그램)에 기생하여 자신을 복제하고 감염시키는 악성코드이다.",
    keyPoints: [
      "숙주(Host) 필수: 독자적으로 실행되지 못하고 반드시 정상 실행 파일이나 문서가 실행될 때 함께 동작",
      "매크로 바이러스: MS 워드, 엑셀 등의 매크로 기능을 악용하여 오피스 문서를 열 때 자동 실행되는 바이러스",
      "전파 방식: 감염된 파일의 이동(USB, 이메일 첨부파일 등)",
    ],
    examTip: "바이러스와 웜의 결정적 차이는 '숙주 프로그램(Host)의 필요 여부'!",
  },

  "웜": {
    title: "웜 (Worm)과 자가 전파 메커니즘",
    importance: 5,
    badge: "네트워크 침해사고",
    definition:
      "숙주 프로그램 없이 독자적으로 실행되며, 네트워크 취약점을 이용하여 시스템 간에 스스로를 대량 자가 복제·전파하는 악성코드이다.",
    keyPoints: [
      "독자 실행(Standalone): 숙주 파일이 필요 없으며 프로세스 자체로 동작함",
      "자가 복제(Self-Replicating): 네트워크 대역을 스캔하여 패치되지 않은 원격 취약점(SMB, RPC 등)을 통해 자동 침투",
      "대표 사례: SQL 슬래머(Slammer), 컨피커(Conficker), 모리스 웜",
    ],
    examTip: "네트워크 대역폭을 급격히 고갈시키며 숙주 없이 자가 복제한다는 설명이 나오면 정답은 '웜(Worm)'!",
  },

  "트로이목마": {
    title: "트로이목마 (Trojan Horse) 및 백도어 (Backdoor)",
    importance: 4,
    badge: "비인가 침투",
    definition:
      "정상적이고 유용한 프로그램(유틸리티, 게임)으로 위장하여 사용자가 직접 실행하게 유도한 후 시스템 제어권을 탈취하는 악성코드이다.",
    keyPoints: [
      "비자기복제: 바이러스나 웜과 달리 다른 파일이나 컴퓨터로 '스스로 자가 복제하지 않음'",
      "백도어(Backdoor / RAT): 방화벽을 우회하여 역방향 연결(Reverse Connection)을 맺고 원격 셸 및 파일 제어 통로 제공",
      "트로이목마의 본질: '위장(Deception)'과 '비자가복제(Non-replicating)'",
    ],
    examTip: "자가 복제 능력이 '없다'는 점이 트로이목마의 가장 큰 분류학적 특징!",
  },

  "랜섬웨어": {
    title: "랜섬웨어 3대 핵심 사례 (WannaCry, Petya, Locky)",
    importance: 4,
    badge: "최신 악성코드 분석",
    definition:
      "시스템 또는 사용자 파일을 비대칭키/대칭키 암호화 기법으로 인질 삼아 금전(비트코인)을 요구하는 악성 소프트웨어이다.",
    keyPoints: [
      "WannaCry: 윈도우 SMBv1 취약점(MS17-010, 이터널블루 EternalBlue)을 악용하여 TCP 445 포트를 통해 네트워크로 자가 전파(Worm)",
      "Petya / NotPetya: 개별 파일뿐만 아니라 NTFS의 MFT(Master File Table)와 하드디스크의 MBR(Master Boot Record) 자체를 암호화하여 부팅 불가 초래",
      "Locky: 악성 매크로가 포함된 MS Office 이메일 첨부파일(피싱)을 통해 유포",
    ],
    examTip: "WannaCry의 전파 프로토콜은 'SMBv1(TCP 445)', 방어책은 SMB 포트 차단 및 최신 보안 패치 적용!",
  },

  "봇": {
    title: "봇넷 (Botnet)과 C&C (Command & Control) 서버",
    importance: 5,
    badge: "DDoS 공격 인프라",
    definition:
      "해커(Botmaster)의 원격 명령을 수신하여 실행할 수 있도록 감염된 대량의 좀비 PC 네트워크이다.",
    keyPoints: [
      "C&C 서버: 봇마스터가 악성 봇들에게 공격 명령(DDoS, 스팸 전송 등)을 하달하는 중앙 서버 (IRC, HTTP, P2P 프로토콜 악용)",
      "좀비 PC (Zombie PC): 사용자 몰래 봇 악성코드에 감염되어 백그라운드에서 C&C의 지시를 대기하는 컴퓨터",
      "방어책: C&C IP/도메인 DNS 싱크홀(Sinkhole) 적용 및 악성 트래픽 차단",
    ],
    examTip: "C&C 서버와의 접속을 중간에서 가로채 정상적인 격리 서버로 유도하는 기술을 'DNS 싱크홀(Sinkhole)'이라 함!",
  },
};

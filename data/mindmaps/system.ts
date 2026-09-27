import type { MindmapSection } from "@/types/mindmap";

export const systemMindmap: MindmapSection = {
  id: "system",
  title: "시스템 보안",
  description: "유닉스·윈도우 실무 보안 — 컴퓨터구조·운영체제 지식을 전제로 함",
  chart: `mindmap
  root((시스템 보안))
    유닉스 파일시스템
      structBox["구조<br/>1) Boot Block — 부팅 프로그램<br/>2) Super Block — 파일시스템 크기, 블록 수, 빈 블록<br/>3) Inode — 소유자, 파일크기, 데이터블록 주소, 생성시간<br/>4) Data Block — 실제 사용자 데이터"]
      종류
        Ext2 Ext3 Ext4
        UFS
      권한 관리
        permBox["특수 권한<br/>1) SetUID — 파일 소유자 권한으로 실행<br/>2) SetGID — 소유 그룹 권한으로 실행<br/>3) Sticky Bit — 소유자와 root만 삭제 가능"]
        chmodBox["8진수 권한 계산(실기)<br/>1) r=4, w=2, x=1의 합으로 표현<br/>2) 예: rwxr-xr-- = 754<br/>3) chmod 754 file.txt로 적용"]
        umask
        ACL
    logBox["유닉스 로그<br/>1) utmp — 현재 로그인 중인 사용자<br/>2) wtmp — 로그인 로그아웃 이력<br/>3) lastlog — 마지막 로그인 성공 기록<br/>4) btmp — 로그인 실패 기록<br/>5) sulog — su 명령어 사용 기록"]
    계정 관리
      etc passwd
      etc shadow
      runLevelBox["Run Level<br/>1) 0 — 시스템 정지<br/>2) 1 — 단일 사용자 모드, 관리자 전용<br/>3) 3 — 다중 사용자 모드, 콘솔<br/>4) 5 — 다중 사용자 모드, GUI<br/>5) 6 — 재부팅"]
      PAM 인증 모듈
      checkCmdBox["실전 점검·계정 잠금 명령어(실기)<br/>1) find / -perm -4000 — SUID 파일 검색<br/>2) last / lastb — 로그인 성공(wtmp)·실패(btmp) 이력 확인<br/>3) passwd -l / usermod -L 계정 — 계정 잠금, usermod -U는 잠금 해제<br/>4) chage -l 계정 — 비밀번호 만료 정보 확인"]
      xinetdBox["xinetd.conf 항목(실기)<br/>1) service — 서비스 이름<br/>2) socket_type — stream 또는 dgram<br/>3) protocol — tcp 또는 udp<br/>4) wait — 동시 처리 여부<br/>5) user — 실행 권한 사용자<br/>6) server — 실행 파일 경로"]
    리눅스 실무 명령어
      procNetBox["네트워크·프로세스 점검 명령어(실기)<br/>1) netstat -an — 전체 연결·리스닝 포트 확인<br/>2) lsof -i :포트 — 해당 포트를 사용 중인 프로세스 확인<br/>3) ps -ef — 전체 프로세스 목록 확인<br/>4) kill -9 PID — 프로세스 강제 종료<br/>5) who / w — 현재 로그인 사용자 확인"]
      findBox["find 명령어 옵션(실기)<br/>1) find / -name 파일명 — 이름으로 검색<br/>2) find / -user 사용자 — 소유자로 검색<br/>3) find / -mtime -1 — 최근 1일 이내 수정 파일 검색<br/>4) find / -size +100M — 100MB 이상 파일 검색"]
    윈도우 아키텍처
      메시지 기반 구조
      processBox["핵심 프로세스<br/>1) Winlogon — 로그인 절차 담당<br/>2) GINA — 계정정보와 암호화된 패스워드를 LSA에 전달<br/>3) LSA — 계정 검증과 감사기록 수행<br/>4) SAM — 계정 정보(해시값) 저장<br/>5) SRM — 사용자별 SID 부여 및 권한 검사"]
    윈도우 계정과 로그
      accountBox["내장 계정<br/>1) Administrators — 모든 권한 보유<br/>2) Users — 로컬 사용자 계정<br/>3) Guests — 네트워크 접근 가능, 허락된 권한만 보유<br/>4) Backup Operators — 도메인 컨트롤러 파일 백업<br/>5) Power Users — 로컬 사용자 생성·수정 권한"]
      로그 종류
        응용프로그램 로그
        보안 로그
        시스템 로그
    시스템 해킹 방어
      bofBox["버퍼 오버플로우 대응<br/>1) ASLR — 메모리 주소를 실행마다 무작위 배치<br/>2) DEP — 데이터 영역의 코드 실행을 차단<br/>3) 스택 가드 — 카나리 값으로 스택 변조 탐지"]
      경쟁 조건 대응 TOCTOU
      루트킷 무결성 점검
    악성코드 분류
      바이러스
        매크로 바이러스
      웜 자가전파
      트로이목마
        백도어 비자가증식
      ransomBox["랜섬웨어 주요 사례(실기)<br/>1) Locky — 이메일 첨부파일로 유포<br/>2) WannaCry — SMB 취약점(이터널블루)으로 전파<br/>3) Petya — MFT에 악성코드 주입 후 MBR을 암호화"]
      봇 좀비PC 봇넷`,
};

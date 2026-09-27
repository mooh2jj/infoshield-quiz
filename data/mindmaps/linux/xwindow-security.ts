import type { MindmapSection } from "@/types/mindmap";

export const xwindowSecurityMindmap: MindmapSection = {
  id: "xwindow-security",
  title: "X 윈도우와 응용 보안",
  description: "X 윈도우 구조, 가상화·백업, PAM 인증과 로그 분석",
  chart: `mindmap
  root((X 윈도우와 응용 보안))
    X 윈도우 구조
      xArchBox["X 윈도우 아키텍처<br/>1) 클라이언트-서버 모델 — X Server(화면출력·입력장치 제어), X Client(애플리케이션)<br/>2) X Protocol, Xlib, XCB"]
      deBox["데스크톱 환경과 디스플레이 매니저<br/>1) GNOME(Mutter, GTK+), KDE(KWin, Qt), XFCE, LXDE<br/>2) 디스플레이 매니저 — GDM, KDM, LightDM, XDM<br/>3) 차세대 디스플레이 서버 — Wayland"]
    X 원격 접근
      xRemoteBox["X 원격 접근 통제<br/>1) xhost — +/- IP, 호스트 기반 접근 제어<br/>2) xauth — 매직쿠키(~/.Xauthority) 기반 인증<br/>3) DISPLAY 환경변수 — 호스트IP:디스플레이번호.스크린번호"]
      xDisplayExampleBox["DISPLAY 변수 설정 예제<br/>1) 로컬 X 클라이언트 화면을 원격 X 서버(192.168.1.100)로 전송<br/>2) export DISPLAY=192.168.1.100:0.0"]
    가상화와 백업
      virtualBox["가상화와 클러스터링<br/>1) 하이퍼바이저 Type 1 — 전가상화·베어메탈(KVM, Xen, ESXi)<br/>2) 하이퍼바이저 Type 2 — 호스트형(VirtualBox, VMware Workstation)<br/>3) 클러스터링 — HA(고가용성), LVS(로드밸런싱), Beowulf(HPC)"]
      backupBox["백업 솔루션<br/>1) tar, cpio<br/>2) dd — 디스크 단위 통 복사<br/>3) rsync — 원격 증분 백업<br/>4) dump / restore"]
    PAM 인증
      pamBox["PAM 인증 모듈 기초<br/>1) 설정 위치 — /etc/pam.d/<br/>2) 모듈 타입 — auth, account, password, session"]
      pamFlagBox["PAM 제어 플래그<br/>1) required — 실패해도 스택을 끝까지 실행한 뒤 최종 실패 처리<br/>2) requisite — 실패 시 즉시 인증 실패로 중단<br/>3) sufficient — 성공하면 즉시 인증 성공 처리<br/>4) optional — 성공·실패가 전체 결과에 치명적이지 않음"]
    logBox["로그 데몬과 로그 파일<br/>1) rsyslogd — /etc/rsyslog.conf, Facility.Priority 형식<br/>2) journald — systemd-journald, journalctl로 조회<br/>3) /var/log/wtmp → last(로그인·로그아웃·부팅 기록)<br/>4) /var/log/btmp → lastb(로그인 실패 기록)<br/>5) /var/log/lastlog → lastlog(사용자별 최근 접속)<br/>6) /var/log/secure(Rocky) 또는 auth.log(Ubuntu) — 인증·SSH 로그"]
    SELinux와 접근 통제
      selinuxBox["SELinux<br/>1) getenforce / setenforce 0·1 — 현재 모드 확인 / Permissive·Enforcing 임시 전환<br/>2) /etc/selinux/config — SELINUX=enforcing·permissive·disabled 영구 설정<br/>3) 모드 — Enforcing(강제), Permissive(위반 시 로그만), Disabled(비활성)"]
      tcpWrapperBox["TCP Wrapper 접근 통제<br/>1) /etc/hosts.allow — 허용 규칙, /etc/hosts.deny — 차단 규칙<br/>2) 규칙 형식 — 데몬명 : 호스트/IP<br/>3) hosts.allow가 hosts.deny보다 우선 적용"]`,
};

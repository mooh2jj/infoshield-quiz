import type { MindmapSection } from "@/types/mindmap";

export const processSchedulingMindmap: MindmapSection = {
  id: "process-scheduling",
  title: "프로세스와 스케줄링",
  description: "프로세스 관리, 시그널, crontab·at와 systemd 서비스",
  chart: `mindmap
  root((프로세스와 스케줄링))
    프로세스 기초와 모니터링
      processBasicBox["프로세스 기초<br/>1) PID·PPID — 프로세스·부모 프로세스 식별번호<br/>2) 데몬 — Standalone 방식 vs xinetd·systemd 소켓 기반<br/>3) &, jobs, fg %번호, bg %번호 — 포그라운드·백그라운드 전환<br/>4) nohup — 세션 종료 후에도 프로세스를 지속 실행"]
      processMonitorBox["프로세스 모니터링 명령어(실기)<br/>1) ps -ef / aux — 전체 프로세스 목록 확인<br/>2) pstree — 프로세스 트리 구조 확인<br/>3) top — P·M·T(정렬 기준), k(종료), q(종료), h(도움말)<br/>4) pgrep, lsof — 이름으로 검색, 열린 파일·포트 확인"]
    시그널과 우선순위
      signalBox["주요 시그널 번호(실기)<br/>1) 1 SIGHUP — 재시작·설정 리로드<br/>2) 2 SIGINT — Ctrl+C, 인터럽트<br/>3) 9 SIGKILL — 강제 즉시 종료, 블록 불가<br/>4) 15 SIGTERM — 정상 종료 요청(기본값)<br/>5) 19 SIGSTOP — 즉각 중지, 블록 불가<br/>6) 20 SIGTSTP — Ctrl+Z, 일시 중단"]
      signalExampleBox["시그널 활용 예제(실기)<br/>1) 세션 유지하며 설정만 재적용 — SIGHUP(1) 전달<br/>2) 강제로 즉시 종료 — SIGKILL(9) 전달<br/>3) kill, killall, pkill로 시그널을 프로세스에 전달"]
      niceBox["프로세스 우선순위<br/>1) nice — -20(최고 우선순위) ~ 19(최저), 기본값 0<br/>2) renice — 실행 중인 프로세스의 우선순위를 변경"]
    crontab 스케줄링
      cronBox["crontab 필드 구조(실기)<br/>1) 분(0-59) 시(0-23) 일(1-31) 월(1-12) 요일(0-7, 0과 7은 일요일)<br/>2) crontab — -e(편집) -l(목록) -r(삭제) -u(사용자 지정)"]
      cronExampleBox["crontab 예제(실기)<br/>1) 매월 1일·15일 새벽 4시 실행<br/>2) 필드 값 — 0 4 1,15 * *"]
    at와 시스템 cron
      cronSystemBox["시스템 cron과 at(실기)<br/>1) /etc/crontab, /etc/cron.{hourly,daily,weekly,monthly}<br/>2) anacron — 시스템 종료로 누락된 주기 작업을 보정<br/>3) at·atq·atrm — 1회성 작업 예약·조회·삭제<br/>4) /etc/at.allow·/etc/at.deny — 사용 허용·차단 목록"]
    systemd 서비스 관리
      systemctlBox["systemctl 명령어(실기)<br/>1) start / stop / restart — 서비스 시작·중지·재시작<br/>2) status / reload — 상태 확인·설정 리로드<br/>3) enable / disable — 부팅 시 자동 시작 등록·해제"]
      runlevelBox["런레벨과 타깃 매핑(실기)<br/>1) 런레벨 3(CLI 다중 사용자) → multi-user.target<br/>2) 런레벨 5(GUI 그래픽) → graphical.target<br/>3) systemctl set-default — 기본 부팅 타깃 변경"]`,
};

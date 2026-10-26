"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Flame,
  Search,
  Copy,
  Check,
  X,
  Minimize2,
  Maximize2,
  Bookmark,
  FileText,
  Sparkles,
  ExternalLink,
  RotateCcw,
  Star,
  Zap,
  HelpCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  BarChart3,
  CheckCircle2,
  XCircle,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LinuxRoiMermaid } from "./LinuxRoiMermaid";

export interface LinuxRoiItem {
  id: string;
  sectionId: "accounts-permissions" | "filesystem-shell" | "process-scheduling" | "package-network" | "xwindow-security";
  sectionName: string;
  grade: "S" | "A" | "B";
  stars: 3 | 4 | 5;
  frequencyRate: string;
  title: string;
  formula: string;
  trap: string;
  tags: string[];
  mermaidChart?: string;
  diagramTitle?: string;
}

export const LINUX_ROI_ITEMS: LinuxRoiItem[] = [
  // =================================================================
  // === [1] 계정, 권한 & 디스크 쿼터 (accounts-permissions)
  // =================================================================
  {
    id: "roi-01",
    sectionId: "accounts-permissions",
    sectionName: "계정·권한·쿼터",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "리눅스 3대 특수 권한 (SetUID 4000, SetGID 2000, Sticky Bit 1000)",
    formula: "SetUID(4000, s/S): 소유자 권한 일시 실행 (/usr/bin/passwd) / SetGID(2000, s/S): 생성 파일의 그룹 소유권 상속 / Sticky Bit(1000, t/T): 공유 디렉터리(/tmp), 삭제·이름변경은 파일 소유자 및 root만 가능",
    trap: "1) 실행 권한(x)이 없는 상태에서 특수 권한을 부여하면 대문자 'S' 또는 'T'로 표기됨! 2) /tmp 디렉터리에 적용된 권한은 Sticky Bit(1000, rwxrwxrwt)로, 누구나 쓸 수는 있지만 타인의 파일은 삭제할 수 없음!",
    tags: ["SetUID", "SetGID", "StickyBit", "4000", "2000", "1000", "passwd", "tmp"],
    diagramTitle: "리눅스 3대 특수 권한 (SetUID·SetGID·Sticky Bit) 핵심 구조",
    mermaidChart: `flowchart TD
  SP["리눅스 3대 특수 권한 (Octal Permission)"]
  SU["SetUID (4000, s/S)<br/>실행 시 일시적 파일 소유자(root) 권한 획득<br/>대표 사례: /usr/bin/passwd"]
  SG["SetGID (2000, s/S)<br/>디렉터리 내 하위 파일 생성 시 그룹 소유권 자동 상속<br/>공동 프로젝트 디렉터리"]
  SB["Sticky Bit (1000, t/T)<br/>공유 디렉터리 내 누구나 파일 생성 가능<br/>삭제·이름변경은 본인 소유자 및 root만 허용: /tmp"]
  SP --> SU
  SP --> SG
  SP --> SB
  style SU fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b
  style SG fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
  style SB fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f`,
  },
  {
    id: "roi-02",
    sectionId: "accounts-permissions",
    sectionName: "계정·권한·쿼터",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "umask 비트마스킹 계산 공식 (umask 0027 함정 탈출)",
    formula: "기본 최대 권한: 디렉터리 777 (rwxrwxrwx), 일반 파일 666 (rw-rw-rw-) / umask는 허용할 권한을 빼는(마스킹하는) 필터",
    trap: "[단골 1번 함정] umask 0027 적용 시 디렉터리는 777-027=750(rwxr-x---). 파일은 단순 뺄셈 666-027=639가 아니라, 파일에 없는 실행(x, 1) 권한은 제거할 수 없으므로 7(rwx)이 빠지면 0(---)이 되어 640(rw-r-----)이 됨!",
    tags: ["umask", "0022", "0027", "640", "750", "마스킹"],
    diagramTitle: "umask 0027 적용 시 파일(640)과 디렉터리(750) 비트 연산 도식",
    mermaidChart: `flowchart LR
  subgraph DIR["디렉터리 (최대 777)"]
    D1["777 (rwxrwxrwx)"] --> D2["- umask 027 (----w-rwx)"] --> D3["결과: 750 (rwxr-x---)"]
  end
  subgraph FILE["일반 파일 (최대 666)"]
    F1["666 (rw-rw-rw-)"] --> F2["- umask 027 (비트 마스킹)"] --> F3["결과: 640 (rw-r-----)<br/>주의: 639가 아님!"]
  end
  style D3 fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b
  style F3 fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f`,
  },
  {
    id: "roi-03",
    sectionId: "accounts-permissions",
    sectionName: "계정·권한·쿼터",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 95%+",
    title: "계정 관리 4대 파일 (/etc/passwd, /etc/shadow, /etc/skel, /etc/login.defs)",
    formula: "passwd(7필드: ID:비번x:UID:GID:GECOS:홈:셸) / shadow(9필드: ID:단방향해시:최종변경일:최소일:최대일:경고일:비활성일:만료일:예약) / /etc/skel(신규 홈 기본 템플릿) / /etc/login.defs(UID/GID 범위, 기본 만료 정책)",
    trap: "1) /etc/passwd의 두 번째 필드가 'x'인 이유는 실제 해시 암호가 보안상 root 전용 /etc/shadow에 분리 저장되기 때문! 2) 신규 사용자 홈 디렉터리에 .bashrc 등이 자동 생성되는 원리는 /etc/skel 안의 파일이 복사되기 때문!",
    tags: ["passwd", "shadow", "skel", "login.defs", "UID", "GID"],
  },
  {
    id: "roi-04",
    sectionId: "accounts-permissions",
    sectionName: "계정·권한·쿼터",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "useradd vs usermod 핵심 옵션 (대소문자 함정)",
    formula: "useradd -D (기본값 확인/변경) / useradd -m (홈디렉터리 강제 생성) / usermod -g (1차 기본그룹 변경) vs usermod -G (2차 보조그룹 추가) / usermod -L (잠금) / usermod -U (잠금 해제)",
    trap: "1) 2차(보조) 그룹을 변경/추가할 때는 반드시 대문자 '-G'를 사용해야 함! 소문자 '-g'는 1차 기본 주 그룹을 바꿔버림! 2) 기본 설정값을 확인하는 옵션은 'useradd -D'!",
    tags: ["useradd", "usermod", "-D", "-G", "-g", "-L", "-U"],
  },
  {
    id: "roi-05",
    sectionId: "accounts-permissions",
    sectionName: "계정·권한·쿼터",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 86%+",
    title: "패스워드 에이징 관리 (chage 명령어)",
    formula: "chage -l (설정 조회) / -m (최소 사용일) / -M (최대 사용일) / -W (만료 경고일) / -I (비활성화 유예일) / -E (계정 만료일)",
    trap: "passwd -l [사용자]는 /etc/shadow의 암호 앞에 '!'를 붙여 잠그고, chage -E 0 [사용자]는 계정 만료일을 지나게 만들어 접속을 차단함!",
    tags: ["chage", "-l", "-m", "-M", "-W", "-E", "passwd -l"],
  },
  {
    id: "roi-06",
    sectionId: "accounts-permissions",
    sectionName: "계정·권한·쿼터",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "디스크 쿼터(Quota) 4단계 설정 순서 & repquota 요약",
    formula: "1) /etc/fstab에 usrquota 옵션 후 remount ➔ 2) quotacheck -augvm (DB 파일 생성) ➔ 3) edquota -u [사용자] (한도 설정) ➔ 4) quotaon -auv (쿼터 활성화) / repquota -a (전체 현황 보고)",
    trap: "[단골 순서 문제] 1) 쿼터를 최종 활성화하는 명령어는 'quotaon'이지 'repquota'가 아님! repquota는 상태 보고서(Report) 출력용! 2) CentOS 7 이상 XFS 파일시스템은 edquota 대신 'xfs_quota' 사용!",
    tags: ["quota", "usrquota", "quotacheck", "edquota", "quotaon", "repquota", "xfs_quota"],
    diagramTitle: "디스크 쿼터(Quota) 표준 4단계 구축 프로세스",
    mermaidChart: `flowchart TD
  S1["1단계: /etc/fstab 마운트 옵션 추가<br/>usrquota, grpquota 지정 후 mount -o remount"]
  S2["2단계: quotacheck -augvm<br/>파일시스템 검사 및 aquota.user / aquota.group DB 생성"]
  S3["3단계: edquota -u [사용자명]<br/>vi 편집기로 블록(용량) & 아이노드(파일 수) soft/hard 한도 설정"]
  S4["4단계: quotaon -auv<br/>디스크 쿼터 기능 최종 활성화 (확인은 repquota -a)"]
  S1 --> S2 --> S3 --> S4
  style S1 fill:#f8fafc,stroke:#94a3b8,stroke-width:1px
  style S2 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
  style S3 fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
  style S4 fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b`,
  },

  // =================================================================
  // === [2] 파일시스템·디스크 & 셸 (filesystem-shell)
  // =================================================================
  {
    id: "roi-07",
    sectionId: "filesystem-shell",
    sectionName: "파일시스템·셸",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 97%+",
    title: "fdisk 대화형 명령어 & 파티션 시스템 ID (Linux 83, Swap 82)",
    formula: "fdisk 조작키: n(신규), d(삭제), p(출력), t(유형 변경), w(저장 종료), q(취소 종료) / ID: Linux(83), Swap(82), LVM(8e), 소프트웨어 RAID(fd)",
    trap: "파티션 종류(Type)를 변경하는 키는 't'! 기본 리눅스는 '83', 가상메모리 스왑은 '82', LVM은 '8e', RAID는 'fd'를 반드시 암기할 것!",
    tags: ["fdisk", "파티션ID", "83", "82", "8e", "fd", "swap", "LVM"],
  },
  {
    id: "roi-08",
    sectionId: "filesystem-shell",
    sectionName: "파일시스템·셸",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "/etc/fstab 6대 필드 구조 & 부팅 무결성 검사 순서",
    formula: "1.장치명(UUID) -> 2.마운트포인트 -> 3.파일시스템종류 -> 4.마운트옵션 -> 5.dump백업여부(0:안함,1:수행) -> 6.fsck순서(0:안함,1:루트,2:기타파티션)",
    trap: "1) 5번째 dump 필드: 1은 덤프 백업 대상, 0은 제외! 2) 6번째 fsck 필드: 루트(/) 파티션은 무조건 '1'로 가장 먼저 검사하고, 다른 파티션은 '2', 점검을 건너뛸 경우 '0'!",
    tags: ["fstab", "dump", "fsck", "UUID", "마운트옵션", "부팅"],
    diagramTitle: "/etc/fstab 파일의 6대 설정 필드 구조 및 검사 순서",
    mermaidChart: `flowchart LR
  F1["1. 장치명/UUID<br/>/dev/sdb1"] --> F2["2. 마운트포인트<br/>/data"]
  F2 --> F3["3. 파일시스템<br/>ext4 / xfs"] --> F4["4. 마운트옵션<br/>defaults,usrquota"]
  F4 --> F5["5. dump 여부<br/>0:제외 / 1:백업수행"] --> F6["6. fsck 순서<br/>0:안함 / 1:루트(/) / 2:그외"]
  style F1 fill:#f8fafc,stroke:#94a3b8,stroke-width:1px
  style F4 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
  style F6 fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b`,
  },
  {
    id: "roi-09",
    sectionId: "filesystem-shell",
    sectionName: "파일시스템·셸",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 93%+",
    title: "df vs du 디스크 용량 명령어 옵션 완전 대조",
    formula: "df (디스크 전체 파티션 남은 용량): -h(단위), -T(파일시스템 종류), -i(아이노드 사용량) / du (특정 디렉터리/파일 실사용량 합산): -s(전체 총합만 요약), -h(단위)",
    trap: "1) 디렉터리 내부 파일들을 일일이 나열하지 않고 전체 합계 용량만 보려면 'du -sh'! 2) 파일시스템의 종류(ext4, xfs)를 확인하는 옵션은 대문자 'df -T'!",
    tags: ["df", "du", "-h", "-T", "-i", "-s", "inode"],
  },
  {
    id: "roi-10",
    sectionId: "filesystem-shell",
    sectionName: "파일시스템·셸",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 88%+",
    title: "파일시스템 점검 & 튜닝 (fsck, dumpe2fs, tune2fs)",
    formula: "fsck/e2fsck(파일시스템 무결성 점검·복구, 언마운트 필수) / dumpe2fs(슈퍼블록 및 블록 그룹 정보 출력) / tune2fs(슈퍼블록 매개변수 튜닝, -l로 정보 조회)",
    trap: "마운트된 상태에서 fsck를 실행하면 데이터가 파손될 수 있으므로 반드시 umount 후 실행해야 함!",
    tags: ["fsck", "dumpe2fs", "tune2fs", "슈퍼블록", "umount"],
  },
  {
    id: "roi-11",
    sectionId: "filesystem-shell",
    sectionName: "파일시스템·셸",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "셸 환경설정 파일 로딩 순서 (/etc/profile vs ~/.bash_profile)",
    formula: "전역 설정(/etc/profile ➔ /etc/bashrc) ➔ 사용자 개인 설정(~/.bash_profile 또는 ~/.bash_login ➔ ~/.bashrc ➔ ~/.bash_logout)",
    trap: "1) 모든 사용자에게 공통 적용되는 전역 파일은 /etc/profile! 2) 로그인 시 개인 환경변수(PATH)를 설정하는 파일은 ~/.bash_profile이고, 별칭(alias)과 함수는 ~/.bashrc에 정의!",
    tags: ["profile", "bashrc", "bash_profile", "환경변수", "alias"],
  },
  {
    id: "roi-12",
    sectionId: "filesystem-shell",
    sectionName: "파일시스템·셸",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 85%+",
    title: "셸 입출력 리다이렉션 & 파이프 (>, >>, 2>, 2>&1)",
    formula: "> (표준출력 덮어쓰기) / >> (표준출력 추가) / 2> (표준에러 리다이렉트) / 2>&1 (표준에러를 표준출력으로 병합) / | (앞 명령어 출력을 뒤 명령어 입력으로 전달)",
    trap: "명령어 실행 결과를 화면에 띄우면서 동시에 파일로도 기록하려면 'tee' 명령어를 파이프(| tee output.log)와 함께 사용!",
    tags: ["리다이렉션", ">>", "2>&1", "파이프", "tee", "stdout", "stderr"],
  },

  // =================================================================
  // === [3] 프로세스, 시그널 & 에디터 (process-scheduling)
  // =================================================================
  {
    id: "roi-13",
    sectionId: "process-scheduling",
    sectionName: "프로세스·에디터",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "리눅스 핵심 6대 시그널 (SIGHUP 1, SIGINT 2, SIGKILL 9, SIGTERM 15)",
    formula: "1(SIGHUP: 터미널 종료, 데몬 설정 재적용 Reload) / 2(SIGINT: Ctrl+C) / 3(SIGQUIT: Ctrl+\\, 코어덤프) / 9(SIGKILL: 무조건 즉시 강제종료) / 15(SIGTERM: kill 기본값 정상종료) / 20(SIGTSTP: Ctrl+Z 일시대기)",
    trap: "1) kill 명령어를 옵션 없이 실행할 때 전달되는 기본 시그널은 '15 (SIGTERM)'! 2) 프로세스가 절대 무시하거나 가로챌 수 없는 강제 종료 시그널은 '9 (SIGKILL)'!",
    tags: ["시그널", "SIGHUP", "SIGINT", "SIGKILL", "SIGTERM", "SIGTSTP", "1", "2", "9", "15"],
    diagramTitle: "리눅스 핵심 6대 시그널 번호 및 키보드 단축키 매핑",
    mermaidChart: `flowchart TD
  SIG["리눅스 핵심 6대 시그널"]
  S1["1: SIGHUP<br/>터미널 끊김 / 데몬 환경설정 Reload"]
  S2["2: SIGINT (Ctrl + C)<br/>키보드 인터럽트 포그라운드 중지"]
  S3["3: SIGQUIT (Ctrl + \\)<br/>종료 및 코어 덤프(Core Dump) 생성"]
  S9["9: SIGKILL<br/>커널 즉시 강제 종료 (무시/차단 불가)"]
  S15["15: SIGTERM (kill 기본값)<br/>프로세스 안전한 정상 종료 유도"]
  S20["20: SIGTSTP (Ctrl + Z)<br/>프로세스 백그라운드 일시 정지(대기)"]
  SIG --> S1
  SIG --> S2
  SIG --> S3
  SIG --> S9
  SIG --> S15
  SIG --> S20
  style S9 fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#991b1b
  style S15 fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b`,
  },
  {
    id: "roi-14",
    sectionId: "process-scheduling",
    sectionName: "프로세스·에디터",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "프로세스 우선순위 NI 값과 nice vs renice 함정 문법",
    formula: "NI 범위: -20(최고 우선순위) ~ 19(최저), 기본값 0 / root만 음수 부여 가능 / nice(새로 실행, 증감) vs renice(실행 중인 PID, 직접 덮어씀)",
    trap: "[단골 3번 함정] 'nice -10 bash'는 앞의 -가 옵션 식별자이므로 NI 값이 '+10'(우선순위 낮아짐)이 됨! 음수 -10으로 설정하려면 'nice -n -10 bash' 또는 'nice --10 bash'를 써야 함!",
    tags: ["NI", "nice", "renice", "우선순위", "-20", "19", "-10함정"],
  },
  {
    id: "roi-15",
    sectionId: "process-scheduling",
    sectionName: "프로세스·에디터",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "crontab 5대 필드 포맷 & 주기 표현식 (*/30 9-18 * * 1-5)",
    formula: "분(0-59) -> 시(0-23) -> 일(1-31) -> 월(1-12) -> 요일(0-7, 0과 7은 일요일) / 옵션: -e(편집), -l(조회), -r(전체 삭제)",
    trap: "[단골 4번 함정] '매 30분 간격마다'는 반드시 슬래시(/)를 사용한 '*/30'이어야 함! 분 필드에 '30'만 적으면 매시 30분 정각에 1시간마다 1번씩만 실행됨!",
    tags: ["crontab", "스케줄링", "분시일월요일", "*/30", "1-5", "-e", "-r"],
    diagramTitle: "crontab 5개 시간 설정 필드 및 주기 연산 규칙",
    mermaidChart: `flowchart LR
  C1["[1. 분]<br/>0~59"] --> C2["[2. 시]<br/>0~23"]
  C2 --> C3["[3. 일]<br/>1~31"] --> C4["[4. 월]<br/>1~12"]
  C4 --> C5["[5. 요일]<br/>0~7 (0·7:일, 1~5:월~금)"]
  C5 --> EX["실전 주기 예시: */30 9-18 * * 1-5<br/>월~금 09시~18시 30분 간격마다 실행"]
  style C1 fill:#f8fafc,stroke:#94a3b8,stroke-width:1px
  style C5 fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
  style EX fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b`,
  },
  {
    id: "roi-16",
    sectionId: "process-scheduling",
    sectionName: "프로세스·에디터",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "프로세스 모니터링 & 작업 제어 (ps, top, jobs, nohup)",
    formula: "ps aux (BSD 계열 모든 프로세스) / ps -ef (SysV 계열 모든 프로세스, PPID 표시) / jobs (백그라운드 작업 목록) / fg/bg (전환) / nohup (로그아웃 후에도 백그라운드 계속 실행)",
    trap: "터미널이 끊어져도(SIGHUP 시그널이 와도) 프로세스가 중단되지 않고 백그라운드에서 동작하게 하려면 'nohup [명령어] &' 형태로 실행!",
    tags: ["ps", "top", "jobs", "fg", "bg", "nohup", "PPID"],
  },
  {
    id: "roi-17",
    sectionId: "process-scheduling",
    sectionName: "프로세스·에디터",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 94%+",
    title: "에디터 3대장 비교 (vi 빌 조이 vs nano pico vs emacs 리처드 스톨만)",
    formula: "vi(빌 조이, Vim 브람 무레나르) / nano(pico의 GNU 클론, Ctrl+O 저장, Ctrl+X 종료) / emacs(리처드 스톨만, LISP 기반, Ctrl+X Ctrl+S 저장, Ctrl+X Ctrl+C 종료)",
    trap: "1) nano는 Pine 메일 클라이언트 내장 에디터 pico를 복제한 것! 2) emacs는 리처드 스톨만이 개발했으며 제임스 고슬링이 C언어로 이식함!",
    tags: ["vi", "nano", "emacs", "빌조이", "스톨만", "pico", "LISP"],
  },
  {
    id: "roi-18",
    sectionId: "process-scheduling",
    sectionName: "프로세스·에디터",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 96%+",
    title: "vi(vim) 일괄 문자열 치환 문법 (:%s/기존/변경/g) & 환경설정",
    formula: ":%s/기존/변경/g (문서 전체 치환) / :set nu (행번호 표시) / :set ai (자동들여쓰기) / :set ic (대소문자 무시) / ~/.exrc (vi 영구 설정 파일)",
    trap: "[단골 7번 함정] :s/linux/LINUX/g 처럼 앞의 '%'를 생략하면 전체 문서가 아니라 '현재 커서가 위치한 한 줄'에서만 치환됨!",
    tags: ["vi", ":%s", "~/.exrc", "set nu", "set ai", "set ic", "치환함정"],
  },

  // =================================================================
  // === [4] 패키지 관리 & 네트워크 설정 (package-network)
  // =================================================================
  {
    id: "roi-19",
    sectionId: "package-network",
    sectionName: "패키지·네트워크",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "rpm 조회 옵션 5총사 (-qf, -qa, -qi, -ql, -qR)",
    formula: "-qa (전체 설치 패키지) / -qf [파일절대경로] (특정 파일의 소유 패키지 역추적) / -qi [패키지] (상세 정보) / -ql [패키지] (설치된 파일 목록) / -qR (의존성 패키지 확인)",
    trap: "[단골 1번 함정] 뒤에 특정 파일 경로(/etc/my.cnf)가 주어지고 어떤 패키지에 속하는지 물어보면 무조건 '-qf'! (-qi나 -ql과 헷갈리지 말 것!)",
    tags: ["rpm", "-qa", "-qf", "-qi", "-ql", "-Uvh", "패키지역추적"],
  },
  {
    id: "roi-20",
    sectionId: "package-network",
    sectionName: "패키지·네트워크",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "dpkg & apt-get 옵션 대조 (Purge 완전 삭제 -P)",
    formula: "dpkg -i (설치) / -r (패키지만 삭제, 설정파일 유지) / -P (설정파일까지 완전 삭제 Purge) / -l (목록) / -L (소유 파일 목록 = rpm -ql) / -S (파일 소유 패키지 = rpm -qf)",
    trap: "데비안 계열에서 설정 파일까지 깨끗하게 제거하는 옵션은 대문자 '-P (purge)'! apt-get purge [패키지]와 동일!",
    tags: ["dpkg", "-P", "-r", "-L", "-S", "apt-get", "purge"],
  },
  {
    id: "roi-21",
    sectionId: "package-network",
    sectionName: "패키지·네트워크",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "tar 아카이브 & 압축 옵션 대소문자 매칭 (tar -cJvf backup.tar.xz)",
    formula: "동작: -c(생성), -x(해제), -t(목록), -r(기존 tar 맨 뒤에 추가) / 압축: -z(gzip, .tar.gz), -j(bzip2, .tar.bz2), -J(xz, .tar.xz 대문자!)",
    trap: "[단골 2번 함정] xz 압축은 반드시 '대문자 -J'여야 함! 소문자 -j는 bzip2! 또한 아카이브 생성은 '-c', 해제는 '-x'!",
    tags: ["tar", "-c", "-x", "-r", "-z", "-j", "-J", "xz압축"],
  },
  {
    id: "roi-22",
    sectionId: "package-network",
    sectionName: "패키지·네트워크",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "네트워크 설정 4총사 (/etc/hosts, /etc/resolv.conf, /etc/host.conf, /etc/services)",
    formula: "/etc/hosts (로컬 IP-호스트명 1:1 매핑) / /etc/resolv.conf (nameserver IP) / /etc/host.conf (order hosts, bind 검색순서 결정) / /etc/services (포트-프로토콜 목록)",
    trap: "[단골 10번 함정] DNS 서버보다 /etc/hosts를 먼저 참조하도록 '검색 순서(order hosts, bind)'를 결정하는 파일은 '/etc/host.conf' (또는 /etc/nsswitch.conf)! /etc/resolv.conf가 아님!",
    tags: ["hosts", "resolv.conf", "host.conf", "services", "nameserver", "order"],
    diagramTitle: "호스트 이름 변환(Name Resolution) 검색 우선순위 흐름도",
    mermaidChart: `flowchart TD
  REQ["호스트명 질의 (예: www.ihd.or.kr)"]
  CONF["/etc/host.conf 참조<br/>order hosts, bind (참조 순서 규칙)"]
  HOSTS["1순위: /etc/hosts<br/>로컬 파일에 매핑된 IP 즉시 반환"]
  DNS["2순위: /etc/resolv.conf<br/>nameserver [IP]에 정의된 외부 DNS 질의"]
  REQ --> CONF
  CONF --> HOSTS
  CONF -.->|로컬에 없으면| DNS
  style CONF fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
  style HOSTS fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b
  style DNS fill:#eff6ff,stroke:#2563eb,stroke-width:2px,color:#1e3a8a`,
  },
  {
    id: "roi-23",
    sectionId: "package-network",
    sectionName: "패키지·네트워크",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 95%+",
    title: "OSI 7계층 PDU 단위·장비 & ARP vs RARP 프로토콜",
    formula: "물리(Bit, 허브) ➔ 데이터링크(Frame, 스위치, MAC) ➔ 네트워크(Packet, 라우터, IP/ICMP/ARP) ➔ 전송(Segment, 게이트웨이, TCP/UDP) / ARP(IP➔MAC) vs RARP(MAC➔IP)",
    trap: "IP 주소로 물리적 하드웨어 MAC 주소를 찾는 것은 ARP! 디스크 없는 워크스테이션이 부팅 시 MAC 주소로 IP를 할당받는 것은 RARP!",
    tags: ["OSI7계층", "PDU", "Frame", "Packet", "Segment", "ARP", "RARP"],
  },
  {
    id: "roi-24",
    sectionId: "package-network",
    sectionName: "패키지·네트워크",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 96%+",
    title: "필수 암기 서비스 포트 번호 13선",
    formula: "FTP(20 데이터/21 제어), SSH(22), Telnet(23), SMTP(25), DNS(53), DHCP(67 서버/68 클라이언트), TFTP(69 UDP), HTTP(80), POP3(110), NTP(123 UDP), IMAP(143), SNMP(161 UDP), HTTPS(443)",
    trap: "1) FTP는 20번(데이터 전송)과 21번(명령 제어) 2개 포트를 사용! 2) DNS와 NTP, TFTP, SNMP는 주로 비연결성 UDP를 사용!",
    tags: ["포트", "20", "21", "22", "23", "25", "53", "80", "443", "110", "143"],
  },
  {
    id: "roi-25",
    sectionId: "package-network",
    sectionName: "패키지·네트워크",
    grade: "B",
    stars: 3,
    frequencyRate: "출제율 89%+",
    title: "네트워크 진단 도구 (netstat/ss -r, ethtool/mii-tool)",
    formula: "netstat/ss: -a(전체), -n(숫자표시), -t(TCP), -u(UDP), -p(PID/프로그램명), -r(라우팅 테이블 = route) / ethtool [인터페이스]: 유선 랜카드 링크(Link detected), 속도(Speed), 전이중(Duplex)",
    trap: "물리적 랜카드의 케이블 체결 여부와 링크 속도를 확인하는 명령어는 'ethtool' 또는 'mii-tool'!",
    tags: ["netstat", "ss", "-r", "ethtool", "mii-tool", "라우팅테이블"],
  },

  // =================================================================
  // === [5] X-Window & 최신 IT·라이선스 (xwindow-security)
  // =================================================================
  {
    id: "roi-26",
    sectionId: "xwindow-security",
    sectionName: "X-Window·IT활용",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 99%+",
    title: "원격 X 클라이언트 제어 (xhost IP vs xauth ~/.Xauthority)",
    formula: "xhost(호스트 IP 기반 접근 제어: xhost +, xhost + [IP]) / xauth(MIT-MAGIC-COOKIE-1 인증 키/쿠키 제어, ~/.Xauthority 파일 사용) / DISPLAY 환경변수: export DISPLAY=[X서버_IP]:0.0",
    trap: "[단골 8번 함정] 사용자 인증 키(쿠키) 방식은 'xauth'와 '~/.Xauthority' 파일! 호스트 IP 주소 기반은 'xhost'! 원격 화면을 내 모니터로 가져오려면 클라이언트 측에서 'export DISPLAY' 설정!",
    tags: ["xhost", "xauth", ".Xauthority", "DISPLAY", "COOKIE", "X-Window"],
    diagramTitle: "X-Window 원격 디스플레이 클라이언트-서버 통신 아키텍처",
    mermaidChart: `flowchart LR
  subgraph SVR["원격 호스트 (X 클라이언트)"]
    APP["GUI 애플리케이션<br/>xclock / gimp / nautilus"]
    AUTH["인증키 확인<br/>xauth / ~/.Xauthority"]
    DISP["DISPLAY 환경변수<br/>export DISPLAY=192.168.10.10:0.0"]
  end
  subgraph LOCAL["내 PC (X 서버)"]
    XSRV["X 서버 데몬 (Xorg)<br/>xhost + (접근 허용)"]
    SCR["로컬 모니터 화면 표출"]
  end
  APP --> AUTH --> DISP -->|TCP 6000번 통신| XSRV --> SCR
  style SVR fill:#f8fafc,stroke:#94a3b8,stroke-width:1px
  style LOCAL fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
  style SCR fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#064e3b`,
  },
  {
    id: "roi-27",
    sectionId: "xwindow-security",
    sectionName: "X-Window·IT활용",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 98%+",
    title: "데스크톱 환경 매칭 (GNOME GTK+ Nautilus vs KDE Qt Dolphin)",
    formula: "GNOME: GTK+ 라이브러리 / Nautilus(파일관리자) / Mutter·Metacity(윈도우 매니저) / GDM(디스플레이 매니저) || KDE: Qt 라이브러리 / Dolphin·Konqueror(파일관리자) / KWin(윈도우 매니저) / SDDM·KDM(디스플레이 매니저)",
    trap: "[단골 9번 함정] GNOME은 GTK+ 기반 Nautilus, KDE는 Qt 기반 Dolphin! 시험에서 GNOME-Qt나 KDE-Nautilus로 크로스 매칭해 오답을 유도함!",
    tags: ["GNOME", "KDE", "GTK+", "Qt", "Nautilus", "Dolphin", "Mutter", "KWin"],
  },
  {
    id: "roi-28",
    sectionId: "xwindow-security",
    sectionName: "X-Window·IT활용",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "오픈소스 응용 소프트웨어 분류 (GIMP, LibreOffice, Totem)",
    formula: "그래픽: GIMP(비트맵 포토샵 격), Inkscape(벡터 일러스트), eog(기본 뷰어) / 오피스: LibreOffice Writer(워드), Calc(엑셀), Impress(PPT) / 멀티미디어: Totem(동영상), Rhythmbox(음악), Cheese(웹캠)",
    trap: "PDF 등 다양한 문서 포맷을 열람하는 GNOME 기본 문서 뷰어는 'evince'!",
    tags: ["GIMP", "Inkscape", "eog", "Writer", "Calc", "Impress", "Totem", "Cheese", "evince"],
  },
  {
    id: "roi-29",
    sectionId: "xwindow-security",
    sectionName: "X-Window·IT활용",
    grade: "A",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "최신 IT 기술 키워드 (KVM, Docker, K8s, Ansible, Hadoop)",
    formula: "가상화: KVM(커널 전가상화 하이퍼바이저), Xen(반가상화/전가상화), QEMU(에뮬레이터) / 컨테이너: Docker, Kubernetes(K8s 오케스트레이션) / 자동화: Ansible(Agentless SSH + YAML) / 빅데이터: Hadoop(HDFS+MapReduce) / 임베디드: Arduino(MCU, OS없음) vs Raspberry Pi(SBC, Linux)",
    trap: "1) Ansible은 대상 노드에 에이전트를 설치하지 않고 SSH 통신으로 YAML 플레이북을 실행함! 2) 아두이노는 OS가 없는 MCU 보드이고, 라즈베리 파이는 리눅스가 구동되는 초소형 컴퓨터(SBC)!",
    tags: ["KVM", "Docker", "Kubernetes", "Ansible", "Hadoop", "Arduino", "RaspberryPi"],
  },
  {
    id: "roi-30",
    sectionId: "xwindow-security",
    sectionName: "X-Window·IT활용",
    grade: "S",
    stars: 5,
    frequencyRate: "출제율 97%+",
    title: "오픈소스 라이선스 4종 대조 (GPL vs LGPL vs Apache 2.0)",
    formula: "GPL: 가장 엄격한 카피레프트, 수정·결합 배포 시 전체 소스 공개 의무 (리눅스 커널 GPLv2) / LGPL: 동적 링크 사용 시 상용 독점 SW의 소스 공개 의무 면제 / BSD·MIT·Apache: 소스 비공개 상용화 허용 (Apache 2.0은 특허권 보호 조항 포함)",
    trap: "라이브러리를 동적 링크(Dynamic Link)하여 단순 호출하는 경우 소스코드 공개 의무를 면제해 주는 라이선스는 'LGPL'!",
    tags: ["GPL", "LGPL", "BSD", "MIT", "Apache2.0", "라이선스", "특허권"],
  },
];

// =====================================================================
// === PART 4 & 5 고난도 함정 기출 10선 데이터
// =====================================================================
export interface KillerTrapQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number; // 1-based index
  answerText: string;
  explanation: string;
  trapWarning: string;
}

export const KILLER_TRAP_QUESTIONS: KillerTrapQuestion[] = [
  {
    id: 1,
    category: "패키지 관리",
    question: "시스템에 설치된 '/etc/my.cnf' 설정 파일이 어떤 패키지에 의해 설치된 것인지 확인하려고 할 때 알맞은 명령어는?",
    options: [
      "rpm -qi /etc/my.cnf",
      "rpm -ql /etc/my.cnf",
      "rpm -qf /etc/my.cnf",
      "rpm -qa /etc/my.cnf",
    ],
    correctAnswer: 3,
    answerText: "③ rpm -qf /etc/my.cnf",
    explanation: "특정 파일(File)의 절대 경로를 주었을 때 해당 파일이 어느 패키지로부터 설치되었는지 역추적하는 옵션은 '-qf'입니다.",
    trapWarning: "-qi는 패키지 상세 정보(Info), -ql은 패키지가 설치한 파일 목록(List), -qa는 전체 설치 목록(All)입니다. 파일 절대경로가 나오면 무조건 '-qf'를 고르세요! (데비안 계열은 dpkg -S [파일경로])",
  },
  {
    id: 2,
    category: "아카이브 및 압축",
    question: "현재 디렉터리의 backup 폴더를 xz 압축 방식이 적용된 아카이브 파일(backup.tar.xz)로 생성하는 명령어로 올바른 것은?",
    options: [
      "tar -czvf backup.tar.xz backup",
      "tar -cjvf backup.tar.xz backup",
      "tar -cJvf backup.tar.xz backup",
      "tar -xJvf backup.tar.xz backup",
    ],
    correctAnswer: 3,
    answerText: "③ tar -cJvf backup.tar.xz backup",
    explanation: "아카이브 생성은 '-c', xz 압축은 대문자 '-J'입니다.",
    trapWarning: "소문자 '-z'는 gzip(.tar.gz), 소문자 '-j'는 bzip2(.tar.bz2), '대문자 -J'가 xz(.tar.xz)입니다! 4번 보기는 '-x'(해제)이므로 오답입니다.",
  },
  {
    id: 3,
    category: "프로세스 우선순위",
    question: "다음 중 프로세스의 우선순위(NI 값)를 변경하는 명령어에 대한 설명으로 틀린 것은?",
    options: [
      "NI 값의 범위는 -20부터 19까지이며, 숫자가 작을수록 우선순위가 높다.",
      "일반 사용자는 nice 명령어를 이용해 우선순위를 낮추는(양수 값 부여) 것만 가능하다.",
      "현재 기본 NI 값이 0인 bash 프로세스를 실행하면서 nice -10 bash를 입력하면 NI 값은 -10으로 설정된다.",
      "renice 명령어는 이미 실행 중인 프로세스의 PID를 지정하여 우선순위를 변경한다.",
    ],
    correctAnswer: 3,
    answerText: "③ (nice -10 bash는 +10으로 설정됨)",
    explanation: "nice 명령어에서 앞의 '-'는 옵션 식별자(기호)로 해석되어 'nice -n 10 bash'와 동일하게 동작하므로 NI 값이 '+10'(우선순위 낮아짐)이 됩니다.",
    trapWarning: "NI 값을 음수 '-10'(우선순위 높임)으로 부여하려면 'nice -n -10 bash' 또는 하이픈을 두 번 쓴 'nice --10 bash'로 입력해야 합니다! 반면 renice는 'renice -10 [PID]' 형태로 바로 음수를 적용합니다.",
  },
  {
    id: 4,
    category: "스케줄링",
    question: "매주 월요일부터 금요일까지, 오전 9시부터 오후 6시 사이에 30분 간격으로 /root/check.sh 스크립트를 실행하려고 한다. crontab -e 설정 내용으로 알맞은 것은?",
    options: [
      "30 9-18 * * 1-5 /root/check.sh",
      "*/30 9-18 * * 1-5 /root/check.sh",
      "*/30 9,18 * * 0-4 /root/check.sh",
      "1-5 9-18 */30 * * /root/check.sh",
    ],
    correctAnswer: 2,
    answerText: "② */30 9-18 * * 1-5 /root/check.sh",
    explanation: "crontab 필드 순서는 [분] [시] [일] [월] [요일]입니다. '30분 간격마다'는 슬래시를 사용한 '*/30'이어야 하며, 월~금요일은 '1-5'입니다.",
    trapWarning: "1번 보기처럼 분 필드에 '30'만 적으면 30분 간격이 아니라 매시 30분 정각(9:30, 10:30...)에 1시간마다 한 번씩만 실행됩니다! 요일에서 0과 7은 일요일입니다.",
  },
  {
    id: 5,
    category: "권한 관리",
    question: "현재 사용자의 umask 값이 0027로 설정되어 있다. 이 사용자가 새로운 일반 파일 test.txt와 디렉터리 test_dir을 생성했을 때 부여되는 기본 권한(8진수)으로 올바르게 짝지어진 것은?",
    options: [
      "파일: 640, 디렉터리: 750",
      "파일: 644, 디렉터리: 755",
      "파일: 639, 디렉터리: 750",
      "파일: 750, 디렉터리: 750",
    ],
    correctAnswer: 1,
    answerText: "① 파일: 640, 디렉터리: 750",
    explanation: "디렉터리는 777 - 027 = 750(rwxr-x---)입니다. 파일은 기본 666(rw-rw-rw-)에서 umask 027(----w-rwx)의 권한 비트를 마스킹(제거)합니다.",
    trapWarning: "단순 뺄셈으로 666 - 027 = 639라고 계산하면 안 됩니다! 8진수 권한에 9는 존재하지 않으며, 파일은 애초에 실행(1) 권한이 없으므로 7(rwx)을 마스킹하면 0(---)이 되어 '640(rw-r-----)'이 됩니다.",
  },
  {
    id: 6,
    category: "디스크 쿼터",
    question: "사용자별로 디스크 사용량(Quota)을 제한하기 위해 작업하는 과정이다. 다음 중 가장 마지막에 수행해야 하는 작업 또는 설명이 잘못된 명령어는?",
    options: [
      "quotacheck: 파일 시스템의 디스크 사용 상태를 검색하여 쿼터 설정 파일(aquota.user)을 생성한다.",
      "edquota: 편집기를 이용해 특정 사용자나 그룹에 대한 블록(용량) 및 아이노드(파일 수)의 Soft/Hard 한도를 설정한다.",
      "xfs_quota: XFS 파일 시스템에서는 기본 edquota 대신 xfs_quota 명령어를 사용하여 쿼터를 설정한다.",
      "repquota: 설정된 디스크 쿼터 기능을 최종적으로 활성화(켜기)하기 위해 반드시 실행해야 하는 명령어이다.",
    ],
    correctAnswer: 4,
    answerText: "④ (repquota는 현황 보고서 출력용 명령어임)",
    explanation: "디스크 쿼터 기능을 최종 활성화(켜기)하는 명령어는 'quotaon'입니다. repquota는 전체 디스크 쿼터 사용 현황을 요약 보고서(Report)로 출력하는 명령어입니다.",
    trapWarning: "쿼터 구축 4단계: /etc/fstab usrquota 옵션 ➔ quotacheck -augvm ➔ edquota -u ➔ quotaon -auv 순서입니다. CentOS 7+ XFS는 xfs_quota를 쓴다는 점도 체크하세요!",
  },
  {
    id: 7,
    category: "vi 에디터",
    question: "vi 편집기에서 문서 전체에 있는 모든 linux라는 문자열을 찾아 LINUX로 일괄 치환하려고 할 때 입력해야 하는 명령 모드는?",
    options: [
      ":s/linux/LINUX/g",
      ":%s/linux/LINUX/g",
      ":/linux/LINUX/g",
      ":set all/linux/LINUX",
    ],
    correctAnswer: 2,
    answerText: "② :%s/linux/LINUX/g",
    explanation: "vi에서 문서 전체 범위를 지정하는 기호는 '%'입니다 (:1,$s/...와 동일).",
    trapWarning: "1번 보기(:s/linux/LINUX/g)처럼 '%'를 빼먹으면 문서 전체가 아니라 '현재 커서가 위치한 한 줄' 내에서만 치환이 수행됩니다!",
  },
  {
    id: 8,
    category: "X-Window 원격 제어",
    question: "원격지 서버(192.168.10.20)의 X 클라이언트 프로그램을 로컬 X 서버(192.168.10.10) 화면에 출력하려고 한다. 사용자 인증 키(MIT-MAGIC-COOKIE-1) 방식을 사용할 때 관련 명령어와 파일로 올바르게 짝지어진 것은?",
    options: [
      "명령어: xhost, 파일: /etc/X11/xorg.conf",
      "명령어: xauth, 파일: ~/.Xauthority",
      "명령어: xinit, 파일: ~/.xinitrc",
      "명령어: export DISPLAY, 파일: /etc/profile",
    ],
    correctAnswer: 2,
    answerText: "② 명령어: xauth, 파일: ~/.Xauthority",
    explanation: "사용자 인증 키(MIT-MAGIC-COOKIE-1)를 다루는 명령어는 'xauth'이며, 키가 저장되는 파일은 홈 디렉터리 내 '~/.Xauthority'입니다.",
    trapWarning: "xhost는 IP 주소/도메인 호스트 기반의 단순 접근 제어(+/-)이고, xauth는 쿠키 인증 키 기반의 세션 보안 제어입니다!",
  },
  {
    id: 9,
    category: "데스크톱 환경",
    question: "리눅스 데스크톱 환경과 기반 라이브러리, 기본 파일 관리자의 연결이 올바른 것은?",
    options: [
      "GNOME - Qt 라이브러리 - Nautilus(노틸러스)",
      "GNOME - GTK+ 라이브러리 - Dolphin(돌핀)",
      "KDE - Qt 라이브러리 - Dolphin(돌핀)",
      "KDE - GTK+ 라이브러리 - Konqueror(캉커러)",
    ],
    correctAnswer: 3,
    answerText: "③ KDE - Qt 라이브러리 - Dolphin(돌핀)",
    explanation: "KDE는 Qt 라이브러리 기반이며 기본 파일 관리자는 Dolphin(돌핀) 또는 Konqueror(캉커러)입니다.",
    trapWarning: "GNOME은 'GTK+' 라이브러리 + 'Nautilus(노틸러스)' 파일 관리자 + 'Mutter' 윈도우 매니저입니다! 두 진영의 라이브러리와 파일 관리자를 뒤바꿔 놓는 함정이 매회 출제됩니다.",
  },
  {
    id: 10,
    category: "네트워크 설정",
    question: "도메인 네임(www.ihd.or.kr)을 IP 주소로 변환할 때, 외부 DNS 서버에 질의하기 전에 로컬의 /etc/hosts 파일을 먼저 참조하도록 검색 순서를 지정하는 전통 리눅스 설정 파일은?",
    options: [
      "/etc/resolv.conf",
      "/etc/host.conf",
      "/etc/services",
      "/etc/sysconfig/network",
    ],
    correctAnswer: 2,
    answerText: "② /etc/host.conf",
    explanation: "이름 풀이(Name Resolution) 시 /etc/hosts 파일과 DNS(bind) 중 검색 참조 순서('order hosts, bind')를 지정하는 파일은 '/etc/host.conf' (또는 /etc/nsswitch.conf)입니다.",
    trapWarning: "/etc/resolv.conf는 질의할 DNS 서버의 IP 주소(nameserver)를 지정하는 파일이지 검색 우선순위를 정하는 파일이 아닙니다!",
  },
];

// =====================================================================
// === 시험장 직전 요약 기본 템플릿
// =====================================================================
const DEFAULT_LINUX_MEMO_TEMPLATE = `# 🐧 리눅스마스터 2급 시험장 직전 초압축 치트시트

## 📊 1. 2차 합격 기준 & 과락 마지노선
- 총 80문항 / 100분 / 문항당 1.25점 / 합격 기준 60점 (총 48문항 이상)
- 1과목 (운영 및 관리, 48문항): 최소 20문항 이상 득점 (과락 40% 미만 방지)
- 2과목 (리눅스 활용, 32문항): 최소 13문항 이상 득점 (과락 40% 미만 방지)

## 🎯 2. 단골 옵션 & 계산 공식 TOP 10
1. [특수권한] SetUID: 4000 (/usr/bin/passwd) / SetGID: 2000 / Sticky Bit: 1000 (/tmp)
2. [umask 0027] 디렉터리: 750 (rwxr-x---) / 파일: 640 (rw-r-----)  *639 절대 아님!*
3. [디스크 쿼터 4단계] /etc/fstab usrquota ➔ quotacheck -augvm ➔ edquota -u ➔ quotaon -auv (repquota는 현황보고)
4. [tar 압축 매칭] gzip: -czvf / bzip2: -cjvf / xz: -cJvf (대문자 J!) / 맨뒤추가: -r
5. [nice 우선순위] 범위 -20(최고)~19(최저) / nice -10 bash ➔ +10 (낮아짐) / nice --10 bash ➔ -10 (높아짐)
6. [crontab 포맷] 분(0-59) 시(0-23) 일(1-31) 월(1-12) 요일(0-7, 0·7:일) / */30 9-18 * * 1-5 (월~금 9-18시 30분간격)
7. [시그널 6총사] 1 SIGHUP(Reload) / 2 SIGINT(Ctrl+C) / 3 SIGQUIT(Ctrl+\\) / 9 SIGKILL(강제종료) / 15 SIGTERM(기본값) / 20 SIGTSTP(Ctrl+Z)
8. [vi 치환] :%s/기존/변경/g (문서전체 치환, % 없으면 커서행만 치환)
9. [X-Window] xhost(호스트 IP +/- 제어) vs xauth(~/.Xauthority 쿠키 인증키) / export DISPLAY=내IP:0.0
10. [데스크톱 매칭] GNOME = GTK+ + Nautilus + Mutter / KDE = Qt + Dolphin + KWin
11. [네트워크 파일] /etc/hosts(로컬매핑) / /etc/resolv.conf(nameserver IP) / /etc/host.conf(order hosts, bind 순서결정)
12. [라이선스] GPL(엄격 소스공개) / LGPL(동적링크 사용시 공개면제) / Apache 2.0(특허권 명시)

## ✍️ 나의 취약점 & 오답 체크리스트
- [ ] 
`;

export function LinuxFloatingMemo({ activeSectionId }: { activeSectionId?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState<"roi" | "killer" | "scratchpad">("roi");

  // 검색 및 필터 상태
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState<string>("all");
  const [selectedGrade, setSelectedGrade] = useState<"all" | "S" | "A" | "B">("all");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [onlyDiagrams, setOnlyDiagrams] = useState(false);

  // 북마크 상태 (로컬스토리지 연동)
  const [starredIds, setStarredIds] = useState<string[]>([]);

  // 10 Killer Trap 문제 풀이 상태
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  // 직전 메모장 상태 (로컬스토리지 연동)
  const [userNotes, setUserNotes] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // 마운트 시 로컬스토리지에서 복원
  useEffect(() => {
    try {
      const savedStars = localStorage.getItem("linux_mindmap_starred_roi");
      if (savedStars) setStarredIds(JSON.parse(savedStars));

      const savedNotes = localStorage.getItem("linux_mindmap_scratchpad");
      if (savedNotes !== null) {
        setUserNotes(savedNotes);
      } else {
        setUserNotes(DEFAULT_LINUX_MEMO_TEMPLATE);
      }

      const savedAnswers = localStorage.getItem("linux_killer_trap_answers");
      if (savedAnswers) setUserAnswers(JSON.parse(savedAnswers));
    } catch {
      setUserNotes(DEFAULT_LINUX_MEMO_TEMPLATE);
    }
  }, []);

  // 외부 activeSectionId 변경 시 자동 필터링 (all이 아닐 때)
  useEffect(() => {
    if (activeSectionId && !searchQuery) {
      // 필요 시 현재 활성 섹션으로 자동 전환
    }
  }, [activeSectionId, searchQuery]);

  const toggleStar = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setStarredIds((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("linux_mindmap_starred_roi", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleNotesChange = (text: string) => {
    setUserNotes(text);
    try {
      localStorage.setItem("linux_mindmap_scratchpad", text);
    } catch {
      // ignore
    }
  };

  const handleCopyNotes = async () => {
    try {
      await navigator.clipboard.writeText(userNotes);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleResetTemplate = () => {
    handleNotesChange(DEFAULT_LINUX_MEMO_TEMPLATE);
    setShowResetConfirm(false);
  };

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setUserAnswers((prev) => {
      const updated = { ...prev, [questionId]: optionIndex };
      try {
        localStorage.setItem("linux_killer_trap_answers", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
    setShowExplanation((prev) => ({ ...prev, [questionId]: true }));
  };

  const toggleExplanation = (questionId: number) => {
    setShowExplanation((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleResetKillerTrap = () => {
    setUserAnswers({});
    setShowExplanation({});
    try {
      localStorage.removeItem("linux_killer_trap_answers");
    } catch {
      // ignore
    }
  };

  // 필터링된 ROI 리스트
  const filteredList = useMemo(() => {
    return LINUX_ROI_ITEMS.filter((item) => {
      if (selectedSection !== "all" && item.sectionId !== selectedSection) return false;
      if (selectedGrade !== "all" && item.grade !== selectedGrade) return false;
      if (onlyFavorites && !starredIds.includes(item.id)) return false;
      if (onlyDiagrams && !item.mermaidChart) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = item.title.toLowerCase().includes(q);
        const inFormula = item.formula.toLowerCase().includes(q);
        const inTrap = item.trap.toLowerCase().includes(q);
        const inTags = item.tags.some((t) => t.toLowerCase().includes(q));
        return inTitle || inFormula || inTrap || inTags;
      }
      return true;
    });
  }, [selectedSection, selectedGrade, onlyFavorites, onlyDiagrams, starredIds, searchQuery]);

  const sectionCounts = useMemo(() => {
    const counts: Record<string, number> = { all: LINUX_ROI_ITEMS.length };
    LINUX_ROI_ITEMS.forEach((i) => {
      counts[i.sectionId] = (counts[i.sectionId] || 0) + 1;
    });
    return counts;
  }, []);

  const killerStats = useMemo(() => {
    const total = KILLER_TRAP_QUESTIONS.length;
    let solved = 0;
    let correct = 0;
    KILLER_TRAP_QUESTIONS.forEach((q) => {
      const ans = userAnswers[q.id];
      if (ans !== undefined) {
        solved += 1;
        if (ans === q.correctAnswer) correct += 1;
      }
    });
    return { total, solved, correct };
  }, [userAnswers]);

  return (
    <>
      {/* 화면 우하단 플로팅 트리거 버튼 */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 print:hidden">
          <Button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex h-14 items-center gap-2.5 rounded-full bg-emerald-600 px-5 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:shadow-emerald-500/30 text-white"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-200 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-white" />
            </span>
            <Flame className="size-5 fill-current text-amber-300" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold leading-tight">리눅스마스터 2급</span>
              <span className="text-[11px] font-medium text-emerald-100">
                ROI 전략 메모장 (30선 + 함정 10선)
              </span>
            </div>
            {starredIds.length > 0 && (
              <span className="flex size-5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-amber-950">
                {starredIds.length}
              </span>
            )}
          </Button>
        </div>
      )}

      {/* 플로팅 모달 본체 */}
      {isOpen && (
        <div
          className={cn(
            "fixed z-50 flex flex-col overflow-hidden rounded-2xl border border-emerald-500/25 bg-background shadow-2xl transition-all duration-200 print:hidden",
            isMinimized
              ? "bottom-6 right-6 h-14 w-80 shadow-lg"
              : "bottom-4 right-4 top-16 w-[94vw] sm:w-[620px] md:w-[680px] lg:w-[740px]"
          )}
        >
          {/* 헤더 바 */}
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-emerald-950/10 px-4 dark:bg-emerald-950/30">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
                <Terminal className="size-4" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold tracking-tight">리눅스마스터 2급 ROI 전략 메모장</h3>
                  <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-800 dark:text-emerald-300">
                    실전 80제 & 함정 기출
                  </span>
                </div>
                {!isMinimized && (
                  <p className="text-[11px] text-muted-foreground">
                    1과목 48문항 + 2과목 32문항 초빈출 핵심 요약 30선 & 함정 10선
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized((prev) => !prev)}
                className="size-8 text-muted-foreground hover:text-foreground"
                title={isMinimized ? "창 복원" : "최소화"}
              >
                {isMinimized ? <Maximize2 className="size-4" /> : <Minimize2 className="size-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="size-8 text-muted-foreground hover:text-foreground"
                title="닫기"
              >
                <X className="size-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* 상단 탭 셀렉터 */}
              <div className="flex border-b border-border bg-muted/30 px-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("roi")}
                  className={cn(
                    "flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-bold transition-colors",
                    activeTab === "roi"
                      ? "border-emerald-600 text-emerald-700 dark:text-emerald-400"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Flame className="size-3.5 fill-current text-amber-500" />
                  기출 빈출 ROI 30선
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("killer")}
                  className={cn(
                    "flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-bold transition-colors",
                    activeTab === "killer"
                      ? "border-emerald-600 text-emerald-700 dark:text-emerald-400"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Zap className="size-3.5 text-amber-500" />
                  단골 함정 기출 10선
                  {killerStats.solved > 0 && (
                    <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.2 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 ml-1">
                      {killerStats.correct}/{killerStats.total}
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("scratchpad")}
                  className={cn(
                    "flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-bold transition-colors",
                    activeTab === "scratchpad"
                      ? "border-emerald-600 text-emerald-700 dark:text-emerald-400"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <FileText className="size-3.5" />
                  시험장 직전 암기장 (Scratchpad)
                  {userNotes.trim().length > 0 && (
                    <span className="size-1.5 rounded-full bg-emerald-500 ml-1" />
                  )}
                </button>
              </div>

              {/* [TAB 1] 기출 빈출 ROI 30선 목록 */}
              {activeTab === "roi" && (
                <div className="flex flex-1 flex-col overflow-hidden">
                  {/* 검색 바 & 필터 */}
                  <div className="flex flex-col gap-2.5 border-b border-border bg-muted/15 p-3 sm:p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="명령어, 옵션, 키워드 검색 (예: umask, tar, nice, fdisk, xhost, quota, 640)..."
                          className="h-9 w-full rounded-lg border border-border bg-background pl-9 pr-8 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                        />
                        {searchQuery && (
                          <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            <X className="size-3.5" />
                          </button>
                        )}
                      </div>

                      {/* 북마크 필터 */}
                      <Button
                        variant={onlyFavorites ? "default" : "outline"}
                        size="sm"
                        onClick={() => setOnlyFavorites((prev) => !prev)}
                        className={cn(
                          "h-9 gap-1.5 text-xs font-semibold shrink-0",
                          onlyFavorites
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                            : "text-muted-foreground"
                        )}
                      >
                        <Star className={cn("size-3.5", onlyFavorites ? "fill-white" : "fill-amber-500 text-amber-500")} />
                        즐겨찾기 ({starredIds.length})
                      </Button>

                      {/* 도표 필터 */}
                      <Button
                        variant={onlyDiagrams ? "default" : "outline"}
                        size="sm"
                        onClick={() => setOnlyDiagrams((prev) => !prev)}
                        className={cn(
                          "h-9 gap-1.5 text-xs font-semibold shrink-0",
                          onlyDiagrams
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                            : "text-muted-foreground"
                        )}
                      >
                        <BarChart3 className={cn("size-3.5", onlyDiagrams ? "text-white" : "text-emerald-600")} />
                        구조도 ({LINUX_ROI_ITEMS.filter((i) => Boolean(i.mermaidChart)).length})
                      </Button>
                    </div>

                    {/* 섹션 탭 */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                      {(
                        [
                          { id: "all", label: `전체 (${sectionCounts.all})` },
                          { id: "accounts-permissions", label: `1. 계정·권한·쿼터 (${sectionCounts["accounts-permissions"] || 0})` },
                          { id: "filesystem-shell", label: `2. 파일시스템·셸 (${sectionCounts["filesystem-shell"] || 0})` },
                          { id: "process-scheduling", label: `3. 프로세스·에디터 (${sectionCounts["process-scheduling"] || 0})` },
                          { id: "package-network", label: `4. 패키지·네트워크 (${sectionCounts["package-network"] || 0})` },
                          { id: "xwindow-security", label: `5. X-Window·IT활용 (${sectionCounts["xwindow-security"] || 0})` },
                        ] as const
                      ).map((sec) => (
                        <button
                          key={sec.id}
                          type="button"
                          onClick={() => setSelectedSection(sec.id)}
                          className={cn(
                            "shrink-0 rounded-md px-2.5 py-1 font-medium transition-colors",
                            selectedSection === sec.id
                              ? "bg-emerald-600 text-white font-semibold"
                              : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                          )}
                        >
                          {sec.label}
                        </button>
                      ))}
                    </div>

                    {/* 등급(Grade) 필터 */}
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="text-[11px] font-medium text-muted-foreground mr-1">
                        출제 등급:
                      </span>
                      {(
                        [
                          { id: "all", label: "전체" },
                          { id: "S", label: "🏆 [S] 초빈출 킬러" },
                          { id: "A", label: "🥈 [A] 핵심 빈출" },
                          { id: "B", label: "🥉 [B] 기본 개념" },
                        ] as const
                      ).map((gr) => (
                        <button
                          key={gr.id}
                          type="button"
                          onClick={() => setSelectedGrade(gr.id)}
                          className={cn(
                            "rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors border",
                            selectedGrade === gr.id
                              ? "border-emerald-600 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold"
                              : "border-border bg-background text-muted-foreground hover:bg-muted"
                          )}
                        >
                          {gr.label}
                        </button>
                      ))}
                      <span className="ml-auto text-[11px] text-muted-foreground">
                        총 <strong>{filteredList.length}</strong>개 항목
                      </span>
                    </div>
                  </div>

                  {/* 카드 리스트 영역 */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                    {filteredList.length === 0 ? (
                      <div className="flex h-56 flex-col items-center justify-center gap-2 text-center text-muted-foreground">
                        <HelpCircle className="size-10 stroke-[1.5]" />
                        <p className="text-sm">조건에 일치하는 ROI 토픽이 없습니다.</p>
                        <Button
                          variant="link"
                          size="sm"
                          onClick={() => {
                            setSearchQuery("");
                            setSelectedSection("all");
                            setSelectedGrade("all");
                            setOnlyFavorites(false);
                            setOnlyDiagrams(false);
                          }}
                          className="text-xs text-emerald-600"
                        >
                          필터 초기화
                        </Button>
                      </div>
                    ) : (
                      filteredList.map((item) => {
                        const isStarred = starredIds.includes(item.id);
                        return (
                          <div
                            key={item.id}
                            id={`roi-card-${item.id}`}
                            className={cn(
                              "group relative rounded-xl border p-4 transition-all hover:shadow-md",
                              item.grade === "S"
                                ? "border-emerald-500/40 bg-emerald-500/[0.03] hover:border-emerald-500/60"
                                : item.grade === "A"
                                ? "border-sky-500/30 bg-sky-500/[0.02] hover:border-sky-500/50"
                                : "border-border bg-card hover:border-muted-foreground/30"
                            )}
                          >
                            {/* 카드 상단 배지 및 액션 */}
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <div className="flex flex-wrap items-center gap-1.5">
                                <span
                                  className={cn(
                                    "flex items-center gap-1 rounded px-2 py-0.5 text-xs font-bold",
                                    item.grade === "S"
                                      ? "bg-emerald-600 text-white"
                                      : item.grade === "A"
                                      ? "bg-sky-600 text-white"
                                      : "bg-muted text-muted-foreground"
                                  )}
                                >
                                  {item.grade === "S" && <Flame className="size-3 fill-current" />}
                                  {item.grade} 등급
                                </span>
                                <span className="rounded bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                                  {item.sectionName}
                                </span>
                                <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                                  {item.frequencyRate}
                                </span>
                              </div>

                              <button
                                type="button"
                                onClick={(e) => toggleStar(item.id, e)}
                                className="rounded p-1 text-muted-foreground transition-colors hover:text-amber-500"
                                title={isStarred ? "즐겨찾기 해제" : "즐겨찾기 추가"}
                              >
                                <Star
                                  className={cn(
                                    "size-4",
                                    isStarred ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                                  )}
                                />
                              </button>
                            </div>

                            {/* 토픽 제목 */}
                            <h4 className="text-base font-bold tracking-tight text-foreground mb-2">
                              {item.title}
                            </h4>

                            {/* 핵심 공식 / 요약 박스 */}
                            <div className="rounded-lg bg-emerald-500/10 p-3 text-xs font-medium text-emerald-950 dark:text-emerald-100 mb-2.5 leading-relaxed font-mono">
                              <span className="font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
                                [핵심 문법 및 공식]
                              </span>
                              {item.formula}
                            </div>

                            {/* 함정 피하기 경고 박스 */}
                            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-950 dark:text-amber-200 leading-relaxed mb-2.5">
                              <div className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-400 mb-1">
                                <AlertTriangle className="size-3.5" />
                                <span>기출 오답 함정 피하기</span>
                              </div>
                              <p className="font-sans">{item.trap}</p>
                            </div>

                            {/* 인라인 Mermaid 도표 */}
                            {item.mermaidChart && (
                              <LinuxRoiMermaid
                                id={item.id}
                                chart={item.mermaidChart}
                                title={item.diagramTitle || `${item.title} 구조도`}
                              />
                            )}

                            {/* 태그 목록 */}
                            <div className="flex flex-wrap gap-1 mt-2.5">
                              {item.tags.map((tag) => (
                                <button
                                  key={tag}
                                  type="button"
                                  onClick={() => setSearchQuery(tag)}
                                  className="rounded bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                                >
                                  #{tag}
                                </button>
                              ))}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              {/* [TAB 2] 단골 함정 기출 10선 인터랙티브 풀이 */}
              {activeTab === "killer" && (
                <div className="flex flex-1 flex-col overflow-hidden">
                  {/* 함정 퀴즈 진행 상태 배너 */}
                  <div className="flex items-center justify-between border-b border-border bg-emerald-950/10 px-4 py-3 dark:bg-emerald-950/30">
                    <div className="flex items-center gap-2">
                      <Zap className="size-4 text-amber-500" />
                      <span className="text-xs font-bold">
                        단골 함정 10선 테스트 진행률: {killerStats.solved}/10 완료
                      </span>
                      {killerStats.solved > 0 && (
                        <span className="rounded bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">
                          정답률 {Math.round((killerStats.correct / (killerStats.solved || 1)) * 100)}%
                        </span>
                      )}
                    </div>
                    {killerStats.solved > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleResetKillerTrap}
                        className="h-7 text-xs text-muted-foreground hover:text-foreground"
                      >
                        <RotateCcw className="size-3 mr-1" />
                        풀이 초기화
                      </Button>
                    )}
                  </div>

                  {/* 10문항 카드 리스트 */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {KILLER_TRAP_QUESTIONS.map((q) => {
                      const selected = userAnswers[q.id];
                      const isSolved = selected !== undefined;
                      const isCorrect = selected === q.correctAnswer;
                      const isExpOpen = showExplanation[q.id];

                      return (
                        <div
                          key={q.id}
                          className={cn(
                            "rounded-xl border p-4 transition-all",
                            isSolved
                              ? isCorrect
                                ? "border-emerald-500/50 bg-emerald-500/[0.04]"
                                : "border-destructive/50 bg-destructive/[0.04]"
                              : "border-border bg-card"
                          )}
                        >
                          {/* 문항 헤더 */}
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <span className="flex size-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                                Q{q.id}
                              </span>
                              <span className="rounded bg-muted px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                                {q.category}
                              </span>
                            </div>
                            {isSolved && (
                              <span
                                className={cn(
                                  "flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold",
                                  isCorrect
                                    ? "bg-emerald-600 text-white"
                                    : "bg-destructive text-white"
                                )}
                              >
                                {isCorrect ? (
                                  <>
                                    <CheckCircle2 className="size-3.5" /> 정답!
                                  </>
                                ) : (
                                  <>
                                    <XCircle className="size-3.5" /> 오답 함정
                                  </>
                                )}
                              </span>
                            )}
                          </div>

                          {/* 문제 질문 */}
                          <p className="text-sm font-bold text-foreground mb-3 leading-relaxed">
                            {q.question}
                          </p>

                          {/* 4지선다 보기 */}
                          <div className="grid grid-cols-1 gap-2 mb-3">
                            {q.options.map((opt, optIdx) => {
                              const optionNumber = optIdx + 1;
                              const isThisSelected = selected === optionNumber;
                              const isThisCorrect = q.correctAnswer === optionNumber;

                              return (
                                <button
                                  key={optIdx}
                                  type="button"
                                  onClick={() => handleSelectOption(q.id, optionNumber)}
                                  className={cn(
                                    "flex items-center gap-3 rounded-lg border p-2.5 text-left text-xs transition-colors font-mono",
                                    !isSolved && "hover:border-emerald-500 hover:bg-emerald-500/5",
                                    isSolved && isThisCorrect && "border-emerald-500 bg-emerald-500/15 font-bold text-emerald-950 dark:text-emerald-200",
                                    isSolved && isThisSelected && !isThisCorrect && "border-destructive bg-destructive/15 text-destructive font-semibold",
                                    isSolved && !isThisSelected && !isThisCorrect && "border-border/60 opacity-60"
                                  )}
                                >
                                  <span
                                    className={cn(
                                      "flex size-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold border",
                                      isSolved && isThisCorrect
                                        ? "border-emerald-600 bg-emerald-600 text-white"
                                        : isSolved && isThisSelected && !isThisCorrect
                                        ? "border-destructive bg-destructive text-white"
                                        : "border-muted-foreground/30 text-muted-foreground"
                                    )}
                                  >
                                    {optionNumber}
                                  </span>
                                  <span className="flex-1">{opt}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* 해설 토글 및 내용 */}
                          {isSolved && (
                            <div className="border-t border-border/80 pt-3 mt-3">
                              <button
                                type="button"
                                onClick={() => toggleExplanation(q.id)}
                                className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline mb-2"
                              >
                                <span>정답 및 함정 해설 {isExpOpen ? "접기" : "보기"}</span>
                                {isExpOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
                              </button>

                              {isExpOpen && (
                                <div className="space-y-2 rounded-lg bg-muted/40 p-3 text-xs leading-relaxed">
                                  <div className="font-bold text-foreground">
                                    {q.answerText}
                                  </div>
                                  <p className="text-muted-foreground font-sans">
                                    {q.explanation}
                                  </p>
                                  <div className="rounded border border-amber-500/30 bg-amber-500/10 p-2 text-amber-950 dark:text-amber-200 font-sans">
                                    <span className="font-bold block text-amber-800 dark:text-amber-300 mb-0.5">
                                      ⚠️ 함정 피하기 포인트:
                                    </span>
                                    {q.trapWarning}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* [TAB 3] 시험장 직전 나만의 암기장 (Scratchpad) */}
              {activeTab === "scratchpad" && (
                <div className="flex flex-1 flex-col overflow-hidden p-4">
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="size-4 text-emerald-600" />
                      <span className="text-xs font-bold text-foreground">
                        시험장 직전 암기 메모장
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        (로컬에 자동 저장됨 · {userNotes.length}자)
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopyNotes}
                        className="h-7 gap-1 text-xs"
                      >
                        {isCopied ? (
                          <>
                            <Check className="size-3 text-emerald-600" />
                            <span className="text-emerald-600 font-bold">복사 완료</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-3" />
                            <span>전체 복사</span>
                          </>
                        )}
                      </Button>

                      {showResetConfirm ? (
                        <div className="flex items-center gap-1">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={handleResetTemplate}
                            className="h-7 text-[11px] px-2"
                          >
                            초기화 확인
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowResetConfirm(false)}
                            className="h-7 text-[11px] px-1.5"
                          >
                            취소
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowResetConfirm(true)}
                          className="h-7 gap-1 text-xs text-muted-foreground hover:text-foreground"
                          title="기본 치트시트 템플릿으로 복원"
                        >
                          <RotateCcw className="size-3" />
                          <span>템플릿 복원</span>
                        </Button>
                      )}
                    </div>
                  </div>

                  <textarea
                    value={userNotes}
                    onChange={(e) => handleNotesChange(e.target.value)}
                    placeholder="여기에 시험 직전 암기해야 할 명령어 옵션, 취약점 메모를 자유롭게 적으세요..."
                    className="flex-1 w-full resize-none rounded-xl border border-border bg-muted/20 p-4 font-mono text-xs leading-relaxed placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}

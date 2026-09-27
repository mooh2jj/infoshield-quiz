import type { MindmapSection } from "@/types/mindmap";

export const filesystemShellMindmap: MindmapSection = {
  id: "filesystem-shell",
  title: "파일시스템과 셸 환경",
  description: "파일시스템·마운트 관리, 셸 환경변수, vi/Vim 필수 명령",
  chart: `mindmap
  root((파일시스템과 셸 환경))
    파일시스템 관리
      fsTypeBox["파일시스템 종류<br/>1) ext4 — 저널링 파일시스템<br/>2) xfs — 대용량 고성능, RHEL·Rocky 기본<br/>3) btrfs, vfat, iso9660"]
      fsCmdBox["파일시스템 관리 명령어(실기)<br/>1) fdisk / gdisk(GPT) — 파티션 생성·관리<br/>2) mkfs / mke2fs — 파일시스템 생성<br/>3) fsck / e2fsck / xfs_repair — 무결성 점검·복구<br/>4) tune2fs, blkid — 속성 조정·UUID 확인"]
    마운트와 용량
      mountBox["마운트 관리(실기)<br/>1) mount — -t(타입 지정) -o(옵션) -a(fstab 전체 마운트)<br/>2) umount — -l(지연 언마운트) -f(강제 언마운트)"]
      fstabBox["/etc/fstab 필드 구조(실기)<br/>1) 장치명<br/>2) 마운트포인트<br/>3) 파일시스템 종류<br/>4) 마운트 옵션 — defaults·ro·noexec·usrquota<br/>5) dump 여부 — 0(비활성)·1(대상)<br/>6) fsck 순서 — 0(생략)·1(루트 최우선)·2(기타 순차)"]
      diskUsageBox["디스크 사용량 확인(실기)<br/>1) df — -h·-T·-i, 마운트된 파일시스템의 전체·남은 용량 확인<br/>2) du — -sh·-a, 지정 대상의 사용량 합계 확인<br/>3) 쿼터 — quota·edquota·repquota·quotacheck"]
    셸과 환경변수
      shellBox["셸 종류와 환경변수<br/>1) 셸 종류 — sh, bash(기본), csh, tcsh, ksh, zsh<br/>2) /etc/shells — 사용 가능한 셸 목록<br/>3) 환경변수 — PATH, HOME, USER, SHELL, PS1, HISTSIZE, TMOUT<br/>4) export, env, set로 확인·설정"]
      shellConfigBox["로그인 셸 설정 파일 실행 순서(실기)<br/>1) /etc/profile — 전역 설정<br/>2) ~/.bash_profile(또는 .bash_login, .profile) — 사용자 로그인 설정<br/>3) ~/.bashrc → /etc/bashrc — 셸 실행 시마다 적용되는 설정"]
    vi Vim 에디터
      viBox["vi/Vim 명령 모드 핵심 단축키(실기)<br/>1) i / a — 커서 앞/뒤에서 입력 모드 진입<br/>2) o / O — 아래/위에 새 줄을 추가하며 입력 모드 진입<br/>3) yy / 3yy — 현재 줄/3줄 복사<br/>4) p / P — 커서 아래/위에 붙여넣기<br/>5) dd / 5dd — 현재 줄/5줄 삭제<br/>6) u / Ctrl+r — 실행 취소/재실행<br/>7) G / gg — 마지막 줄/첫 줄로 이동"]
      viExBox["vi/Vim 마지막 행 모드 명령(실기)<br/>1) :w / :q / :wq! — 저장 / 종료 / 강제 저장 후 종료<br/>2) :%s/old/new/g — 문서 전체에서 old를 new로 치환<br/>3) :set nu / nonu — 줄 번호 표시 / 숨기기"]`,
};

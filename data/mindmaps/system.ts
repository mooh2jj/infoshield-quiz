import type { MindmapSection } from "@/types/mindmap";

export const systemMindmap: MindmapSection = {
  id: "system",
  title: "시스템 보안",
  description: "유닉스·윈도우 실무 보안 — 컴퓨터구조·운영체제 지식을 전제로 함",
  chart: `mindmap
  root((시스템 보안))
    유닉스 파일시스템
      구조
        Boot Block
        Super Block
        Inode
        Data Block
      종류
        Ext2 Ext3 Ext4
        UFS
      권한 관리
        SetUID
        SetGID
        Sticky Bit
        umask
        ACL
    유닉스 로그
      utmp 현재 로그인
      wtmp 로그인 이력
      lastlog 최근 로그인 성공
      btmp 로그인 실패
      sulog su 명령 기록
    계정 관리
      etc passwd
      etc shadow
      Run Level 0 to 6
      PAM 인증 모듈
    윈도우 아키텍처
      메시지 기반 구조
      핵심 프로세스
        Winlogon
        GINA
        LSA
        SAM
        SRM
    윈도우 계정과 로그
      내장 계정
        Administrators
        Users
        Guests
      로그 종류
        응용프로그램 로그
        보안 로그
        시스템 로그
    시스템 해킹 방어
      버퍼 오버플로우 대응
        ASLR
        DEP
        스택 가드
      경쟁 조건 대응 TOCTOU
      루트킷 무결성 점검
    악성코드 분류
      바이러스
        매크로 바이러스
      웜 자가전파
      트로이목마
        백도어 비자가증식
      랜섬웨어
      봇 좀비PC 봇넷`,
};

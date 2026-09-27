import type { MindmapSection } from "@/types/mindmap";

export const nosMindmap: MindmapSection = {
  id: "nos",
  title: "NOS(네트워크 운영체제)",
  description: "Windows Server AD·DNS·DHCP·IIS, Linux 계정·권한·서비스 설정",
  chart: `mindmap
  root((NOS 네트워크 운영체제))
    Windows Server AD DNS DHCP
      adBox["Active Directory와 FSMO(실기)<br/>1) 구성요소 — 도메인 컨트롤러(DC), 포리스트(Forest), 트리(Tree), OU, GPO<br/>2) 포리스트 단위(1개만 존재) — Schema Master, Domain Naming Master<br/>3) 도메인 단위(도메인마다 존재) — PDC Emulator, RID Master, Infrastructure Master"]
      dnsServerBox["DNS 서버 설정(실기)<br/>1) 정방향 조회 영역 — 도메인→IP, A/AAAA, CNAME, MX, TXT 레코드<br/>2) 역방향 조회 영역 — IP→도메인, PTR 레코드(in-addr.arpa)<br/>3) 조건부 전달자 — 특정 도메인 질의를 지정된 DNS 서버로 전달"]
      dhcpServerBox["DHCP 서버 설정(실기)<br/>1) 범위(Scope), 제외 IP 범위, 임대 기간<br/>2) 예약 — MAC 주소 기반 고정 IP 할당<br/>3) 옵션 — 003 라우터/GW, 006 DNS 서버, 015 도메인 이름"]
    IIS와 보안 정책
      iisBox["IIS 웹·FTP 설정<br/>1) 웹 사이트 바인딩 — IP, 포트, 호스트 헤더<br/>2) 기본 문서, 디렉터리 검색, 가상 디렉터리, SSL 인증서 바인딩<br/>3) FTP 가상 호스트 및 격리"]
      localSecBox["로컬 보안 정책(실기)<br/>1) 계정 잠금 임계값·기간, 원래대로 설정 시간<br/>2) 암호 정책 — 암호 복잡성, 최소 암호 길이, 최대 암호 사용 기간"]
      permissionBox["NTFS 권한 vs 공유 권한<br/>1) NTFS 사용 권한 — 상속 적용, 우선순위는 거부 > 허용<br/>2) 공유 권한 — 네트워크 접근 시 NTFS·공유 권한 중 가장 엄격한 권한이 최종 적용"]
    Linux Unix
      linuxAcctBox["계정 및 그룹 파일<br/>1) /etc/passwd(7필드), /etc/shadow(9필드, 암호화 해시)<br/>2) /etc/group, /etc/default/useradd, /etc/skel"]
      linuxPermBox["권한 관리<br/>1) chmod(8진수·기호 모드), chown, chgrp<br/>2) umask — 디렉터리 777·파일 666 기준으로 마스킹<br/>3) SetUID(4000), SetGID(2000), Sticky Bit(1000)"]
      linuxServiceBox["네트워크·서비스 설정 파일<br/>1) DNS(BIND) — /etc/named.conf, /var/named/<br/>2) Apache — httpd.conf(ServerRoot, DocumentRoot, Listen)<br/>3) Samba — /etc/samba/smb.conf(workgroup, security, share)<br/>4) NFS — /etc/exports(rw, sync, no_root_squash)<br/>5) 인터페이스 — ifcfg-*(RHEL/CentOS) 또는 netplan(Ubuntu)"]
      linuxCliBox["필수 CLI 명령어(실기)<br/>1) find / -name 패턴 -type f — 경로 하위 파일 검색<br/>2) kill -9 PID — SIGKILL로 강제 즉시 종료<br/>3) ifconfig/ip, netstat/ss, route, traceroute, nslookup/dig<br/>4) iptables/firewalld, systemctl"]
    그룹 정책과 RAID 구성
      gpoBox["그룹 정책(GPO) 적용 순서(실기)<br/>1) Local → Site → Domain → OU 순으로 정책이 누적 적용<br/>2) 나중에 적용되는 OU 수준의 정책이 충돌 시 최종 우선순위를 가짐"]
      raidBox["RAID 구성 방식<br/>1) RAID 0 — 스트라이핑, 속도 향상이나 내결함성 없음(디스크 1개 손상 시 전체 손실)<br/>2) RAID 1 — 미러링, 동일 데이터를 이중 저장해 이중화<br/>3) RAID 5 — 분산 패리티, 최소 3개 디스크로 1개 고장까지 복구 가능<br/>4) RAID 10 — 미러링+스트라이핑 결합, 성능과 이중화를 동시 확보"]`,
};

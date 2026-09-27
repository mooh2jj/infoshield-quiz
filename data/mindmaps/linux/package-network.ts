import type { MindmapSection } from "@/types/mindmap";

export const packageNetworkMindmap: MindmapSection = {
  id: "package-network",
  title: "소프트웨어 관리와 네트워크",
  description: "패키지 관리, 압축·컴파일, 네트워크 기초와 명령어",
  chart: `mindmap
  root((소프트웨어 관리와 네트워크))
    패키지 관리
      packageRpmBox["Red Hat 계열 패키지 관리<br/>1) rpm — 설치 -ivh, 업그레이드 -Uvh, 질의 -qa·-qi·-ql·-qf, 삭제 -e<br/>2) --nodeps — 의존성을 무시하고 강제 제거<br/>3) yum / dnf — install·remove·update·info·history·provides"]
      packageDebBox["Debian 계열 패키지 관리<br/>1) dpkg — 설치 -i, 목록 -l, 정보 -s, 파일조회 -L, 제거 -r, 설정포함삭제 -P<br/>2) apt-get / apt — install·remove·purge·update·upgrade"]
      packageMapBox["배포판별 패키지 관리자 매핑<br/>1) RHEL·Rocky·CentOS — rpm + yum/dnf<br/>2) Debian·Ubuntu — dpkg + apt-get/apt<br/>3) openSUSE — zypper<br/>4) Arch Linux — pacman"]
    압축과 컴파일
      tarBox["tar 압축 옵션<br/>1) 기본 옵션 — -c(생성) -x(추출) -v(진행표시) -f(파일명 지정)<br/>2) -z — gzip(.tar.gz)<br/>3) -j — bzip2(.tar.bz2)<br/>4) -J — xz(.tar.xz)"]
      compileBox["소스 컴파일 3단계<br/>1) ./configure — Makefile 생성과 환경 검사<br/>2) make — 소스 코드를 컴파일<br/>3) make install — 실행 파일을 시스템에 배치"]
    네트워크 기초
      networkBasicBox["네트워크 기본 개념<br/>1) OSI 7계층<br/>2) TCP(연결지향) vs UDP(비연결형)<br/>3) IP 주소체계 — A~C 클래스, CIDR 표기<br/>4) 사설 IP 대역"]
      portBox["주요 프로토콜과 표준 포트<br/>1) FTP 20/21, SSH 22, Telnet 23<br/>2) SMTP 25, DNS 53, DHCP 67/68, HTTP 80<br/>3) POP3 110, NTP 123, IMAP 143, SNMP 161/162<br/>4) HTTPS 443, Samba 139/445, NFS 2049"]
    네트워크 명령어와 설정파일
      netCmdBox["네트워크 진단 명령어<br/>1) ifconfig, ip(addr·link·route), route<br/>2) netstat -antp — 모든 소켓을 숫자로, TCP만, PID·프로그램명 표시<br/>3) ss — 최신 리눅스의 표준 권장 명령어<br/>4) ping, traceroute, nslookup / dig / host"]
      netConfigBox["네트워크 핵심 설정 파일<br/>1) /etc/resolv.conf — nameserver IP 지정<br/>2) /etc/hosts — 로컬 도메인-IP 매핑<br/>3) /etc/services — 포트-프로토콜 이름 정의<br/>4) /etc/sysconfig/network-scripts/ifcfg-* — RHEL 계열 인터페이스 설정"]
    방화벽과 파일 공유
      firewallBox["방화벽 관리<br/>1) firewalld — firewall-cmd --add-service=/--add-port= --permanent --reload<br/>2) iptables — INPUT/OUTPUT/FORWARD 체인에 ACCEPT/DROP 규칙 적용<br/>3) systemctl status firewalld — 서비스 동작 여부 확인"]
      shareBox["NFS와 Samba 공유<br/>1) NFS — /etc/exports에 공유 경로 등록, exportfs -a로 적용<br/>2) showmount -e — NFS 공유 목록 확인<br/>3) Samba — /etc/samba/smb.conf 설정, smbpasswd로 계정 등록<br/>4) testparm — smb.conf 문법 오류 검사"]`,
};

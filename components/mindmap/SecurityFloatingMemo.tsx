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
  BookmarkCheck,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SecurityRoiMemoItem {
  id: string;
  chapterId: "arch" | "os" | "system" | "network" | "app" | "general" | "law";
  chapterName: string;
  grade: "SSS" | "SS" | "S";
  stars: 3 | 4 | 5;
  frequencyRate: string;
  title: string;
  formula: string;
  trap: string;
  sectionId: string;
  tags: string[];
}

export const SECURITY_ROI_ITEMS: SecurityRoiMemoItem[] = [
  // =================================================================
  // 1. 정보보호 일반 (암호학, 접근통제, 인증, PKI, 전자서명)
  // =================================================================
  {
    id: "sec-roi-01",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 99%+",
    title: "보안 모델 3종 비교 (BLP vs Biba vs Clark-Wilson)",
    formula: "BLP(기밀성): No Read Up (NRU) / No Write Down (NWD)\nBiba(무결성): No Read Down (NRD) / No Write Up (NWU)",
    trap: "Biba는 BLP와 정반대 방향! Biba에서 상위 무결성 주체는 하위 데이터를 읽을 수 없음(오염 방지). 상업용 무결성+직무분리는 클락-윌슨(Clark-Wilson) 모델임!",
    sectionId: "general",
    tags: ["BLP", "Biba", "벨라파듈라", "비바", "무결성", "기밀성"],
  },
  {
    id: "sec-roi-02",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "블록 암호 운용 모드 5종 (ECB / CBC / CFB / OFB / CTR)",
    formula: "ECB: 병렬O, IV(X), 동일평문=동일암호문(패턴노출)\nCBC: IV 필수, 연쇄의존(병렬복호화만 가능)\nCTR: 카운터 사용, 완전 병렬화 가능, 1비트 오류 전파 없음",
    trap: "ECB는 보안상 취약하여 이미지나 대용량 데이터에 절대 단독 권장되지 않음! CBC는 평문 1비트 오류 시 현재 복호 블록 전체와 다음 블록 1비트에 오류 전파됨.",
    sectionId: "general",
    tags: ["ECB", "CBC", "CTR", "블록암호", "IV", "운용모드"],
  },
  {
    id: "sec-roi-03",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 95%+",
    title: "RSA 공개키 암호 알고리즘 계산 공식",
    formula: "n = p×q,  φ(n) = (p-1)(q-1)\n공개키: gcd(e, φ(n)) = 1인 e\n개인키: e×d ≡ 1 (mod φ(n))인 d",
    trap: "실기 계산 단골! 개인키 d를 구할 때 mod n이 아니라 반드시 오일러 파이 함수 값인 'mod φ(n)'을 적용해야 함!",
    sectionId: "general",
    tags: ["RSA", "공개키", "오일러파이", "합동식", "소인수분해"],
  },
  {
    id: "sec-roi-04",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 95%+",
    title: "Diffie-Hellman 키 교환 및 MITM 취약점",
    formula: "A = g^a mod p 전송 ➔ B = g^b mod p 전송 ➔ 공유키 K = (B^a mod p) = (A^b mod p)",
    trap: "디피-헬만 자체는 '키 교환' 프로토콜일 뿐 상호 인증 기능이 없어 중간자 공격(MITM)에 취약함! 이를 해결하려면 전자서명/인증서 결합 필수.",
    sectionId: "general",
    tags: ["Diffie-Hellman", "이산대수", "키교환", "MITM"],
  },
  {
    id: "sec-roi-05",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "Kerberos(커버로스) 인증 프로토콜 절차",
    formula: "Client ➔ AS (인증 요청)\nAS ➔ Client (TGT + Client/TGS 세션키 발급)\nClient ➔ TGS (TGT 제시 + 서비스 티켓 요청)\nTGS ➔ Client (서비스 티켓 발급) ➔ 서버에 제출",
    trap: "AS(Authentication Server)는 'TGT'를 주고, TGS(Ticket Granting Server)가 최종 '서비스 티켓'을 발급함. 순서와 티켓 종류를 뒤바꿔 오답 유도!",
    sectionId: "general",
    tags: ["Kerberos", "AS", "TGS", "TGT", "SSO", "티켓"],
  },
  {
    id: "sec-roi-21",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "전자서명(Digital Signature) 생성 및 검증 원리",
    formula: "서명 생성: 원문 해시값 H(M)을 '송신자 개인키(Private Key)'로 암호화\n서명 검증: 서명문을 '송신자 공개키(Public Key)'로 복호화 후 원문 해시값과 일치 여부 비교",
    trap: "데이터 기밀성 암호화는 '수신자 공개키'로 하지만, 전자서명은 '송신자 개인키'로 서명하고 '송신자 공개키'로 검증함! 부인방지(Non-repudiation)와 무결성 제공.",
    sectionId: "general",
    tags: ["전자서명", "송신자개인키", "송신자공개키", "부인방지", "해시"],
  },
  {
    id: "sec-roi-22",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 93%+",
    title: "해시함수 3대 안전성 요건 (일방향성 / 약한 충돌 저항성 / 강한 충돌 저항성)",
    formula: "① 역상 저항성(일방향): h=H(x)에서 x 찾기 불가\n② 제2 역상(약한 충돌): 주어진 x에 대해 H(x)=H(x')인 x' 찾기 불가\n③ 충돌 저항성(강한 충돌): H(x)=H(x')인 임의의 (x, x') 쌍 찾기 불가",
    trap: "강한 충돌 저항성을 깨는 공격이 바로 '생일 공격(Birthday Attack)'! 출력 비트가 n비트일 때 생일 공격의 복잡도는 2^(n/2)로 대폭 감소함.",
    sectionId: "general",
    tags: ["해시함수", "역상저항성", "충돌저항성", "생일공격", "SHA"],
  },
  {
    id: "sec-roi-23",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "접근통제 3대 정책 모델 (DAC vs MAC vs RBAC)",
    formula: "DAC(임의적): 주체의 신분 기준, 자원 소유자가 권한 부여 (ACL, chmod)\nMAC(강제적): 보안 등급/보안 라벨 기준, 시스템 관리자만 변경 가능 (BLP, Biba)\nRBAC(역할기반): 직무/역할(Role)에 권한 할당 후 사용자를 역할에 매핑",
    trap: "MAC은 높은 보안성이 보지되나 구축 및 운영이 매우 엄격하고 경직됨. 권한 최소화 원칙과 직무 분리를 상업 조직에서 가장 유연하게 구현하는 것은 RBAC!",
    sectionId: "general",
    tags: ["DAC", "MAC", "RBAC", "접근통제", "직무분리", "ACL"],
  },
  {
    id: "sec-roi-24",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "S",
    stars: 3,
    frequencyRate: "출제율 89%+",
    title: "암호문 공격 4가지 모델 (COA / KPA / CPA / CCA)",
    formula: "COA(암호문 단독): 암호문 C만 가짐\nKPA(기지 평문): (P, C) 쌍 일부를 미리 알고 있음\nCPA(선택 평문): 공격자가 원하는 P를 골라 C를 얻음\nCCA(선택 암호문): 공격자가 원하는 C를 골라 복호문 P를 얻음",
    trap: "공격자가 가진 권한과 정보가 가장 강력한 것은 CCA(선택 암호문 공격)! 반대로 공격자에게 가장 불리한 기본 모델은 COA(암호문 단독 공격)임.",
    sectionId: "general",
    tags: ["암호분석", "COA", "KPA", "CPA", "CCA", "공격모델"],
  },

  // =================================================================
  // 2. 네트워크 보안 (방화벽, 공격 기법, 프로토콜, 무선, DNS)
  // =================================================================
  {
    id: "sec-roi-06",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 99%+",
    title: "TCP 3-Way Handshake & SYN Flooding 대응",
    formula: "정상: SYN ➔ SYN+ACK ➔ ACK\nSYN Flooding: 대량 SYN 발송 후 ACK 미전송으로 백로그 큐(Backlog Queue) 고갈",
    trap: "대응책 3대장: ① Syn Cookie 활성화(net.ipv4.tcp_syncookies=1) ② 백로그 큐 크기 증가(tcp_max_syn_backlog) ③ 타임아웃 단축(tcp_synack_retries 단축).",
    sectionId: "network",
    tags: ["SYN Flooding", "Syn Cookie", "Backlog", "TCP Handshake"],
  },
  {
    id: "sec-roi-07",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 96%+",
    title: "IPSec 모드와 헤더 비교 (AH vs ESP / 전송 vs 터널)",
    formula: "AH: 인증+무결성(암호화X) / ESP: 암호화+인증+무결성\n전송모드: 원래 IP헤더 유지 (Host-to-Host)\n터널모드: 새로운 IP헤더 추가 (VPN Gateway-to-Gateway)",
    trap: "AH는 IP 헤더의 가변 필드(TTL 등)를 제외하고 인증하므로 NAT 환경(NAT-T)을 통과하지 못함! 암호화(기밀성)는 오직 ESP만 제공함.",
    sectionId: "network",
    tags: ["IPSec", "AH", "ESP", "터널모드", "전송모드", "VPN"],
  },
  {
    id: "sec-roi-08",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 94%+",
    title: "네트워크 스캐닝 기법 (TCP Connect vs SYN(Stealth) vs FIN/NULL/XMAS)",
    formula: "TCP Connect: 완전 연결(로그 남음)\nSYN(Stealth): SYN ➔ SYN+ACK 수신 후 RST 전송(로그 미기록)\nFIN/NULL/XMAS(UNIX계열): 포트 열림(응답X) / 포트 닫힘(RST 응답)",
    trap: "FIN/NULL/XMAS 스캔은 RFC 793 준수 시스템(리눅스/유닉스)에서만 작동하며, 윈도우(Windows)는 포트 개폐 여부와 무관하게 무조건 RST를 보내 통하지 않음!",
    sectionId: "network",
    tags: ["스캐닝", "Stealth", "SYN스캔", "XMAS", "FIN스캔"],
  },
  {
    id: "sec-roi-09",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "ARP Spoofing 공격 원리와 방어책",
    formula: "공격: 위조된 ARP Reply(공격자 MAC)를 희생자에게 지속적 브로드캐스트/유니캐스트 ➔ 게이트웨이 사칭 (2계층)",
    trap: "방어책: IP와 MAC 매핑을 '정적(Static)'으로 고정 (`arp -s [IP] [MAC]`). 방화벽이나 상위 계층 보안 장비로는 동일 LAN 내부의 ARP 스푸핑을 차단할 수 없음!",
    sectionId: "network",
    tags: ["ARP Spoofing", "MAC", "arp -s", "정적매핑", "2계층"],
  },
  {
    id: "sec-roi-25",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 97%+",
    title: "Slowloris 및 Slow HTTP Header/POST DoS 공격",
    formula: "Slowloris: HTTP 헤더 끝(`\\r\\n\\r\\n`)을 완성하지 않고 미완성 헤더를 주기적 전송 ➔ 웹 서버 연결 스레드 고갈\nSlow POST: Content-Length를 크게 지정 후 1바이트씩 매우 느리게 전송",
    trap: "네트워크 대역폭을 소진시키는 볼륨 공격(Flooding)이 아니라, 극소량의 트래픽으로 웹 서버의 자원(Connection pool)만 고사시키는 L7 저속 공격임! Timeout 단축 대응.",
    sectionId: "network",
    tags: ["Slowloris", "Slow HTTP", "DoS", "L7공격", "Timeout"],
  },
  {
    id: "sec-roi-26",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 95%+",
    title: "DNS 증폭 DRDoS (Distributed Reflection DoS) 공격 원리",
    formula: "공격자 ➔ Open DNS 서버에 IP를 '희생자 IP로 위조(IP Spoofing)'하여 `ANY` 레코드 질의 ➔ 수십 배 증폭된 응답이 희생자에게 쏟아짐 (UDP 비연결성 악용)",
    trap: "DRDoS는 TCP가 아닌 'UDP' 기반 프로토콜(DNS, NTP, SNMP, SSDP, Memcached)에서 출발지 IP를 변조해 발생함! Open Resolver 차단 및 Response Rate Limiting(RRL) 필수.",
    sectionId: "network",
    tags: ["DRDoS", "DNS증폭", "IP스푸핑", "OpenResolver", "RRL"],
  },
  {
    id: "sec-roi-27",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "Snort IDS 침입탐지 룰(Rule) 구조 및 헤더 문법",
    formula: "구조: [Action] [Proto] [SrcIP] [SrcPort] -> [DstIP] [DstPort] ( [Rule Options] )\n예: `alert tcp any any -> 192.168.1.0/24 80 (msg:\"Web Attack\"; content:\"/admin\"; sid:1000001;)`",
    trap: "실기 단골 작성 문제! `content` 옵션은 대소문자를 구분하므로 대소문자 무시는 `nocase;` 추가 필수! Snort 사용자 정의 sid는 1,000,001번부터 권장.",
    sectionId: "network",
    tags: ["Snort", "IDS", "Rule", "nocase", "sid", "content"],
  },
  {
    id: "sec-roi-28",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "S",
    stars: 3,
    frequencyRate: "출제율 90%+",
    title: "무선 LAN 보안 규격 (WEP vs WPA vs WPA2 vs WPA3)",
    formula: "WEP: RC4, 고정 24비트 IV(재사용 취약)\nWPA: TKIP (임시 키 무결성 프로토콜)\nWPA2: CCMP / AES-128 (강력한 기밀성/무결성)\nWPA3: SAE (동시인증) 기법, 오프라인 사전 공격 원천 차단",
    trap: "WEP는 IV 길이가 24비트로 너무 짧아 패킷이 누적되면 IV가 재사용되어 RC4 키가 쉽게 크랙됨! WPA2는 CCMP(AES), WPA3는 SAE(동시인증)를 쓴다는 점이 핵심.",
    sectionId: "network",
    tags: ["무선보안", "WEP", "WPA2", "CCMP", "WPA3", "SAE"],
  },

  // =================================================================
  // 3. 시스템 보안 (리눅스 보안, 권한, 로그, 메모리, 계정)
  // =================================================================
  {
    id: "sec-roi-10",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "SetUID / SetGID / Sticky Bit 권한 분석 및 명령어",
    formula: "SetUID: 4000 (실행 시 소유자 권한, rws)\nSetGID: 2000 (실행 시 그룹 권한, rws)\nSticky Bit: 1000 (누구나 생성 가능하나 본인 파일만 삭제 가능, rwt, /tmp)",
    trap: "실기 명령어 단골: SetUID 파일 색출 `find / -perm -4000 -type f 2>/dev/null`. SetUID가 root 권한으로 실행되는 파일에 버퍼 오버플로우 발생 시 루트 쉘 획득 가능!",
    sectionId: "system",
    tags: ["SetUID", "SetGID", "StickyBit", "find -perm", "권한"],
  },
  {
    id: "sec-roi-11",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 97%+",
    title: "리눅스 4대 핵심 보안 로그 파일과 명령어",
    formula: "wtmp: 성공한 로그인/로그아웃/재부팅 이력 ➔ `last`\nbtmp: 실패한 로그인 이력 ➔ `lastb`\nutmp: 현재 로그인 중인 사용자 ➔ `who`, `w`, `users`\nlastlog: 각 사용자별 가장 최근 로그인 ➔ `lastlog`",
    trap: "utmp/wtmp/btmp/lastlog는 모두 바이너리 파일이므로 `cat`이나 `vi`로 직접 읽을 수 없고, 전용 명령어(`last`, `lastb`, `who`)로 조회해야 함!",
    sectionId: "system",
    tags: ["wtmp", "btmp", "utmp", "lastlog", "last", "lastb"],
  },
  {
    id: "sec-roi-12",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 93%+",
    title: "버퍼 오버플로우(BOF) 4대 메모리 보호 기법",
    formula: "ASLR: 스택, 힙, 라이브러리 주소 무작위 배치\nDEP/NX: 실행 권한 없는 메모리 영역(스택 등) 실행 차단\nStack Canary: RET 주소 앞에 카나리 값 삽입해 변조 감지\nASCII-Armor: 공유 라이브러리 주소 상위에 0x00(Null) 삽입",
    trap: "ASLR이 적용되어도 코드 영역(Text Segment)은 고정될 수 있어 RTL(Return-to-Libc)이나 ROP(Return-Oriented Programming) 기법으로 우회될 수 있음!",
    sectionId: "system",
    tags: ["BOF", "ASLR", "DEP", "NX", "Canary", "RTL"],
  },
  {
    id: "sec-roi-13",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "PAM (Pluggable Authentication Modules) 제어 플래그",
    formula: "required: 실패해도 다음 모듈 계속 수행 후 최종 실패\nrequisite: 실패 시 즉시 중단하고 실패 반환\nsufficient: 이전 실패 없으면 즉시 성공 반환, 실패 시 무시하고 다음 진행\noptional: 성공/실패 여부가 최종 결과에 영향 미치지 않음",
    trap: "required는 실패하더라도 즉각 종료하지 않고 끝까지 수행해 공격자에게 어느 단계에서 실패했는지 힌트를 주지 않는 보안적 특징이 있음!",
    sectionId: "system",
    tags: ["PAM", "required", "requisite", "sufficient", "리눅스인증"],
  },
  {
    id: "sec-roi-29",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "/etc/shadow 패스워드 파일 구조 및 해시 식별자",
    formula: "형식: `username:$id$salt$hash:lastchg:min:max:warn:inact:expire:flag`\n$1$=MD5, $5$=SHA-256, $6$=SHA-512, $y$=yescrypt",
    trap: "실기 단골 빈칸 채우기! 두 번째 필드 `$6$`로 시작하면 SHA-512 암호화임. 최소 변경 일수(min), 최대 사용 유효 일수(max), 만료 경고 일수(warn) 순서를 헷갈리지 말 것!",
    sectionId: "system",
    tags: ["/etc/shadow", "SHA-512", "$6$", "salt", "비밀번호관리"],
  },
  {
    id: "sec-roi-30",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 94%+",
    title: "리눅스 iptables 방화벽 기본 구조와 3대 기본 체인",
    formula: "테이블: filter, nat, mangle / 기본 체인: INPUT(수신), OUTPUT(발신), FORWARD(라우팅 통과)\n명령어: `iptables -A INPUT -p tcp --dport 22 -s 192.168.1.10 -j ACCEPT`",
    trap: "실기 룰 작성 단골! `-A`(추가), `-I`(맨 앞 삽입), `-D`(삭제), `-p`(프로토콜), `-s`(출발지), `-d`(목적지), `--sport`, `--dport` 옵션 문법 완전 암기 필수.",
    sectionId: "system",
    tags: ["iptables", "INPUT", "OUTPUT", "FORWARD", "방화벽룰"],
  },
  {
    id: "sec-roi-31",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "루트킷(Rootkit) 탐지 도구 및 무결성 검증 (Tripwire / AIDE)",
    formula: "무결성 검사: 정상 상태의 파일 해시값/속성을 DB로 사전 생성 ➔ 주기적 비교를 통해 변조 감지\n도구: Tripwire, AIDE, Chkrootkit, Rkhunter",
    trap: "무결성 검사 DB 자체가 공격자에 의해 변조되면 탐지 불가능하므로, 기준 DB는 반드시 Read-Only 매체나 격리된 서버에 안전하게 보관해야 함!",
    sectionId: "system",
    tags: ["Rootkit", "Tripwire", "AIDE", "무결성검증", "해시DB"],
  },
  {
    id: "sec-roi-32",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "S",
    stars: 3,
    frequencyRate: "출제율 88%+",
    title: "유닉스/리눅스 umask 계산법",
    formula: "기본 권한: 일반 파일=666(rw-rw-rw-), 디렉터리=777(rwxrwxrwx)\n생성 권한 = (기본 권한) & ~(umask)  [비트 연산 기준]\n예: umask 022 ➔ 파일=644, 디렉터리=755",
    trap: "단순 뺄셈으로 계산하면 홀수 비트(실행권한 x)가 포함된 특수 umask에서 오류 발생! 파일 기본은 666에서 시작하므로 기본 생성 파일에는 실행(x) 권한이 붙지 않음.",
    sectionId: "system",
    tags: ["umask", "권한계산", "666", "777", "chmod"],
  },

  // =================================================================
  // 4. 애플리케이션 보안 (웹 취약점, 데이터베이스 보안, 전자상거래)
  // =================================================================
  {
    id: "sec-roi-14",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 99%+",
    title: "SQL Injection 원리 및 시큐어 코딩 근본 대응",
    formula: "원리: 사용자 입력값이 쿼리 인터프리터의 문법 구조를 조작 (`' OR '1'='1 --`)\n근본 방어: PreparedStatement (파라미터화된 쿼리 바인딩) 필수 적용",
    trap: "특수문자 필터링(블랙리스트)은 우회 취약점이 많아 보조 수단일 뿐 근본 대책이 아님! 반드시 DB 엔진 차원에서 쿼리와 데이터를 분리 컴파일하는 Prepared Statement 사용!",
    sectionId: "application",
    tags: ["SQL Injection", "PreparedStatement", "시큐어코딩", "바인딩"],
  },
  {
    id: "sec-roi-15",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "XSS (Cross-Site Scripting) 3가지 유형과 방어책",
    formula: "Stored: 악성 스크립트가 DB/게시판에 영구 저장되어 다수 희생\nReflected: URL 파라미터로 즉시 반사 실행\nDOM-based: 서버 거치지 않고 브라우저 DOM 객체 조작 실행",
    trap: "방어 핵심: 입·출력값에 HTML Entity 치환(Escape: `<`➔`&lt;`, `>`➔`&gt;`) 및 세션 탈취 방지를 위해 쿠키에 `HttpOnly` 플래그 설정 필수!",
    sectionId: "application",
    tags: ["XSS", "Stored", "Reflected", "DOM", "HttpOnly", "HTML Entity"],
  },
  {
    id: "sec-roi-16",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 95%+",
    title: "CSRF (Cross-Site Request Forgery) 원리와 방어 2대장",
    formula: "원리: 로그인된 사용자의 권한을 도용하여 희생자가 의도치 않은 위조 요청(송금, 비번변경)을 서버로 전송",
    trap: "XSS는 '스크립트 실행', CSRF는 '요청 전송'이 목적! CSRF 방어책은 ① 고유 CSRF Token 검증 ② 재인증(CAPTCHA/비밀번호 재입력) ③ SameSite 쿠키(Strict/Lax) 설정.",
    sectionId: "application",
    tags: ["CSRF", "CSRF Token", "SameSite", "세션하이재킹"],
  },
  {
    id: "sec-roi-17",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "웹 서버 설정 보안 (Apache httpd.conf / Nginx)",
    formula: "디렉터리 리스팅 금지: Options -Indexes\n상위 디렉터리 접근 제한: AllowOverride None\n서버 정보 은닉: ServerTokens Prod, ServerSignature Off",
    trap: "실기 취약점 점검 항목 1순위! `Options Indexes`가 켜져 있으면 index.html이 없는 디렉터리 접근 시 전체 파일 목록이 노출되므로 `-Indexes`로 설정해야 함.",
    sectionId: "application",
    tags: ["Apache", "httpd.conf", "Indexes", "ServerTokens", "디렉터리리스팅"],
  },
  {
    id: "sec-roi-33",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 96%+",
    title: "파일 업로드 취약점 및 악성 웹쉘(WebShell) 방어",
    formula: "방어책 4대장: ① 확장자 화이트리스트 검증 ② 업로드 디렉터리 실행 권한 제거(NoExec) ③ 파일명 난수화 재명명 ④ 업로드 경로를 웹 루트(WebRoot) 외부로 격리",
    trap: "클라이언트 사이드 자바스크립트 확장자 체크나 블랙리스트(php, jsp 차단)는 Burp Suite 프록시로 우회됨! 서버 측 화이트리스트 검증과 실행 권한 제거가 핵심.",
    sectionId: "application",
    tags: ["웹쉘", "WebShell", "파일업로드", "화이트리스트", "NoExec"],
  },
  {
    id: "sec-roi-34",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 93%+",
    title: "SSRF (Server-Side Request Forgery) 공격 원리와 내부망 침투",
    formula: "원리: 웹 서버가 외부 URL 자원을 가져오는 기능을 악용하여, 공격자가 내부 비공개 시스템(`http://169.254.169.254`, `http://localhost`)을 호출하도록 유도",
    trap: "방화벽 뒤에 숨어있는 내부 관리자 페이지나 클라우드 메타데이터 API 토큰을 탈취하는 데 주로 악용됨! 방어는 사설 IP(Private IP) 대역 요청을 차단하는 화이트리스트 적용.",
    sectionId: "application",
    tags: ["SSRF", "클라우드메타데이터", "169.254.169.254", "내부망침투"],
  },
  {
    id: "sec-roi-35",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "쿠키 보안 속성 3대장 (HttpOnly / Secure / SameSite)",
    formula: "HttpOnly: 자바스크립트 `document.cookie` 접근 차단 (XSS 방어)\nSecure: 오직 HTTPS 암호화 연결에서만 쿠키 전송 (스니핑 방어)\nSameSite: 타 사이트 요청 시 쿠키 전송 제한 (Strict/Lax/None, CSRF 방어)",
    trap: "HttpOnly는 XSS에 의한 쿠키 탈취를 막지만, XSS 자체를 막지는 못함! SameSite=Lax는 일반 링크 클릭(GET) 시 전송되지만, Strict는 모든 크로스 사이트 요청에서 전송 차단.",
    sectionId: "application",
    tags: ["쿠키보안", "HttpOnly", "Secure", "SameSite", "세션보호"],
  },
  {
    id: "sec-roi-36",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "S",
    stars: 3,
    frequencyRate: "출제율 89%+",
    title: "데이터베이스 보안 (View / 암호화 컬럼 / DAC / 접근제어 솔루션)",
    formula: "컬럼 암호화 방식:\n- API 방식: 어플리케이션에서 직접 암복호화 (서버 부하 분산)\n- Plug-in 방식: DB 서버 내부 엔진에서 암복호화 (개발 수정 최소화)\n- 하이브리드: 두 방식 결합",
    trap: "DB 접근제어 솔루션 3종(Sniffing / Gateway-Proxy / Agent) 중 Gateway 방식은 세션 통제 능력이 가장 우수하나 단일 장애점(SPOF)이 될 수 있음!",
    sectionId: "application",
    tags: ["DB보안", "API방식", "Plugin방식", "접근제어", "Gateway"],
  },

  // =================================================================
  // 5. 정보보안 법규 및 인증제도 (ISMS-P, 개인정보보호법, 위험관리, 전자서명법)
  // =================================================================
  {
    id: "sec-roi-18",
    chapterId: "law",
    chapterName: "정보보안 법규",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 99%+",
    title: "ISMS-P 인증 기준 체계 (3대 영역 102개 통제항목)",
    formula: "1. 관리체계 수립 및 운영: 16개 항목\n2. 보호대책 요구사항: 64개 항목\n3. 개인정보 처리단계별 요구사항: 22개 항목 (총 102개)",
    trap: "ISMS(80개)와 ISMS-P(102개) 구분 필수! 3영역 '개인정보 처리단계별 요구사항(22개)'이 포함되어야 ISMS-P 인증임.",
    sectionId: "law",
    tags: ["ISMS-P", "관리체계", "102개", "보호대책", "개인정보"],
  },
  {
    id: "sec-roi-19",
    chapterId: "law",
    chapterName: "정보보안 법규",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 97%+",
    title: "개인정보 유출 시 법정 통지 및 신고 기한",
    formula: "정보주체 통지: 지체 없이 72시간 이내 (정당한 사유 없을 시)\n개인정보보호위원회/KISA 신고: 1천 명 이상 유출 시 즉시(72시간 이내)",
    trap: "개정 법률 개정사항 주의! 과거 정보통신망법 24시간 규정이 개인정보보호법 일원화로 '72시간 이내'로 통일됨!",
    sectionId: "law",
    tags: ["개인정보유출", "72시간", "1천명이상", "개인정보보호법", "KISA"],
  },
  {
    id: "sec-roi-20",
    chapterId: "law",
    chapterName: "정보보안 법규",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 94%+",
    title: "위험 관리 (Risk Management) 4대 위험 처리 전략",
    formula: "1. 위험 수용: 잔여 위험이 수용 가능한 한도(DOA) 내일 때 감수\n2. 위험 감소(완화): 보안 대책 적용하여 발생 확률/영향 축소\n3. 위험 전가(이전): 보험 가입, 외주(Outsourcing)로 제3자 이전\n4. 위험 회피: 위험 유발 사업/활동 자체를 중단·포기",
    trap: "보안 솔루션 도입은 '위험 감소(완화)'이며, 보험 가입은 '위험 전가(이전)'임. 위험을 완전히 제거하는 것은 불가능하며 항상 '잔여 위험(Residual Risk)'이 남음!",
    sectionId: "law",
    tags: ["위험관리", "위험수용", "위험감소", "위험전가", "위험회피", "DOA"],
  },
  {
    id: "sec-roi-37",
    chapterId: "law",
    chapterName: "정보보안 법규",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 96%+",
    title: "개인정보 암호화 대상 4대 고유식별정보 및 비밀번호",
    formula: "고유식별정보 4종: 주민등록번호, 여권번호, 운전면허번호, 외국인등록번호\n저장 암호화: 고유식별정보 + 바이오정보 + 비밀번호(일방향 단방향 해시)",
    trap: "비밀번호는 복호화되지 않도록 반드시 '단방향(일방향) 암호화(해시+Salt)' 저장해야 하며, 양방향으로 암호화하여 저장하면 법 위반으로 과태료 부과!",
    sectionId: "law",
    tags: ["고유식별정보", "주민등록번호", "단방향암호화", "비밀번호", "안전성확보조치"],
  },
  {
    id: "sec-roi-38",
    chapterId: "law",
    chapterName: "정보보안 법규",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 93%+",
    title: "접속기록 보관 및 점검 주기 기준 (개인정보 안전성 확보조치)",
    formula: "접속기록 보관: 최소 1년 이상 (5만 명 이상 또는 고유식별정보 처리 시 최소 2년 이상)\n점검 주기: 월 1회 이상 이상유무 점검",
    trap: "기본 1년이지만 '5만 명 이상 정보주체' 또는 '고유식별정보/민감정보 처리 시스템'은 반드시 '2년 이상' 보관해야 한다는 예외 기준이 핵심 출제 포인트!",
    sectionId: "law",
    tags: ["접속기록", "1년이상", "2년이상", "월1회점검", "로그보관"],
  },

  // =================================================================
  // 6. 컴퓨터 구조 및 운영체제 기초 (CPU, 메모리 스케줄링, 교착상태)
  // =================================================================
  {
    id: "sec-roi-39",
    chapterId: "os",
    chapterName: "운영체제",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 95%+",
    title: "교착상태(Deadlock) 발생 4대 필요조건 및 해결 전략",
    formula: "4대 조건: 상호 배제(Mutual Exclusion), 점유와 대기(Hold & Wait), 비선점(Non-preemption), 환형 대기(Circular Wait)\n해결 기법: 예방(Prevention), 회피(Avoidance - 은행원 알고리즘), 탐지 및 복구",
    trap: "4대 조건 중 '단 하나라도 부정'하면 교착상태가 예방(Prevention)됨! 안전 상태(Safe State)를 유지하며 자원을 할당하는 대표 회피 알고리즘은 다익스트라의 은행가(Banker's) 알고리즘.",
    sectionId: "os",
    tags: ["교착상태", "Deadlock", "상호배제", "점유와대기", "은행가알고리즘"],
  },
  {
    id: "sec-roi-40",
    chapterId: "arch",
    chapterName: "컴퓨터 구조",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "입출력 제어 방식 비교 (Polling vs Interrupt vs DMA)",
    formula: "Polling(Programmed I/O): CPU가 주기적 상태 점검 (CPU 낭비 심함)\nInterrupt: I/O 완료 시 하드웨어 신호로 통보\nDMA(Direct Memory Access): CPU 개입 없이 메모리와 I/O 간 직접 데이터 전송 (Cycle Stealing)",
    trap: "DMA가 전송하는 동안 CPU의 시스템 버스를 일시적으로 빌려 쓰는 현상을 '사이클 스틸링(Cycle Stealing)'이라 하며, CPU를 완전히 정지시키는 것이 아님!",
    sectionId: "computer-architecture",
    tags: ["DMA", "Interrupt", "Polling", "CycleStealing", "컴퓨터구조"],
  },

  // =================================================================
  // 7. 추가 킬러 개념 20제 (41번 ~ 60번: 실기 & 최신 기출 킬러)
  // =================================================================
  {
    id: "sec-roi-41",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "대칭키 vs 비대칭키 암호화 비교 및 하이브리드 암호",
    formula: "대칭키(DES/AES/ARIA): 빠름, 기밀성, n(n-1)/2개 키 관리 어려움\n비대칭키(RSA/ECC): 느림, 키 교환·전자서명, 2n개 키\n하이브리드: 세션키(대칭키)로 본문 암호화 + 세션키를 수신자 공개키로 암호화 전송",
    trap: "하이브리드 암호화에서 본문을 암호화하는 것은 대칭키(세션키)이며, 세션키를 암호화하는 데 사용되는 것은 '수신자의 공개키'임! 발신자 개인키가 아님에 주의.",
    sectionId: "general",
    tags: ["대칭키", "비대칭키", "하이브리드암호", "세션키", "키관리"],
  },
  {
    id: "sec-roi-42",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 97%+",
    title: "PKI 인증서 폐지 목록 (CRL vs OCSP)",
    formula: "CRL: CA가 주기적으로 발행하는 블랙리스트 파일 (실시간성 결여, 파일 용량 비대화)\nOCSP: 클라이언트가 실시간으로 인증서 유효성을 서버에 질의 (HTTP 기반 실시간 검증)",
    trap: "CRL은 다운로드 주기 사이의 '시간차'로 인해 이미 폐지된 인증서가 유효한 것으로 오인될 수 있음! 실시간 검증을 위해 OCSP(Online Certificate Status Protocol) 사용.",
    sectionId: "general",
    tags: ["PKI", "CRL", "OCSP", "인증서폐지", "실시간검증"],
  },
  {
    id: "sec-roi-43",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 99%+",
    title: "DDoS 4대 공격 유형과 프로토콜 매핑",
    formula: "L3/L4 볼륨: UDP/ICMP Flooding, IP Fragmentation 공격 (대역폭 고갈)\nL4 연결: TCP SYN Flooding, Land Attack (출발지=목적지 동일)\nL7 어플리케이션: HTTP GET Flooding, Slowloris, RUDY, Slow Read (서버 리소스 고갈)\n증폭 공격: DNS, NTP, SNMP 기반 DRDoS (출발지 IP 스푸핑)",
    trap: "Land Attack은 출발지 IP/Port와 목적지 IP/Port를 동일하게 조작하여 자기 자신과 3-way 핸드셰이크를 맺으며 무한 루프를 돌게 만듦!",
    sectionId: "network",
    tags: ["DDoS", "LandAttack", "SYNFlooding", "GETFlooding", "DRDoS"],
  },
  {
    id: "sec-roi-44",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "방화벽 4대 세대별 기술 (패킷필터링 vs 상태기반 vs 응용게이트웨이)",
    formula: "1세대 패킷 필터링: L3/L4 헤더만 검사 (속도 빠름, 페이로드 검사 불가)\n2세대 응용 게이트웨이: L7 프록시 기반 (강력한 보안, 프록시 병목)\n3세대 상태기반 검사(SPI): 상태 테이블(State Table)로 기존 연결 패킷 자동 허용\n차세대(NGFW): L7 심층 패킷 분석(DPI) + 사용자 식별",
    trap: "상태기반 검사는 최초 3-Way Handshake SYN 패킷만 정책을 엄격히 적용하고, 이후 세션 연결된 패킷은 상태 테이블을 참조하여 고속 통과시킴!",
    sectionId: "network",
    tags: ["방화벽", "상태기반검사", "SPI", "패킷필터링", "프록시", "NGFW"],
  },
  {
    id: "sec-roi-45",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 94%+",
    title: "VPN 3대 프로토콜 비교 (IPSec vs SSL VPN vs WireGuard)",
    formula: "IPSec: L3 네트워크 계층, 전용 클라이언트 필요, 사이트 간(Site-to-Site) VPN 최적화\nSSL/TLS VPN: L4~L7 계층, 웹 브라우저만으로 원격 접속 가능 (Clientless)\nWireGuard: 최신 고속 VPN, ChaCha20/Poly1305 사용, 코드 경량화",
    trap: "IPSec VPN은 운영체제나 클라이언트 전용 소프트웨어가 필요한 반면, SSL VPN은 443(HTTPS) 포트를 사용하므로 추가 클라이언트 설치 없이 방화벽 통과가 용이함!",
    sectionId: "network",
    tags: ["VPN", "IPSec", "SSL VPN", "443", "Site-to-Site"],
  },
  {
    id: "sec-roi-46",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "주요 네트워크 보안 공격 식별 공식 (TearDrop, Smurf, Fraggle)",
    formula: "TearDrop: IP 조각화 Offset 값을 고의로 중복·왜곡시켜 재조합 시 시스템 다운\nSmurf: ICMP Echo Request를 브로드캐스트로 전송(출발지=희생자 IP)\nFraggle: UDP 7(Echo) 또는 19(Chargen) 포트로 증폭 공격",
    trap: "Smurf는 ICMP 프로토콜을 이용하고, Fraggle은 동일한 구조의 브로드캐스트 공격을 UDP 포트로 수행한다는 차이점이 핵심!",
    sectionId: "network",
    tags: ["TearDrop", "Smurf", "Fraggle", "ICMP", "조각화공격"],
  },
  {
    id: "sec-roi-47",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "주요 리눅스 시스템 보안 설정 파일 및 보안 권한",
    formula: "/etc/passwd: 644 (root:root)\n/etc/shadow: 400 또는 000 (root:root)\n/etc/hosts: 644\n/etc/inetd.conf 또는 /etc/xinetd.conf: 600",
    trap: "실기 보안 취약점 점검 단골! `/etc/shadow` 파일의 소유자가 root가 아니거나 일반 사용자에게 읽기 권한(444)이 있으면 최악의 취약점으로 즉시 400 이하로 변경해야 함.",
    sectionId: "system",
    tags: ["/etc/passwd", "/etc/shadow", "보안권한", "취약점점검", "chmod"],
  },
  {
    id: "sec-roi-48",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 97%+",
    title: "TCP Wrapper 접근 제어 (/etc/hosts.allow & hosts.deny)",
    formula: "동작 순서:\n1. `/etc/hosts.allow` 확인 ➔ 매칭되면 즉시 '허용'\n2. `/etc/hosts.deny` 확인 ➔ 매칭되면 '차단'\n3. 둘 다 매칭 안 되면 ➔ '허용(기본 정책)'",
    trap: "실기 단골 문법! 기본 거부 원칙을 세우려면 `/etc/hosts.deny`에 `ALL: ALL`을 넣고 `/etc/hosts.allow`에 허용할 IP만 `sshd: 192.168.1.10` 형태로 등록해야 함!",
    sectionId: "system",
    tags: ["TCP Wrapper", "hosts.allow", "hosts.deny", "접근통제", "ALL:ALL"],
  },
  {
    id: "sec-roi-49",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 94%+",
    title: "crontab 보안 및 주기 표기법 문법",
    formula: "형식: `[분(0-59)] [시(0-23)] [일(1-31)] [월(1-12)] [요일(0-7, 0/7=일)] [실행명령]`\n접근 통제: `/etc/cron.allow` 우선 적용 ➔ 없으면 `/etc/cron.deny` 확인",
    trap: "cron.allow 파일이 존재하면 cron.deny 파일은 아예 무시됨! 둘 다 없으면 오직 root만 crontab을 사용할 수 있음.",
    sectionId: "system",
    tags: ["crontab", "cron.allow", "cron.deny", "스케줄링", "요일0=일"],
  },
  {
    id: "sec-roi-50",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "포맷 스트링 취약점(Format String Attack) 주요 서식 지정자",
    formula: "%x: 스택 메모리 4바이트 16진수 출력 (정보 유출)\n%s: 지정 주소의 문자열 출력\n%n: 지금까지 출력된 문자 수를 해당 변수 주소에 '기록/덮어쓰기' (코드 실행)",
    trap: "%n 지정자는 단순 출력이 아니라 메모리에 '쓰기(Write)' 작업을 수행하므로, 공격자가 RET(리턴 주소)를 원하는 악성 쉘코드 주소로 덮어쓰는 데 사용됨!",
    sectionId: "system",
    tags: ["포맷스트링", "%n", "%x", "%s", "메모리공격", "printf"],
  },
  {
    id: "sec-roi-51",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 97%+",
    title: "Blind SQL Injection 기법 2종 (Boolean-based vs Time-based)",
    formula: "Boolean-based: 참/거짓 조건에 따른 웹 페이지 응답 차이(`SUBSTR`, `ASCII` 활용 한 글자씩 유출)\nTime-based: 에러나 화면 차이가 없을 때 시간 지연 함수(`SLEEP(5)`, `WAITFOR DELAY`)로 판별",
    trap: "화면에 SQL 에러 메시지가 노출되지 않아도 Blind SQL Injection으로 전체 데이터베이스를 한 글자씩 전수 추출할 수 있음! 근본 대책은 동일하게 PreparedStatement.",
    sectionId: "application",
    tags: ["Blind SQLi", "Boolean-based", "Time-based", "SLEEP", "SUBSTR"],
  },
  {
    id: "sec-roi-52",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 93%+",
    title: "디렉터리 리스팅(Directory Listing) 및 경로 조작(Path Traversal)",
    formula: "경로 조작: `../../etc/passwd` 같이 상대 경로 상위 이동(`../`) 기법으로 웹루트 밖 파일 열람\n대응: 파일명에 `../`, `..\\`, `%2e%2e%2f` 등 경로 순회 문자열 정제(Sanitization)",
    trap: "URL 인코딩 우회(%2e%2e%2f)나 Null Byte 삽입(`%00`) 공격이 결합될 수 있으므로, 화이트리스트 검증 및 파일 시스템 절대 경로 고정이 필수!",
    sectionId: "application",
    tags: ["Path Traversal", "상위디렉터리", "../", "디렉터리리스팅", "경로조작"],
  },
  {
    id: "sec-roi-53",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "DNS 싱크홀 (DNS Sinkhole) 및 피싱 파밍 대응",
    formula: "원리: 악성코드에 감염된 좀비 PC가 C&C 서버로 연결을 시도할 때, KISA/보안 기관이 운영하는 가짜 싱크홀 IP로 DNS 응답을 우회시켜 공격 명령 차단",
    trap: "DNS 서버 자체를 공격하는 것이 아니라, 악성 DNS 쿼리를 안전한 싱크홀로 유인하여 추가 피해와 C&C 통신을 무력화하는 방어 기술임!",
    sectionId: "application",
    tags: ["DNS싱크홀", "C&C서버", "악성코드차단", "파밍", "KISA"],
  },
  {
    id: "sec-roi-54",
    chapterId: "law",
    chapterName: "정보보안 법규",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "개인정보 생명주기 4단계 및 파기 기준",
    formula: "수집·이용 ➔ 제공·위탁 ➔ 보관·관리 ➔ 파기\n파기 원칙: 목적 달성, 보유기간 경과 시 '지체 없이 5일 이내' 파기\n파기 방법: 전자적 파일은 영구삭제(복원 불가능), 출력물은 분쇄 또는 소각",
    trap: "파기 기한은 법적으로 지체 없이 '5일 이내'임! 다른 법령에 따라 보존해야 하는 경우 다른 개인정보와 '분리하여 별도 저장·관리'해야 함.",
    sectionId: "law",
    tags: ["개인정보생명주기", "5일이내파기", "영구삭제", "분리보관", "개인정보보호법"],
  },
  {
    id: "sec-roi-55",
    chapterId: "law",
    chapterName: "정보보안 법규",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 94%+",
    title: "개인정보 처리방침 필수 기재 사항 5대 핵심",
    formula: "1. 개인정보의 처리 목적\n2. 처리 및 보유 기간\n3. 제3자 제공에 관한 사항\n4. 파기 절차 및 파기 방법\n5. 정보주체와 법정대리인의 권리·의무 및 행사 방법",
    trap: "개인정보 처리방침은 웹사이트 첫 화면에 글자 크기나 색상 등을 활용하여 정보주체가 쉽게 확인할 수 있도록 항상 공개해야 함!",
    sectionId: "law",
    tags: ["개인정보처리방침", "필수기재사항", "제3자제공", "공개의무"],
  },
  {
    id: "sec-roi-56",
    chapterId: "law",
    chapterName: "정보보안 법규",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "재해복구시스템(DRS) 4대 복구 수준 (Mirror / Hot / Warm / Cold)",
    formula: "Mirror Site: 실시간 동기화, RTO 0 (즉시 복구), 구축비용 최상\nHot Site: 수 시간 이내 대기, RTO 수 시간 (실시간 미러링X, 백업 동기화)\nWarm Site: 중요 장비만 보유, 데이터 수동 복구, RTO 수일~수주\nCold Site: 기본 인프라(공간/전원)만 확보, RTO 수개월",
    trap: "RTO(목표 복구 시간)와 RPO(목표 복구 시점)가 '0'에 가장 가까운 최고 등급은 Mirror Site! Hot Site는 장비와 대기 프로세스는 있으나 실시간 무손실은 아님.",
    sectionId: "law",
    tags: ["DRS", "MirrorSite", "HotSite", "WarmSite", "RTO", "RPO"],
  },
  {
    id: "sec-roi-57",
    chapterId: "os",
    chapterName: "운영체제",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 96%+",
    title: "페이지 교체 알고리즘 (FIFO vs LRU vs LFU vs NUR)",
    formula: "FIFO: 가장 먼저 들어온 페이지 교체 (Belady의 모순 발생 가능)\nLRU: 가장 오랫동안 사용되지 않은 페이지 교체 (최근성 기준)\nLFU: 참조 횟수가 가장 적은 페이지 교체 (빈도 기준)\nNUR: 참조 비트(r)와 변형 비트(m)의 (r, m) 조합으로 근사 판단",
    trap: "Belady의 모순(페이지 프레임 수를 늘렸는데 오히려 페이지 부재가 증가하는 현상)은 FIFO 알고리즘에서 발생함! LRU나 Optimal에서는 발생하지 않음.",
    sectionId: "os",
    tags: ["페이지교체", "FIFO", "LRU", "LFU", "NUR", "Belady의모순"],
  },
  {
    id: "sec-roi-58",
    chapterId: "os",
    chapterName: "운영체제",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "프로세스 스케줄링 기법 (선점 vs 비선점)",
    formula: "비선점: FCFS, SJF(최단작업우선), HRN(우선순위=(대기+서비스)/서비스), 기한부\n선점: Round Robin(시간할당량), SRT, 다단계 큐(MQ), 다단계 피드백 큐(MFQ)",
    trap: "HRN(Highest Response-ratio Next)은 SJF의 긴 작업 기아(Starvation) 현상을 보완하기 위해 대기 시간을 고려하여 우선순위를 산출함!",
    sectionId: "os",
    tags: ["스케줄링", "선점", "비선점", "RoundRobin", "HRN", "SJF"],
  },
  {
    id: "sec-roi-59",
    chapterId: "arch",
    chapterName: "컴퓨터 구조",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 90%+",
    title: "RAID 단계별 특징 (RAID 0 / 1 / 5 / 6)",
    formula: "RAID 0(스트라이핑): 속도 최상, 내결함성 제로(디스크 1개 고장 시 전체 손실)\nRAID 1(미러링): 100% 복제, 용량 50% 낭비, 안정성 우수\nRAID 5: 패리티 1개 분산 저장, 최소 3개 디스크 필요, 디스크 1개 장애 허용\nRAID 6: 이중 패리티 분산 저장, 최소 4개 디스크 필요, 디스크 2개 동시 장애 허용",
    trap: "실기 빈출! RAID 5의 유효 용량은 (N-1)개 디스크 용량이며, 디스크가 2개 고장나면 복구 불가능하므로 이중 장애를 방어하려면 RAID 6(N-2 용량) 필요.",
    sectionId: "computer-architecture",
    tags: ["RAID", "RAID0", "RAID1", "RAID5", "RAID6", "패리티"],
  },
  {
    id: "sec-roi-60",
    chapterId: "arch",
    chapterName: "컴퓨터 구조",
    grade: "S",
    stars: 3,
    frequencyRate: "출제율 88%+",
    title: "메모리 계층 구조 및 캐시 사상(Mapping) 방식 3종",
    formula: "직접 사상(Direct): 메모리 블록이 캐시의 특정 한 라인에만 매핑 (충돌 미스 높음)\n완전 연관 사상(Fully Associative): 캐시의 빈 라인 어디든 매핑 (검색 회로 복잡/비쌈)\n세트 연관 사상(Set Associative): 특정 세트 내에서 빈 라인에 매핑 (절충형)",
    trap: "직접 사상은 구현이 가장 간단하고 빠르지만 동일 슬롯을 두고 충돌 미스(Conflict Miss)가 빈번히 발생함! 현대 고속 CPU는 대부분 N-way 세트 연관 사상 채택.",
    sectionId: "computer-architecture",
    tags: ["캐시메모리", "직접사상", "세트연관", "완전연관", "메모리계층"],
  },

  // =================================================================
  // 8. 추가 킬러 개념 20제 (61번 ~ 80번: 극상위 빈출 & 신유형 킬러)
  // =================================================================
  {
    id: "sec-roi-61",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "생체인식 평가 지표 (FRR vs FAR vs CER/EER)",
    formula: "FRR (제1종 오류, 오거부율): 본인인데 거부할 확률 (사용자 불편)\nFAR (제2종 오류, 오인식률): 타인인데 수락할 확률 (보안 위험)\nCER / EER: FRR과 FAR이 같아지는 교차점 ➔ 낮을수록 고성능 시스템",
    trap: "보안성을 극도로 높여 민감도를 올리면 FAR은 낮아지지만 FRR이 높아짐! 두 에러율의 균형점이 CER(Crossover Error Rate)이며 낮을수록 우수함.",
    sectionId: "general",
    tags: ["생체인식", "FRR", "FAR", "CER", "EER", "교차에러율"],
  },
  {
    id: "sec-roi-62",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 94%+",
    title: "OTP(One-Time Password) 생성 방식 비교 (S/KEY vs HOTP vs TOTP)",
    formula: "S/KEY: 해시 체인(Hash Chain) 역순 계산\nHOTP: 이벤트 카운터(HMAC-Counter) 기반 (RFC 4226)\nTOTP: 시간 간격(예: 30초, Time-step) 기반 동기화 (RFC 6238)",
    trap: "TOTP는 클라이언트와 인증 서버 간의 '시간 동기화'가 핵심이며, HOTP는 버튼 누른 횟수(카운터)가 동기화되어야 함!",
    sectionId: "general",
    tags: ["OTP", "TOTP", "HOTP", "S/KEY", "2차인증"],
  },
  {
    id: "sec-roi-63",
    chapterId: "general",
    chapterName: "정보보호 일반",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "보안 평가 기준 TCSEC(오렌지북) vs CC(공통평가기준 ISO 15408)",
    formula: "TCSEC: D(최저) ➔ C(C1, C2) ➔ B(B1, B2, B3) ➔ A(A1 최고)\nCC 3부 구성: 1부 소개, 2부 보안기능요구사항(SFR), 3부 보증요구사항(SAR)\n보증등급: EAL1 ~ EAL7 (숫자 클수록 고보증)",
    trap: "CC 인증에서 제품의 보안 목표를 정의한 문서는 PP(보호프로파일, 공통)와 ST(보안목표명세서, 특정제품)임! EAL 등급은 기능이 아닌 '보증 수준(SAR)'을 평가함.",
    sectionId: "general",
    tags: ["CC인증", "ISO15408", "EAL", "PP", "ST", "TCSEC"],
  },
  {
    id: "sec-roi-64",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 99%+",
    title: "TLS 1.2 vs TLS 1.3 핵심 변경점 및 Handshake",
    formula: "TLS 1.2: 2-RTT 핸드셰이크, 취약한 RSA 키 교환 및 CBC 모드 지원\nTLS 1.3: 1-RTT (0-RTT Early Data 지원), 정적 RSA/DH 제거 ➔ 오직 PFS(완전 순방향 비밀성)를 지원하는 ECDHE 전용, AEAD 암호화만 허용",
    trap: "TLS 1.3에서는 과거 세션키 탈취 시 이전 암호문까지 복호화되던 취약한 정적 RSA 키 교환을 전면 폐지하고 오직 일회성 디피헬만(ECDHE)만 사용!",
    sectionId: "network",
    tags: ["TLS1.3", "TLS1.2", "1-RTT", "ECDHE", "PFS", "AEAD"],
  },
  {
    id: "sec-roi-65",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 97%+",
    title: "TCP 세션 하이재킹 (Session Hijacking) 원리와 시퀀스 넘버",
    formula: "공격 단계: 스니핑으로 시퀀스 번호 추적 ➔ 비동기화 상태 유발(RST 패킷 전송) ➔ 공격자가 유효한 다음 Seq/Ack 번호를 삽입(ACK Storm 발생)하여 세션 가로챔",
    trap: "시퀀스 번호(Sequence Number)를 예측하거나 스니핑하여 기존 정상 클라이언트를 RST로 튕겨내고 세션을 탈취하는 공격! 대응책은 패킷 암호화(IPSec, SSH) 필수.",
    sectionId: "network",
    tags: ["세션하이재킹", "SequenceNumber", "ACKStorm", "RST", "스니핑"],
  },
  {
    id: "sec-roi-66",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 95%+",
    title: "스위칭 환경 스니핑 기법 3종 (ARP / Switch Jamming / ICMP Redirect)",
    formula: "ARP Spoofing: 위조 ARP 응답으로 MAC 테이블 왜곡\nSwitch Jamming(MACOF): 가짜 MAC 주소를 대량 발송하여 CAM 테이블 버퍼를 고갈시켜 더미 허브(Fail-Open)로 강제 전환\nICMP Redirect: 악의적 라우팅 경로 변경 메시지 전송",
    trap: "스위치는 기본적으로 목적지 MAC 포트로만 패킷을 보내 스니핑이 안 되지만, CAM 테이블이 넘치면 모든 포트로 플러딩(Fail-Open)하는 취약점을 노리는 게 Switch Jamming!",
    sectionId: "network",
    tags: ["스니핑", "SwitchJamming", "CAM테이블", "MACOF", "ICMPRedirect"],
  },
  {
    id: "sec-roi-67",
    chapterId: "network",
    chapterName: "네트워크 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 93%+",
    title: "이메일 3대 송신자 인증 규격 (SPF / DKIM / DMARC)",
    formula: "SPF: DNS TXT 레코드에 합법적 메일 발송 서버 IP 대역 등록 (`v=spf1 ip4:... ~all`)\nDKIM: 메일 헤더에 발신자 디지털 서명 삽입, 수신자는 DNS 공개키로 서명 검증\nDMARC: SPF와 DKIM 결과를 통합 판정하여 인증 실패 메일의 처리 정책(`p=reject/quarantine`) 결정",
    trap: "SPF만으로는 헤더의 From(표시 발신자) 변조를 막지 못함! 이를 방어하기 위해 도메인 디지털 서명인 DKIM과 정책 강제 규격인 DMARC가 함께 쓰임.",
    sectionId: "network",
    tags: ["이메일보안", "SPF", "DKIM", "DMARC", "스팸차단", "DNS TXT"],
  },
  {
    id: "sec-roi-68",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "레이스 컨디션(Race Condition) 공격 원리와 심볼릭 링크",
    formula: "원리: 파일 소유권 검사 시점(Check)과 실제 파일 사용 시점(Use) 사이의 시간차(TOCTOU)를 노려, 검사 통과 직후 타깃 중요 파일(`/etc/passwd`)로 심볼릭 링크를 바꿔치기",
    trap: "접근 권한 확인(access())과 파일 오픈(open()) 함수 사이의 시간차를 노리는 대표 취약점! 방어는 안전한 임시파일 생성 함수(`mkstemp()`) 및 `O_CREAT | O_EXCL` 플래그 사용.",
    sectionId: "system",
    tags: ["RaceCondition", "TOCTOU", "심볼릭링크", "mkstemp", "O_EXCL"],
  },
  {
    id: "sec-roi-69",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 97%+",
    title: "SELinux 3가지 동작 모드와 컨텍스트(Context)",
    formula: "동작 모드:\n- Enforcing: 강제 차단 및 로그 기록 (보안 활성화)\n- Permissive: 차단하지 않고 경고 로그만 기록 (디버깅용)\n- Disabled: 기능 완전 비활성화\n명령어: `getenforce`, `setenforce 1/0`, `ls -Z` (컨텍스트 확인)",
    trap: "실기 명령어 단골! SELinux는 관리자 root라 할지라도 라벨(Context: user:role:type:level) 정책에 맞지 않으면 접근을 차단하는 대표적인 MAC(강제적 접근통제) 시스템임.",
    sectionId: "system",
    tags: ["SELinux", "Enforcing", "Permissive", "getenforce", "ls -Z", "MAC"],
  },
  {
    id: "sec-roi-70",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 94%+",
    title: "주요 네트워크/시스템 점검 명령어 문법 (netstat / ss / lsof)",
    formula: "`netstat -antp` 또는 `ss -antp`: 열린 포트(-t TCP, -u UDP, -n 숫자, -p 프로세스 PID) 확인\n`lsof -i :포트번호`: 특정 포트를 사용하는 프로세스 추적\n`fuser -k 80/tcp`: 80번 포트를 잡고 있는 프로세스 강제 종료",
    trap: "실기 포트 점검 필수 옵션! `-a`(모든 소켓), `-n`(호스트/포트명을 숫자로 표시해 빠른 조회), `-p`(해당 포트를 사용하는 프로그램 이름과 PID 표시).",
    sectionId: "system",
    tags: ["netstat", "ss", "lsof", "포트점검", "PID", "fuser"],
  },
  {
    id: "sec-roi-71",
    chapterId: "system",
    chapterName: "시스템 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "Windows 감사 정책 및 주요 이벤트 ID (Event ID)",
    formula: "Event ID 4624: 성공한 계정 로그온\nEvent ID 4625: 실패한 로그온 시도 (무차별 대입 공격 탐지)\nEvent ID 4720: 새 사용자 계정 생성\nEvent ID 4738: 사용자 계정 수정\nEvent ID 1102: 감사 로그 강제 삭제",
    trap: "실기 침해사고 분석 단골! 침입자가 로그인에 연속 실패하며 패스워드를 대입할 때 대량 발생하는 로그는 'Event ID 4625'임.",
    sectionId: "system",
    tags: ["이벤트로그", "EventID4624", "EventID4625", "EventID1102", "윈도우보안"],
  },
  {
    id: "sec-roi-72",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "CORS (교차 출처 리소스 공유) 헤더 4대장",
    formula: "Access-Control-Allow-Origin: 허용할 Origin 도메인 명시 (절대 `*` 남용 금지)\nAccess-Control-Allow-Credentials: 쿠키/인증정보 전송 허용 여부 (`true` 시 Origin `*` 불가)\nAccess-Control-Allow-Methods: 허용 HTTP 메서드 (GET, POST 등)\nPreflight: 실제 요청 전 `OPTIONS` 메서드로 사전 허용 여부 확인",
    trap: "`Access-Control-Allow-Credentials: true` 상태에서는 보안상 `Access-Control-Allow-Origin`을 와일드카드(`*`)로 설정할 수 없으며 명시적 도메인을 적어야 함!",
    sectionId: "application",
    tags: ["CORS", "Preflight", "OPTIONS", "Allow-Origin", "Credentials"],
  },
  {
    id: "sec-roi-73",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 94%+",
    title: "클라이언트 사이드 웹 스토리지 (Cookie vs LocalStorage vs SessionStorage)",
    formula: "Cookie: 4KB 제한, 매 HTTP 요청마다 서버로 자동 전송, `HttpOnly`/`Secure` 보안 속성 지원\nLocalStorage: 5~10MB, 브라우저 닫아도 영구 유지, JS로 접근 가능 (`HttpOnly` 미지원 ➔ XSS에 완전 취약)\nSessionStorage: 탭 닫으면 즉시 삭제, JS 접근 가능",
    trap: "LocalStorage에 민감한 JWT나 세션 토큰을 저장하면 XSS 공격 한 번에 `localStorage.getItem()`으로 토큰이 완전 탈취됨! 인증 토큰은 HttpOnly 쿠키에 저장 권장.",
    sectionId: "application",
    tags: ["웹스토리지", "LocalStorage", "Cookie", "JWT탈취", "XSS"],
  },
  {
    id: "sec-roi-74",
    chapterId: "app",
    chapterName: "애플리케이션 보안",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "SQL Injection 대응: MyBatis/iBatis 취약 문법 (`${}` vs `#{}`)",
    formula: "#{parameter}: PreparedStatement 파라미터 바인딩 (`?` 매핑, 안전함)\n${parameter}: 단순 문자열 치환 치환(String Concatenation, SQLi 취약점 발생)",
    trap: "시큐어 코딩 실기 단골! 테이블명이나 정렬 조건(ORDER BY)은 `#{}`를 쓸 수 없어 부득이하게 `${}`를 쓸 경우 반드시 허용된 컬럼명만 화이트리스트 검증해야 함.",
    sectionId: "application",
    tags: ["MyBatis", "#{}", "${}", "SQLi", "시큐어코딩", "PreparedStatement"],
  },
  {
    id: "sec-roi-75",
    chapterId: "law",
    chapterName: "정보보안 법규",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 98%+",
    title: "개인정보보호법상 법정 손해배상 및 징벌적 손해배상 한도",
    formula: "법정 손해배상: 고의/과실로 유출 시 최대 300만 원 이하 범위 내 배상 청구\n징벌적 손해배상: 고의 또는 중대한 과실로 유출 시 손해액의 최대 5배까지 배상\n과징금: 전체 매출액의 3% 이하 (위반행위 관련 매출액 기준에서 전체 매출액으로 확대 개정)",
    trap: "개정 법률 최우선 출제 포인트! 유럽 GDPR 수준으로 과징금 기준이 '관련 매출액'에서 '전체 매출액의 3% 이하'로 대폭 상향 개정되었음!",
    sectionId: "law",
    tags: ["징벌적손해배상", "5배", "법정손해배상", "300만원", "매출액3%", "개정법률"],
  },
  {
    id: "sec-roi-76",
    chapterId: "law",
    chapterName: "정보보안 법규",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 95%+",
    title: "개인정보 보호책임자(CPO) 및 정보보호 최고책임자(CISO) 지정 기준",
    formula: "CPO: 모든 개인정보처리자는 필수 지정 (임원급 지정 원칙)\nCISO 지정 의무: 자산총액 5조 원 이상 상장사(전임 CISO 의무, 겸직 불가), 자산 1,000억 원 이상 상장사 등 법적 의무 지정 대상",
    trap: "일정 규모 이상의 대기업 및 금융사는 CISO가 개인정보보호책임자(CPO)나 타 정보통신 업무(CIO 등)를 겸직할 수 없도록 '겸직 금지' 규정이 적용됨!",
    sectionId: "law",
    tags: ["CISO", "CPO", "겸직금지", "정보보호최고책임자", "법정지정"],
  },
  {
    id: "sec-roi-77",
    chapterId: "law",
    chapterName: "정보보안 법규",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "ISMS-P 인증 심사 3단계 절차 및 유효기간",
    formula: "절차: 최초심사 ➔ 사후심사(매년 1회 이상) ➔ 갱신심사(3년 주기)\n유효기간: 인증 취득일로부터 3년 (매년 사후심사 통과 필수)",
    trap: "인증 유효기간은 '3년'이지만, 매년 유지를 위한 '사후심사'를 받아야 유효성이 유지됨! 유효기간 만료 전 갱신심사를 신청해야 함.",
    sectionId: "law",
    tags: ["ISMS-P", "최초심사", "사후심사", "갱신심사", "유효기간3년"],
  },
  {
    id: "sec-roi-78",
    chapterId: "os",
    chapterName: "운영체제",
    grade: "SSS",
    stars: 5,
    frequencyRate: "필기/실기 96%+",
    title: "스레싱(Thrashing) 원인 및 방지 기법 (워킹셋 vs PFF)",
    formula: "스레싱: 페이지 부재율이 너무 높아 CPU가 실제 작업보다 페이지 교체 입출력에 대부분의 시간을 낭비하는 현상\n방지 기법:\n1. 워킹셋(Working Set): 프로세스가 자주 참조하는 페이지 집합을 메모리에 상주\n2. PFF(Page Fault Frequency): 페이지 부재율 상한/하한선을 정해 동적 프레임 할당",
    trap: "다중 프로그래밍의 정도(Degree of Multiprogramming)가 너무 과도하게 높아지면 각 프로세스에 할당된 프레임이 부족해져 스레싱이 급격히 발생함!",
    sectionId: "os",
    tags: ["Thrashing", "스레싱", "워킹셋", "PFF", "페이지부재"],
  },
  {
    id: "sec-roi-79",
    chapterId: "os",
    chapterName: "운영체제",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 92%+",
    title: "세마포어(Semaphore) vs 뮤텍스(Mutex) 동기화",
    formula: "뮤텍스: 단 하나의 스레드만 공유 자원에 접근 가능 (Binary Lock, 소유권 존재, 락 해제는 잠근 스레드만 가능)\n세마포어: 공유 자원의 개수(S)만큼 N개 스레드 접근 가능 (P/Wait 연산=감소, V/Signal 연산=증가, 소유권 없음)",
    trap: "뮤텍스는 자원을 획득한 주체만 락을 해제할 수 있지만, 세마포어는 신호를 보낼 수 있는 다른 프로세스/스레드도 V() 연산으로 깨울 수 있음!",
    sectionId: "os",
    tags: ["뮤텍스", "세마포어", "Mutex", "Semaphore", "임계구역", "동기화"],
  },
  {
    id: "sec-roi-80",
    chapterId: "arch",
    chapterName: "컴퓨터 구조",
    grade: "SS",
    stars: 4,
    frequencyRate: "출제율 91%+",
    title: "인터럽트(Interrupt) 우선순위 및 판별 방식 (Polling vs Daisy Chain)",
    formula: "소프트웨어 방식(Polling): CPU가 가장 높은 우선순위 장치부터 차례대로 질의 (회로 간단, 반응 속도 느림)\n하드웨어 방식(Daisy Chain): 직렬 연결된 우선순위 체인으로 인터럽트 벡터 확인 (하드웨어 복잡, 반응 속도 극히 빠름)",
    trap: "전원 이상(Power Failure)이나 기계 착오는 최고 우선순위의 하드웨어 외부 인터럽트이며, SVC(슈퍼바이저 호출)는 소프트웨어 내부 인터럽트임!",
    sectionId: "computer-architecture",
    tags: ["인터럽트", "DaisyChain", "Polling", "우선순위", "SVC"],
  },
];

const LOCAL_STORAGE_KEY_NOTES = "security_mindmap_scratchpad";
const LOCAL_STORAGE_KEY_FAVORITES = "security_mindmap_favorites";

export function SecurityFloatingMemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChapter, setSelectedChapter] = useState<string>("all");
  const [selectedGrade, setSelectedGrade] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"cards" | "scratchpad">("cards");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // 로컬 스토리지 즐겨찾기 상태
  const [favorites, setFavorites] = useState<string[]>([]);

  // 사용자 메모장 상태 (Local Storage 연동)
  const [userNotes, setUserNotes] = useState<string>("");
  const [isCopiedNotes, setIsCopiedNotes] = useState(false);

  // 로컬 스토리지 불러오기
  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem(LOCAL_STORAGE_KEY_NOTES);
      if (savedNotes) setUserNotes(savedNotes);

      const savedFavs = localStorage.getItem(LOCAL_STORAGE_KEY_FAVORITES);
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
    } catch {
      // 로컬 스토리지 접근 차단 등 예외 처리
    }
  }, []);

  // 즐겨찾기 토글
  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY_FAVORITES, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // 메모 작성 시 로컬 스토리지 자동 저장
  const handleNotesChange = (text: string) => {
    setUserNotes(text);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_NOTES, text);
    } catch {
      // ignore
    }
  };

  // 메모 전체 초기화
  const handleResetNotes = () => {
    if (confirm("작성한 직전 암기장을 초기화하시겠습니까?")) {
      setUserNotes("");
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY_NOTES);
      } catch {
        // ignore
      }
    }
  };

  // 메모 전체 클립보드 복사
  const handleCopyAllNotes = () => {
    if (!userNotes.trim()) return;
    navigator.clipboard.writeText(userNotes);
    setIsCopiedNotes(true);
    setTimeout(() => setIsCopiedNotes(false), 2000);
  };

  // 필터링된 아이템 목록
  const filteredItems = useMemo(() => {
    return SECURITY_ROI_ITEMS.filter((item) => {
      // 즐겨찾기 필터
      if (showFavoritesOnly && !favorites.includes(item.id)) {
        return false;
      }

      // 챕터 필터
      if (selectedChapter !== "all" && item.chapterId !== selectedChapter) {
        return false;
      }

      // 등급 필터
      if (selectedGrade !== "all" && item.grade !== selectedGrade) {
        return false;
      }

      // 검색어 필터
      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesFormula = item.formula.toLowerCase().includes(query);
        const matchesTrap = item.trap.toLowerCase().includes(query);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(query));
        return matchesTitle || matchesFormula || matchesTrap || matchesTags;
      }

      return true;
    });
  }, [selectedChapter, selectedGrade, searchTerm, showFavoritesOnly, favorites]);

  // 공식/키워드 클립보드 복사
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  // 마인드맵 해당 섹션으로 부드러운 스크롤 이동
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* ==================================================== */}
      {/* 플로팅 런처 버튼 (우측 하단 상주) */}
      {/* ==================================================== */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 print:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <Button
            onClick={() => {
              setIsOpen(true);
              setIsMinimized(false);
            }}
            className="group relative flex h-14 items-center gap-3 rounded-full border-2 border-emerald-500/30 bg-card px-5 py-3 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-500 hover:shadow-emerald-500/25 dark:bg-card/95"
            variant="outline"
          >
            <div className="relative flex size-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <ShieldAlert className="size-4 animate-pulse text-emerald-600 dark:text-emerald-400" />
              <span className="absolute -top-1 -right-1 flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                기출 1순위 ROI
              </span>
              <span className="text-sm font-bold text-foreground">
                보안기사 80대 킬러 개념
              </span>
            </div>
            <span className="ml-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
              80제
            </span>
          </Button>
        </div>
      )}

      {/* ==================================================== */}
      {/* 플로팅 메모장 메인 팝업 패널 */}
      {/* ==================================================== */}
      {isOpen && (
        <aside
          className={cn(
            "fixed right-6 z-50 flex flex-col rounded-2xl border border-border/80 bg-card/95 backdrop-blur-xl shadow-2xl transition-all duration-300 print:hidden",
            isMinimized
              ? "bottom-6 h-14 w-80 overflow-hidden"
              : "bottom-6 h-[640px] max-h-[85vh] w-[95vw] sm:w-[480px] md:w-[520px]"
          )}
          aria-label="정보보안기사 기출 ROI 메모장"
        >
          {/* 헤더 */}
          <div className="flex h-14 items-center justify-between border-b border-border/60 bg-muted/40 px-4">
            <div className="flex items-center gap-2.5">
              <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <ShieldAlert className="size-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-none text-foreground flex items-center gap-1.5">
                  보안기사 기출 ROI 메모장
                  <span className="rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    TOP 80
                  </span>
                </h3>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  필기·실기 공통 빈출 초고수익 80대 킬러 개념
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="size-8 text-muted-foreground hover:text-foreground"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "확대하기" : "최소화"}
              >
                {isMinimized ? <Maximize2 className="size-4" /> : <Minimize2 className="size-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="size-8 text-muted-foreground hover:text-destructive"
                onClick={() => setIsOpen(false)}
                title="닫기"
              >
                <X className="size-4" />
              </Button>
            </div>
          </div>

          {/* 본문 콘텐츠 (최소화 아닐 때) */}
          {!isMinimized && (
            <div className="flex flex-1 flex-col overflow-hidden">
              {/* 상단 탭 (ROI 카드 vs 나만의 직전 암기장) */}
              <div className="flex border-b border-border/60 bg-muted/20 px-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("cards")}
                  className={cn(
                    "flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-semibold transition-colors",
                    activeTab === "cards"
                      ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Flame className="size-3.5 text-emerald-500" />
                  기출 80대 핵심 카드
                  <span className="ml-1 rounded-full bg-emerald-500/15 px-1.5 py-0.2 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    {filteredItems.length}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("scratchpad")}
                  className={cn(
                    "flex items-center gap-1.5 border-b-2 px-3 py-2 text-xs font-semibold transition-colors",
                    activeTab === "scratchpad"
                      ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  <FileText className="size-3.5" />
                  나만의 직전 암기장 (Scratchpad)
                  {userNotes.trim().length > 0 && (
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                  )}
                </button>
              </div>

              {/* ==================================================== */}
              {/* [TAB 1] ROI 킬러 카드 뷰 */}
              {/* ==================================================== */}
              {activeTab === "cards" && (
                <div className="flex flex-1 flex-col overflow-hidden p-3 gap-2.5">
                  {/* 검색창 & 즐겨찾기 토글 */}
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="개념, 공격기법, 공식, 명령어, 포트 검색..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-lg border border-input bg-card py-1.5 pl-8 pr-7 text-xs text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                      {searchTerm && (
                        <button
                          type="button"
                          onClick={() => setSearchTerm("")}
                          className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                        >
                          <X className="size-3.5" />
                        </button>
                      )}
                    </div>
                    <Button
                      variant={showFavoritesOnly ? "default" : "outline"}
                      size="sm"
                      onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                      className={cn(
                        "h-8 text-[11px] gap-1 px-2.5",
                        showFavoritesOnly && "bg-emerald-600 text-white hover:bg-emerald-700"
                      )}
                      title="즐겨찾기한 카드만 모아보기"
                    >
                      <Star className={cn("size-3", showFavoritesOnly ? "fill-white" : "text-emerald-500")} />
                      즐겨찾기 ({favorites.length})
                    </Button>
                  </div>

                  {/* 챕터 & 등급 필터 칩 */}
                  <div className="flex flex-col gap-1.5">
                    {/* 챕터 필터 */}
                    <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px] scrollbar-none">
                      <span className="shrink-0 font-medium text-muted-foreground mr-1">분야:</span>
                      {[
                        { id: "all", label: "전체" },
                        { id: "general", label: "일반/암호" },
                        { id: "network", label: "네트워크" },
                        { id: "system", label: "시스템" },
                        { id: "app", label: "어플리케이션" },
                        { id: "law", label: "법규/ISMS" },
                        { id: "os", label: "OS" },
                        { id: "arch", label: "구조" },
                      ].map((sub) => (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => setSelectedChapter(sub.id)}
                          className={cn(
                            "shrink-0 rounded-full px-2.5 py-0.5 font-medium transition-colors",
                            selectedChapter === sub.id
                              ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-black font-bold"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          )}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>

                    {/* 등급 필터 */}
                    <div className="flex items-center gap-1 text-[11px]">
                      <span className="shrink-0 font-medium text-muted-foreground mr-1">등급:</span>
                      {[
                        { id: "all", label: "전체" },
                        { id: "SSS", label: "🔥 SSS급 (필수)" },
                        { id: "SS", label: "⭐ SS급 (빈출)" },
                        { id: "S", label: "⚡ S급" },
                      ].map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => setSelectedGrade(g.id)}
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-medium transition-colors",
                            selectedGrade === g.id
                              ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/30"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 카드 리스트 스크롤 영역 */}
                  <div className="flex-1 overflow-y-auto pr-1 space-y-2.5 scrollbar-thin">
                    {filteredItems.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                        <AlertTriangle className="size-8 text-muted-foreground/60 mb-2" />
                        <p className="text-xs">조건에 맞는 기출 카드가 없습니다.</p>
                        <p className="text-[11px] mt-1">검색어를 지우거나 필터를 변경해 보세요.</p>
                      </div>
                    ) : (
                      filteredItems.map((item) => {
                        const isFav = favorites.includes(item.id);
                        return (
                          <div
                            key={item.id}
                            className="group relative rounded-xl border border-border/80 bg-card p-3 shadow-xs hover:border-emerald-500/60 hover:shadow-md transition-all duration-200"
                          >
                            {/* 상단 메타 바 */}
                            <div className="flex items-center justify-between gap-1 mb-1.5">
                              <div className="flex items-center gap-1.5">
                                <span
                                  className={cn(
                                    "rounded-md px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider",
                                    item.grade === "SSS"
                                      ? "bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30"
                                      : item.grade === "SS"
                                      ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                                      : "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                                  )}
                                >
                                  {item.grade}
                                </span>
                                <span className="text-[10px] font-semibold text-muted-foreground">
                                  {item.chapterName}
                                </span>
                                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                                  • {item.frequencyRate}
                                </span>
                              </div>

                              <div className="flex items-center gap-1">
                                {/* 즐겨찾기 별표 버튼 */}
                                <button
                                  type="button"
                                  onClick={(e) => toggleFavorite(item.id, e)}
                                  className="p-1 rounded-md text-muted-foreground hover:text-amber-500 hover:bg-muted/60 transition-colors"
                                  title={isFav ? "즐겨찾기 해제" : "즐겨찾기 추가"}
                                >
                                  <Star
                                    className={cn(
                                      "size-3.5",
                                      isFav ? "fill-amber-400 text-amber-500" : "text-muted-foreground"
                                    )}
                                  />
                                </button>
                                {/* 복사 버튼 */}
                                <button
                                  type="button"
                                  onClick={() => handleCopy(item.id, `${item.title}\n핵심: ${item.formula}\n주의: ${item.trap}`)}
                                  className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
                                  title="핵심 내용 복사"
                                >
                                  {copiedId === item.id ? (
                                    <Check className="size-3 text-emerald-500" />
                                  ) : (
                                    <Copy className="size-3" />
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* 제목 */}
                            <h4 className="text-xs font-bold text-foreground mb-1">
                              {item.title}
                            </h4>

                            {/* 핵심 공식 / 정답 키워드 */}
                            <div className="rounded-md bg-emerald-500/10 dark:bg-emerald-500/15 p-2 text-[11px] font-medium text-emerald-950 dark:text-emerald-100 mb-1.5 whitespace-pre-line leading-relaxed">
                              <div className="flex items-start gap-1">
                                <Zap className="size-3 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                                <span className="font-semibold">{item.formula}</span>
                              </div>
                            </div>

                            {/* 시험 함정 주의 포인트 */}
                            <div className="rounded-md bg-muted/60 p-2 text-[11px] text-muted-foreground leading-relaxed flex items-start gap-1.5 mb-2">
                              <AlertTriangle className="size-3 shrink-0 text-amber-500 mt-0.5" />
                              <span><strong className="text-foreground font-semibold">함정 방어:</strong> {item.trap}</span>
                            </div>

                            {/* 하단 인터랙션 액션 */}
                            <div className="flex items-center justify-between pt-1 border-t border-border/50 text-[10px]">
                              <div className="flex flex-wrap gap-1 text-muted-foreground">
                                {item.tags.map((tag) => (
                                  <span key={tag} className="hover:text-emerald-600">
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                              <button
                                type="button"
                                onClick={() => handleScrollToSection(item.sectionId)}
                                className="inline-flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                              >
                                마인드맵 이동
                                <ExternalLink className="size-2.5" />
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              {/* ==================================================== */}
              {/* [TAB 2] 나만의 직전 암기장 (Scratchpad) */}
              {/* ==================================================== */}
              {activeTab === "scratchpad" && (
                <div className="flex flex-1 flex-col p-3 overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                      <BookmarkCheck className="size-3.5 text-emerald-500" />
                      작성한 내용은 브라우저에 자동 저장됩니다.
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-6 text-[10px] gap-1 px-2"
                        onClick={handleCopyAllNotes}
                      >
                        {isCopiedNotes ? (
                          <>
                            <Check className="size-3 text-emerald-500" />
                            복사됨
                          </>
                        ) : (
                          <>
                            <Copy className="size-3" />
                            전체 복사
                          </>
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 text-[10px] gap-1 px-2 text-muted-foreground hover:text-destructive"
                        onClick={handleResetNotes}
                      >
                        <RotateCcw className="size-3" />
                        초기화
                      </Button>
                    </div>
                  </div>

                  <textarea
                    value={userNotes}
                    onChange={(e) => handleNotesChange(e.target.value)}
                    placeholder="시험 직전 헷갈리는 명령어, 리눅스 로그 경로, 암호학 계산 공식 등을 자유롭게 적어보세요..."
                    className="flex-1 w-full rounded-xl border border-input bg-card p-3 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none leading-relaxed"
                  />
                  <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>글자 수: {userNotes.length}자</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">✓ 실시간 자동 저장됨</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </aside>
      )}
    </>
  );
}

import fs from "fs";
import path from "path";

const questions = [
  {
    id: "netadmin-20261101-001",
    category: "netadmin-general",
    type: "multiple_choice",
    title: "IPv6 주소 표기 및 축약 규칙",
    question: "다음 IPv6 주소의 축약 표기법 중 가장 올바른 것은?\n\n`2001:0db8:0000:0000:0000:0000:1428:57ab`",
    options: [
      "2001:db8::1428:57ab",
      "2001:db8:::1428:57ab",
      "2001:0db8::0::1428:57ab",
      "2001:db8:0:0:0:0:1428:57ab::"
    ],
    answerIndex: 0,
    explanation: {
      definition: "IPv6 주소 축약 규칙:\n1. 각 16비트 블록 앞자리의 '0'은 생략할 수 있습니다 (0db8 -> db8).\n2. 0으로만 이루어진 연속된 블록은 '::'(쌍콜론)으로 단 한 번만 축약할 수 있습니다. 주소 내에서 '::'을 2회 이상 사용할 수 없습니다.",
      optionsBreakdown: [
        "① 2001:db8::1428:57ab : 0db8에서 앞자리 0을 생략(db8)하고, 4개의 연속된 0000 블록을 '::'로 올바르게 축약했습니다. (정답)",
        "② 2001:db8:::1428:57ab : 쌍콜론은 2개의 콜론(::)만 허용되며 3개의 콜론(:::)은 문법 오류입니다.",
        "③ 2001:0db8::0::1428:57ab : '::' 축약 표기는 주소 전체에서 오직 1회만 사용 가능합니다 (복원 시 모호성 방지).",
        "④ 2001:db8:0:0:0:0:1428:57ab:: : 마지막에 엉뚱한 '::'가 붙어 있어 잘못된 표기입니다."
      ],
      devContext: "서버 설정 파일(Nginx, Linux 네트워크 설정, Cisco 라우터 등)에서 IPv6 주소를 바인딩하거나 라우팅할 때 표준 축약 표기법을 준수하지 않으면 구문 파싱 에러(Syntax Error)가 발생할 수 있습니다."
    },
    tags: ["ipv6", "addressing", "abbreviation", "protocol"]
  },
  {
    id: "netadmin-20261101-002",
    category: "netadmin-general",
    type: "multiple_choice",
    title: "멀티캐스트(Multicast)의 정의",
    question: "네트워크 통신 방식 중 특정 그룹에 소속된 여러 호스트들에게 동시에 데이터를 1:N으로 전송하는 방식으로 가장 알맞은 것은?",
    options: [
      "유니캐스트 (Unicast)",
      "브로드캐스트 (Broadcast)",
      "애니캐스트 (Anycast)",
      "멀티캐스트 (Multicast)"
    ],
    answerIndex: 3,
    explanation: {
      definition: "멀티캐스트(Multicast)는 특정 멀티캐스트 그룹에 가입된 호스트들에게만 데이터를 1:N으로 동시에 전송하는 통신 방식입니다. IPv4에서는 Class D 주소(224.0.0.0 ~ 239.255.255.255)를 사용하며 IGMP 프로토콜을 통해 그룹 멤버십을 관리합니다.",
      optionsBreakdown: [
        "① 유니캐스트 (Unicast) : 단일 송신자와 단일 수신자 간의 1:1 통신 방식입니다.",
        "② 브로드캐스트 (Broadcast) : 동일 서브넷 내의 모든 호스트(1:All)에게 패킷을 복제 전송하는 방식입니다.",
        "③ 애니캐스트 (Anycast) : 동일한 IP를 가진 여러 호스트 중 네트워크상 가장 가까운(최소 홉) 단일 호스트에게 1:1로 전송하는 방식입니다 (IPv6, CDN DNS 등).",
        "④ 멀티캐스트 (Multicast) : 특정 그룹(1:N)에 가입된 다수 호스트에게만 효율적으로 전달하는 방식입니다. (정답)"
      ],
      devContext: "IPTV 실시간 방송 스트리밍, 주식 시세 분배 시스템, 라우팅 정보 전파(OSPF, RIPv2) 등에서 불필요한 네트워크 트래픽 낭비를 줄이기 위해 멀티캐스트를 사용합니다."
    },
    tags: ["multicast", "unicast", "broadcast", "anycast", "transmission"]
  },
  {
    id: "netadmin-20261101-003",
    category: "netadmin-general",
    type: "multiple_choice",
    title: "서브넷 마스크(Subnet Mask)의 기본 용도",
    question: "IP 주소 체계에서 서브넷 마스크(Subnet Mask)를 사용하는 근본적인 목적으로 가장 옳은 것은?",
    options: [
      "패킷의 이동 경로를 암호화하기 위해",
      "IP 주소에서 네트워크 ID와 호스트 ID 영역을 구분하기 위해",
      "물리적 MAC 주소를 논리적 IP 주소로 변환하기 위해",
      "서로 다른 프로토콜 간의 세션을 연결하기 위해"
    ],
    answerIndex: 1,
    explanation: {
      definition: "서브넷 마스크는 32비트 IPv4 주소에서 '1'로 연속 채워진 부분을 네트워크 ID(Network Prefix)로, '0'으로 채워진 부분을 개별 호스트 ID(Host Identifier)로 구분하여 목적지 호스트가 로컬 서브넷에 있는지 외부 네트워크에 있는지 판단하게 합니다.",
      optionsBreakdown: [
        "① 패킷 이동 경로 암호화는 IPsec, TLS/SSL 등의 보안 프로토콜 역할입니다.",
        "② IP 주소에서 네트워크 ID와 호스트 ID 영역을 비트 단위 AND 연산으로 구분 식별합니다. (정답)",
        "③ 물리적 MAC 주소를 논리적 IP 주소로 변환하는 것은 RARP 프로토콜의 역할입니다 (반대는 ARP).",
        "④ 서로 다른 프로토콜 간 세션 연결은 게이트웨이나 전송 계층 소켓 바인딩의 역할입니다."
      ],
      devContext: "서버나 PC가 패킷을 보낼 때, 서브넷 마스크와 목적지 IP를 AND 연산하여 동일 네트워크면 직접 ARP를 통해 전송하고, 다른 네트워크면 기본 게이트웨이(Default Gateway)로 패킷을 라우팅합니다."
    },
    tags: ["subnet-mask", "ipv4", "network-id", "host-id"]
  },
  {
    id: "netadmin-20261101-004",
    category: "netadmin-general",
    type: "multiple_choice",
    title: "서브넷 마스크 계산 및 호스트 할당",
    question: "C 클래스 사설 IP 대역 `192.168.10.0/26` 네트워크가 할당되었다. 이 서브넷에서 호스트에게 할당 가능한 마지막 호스트 IP 주소는?",
    options: [
      "192.168.10.61",
      "192.168.10.62",
      "192.168.10.63",
      "192.168.10.64"
    ],
    answerIndex: 1,
    explanation: {
      definition: "프리픽스 `/26`은 서브넷 마스크가 `255.255.255.192`임을 뜻합니다.\n- 호스트 비트 수: 32 - 26 = 6비트\n- 서브넷 당 IP 블록 크기: 2^6 = 64개\n- 첫 번째 서브넷 IP 범위: 192.168.10.0 ~ 192.168.10.63\n- 네트워크 주소 (할당 불가): 192.168.10.0\n- 브로드캐스트 주소 (할당 불가): 192.168.10.63\n- 유효 호스트 할당 범위: 192.168.10.1 ~ 192.168.10.62\n따라서 마지막으로 할당 가능한 유효 호스트 IP는 192.168.10.62입니다.",
      optionsBreakdown: [
        "① 192.168.10.61 : 유효 호스트 주소이지만 마지막 호스트 주소가 아닙니다.",
        "② 192.168.10.62 : 브로드캐스트 주소(63) 바로 전 번호로, 할당 가능한 마지막 호스트 주소입니다. (정답)",
        "③ 192.168.10.63 : 해당 서브넷의 브로드캐스트(Broadcast) 주소로 호스트에 할당할 수 없습니다.",
        "④ 192.168.10.64 : 다음 두 번째 서브넷(192.168.10.64/26)의 네트워크 주소입니다."
      ],
      devContext: "클라우드 VPC 서브넷이나 사내 인프라 IP 할당 시 첫 주소(Network)와 끝 주소(Broadcast)는 RFC 표준상 호스트에 부여할 수 없으며, AWS의 경우 추가로 게이트웨이·DNS용으로 3개 주소를 더 예약합니다."
    },
    tags: ["subnetting", "cidr", "host-allocation", "ipv4"]
  },
  {
    id: "netadmin-20261101-005",
    category: "netadmin-general",
    type: "multiple_choice",
    title: "ICMP(Internet Control Message Protocol)의 기능",
    question: "TCP/IP 프로토콜 스위트에서 IP 패킷의 전송 오류를 감지 및 보고하고, 진단 제어 메시지를 전달하는 네트워크 계층 프로토콜은?",
    options: [
      "ARP",
      "IGMP",
      "ICMP",
      "SNMP"
    ],
    answerIndex: 2,
    explanation: {
      definition: "ICMP(Internet Control Message Protocol)는 비연결성이고 비신뢰적인 IP 프로토콜을 보완하기 위해 만들어진 네트워크 계층(3계층) 제어 프로토콜입니다. 패킷 전달 실패 시 송신 호스트에 Destination Unreachable, Time Exceeded(TTL 만료) 등의 오류를 통보하고 ping, traceroute 등 진단 도구에 사용됩니다.",
      optionsBreakdown: [
        "① ARP (Address Resolution Protocol) : 3계층 IP 주소를 2계층 MAC 주소로 변환하는 프로토콜입니다.",
        "② IGMP (Internet Group Management Protocol) : 호스트와 로컬 멀티캐스트 라우터 간 그룹 멤버십을 등록/관리하는 프로토콜입니다.",
        "③ ICMP (Internet Control Message Protocol) : 오류 보고 및 네트워크 진단 메시지 전달 프로토콜입니다. (정답)",
        "④ SNMP (Simple Network Management Protocol) : 7계층 응용 프로토콜로 네트워크 장비의 상태를 원격 모니터링/관리합니다."
      ],
      devContext: "`ping` 명령어는 ICMP Echo Request(Type 8)와 Echo Reply(Type 0)를 사용하며, `traceroute`는 TTL을 1부터 증가시키며 ICMP Time Exceeded(Type 11) 메시지를 수신하여 경유 라우터 경로를 추적합니다."
    },
    tags: ["icmp", "network-layer", "ping", "error-reporting"]
  },
  {
    id: "netadmin-20261101-006",
    category: "netadmin-general",
    type: "multiple_choice",
    title: "프로토콜 계층별 데이터 전송 단위(PDU)",
    question: "OSI 7계층 및 TCP/IP 계층별 프로토콜 데이터 단위(PDU)의 연결 중 옳지 않은 것은?",
    options: [
      "물리 계층(Physical Layer) - 비트(Bit)",
      "데이터 링크 계층(Data Link Layer) - 프레임(Frame)",
      "네트워크 계층(Network Layer) - 패킷(Packet)",
      "전송 계층(Transport Layer - TCP) - TCP Data"
    ],
    answerIndex: 3,
    explanation: {
      definition: "각 계층별 프로토콜 데이터 단위(PDU: Protocol Data Unit):\n- 1계층 (물리): 비트 (Bit)\n- 2계층 (데이터링크): 프레임 (Frame)\n- 3계층 (네트워크): 패킷 (Packet) 또는 데이터그램\n- 4계층 (전송): TCP는 세그먼트(Segment), UDP는 데이터그램(Datagram)\n- 5~7계층 (응용): 메시지(Message) 또는 데이터(Data)\n따라서 TCP 전송 계층의 정규 PDU 명칭은 세그먼트(Segment)입니다.",
      optionsBreakdown: [
        "① 1계층 물리: 0과 1의 전기/광 신호 단위인 비트(Bit)가 올바릅니다.",
        "② 2계층 데이터 링크: MAC 헤더와 트레일러(FCS)가 붙은 프레임(Frame)이 올바릅니다.",
        "③ 3계층 네트워크: IP 헤더가 붙은 패킷(Packet)이 올바릅니다.",
        "④ 4계층 전송: TCP의 PDU는 세그먼트(Segment)이며 'TCP Data'는 공식 PDU 명칭이 아닙니다. (정답)"
      ],
      devContext: "Wireshark 패킷 캡처 시 패킷 목록에서 L2 프레임 길이, L3 IP 패킷 길이, L4 TCP 세그먼트 페이로드 길이를 구분하여 분석할 때 PDU 개념이 기본이 됩니다."
    },
    tags: ["pdu", "osi-7-layer", "segment", "packet", "frame"]
  },
  {
    id: "netadmin-20261101-007",
    category: "netadmin-general",
    type: "multiple_choice",
    title: "웹 프로토콜 기본 포트(HTTP vs HTTPS)",
    question: "웹 브라우징 통신 프로토콜인 HTTP와 SSL/TLS 보안 암호화가 적용된 HTTPS가 사용하는 기본 Well-known 포트 번호의 연결로 옳은 것은?",
    options: [
      "HTTP: 8080, HTTPS: 443",
      "HTTP: 80, HTTPS: 443",
      "HTTP: 21, HTTPS: 22",
      "HTTP: 80, HTTPS: 8443"
    ],
    answerIndex: 1,
    explanation: {
      definition: "IANA에서 정의한 Well-known 기본 포트 번호:\n- HTTP (HyperText Transfer Protocol): TCP 80번\n- HTTPS (HTTP over TLS/SSL): TCP 443번\n- 8080번이나 8443번은 대체(Secondary) 또는 웹 프록시 포트로 주로 사용됩니다.",
      optionsBreakdown: [
        "① HTTP 기본 포트는 80번입니다. (8080은 대체 포트)",
        "② HTTP는 TCP 80, HTTPS는 TCP 443을 표준 Well-known 포트로 사용합니다. (정답)",
        "③ 21번은 FTP Control, 22번은 SSH 포트입니다.",
        "④ 8443번은 HTTPS의 대체 포트로 사용됩니다."
      ],
      devContext: "웹 서버(Nginx, Apache) 방화벽 설정 시 인바운드 규칙으로 TCP 80(HTTP)과 TCP 443(HTTPS)을 필수로 개방하며, 보통 80 포트로 유입된 요청은 443(HTTPS)으로 301 Permanent Redirect 처리합니다."
    },
    tags: ["http", "https", "port", "well-known-port", "web"]
  },
  {
    id: "netadmin-20261101-008",
    category: "netadmin-general",
    type: "multiple_choice",
    title: "FTP 서버 및 포트 번호",
    question: "파일 전송 프로토콜(FTP)에 대한 설명으로 가장 거리가 먼 것은?",
    options: [
      "클라이언트와 서버 간 파일 송수신에 사용된다.",
      "제어 연결(Control Connection)에는 TCP 포트 21번을 사용한다.",
      "데이터 전송(Data Connection)에는 Active 모드 기준 TCP 포트 20번을 사용한다.",
      "일반적인 FTP 서버는 고속 대용량 전송을 위해 전송 계층으로 UDP 포트 69번을 기본 사용한다."
    ],
    answerIndex: 3,
    explanation: {
      definition: "FTP(File Transfer Protocol)는 파일 전송의 무결성을 위해 전송 계층으로 반드시 연결 지향성인 TCP를 사용합니다.\n- 제어 연결: TCP 포트 21번 (명령어 및 세션 관리)\n- 데이터 전송: TCP 포트 20번 (Active 모드) 또는 임의의 High Port (Passive 모드)\nUDP 포트 69번을 사용하는 것은 인증이 없고 단순 파일 전송만 지원하는 TFTP(Trivial FTP)입니다.",
      optionsBreakdown: [
        "① 클라이언트-서버 구조로 대용량 파일 송수신을 담당합니다. (옳은 설명)",
        "② 명령어 전달 및 제어 연결로 TCP 21번을 사용합니다. (옳은 설명)",
        "③ Active 모드 시 서버가 데이터 전송을 위해 클라이언트로 연결할 때 출발지 포트로 TCP 20번을 사용합니다. (옳은 설명)",
        "④ 일반 FTP는 TCP를 사용합니다. UDP 69번을 사용하는 프로토콜은 TFTP입니다. (정답)"
      ],
      devContext: "방화벽 환경에서는 클라이언트 방화벽이 서버의 역방향 접속(Active 모드 TCP 20번)을 차단하므로, 실무에서는 거의 항상 클라이언트가 서버의 고정/동적 포트로 직접 접속하는 Passive 모드를 설정합니다."
    },
    tags: ["ftp", "tftp", "tcp", "port-20", "port-21"]
  },
  {
    id: "netadmin-20261101-009",
    category: "netadmin-general",
    type: "multiple_choice",
    title: "NTP(Network Time Protocol)의 전송 계층",
    question: "컴퓨터 네트워크 상에서 각 호스트 간의 시간 동기화를 제공하는 NTP 프로토콜에 대한 설명으로 올바른 것은?",
    options: [
      "TCP 포트 123번을 사용한다.",
      "UDP 포트 123번을 사용하여 빠른 동기화를 지원한다.",
      "2계층 데이터 링크 프로토콜로 IP 주소를 필요로 하지 않는다.",
      "ICMP 프로토콜의 일종으로 시간 패킷을 브로드캐스트 전송한다."
    ],
    answerIndex: 1,
    explanation: {
      definition: "NTP(Network Time Protocol)는 분산 시스템 및 서버들의 시계를 마이크로초 단위로 정밀하게 동기화하기 위해 설계된 응용 계층 프로토콜입니다. 3-way 핸드셰이크의 오버헤드와 지연을 줄이기 위해 전송 계층으로 UDP 포트 123번을 사용합니다.",
      optionsBreakdown: [
        "① NTP는 TCP가 아니라 UDP 프로토콜을 사용합니다.",
        "② NTP는 전송 계층에서 UDP 포트 123번을 사용하여 경량·신속한 시간 동기화를 제공합니다. (정답)",
        "③ NTP는 전송 계층 UDP 위의 응용 계층(7계층) 프로토콜로 IP 주소를 기반으로 동작합니다.",
        "④ NTP는 ICMP의 일종이 아니며 독립된 UDP 기반 타임서버 프로토콜입니다."
      ],
      devContext: "클러스터 DB, 로깅 시스템, 인증 서버(Kerberos, JWT 토큰)는 서버 간 시간이 5분 이상 어긋나면 인증 오류나 데이터 정합성 불일치가 발생하므로, chrony 또는 ntpd 데몬으로 상위 NTP 서버와 주기적으로 동기화합니다."
    },
    tags: ["ntp", "udp", "port-123", "time-sync"]
  },
  {
    id: "netadmin-20261101-010",
    category: "netadmin-general",
    type: "multiple_choice",
    title: "MTU 초과와 IP 단편화(Fragmentation)",
    question: "송신 호스트가 전송하려는 IP 패킷의 크기가 중간 라우터나 링크의 MTU(Maximum Transmission Unit)보다 클 때 발생하는 동작으로 알맞은 것은?",
    options: [
      "패킷을 즉시 폐기하고 송신자에게 알리지 않는다.",
      "MTU 크기 이하로 패킷을 쪼개는 단편화(Fragmentation)가 수행된다.",
      "패킷의 헤더 크기만 축소하여 원본 데이터 크기를 유지한다.",
      "라우터의 버퍼에 영구 보관된다."
    ],
    answerIndex: 1,
    explanation: {
      definition: "MTU(최대 전송 단위, 이더넷 기본 1500바이트)보다 큰 IP 패킷이 전송 링크를 통과해야 할 때, IP 계층에서 페이로드를 MTU 크기 이하로 분할하는 단편화(Fragmentation)가 발생합니다. 수신 호스트는 IP 헤더의 Identification, Flags(MF), Fragment Offset 필드를 참조하여 원본 패킷으로 재조립합니다.",
      optionsBreakdown: [
        "① DF(Don't Fragment) 플래그가 꺼져 있으면 폐기하지 않고 단편화합니다 (DF=1인 경우에만 폐기 후 ICMP 에러 반환).",
        "② 다음 홉의 MTU에 맞게 패킷 데이터를 여러 조각으로 쪼개는 단편화(Fragmentation)를 수행합니다. (정답)",
        "③ IP 헤더는 각 단편마다 복제되어 붙으므로 헤더를 축소할 수 없습니다.",
        "④ 라우터 버퍼에 영구 보관되지 않습니다."
      ],
      devContext: "패킷 단편화는 라우터와 최종 호스트의 CPU 자원을 소모하므로, 현대 TCP/IP 통신에서는 Path MTU Discovery(PMTUD)를 사용하여 단편화가 일어나지 않는 최적의 MSS(Maximum Segment Size)를 결정합니다."
    },
    tags: ["mtu", "fragmentation", "ip-header", "pmtud"]
  },
  {
    id: "netadmin-20261101-011",
    category: "netadmin-general",
    type: "multiple_choice",
    title: "NAT(Network Address Translation) 기술",
    question: "한정된 공인 IPv4 주소를 절약하고, 내부 사설 IP 네트워크의 보안성을 높이기 위해 공인 IP와 사설 IP 간의 주소를 상호 변환해 주는 기술은?",
    options: [
      "DHCP",
      "DNS",
      "NAT",
      "ARP"
    ],
    answerIndex: 2,
    explanation: {
      definition: "NAT(Network Address Translation)는 사설 IP(Private IP) 대역을 사용하는 내부 호스트들이 인터넷과 통신할 때 공인 IP(Public IP)로 주소를 변환해 주는 기술입니다. IPv4 주소 고갈을 지연시키고 내부 네트워크 토폴로지를 외부에 숨겨 보안을 강화합니다. 포트 번호까지 매핑하여 1개의 공인 IP를 여러 호스트가 공유하는 방식을 NAPT 또는 PAT라고 합니다.",
      optionsBreakdown: [
        "① DHCP : 호스트에 IP, 서브넷 마스크, 게이트웨이 등을 동적으로 자동 할당하는 프로토콜입니다.",
        "② DNS : 도메인 이름(www.example.com)을 IP 주소로 상호 변환해 주는 시스템입니다.",
        "③ NAT : 사설 IP와 공인 IP 간의 네트워크 주소를 변환해 주는 기술입니다. (정답)",
        "④ ARP : IP 주소를 물리적인 MAC 주소로 변환하는 프로토콜입니다."
      ],
      devContext: "AWS VPC의 NAT Gateway, 사내 공유기(라우터)의 포트 포워딩(Port Forwarding) 등이 대표적인 NAT/PAT 응용 사례입니다."
    },
    tags: ["nat", "pat", "private-ip", "public-ip", "ipv4"]
  },
  {
    id: "netadmin-20261101-012",
    category: "netadmin-devices",
    type: "multiple_choice",
    title: "무선 LAN CSMA/CA 표준 규격",
    question: "무선 환경에서 충돌을 사전에 회피(Collision Avoidance)하기 위해 사용하는 통신 규약인 CSMA/CA가 속한 IEEE 표준 위원회의 규격 번호는?",
    options: [
      "IEEE 802.3",
      "IEEE 802.5",
      "IEEE 802.11",
      "IEEE 802.15"
    ],
    answerIndex: 2,
    explanation: {
      definition: "무선 LAN(Wireless LAN / Wi-Fi)의 표준은 IEEE 802.11입니다. 무선 매체는 송신과 수신을 동시에 할 수 없어 충돌 감지(CSMA/CD)가 불가능하므로, 사전에 충돌을 회피하는 CSMA/CA(Carrier Sense Multiple Access with Collision Avoidance) 방식을 사용합니다.",
      optionsBreakdown: [
        "① IEEE 802.3 : 유선 이더넷(Ethernet) 표준 규격으로 CSMA/CD 방식을 사용합니다.",
        "② IEEE 802.5 : 토큰링(Token Ring) LAN 표준 규격입니다.",
        "③ IEEE 802.11 : 무선 LAN(Wi-Fi) 표준 규격으로 CSMA/CA 방식을 사용합니다. (정답)",
        "④ IEEE 802.15 : 무선 개인 통신망(WPAN, Bluetooth, Zigbee 등) 표준 규격입니다."
      ],
      devContext: "CSMA/CA에서는 RTS/CTS(Request to Send / Clear to Send) 프레임 교환 및 IFS(Inter-Frame Space), 랜덤 백오프(Random Backoff) 알고리즘을 통해 히든 노드 문제(Hidden Node Problem)와 충돌을 최소화합니다."
    },
    tags: ["ieee-802-11", "csma-ca", "wifi", "wlan", "wireless"]
  },
  {
    id: "netadmin-20261101-013",
    category: "netadmin-devices",
    type: "multiple_choice",
    title: "네트워크 토폴로지(링형 vs 성형)",
    question: "모든 컴퓨터가 하나의 닫힌 루프(Loop)를 형성하며, 각 노드가 인접한 두 개의 노드와 점대점(Point-to-Point)으로 연결되어 토큰을 이용해 제어되는 토폴로지는?",
    options: [
      "스타형 (Star)",
      "링형 (Ring)",
      "버스형 (Bus)",
      "메쉬형 (Mesh)"
    ],
    answerIndex: 1,
    explanation: {
      definition: "링형(Ring Topology)은 각 노드가 이웃한 두 노드와 Point-to-Point로 연결되어 원형 폐쇄 루프를 구성하는 구조입니다. 데이터는 한 방향으로만 순환하며, '토큰(Token)'을 획득한 노드만 데이터를 전송할 수 있어 충돌이 발생하지 않지만 한 노드나 케이블에 결함이 생기면 전체 링이 마비될 수 있습니다.",
      optionsBreakdown: [
        "① 스타형 (Star) : 중앙의 허브/스위치에 모든 단말이 1:1로 연결되는 현대 LAN의 표준 구조입니다.",
        "② 링형 (Ring) : 닫힌 원형 루프를 형성하고 토큰 패싱 방식으로 제어되는 구조입니다. (정답)",
        "③ 버스형 (Bus) : 하나의 단일 공용 케이블(백본)에 모든 노드가 병렬로 접속하는 구조입니다.",
        "④ 메쉬형 (Mesh) : 모든 노드가 상호 그물망처럼 다중 연결되어 신뢰성이 가장 높은 구조입니다."
      ],
      devContext: "링형의 단일 고장점(SPOF) 문제를 극복하기 위해 광통신 백본망에서는 이중 링 구조를 사용하는 FDDI(Fiber Distributed Data Interface) 기술이 활용됩니다."
    },
    tags: ["ring-topology", "topology", "token-ring", "star-topology"]
  },
  {
    id: "netadmin-20261101-014",
    category: "netadmin-devices",
    type: "multiple_choice",
    title: "ARQ(자동 재전송 요구) 오류 제어 방식",
    question: "연속적 ARQ 방식 중 하나로, 수신 측에서 오류가 감지되면 오류가 발생한 프레임부터 이후에 전송된 모든 프레임을 폐기하고, 해당 오류 프레임부터 다시 전부 재전송하는 방식은?",
    options: [
      "Stop-and-Wait ARQ",
      "Selective Repeat ARQ",
      "Go-Back-N ARQ",
      "Parity Check ARQ"
    ],
    answerIndex: 2,
    explanation: {
      definition: "Go-Back-N ARQ는 송신측이 윈도우 크기(N)만큼 ACK 없이 프레임을 연속 전송하다가, 수신측에서 NAK를 받거나 특정 프레임의 타임아웃이 발생하면 손상된 해당 프레임(N번)부터 이후에 이미 전송했던 모든 프레임까지 모조리 처음부터 다시 재전송하는 방식입니다. 수신측 버퍼링이 단순하지만 대역폭 낭비가 있습니다.",
      optionsBreakdown: [
        "① Stop-and-Wait ARQ : 프레임 1개를 보내고 ACK를 받을 때까지 다음 프레임을 보내지 않고 멈춰 기다리는 방식입니다.",
        "② Selective Repeat ARQ : 오류가 난 특정 프레임 하나만 선택적으로 재전송하는 고효율 방식이지만 수신측 큐 버퍼링이 복잡합니다.",
        "③ Go-Back-N ARQ : 오류 프레임부터 이후 전송된 모든 프레임을 폐기하고 통째로 다시 보내는 방식입니다. (정답)",
        "④ Parity Check ARQ : 패리티 체크는 단순 오류 검출 부호 방식이며 ARQ 전송 프로토콜 명칭이 아닙니다."
      ],
      devContext: "TCP 프로토콜의 슬라이딩 윈도우 재전송 메커니즘은 기본적으로 Go-Back-N의 개념을 기반으로 하며, 현대 TCP는 대역폭 효율을 위해 SACK(Selective Acknowledgement) 옵션을 결합해 Selective Repeat 방식으로 동작합니다."
    },
    tags: ["arq", "go-back-n", "selective-repeat", "flow-control", "tcp"]
  },
  {
    id: "netadmin-20261101-015",
    category: "netadmin-devices",
    type: "multiple_choice",
    title: "부하 분산(Load Balancing) 알고리즘",
    question: "서버 부하 분산(Load Balancing) 방식 중 클라이언트의 요청을 순서대로 서버 풀(Pool)의 노드들에 순환식으로 균등하게 번갈아가며 배분하는 기법은?",
    options: [
      "Round Robin",
      "Least Connection",
      "Weighted Least Connection",
      "Source IP Hash"
    ],
    answerIndex: 0,
    explanation: {
      definition: "라운드 로빈(Round Robin)은 로드 밸런서에 등록된 백엔드 서버 목록에 클라이언트의 인입 요청을 순서대로 하나씩 1:1 순환 배분하는 가장 기본적이고 단순한 부하 분산 알고리즘입니다. 서버들의 처리 성능과 세션 지속 시간이 거의 동일할 때 적합합니다.",
      optionsBreakdown: [
        "① Round Robin : 서버 풀의 노드들에게 차례대로 돌아가며 요청을 배분합니다. (정답)",
        "② Least Connection : 현재 열려있는 활성 연결(Connection) 수가 가장 적은 서버로 요청을 보냅니다.",
        "③ Weighted Least Connection : 서버의 하드웨어 스펙(가중치)과 현재 연결 수를 종합 고려하여 분배합니다.",
        "④ Source IP Hash : 클라이언트의 출발지 IP를 해싱하여 항상 동일한 서버로 세션을 유지(Sticky Session)시키는 방식입니다."
      ],
      devContext: "Nginx의 기본 부하 분산 설정이 Round Robin이며, 서버 스펙이 상이할 때는 `weight` 파라미터를 부여하는 Weighted Round Robin을 사용합니다."
    },
    tags: ["load-balancer", "round-robin", "l4-switch", "traffic-distribution"]
  },
  {
    id: "netadmin-20261101-016",
    category: "netadmin-devices",
    type: "multiple_choice",
    title: "라우팅 방식 - 정적 라우팅(Static Routing)",
    question: "관리자가 네트워크의 모든 경로를 수동으로 직접 라우팅 테이블에 지정하여 등록하는 라우팅 방식으로 가장 옳은 것은?",
    options: [
      "정적 라우팅 (Static Routing)",
      "동적 라우팅 (Dynamic Routing)",
      "RIP 라우팅",
      "OSPF 라우팅"
    ],
    answerIndex: 0,
    explanation: {
      definition: "정적 라우팅(Static Routing)은 네트워크 엔지니어가 각 목적지 네트워크로 향하는 게이트웨이/인터페이스 경로를 직접 수동으로 입력(`ip route ...`)하는 방식입니다. 라우팅 프로토콜 패킷을 주고받지 않아 대역폭 및 CPU 자원을 절약하고 보안에 우수하지만, 회선 장애 시 자동 우회 경로를 잡지 못합니다.",
      optionsBreakdown: [
        "① 정적 라우팅 (Static Routing) : 관리자가 수동으로 직접 경로를 지정하는 방식입니다. (정답)",
        "② 동적 라우팅 (Dynamic Routing) : 라우터들끼리 라우팅 프로토콜을 통해 토폴로지 변경을 감지하고 자동으로 테이블을 갱신하는 방식입니다.",
        "③ RIP 라우팅 : 거리 벡터 기반의 동적 라우팅 프로토콜입니다.",
        "④ OSPF 라우팅 : 링크 상태 기반의 대표적인 동적 라우팅 프로토콜입니다."
      ],
      devContext: "소규모 네트워크의 기본 경로(Default Route, `ip route 0.0.0.0 0.0.0.0 [Next-Hop]`)나 특정 내부망 서버와의 고정 연결에는 항상 정적 라우팅이 사용됩니다."
    },
    tags: ["static-routing", "dynamic-routing", "routing-table", "router"]
  },
  {
    id: "netadmin-20261101-017",
    category: "netadmin-devices",
    type: "multiple_choice",
    title: "동적 라우팅 프로토콜 - RIP(Routing Information Protocol)",
    question: "RIP(Routing Information Protocol)에 대한 설명 중 틀린 것은?",
    options: [
      "거리 벡터(Distance Vector) 기반의 내부 라우팅 프로토콜이다.",
      "벨만-포드(Bellman-Ford) 알고리즘을 사용한다.",
      "홉 수(Hop Count)를 메트릭으로 사용하며, 최대 홉 수는 15(16은 도달 불능)이다.",
      "대규모 복잡한 엔터프라이즈 망 전용으로 링크 상태(Link-State) 정보를 다익스트라 알고리즘으로 계산한다."
    ],
    answerIndex: 3,
    explanation: {
      definition: "RIP(Routing Information Protocol)의 핵심 특징:\n- 내부 게이트웨이 프로토콜(IGP) 중 거리 벡터(Distance Vector) 프로토콜\n- 벨만-포드(Bellman-Ford) 알고리즘 기반\n- 홉 수(Hop Count)를 메트릭으로 사용하며 최대 15홉 제한(16홉은 도달 불능 처리)\n- 매 30초마다 전체 라우팅 테이블을 이웃 라우터와 브로드캐스트/멀티캐스트로 교환\n④번의 링크 상태 정보와 다익스트라(SPF) 알고리즘을 사용하는 것은 **OSPF(Open Shortest Path First)**입니다.",
      optionsBreakdown: [
        "① 거리 벡터 기반의 내부 라우팅 프로토콜이 맞습니다.",
        "② 벨만-포드 최단 경로 알고리즘을 사용하는 것이 맞습니다.",
        "③ 홉 수(Hop Count) 기준이며 최대 15홉(16은 Unreachable) 제한이 맞습니다.",
        "④ 링크 상태(Link-State) 및 다익스트라 알고리즘을 사용하는 것은 OSPF에 대한 설명입니다. (정답)"
      ],
      devContext: "RIP는 주기적인 전체 테이블 전송으로 인한 대역폭 낭비와 15홉 제한, 느린 수렴(Slow Convergence) 문제 때문에 현대 엔터프라이즈 망에서는 거의 쓰이지 않고 OSPF나 BGP가 주력으로 사용됩니다."
    },
    tags: ["rip", "ospf", "distance-vector", "hop-count", "routing"]
  },
  {
    id: "netadmin-20261101-018",
    category: "netadmin-devices",
    type: "multiple_choice",
    title: "VLAN(Virtual Local Area Network)의 특징",
    question: "스위치에서 물리적인 구성과 무관하게 논리적으로 네트워크 브로드캐스트 도메인을 분할하여 사용하는 VLAN 기술에 대한 설명으로 옳은 것은?",
    options: [
      "VLAN을 구성하면 물리적으로 서로 다른 스위치에 연결된 호스트끼리는 통신할 수 없다.",
      "VLAN은 2계층 브로드캐스트 도메인을 분할하여 불필요한 트래픽 전파를 차단하고 보안성을 높인다.",
      "서로 다른 VLAN 간의 패킷 교환은 2계층 스위치만으로 라우터나 L3 스위치 없이도 항상 가능하다.",
      "VLAN 트렁킹 표준 프로토콜은 IEEE 802.11이다."
    ],
    answerIndex: 1,
    explanation: {
      definition: "VLAN(가상 근거리 통신망)은 물리적인 스위치 하드웨어를 논리적으로 여러 개의 독립된 브로드캐스트 도메인으로 분할하는 2계층 기술입니다. 브로드캐스트 스톰의 범위를 줄이고 부서 간 네트워크를 격리하여 보안을 강화합니다. 서로 다른 VLAN 간 통신은 반드시 3계층 장비(라우터 또는 L3 스위치)를 거쳐야 합니다.",
      optionsBreakdown: [
        "① 트렁크(Trunk) 링크를 통해 여러 스위치 간에도 동일한 VLAN ID를 공유하여 통신할 수 있습니다.",
        "② 브로드캐스트 도메인을 논리적으로 분할하여 불필요한 트래픽 전파를 차단하고 보안성을 높입니다. (정답)",
        "③ 서로 다른 VLAN 간 통신(Inter-VLAN Routing)은 반드시 3계층 라우터나 L3 스위치가 필요합니다.",
        "④ VLAN 트렁킹 표준 규격은 IEEE 802.1Q(dot1q)입니다 (802.11은 무선 Wi-Fi 규격)."
      ],
      devContext: "엔터프라이즈 인프라에서는 업무용 PC VLAN, 서버용 VLAN, IP 전화기용 Voice VLAN, 무선 AP용 VLAN 등을 분리하고 라우터/방화벽의 ACL을 통해 세그먼트 간 접근을 엄격히 통제합니다."
    },
    tags: ["vlan", "broadcast-domain", "ieee-802-1q", "l2-switch", "inter-vlan"]
  },
  {
    id: "netadmin-20261101-019",
    category: "netadmin-devices",
    type: "multiple_choice",
    title: "스위치 루프(Loop) 및 동작 특성",
    question: "스위치 환경에서 발생할 수 있는 현상 및 특징에 대한 설명 중 가장 옳지 않은 것은?",
    options: [
      "스위치가 목적지 MAC 주소를 학습하지 못한 경우, 수신 포트를 제외한 모든 포트로 플러딩(Flooding)한다.",
      "이중화 링크에서 루프(Loop)가 발생하면 브로드캐스트 스톰(Broadcast Storm) 및 MAC 테이블 플래핑(Flapping)이 발생한다.",
      "스위치 루핑 방지를 위해 STP(Spanning Tree Protocol)를 사용한다.",
      "스위치의 MAC 주소 테이블에 특정 주소가 가득 차면 루프 현상이 필연적으로 발생하여 자동 해결된다."
    ],
    answerIndex: 3,
    explanation: {
      definition: "스위치의 MAC 주소 테이블이 공격자의 위조된 수많은 MAC 주소로 가득 차는 현상은 'MAC Table Flooding 공격'입니다. 이 경우 스위치는 신규 주소를 학습하지 못해 더미 허브(Dummy Hub)처럼 동작하여 모든 트래픽을 플러딩(Fail-Open)하게 됩니다. 이는 루프 현상과 무관하며 저절로 자동 해결되지도 않습니다.\n루프(Loop)는 스위치 간 폐쇄 회로가 형성되어 패킷이 무한 순환하는 현상이며 STP(Spanning Tree Protocol, IEEE 802.1D)를 통해 방지합니다.",
      optionsBreakdown: [
        "① 미학습된 목적지 MAC 주소(Unknown Unicast)는 수신 포트를 제외한 전체 포트로 플러딩합니다. (정상 동작)",
        "② 루프 발생 시 브로드캐스트 프레임이 무한 루프를 돌며 대역폭을 고갈시키고(브로드캐스트 스톰), 스위치 포트 간 MAC 주소 위치가 끊임없이 바뀌는 MAC 플래핑이 일어납니다. (옳은 설명)",
        "③ 이중화 루프 차단을 위한 표준 프로토콜은 STP(Spanning Tree Protocol)입니다. (옳은 설명)",
        "④ MAC 테이블 포화는 루프와 별개인 자원 고갈 보안 문제이며 자동 해결되지 않습니다. (정답)"
      ],
      devContext: "현대 데이터센터에서는 전통적 STP의 느린 수렴 속도(30~50초)를 보완하기 위해 RSTP(802.1w)를 사용하거나, 링크를 차단하지 않고 모든 대역폭을 동시에 활용하는 LACP(Link Aggregation) 및 MC-LAG 기술을 적용합니다."
    },
    tags: ["switch", "loop", "stp", "flooding", "mac-table"]
  },
  {
    id: "netadmin-20261101-020",
    category: "netadmin-windows",
    type: "multiple_choice",
    title: "Windows 성능 모니터 도구",
    question: "Windows Server 환경에서 CPU, 메모리, 디스크 I/O 등 실시간 시스템 성능 데이터를 수집하고 카운터를 통해 병목 현상을 분석하는 GUI 도구의 실행 명령어로 옳은 것은?",
    options: [
      "perfmon.exe",
      "resmon.exe",
      "sysdm.cpl",
      "taskmgr.exe"
    ],
    answerIndex: 0,
    explanation: {
      definition: "Windows의 **성능 모니터(Performance Monitor)** 실행 파일 명령어는 `perfmon.exe`입니다. 시스템의 각종 하드웨어 및 소프트웨어 성능 카운터(카운터 로그, 추적 로그)를 실시간 차트로 확인하거나 데이터 수집기 세트를 생성하여 병목 지점을 장기 분석할 수 있습니다.",
      optionsBreakdown: [
        "① perfmon.exe : Windows 성능 모니터(Performance Monitor) 실행 명령어입니다. (정답)",
        "② resmon.exe : 리소스 모니터(Resource Monitor) 실행 명령어입니다.",
        "③ sysdm.cpl : 시스템 속성(컴퓨터 이름, 작업 그룹, 고급 환경 변수 등) 제어판 애플릿입니다.",
        "④ taskmgr.exe : 작업 관리자(Task Manager) 실행 명령어입니다."
      ],
      devContext: "Windows 서버 튜닝 시 `perfmon`에서 `Processor(_Total)\\% Processor Time`, `Memory\\Available MBytes`, `PhysicalDisk(_Total)\\Current Disk Queue Length` 카운터를 등록하여 주기적 리포트를 생성합니다."
    },
    tags: ["windows-server", "perfmon", "performance-monitor", "sysadmin"]
  },
  {
    id: "netadmin-20261101-021",
    category: "netadmin-windows",
    type: "multiple_choice",
    title: "파일 시스템 - ReFS vs NTFS",
    question: "Windows Server 2012부터 도입된 차세대 파일 시스템인 ReFS(Resilient File System)와 기존 NTFS를 비교한 설명 중 틀린 것은?",
    options: [
      "ReFS는 자동 데이터 무결성 검사 및 자가 치유(Self-Healing) 기능을 제공한다.",
      "ReFS는 NTFS에 비해 훨씬 거대한 볼륨 크기(최대 수백 PB/EB급)와 파일 크기를 지원한다.",
      "ReFS는 무결성 스트림(Integrity Streams)을 통해 파일 손상을 조기에 탐지한다.",
      "ReFS는 기본적으로 NTFS가 제공하는 파일 단위 암호화(EFS) 및 압축, 디스크 할당량 기능을 완벽하게 계승하여 모두 지원한다."
    ],
    answerIndex: 3,
    explanation: {
      definition: "ReFS(Resilient File System)는 가용성과 데이터 무결성을 극대화하기 위해 설계된 차세대 Windows 파일 시스템입니다. 메타데이터 B+ 트리 구조와 체크섬 기반 무결성 스트림, 자가 치유를 지원하며 대규모 스토리지에 최적화되어 있습니다.\n하지만 고가용성에 집중한 구조로 인해 NTFS의 일부 레거시 기능(파일 시스템 단위 EFS 암호화, 파일 단위 압축, 디스크 할당량(Quota), 하드 링크, 8.3 축약 파일명)은 지원하지 않습니다.",
      optionsBreakdown: [
        "① 백그라운드 스크러빙을 통해 손상된 데이터를 자가 치유(Self-Healing)합니다. (옳은 설명)",
        "② 최대 35PB의 볼륨 및 대용량 파일을 지원하여 NTFS보다 훨씬 큽니다. (옳은 설명)",
        "③ 데이터 및 메타데이터 체크섬을 유지하는 무결성 스트림을 제공합니다. (옳은 설명)",
        "④ ReFS는 EFS 파일 암호화, NTFS 파일 압축, 디스크 쿼터 등을 기본 지원하지 않습니다. (정답)"
      ],
      devContext: "Windows Server 환경에서 Hyper-V 가상화 호스트의 VHDX 가상 디스크 저장소나 저장소 공간 다이렉트(Storage Spaces Direct, S2D) 볼륨 구성 시 ReFS의 블록 복제(Block Cloning) 및 빠른 VHD 할당 기능이 필수적으로 쓰입니다."
    },
    tags: ["windows-server", "refs", "ntfs", "file-system", "storage"]
  },
  {
    id: "netadmin-20261101-022",
    category: "netadmin-windows",
    type: "multiple_choice",
    title: "스토리지 RAID 구성 - 미러링",
    question: "디스크 오류에 대비한 RAID 구성 중 동일한 데이터를 두 개 이상의 물리 디스크에 그대로 복제하여 신뢰성을 극대화하는 '미러링(Mirroring)' 방식의 RAID 레벨은?",
    options: [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 6"
    ],
    answerIndex: 1,
    explanation: {
      definition: "RAID(Redundant Array of Independent Disks) 레벨 특징:\n- RAID 0: 스트라이핑(Striping) - 속도 향상, 결함 허용(Fault Tolerance) 없음\n- RAID 1: 미러링(Mirroring) - 2개 이상의 디스크에 동일한 데이터를 실시간 복제. 하나의 디스크가 고장 나도 100% 정상 작동(디스크 용량 효율 50%)\n- RAID 5: 패리티(Parity) 분산 저장 - 최소 3개 디스크 필요, 1개 디스크 결함 허용\n- RAID 6: 이중 패리티 분산 저장 - 최소 4개 디스크 필요, 2개 디스크 동시 결함 허용",
      optionsBreakdown: [
        "① RAID 0 : 데이터를 쪼개어 여러 디스크에 분산 기록하는 스트라이핑 방식으로 백업/복제 기능이 없습니다.",
        "② RAID 1 : 데이터를 1:1로 동일하게 복제하는 미러링(Mirroring) 방식입니다. (정답)",
        "③ RAID 5 : 데이터와 단일 패리티를 블록 단위로 분산 저장하는 방식입니다.",
        "④ RAID 6 : 두 개의 독립된 패리티 블록을 저장하는 이중 패리티 방식입니다."
      ],
      devContext: "서버 운영체제(OS) 부팅 볼륨(`C:\\`)은 디스크 하나가 갑자기 불량이 나더라도 시스템 다운타임 없이 교체할 수 있도록 반드시 RAID 1(미러링)으로 구성하는 것이 엔지니어 표준 수칙입니다."
    },
    tags: ["raid", "raid-1", "mirroring", "storage", "windows-server"]
  },
  {
    id: "netadmin-20261101-023",
    category: "netadmin-windows",
    type: "multiple_choice",
    title: "원격 데스크톱 및 사용자 관리",
    question: "Windows Server 환경에서 도메인에 속하지 않은 일반 표준 사용자가 원격 데스크톱(RDP)으로 서버에 접속할 수 있도록 하려면 등록해야 하는 기본 내장 로컬 그룹은?",
    options: [
      "Administrators",
      "Remote Desktop Users",
      "Power Users",
      "Network Configuration Operators"
    ],
    answerIndex: 1,
    explanation: {
      definition: "Windows Server에서 기본적으로 관리자 그룹(`Administrators`)의 멤버만 RDP(원격 데스크톱) 접속 권한을 가집니다. 일반 표준 사용자 계정에게 전체 관리자 권한을 주지 않으면서 원격 데스크톱 세션 접속만 허가하려면 해당 계정을 **Remote Desktop Users** 로컬 그룹에 등록해야 합니다.",
      optionsBreakdown: [
        "① Administrators : 서버의 모든 권한을 가진 최고 관리자 그룹입니다. 일반 사용자에게 부여하면 보안상 위험합니다.",
        "② Remote Desktop Users : 일반 사용자에게 원격 데스크톱(RDP) 로그인 권한만 선별 부여하는 내장 그룹입니다. (정답)",
        "③ Power Users : Windows 과거 버전의 고급 사용자 레거시 그룹으로 원격 데스크톱 전용 그룹이 아닙니다.",
        "④ Network Configuration Operators : IP 설정 변경 등 TCP/IP 네트워크 속성을 관리할 수 있는 그룹입니다."
      ],
      devContext: "실무 환경에서는 `lusrmgr.msc`(로컬 사용자 및 그룹) 또는 그룹 정책(GPO: '원격 데스크톱 서비스를 통한 로그온 허용')을 통해 Remote Desktop Users 그룹에 특정 AD 유저를 매핑합니다."
    },
    tags: ["windows-server", "rdp", "remote-desktop-users", "user-management"]
  },
  {
    id: "netadmin-20261101-024",
    category: "netadmin-linux",
    type: "multiple_choice",
    title: "vi 편집기 삭제 명령어",
    question: "Linux의 vi (또는 vim) 편집기 명령 모드(Command Mode)에서 커서 위치에 있는 한 글자(단일 문자)를 삭제할 때 사용하는 키는?",
    options: [
      "x",
      "dd",
      "dw",
      "yy"
    ],
    answerIndex: 0,
    explanation: {
      definition: "vi/vim 편집기 명령 모드 기본 키:\n- `x` : 커서가 위치한 단일 문자 1자 삭제 (Delete 키 기능)\n- `X` : 커서 바로 앞의 문자 1자 삭제 (Backspace 키 기능)\n- `dd` : 현재 커서가 위치한 1줄 전체 삭제 (잘라내기)\n- `dw` : 현재 위치에서 한 단어(Word) 삭제\n- `yy` : 현재 커서가 위치한 1줄 복사(Yank)",
      optionsBreakdown: [
        "① x : 커서 위치의 단일 문자 1자를 삭제합니다. (정답)",
        "② dd : 커서가 위치한 한 줄(행) 전체를 삭제합니다.",
        "③ dw : 커서 위치부터 한 단어(Word)를 삭제합니다.",
        "④ yy : 커서가 위치한 한 줄 전체를 복사합니다."
      ],
      devContext: "vi 편집기에서 여러 글자를 지우려면 숫자 조합(예: `5x`는 현재 위치부터 5글자 삭제, `3dd`는 3줄 삭제)을 사용하여 생산성을 높일 수 있습니다."
    },
    tags: ["linux", "vi", "vim", "command-mode", "editing"]
  },
  {
    id: "netadmin-20261101-025",
    category: "netadmin-linux",
    type: "multiple_choice",
    title: "Linux 파일 및 디렉터리 관리 명령어",
    question: "Linux 환경에서 사용되는 파일/디렉터리 관련 명령어에 대한 설명으로 가장 거리가 먼 것은?",
    options: [
      "mkdir: 새로운 디렉터리를 생성할 때 사용한다.",
      "rmdir: 파일이 포함되어 있는 비어있지 않은 디렉터리도 강제로 즉시 삭제한다.",
      "mv: 파일이나 디렉터리를 다른 위치로 이동하거나 이름을 변경할 때 사용한다.",
      "mkdir -p: 하위 디렉터리 경로까지 한 번에 생성할 때 사용한다."
    ],
    answerIndex: 1,
    explanation: {
      definition: "`rmdir` 명령어는 **비어 있는 디렉터리(Empty Directory)**만 삭제할 수 있습니다. 파일이나 하위 디렉터리가 존재하는 디렉터리를 삭제하려고 하면 `Directory not empty` 에러가 발생합니다. 비어있지 않은 디렉터리와 하위 내용을 통째로 강제 삭제하려면 `rm -rf [디렉터리명]` 명령어를 사용해야 합니다.",
      optionsBreakdown: [
        "① mkdir : 새 디렉터리를 생성하는 명령어입니다. (옳은 설명)",
        "② rmdir : 비어있는 디렉터리만 삭제 가능하며, 내용이 있는 디렉터리는 삭제할 수 없습니다. (정답)",
        "③ mv : 파일 이동(Move) 및 이름 변경(Rename)에 사용됩니다. (옳은 설명)",
        "④ mkdir -p : 부모 디렉터리가 없으면 상위 경로까지 재귀적으로 일괄 생성합니다. (옳은 설명)"
      ],
      devContext: "배포 스크립트 작성 시 `mkdir -p /app/logs/2026`처럼 `-p` 옵션을 주면 경로 존재 여부와 상관없이 에러 없이 안전하게 생성할 수 있습니다."
    },
    tags: ["linux", "rmdir", "mkdir", "mv", "file-commands"]
  },
  {
    id: "netadmin-20261101-026",
    category: "netadmin-linux",
    type: "multiple_choice",
    title: "Linux 파일 권한 표기법 (chmod)",
    question: "Linux 파일의 권한을 확인한 결과 `-rwxr-x--x`로 표시되었다. 이 권한을 8진수 숫자로 변환한 값으로 옳은 것은?",
    options: [
      "751",
      "754",
      "761",
      "651"
    ],
    answerIndex: 0,
    explanation: {
      definition: "리눅스 파일 권한은 3자리씩 끊어서 8진수로 환산합니다 (r=4, w=2, x=1):\n- 소유자 (User, 2~4번째 글자): `rwx` = 4 + 2 + 1 = **7**\n- 그룹 (Group, 5~7번째 글자): `r-x` = 4 + 0 + 1 = **5**\n- 기타 사용자 (Other, 8~10번째 글자): `--x` = 0 + 0 + 1 = **1**\n따라서 8진수 숫자는 **751**입니다.",
      optionsBreakdown: [
        "① 751 : User=7(rwx), Group=5(r-x), Other=1(--x)로 정확히 일치합니다. (정답)",
        "② 754 : Other의 권한이 4(r--)가 아니라 1(--x)입니다.",
        "③ 761 : Group의 권한이 6(rw-)이 아니라 5(r-x)입니다.",
        "④ 651 : User의 권한이 6(rw-)이 아니라 7(rwx)입니다."
      ],
      devContext: "`chmod 755 [스크립트.sh]`는 소유자에게 읽기/쓰기/실행 권한을, 그룹과 타인에게는 읽기/실행 권한만 부여할 때 가장 보편적으로 사용하는 권한 조합입니다."
    },
    tags: ["linux", "chmod", "file-permissions", "octal"]
  },
  {
    id: "netadmin-20261101-027",
    category: "netadmin-linux",
    type: "multiple_choice",
    title: "Linux 파일 시스템 마운트 확인 명령어",
    question: "Linux 시스템에서 현재 마운트되어 있는 파일 시스템의 목록 및 디스크 사용량을 확인하는 명령어가 아닌 것은?",
    options: [
      "mount",
      "df -h",
      "cat /proc/mounts",
      "format"
    ],
    answerIndex: 3,
    explanation: {
      definition: "리눅스에서 마운트된 파일 시스템 상태를 확인하는 대표적 명령어:\n- `mount` : 옵션 없이 실행 시 마운트된 모든 장치와 옵션 출력\n- `df -h` : 마운트된 파일 시스템별 전체 용량, 사용량, 남은 공간, 마운트 지점을 사람이 읽기 쉬운(GB, MB) 단위로 출력\n- `cat /proc/mounts` : 커널의 VFS 계층에 현재 마운트된 목록 확인\n`format`은 DOS/Windows의 디스크 포맷 명령어이며 리눅스 파일 시스템 생성 명령어는 `mkfs` 계열(`mkfs.ext4`, `mkfs.xfs`)입니다.",
      optionsBreakdown: [
        "① mount : 마운트된 전체 블록 장치 목록 및 마운트 옵션을 보여줍니다.",
        "② df -h : Disk Free의 약어로 마운트된 디스크 파티션 사용량을 GB/MB 단위로 요약 출력합니다.",
        "③ cat /proc/mounts : 가상 파일시스템 /proc을 통해 커널 수준의 마운트 정보를 직접 확인합니다.",
        "④ format : 리눅스 표준 마운트 확인 명령어가 아닙니다. (정답)"
      ],
      devContext: "서버 디스크 용량 모니터링 시 `df -h`로 파티션별 사용량을 확인하고, 특정 디렉터리가 비대해진 원인을 찾을 때는 `du -sh /*` 명령어로 세부 사용량을 추적합니다."
    },
    tags: ["linux", "mount", "df", "disk-management"]
  },
  {
    id: "netadmin-20261101-028",
    category: "netadmin-linux",
    type: "multiple_choice",
    title: "Linux 시스템 메모리 사용량 확인",
    question: "Linux 시스템에서 현재 사용 중인 물리 메모리(RAM)와 스왑(Swap) 메모리의 총량, 사용량, 여유 공간을 바이트/메가바이트 단위로 확인하는 대표적인 명령어는?",
    options: [
      "free",
      "uptime",
      "vmstat",
      "iostat"
    ],
    answerIndex: 0,
    explanation: {
      definition: "`free` 명령어(예: `free -m`, `free -h`)는 시스템의 물리 메모리(total, used, free, shared, buff/cache, available)와 스왑 메모리의 전체 크기 및 사용량을 간결하고 명확하게 출력하는 리눅스 표준 유틸리티입니다.",
      optionsBreakdown: [
        "① free : 물리 메모리(RAM)와 Swap의 전체, 사용량, 여유량을 한눈에 확인하는 대표 명령어입니다. (정답)",
        "② uptime : 시스템 부팅 후 경과 시간, 현재 시각, 접속 사용자 수, 1/5/15분 평균 부하율(Load Average)을 확인합니다.",
        "③ vmstat : 가상 메모리, 프로세스, CPU, I/O 블록 등의 통계를 종합적으로 모니터링합니다.",
        "④ iostat : 디스크 장치 및 파티션의 입출력(I/O) 성능과 대역폭을 모니터링합니다."
      ],
      devContext: "리눅스는 메모리 낭비를 줄이기 위해 미사용 여유 RAM을 디스크 캐시(`buff/cache`)로 적극 활용하므로, 실제 신규 프로세스가 즉시 쓸 수 있는 여유 메모리는 `free` 컬럼이 아니라 `available` 컬럼 수치로 판단해야 합니다."
    },
    tags: ["linux", "free", "memory", "swap", "system-monitoring"]
  },
  {
    id: "netadmin-20261101-029",
    category: "netadmin-linux",
    type: "multiple_choice",
    title: "Linux 프로세스 상태 확인 명령어 (ps)",
    question: "Linux 환경에서 현재 실행 중인 모든 프로세스를 전체 포맷으로 상세하게 조회할 때 사용하는 명령어는?",
    options: [
      "ps -ef",
      "kill -9",
      "netstat -an",
      "systemctl start"
    ],
    answerIndex: 0,
    explanation: {
      definition: "`ps` 명령어는 현재 실행 중인 프로세스의 스냅샷을 조회합니다.\n- `ps -ef` (System V 스타일):\n  - `-e` : 커널 및 모든 사용자의 전체 프로세스(Every process) 출력\n  - `-f` : UID, PID, PPID, C, STIME, TTY, TIME, CMD 등 전체 포맷(Full-format)으로 상세 출력\n- `ps aux` (BSD 스타일)와 함께 실무에서 가장 빈번하게 사용됩니다.",
      optionsBreakdown: [
        "① ps -ef : 시스템의 모든 프로세스를 UID, PID, PPID, 명령어 전체 포맷으로 출력합니다. (정답)",
        "② kill -9 : 특정 PID를 가진 프로세스에 SIGKILL 시그널을 보내 강제 즉시 종료시키는 명령어입니다.",
        "③ netstat -an : 네트워크 소켓 및 열려있는 포트의 연결 상태를 숫자로 조회합니다.",
        "④ systemctl start : systemd 기반 데몬 서비스를 시작시키는 명령어입니다."
      ],
      devContext: "특정 웹 서버 프로세스가 살아있는지 확인할 때 실무에서는 `ps -ef | grep nginx` 또는 `pgrep -fl nginx` 형태로 파이프라인과 결합하여 점검합니다."
    },
    tags: ["linux", "ps", "process", "ps-ef", "system-admin"]
  },
  {
    id: "netadmin-20261101-030",
    category: "netadmin-linux",
    type: "multiple_choice",
    title: "네트워크 인터페이스 확인 명령어",
    question: "Linux(CentOS, Ubuntu 등) 시스템에서 로컬 호스트의 네트워크 인터페이스 설정 및 IP 할당 상태를 확인하기 위해 사용하는 최신 표준 iproute2 명령어는?",
    options: [
      "ip addr show",
      "ssh remote_host",
      "telnet localhost",
      "ftp localhost"
    ],
    answerIndex: 0,
    explanation: {
      definition: "과거 사용되던 net-tools의 `ifconfig` 명령어가 deprecated(지원 중단 예정)되면서, 현대 리눅스 배포판(RHEL/Rocky/Ubuntu)의 표준 네트워크 관리 도구 세트인 **iproute2**의 `ip addr show` (축약형 `ip a` 또는 `ip addr`) 명령어로 각 인터페이스의 IP 주소, 서브넷 마스크, MAC 주소, 상태(UP/DOWN)를 확인합니다.",
      optionsBreakdown: [
        "① ip addr show : 로컬 네트워크 인터페이스의 IP 설정 및 상태를 출력하는 최신 표준 명령어입니다. (정답)",
        "② ssh remote_host : 원격 Linux 서버에 보안 셸로 접속하는 원격 접속 도구입니다.",
        "③ telnet localhost : 23번 포트 등을 이용한 평문 원격 접속 및 포트 오픈 테스트 도구입니다.",
        "④ ftp localhost : FTP 서버에 접속하여 파일을 송수신하는 클라이언트 명령어입니다."
      ],
      devContext: "`iproute2` 유틸리티는 `ip addr`(IP 주소 관리), `ip route`(라우팅 테이블 조회 및 경로 추가), `ip link`(L2 인터페이스 활성화/비활성화) 등으로 구성됩니다."
    },
    tags: ["linux", "ip-addr", "iproute2", "network-interface", "networking"]
  },
  {
    id: "netadmin-20261101-031",
    category: "netadmin-linux",
    type: "multiple_choice",
    title: "Apache 웹 서버 환경 설정(httpd.conf)",
    question: "Linux 환경에서 Apache HTTP Server의 설정 파일인 `httpd.conf`에서 웹 서버가 클라이언트 요청을 수신(바인딩)할 IP 주소와 포트 번호를 지정하는 디렉티브(설정 옵션)는?",
    options: [
      "Listen",
      "ServerRoot",
      "DocumentRoot",
      "DirectoryIndex"
    ],
    answerIndex: 0,
    explanation: {
      definition: "Apache HTTP Server의 `httpd.conf` 주요 핵심 디렉티브:\n- `Listen` : 웹 서버 데몬이 인바운드 연결을 대기(Listen)할 IP 주소와 포트 번호를 지정 (예: `Listen 80`, `Listen 192.168.1.10:8080`)\n- `ServerRoot` : Apache 소프트웨어의 설정 파일, 로그, 모듈 등이 위치한 기본 설치 디렉터리 경로 (예: `/etc/httpd`)\n- `DocumentRoot` : 웹 페이지 파일(HTML, CSS, 이미지 등)을 서비스하는 최상위 웹 루트 디렉터리 경로 (예: `/var/www/html`)\n- `DirectoryIndex` : 클라이언트가 디렉터리 URL에 접근했을 때 기본으로 응답할 파일명 지정 (예: `index.html index.php`)",
      optionsBreakdown: [
        "① Listen : 웹 서버가 클라이언트 요청을 수신 대기할 IP와 포트 번호를 지정하는 설정 디렉티브입니다. (정답)",
        "② ServerRoot : Apache 설정 파일 및 서버 바이너리가 위치한 최상위 디렉터리를 지정합니다.",
        "③ DocumentRoot : 실제 사용자에게 제공되는 웹 문서들이 저장된 루트 디렉터리를 지정합니다.",
        "④ DirectoryIndex : 디렉터리 요청 시 기본으로 반환할 인덱스 문서명을 지정합니다."
      ],
      devContext: "SSL/TLS 적용 시 `httpd.conf` 또는 `ssl.conf`에 `Listen 443`을 선언하고, 가상 호스트(VirtualHost) 블록 내에 인증서 파일(`SSLCertificateFile`)을 연동합니다."
    },
    tags: ["linux", "apache", "httpd-conf", "listen", "web-server"]
  }
];

const targetPath = path.resolve("data/questions/netadmin.json");
fs.writeFileSync(targetPath, JSON.stringify(questions, null, 2), "utf-8");
console.log(`Successfully generated ${questions.length} netadmin questions at ${targetPath}`);

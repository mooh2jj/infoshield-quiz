import type { MindmapSection } from "@/types/mindmap";

export const generalMindmap: MindmapSection = {
  id: "general",
  title: "정보보호 일반",
  description: "암호화, 접근통제, 인증서버와 PKI",
  chart: `mindmap
  root((정보보호 일반))
    암호화 기초
      혼돈과 확산 원리
      스트림 암호 RC4 비트단위 빠름
      블록 암호 구조 Feistel DES SEED, SPN AES
      블록 암호 운용모드 ECB CBC CFB OFB CTR
      대표 알고리즘 DES 3DES AES SEED
    공개키 암호
      RSA 소인수분해
      ECC 타원곡선
      Diffie Hellman 키교환
    해시 함수
      단방향성과 고정길이 출력
      MD5 SHA1 SHA2
      생일자 공격
      충돌 저항성
    암호문 공격 유형
      암호문 단독 공격
      기지 평문 공격
      선택 평문 공격
      선택 암호문 공격
    접근통제
      인증 3요소 지식 소유 존재기반
      접근통제 모델 DAC MAC RBAC
      보안 모델 벨라파듈라 비바 클락윌슨
    인증서버와 PKI
      Kerberos AS TGS 티켓 기반
      SSO 통합인증
      PKI 구성요소 CA RA CRL
      PMI 속성 인증서
      전자서명 원리`,
  notes: [
    {
      term: "접근통제 모델",
      items: [
        "DAC — 신분 기반, 소유자가 자율적으로 권한 관리",
        "MAC — 객체 기반, 관리자가 강제적으로 권한 관리",
        "RBAC — 역할 기반, 역할에 권한을 부여하고 사용자에게 역할을 할당",
      ],
    },
    {
      term: "인증 3요소",
      items: [
        "지식 기반 — 패스워드 등 아는 것",
        "소유 기반 — OTP 등 가진 것",
        "존재 기반 — 생체인증, FRR·FAR·CER로 성능 평가",
      ],
    },
    {
      term: "블록 암호 운용 모드",
      items: [
        "ECB — 가장 단순, 병렬처리 가능하지만 패턴 노출",
        "CBC — 초기화 벡터 사용, 가장 널리 사용",
        "CFB — 순차적 암호화, 스트림처럼 사용",
        "CTR — 카운터를 사용해 병렬 암호화",
      ],
    },
    {
      term: "암호문 공격 4종",
      items: [
        "암호문 단독 공격 — 암호문만으로 분석",
        "기지 평문 공격 — 평문·암호문 쌍을 이미 알고 있음",
        "선택 평문 공격 — 평문을 선택해 암호문을 얻어냄",
        "선택 암호문 공격 — 암호문을 선택해 평문을 얻어냄",
      ],
    },
  ],
};

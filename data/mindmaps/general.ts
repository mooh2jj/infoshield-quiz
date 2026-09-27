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
      modeBox["블록 암호 운용모드<br/>1) ECB — 가장 단순, 병렬처리 가능<br/>2) CBC — 초기화 벡터 사용, 가장 널리 사용<br/>3) CFB — 순차적 암호화, 스트림처럼 사용<br/>4) OFB — 평문과 무관하게 키스트림 생성<br/>5) CTR — 카운터를 사용한 병렬 암호화"]
      대표 알고리즘 DES 3DES AES SEED
    pubKeyBox["공개키 암호 알고리즘<br/>1) RSA — 소인수분해 문제 기반<br/>2) ECC — 타원곡선 이산대수 문제, 짧은 키로도 안전<br/>3) Diffie Hellman — 키 교환 전용, 암호화 기능은 없음"]
    해시 함수
      단방향성과 고정길이 출력
      MD5 SHA1 SHA2
      생일자 공격
      충돌 저항성
    attackBox["암호문 공격 4종<br/>1) 암호문 단독 공격 — 암호문만으로 분석<br/>2) 기지 평문 공격 — 평문·암호문 쌍을 이미 알고 있음<br/>3) 선택 평문 공격 — 평문을 선택해 암호문을 얻어냄<br/>4) 선택 암호문 공격 — 암호문을 선택해 평문을 얻어냄"]
    접근통제
      acModelBox["접근통제 모델<br/>1) DAC — 신분 기반, 소유자가 자율적으로 권한 관리<br/>2) MAC — 객체 기반, 관리자가 강제적으로 권한 관리<br/>3) RBAC — 역할 기반, 역할에 권한 부여 후 사용자에 할당"]
      authBox["인증 3요소<br/>1) 지식 기반 — 패스워드 등 아는 것<br/>2) 소유 기반 — OTP 등 가진 것<br/>3) 존재 기반 — 생체인증, FRR·FAR·CER로 평가"]
      secModelBox["보안 모델 3종<br/>1) 벨라파듈라 — 기밀성 중심, No Read Up·No Write Down<br/>2) 비바 — 무결성 중심, No Read Down·No Write Up<br/>3) 클락윌슨 — 무결성 중심, 상업용 시스템의 직무분리"]
    인증서버와 PKI
      Kerberos AS TGS 티켓 기반
      SSO 통합인증
      PKI 구성요소 CA RA CRL
      PMI 속성 인증서
      전자서명 원리`,
};

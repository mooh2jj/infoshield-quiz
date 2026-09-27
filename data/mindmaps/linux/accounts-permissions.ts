import type { MindmapSection } from "@/types/mindmap";

export const accountsPermissionsMindmap: MindmapSection = {
  id: "accounts-permissions",
  title: "계정과 파일 권한",
  description: "사용자·그룹 관리, 기본·특수 권한, umask 계산",
  chart: `mindmap
  root((계정과 파일 권한))
    계정 설정 파일
      passwdBox["/etc/passwd 필드 구조(실기)<br/>1) 사용자명<br/>2) 패스워드 — x 표기, 실제 해시는 shadow에 보관<br/>3) UID — 0(root), 1~999(시스템), 1000+(일반)<br/>4) GID — 사용자의 기본 그룹 ID<br/>5) GECOS — 실제 이름 등 설명<br/>6) 홈 디렉터리 경로<br/>7) 로그인 셸 — 비로그인 계정은 /sbin/nologin"]
      shadowBox["/etc/shadow 필드 구조(실기)<br/>1) 사용자명<br/>2) 암호화된 패스워드 — $6$=SHA-512, */!=계정 잠금<br/>3) 최종 패스워드 변경일<br/>4) MIN — 최소 사용 일수<br/>5) MAX — 최대 사용 일수<br/>6) WARN — 만료 경고 일수<br/>7) INACTIVE — 만료 후 유예 기간<br/>8) EXPIRE — 계정 만료일<br/>9) 예약 필드"]
    계정 관리 명령어
      accountCmdBox["계정 관리 명령어(실기)<br/>1) useradd — -u -g -G -d -s -e -m<br/>2) usermod — -l -L -U, -aG는 기존 보조그룹을 유지하며 추가<br/>3) userdel — -r 옵션으로 홈 디렉터리까지 삭제<br/>4) passwd — -l -u -d<br/>5) chage — -l -M -m -W -E"]
      lockBox["계정 잠금 방법(실기)<br/>1) passwd -l / usermod -L — shadow 해시 앞에 !·* 를 붙여 인증 무효화<br/>2) chage -E 0 — 계정 만료일을 즉시로 설정해 잠금<br/>3) userdel에는 -l 옵션이 없음(계정을 삭제하는 명령어)"]
    파일 권한
      permBasicBox["기본 권한 관리<br/>1) chmod — 기호 모드(u/g/o/a, +/-/=), 8진수 모드(4/2/1)<br/>2) chown — 소유자 변경<br/>3) chgrp — 소유 그룹 변경"]
      specialPermBox["특수 권한(실기)<br/>1) SetUID(4000) — 실행 시 파일 소유자 권한으로 동작(예: /usr/bin/passwd)<br/>2) SetGID(2000) — 소유 그룹 권한으로 실행, 디렉터리에서는 하위 파일에 그룹 상속<br/>3) Sticky Bit(1000) — 공용 디렉터리에서 소유자·root만 삭제 가능<br/>4) 소유자 실행 권한 없이 SetUID가 설정되면 대문자 S로 표기"]
    umask 계산
      umaskBox["umask 권한 계산 원리(실기)<br/>1) 기본 권한(디렉터리 777, 파일 666)에서 umask를 AND NOT 연산<br/>2) 예: umask 022 → 디렉터리 755, 파일 644<br/>3) 홀수 umask(1,3,5,7)가 적용되면 실행 비트가 빠지며 짝수 권한으로 변환"]
      umaskCalcBox["umask 035 계산 예제(실기)<br/>1) 디렉터리 = 777 − 035 = 742<br/>2) 파일 소유자 = 6 − 0 = 6(rw-)<br/>3) 파일 그룹 = 6 AND NOT 3 = 4(r--)<br/>4) 파일 기타 = 6 AND NOT 5 = 2(-w-) → 파일 권한 642"]
    attrBox["파일 확장 속성<br/>1) chattr +i — 파일을 불변(Immutable) 상태로 설정<br/>2) chattr +a — 추가 전용(Append Only)으로 설정<br/>3) lsattr — 설정된 확장 속성을 확인"]`,
};

export type MindmapSectionId =
  | "computer-architecture"
  | "os"
  | "system"
  | "network"
  | "application"
  | "general"
  | "law";

export interface MindmapSection {
  id: MindmapSectionId;
  title: string;
  description: string;
  chart: string;
}

export const MINDMAP_SECTION_LABELS: Record<MindmapSectionId, string> = {
  "computer-architecture": "컴퓨터 구조",
  os: "운영체제",
  system: "시스템 보안",
  network: "네트워크 보안",
  application: "애플리케이션 보안",
  general: "정보보호 일반",
  law: "정보보호 관리 및 법규",
};

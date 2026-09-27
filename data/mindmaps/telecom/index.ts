import type { MindmapSection } from "@/types/mindmap";
import { transmissionGeneralMindmap } from "@/data/mindmaps/telecom/transmission-general";
import { communicationEquipmentMindmap } from "@/data/mindmaps/telecom/communication-equipment";
import { communicationNetworkMindmap } from "@/data/mindmaps/telecom/communication-network";
import { systemOperationsMindmap } from "@/data/mindmaps/telecom/system-operations";
import { computerGeneralStandardsMindmap } from "@/data/mindmaps/telecom/computer-general-standards";

export const TELECOM_MINDMAP_SECTIONS: MindmapSection[] = [
  transmissionGeneralMindmap,
  communicationEquipmentMindmap,
  communicationNetworkMindmap,
  systemOperationsMindmap,
  computerGeneralStandardsMindmap,
];

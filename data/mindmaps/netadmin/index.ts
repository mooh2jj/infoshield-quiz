import type { MindmapSection } from "@/types/mindmap";
import { networkFundamentalsMindmap } from "@/data/mindmaps/netadmin/network-fundamentals";
import { tcpipProtocolsMindmap } from "@/data/mindmaps/netadmin/tcpip-protocols";
import { nosMindmap } from "@/data/mindmaps/netadmin/nos";
import { networkEquipmentMindmap } from "@/data/mindmaps/netadmin/network-equipment";
import { securityFundamentalsMindmap } from "@/data/mindmaps/netadmin/security-fundamentals";

export const NETADMIN_MINDMAP_SECTIONS: MindmapSection[] = [
  networkFundamentalsMindmap,
  tcpipProtocolsMindmap,
  nosMindmap,
  networkEquipmentMindmap,
  securityFundamentalsMindmap,
];

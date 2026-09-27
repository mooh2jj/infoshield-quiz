import type { MindmapSection } from "@/types/mindmap";
import { computerArchitectureMindmap } from "@/data/mindmaps/computer-architecture";
import { osMindmap } from "@/data/mindmaps/os";
import { systemMindmap } from "@/data/mindmaps/system";
import { networkMindmap } from "@/data/mindmaps/network";
import { applicationMindmap } from "@/data/mindmaps/application";
import { generalMindmap } from "@/data/mindmaps/general";
import { lawMindmap } from "@/data/mindmaps/law";

export const MINDMAP_SECTIONS: MindmapSection[] = [
  computerArchitectureMindmap,
  osMindmap,
  systemMindmap,
  networkMindmap,
  applicationMindmap,
  generalMindmap,
  lawMindmap,
];

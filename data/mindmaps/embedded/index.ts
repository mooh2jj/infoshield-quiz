import type { MindmapSection } from "@/types/mindmap";
import { hardwareMindmap } from "@/data/mindmaps/embedded/hardware";
import { firmwareMindmap } from "@/data/mindmaps/embedded/firmware";
import { platformMindmap } from "@/data/mindmaps/embedded/platform";
import { softwareMindmap } from "@/data/mindmaps/embedded/software";

export const EMBEDDED_MINDMAP_SECTIONS: MindmapSection[] = [
  hardwareMindmap,
  firmwareMindmap,
  platformMindmap,
  softwareMindmap,
];

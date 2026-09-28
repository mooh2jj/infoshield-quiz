import type { MindmapSection } from "@/types/mindmap";
import { understandingMindmap } from "@/data/mindmaps/cppg/understanding";
import { legalSystemMindmap } from "@/data/mindmaps/cppg/legal-system";
import { lifecycleMindmap } from "@/data/mindmaps/cppg/lifecycle";
import { safeguardsMindmap } from "@/data/mindmaps/cppg/safeguards";
import { governanceMindmap } from "@/data/mindmaps/cppg/governance";

export const CPPG_MINDMAP_SECTIONS: MindmapSection[] = [
  understandingMindmap,
  legalSystemMindmap,
  lifecycleMindmap,
  safeguardsMindmap,
  governanceMindmap,
];

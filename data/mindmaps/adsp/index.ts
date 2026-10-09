import type { MindmapSection } from "@/types/mindmap";
import { adspUnderstandingMindmap } from "./understanding";
import { adspPlanningMindmap } from "./planning";
import { adspAnalysisMindmap } from "./analysis";

export const ADSP_MINDMAP_SECTIONS: MindmapSection[] = [
  adspUnderstandingMindmap,
  adspPlanningMindmap,
  adspAnalysisMindmap,
];

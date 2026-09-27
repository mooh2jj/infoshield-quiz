import type { MindmapSection } from "@/types/mindmap";
import { planningMindmap } from "@/data/mindmaps/bigdata/planning";
import { explorationMindmap } from "@/data/mindmaps/bigdata/exploration";
import { modelingMindmap } from "@/data/mindmaps/bigdata/modeling";
import { evaluationMindmap } from "@/data/mindmaps/bigdata/evaluation";
import { practicalMindmap } from "@/data/mindmaps/bigdata/practical";

export const BIGDATA_MINDMAP_SECTIONS: MindmapSection[] = [
  planningMindmap,
  explorationMindmap,
  modelingMindmap,
  evaluationMindmap,
  practicalMindmap,
];

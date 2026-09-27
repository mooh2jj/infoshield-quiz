import type { MindmapSection } from "@/types/mindmap";
import { securityMindmap } from "@/data/mindmaps/aws-saa/security";
import { resilientMindmap } from "@/data/mindmaps/aws-saa/resilient";
import { highPerformingMindmap } from "@/data/mindmaps/aws-saa/high-performing";
import { costOptimizedMindmap } from "@/data/mindmaps/aws-saa/cost-optimized";

export const AWS_SAA_MINDMAP_SECTIONS: MindmapSection[] = [
  securityMindmap,
  resilientMindmap,
  highPerformingMindmap,
  costOptimizedMindmap,
];

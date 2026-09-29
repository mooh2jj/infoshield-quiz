import type { MindmapSection } from "@/types/mindmap";
import { dataExplorationMindmap } from "@/data/mindmaps/aice/data-exploration";
import { preprocessingMindmap } from "@/data/mindmaps/aice/preprocessing";
import { mlModelingMindmap } from "@/data/mindmaps/aice/ml-modeling";
import { dlModelingMindmap } from "@/data/mindmaps/aice/dl-modeling";

export const AICE_MINDMAP_SECTIONS: MindmapSection[] = [
  dataExplorationMindmap,
  preprocessingMindmap,
  mlModelingMindmap,
  dlModelingMindmap,
];

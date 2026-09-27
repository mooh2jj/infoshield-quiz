import type { MindmapSection } from "@/types/mindmap";
import { softwareDesignMindmap } from "@/data/mindmaps/processing/software-design";
import { softwareDevelopmentMindmap } from "@/data/mindmaps/processing/software-development";
import { databaseMindmap } from "@/data/mindmaps/processing/database";
import { programmingOsMindmap } from "@/data/mindmaps/processing/programming-os";
import { projectSecurityMindmap } from "@/data/mindmaps/processing/project-security";

export const PROCESSING_MINDMAP_SECTIONS: MindmapSection[] = [
  softwareDesignMindmap,
  softwareDevelopmentMindmap,
  databaseMindmap,
  programmingOsMindmap,
  projectSecurityMindmap,
];

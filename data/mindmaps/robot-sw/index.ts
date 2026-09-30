import type { MindmapSection } from "@/types/mindmap";
import { operatingSoftwareMindmap } from "@/data/mindmaps/robot-sw/operating-software";
import { architectureDesignMindmap } from "@/data/mindmaps/robot-sw/architecture-design";
import { motionSoftwareMindmap } from "@/data/mindmaps/robot-sw/motion-software";
import { intelligenceSoftwareMindmap } from "@/data/mindmaps/robot-sw/intelligence-software";

export const ROBOT_SW_MINDMAP_SECTIONS: MindmapSection[] = [
  operatingSoftwareMindmap,
  architectureDesignMindmap,
  motionSoftwareMindmap,
  intelligenceSoftwareMindmap,
];

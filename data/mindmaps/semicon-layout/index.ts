import type { MindmapSection } from "@/types/mindmap";
import { semiconductorPhysicsMindmap } from "@/data/mindmaps/semicon-layout/semiconductor-physics";
import { circuitDesignMindmap } from "@/data/mindmaps/semicon-layout/circuit-design";
import { icDesignVerificationMindmap } from "@/data/mindmaps/semicon-layout/ic-design-verification";
import { layoutPracticalMindmap } from "@/data/mindmaps/semicon-layout/layout-practical";

export const SEMICON_LAYOUT_MINDMAP_SECTIONS: MindmapSection[] = [
  semiconductorPhysicsMindmap,
  circuitDesignMindmap,
  icDesignVerificationMindmap,
  layoutPracticalMindmap,
];

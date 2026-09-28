import type { MindmapSection } from "@/types/mindmap";
import { electromagneticsMindmap } from "@/data/mindmaps/electronics/electromagnetics";
import { digitalEmbeddedMindmap } from "@/data/mindmaps/electronics/digital-embedded";
import { analogPowerMindmap } from "@/data/mindmaps/electronics/analog-power";
import { signalIntegrityEmcMindmap } from "@/data/mindmaps/electronics/signal-integrity-emc";
import { dfmPracticalMindmap } from "@/data/mindmaps/electronics/dfm-practical";

export const ELECTRONICS_MINDMAP_SECTIONS: MindmapSection[] = [
  electromagneticsMindmap,
  digitalEmbeddedMindmap,
  analogPowerMindmap,
  signalIntegrityEmcMindmap,
  dfmPracticalMindmap,
];

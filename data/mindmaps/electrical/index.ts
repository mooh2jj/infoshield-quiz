import type { MindmapSection } from "@/types/mindmap";
import { electromagneticsMindmap } from "@/data/mindmaps/electrical/electromagnetics";
import { powerEngineeringMindmap } from "@/data/mindmaps/electrical/power-engineering";
import { electricalMachinesMindmap } from "@/data/mindmaps/electrical/electrical-machines";
import { circuitControlMindmap } from "@/data/mindmaps/electrical/circuit-control";
import { kecStandardsMindmap } from "@/data/mindmaps/electrical/kec-standards";

export const ELECTRICAL_MINDMAP_SECTIONS: MindmapSection[] = [
  electromagneticsMindmap,
  powerEngineeringMindmap,
  electricalMachinesMindmap,
  circuitControlMindmap,
  kecStandardsMindmap,
];

import type { MindmapSection } from "@/types/mindmap";
import { itpeStrategyMindmap } from "./strategy";
import { itpeSwEngMindmap } from "./sw-eng";
import { itpeDatabaseMindmap } from "./database";
import { itpeSystemNwMindmap } from "./system-nw";
import { itpeSecurityMindmap } from "./security";
import { itpeAiLawMindmap } from "./ai-law";

export const ITPE_MINDMAP_SECTIONS: MindmapSection[] = [
  itpeStrategyMindmap,
  itpeSwEngMindmap,
  itpeDatabaseMindmap,
  itpeSystemNwMindmap,
  itpeSecurityMindmap,
  itpeAiLawMindmap,
];

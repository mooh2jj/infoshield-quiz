import type { MindmapSection } from "@/types/mindmap";
import { modelingMindmap } from "@/data/mindmaps/sqld/modeling";
import { sqlBasicMindmap } from "@/data/mindmaps/sqld/sql-basic";
import { sqlJoinMindmap } from "@/data/mindmaps/sqld/sql-join";
import { sqlAdvancedMindmap } from "@/data/mindmaps/sqld/sql-advanced";

export const SQLD_MINDMAP_SECTIONS: MindmapSection[] = [
  modelingMindmap,
  sqlBasicMindmap,
  sqlJoinMindmap,
  sqlAdvancedMindmap,
];

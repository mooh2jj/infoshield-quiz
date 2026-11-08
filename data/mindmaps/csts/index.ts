import type { MindmapSection } from "@/types/mindmap";
import { principlesProcessMindmap } from "./principles-process";
import { staticTestingMindmap } from "./static-testing";
import { blackboxTestingMindmap } from "./blackbox-testing";
import { whiteboxTestingMindmap } from "./whitebox-testing";
import { managementQualityMindmap } from "./management-quality";

export const CSTS_MINDMAP_SECTIONS: MindmapSection[] = [
  principlesProcessMindmap,
  staticTestingMindmap,
  blackboxTestingMindmap,
  whiteboxTestingMindmap,
  managementQualityMindmap,
];

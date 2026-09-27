import type { MindmapSection } from "@/types/mindmap";
import { accountsPermissionsMindmap } from "@/data/mindmaps/linux/accounts-permissions";
import { filesystemShellMindmap } from "@/data/mindmaps/linux/filesystem-shell";
import { processSchedulingMindmap } from "@/data/mindmaps/linux/process-scheduling";
import { packageNetworkMindmap } from "@/data/mindmaps/linux/package-network";
import { xwindowSecurityMindmap } from "@/data/mindmaps/linux/xwindow-security";

export const LINUX_MINDMAP_SECTIONS: MindmapSection[] = [
  accountsPermissionsMindmap,
  filesystemShellMindmap,
  processSchedulingMindmap,
  packageNetworkMindmap,
  xwindowSecurityMindmap,
];

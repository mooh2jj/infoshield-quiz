import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = total === 0 ? 0 : Math.round((current / total) * 100);
  return (
    <div className="flex items-center gap-3">
      <Progress value={percent} className="h-2 flex-1" />
      <span className="text-xs tabular-nums text-muted-foreground">
        {current}/{total}
      </span>
    </div>
  );
}

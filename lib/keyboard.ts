import { useEffect } from "react";

interface KeyboardShortcutHandlers {
  onEnter?: () => void;
  onHint?: () => void;
}

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.tagName === "INPUT" || target.tagName === "TEXTAREA";
}

export function useKeyboardShortcuts({
  onEnter,
  onHint,
}: KeyboardShortcutHandlers) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (isTypingTarget(event.target)) return;
      if (event.key === "Enter") onEnter?.();
      if (event.key === "h" || event.key === "H") onHint?.();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEnter, onHint]);
}

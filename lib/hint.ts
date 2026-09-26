export function buildHint(termAnswers: string[]): string {
  const primary = (termAnswers[0] ?? "").trim();
  if (!primary) return "";
  return `첫 글자 "${primary.charAt(0)}" · 총 ${primary.length}자`;
}

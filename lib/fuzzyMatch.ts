function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function isTermAnswerCorrect(
  input: string,
  termAnswers: string[]
): boolean {
  const normalizedInput = normalize(input);
  if (!normalizedInput) return false;
  return termAnswers.some((answer) => normalize(answer) === normalizedInput);
}

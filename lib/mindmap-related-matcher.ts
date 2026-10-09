import { SECURITY_PRACTICAL_QUESTIONS } from "@/data/practical/security";
import type { PracticalQuestion } from "@/data/practical/types";
import type { MindmapNodeNote } from "@/types/mindmap";

/**
 * 마인드맵 노드 메모와 연관된 실기 모의고사 문제를 최대 maxCount(기본 2)개 선별합니다.
 */
export function getRelatedPracticalQuestions(
  note: MindmapNodeNote,
  matchedKey?: string,
  maxCount: number = 2
): PracticalQuestion[] {
  const result: PracticalQuestion[] = [];
  const addedIds = new Set<number>();

  // 1. 명시적으로 지정된 연관 문제 ID가 있는 경우 우선 반영
  if (note.relatedQuestionIds && note.relatedQuestionIds.length > 0) {
    for (const qId of note.relatedQuestionIds) {
      const found = SECURITY_PRACTICAL_QUESTIONS.find((q) => q.id === qId);
      if (found && !addedIds.has(found.id)) {
        result.push(found);
        addedIds.add(found.id);
        if (result.length >= maxCount) {
          return result;
        }
      }
    }
  }

  // 2. 검색 키워드 토큰 목록 생성
  const searchTokens: { token: string; weight: number }[] = [];

  if (matchedKey && matchedKey.trim().length >= 2) {
    searchTokens.push({ token: matchedKey.trim().toLowerCase(), weight: 15 });
  }

  // 제목에서 주요 키워드 추출 (괄호 안의 영문 등 분리)
  const titleClean = note.title
    .replace(/[()[\]{}]/g, " ")
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length >= 2 && !["대해", "관한", "위한", "통한", "및"].includes(w));

  for (const word of titleClean) {
    searchTokens.push({ token: word, weight: 6 });
  }

  if (note.badge) {
    const badgeClean = note.badge
      .replace(/[()[\]{}]/g, " ")
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length >= 2);
    for (const word of badgeClean) {
      searchTokens.push({ token: word, weight: 3 });
    }
  }

  if (searchTokens.length === 0) {
    return result;
  }

  // 3. 실기 문제 풀에서 유사도 점수 산출
  interface ScoredQuestion {
    question: PracticalQuestion;
    score: number;
  }

  const scoredList: ScoredQuestion[] = [];

  for (const q of SECURITY_PRACTICAL_QUESTIONS) {
    if (addedIds.has(q.id)) continue;

    const qTitle = q.title.toLowerCase();
    const qDomain = q.domain.toLowerCase();
    const qDesc = q.description.toLowerCase();
    const qAnswer = (Array.isArray(q.answer) ? q.answer.join(" ") : q.answer).toLowerCase();

    let score = 0;

    for (const { token, weight } of searchTokens) {
      if (qTitle.includes(token)) {
        score += weight * 3;
      }
      if (qDomain.includes(token)) {
        score += weight * 2;
      }
      if (qDesc.includes(token)) {
        score += weight * 1.5;
      }
      if (qAnswer.includes(token)) {
        score += weight * 2;
      }
    }

    if (score >= 6) {
      scoredList.push({ question: q, score });
    }
  }

  // 점수 높은 순으로 정렬
  scoredList.sort((a, b) => b.score - a.score);

  // 부족한 슬롯만큼 상위 문제 추가
  for (const item of scoredList) {
    result.push(item.question);
    addedIds.add(item.question.id);
    if (result.length >= maxCount) {
      break;
    }
  }

  return result;
}

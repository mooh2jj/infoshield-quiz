import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const questionsDir = path.join(__dirname, "..", "data", "questions");

const VALID_CATEGORIES = [
  "system",
  "network",
  "application",
  "general",
  "law",
  "aws-security",
  "aws-resilient",
  "aws-performance",
  "aws-cost",
  "bigdata-planning",
  "bigdata-exploration",
  "bigdata-modeling",
  "bigdata-evaluation",
  "sqld-modeling",
  "sqld-sql",
  "adsp-understanding",
  "adsp-planning",
  "adsp-analysis",
];
const VALID_TYPES = ["multiple_choice", "term_identification"];

const files = readdirSync(questionsDir).filter((f) => f.endsWith(".json"));

let errorCount = 0;
const seenIds = new Set();

function fail(file, id, message) {
  errorCount += 1;
  console.error(`✗ [${file}] ${id ?? "?"}: ${message}`);
}

for (const file of files) {
  const filePath = path.join(questionsDir, file);
  const items = JSON.parse(readFileSync(filePath, "utf-8"));

  if (!Array.isArray(items)) {
    fail(file, null, "파일 내용이 배열이 아닙니다.");
    continue;
  }

  for (const item of items) {
    const { id } = item;

    if (!id || seenIds.has(id)) {
      fail(file, id, "id가 없거나 중복되었습니다.");
    }
    seenIds.add(id);

    if (!VALID_CATEGORIES.includes(item.category)) {
      fail(file, id, `category 값이 올바르지 않습니다: ${item.category}`);
    }
    if (!VALID_TYPES.includes(item.type)) {
      fail(file, id, `type 값이 올바르지 않습니다: ${item.type}`);
    }
    if (!item.title || !item.question) {
      fail(file, id, "title 또는 question이 비어 있습니다.");
    }
    if (!item.tags || item.tags.length === 0) {
      fail(file, id, "tags가 비어 있습니다.");
    }

    if (item.type === "multiple_choice") {
      if (!Array.isArray(item.options) || item.options.length !== 4) {
        fail(file, id, "multiple_choice는 options 4개가 필요합니다.");
      }
      if (
        typeof item.answerIndex !== "number" ||
        item.answerIndex < 0 ||
        item.answerIndex > 3
      ) {
        fail(file, id, "answerIndex는 0~3 사이의 값이어야 합니다.");
      }
    }

    if (item.type === "term_identification") {
      if (!Array.isArray(item.termAnswers) || item.termAnswers.length === 0) {
        fail(file, id, "term_identification은 termAnswers가 1개 이상 필요합니다.");
      }
    }

    if (!item.explanation || !item.explanation.definition) {
      fail(file, id, "explanation.definition이 비어 있습니다.");
    }
    if (!item.explanation || !item.explanation.devContext) {
      fail(file, id, "explanation.devContext가 비어 있습니다.");
    }
  }
}

if (errorCount > 0) {
  console.error(`\n총 ${errorCount}개의 오류가 발견되었습니다.`);
  process.exit(1);
} else {
  console.log(`✔ 모든 문항(${seenIds.size}개) 검증 통과.`);
}

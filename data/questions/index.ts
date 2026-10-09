import type { QuizItem, SubjectCategory } from "@/types/quiz";
import system from "./system.json";
import network from "./network.json";
import application from "./application.json";
import general from "./general.json";
import law from "./law.json";
import awsSaa from "./aws-saa.json";
import bigdata from "./bigdata.json";
import sqld from "./sqld.json";
import adsp from "./adsp.json";

export const QUESTIONS_BY_CATEGORY: Record<SubjectCategory, QuizItem[]> = {
  system: system as QuizItem[],
  network: network as QuizItem[],
  application: application as QuizItem[],
  general: general as QuizItem[],
  law: law as QuizItem[],
  "aws-security": (awsSaa as QuizItem[]).filter(
    (item) => item.category === "aws-security"
  ),
  "aws-resilient": (awsSaa as QuizItem[]).filter(
    (item) => item.category === "aws-resilient"
  ),
  "aws-performance": (awsSaa as QuizItem[]).filter(
    (item) => item.category === "aws-performance"
  ),
  "aws-cost": (awsSaa as QuizItem[]).filter(
    (item) => item.category === "aws-cost"
  ),
  "bigdata-planning": (bigdata as QuizItem[]).filter(
    (item) => item.category === "bigdata-planning"
  ),
  "bigdata-exploration": (bigdata as QuizItem[]).filter(
    (item) => item.category === "bigdata-exploration"
  ),
  "bigdata-modeling": (bigdata as QuizItem[]).filter(
    (item) => item.category === "bigdata-modeling"
  ),
  "bigdata-evaluation": (bigdata as QuizItem[]).filter(
    (item) => item.category === "bigdata-evaluation"
  ),
  "sqld-modeling": (sqld as QuizItem[]).filter(
    (item) => item.category === "sqld-modeling"
  ),
  "sqld-sql": (sqld as QuizItem[]).filter(
    (item) => item.category === "sqld-sql"
  ),
  "adsp-understanding": (adsp as QuizItem[]).filter(
    (item) => item.category === "adsp-understanding"
  ),
  "adsp-planning": (adsp as QuizItem[]).filter(
    (item) => item.category === "adsp-planning"
  ),
  "adsp-analysis": (adsp as QuizItem[]).filter(
    (item) => item.category === "adsp-analysis"
  ),
};

export const ALL_QUESTIONS: QuizItem[] = Object.values(
  QUESTIONS_BY_CATEGORY
).flat();

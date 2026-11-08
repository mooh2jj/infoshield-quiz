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
import netadmin from "./netadmin.json";
import csts from "./csts.json";

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
  "adsp-past": (adsp as QuizItem[]).filter(
    (item) => item.category === "adsp-past"
  ),
  "netadmin-general": (netadmin as QuizItem[]).filter(
    (item) => item.category === "netadmin-general"
  ),
  "netadmin-devices": (netadmin as QuizItem[]).filter(
    (item) => item.category === "netadmin-devices"
  ),
  "netadmin-windows": (netadmin as QuizItem[]).filter(
    (item) => item.category === "netadmin-windows"
  ),
  "netadmin-linux": (netadmin as QuizItem[]).filter(
    (item) => item.category === "netadmin-linux"
  ),
  "netadmin-past": netadmin as QuizItem[],
  "csts-principles": (csts as QuizItem[]).filter(
    (item) => item.category === "csts-principles"
  ),
  "csts-static": (csts as QuizItem[]).filter(
    (item) => item.category === "csts-static"
  ),
  "csts-blackbox": (csts as QuizItem[]).filter(
    (item) => item.category === "csts-blackbox"
  ),
  "csts-whitebox": (csts as QuizItem[]).filter(
    (item) => item.category === "csts-whitebox"
  ),
  "csts-management": (csts as QuizItem[]).filter(
    (item) => item.category === "csts-management"
  ),
  "csts-past": csts as QuizItem[],
};

export const ALL_QUESTIONS: QuizItem[] = Object.values(
  QUESTIONS_BY_CATEGORY
).flat();

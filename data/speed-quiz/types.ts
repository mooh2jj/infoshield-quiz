export interface SpeedQuizChapter {
  id: string;
  name: string;
  shortName: string;
}

export interface SpeedQuizItem {
  id: number;
  chapterId: string;
  chapterName: string;
  question: string;
  answer: string;
}

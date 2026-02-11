export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  scores: Record<string, number>;
}

export interface PersonalityType {
  id: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
  dimensions: Record<string, number>;
  advice: string;
}

export type AppState = 'welcome' | 'quiz' | 'loading' | 'result';

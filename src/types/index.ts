export type Category = {
  id: number;
  name: string;
};

export type CategoriesResponse = {
  trivia_categories: Category[] | null;
};

export type CategoryItem = Category & {
  handleClick: (id: number) => void;
  selected: boolean;
};

export type ButtonVariant = "primary" | "secondary" | "skeleton";

type TriviaQuestion = {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type TriviaResponse = {
  response_code: number;
  results: TriviaQuestion[];
};

export type DistributionItem = {
  name: string;
  value: number;
  percentage?: number;
};

export interface DistributionByProps {
  data: DistributionItem[];
}

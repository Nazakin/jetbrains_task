
export type Category = {
  id?: number;
  name: string;
};

export type CategoriesResponse = {
  trivia_categories: Category[] | null;
};
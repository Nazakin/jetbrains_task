import { useFetch } from "../hooks/useFetch";
import { TriviaResponse, CategoriesResponse } from "../types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const useFetchQuestions = (categoryId?: number) => {
  const category = categoryId ? `&category=${categoryId}` : "";
  const url = `${BASE_URL}api.php?amount=50${category}`;
  return useFetch<TriviaResponse>(url);
};

export const useFetchCategories = () => {
  const url = `${BASE_URL}api_category.php`;
  return useFetch<CategoriesResponse>(url);
};

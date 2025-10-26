import React, { useMemo } from "react";
import { useFetch } from "../../hooks/useFetch";
import DistributionByDifficulty from "../DistributionByDifficulty/DistributionByDifficulty";
import DistributionByCategory from "../DistributionByCategory/DistributionByCategory";
import DistributionByType from "../DistributionByType/DistributionByType";
import styles from "./Statistics.module.css";
import { TriviaResponse } from "../../types";

type Props = {
  categoryId: number;
};

type GroupedData = { name: string; value: number };

const Statistics: React.FC<Props> = ({ categoryId }) => {
  const BASE_URL = "https://opentdb.com/api.php?amount=50";
  const category = categoryId ? `&category=${categoryId}` : "";
  const { data, error, loading } = useFetch<TriviaResponse>(BASE_URL + category);

  const difficultyData = useMemo<GroupedData[]>(() => {
    if (!data?.results) return [];
    return ["easy", "medium", "hard"].map((level) => ({
      name: level,
      value: data.results.filter((q) => q.difficulty === level).length,
    }));
  }, [data]);

  const categoryData = useMemo<GroupedData[]>(() => {
    if (!data?.results || categoryId !== 0) return [];
    const map = new Map<string, number>();
    data.results.forEach((q) =>
      map.set(q.category, (map.get(q.category) || 0) + 1)
    );
    return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
  }, [data, categoryId]);

  const typeData = useMemo<GroupedData[]>(() => {
    if (!data?.results) return [];
    const map = new Map<string, number>();
    data.results.forEach((q) =>
      map.set(q.type, (map.get(q.type) || 0) + 1)
    );
    return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
  }, [data]);

  if (loading) return <p className={styles.message}>Loading statistics...</p>;
  if (error) return <p className={styles.message}>Failed to load statistics.</p>;
  if (!data?.results?.length) return <p className={styles.message}>No data available for this category.</p>;

  return (
    <div className={styles.container}>
      {categoryId === 0 && <DistributionByCategory data={categoryData} />}
      <DistributionByDifficulty data={difficultyData} />
      <DistributionByType data={typeData} />
    </div>
  );
};

export default Statistics;

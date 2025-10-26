import React, { useMemo } from "react";
import DistributionByDifficulty from "../DistributionByDifficulty/DistributionByDifficulty";
import DistributionByCategory from "../DistributionByCategory/DistributionByCategory";
import DistributionByType from "../DistributionByType/DistributionByType";
import styles from "./Statistics.module.css";
import { GroupedData } from "../../types";
import { cleanName } from "../../utils/cleanName";
import Skeleton from "../Skeleton/Skeleton";
import { useFetchQuestions } from "../../api/api";

type Props = {
  categoryId: number;
};

const Statistics: React.FC<Props> = ({ categoryId }) => {
  const { data, loading, error } = useFetchQuestions(categoryId);

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
      map.set(q.category, (map.get(q.category) || 0) + 1),
    );

    return Array.from(map.entries()).map(([name, value]) => ({
      name: cleanName(name),
      value,
    }));
  }, [data, categoryId]);

  const typeData = useMemo<GroupedData[]>(() => {
    if (!data?.results) return [];

    const map = new Map<string, number>();
    data.results.forEach((q) => {
      map.set(q.type, (map.get(q.type) || 0) + 1);
    });

    return Array.from(map.entries()).map(([name, value]) => {
      const displayName =
        name === "boolean"
          ? "True / False"
          : name === "multiple"
            ? "Multiple Answers"
            : name;
      return { name: displayName, value };
    });
  }, [data]);

  if (error)
    return <p className={styles.message}>Failed to load statistics.</p>;
  if (!data?.results?.length)
    return (
      <p className={styles.message}>No data available for this category.</p>
    );

  return (
    <div className={styles.container}>
      {loading ? (
        [1, 2, 3].map((item) => <Skeleton key={item} />)
      ) : (
        <>
          {categoryId === 0 && <DistributionByCategory data={categoryData} />}
          <DistributionByDifficulty data={difficultyData} />
          <DistributionByType data={typeData} />
        </>
      )}
    </div>
  );
};

export default Statistics;

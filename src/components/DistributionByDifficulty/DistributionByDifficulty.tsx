import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styles from "./DistributionByDifficulty.module.css";

type DifficultyItem = {
  name: string;
  value: number;
  percentage?: number;
};

interface DistributionByDifficultyProps {
  data: DifficultyItem[];
}

const COLORS = {
  easy: "#10b981",
  medium: "#f59e0b",
  hard: "#ef4444",
};

const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return COLORS.easy;
    case "medium":
      return COLORS.medium;
    case "hard":
      return COLORS.hard;
    default:
      return "#6b7280";
  }
};

const DistributionByDifficulty: React.FC<DistributionByDifficultyProps> = ({ data }) => {
  if (!data?.length) {
    return <p className={styles.noData}>No data available</p>;
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Distribution by Difficulty</h3>

      <div className={styles.chartWrapper}>
        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={getDifficultyColor(entry.name)}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "13px",
                }}
                cursor={{ fill: "#f3f4f6" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.legend}>
          {data.map((item) => (
            <div key={item.name} className={styles.legendItem}>
              <span
                className={styles.legendColor}
                style={{ backgroundColor: getDifficultyColor(item.name) }}
              />
              <span className={styles.legendText}>
                {item.name}: {item.value}
                {item.percentage !== undefined && ` (${item.percentage}%)`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistributionByDifficulty;

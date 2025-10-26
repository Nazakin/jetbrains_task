import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styles from "./DistributionByType.module.css";
import { TYPE_COLORS } from "../../consts";
import { DistributionByProps } from "../../types";

const DistributionByType: React.FC<DistributionByProps> = ({ data }) => {
  if (!data?.length) {
    return <p className={styles.message}>No type data available.</p>;
  }

  const transformedData = [
    {
      name: "Question Types",
      ...Object.fromEntries(data.map((d) => [d.name, d.value])),
    },
  ];

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Distribution by Type</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />

          {data.map((d) => (
            <Bar
              key={d.name}
              dataKey={d.name}
              stackId="a"
              fill={
                d.name === "Multiple Answers"
                  ? TYPE_COLORS.multiple
                  : TYPE_COLORS.boolean
              }
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DistributionByType;

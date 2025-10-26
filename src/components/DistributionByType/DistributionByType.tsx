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

type Props = {
  data: { name: string; value: number }[];
};

const DistributionByType: React.FC<Props> = ({ data }) => {
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
              fill={d.name === "multiple" ? "#4f46e5" : "#10b981"}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DistributionByType;

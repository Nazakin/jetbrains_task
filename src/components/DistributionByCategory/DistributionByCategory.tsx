import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./DistributionByCategory.module.css";
import { CATEGORY_COLORS } from "../../consts";
import { DistributionByProps } from "../../types";

const DistributionByCategory: React.FC<DistributionByProps> = ({ data }) => {
  if (!data?.length) {
    return <p className={styles.noData}>No data available</p>;
  }

  console.log(data)

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Questions by Category</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            angle={-45}
            textAnchor="end"
            height={125}
          />
          <YAxis tick={{ fontSize: 12, fill: "#6b7280" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              fontSize: "13px",
            }}
            cursor={{ fill: "#f3f4f6" }}
          />
          <Bar dataKey="value" fill={CATEGORY_COLORS.bar} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DistributionByCategory;

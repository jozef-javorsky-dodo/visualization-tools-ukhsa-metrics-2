"use client";

import React, { useState } from "react";
import { Card, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import LineChart from "./LineChart";

interface ChartData {
  date: string;
  value: number;
}

interface ChartCardProps {
  title: string;
  data: ChartData[];
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card
      title={title}
      extra={
        <Button
          icon={isFavorite ? <HeartFilled /> : <HeartOutlined />}
          onClick={handleFavoriteClick}
          style={{ color: isFavorite ? "red" : "gray" }}
        />
      }
      style={{ borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
    >
      <LineChart data={data} title={title} />
    </Card>
  );
};

export default ChartCard;

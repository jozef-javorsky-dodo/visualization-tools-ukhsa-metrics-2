"use client";

import React, { useState } from "react";
import LineChart from "./LineChart";

interface ChartData {
  theme: string;
  sub_theme: string;
  month: number;
  epiweek: number;
  date: string;
  metric_value: number;
}

interface ChartCardProps {
  title: string;
  data: ChartData[];
  id: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-4 relative ${
        isFavorite ? "border-2 border-red-500" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          onClick={handleFavoriteClick}
          className={`text-gray-500 hover:text-red-500 ${
            isFavorite ? "text-red-500" : ""
          }`}
        >
          {isFavorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.645 2.207a.75.75 0 00-1.06 0l-7.5 7.5a.75.75 0 000 1.06l7.5 7.5a.75.75 0 001.06 0l7.5-7.5a.75.75 0 000-1.06l-7.5-7.5a.75.75 0 00-1.06 0zM12 15.75l-6-6 1.5-1.5 4.5 4.5 4.5-4.5 1.5 1.5-6 6z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.015-4.5-4.5-4.5H5.25c-2.485 0-4.5 2.015-4.5 4.5v8.25c0 2.485 2.015 4.5 4.5 4.5h11.25c2.485 0 4.5-2.015 4.5-4.5v-8.25z"
              />
            </svg>
          )}
        </button>
      </div>
      <LineChart data={data} id={id} />
    </div>
  );
};

export default ChartCard;

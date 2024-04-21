import React from "react";

import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { User } from "../pages/Rating";

type AchievementBlockProps = {
  id: number;
  title: string;
  date: string;
  type: number;
};

export const AchievementBlock: React.FC<AchievementBlockProps> = ({
  event,
}) => {
  const { id, title, date, type } = event;

  return (
    <div className="block max-w-full  bg-white rounded-2xl">
      <div className="flex justify-between items-center py-2 px-4 ">
        <div className="flex items-center">
          <span className="mr-4">{id + 1}</span>
        </div>
        <div>{title}</div>

        <div className="flex gap-x-1 items-center mr-4">
          <span className="block">{date}</span>
        </div>
        <div className="flex gap-x-1 items-center mr-4">
          <span className="block">{type}</span>
        </div>
      </div>
    </div>
  );
};

import React from "react";

import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { User } from "../pages/Rating";

type UserProps = {
  user: User;
  order: number;
};

export const RatingBlock: React.FC<UserProps> = ({ user, order }) => {
  const { id, firstname, lastname, group, isFavorite } = user;

  const [favorite, setFavorite] = React.useState(isFavorite);

  const stars = 1000;
  const flow = group?.flow;
  const department = flow?.department;
  const faculty = department?.faculty;
  const university = faculty?.university;

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const shortFacultyName = faculty?.name
    .split(" ")
    .map((el) => el[0].toUpperCase())
    .join("");

  return (
    <div className="block max-w-full  bg-white rounded-2xl">
      <div className="flex justify-between items-center py-2 px-4 ">
        <div className="flex items-center">
          <span className="mr-3 text-lg">{order + 1}</span>
          <Link to={`/profile/${id}`} className="text-black hover:underline">
            <p className="w-32 overflow-ellipsis whitespace-nowrap">
              {firstname + " " + lastname}
            </p>
          </Link>
        </div>
        <Link
          to={`/faculty/${faculty?.id}`}
          className="text-black hover:underline mr-4"
        >
          {shortFacultyName}
        </Link>
        <Link
          to={`/group/${group?.id}`}
          className="text-black hover:underline mr-4"
        >
          {flow?.name + "-" + group?.name}
        </Link>
        <div className="flex gap-x-1 items-center mr-4 text-lg">
          <FaStar className="text-yellow-300" />
          <span className="block">
            {stars >= 1000 ? `${stars / 1000}k` : stars}
          </span>
          <button onClick={() => handleFavorite()} className="ml-3 ">
            {favorite ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

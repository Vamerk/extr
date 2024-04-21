import React from "react";
import { useSelector } from "react-redux";
import { RatingBlock } from "../components";
import { FilterHeader } from "../modules";
import { selectFilterData } from "../redux/filterData/selectors";
import { IGroup } from "../interface/IUniversity";

export type User = {
  id: number;
  firstname: string;
  lastname: string;
  group: IGroup;
  isFavorite: boolean;
};

const Rating = () => {
  const { usersData } = useSelector(selectFilterData);
  // console.log(usersData);
  return (
    <div className="flex flex-row justify-between gap-x-4">
      <div className="flex flex-col flex-grow gap-y-3 overflow-y-auto">
        <div className="block max-w-full  bg-white rounded-2xl ">
          <h2 className=" p-4 mb-4 text-center text-4xl">Рейтинг студентов</h2>
        </div>
        {usersData.users.map((user, index) => (
          <RatingBlock key={user?.id ?? index} user={user} order={index} />
        ))}
      </div>
      <div>
        <FilterHeader name="Rating" />
      </div>
    </div>
  );
};

export default Rating;

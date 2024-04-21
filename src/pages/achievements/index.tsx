import React from "react";
import { useLocation } from "react-router-dom";
import { AchievementBlock } from "../../components";

const Achievement = () => {
  const { pathname } = useLocation();

  const removeSlashes = (str) => {
    const segments = str.split("/");
    return segments[2];
  };
  console.log(pathname);
  const events = [
    {
      id: 0,
      title: "a",
      date: "12-12-1212",
      type: 0,
    },
    {
      id: 1,
      title: "b",
      date: "12-12-1212",
      type: 1,
    },
    {
      id: 2,
      title: "c",
      date: "12-12-1212",
      type: 2,
    },
    {
      id: 3,
      title: "c",
      date: "12-12-1212",
      type: 3,
    },
    {
      id: 4,
      title: "d",
      date: "12-12-1212",
      type: 2,
    },
  ];

  const filterEventsByType = (events, type) => {
    return events.filter((event) => event.type === type);
  };

  const path = removeSlashes(pathname);

  const translateType = () => {
    if (path === "science") {
      return 0;
    } else if (path === "creativity") {
      return 1;
    } else if (path === "sport") {
      return 2;
    } else return 3;
  };
  const achievementList = filterEventsByType(events, translateType());

  return (
    <div className="flex flex-row justify-between gap-x-4">
      <div className="flex flex-col flex-grow gap-y-3 overflow-y-auto">
        <div className="block max-w-full  bg-white rounded-2xl ">
          <h2 className=" p-4 mb-4 text-center text-4xl">Список достижений</h2>
        </div>
        {achievementList.map((event, index) => (
          <AchievementBlock key={event?.id || index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Achievement;

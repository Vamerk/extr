import React from "react";

export const HeaderSection = () => {
  return (
    <>
      <div className="bg-[url(/landing/bg1.png)] h-screen bg-no-repeat bg-cover">
        <div className="container mx-auto max-w-[700px] px-8 py-96 flex flex-col gap-y-10">
          <h1 className=" text-6xl text-black md:text-8xl">
          LifeCource
          </h1>
          <p className="text-xl text-black">
            Виртуальный мир студента
          </p>
        </div>
      </div>
    </>
  );
};
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import Sidebar from "../components/Sidebar";

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="h-screen flex flex-col gap-10 overflow-hidden bg-[rgb(240,241,247)]">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex-1 container max-w-screen-xl mx-auto grid grid-cols-5 gap-x-10">
          <div className=" col-span-1">
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </div>
          <div className=" col-span-4">
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;

import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen flex bg-[rgb(247,248,249)]">
        <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;

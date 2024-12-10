import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="w-3/4 h-3/4">
          <div className="text-3xl text-center text-slate-700 p-3 border-b-4 bg-grey-50 border-b-slate-500">
            Income Expense Tracker
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Layout;

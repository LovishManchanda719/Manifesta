import React from "react";

const navbar = () => {
  return (
    <>
      <div className="bg-[#C1CFA166] h-28  flex items-center justify-between">
        <h1 className="text-7xl text-white translate-x-9 translate-y-1">
          Manifesta
        </h1>

        <div
          className="flex items-center justify-end space-x-20 text-2xl
           text-white bg-slate-600= translate-y-[-2%] translate-x-[-15%]">
          <a href="">Discover</a>
          <a href="">Calander</a>
          <a href="">Events</a>
          <button className="bg-[#4B4242] px-7 py-2 m-4 font-bold rounded-xl">
            LOG IN
          </button>
        </div>
      </div>
    </>
  );
};

export default navbar;

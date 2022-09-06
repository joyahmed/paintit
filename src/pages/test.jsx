import React from "react";
import { IoIosPlay } from "react-icons/io";

const Test = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center space-x-5 bg-gray-50 dark:bg-primary">
      <div className="main group relative flex h-[500px] w-[500px] items-center justify-center rounded-full">
        <div className="duration-400 group absolute z-[2] flex h-[100px] w-[100px] items-center justify-center rounded-full border-red-700 bg-red-700 transition-all hover:border-2 hover:bg-white">
          <IoIosPlay className=" duration-400 absolute ml-1.5 h-10 w-auto text-white transition-all group-hover:text-red-900" />
          <IoIosPlay
            className="duration-400 absolute ml-1.5 h-10 w-auto translate-x-[1px]  -translate-y-[1px] text-white
            transition-all group-hover:text-red-900
          "
          />
        </div>
        <div className="absolute z-[1] h-[130px] w-[130px] rounded-full bg-gray-50 dark:bg-primary" />
        <div className="z-0 flex h-full w-full items-center justify-center">
          {/* <div className="circle delay1 absolute z-0 h-[110px] w-[110px] rounded-full bg-blue-100" /> */}
          <div className="circle delay2 absolute z-0 h-[110px] w-[110px] rounded-full bg-blue-600 dark:bg-blue-100" />
          <div className="circle delay3 absolute z-0 h-[110px] w-[110px] rounded-full bg-blue-600 dark:bg-blue-100" />
          <div className="circle delay4 absolute z-0 h-[110px] w-[110px] rounded-full bg-blue-600 dark:bg-blue-100" />
        </div>
      </div>

      {/* <div className="group relative flex h-[110px] w-[110px] items-center justify-center rounded-full bg-red-900 bg-opacity-10 shadow-md">
        <div className="absolute flex h-[100px] w-[100px] animate-youtube items-center justify-center rounded-full bg-red-900 bg-opacity-50"></div>
        <div className="absolute flex h-[90px] w-[90px] animate-youtube items-center justify-center rounded-full bg-red-900 bg-opacity-10"></div>
        <div className="absolute flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary shadow-md"></div>
        <div className="group relative flex h-[70px] w-[70px] items-center justify-center rounded-full bg-red-900 shadow-md shadow-red-900 hover:bg-white">
          <IoIosPlay className="shdaow-xl z-[1] ml-1.5 h-10 w-auto text-white group-hover:text-red-700" />
        </div>
      </div> */}

      {/* <span className="text-shadow translate-y-[50%] text-clip rounded-md bg-[#33bbcf] px-2 py-1 text-[12px] font-bold uppercase tracking-widest shadow-md ">
        HOME
      </span>
      <span className="text-shadow translate-y-[50%] text-clip rounded-md  bg-[#33bbcf] bg-opacity-70 px-2 py-1 text-[12px] font-bold uppercase tracking-widest shadow-md ">
        ABout
      </span>
      <span className="text-shadow translate-y-[50%] text-clip rounded-md  bg-[#33bbcf] bg-opacity-70 px-2 py-1 text-[12px] font-bold uppercase tracking-widest shadow-md ">
        Contact
      </span>
      <span className="text-shadow translate-y-[50%] text-clip rounded-md  bg-[#33bbcf] bg-opacity-70 px-2 py-1 text-[12px] font-bold uppercase tracking-widest shadow-md ">
        LOGin
      </span> */}
    </div>
  );
};

export default Test;

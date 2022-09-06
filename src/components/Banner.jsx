import React from "react";
import { aboutStaffs } from "../constants";
import styles from "../styles";
import TickMark from "./TickMark";
import YoutubeButton from "./YoutubeButton";

const Banner = () => {
  return (
    <div
      className={`${styles.flexCenter} bg-left-center my-5 mb-10 min-h-[33rem] w-screen flex-col bg-red-900 bg-opacity-50 bg-banner bg-cover bg-fixed bg-no-repeat bg-blend-hard-light dark:bg-opacity-50 dark:bg-blend-multiply sm:flex-row`}
    >
      <div className={`${styles.flexCenter} w-[80%] flex-col sm:flex-row`}>
        <div
          className={`${styles.flexStart} w-screen flex-col text-white sm:w-1/2`}
        >
          <div className="flex w-full items-start justify-start sm:-ml-10">
            <YoutubeButton />
          </div>
          <div className="flex w-full items-start justify-start pl-5 sm:pl-0">
            <h1 className="text-[35px] font-bold leading-[50px] sm:text-[45px] sm:leading-[70px]">
              Hundreds of customers <br /> trust our company
            </h1>
          </div>
        </div>

        <div
          className={`my-10 mb-5 flex w-screen items-center justify-center sm:my-0 sm:mb-0 sm:w-1/2 `}
        >
          <div
            className={`flex w-full flex-col items-end justify-end space-y-4 text-white`}
          >
            {aboutStaffs.map((staff, index) => (
              <span
                className={`duration-400 flex w-full items-center justify-start rounded-lg bg-gray-900 bg-opacity-40 px-4 py-2.5 shadow-sm shadow-gray-900 transition-all hover:bg-opacity-90 sm:w-[80%]`}
                key={index}
              >
                <TickMark style="h-[15px] w-[15px] rotate-[5deg]" />
                <span className="ml-2"> {staff}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

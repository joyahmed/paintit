import { paintItTeam } from "@/src/constants";
import Image from "next/image";
import React from "react";
import styles from "../styles";

const text = `Paintit's Highly Efficient Team`;
const text1 = `Meet Paintit's\nExpert Team Members`;

const TeamMembers = () => {
  return (
    <div
      className={`${styles.flexCenter} my-5 min-h-screen w-screen flex-col sm:h-full `}
    >
      <div className="heading-gradient-light my-5 flex flex-col items-center justify-center px-4 text-center dark:text-white">
        {/* <h5 className="text-md my-3 font-semibold tracking-wide">{text}</h5> */}

        <h2 className="my-3 w-full whitespace-pre-line text-[30px] font-semibold leading-[66.8px] xs:text-[40px] xs:leading-[60px]">
          {text1}
        </h2>
      </div>
      <div className="w-site flex h-full flex-col items-center justify-center space-x-0 space-y-5 px-4 sm:flex-row sm:space-x-6 sm:space-y-0">
        {paintItTeam.map((member, index) => (
          <div
            key={index}
            className="hover:rouned-[12px] group group flex h-[37rem] w-full flex-col items-end justify-end overflow-hidden rounded-[10px] px-2 shadow-2xl sm:h-[27rem] xl:h-[35rem]"
            style={{
              backgroundImage: `url(${member.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="my-2 flex w-full flex-row items-center justify-center rounded-lg bg-gray-900 bg-opacity-40 px-5 py-2 pt-5 text-white shadow-xl group-hover:h-full group-hover:items-end">
              <div className="flex w-2/3 flex-col items-start justify-center">
                <h3 className="text-[18px] font-semibold leading-[15px] tracking-wide dark:text-white">
                  {member.name}
                </h3>
                <h4 className="my-2 text-[15px] dark:text-white">
                  {member.designation}
                </h4>
              </div>
              <div className="flex w-1/3 flex-col items-end justify-center group-hover:justify-end">
                <div className="button-gradient relative mb-2 flex rounded-lg py-3 px-3 group-hover:mb-[11px]">
                  <ShareIcon />
                  {/* <div className="bottom-15 absolute right-0 flex w-[0px]  flex-col rounded-full shadow-xl">
                    <div className="flex h-[20px] w-[20px] items-center justify-center rounded-sm shadow-xl">
                      1
                    </div>
                    <div className="flex h-[20px] w-[20px] items-center justify-center rounded-sm shadow-xl">
                      1
                    </div>
                    <div className="flex h-[20px] w-[20px] items-center justify-center rounded-sm shadow-xl">
                      1
                    </div>
                    <div className="flex h-[20px] w-[20px] items-center justify-center rounded-sm shadow-xl">
                      1
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;

const ShareIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="#FFF"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
      />
    </svg>
  );
};

import React from "react";

const NavInfo = ({ windowHeight }) => {
  return (
    <div
      className={` ${
        windowHeight === 0
          ? "flex min-h-[2rem] w-screen items-center justify-center border-b-black bg-[ghostwhite] bg-opacity-80 dark:bg-primary"
          : "hidden"
      } `}
    >
      NavInfo
    </div>
  );
};

export default NavInfo;

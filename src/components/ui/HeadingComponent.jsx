import React from "react";

const HeadingComponent = ({ mounted, currentTheme, text1, text2 }) => {
  return (
    <>
      <span
        className={`${
          mounted && currentTheme === "dark"
            ? "text-gradient-light"
            : "heading-gradient-light"
        }`}
      >
        {text1}{" "}
      </span>
      <span className="text-gray-400 dark:text-white">{text2}</span>
    </>
  );
};

export default HeadingComponent;

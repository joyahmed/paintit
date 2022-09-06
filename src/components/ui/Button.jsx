const Button = ({
  styles,
  handleOpen,
  animate,
  text,
  mounted,
  currentTheme,
  path,
}) => {
  return (
    <button
      onClick={handleOpen}
      type="button"
      className={`${
        mounted && currentTheme === "dark"
          ? "bg-blue-gradient"
          : "border-2 border-gray-200 border-opacity-50 bg-gradient-to-r  from-themeDarker via-themeDark to-themeLight shadow-xl"
      } ${
        path === "about" ? "w-48 text-[12px]" : "w-36 text-[18px]"
      } relative inline-flex h-14  items-center justify-center overflow-hidden rounded-[10px] py-3 px-6 font-poppins font-semibold uppercase text-white outline-none  ${styles} z-[5] transition-all duration-300 hover:scale-105`}
    >
      <span
        className={`ease absolute flex h-14 ${
          path === "about" ? "w-48 text-[12px]" : "w-36 text-[18px]"
        } items-center justify-center py-4 px-6 transition-all duration-300`}
        style={{
          translate: `${animate === true && "120px"}`,
        }}
      >
        {text || "Hire Us"}
      </span>

      <span
        className={`ease absolute inset-0 flex h-14 ${
          path === "about" ? "w-48 text-[12px]" : "w-36 text-[18px]"
        } -translate-x-full items-center justify-center duration-300`}
        style={{
          translate: `${animate === true && "143px"}`,
        }}
      >
        We Got You
      </span>

      <span className="invisible relative">{text}</span>
    </button>
  );
};

export default Button;

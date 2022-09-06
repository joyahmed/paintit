const Button = ({ styles, handleOpen, animate, text }) => {
  return (
    <>
      <button
        onClick={handleOpen}
        type="button"
        className={`bg-blue-gradient relative inline-flex h-14 w-36 items-center justify-center overflow-hidden rounded-[10px] py-4 px-6 font-poppins text-[18px] font-semibold uppercase text-gray-600 outline-none  ${styles} transition-all duration-300 hover:scale-105`}
      >
        <span
          className={`ease absolute flex h-14 w-36 items-center justify-center py-4 px-6 transition-all duration-300`}
          style={{
            translate: `${animate === true ? "120px" : "opacity: 0, scale-0"}`,
          }}
        >
          {text || "Hire Now"}
        </span>

        <span
          className={`ease absolute inset-0 flex h-14 w-36 -translate-x-full items-center justify-center duration-300`}
          style={{
            translate: `${animate === true && "143px"}`,
          }}
        >
          We Got You
        </span>

        <span className="invisible relative">{text}</span>
      </button>
    </>
  );
};

export default Button;

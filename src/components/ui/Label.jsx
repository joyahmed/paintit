const Label = ({ text }) => {
  return (
    <label
      className={`absolute left-2 -top-6 text-sm text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-[15px] peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-gray-400 dark:text-gray-200 dark:peer-focus:text-gray-200`}
    >
      {text}
    </label>
  );
};

export default Label;

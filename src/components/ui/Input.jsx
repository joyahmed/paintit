const Input = ({ type, value, name, onChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="peer h-10 w-full rounded-md px-2 text-white placeholder-transparent focus:outline-none dark:border-gray-300"
      placeholder={placeholder}
    />
  );
};

export default Input;

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "../Input";
import Label from "../Label";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
};

const QuoteForm = ({ mounted, currentTheme }) => {
  const [{ name, email, phone, address, message }, setState] =
    useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    name && phone && email && address && message && setDisabled(false);
  }, [name, email, phone, address, message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quoteData = {
      name: name,
      phone: phone,
      email: email,
      address: address,
      message: message,
    };

    setState({ ...initialState });

    toast.success(
      `Thank you for reaching us ${name}😃!
      \nWe will soon contact you.
      `
    );
  };

  return (
    <div className="flex w-full items-center justify-center px-4 py-2 text-white">
      <form encType="multipart/form-data" className="my-5 w-full space-y-7">
        <div className="relative flex w-full items-center justify-start space-x-2">
          <Input
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            placeholder="joy"
            className="bg-transparent"
          />
          <Label text="Name" />
        </div>
        <div className="relative flex w-full items-center justify-start space-x-2">
          <Input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
            placeholder="joy@paintIt.com"
            className="bg-transparent"
          />
          <Label text="Email" />
        </div>
        <div className="relative my-3 flex w-full items-center justify-start space-x-2">
          <Input
            type="text"
            value={phone}
            name="phone"
            onChange={handleChange}
            placeholder="+110"
            className="bg-transparent"
          />
          <Label text="Phone" />
        </div>
        <div className="relative my-3 flex w-full items-center justify-start space-x-2">
          <Input
            type="text"
            value={address}
            name="address"
            onChange={handleChange}
            placeholder="+110"
            className="bg-transparent"
          />
          <Label text="Address (State, City, Zip)" />
        </div>
        <div className="relative my-3 flex w-full items-center justify-start space-x-2">
          <textarea
            className="w-full rounded-lg px-4 py-2 shadow-lg focus:outline-none"
            id="description_field"
            rows="2"
            value={message}
            name="message"
            onChange={handleChange}
            required
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="flex w-full items-center justify-center">
          <button
            className={`${
              mounted && currentTheme === "dark"
                ? "bg-blue-gradient"
                : "button-gradient"
            } w-1/2 rounded-md px-4 py-1.5 text-lg font-semibold text-white ${
              disabled && "cursor-not-allowed bg-opacity-50"
            }`}
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;

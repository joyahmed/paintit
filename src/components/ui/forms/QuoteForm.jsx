import styles from "@/src/styles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { rooferServices } from "../../../constants";
import Input from "../Input";
import Label from "../Label";
import Select from "../Select";

const QuoteForm = ({ isOpen, setIsOpen }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [selected, setSelected] = useState();
  const [openSelect, setOpenSelect] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const handleMount = setMounted(true);
    return () => handleMount;
  }, []);

  const handleSelect = (e) => {
    setSelected(e.target.textContent);
    setOpenSelect(!openSelect);
  };

  useEffect(() => {
    data.firstName &&
      data.lastName &&
      data.mobile &&
      data.email &&
      selected &&
      setDisabled(false);
  }, [data, selected]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quoteData = {
      firstName: data.firstName,
      lastName: data.lastName,
      mobile: data.mobile,
      email: data.email,
      service: selected,
    };

    if (!disabled) {
      setIsOpen(false);
      toast.success(
        `A quation for Service:
      \n'${quoteData.service}'
      \n is sent to ${quoteData.email}`
      );
    } else {
      toast.error(`Please fill up all fields first!!!`);
    }
  };

  const marginBottom = rooferServices.length * 1.5;

  return (
    <div
      className={`flex items-center justify-center text-white transition-all duration-200 ${
        openSelect && `mb-${marginBottom}`
      }`}
    >
      <form encType="multipart/form-data" className="my-5 w-full space-y-7">
        <div className="flex w-full items-center justify-start space-x-2">
          <div className="relative w-1/2">
            <Input
              type="text"
              value={data.firstName}
              name="firstName"
              onChange={handleChange}
              placeholder="joy"
            />
            <Label text="First Name" />
          </div>
          <div className="relative w-1/2">
            <Input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              placeholder="ahmed"
            />
            <Label text="Last Name" />
          </div>
        </div>
        <div className="my-3 flex w-full items-center justify-start space-x-2">
          <div className="relative w-1/2">
            <Input
              type="text"
              value={data.mobile}
              name="mobile"
              onChange={handleChange}
              placeholder="+110"
            />
            <Label text="Phone" />
          </div>
          <div className="relative w-1/2">
            <Input
              type="text"
              value={data.email}
              name="email"
              onChange={handleChange}
              placeholder="joy@roofer.com"
            />
            <Label text="Email" />
          </div>
        </div>
        <div className="flex w-full items-center justify-start">
          <Select
            {...{
              services: rooferServices,
              handleSelect,
              openSelect,
              setOpenSelect,
              selected,
              text: "Select Service",
            }}
          />
        </div>

        <div className={`flex w-full items-center justify-center`}>
          <button
            className={`${
              mounted && currentTheme === "dark"
                ? "border-2 border-gray-900 bg-primary"
                : "bg-blue-gradient"
            }  text-md w-1/2 rounded-md px-4 py-2 font-semibold text-white`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;

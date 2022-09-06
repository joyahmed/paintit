import styles from "@/src/styles";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { paintitServices } from "../../../constants";
import Input from "../Input";
import Label from "../Label";

const QuoteForm = ({ isOpen, setIsOpen }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    service: "",
  });
  const [disabled, setDisabled] = useState(false);

  // useEffect(() => {
  // 	data.firstName &&
  // 		data.lastName &&
  // 		data.mobile &&
  // 		data.email &&
  // 		data.addressLine1 &&
  // 		data.city &&
  // 		data.zip &&
  // 		data.country &&
  // 		data.service &&
  // 		setDisabled(false);
  // }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hireData = {
      firstName: data.firstName,
      lastName: data.lastName,
      mobile: data.mobile,
      email: data.email,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      city: data.city,
      state: data.state,
      zip: data.zip,
      country: data.country,
      service: data.service,
    };

    toast.dark(
      `A quation for Service:
		  \n'${hireData.service}'
		  \n is sent to ${hireData.email}`
    );

    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center text-white">
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
              placeholder="joy@paintIt.com"
            />
            <Label text="Email" />
          </div>
        </div>
        <div className="relative my-3 flex w-full items-center justify-start space-x-2">
          <Input
            type="text"
            value={data.addressLine1}
            name="addressLine1"
            onChange={handleChange}
            placeholder="address line 1"
          />
          <Label text="Apt, House, Street" />
        </div>
        <div className="relative flex w-full items-center justify-start space-x-2">
          <Input
            type="text"
            value={data.addressLine2}
            name="addressLine2"
            onChange={handleChange}
            placeholder="address line 2"
          />
          <Label text="Area" />
        </div>
        <div className="my-2 flex w-full items-center justify-start space-x-2">
          <div className="relative">
            <Input
              type="text"
              value={data.city}
              name="city"
              onChange={handleChange}
              placeholder="london"
            />
            <Label text="City" />
          </div>
          <div className="relative">
            <Input
              type="text"
              value={data.state}
              name="state"
              onChange={handleChange}
              placeholder="london"
            />
            <Label text="State" />
          </div>
          <div className="relative">
            <Input
              type="text"
              value={data.zip}
              name="zip"
              onChange={handleChange}
              placeholder="123"
            />
            <Label text="Zip" />
          </div>
          <div className="relative">
            <Input
              type="text"
              value={data.country}
              name="country"
              onChange={handleChange}
              placeholder="bangladesh"
            />
            <Label text="Country" />
          </div>
        </div>
        <div className="my- flex w-full items-center justify-start space-x-2">
          <div className="relative w-1/3">
            <select
              name="service"
              value={data.service}
              className="h-9 w-full rounded-lg px-4 shadow-lg focus:outline-none"
              onChange={handleChange}
            >
              <option>Select</option>
              {paintitServices.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>
            <Label text="Service" />
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <button
            className={`bg-blue-gradient w-1/2 rounded-md px-4 py-2 text-sm font-semibold text-white sm:w-auto ${
              disabled && "cursor-not-allowed bg-opacity-50"
            }`}
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

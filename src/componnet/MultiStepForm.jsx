import { useState } from "react";
import { MdOutlineFace } from "react-icons/md";
import { MdFace4 } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    message: "",
    gender: "",
    dob: "",
    mobile: "",
    terms: false,
    question: [],
    answer: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;

    if (type === "checkbox") {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormData((prevState) => ({
        ...prevState,
        [name]: selectedOptions,
      }));
    } else {
      const val = type === "checkbox" ? checked : value;
      setFormData((prevState) => ({
        ...prevState,
        [name]: val,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 3) {
      console.log(formData);
    }
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="max-w-md">
        <div className="abovecobtent mb-4 p-4">
          {step === 1 && (
            <>
              <h2 className="text-xl mb-2 font-bold">Join Now and Win!</h2>
              <span className="text-grey text-xm">
                {" "}
                Where do we send the price?
              </span>
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="text-xl mb-2 font-bold">Address</h2>
              <span className="text-grey text-xm">
                {" "}
                Where do we send the price?
              </span>
            </>
          )}
          {step === 3 && (
            <>
              <h2 className="text-xl mb-2 font-bold">Questions</h2>
              <span
                className="text-grey text-xm
              "
              >
                Answer the following questions to guarantee your registration
              </span>
            </>
          )}
          {step === 4 && (
            <>
              <h2 className="text-xl mb-2 font-bold">Verify the Email</h2>
              <span
                className="text-grey text-xm
              "
              >
                For successful participation, you need to confirm the email we
                just sent to you!!
              </span>
            </>
          )}
        </div>

        <div className="flex  justify-evenly mb-4">
          <div
            className={`w-1/6 text-center h-3   rounded-md ${
              step === 1 ? "bg-orange-500 text-white" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-1/6  text-center h-3  rounded-md ${
              step === 2 ? "bg-orange-500 text-white" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-1/6 text-center h-3 rounded-md ${
              step === 3 ? "bg-orange-500 text-white" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-1/6 text-center h-3 rounded-md ${
              step === 4 ? "bg-orange-500 text-white" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={` w-1/6 text-center h-3  bg-transparent rounded-md ${
              step === 5 ? "bg-orange-500 text-white" : "bg-gray-300"
            }`}
          ></div>
        </div>
        {step === 1 && (
          <div className="p-4 bg-transparent rounded-md  ">
            <h2 className=" font-extrabold mb-2">Congratulation!</h2>
            <p className="mb-4 text-gray-700 text-sm">
              Enter to win the grand prize!
            </p>
            <div className="flex mb-4">
              <button
                className={`mr-2 px-4 w-full py-2  font-semibold gap-x-1 flex items-center justify-center rounded-md ${
                  formData.gender === "Male" ? "bg-white text-black" : " border"
                }`}
                onClick={() => setFormData({ ...formData, gender: "Male" })}
              >
                <MdOutlineFace />
                Male
              </button>
              <button
                className={`px-4 py-2 w-full gap-x-1 font-semibold flex items-center justify-center rounded-md ${
                  formData.gender === "Female"
                    ? "bg-white text-black"
                    : "border"
                }`}
                onClick={() => setFormData({ ...formData, gender: "Female" })}
              >
                <MdFace4 />
                Female
              </button>
            </div>
            <div className="flex mb-4">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 px-10 mr-2 border border-gray-300 rounded-lg py-2"
              />
              <input
                type="text"
                name="name"
                placeholder="Last Name"
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
            />

            <button
              onClick={nextStep}
              className=" ml-auto hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-md bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white  flex justify-center items-center gap-x-2"
            >
              Join for free
              <FaArrowRightLong />
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="p-4 bg-transparent rounded-md">
            <h2 className="text-xl mb-2 font-bold">
              Where do we send the price?
            </h2>
            <p className="text-xs mb-4">Enter your address deatils</p>
            <div className="flex mb-4">
              <input
                type="text"
                name="Pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-1/2 mr-2 border border-gray-300 rounded-lg px-3 py-2"
              />
              <input
                type="text"
                name="Address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <div className="flex mb-4 gap-2">
              <input
                type="date"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2"
              />
              <input
                type="number"
                name="mobile"
                placeholder="Mobile No."
                value={formData.mobile}
                onChange={handleChange}
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="terms text-sm">
              Increase your chance by verify the mobile number
            </label>
            <br />
            <br />
            <div className="flex justify-evenly items-center">
              <button
                onClick={prevStep}
                className="  hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-md    text-white  flex justify-center items-center gap-x-2"
              >
                <FaArrowLeftLong />
                Back
              </button>
              <button
                onClick={nextStep}
                className=" ml-auto hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-md bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white  flex justify-center items-center gap-x-2"
              >
                Join for free
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="p-4 max-w-full bg-transparent rounded-md ">
            <h2 className="text-xl mb-4">
              Which insurances are absolutely necessary for you?
            </h2>

            <div className="mt-4">
              <label className="flex items-center border rounded-lg p-2 mb-2">
                <input
                  type="checkbox"
                  name="question"
                  value="option1"
                  checked={formData.question.includes("option1")}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-lg">Health insurances</span>
              </label>
              <label className="flex items-center border rounded-lg p-2 mb-2">
                <input
                  type="checkbox"
                  name="question"
                  value="option2"
                  checked={formData.question.includes("option2")}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-lg">Life insurances</span>
              </label>
              <label className="flex items-center border rounded-lg p-2 mb-2">
                <input
                  type="checkbox"
                  name="question"
                  value="option3"
                  checked={formData.question.includes("option3")}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-lg">Term insurances</span>
              </label>
            </div>
            <div className="flex justify-evenly items-center">
              <button
                onClick={prevStep}
                className="  hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-md    text-white  flex justify-center items-center gap-x-2"
              >
                <FaArrowLeftLong />
                Back
              </button>
              <button
                onClick={handleSubmit}
                className=" ml-auto hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-md bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white  flex justify-center items-center gap-x-2"
              >
                Continue
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="p-4 max-w-full bg-transparent rounded-md ">
            <h2 className="text-xl mb-4"></h2>

            <div className="mt-4">
              <label className="flex items-center border rounded-lg p-2 mb-2">
                <input
                  type="checkbox"
                  name="question"
                  value="option1"
                  checked={formData.question.includes("option1")}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-lg">Health insurances</span>
              </label>
              <label className="flex items-center border rounded-lg p-2 mb-2">
                <input
                  type="checkbox"
                  name="question"
                  value="option2"
                  checked={formData.question.includes("option2")}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-lg">Life insurances</span>
              </label>
              <label className="flex items-center border rounded-lg p-2 mb-2">
                <input
                  type="checkbox"
                  name="question"
                  value="option3"
                  checked={formData.question.includes("option3")}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-lg">Term insurances</span>
              </label>
            </div>
            <div className="flex justify-evenly items-center">
              <button
                onClick={prevStep}
                className="  hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-md    text-white  flex justify-center items-center gap-x-2"
              >
                <FaArrowLeftLong />
                Back
              </button>
              <button
                onClick={handleSubmit}
                className=" ml-auto hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-md bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white  flex justify-center items-center gap-x-2"
              >
                Continue
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStepForm;

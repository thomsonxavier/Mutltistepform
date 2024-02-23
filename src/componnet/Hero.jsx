// Remove this import statement
// import { useMediaQuery } from 'react-responsive';

import { useEffect, useState } from "react";
import sidebar from "../Assets/sidebar.png";
import MultiStepForm from "./MultiStepForm";
import logo from "../Assets/logo-01.svg";

function Hero() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkIsTablet = () => {
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth >= 768);
    };

    checkIsTablet();

    const handleResize = () => {
      checkIsTablet();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-full  md:flex-row">
      <div className="flex-1 flex flex-col justify-between md:items-start">
        <div className="pt-8 pl-8">
          <img src={logo} alt="Logo" className="w-56 max-h-32 ml-6" />
        </div>
        <div className="pt-16 flex justify-center md:justify-start">
          <div className="max-w-md">
            <img src={sidebar} alt="" className="w-full" />
          </div>
          <div className="p-4 my-auto     text-lg poppins-semibold text-center md:text-left">
            <h3 className="font-bold text-2xl">
              Get Free - <br />
              iPhone 13 Pro OR <br />
              Pro Max to WIN !!
            </h3>
            <p className="mt-3 font-medium text-gray-700">
              Enter to win{" "}
              <span className=" bg-green-300 rounded-lg px-1 py-1">
                Get it Now
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className={`flex-1  relative  `}>
        <div className={`md:form ${isTablet ? "" : "form"} `}>
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
}

export default Hero;

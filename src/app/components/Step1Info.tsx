import Image from "next/image";
import React from "react";

import { BRAND_ACCEPTED } from "../utils/dummyData";

interface Step1InfoProps {
  section1Ref: React.RefObject<HTMLDivElement | null>;
}
const Step1Info = ({ section1Ref }: Step1InfoProps) => {
  const STEPS = [
    {
      id: "1",
      content: "Start by choosing a retailer from our list below.",
    },
    {
      id: "2",
      content:
        "Click on the retailer link to browse their website and select the products you want to order.",
    },
    {
      id: "3",
      content:
        "Take a screenshot of your cart covering key details like: Product Name, Product Number (SKU), Price, Delivery Cost, and any applicable VAT.",
    },
  ];

  return (
    <div className="pt-10 text-black mb-6" ref={section1Ref}>
      <p className="text-xs">STEP 1</p>
      <h2 className="sm:w-[468px] font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
        BROWSE ANY SHOP IN THE UK
      </h2>
      {STEPS.map((step) => (
        <div className="flex items-start gap-6 mt-4" key={step.id}>
          <div className="w-[30px] min-w-[30px] text-sm sm:text-base sm:w-[40px] sm:min-w-[40px] aspect-square centered border border-black">
            {step.id}
          </div>
          <p className="leading-[132%]">{step.content}</p>
        </div>
      ))}
      <div className="mt-8 flex flex-wrap gap-2 sm:gap-4">
        {BRAND_ACCEPTED.map((brand, index) => {
          return (
            <Image
              src={brand}
              key={index}
              alt="brand-accepted-logo"
              className="h-[40px] sm:h-[40px] w-auto 2xl:w-auto 2xl:h-[auto]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Step1Info;

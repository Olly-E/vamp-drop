import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import { BRAND_ACCEPTED } from "../utils/dummyData";

interface Step1InfoProps {
  handleOpenStep2: () => void;
}
const Step1Info = ({ handleOpenStep2 }: Step1InfoProps) => {
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
    <div className="pt-18 text-black mb-6">
      <p className="text-xs">STEP 1</p>
      <h2 className="sm:w-[468px] font-[500] leading-[122%] text-[45px] sm:text-[50px] mt-3">
        BROWSE ANY SHOP IN THE UK
      </h2>
      {STEPS.map((step) => (
        <div className="flex items-start gap-6 mt-4" key={step.id}>
          <div className="w-[40px] min-w-[40px] aspect-square centered border border-black">
            {step.id}
          </div>
          <p className="leading-[132%]">{step.content}</p>
        </div>
      ))}
      <div className="mt-8 flex flex-wrap gap-4">
        {BRAND_ACCEPTED.map((brand, index) => {
          return <Image src={brand} key={index} alt="brand-accepted-logo" />;
        })}
      </div>
      <button
        type="button"
        onClick={handleOpenStep2}
        className="mt-8 text-xs uppercase font-[500] h-[40px] pr-1 pl-2 border border-black rounded-[3px] w-full flex items-center justify-between"
      >
        How vamp drop works
        <div className="w-[28px] min-w-[28px] aspect-square centered rounded-[3px] bg-black">
          <ArrowDownRight size={20} color="#FFFFFF" />
        </div>
      </button>
    </div>
  );
};

export default Step1Info;

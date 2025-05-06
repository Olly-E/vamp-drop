import React from "react";
import clsx from "clsx";

import Image from "next/image";

import slide2Img from "../../../../public/assets/slide2Img.webp";

const Step2Section = () => {
  return (
    <div
      className={clsx(
        "w-full select-none bg-[#F9F9E0] !mt-0 pl-8 lg:pl-[16.6%] py-[45px] h-full"
      )}
    >
      <div className="pt-10 text-black  mb-20 h-full overflow-y-auto pr-8 lg:pr-20 ">
        <p className="text-xs">STEP 2</p>
        <div className="flex flex-col xl:flex-row items-start xl:gap-10">
          <h2 className="uppercase flex-1 font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
            Fill Out the Order Form
          </h2>
          <p className="flex-1">
            Use our simple order form to submit the details of your selected
            items. This helps us accurately calculate the total cost, including
            our 10% service fee.
          </p>
        </div>
        <Image
          src={slide2Img}
          alt="slide-2-img"
          className=" h-auto mt-10 lg:w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Step2Section;

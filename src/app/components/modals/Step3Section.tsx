import Image from "next/image";
import React from "react";
import clsx from "clsx";

import slide3Img1 from "../../../../public/assets/slide3Img1.webp";
import slide3Img2 from "../../../../public/assets/slide3Img2.webp";

const Step3Section = () => {
  return (
    <div
      className={clsx(
        "w-full min-h-full select-none bg-[#E6F6E3] !mt-0 pl-8 lg:pl-[16.6%] py-[45px]"
      )}
    >
      <div className="pt-10 text-black mb-10 pr-8 lg:pr-20">
        <p className="text-xs">STEP 3</p>
        <div className="sm:w-[457px]">
          <h2 className="uppercase font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
            Receive Your Invoice in Naira
          </h2>
          <p className="text-sm sm:text-base mt-6 w-full">
            Once you submit the order form, our team will review the details and
            calculate the total cost, converted into Naira, including our 10%
            Vamp Drop service fee.
          </p>
          <p className="text-sm sm:text-base mt-3">
            We&apos;ll email you an invoice with instructions to make payment
            into our Nigerian account.
          </p>
        </div>
        <div className="flex gap-8 mt-6 sm:pr-8 lg:pr-10">
          <div className="relative">
            <Image
              src={slide3Img1}
              alt="slide-2-img"
              className="w-full h-auto max-h-[146px] object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src={slide3Img2}
              alt="slide-2-img"
              className="w-full h-auto max-h-[146px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3Section;

import Image from "next/image";
import React from "react";
import clsx from "clsx";

import slide4Img from "../../../../public/assets/slide4Img.webp";

const Step4Section = () => {
  return (
    <div
      className={clsx(
        "w-full select-none bg-white !mt-0 pl-8 lg:pl-[16.6%] py-[45px] min-h-full"
      )}
    >
      <div className="pt-10 text-black mb-20 h-full overflow-y-auto pr-8 lg:pr-20 ">
        <p className="text-xs">STEP 4</p>
        <div className="flex flex-col xl:flex-row items-start xl:gap-14">
          <h2 className=" uppercase font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
            MAKE PAYMENT
          </h2>
          <p className="mt-6">
            Pay the total amount on the invoice to the Vamp account provided.
            After your payment is confirmed, we’ll handle the rest.
          </p>
        </div>
        <Image
          src={slide4Img}
          alt="slide-2-img"
          className=" h-auto mt-10 lg:w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Step4Section;

import Image from "next/image";
import React from "react";
import clsx from "clsx";

import slide3Img from "../../../../public/assets/slide3Img.webp";

const Step3Section = () => {
  return (
    <div
      className={clsx(
        "w-full h-full overflow-hidden select-none bg-[#E6F6E3] !mt-0 pl-8 lg:pl-[16.6%] py-[45px]"
      )}
    >
      <div className="pt-10 text-black mb-10 pr-8 lg:pr-20">
        <p className="text-xs">STEP 3</p>
        <div className="xl:w-[457px]">
          <h2 className="uppercase font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
            Receive Your Invoice in Naira
          </h2>
          <p className="text-base mt-6 w-full">
            Once you submit the order form, our team will review the details and
            calculate the total cost, converted into Naira, including our 10%
            Vamp Drop service fee.
          </p>
          <p className="text-base mt-3">
            We&apos;ll email you an invoice with instructions to make payment
            into our Nigerian account.
          </p>
        </div>
        <Image
          src={slide3Img}
          alt="slide-2-img"
          className=" h-auto mt-10 lg:w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Step3Section;

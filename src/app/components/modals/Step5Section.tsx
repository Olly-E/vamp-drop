import Image from "next/image";
import React from "react";
import clsx from "clsx";

import slide5Img from "../../../../public/assets/slide5Img.webp";

const Step5Section = () => {
  return (
    <div
      className={clsx(
        "w-full h-full overflow-hidden select-none bg-[#F9F9E0] !mt-0 pl-8 lg:pl-[16.6%] py-[45px]"
      )}
    >
      <div className="pt-10 text-black pb-10 pr-8 lg:pr-20 gap-10">
        <div>
          <p className="text-xs">STEP 5</p>
          <div className="">
            <h2 className="text-left uppercase font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
              Order Placement & Shipping
            </h2>
            <p className="mt-6 text-base">
              We&apos;ll place the order with the international retailer on your
              behalf and have it delivered to our secure overseas address.
            </p>
            <p className="text-base mt-3">
              Once your items arrive at our address, they&apos;ll be forwarded
              to Lagos and available for pickup at Vamp.
            </p>
          </div>
        </div>
        <Image
          src={slide5Img}
          alt="slide-2-img"
          className=" h-auto mt-10 lg:w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Step5Section;

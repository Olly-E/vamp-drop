import Image from "next/image";
import React from "react";
import clsx from "clsx";

import slide5Img from "../../../../public/assets/slide5Img.webp";

const Step5Section = () => {
  return (
    <div
      className={clsx(
        "w-full min-h-full select-none bg-[#F9F9E0] !mt-0 pl-8 lg:pl-[16.6%] py-[45px]"
      )}
    >
      <div className="pt-10 text-black pb-10 pr-8 lg:pr-20 gap-10">
        <div className="flex-col xl:flex-row flex gap-8">
          <div>
            <p className="text-xs">STEP 5</p>
            <div className="">
              <h2 className="text-left uppercase font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
                Order Placement & Shipping
              </h2>
              <p className="mtt-2 md:mt-6 text-base sm:text-sm">
                We&apos;ll place the order with the international retailer on
                your behalf and have it delivered to our secure overseas
                address.
              </p>
              <p className="text-base sm:text-sm mt-3">
                Once your items arrive at our address, they&apos;ll be forwarded
                to Lagos and available for pickup at Vamp.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={slide5Img}
              alt="slide-2-img"
              className="max-w-[274px] max-h-[45%] xl:max-h-max xl:w-[274px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5Section;

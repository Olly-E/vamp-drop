import Image from "next/image";
import React from "react";
import clsx from "clsx";

import slide7Img from "../../../../public/assets/slide7Img.webp";

const Step7Section = () => {
  return (
    <div
      className={clsx(
        "w-full select-none bg-white !mt-0 pl-8 lg:pl-[16.6%] pt-[45px] pb-[20px] min-h-full"
      )}
    >
      <div className="pt-10 text-black mb-10 h-full overflow-y-auto pr-8 lg:pr-20">
        <p className="text-xs">STEP 7</p>
        <div className="flex flex-col xl:flex-row items-start xl:gap-14">
          <h2 className="uppercase font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
            OUR <br /> SERVICE FEE
          </h2>
          <p>
            A 10% Vamp Drop service fee is applied to the total order cost
            (product price + any applicable delivery and VAT costs). This fee
            covers order processing, handling, and logistics to ensure your
            items reach you smoothly.
          </p>
        </div>
        <Image
          src={slide7Img}
          alt="slide-2-img"
          className="sm:w-[50%] h-auto mt-10 max-h-[200px] lg:w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Step7Section;

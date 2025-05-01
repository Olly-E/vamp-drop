import Image from "next/image";
import React from "react";

import slide6Img1 from "../../../../public/assets/slide6Img1.webp";
import slide6Img2 from "../../../../public/assets/slide6Img2.webp";
import clsx from "clsx";

const Step6Section = () => {
  return (
    <div
      className={clsx(
        "w-full h-full overflow-hidden select-none bg-[#F6E3E3] !mt-0 pl-8 lg:pl-[16.6%] py-[45px]"
      )}
    >
      <div className="pt-10 text-black pr-8 lg:pr-20">
        <p className="text-xs">STEP 6</p>
        <div className="sm:w-[457px]">
          <h2 className="uppercase font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
            Collect Your Order at Vamp in Lagos
          </h2>
          <p className="mt-6">
            When your item is ready for pickup, you’ll receive a notification
            from us. Come to Vamp and pick up your order at your convenience.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6">
          <div className="relative w-auto">
            <Image
              src={slide6Img1}
              alt="slide-2-img"
              className=" lg:h-auto object-cover max-w-[347px]"
            />
          </div>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Vamp/@6.4478113,3.4675068,17z/data=!4m7!3m6!1s0x103bf5467664fe95:0x6671f321a6a245bc!4b1!8m2!3d6.4478113!4d3.4700817!16s%2Fg%2F11v459v7tq?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
            className=""
          >
            <Image
              src={slide6Img2}
              alt="slide-2-img"
              className=" h-auto object-cover object-bottom max-h-[197px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Step6Section;

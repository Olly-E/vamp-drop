import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

import slide6Img1 from "../../../../public/assets/slide6Img1.webp";
import location from "../../../../public/assets/location.svg";

const Step6Section = () => {
  return (
    <div
      className={clsx(
        "w-full h-full overflow-hidden select-none bg-[#F6E3E3] !mt-0 pl-8 lg:pl-[16.6%] py-[45px]"
      )}
    >
      <div className="pt-10 text-black pr-8 lg:pr-20">
        <p className="text-xs">STEP 6</p>
        <div className="lg:w-[457px]">
          <h2 className="uppercase font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
            Collect Your Order at Vamp in Lagos
          </h2>
          <p className="mt-6">
            When your item is ready for pickup, you’ll receive a notification
            from us. Come to Vamp and pick up your order at your convenience.
          </p>
        </div>
        <div className=" mt-6">
          <div className="relative w-auto">
            <Image
              src={slide6Img1}
              alt="slide-2-img"
              className=" h-auto w-full sm:max-w-[476px]"
            />
          </div>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Vamp/@6.4478113,3.4675068,17z/data=!4m7!3m6!1s0x103bf5467664fe95:0x6671f321a6a245bc!4b1!8m2!3d6.4478113!4d3.4700817!16s%2Fg%2F11v459v7tq?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
            className="w-full border border-black h-[40px] px-[7px] rounded-[3px] flex items-center justify-between mt-[29px]"
          >
            <div className="flex items-center gap-[10px]">
              <Image
                src={location}
                alt="slide-2-img"
                className=" w-[27px] min-w-[27px] aspect-square"
              />
              <p className="text-xs">VIEW ON THE MAP</p>
            </div>
            <div className="w-7 min-w-7 aspect-square rounded-[3px] centered bg-black">
              <ArrowUpRight size={20} color="#FFFFFF" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Step6Section;

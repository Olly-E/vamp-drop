import Image from "next/image";
import React from "react";
import clsx from "clsx";

import headphones from "../../../../public/assets/headphones.svg";
import checkCube from "../../../../public/assets/checkCube.svg";
import cart from "../../../../public/assets/cart.svg";

const WhyChooseVampSec = () => {
  const WHY_CHOOSE_VAMP = [
    {
      icon: cart,
      title: "Convenient Ordering",
      description:
        "No need for international payment methods – pay directly in Naira.",
    },
    {
      icon: checkCube,
      title: "Trusted Delivery",
      description:
        "We ensure your items are safely shipped and delivered to our store.",
    },
    {
      icon: headphones,
      title: "Customer Support",
      description:
        "Our team is here to help at each step if you have any questions.",
    },
  ];
  return (
    <div
      className={clsx(
        "w-full select-none bg-black !mt-0 pl-8 lg:pl-[16.6%] py-[45px] min-h-full"
      )}
    >
      <div className="pt-10 text-black mb-10 h-full overflow-y-auto pr-8 lg:pr-20 ">
        <p className="text-xs">STEP 7</p>
        <div className="flex flex-col xl:flex-row items-end xl:gap-14">
          <h2 className="xl:min-w-[363px] text-white uppercase font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
            WHY CHOOSE VAMP DROP
          </h2>
        </div>
        <div className="grid grid-cols-2 mt-10 gap-5 text-left">
          {WHY_CHOOSE_VAMP.map((perk, index) => {
            return (
              <div className="max-w-[327px]" key={index}>
                <div className="bg-white w-[36px] min-w-[36px] h-[36px] sm:w-[53px] sm:min-w-[53px] sm:h-[53px] rounded-[3px] aspect-square centered">
                  <Image
                    src={perk.icon}
                    alt={perk.title}
                    className="w-[14px] sm:w-[24px] h-auto"
                  />
                </div>
                <p className="text-base sm:text-[20px] font-medium text-white mt-2">
                  {perk.title}
                </p>
                <p className="leading-[132%] text-xs sm:text-base text-white mt-2">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseVampSec;

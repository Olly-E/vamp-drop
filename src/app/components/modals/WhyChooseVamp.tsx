import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

import { Modal } from "@/app/components/Modal";

import headphones from "../../../../public/assets/headphones.svg";
import checkCube from "../../../../public/assets/checkCube.svg";
import cart from "../../../../public/assets/cart.svg";

interface WhyChooseVampProps {
  modalRef: React.RefObject<HTMLDivElement | null>;
  modalOpen: boolean;
  handleOpenStep8: () => void;
}

const WhyChooseVamp = ({ modalOpen, handleOpenStep8 }: WhyChooseVampProps) => {
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
    <Modal
      variant="middle"
      className={clsx(
        "w-full select-none bg-black !mt-0 pl-8 lg:pl-[16.6%] py-[45px] min-h-full"
      )}
      showDialog={modalOpen}
      closeModal={() => {}}
      backdropVariantsClass="w-full md:!w-[60%]"
    >
      <div className="pt-18 text-black mb-20 h-full overflow-y-auto pr-8 lg:pr-20 ">
        <p className="text-xs">STEP 7</p>
        <div className="flex flex-col xl:flex-row items-end xl:gap-14">
          <h2 className="xl:min-w-[363px] text-white uppercase font-[500] leading-[122%] text-[50px] mt-3">
            WHY CHOOSE VAMP DROP
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 gap-x-10 gap-y-20 text-left">
          {WHY_CHOOSE_VAMP.map((perk, index) => {
            return (
              <div className="max-w-[327px]" key={index}>
                <div className="bg-white w-[63px] min-w-[63px] h-[63px] rounded-[3px] aspect-square centered">
                  <Image
                    src={perk.icon}
                    alt={perk.title}
                    className="w-[32px] h-auto"
                  />
                </div>
                <p className="text-[24px] font-medium text-white mt-6">
                  {perk.title}
                </p>
                <p className="leading-[132%] text-white mt-4">
                  {perk.description}
                </p>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={handleOpenStep8}
          className="mt-8 text-xs uppercase font-[500] h-[40px] pr-1 pl-2 border border-white rounded-[3px] w-full flex items-center justify-between text-white"
        >
          PLACE YOUR ORDER
          <div className="w-[28px] min-w-[28px] aspect-square centered rounded-[3px] bg-white">
            <ArrowDownRight size={20} color="#000000" />
          </div>
        </button>
      </div>
    </Modal>
  );
};

export default WhyChooseVamp;

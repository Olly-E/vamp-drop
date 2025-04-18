import Image from "next/image";
import React from "react";
import clsx from "clsx";

import { Modal } from "@/app/components/Modal";

import slide5Img from "../../../../public/assets/slide5Img.webp";
import { ArrowDownRight } from "lucide-react";

interface Step5SlideProps {
  modalRef: React.RefObject<HTMLDivElement | null>;
  modalOpen: boolean;
  handleOpenStep6: () => void;
}

const Step5Slide = ({ modalOpen, handleOpenStep6 }: Step5SlideProps) => {
  return (
    <Modal
      variant="middle"
      className={clsx(
        "w-full min-h-full select-none bg-[#F9F9E0] !mt-0 pl-[16.6%] py-[45px]"
      )}
      showDialog={modalOpen}
      closeModal={() => {}}
      backdropVariantsClass="!w-[60%]"
    >
      <div className="pt-38 text-black mb-20 pr-20 gap-10">
        <div className="flex gap-14">
          <div>
            <p className="text-xs">STEP 5</p>
            <div className="">
              <h2 className="uppercase font-[500] leading-[122%] text-[50px] mt-3">
                Order Placement & Shipping
              </h2>
              <p className="mt-6">
                We&apos;ll place the order with the international retailer on your
                behalf and have it delivered to our secure overseas address.
                <br />
                <br />
                Once your items arrive at our address, they&apos;ll be forwarded
                to Lagos and available for pickup at Vamp.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src={slide5Img}
              alt="slide-2-img"
              className="max-w-[274px] object-cover"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleOpenStep6}
          className=" text-xs uppercase font-[500] h-[40px] pr-1 pl-2 border border-black rounded-[3px] w-full flex items-center justify-between mt-24"
        >
          STEP 6
          <div className="w-[28px] min-w-[28px] aspect-square centered rounded-[3px] bg-black">
            <ArrowDownRight size={20} color="#FFFFFF" />
          </div>
        </button>
      </div>
    </Modal>
  );
};

export default Step5Slide;

import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

import { Modal } from "@/app/components/Modal";

import slide4Img from "../../../../public/assets/slide4Img.webp";

interface Step2SlideProps {
  modalRef: React.RefObject<HTMLDivElement | null>;
  modalOpen: boolean;
  handleOpenStep5: () => void;
}

const Step4Slide = ({ modalOpen, handleOpenStep5 }: Step2SlideProps) => {
  return (
    <Modal
      variant="middle"
      className={clsx(
        "w-full select-none bg-white !mt-0 pl-[16.6%] py-[45px] min-h-full"
      )}
      showDialog={modalOpen}
      closeModal={() => {}}
      backdropVariantsClass="!w-[60%]"
    >
      <div className="pt-18 text-black mb-20 h-full overflow-y-auto pr-20 ">
        <p className="text-xs">STEP 4</p>
        <div className="flex flex-col xl:flex-row items-end xl:gap-14">
          <h2 className="xl:min-w-[363px] uppercase font-[500] leading-[122%] text-[50px] mt-3">
            MAKE PAYMENT
          </h2>
          <p>
            Pay the total amount on the invoice to the Vamp account provided.
            After your payment is confirmed, we’ll handle the rest.
          </p>
        </div>
        <Image
          src={slide4Img}
          alt="slide-2-img"
          className="w-full h-auto mt-10"
        />
        <button
          type="button"
          onClick={handleOpenStep5}
          className="mt-8 text-xs uppercase font-[500] h-[40px] pr-1 pl-2 border border-black rounded-[3px] w-full flex items-center justify-between"
        >
          STEP 5
          <div className="w-[28px] min-w-[28px] aspect-square centered rounded-[3px] bg-black">
            <ArrowDownRight size={20} color="#FFFFFF" />
          </div>
        </button>
      </div>
    </Modal>
  );
};

export default Step4Slide;

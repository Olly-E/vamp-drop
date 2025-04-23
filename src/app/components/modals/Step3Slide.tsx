import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

import { Modal } from "@/app/components/Modal";

import slide3Img1 from "../../../../public/assets/slide3Img1.webp";
import slide3Img2 from "../../../../public/assets/slide3Img2.webp";

interface Step2SlideProps {
  modalRef: React.RefObject<HTMLDivElement | null>;
  modalOpen: boolean;
  handleOpenStep4: () => void;
}

const Step2Slide = ({ modalOpen, handleOpenStep4 }: Step2SlideProps) => {
  return (
    <Modal
      variant="middle"
      className={clsx(
        "w-full min-h-full select-none bg-[#E6F6E3] !mt-0 pl-8 lg:pl-[16.6%] py-[45px]"
      )}
      showDialog={modalOpen}
      closeModal={() => {}}
      backdropVariantsClass="w-full md:!w-[60%]"
    >
      <div className="pt-18 text-black mb-20 pr-8 lg:pr-20">
        <p className="text-xs">STEP 3</p>
        <div className="sm:w-[457px]">
          <h2 className="uppercase font-[500] leading-[122%] text-[45px] sm:text-[50px] mt-3">
            Receive Your Invoice in Naira
          </h2>
          <p className="mt-6">
            Once you submit the order form, our team will review the details and
            calculate the total cost, converted into Naira, including our 10%
            Vamp Drop service fee.
            <br />
            <br />
            We&apos;ll email you an invoice with instructions to make payment
            into our Nigerian account.
          </p>
        </div>
        <div className="flex gap-8 mt-6 flex-col sm:flex-row sm:pr-8 lg:pr-10">
          <Image
            src={slide3Img1}
            alt="slide-2-img"
            className="sm:w-[50%]"
          />
          <Image
            src={slide3Img2}
            alt="slide-2-img"
            className="sm:w-[50%]"
          />
        </div>
        <button
          type="button"
          onClick={handleOpenStep4}
          className="mt-8 text-xs uppercase font-[500] h-[40px] pr-1 pl-2 border border-black rounded-[3px] w-full flex items-center justify-between"
        >
          STEP 4
          <div className="w-[28px] min-w-[28px] aspect-square centered rounded-[3px] bg-black">
            <ArrowDownRight size={20} color="#FFFFFF" />
          </div>
        </button>
      </div>
    </Modal>
  );
};

export default Step2Slide;

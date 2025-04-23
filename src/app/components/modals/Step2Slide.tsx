import React from "react";
import clsx from "clsx";

import { Modal } from "@/app/components/Modal";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

import slide2Img from "../../../../public/assets/slide2Img.webp";

interface Step2SlideProps {
  modalRef: React.RefObject<HTMLDivElement | null>;
  modalOpen: boolean;
  handleOpenStep3: () => void;
}

const Step2Slide = ({ modalOpen, handleOpenStep3 }: Step2SlideProps) => {
  return (
    <Modal
      variant="middle"
      className={clsx(
        "w-full select-none bg-[#F9F9E0] !mt-0 pl-8 lg:pl-[16.6%] py-[45px] min-h-full"
      )}
      showDialog={modalOpen}
      closeModal={() => {}}
      backdropVariantsClass="w-full md:!w-[60%]"
    >
      <div className="pt-18 text-black  mb-20 h-full overflow-y-auto pr-8 lg:pr-20 ">
        <p className="text-xs">STEP 2</p>
        <div className="flex flex-col xl:flex-row items-start xl:gap-14">
          <h2 className="xl:min-w-[363px] uppercase font-[500] leading-[122%] text-[45px] sm:text-[50px] mt-3">
            Fill Out the Order Form
          </h2>
          <p>
            Use our simple order form to submit the details of your selected
            items. This helps us accurately calculate the total cost, including
            our 10% service fee.
          </p>
        </div>
        <Image
          src={slide2Img}
          alt="slide-2-img"
          className="w-full h-auto mt-10"
        />
        <button
          type="button"
          onClick={handleOpenStep3}
          className="mt-8 text-xs uppercase font-[500] h-[40px] pr-1 pl-2 border border-black rounded-[3px] w-full flex items-center justify-between"
        >
          STEP 3
          <div className="w-[28px] min-w-[28px] aspect-square centered rounded-[3px] bg-black">
            <ArrowDownRight size={20} color="#FFFFFF" />
          </div>
        </button>
      </div>
    </Modal>
  );
};

export default Step2Slide;

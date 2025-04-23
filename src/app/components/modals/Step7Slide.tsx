import Image from "next/image";
import React from "react";
import clsx from "clsx";

import { Modal } from "@/app/components/Modal";

import slide7Img from "../../../../public/assets/slide7Img.webp";
import { ArrowDownRight } from "lucide-react";

interface Step7SlideProps {
  modalRef: React.RefObject<HTMLDivElement | null>;
  modalOpen: boolean;
  handleOpenStep8: () => void;
}

const Step7Slide = ({ modalOpen, handleOpenStep8 }: Step7SlideProps) => {
  return (
    <Modal
      variant="middle"
      className={clsx(
        "w-full select-none bg-white !mt-0 pl-8 lg:pl-[16.6%] py-[45px] min-h-full"
      )}
      showDialog={modalOpen}
      closeModal={() => {}}
      backdropVariantsClass="w-full md:!w-[60%]"
    >
      <div className="pt-18 text-black mb-20 h-full overflow-y-auto pr-8 lg:pr-20 ">
        <p className="text-xs">STEP 7</p>
        <div className="flex flex-col xl:flex-row items-start xl:gap-14">
          <h2 className="xl:min-w-[363px] uppercase font-[500] leading-[122%] text-[50px] mt-3">
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
          className="w-full h-auto mt-10"
        />
        <button
          type="button"
          onClick={handleOpenStep8}
          className="mt-8 text-xs uppercase font-[500] h-[40px] pr-1 pl-2 border border-black rounded-[3px] w-full flex items-center justify-between"
        >
          PLACE YOUR ORDER
          <div className="w-[28px] min-w-[28px] aspect-square centered rounded-[3px] bg-black">
            <ArrowDownRight size={20} color="#FFFFFF" />
          </div>
        </button>
      </div>
    </Modal>
  );
};

export default Step7Slide;

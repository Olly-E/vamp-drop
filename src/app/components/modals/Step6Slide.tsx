import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

import { Modal } from "@/app/components/Modal";

import slide6Img1 from "../../../../public/assets/slide6Img1.webp";
import slide6Img2 from "../../../../public/assets/slide6Img2.webp";

interface Step5SlideProps {
  modalRef: React.RefObject<HTMLDivElement | null>;
  modalOpen: boolean;
  handleOpenStep7: () => void;
}

const Step6Slide = ({ modalOpen, handleOpenStep7 }: Step5SlideProps) => {
  return (
    <Modal
      variant="middle"
      className={clsx(
        "w-full min-h-full select-none bg-[#F6E3E3] !mt-0 pl-8 lg:pl-[16.6%] py-[45px]"
      )}
      showDialog={modalOpen}
      closeModal={() => {}}
      backdropVariantsClass="w-full md:!w-[60%]"
    >
      <div className="pt-18 text-black mb-20 pr-8 lg:pr-20">
        <p className="text-xs">STEP 6</p>
        <div className="sm:w-[457px]">
          <h2 className="uppercase font-[500] leading-[122%] text-[50px] mt-3">
            Collect Your Order at Vamp in Lagos
          </h2>
          <p className="mt-6">
            When your item is ready for pickup, you’ll receive a notification
            from us. Come to Vamp and pick up your order at your convenience.
          </p>
        </div>
        <div className="flex gap-8 mt-10 flex-wrap">
          <Image
            src={slide6Img1}
            alt="slide-2-img"
            className="lg:max-w-[403px] h-auto"
          />
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Vamp/@6.4478113,3.4675068,17z/data=!4m7!3m6!1s0x103bf5467664fe95:0x6671f321a6a245bc!4b1!8m2!3d6.4478113!4d3.4700817!16s%2Fg%2F11v459v7tq?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
            className=""
          >
            <Image
              src={slide6Img2}
              alt="slide-2-img"
              className=" w-[300px] h-auto"
            />
          </a>
        </div>
        <button
          type="button"
          onClick={handleOpenStep7}
          className="mt-8 text-xs uppercase font-[500] h-[40px] pr-1 pl-2 border border-black rounded-[3px] w-full flex items-center justify-between"
        >
          STEP 7
          <div className="w-[28px] min-w-[28px] aspect-square centered rounded-[3px] bg-black">
            <ArrowDownRight size={20} color="#FFFFFF" />
          </div>
        </button>
      </div>
    </Modal>
  );
};

export default Step6Slide;

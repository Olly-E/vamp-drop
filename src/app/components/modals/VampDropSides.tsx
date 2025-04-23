import React from "react";
import clsx from "clsx";

import { useComponentVisible } from "@/app/hooks/useComponentVisible";
import { ContactUsForm } from "../ContatcUsForm";
import { Modal } from "@/app/components/Modal";
import WhyChooseVamp from "./WhyChooseVamp";
import ReadyToOrder from "./ReadToOrder";

import Step2Slide from "./Step2Slide";
import Step3Slide from "./Step3Slide";
import Step4Slide from "./Step4Slide";
import Step5Slide from "./Step5Slide";
import Step6Slide from "./Step6Slide";
import Step7Slide from "./Step7Slide";
import Step1Info from "../Step1Info";
import FixedButton from "../FixedButton";

interface VampDropSlidesProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.RefObject<HTMLDivElement | null>;
  modalOpen: boolean;
  handleClose: () => void;
}

const VampDropSlides = ({
  modalOpen,
  handleClose,
  setModalOpen,
}: VampDropSlidesProps) => {
  const {
    ref: slide2Ref,
    isComponentVisible: slide2Visible,
    setIsComponentVisible: setSlide2Visible,
    handleClickOnDropDownButton: handleSlide2Visible,
  } = useComponentVisible();

  const {
    ref: slide3Ref,
    isComponentVisible: slide3Visible,
    setIsComponentVisible: setSlide3Visible,
    handleClickOnDropDownButton: handleSlide3Visible,
  } = useComponentVisible();

  const {
    ref: slide4Ref,
    isComponentVisible: slide4Visible,
    setIsComponentVisible: setSlide4Visible,
    handleClickOnDropDownButton: handleSlide4Visible,
  } = useComponentVisible();

  const {
    ref: slide5Ref,
    isComponentVisible: slide5Visible,
    setIsComponentVisible: setSlide5Visible,
    handleClickOnDropDownButton: handleSlide5Visible,
  } = useComponentVisible();

  const {
    ref: slide6Ref,
    isComponentVisible: slide6Visible,
    setIsComponentVisible: setSlide6Visible,
    handleClickOnDropDownButton: handleSlide6Visible,
  } = useComponentVisible();

  const {
    ref: slide7Ref,
    isComponentVisible: slide7Visible,
    setIsComponentVisible: setSlide7Visible,
    handleClickOnDropDownButton: handleSlide7Visible,
  } = useComponentVisible();

  const {
    ref: slide8Ref,
    isComponentVisible: slide8Visible,
    setIsComponentVisible: setSlide8Visible,
    handleClickOnDropDownButton: handleSlide8Visible,
  } = useComponentVisible();

  const {
    ref: slide9Ref,
    isComponentVisible: slide9Visible,
    setIsComponentVisible: setSlide9Visible,
    handleClickOnDropDownButton: handleSlide9Visible,
  } = useComponentVisible();

  const handleCloseAllModal = () => {
    setSlide2Visible(false);
    setSlide3Visible(false);
    setSlide4Visible(false);
    setSlide5Visible(false);
    setSlide6Visible(false);
    setSlide7Visible(false);
    setSlide8Visible(false);
    setSlide9Visible(false);
    setTimeout(() => {
      setModalOpen(false);
    }, 1000);
  };

  return (
    <Modal
      variant="middle"
      className={clsx("w-screen h-screen bg-white !mt-0")}
      showDialog={modalOpen}
      closeModal={handleClose}
    >
      <FixedButton handleClick={handleCloseAllModal} />
      <div className="md:flex w-full h-full">
        <div className="md:w-[60%] min-h-full h-full relative overflow-y-auto">
          <div className="pl-8 lg:pl-[16.6%] bg-white pt-[45px] pr-8">
            <Step1Info handleOpenStep2={handleSlide2Visible} />
          </div>
          <Step2Slide
            handleOpenStep3={handleSlide3Visible}
            modalRef={slide2Ref}
            modalOpen={slide2Visible}
          />
          <Step3Slide
            handleOpenStep4={handleSlide4Visible}
            modalRef={slide3Ref}
            modalOpen={slide3Visible}
          />
          <Step4Slide
            handleOpenStep5={handleSlide5Visible}
            modalRef={slide4Ref}
            modalOpen={slide4Visible}
          />
          <Step5Slide
            handleOpenStep6={handleSlide6Visible}
            modalRef={slide5Ref}
            modalOpen={slide5Visible}
          />
          <Step6Slide
            handleOpenStep7={handleSlide7Visible}
            modalRef={slide6Ref}
            modalOpen={slide6Visible}
          />
          <Step7Slide
            modalRef={slide7Ref}
            modalOpen={slide7Visible}
            handleOpenStep8={handleSlide8Visible}
          />
          <WhyChooseVamp
            modalRef={slide8Ref}
            modalOpen={slide8Visible}
            handleOpenStep8={handleSlide9Visible}
          />
          <ReadyToOrder modalRef={slide9Ref} modalOpen={slide9Visible} />
        </div>
        <div className="w-[40%] pr-8 lg:pr-[calc(10%)] bg-white pt-[45px] relative !z-[100000] border border-black overflow-y-auto hidden md:block">
          <ContactUsForm />
        </div>
      </div>
    </Modal>
  );
};

export default VampDropSlides;

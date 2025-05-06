"use client";
import React from "react";
import clsx from "clsx";

import ReadyToOrderSection from "./ReadToOrderSection";
import WhyChooseVampSec from "./WhyChooseVampSec";
import { ContactUsForm } from "../ContatcUsForm";
import Step2Section from "./Step2Section";
import Step3Section from "./Step3Section";
import Step4Section from "./Step4Section";
import Step5Section from "./Step5Section";
import Step6Section from "./Step6Section";
import Step7Section from "./Step7Section";
import Step1Info from "../Step1Info";
import HomeSectionMobile from "./HomeSection";

interface Step1SectionProp {
  section1Ref: React.RefObject<HTMLDivElement | null>;
  handleOpenContactForm: () => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

const Step1Section = ({
  section1Ref,
  scrollToSection,
  handleOpenContactForm,
}: Step1SectionProp) => {
  return (
    <div
      className={clsx(
        "w-screen h-[100dvh] snap-start bg-white relative z-[20]"
      )}
    >
      <div className="md:flex w-full h-full">
        {/* Left side with scrollable sections */}
        <div
          className="md:w-[60%] h-[100dvh] overflow-auto snap-y snap-mandatory"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="h-[100dvh] snap-start block md:hidden">
            <HomeSectionMobile
              handleOpenContactForm={handleOpenContactForm}
              scrollToSection={scrollToSection}
              section1Ref={section1Ref}
            />
          </div>

          <div className="pl-8 h-[100dvh] lg:pl-[16.6%] snap-start bg-white pt-[45px] pr-8">
            <Step1Info section1Ref={section1Ref} />
          </div>
          <div className="h-[100dvh] snap-start">
            <Step2Section />
          </div>
          <div className="h-[100dvh] snap-start">
            <Step3Section />
          </div>
          <div className="h-[100dvh] snap-start">
            <Step4Section />
          </div>
          <div className="h-[100dvh] snap-start">
            <Step5Section />
          </div>
          <div className="h-[100dvh] snap-start">
            <Step6Section />
          </div>
          <div className="h-[100dvh] snap-start">
            <Step7Section />
          </div>
          <div className="h-[100dvh] snap-start">
            <WhyChooseVampSec />
          </div>
          <div className="h-[100dvh] snap-start">
            <ReadyToOrderSection />
          </div>
          {/* Mobile-only form at bottom */}
          <div className="h-[100dvh] snap-start block md:hidden overflow-y-auto z-10 relative">
            <div className="w-full bg-white mt-0 pl-8 lg:pl-[16.6%] min-h-full flex flex-col justify-between pr-8 text-black">
              <ContactUsForm />
            </div>
          </div>
        </div>

        {/* Right fixed form for desktop */}
        <div className="w-[40%] pr-8 lg:pr-[calc(10%)] bg-white pt-[45px] border border-black overflow-auto hidden md:block">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default Step1Section;

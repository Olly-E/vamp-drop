import React from "react";
import clsx from "clsx";

import { ContactUsForm } from "../ContatcUsForm";
import WhyChooseVampSec from "./WhyChooseVampSec";
import Step1Info from "../Step1Info";
import Step2Section from "./Step2Section";
import Step3Section from "./Step3Section";
import Step4Section from "./Step4Section";
import Step5Section from "./Step5Section";
import Step6Section from "./Step6Section";
import Step7Section from "./Step7Section";
import ReadyToOrderSection from "./ReadToOrderSection";

const Step1Section = () => {
  return (
    <div className={clsx("w-screen h-screen snap-start bg-white !mt-0")}>
      <div className="md:flex w-full h-full ">
        <div className="md:w-[60%] min-h-full h-screen relative overflow-y-scroll snap-y snap-mandatory">
          <div className="pl-8 h-screen lg:pl-[16.6%] snap-start bg-white pt-[45px] pr-8">
            <Step1Info />
          </div>
          <div className="h-screen snap-start">
            <Step2Section />
          </div>
          <div className="h-screen snap-start">
            <Step3Section />
          </div>
          <div className="h-screen snap-start">
            <Step4Section />
          </div>
          <div className="h-screen snap-start">
            <Step5Section />
          </div>
          <div className="h-screen snap-start">
            <Step6Section />
          </div>
          <div className="h-screen snap-start">
            <Step7Section />
          </div>
          <div className="h-screen snap-start">
            <WhyChooseVampSec />
          </div>
          <div className="h-screen snap-start">
            <ReadyToOrderSection />
          </div>
          <div className="h-screen snap-start black sm:hidden overflow-y-auto">
            <div className="w-full select-none bg-white !mt-0 pl-8 lg:pl-[16.6%] min-h-full flex flex-col justify-between pr-8 text-black">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1Section;

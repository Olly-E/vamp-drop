import Image from "next/image";
import React from "react";
import clsx from "clsx";

import { Button } from "../elements/Button";
import { ChevronDown } from "lucide-react";

import heroImg from "../../../../public/assets/heroImg.webp";

interface HomeSectionMobileProp {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  section1Ref: React.RefObject<HTMLDivElement | null>;
  handleOpenContactForm: () => void;
}
const HomeSectionMobile = ({
  scrollToSection,
  section1Ref,
  handleOpenContactForm,
}: HomeSectionMobileProp) => {
  return (
    <div
      className={clsx(
        "w-full select-none !mt-0 py-[45px] h-full overflow-hidden"
      )}
      style={{ backgroundImage: "var(--color-vamp-gradient)" }}
    >
      <Image
        src={heroImg}
        alt="hero-img"
        className="max-w-[279.13px] mx-auto mt-6 lg:mx-0"
      />
      <div className="flex pl-8 lg:pl-[16.6%] flex-col pr-8 lg:pr-20 pt-4 xl:px-0 lg:gap-10 lg:flex-row items-start justify-between w-full">
        <div className="lg:w-[527px]">
          <p className="bg-black/5 text-black px-3 rounded py-1 text-[11px] sm:text-[13px] w-fit font-medium">
            ORDER WITH EASE — WELCOME TO VAMP DROP
          </p>
          <h1 className="text-[35px] sm:text-[50px] text-black leading-[107%] mt-5">
            ORDER ABROAD PICKUP AT VAMP
          </h1>
          <p className="text-[20px] sm:text-[24px] text-primary font-[500] mt-6 lg:w-[500px] xl:w-[527px]">
            Let’s handle your international orders for you.
          </p>
          <p className="text-primary/50 lg:w-[506px] mt-5">
            Vamp Drop is a service that let’s us handle your international
            orders and deliver your items to your doorstep.
          </p>
          <div className="flex items-center max-w-[406px] gap-[20px]">
            <Button
              onClick={() => scrollToSection(section1Ref)}
              className="flex items-center w-full mt-6 lg:justify-between"
            >
              Explore Vamp Drop
              <ChevronDown
                size={14}
                strokeWidth={2}
                color="#FFFFFF"
                className="hidden lg:block"
              />
            </Button>
            <Button
              onClick={handleOpenContactForm}
              variant="outline"
              className="flex lg:hidden items-center w-full mt-6 !bg-white"
            >
              Fill Our Form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionMobile;

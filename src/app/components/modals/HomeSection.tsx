import Image from "next/image";
import React from "react";
import clsx from "clsx";

import hero2mg from "../../../public/assets/hero2Img.webp";
import naija from "../../../../public/assets/naija.svg";

import { Button } from "../elements/Button";
import { ChevronDown } from "lucide-react";
import { PERKS_DATA } from "@/app/utils/dummyData";

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
        "w-full select-none bg-[#F9F9E0] !mt-0 pl-8 lg:pl-[16.6%] py-[45px] min-h-full"
      )}
    >
      {" "}
      <div className="flex flex-col px-4 xs:px-[30px] xl:px-0 lg:gap-10 lg:flex-row items-start justify-between w-full">
        <div className="lg:w-[527px]">
          <p className="bg-black/5 text-black px-3 rounded py-1 text-[13px] w-fit font-medium">
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
              className="flex lg:hidden items-center w-full mt-6 "
            >
              Fill Our Form
            </Button>
          </div>
          <div className="flex items-center gap-2 mt-6 lg:mt-32">
            <Image src={naija} alt="nigeria" />
            <p className="text-black">Nigeria’s Trusted Delivery Service</p>
          </div>
        </div>
        <Image
          src={hero2mg}
          alt="hero-img"
          className="sm:max-w-[541.1px] mx-auto mt-14 lg:mt-0 lg:mx-0"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch gap-4 -mt-10 px-4 xs:px-[30px] xl:px-0">
        {PERKS_DATA?.map((card) => (
          <div key={card.id} className={clsx("rounded-lg")}>
            <div className=" bg-white text-primary py-6 px-6 rounded ">
              <Image
                src={card.icon}
                alt="icon"
                className="max-w-[24px] h-auto"
              />
              <p className="text-[20px] font-bold mt-4">{card.title}</p>
              <p className="mt-3">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSectionMobile;

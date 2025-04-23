"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

import { useComponentVisible } from "../hooks/useComponentVisible";
import VampDropSlides from "../components/modals/VampDropSides";
import { Button } from "../components/elements/Button";
import { PERKS_DATA } from "../utils/dummyData";

import hero2mg from "../../../public/assets/hero2Img.webp";
import naija from "../../../public/assets/naija.svg";

export default function Home() {
  const {
    handleCloseDropDown,
    ref: vampDropSlideRef,
    isComponentVisible: vampDropSlideVisible,
    setIsComponentVisible: setVampDropSlideVisible,
    handleClickOnDropDownButton: handleOpenVampDropSlide,
  } = useComponentVisible();

  return (
    <section
      className="lg:h-[calc(100%-45px)] text-white w-full relative"
      style={{ backgroundImage: "var(--color-vamp-gradient)" }}
    >
      <div className="max-w-[1141px] mx-auto pt-16 pb-10">
        <div className="flex flex-col px-4 xs:px-[30px] xl:px-0 lg:gap-10 lg:flex-row items-start justify-between w-full">
          <div className="lg:w-[527px]">
            <p className="bg-black/5 text-black px-3 rounded py-1 text-[13px] w-fit font-medium">
              ORDER WITH EASE — WELCOME TO VAMP DROP
            </p>
            <h1 className="text-[50px] text-black leading-[107%] mt-5">
              ORDER ABROAD PICKUP AT VAMP
            </h1>
            <p className="text-[20px] sm:text-[24px] text-primary font-[500] mt-6 lg:w-[500px] xl:w-[527px]">
              Let’s handle your international orders for you.
            </p>
            <p className="text-primary/50 lg:w-[506px] mt-5">
              Vamp Drop is a service that let’s us handle your international
              orders and deliver your items to your doorstep.
            </p>
            <Button
              onClick={handleOpenVampDropSlide}
              className="flex items-center !justify-between w-full mt-6"
            >
              Explore Vamp Drop
              <ChevronDown
                color="#FFFFFF"
                size={19}
                strokeWidth={3}
                className="min-w-[12px]"
              />
            </Button>
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
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch gap-4 -mt-10 px-4 xs:px-[30px] xl:px-0">
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
      <VampDropSlides
        handleClose={handleCloseDropDown}
        modalRef={vampDropSlideRef}
        modalOpen={vampDropSlideVisible}
        setModalOpen={setVampDropSlideVisible}
      />
    </section>
  );
}

import { Instagram } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/assets/logo.svg";
import x from "../../../public/assets/x.svg";

import MobileContactSection from "../components/MobileContactSection";
import { useComponentVisible } from "../hooks/useComponentVisible";

const Header = () => {
  const {
    handleClickOnDropDownButton,
    isComponentVisible,
    ref,
    dropDownButtonRef,
  } = useComponentVisible();
  return (
    <div className="fixed top-0 z-[500] h-[45px] border-y border-y-primary w-full flex items-center bg-white">
      <div className=" flex items-center justify-between text-black w-full px-8 lg:px-[10%]">
        <Link href="/" className="">
          <Image src={logo} alt="logo" className="" />
        </Link>
        <div className="flex items-center gap-2">
          <button
            ref={dropDownButtonRef}
            onClick={handleClickOnDropDownButton}
            type="button"
            className="inline md:hidden text-xs"
          >
            FORM
          </button>
          <Link href="/blog" className="text-xs">
            BLOG
          </Link>
          <Link href="/" className="">
            <Instagram size={18} color="#050505" />
          </Link>
          <Link href="/" className="">
            <Image src={x} alt="x-logo" className="w-[16px] h-auto" />
          </Link>
        </div>
      </div>
      <MobileContactSection modalOpen={isComponentVisible} modalRef={ref} />
    </div>
  );
};

export default Header;

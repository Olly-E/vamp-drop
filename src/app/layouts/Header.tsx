import { Instagram } from "iconsax-react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/assets/logo.svg";
import x from "../../../public/assets/x.svg";

interface HeaderProps {
  handleClickOnDropDownButton: () => void;
  dropDownButtonRef: React.RefObject<HTMLButtonElement | null>;
}
const Header = ({
  handleClickOnDropDownButton,
  dropDownButtonRef,
}: HeaderProps) => {
  return (
    <div className="sticky top-0 z-[500] h-[45px] border-y border-y-primary w-full flex items-center bg-white">
      <div className=" flex items-center justify-between text-black w-full px-8 lg:px-[10%]">
        <Link href='/' className="">
          <Image src={logo} alt="logo" className="" />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="">
            <Instagram size={18} color="#050505" />
          </Link>
          <Link href="/" className="">
            <Image src={x} alt="x-logo" className="w-[16px] h-auto" />
          </Link>
          <button
            ref={dropDownButtonRef}
            onClick={handleClickOnDropDownButton}
            type="button"
            className="inline md:hidden min-w-[18px]"
          >
            <Phone size={18} color="#000000" />
          </button>
          <Link href="/blog" className="text-sm">
            BLOG{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

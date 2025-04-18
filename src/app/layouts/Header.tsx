import { Instagram } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/assets/logo.svg";
import x from "../../../public/assets/x.svg";

const Header = () => {
  return (
    <div className="relative z-[500] h-[45px] border-y border-y-primary w-full flex items-center bg-white">
      <div className="flex items-center justify-between text-black w-full px-[10%] ">
        <Image src={logo} alt="logo" className="" />

        <div className="flex items-center gap-4">
          <Link href="/" className="">
            <Instagram size={18} color="#050505" />
          </Link>
          <Link href="/" className=" ">
            <Image src={x} alt="x-logo" className="w-[16px] h-auto" />
          </Link>
          <Link href="/" className="text-sm">
            BLOG{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

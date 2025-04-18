import Image from "next/image";
import React from "react";
import clsx from "clsx";

import LoginForm from "../../features/auth/components/LoginForm";

import authBg from "../../../../public/assets/authBg.webp";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex relative items-center overflow-hidden text-white text-center">
      <div className="h-screen w-screen flex p-10 flex-col justify-between relative">
        <Image
          src={authBg}
          className={clsx(
            "object-cover left-0 scale-[1.20] object-top transition-all duration-[1200ms] ease-out"
          )}
          alt="world-img"
          priority
          fill
        />

      </div>
      <div
        className={clsx(
          "w-full bg-dark absolute z-1 transition-all duration-[1200ms] ease-out sm:w-[481px] h-[537.46px] overflow-y-auto translate-x-[50%] right-[50%] rounded-[20px]"
        )}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

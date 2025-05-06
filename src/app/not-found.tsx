import React from "react";

import { Button } from "./components/elements/Button";

const NotFound = () => {
  return (
    <div className="h-[100dvh] bg-black text-center !pt-20 text-white w-full">
      <h1 className="font-normal text-[44px]">ERROR</h1>
      <div className="w-fit mx-auto relative">
        {/* <Image
          src={left404}
          alt="left-dummy"
          className="w-[103.91px] h-auto absolute -left-32 top-[110px]"
        /> */}
        <p className="text-[350px] font-bold leading-[100%]">404</p>
        {/* <Image
          src={right404}
          alt="right-dummy"
          className="w-[129.24px] h-auto absolute -right-[130px] top-[270px]"
        /> */}
      </div>
      <p className="w-[754px] mx-auto text-[25px] text-white/50">
        The page you are trying to access doesn’t exist or has been moved. Try
        going to our homepage.
      </p>

      <Button as="link" href="/" className="text-black m-auto mt-6">
        Go to Homepage
      </Button>
    </div>
  );
};

export default NotFound;

import React from "react";
import clsx from "clsx";

const ReadyToOrderSection = () => {
  return (
    <div
      className={clsx(
        "w-full select-none bg-white !mt-0 pl-8 lg:pl-[16.6%] py-[45px] min-h-full flex flex-col justify-between pr-8 text-black"
      )}
    >
      <div className="max-w-[442px] mt-20">
        <h2 className="xl:min-w-[363px] uppercase font-[500] leading-[122%] text-[35px] sm:text-[50px] mt-3">
          READY TO ORDER?
        </h2>
        <p className="mt-[30px]">
          Follow the steps above, or reach out to us if you have questions about
          the process. Vamp Drop makes it easy to bring your favorite products
          from abroad straight to you!
        </p>
      </div>

      <div className="h-[100px] w-full text-sm flex items-center border-t border-t-black justify-between gap-6 mr-20">
        <p>© Vamp.com • 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default ReadyToOrderSection;

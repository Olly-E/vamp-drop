import React from "react";
import clsx from "clsx";

import { Modal } from "@/app/components/Modal";

interface ReadyToOrderProps {
  modalRef: React.RefObject<HTMLDivElement | null>;
  modalOpen: boolean;
}

const ReadyToOrder = ({ modalOpen }: ReadyToOrderProps) => {
  return (
    <Modal
      variant="middle"
      className={clsx(
        "w-full select-none bg-white !mt-0 pl-8 lg:pl-[16.6%] py-[45px] min-h-full flex flex-col justify-between pr-8"
      )}
      showDialog={modalOpen}
      closeModal={() => {}}
      backdropVariantsClass="w-full md:!w-[60%]"
    >
      <div className="pt-18 text-black mb-20 h-full overflow-y-auto">
        <div className="mt-36">
          <div className="max-w-[442px]">
            <h2 className="xl:min-w-[363px] uppercase font-[500] leading-[122%] text-[50px] mt-3">
              READY TO ORDER?
            </h2>
            <p className="mt-[30px]">
              Follow the steps above, or reach out to us if you have questions
              about the process. Vamp Drop makes it easy to bring your favorite
              products from abroad straight to you!
            </p>
          </div>
        </div>
      </div>
      <div className="h-[100px] text-sm flex items-center border-t border-t-black justify-between gap-6 mr-20">
        <p>© Vamp.com • 2024 All Rights Reserved</p>
      </div>
    </Modal>
  );
};

export default ReadyToOrder;

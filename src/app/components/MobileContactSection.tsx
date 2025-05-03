import React from "react";
import clsx from "clsx";

import { ContactUsForm } from "./ContatcUsForm";
import { Modal } from "@/app/components/Modal";

interface MobileContactSectionProps {
  modalRef: React.RefObject<HTMLDivElement | null>;
  modalOpen: boolean;
}

const MobileContactSection = ({
  modalOpen,
  modalRef,
}: MobileContactSectionProps) => {
  return (
    <Modal
      modalRef={modalRef}
      closeModal={() => {}}
      variant="right"
      className={clsx(
        "w-full select-none bg-[#FFFFFF] !mt-0 px-8 py-[40px] min-h-full block lg:hidden"
      )}
      showDialog={modalOpen}
      backdropVariantsClass="w-full block lg:hidden"
    >
      <div className=" text-black mb-20 h-full overflow-y-auto">
        <ContactUsForm />
      </div>
    </Modal>
  );
};

export default MobileContactSection;

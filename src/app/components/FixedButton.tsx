"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface FixedButtonProp {
  handleClick: () => void;
}
const FixedButton = ({ handleClick }: FixedButtonProp) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <button
      onClick={handleClick}
      className="fixed left-[10%] top-1 w-[120px] text-white px-4 py-2 rounded-md h-[35px] z-[999999]"
    ></button>,
    document.body
  );
};

export default FixedButton;

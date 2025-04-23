"use client";

import React from "react";

import MobileContactSection from "../components/MobileContactSection";
import { useComponentVisible } from "../hooks/useComponentVisible";
import Header from "../layouts/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    handleClickOnDropDownButton,
    isComponentVisible,
    ref,
    dropDownButtonRef,
  } = useComponentVisible();

  console.log(isComponentVisible);
  return (
    <div className="h-screen">
      <Header
        handleClickOnDropDownButton={handleClickOnDropDownButton}
        dropDownButtonRef={dropDownButtonRef}
      />
      <div id="modal-root" />
      {children}
      <MobileContactSection modalOpen={isComponentVisible} modalRef={ref} />
    </div>
  );
}

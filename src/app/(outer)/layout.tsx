"use client";

import React from "react";

import Header from "../layouts/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[100dvh]">
      <Header />
      <div id="modal-root" />
      {children}
    </div>
  );
}

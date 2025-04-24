import "react-phone-number-input/style.css";
import { Toaster } from "react-hot-toast";
import { Jost } from "next/font/google";
import type { Metadata } from "next";

import ReactQueryProvider from "./lib/react-query";

import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vamp drop",
  description:
    "a service that let’s us handle your international orders and deliver your items to your doorstep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>
        <ReactQueryProvider>
          {children} <Toaster />
        </ReactQueryProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}

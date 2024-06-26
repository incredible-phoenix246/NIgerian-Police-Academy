"use client";

import React, { Suspense, useEffect, useState } from "react";
import { cn } from "@/utils";
import { Button } from "../ui/button";
import { useStateCtx } from "@/context/StateCtx";
import useWindowHeight from "@/hooks/useDimension";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const scrollHeight = useWindowHeight();

  return (
    <nav
      className={cn(
        " max-[500px]:py-2 px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center transition-colors duration-500 bg-back",
        scrollHeight > 200
          ? "fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-white-main/50 py-2 border-b border-gray-200 shadow-md"
          : "sm:py-6 py-4",
        {
          "bg-back/60 ": scrollHeight > 800 && scrollHeight < 4300,
        }
      )}
    >
      <Link
        href="/?path=home"
        className={cn(
          " max-sm:w-[120px] max-[450px]:w-[100px] font-montserrat",
          scrollHeight > 200 ? "w-[120px] " : "w-fit"
        )}
      >
        <Image src="/logo.png" alt="logo" width={42} height={38} />
      </Link>
    </nav>
  );
};

export { Navbar };

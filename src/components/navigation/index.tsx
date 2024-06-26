"use client";

import React, { Suspense, useEffect, useState } from "react";
import { cn } from "@/utils";

import { useStateCtx } from "@/context/StateCtx";
import useWindowHeight from "@/hooks/useDimension";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { useSearchParams } from "next/navigation";
import { CloseSquare, HambergerMenu } from "iconsax-react";

const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const scrollHeight = useWindowHeight();
  const searchParams = useSearchParams().get("path");

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

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
      <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
        {NAV_LINKS.map((link) => (
          <Link
            href={
              link.link === "home"
                ? "/?path=home"
                : `/${link.link}?path=${link.link}`
            }
            key={link.id}
            onClick={() => {
              setIsActive(link.link);
            }}
            className={cn(
              " w-full text-black  flex justify-center capitalize text-base relative font-medium  before:bg-blue-main before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 ",
              isActive === link.link ? "text-blue-main before:w-full" : ""
            )}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex gap-x-3 xl:gap-x-5 [&>button]:border-blue-main [&>button]:border [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-md [&>button]:font-medium [&>button]:text-blue-main">
        <button type="button">Login</button>
      </div>
      <div
        tabIndex={0}
        className="lg:hidden text-2xl cursor-pointer text-blue-main"
        onClick={() => setShowMobileMenu(true)}
      >
        <HambergerMenu />
      </div>
      <MobileNaBar />
    </nav>
  );
};

const MobileNaBar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const [isActive, setIsActive] = useState("");
  const searchParams = useSearchParams().get("path");

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <>
      <div
        className={cn(
          "lg:hidden fixed min-h-screen w-full bg-black/50 top-0 left-0 z-20 transition-all duration-300",
          showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowMobileMenu(false)}
      />
      <nav
        className={cn(
          "pt-20 lg:hidden  px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full max-w-[300px] sm:max-w-[70%] md:max-w-[50%] justify-between items-center bg-white/90 backdrop-blur-lg fixed right-0 top-0 z-50 h-screen transition-all opacity-0",
          showMobileMenu
            ? "translate-x-0 duration-1000 opacity-100"
            : "translate-x-full duration-300"
        )}
      >
        <button
          autoFocus
          aria-label="close menu"
          type="button"
          className="outline-none text-blue-main text-2xl sm:text-4xl absolute top-2 right-2 h-12 w-12 rounded-full flex justify-center items-center"
          onClick={() => setShowMobileMenu(false)}
          tabIndex={0}
        >
          <CloseSquare variant="Bulk" />
        </button>
        <div className="flex flex-col items-start h-full gap-y-10 ">
          {NAV_LINKS.map((link) => (
            <Link
              tabIndex={0}
              aria-label={link.label}
              href={
                link.link === "home"
                  ? "/?path=home"
                  : `${link.link}?path=${link.link}`
              }
              key={link.id}
              onClick={() => {
                setIsActive(link.link);
                setShowMobileMenu(false);
              }}
              className={cn(
                "text-black  flex justify-center capitalize relative font-medium  before:bg-primary-light before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 text-lg",
                isActive === link.link ? "before:w-full text-primary-light" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="lg:hidden flex flex-col gap-y-5 [&>button]:border-blue-main [&>button]:border [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-md [&>button]:font-medium [&>button]:text-blue-main">
            <button type="button">Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };

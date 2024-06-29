"use client";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "@/components/loaders";
import Image from "next/image";
import { Button } from "@ui/button";
import Link from "next/link";

const Typewriter = dynamic(() => import("typewriter-effect"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});
const About = () => {
  return (
    <section className="relative h-[500px] sm:h-[720px] w-full">
      <div className="w-full h-full max-h-[720px] hidden sm:block absolute top-0 left-0 bg-blue-main">
        <Image
          src="/back.jpg"
          alt="hero image"
          width={650}
          height={450}
          priority
          className="w-full h-full object-cover opacity-[70%]"
        />
      </div>
      <div className="w-full h-full max-h-[650px] sm:hidden absolute top-0 left-0 bg-blue-main">
        <Image
          src="/back.jpg"
          alt="hero image"
          width={650}
          height={450}
          priority
          className="w-full h-full object-cover opacity-[70%]"
        />
      </div>
      <div className="flex top-0 relative z-10 text-white h-full items-center w-full bg-black/70 justify-center px-2 sm:px-4 lg:px-8 transition-colors duration-500">
        <div className="flex flex-col gap-y-5 w-full sm:max-w-[90%]   xl:max-w-[85%] 2xl:max-w-[90%]  items-center">
          <h2 className="max-[400px]:text-base max-[500px]:text-lg text-xl sm:text-3xl md:text-4xl text-center xl:text-5xl 2xl:text-6xl font-semibold sm:font-bold scale-y-110 mb-4 lg:mb-8">
            <Typewriter
              component="span"
              options={{
                autoStart: true,
                delay: 100,
                loop: true,
                strings: [
                  "Globally acclaimed for training and academic excellence",
                  "Renowned for superior training and academic standards.",
                  "Internationally recognized for training and academic excellence.",
                  "Esteemed for high-quality training and academic standards.",
                  "Highly regarded for training and academic excellence.",
                  "Known for top-tier training and academic standards.",
                ],
                deleteSpeed: 50,
              }}
            />
          </h2>
          <p className="w-full sm:max-w-[80%] text-center sm:font-medium text-white/80 text-sm sm:text-lg">
            A model security training institution, internationally respected for
            its quality and efficiency, is known for rigorous academic standards
            and commitment to excellence. Graduates are well-equipped with the
            latest security skills, prepared to tackle challenging issues.
            {/*Faculty, comprising industry leaders, bring real-world insights,*/}
            {/*fostering innovation and critical thinking.*/}
            {/*  This blend of education*/}
            {/*and training has earned the institution a stellar international*/}
            {/*reputation.*/}
          </p>
          <div className="mt-3 lg:mt-6 w-full justify-center flex gap-x-5 lg:gap-x-10 ">
            <Button
              asChild
              className="bg-white py-6 text-lg px-12 text-blue-main hover:bg-white"
            >
              <Link href="/">GetStarted </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };

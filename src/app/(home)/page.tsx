import React from "react";
import { HeroSection, AboutSection, NewsSection } from "@/modules/home";

const page = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <NewsSection />
    </main>
  );
};

export default page;

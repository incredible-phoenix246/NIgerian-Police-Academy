import React from "react";
import {
  AboutSection,
  FaqSection,
  HeroSection,
  NewsSection,
} from "@/modules/home";
import { AimsAndObjesection } from "@/modules/about";

const page = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <FaqSection />
      <AimsAndObjesection />
      <NewsSection />
    </main>
  );
};

export default page;

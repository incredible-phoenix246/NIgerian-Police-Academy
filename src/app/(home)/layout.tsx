import { SideNavigation } from "@/components/navigation/sidebar";
import { Navbar, Footer } from "@/components/navigation";
import { Suspense } from "react";
import { SkeletonNavbar } from "@/components/skelton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideNavigation />
      <Suspense fallback={<SkeletonNavbar />}>
        <Navbar />
      </Suspense>
      <section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px] ">
        <div className="flex w-full flex-col h-full relative max-container">
          {children}
        </div>
        <Footer />
      </section>
    </>
  );
}

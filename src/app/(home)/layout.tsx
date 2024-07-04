import { SideNavigation } from "@/components/navigation/sidebar";
import { Navbar, Footer } from "@/components/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideNavigation />
      <Navbar />
      <section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px] ">
        <div className="flex w-full flex-col h-full relative max-container">
          {children}
        </div>
        <Footer />
      </section>
    </>
  );
}

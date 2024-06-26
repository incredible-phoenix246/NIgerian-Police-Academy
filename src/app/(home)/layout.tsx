import React from "react";
import { Navbar } from "@/components/navigation";
import { Suspense } from "react";
import { SkeletonNavbar } from "@/components/skelton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<SkeletonNavbar />}>
        <Navbar />
      </Suspense>
      {children}
    </>
  );
}

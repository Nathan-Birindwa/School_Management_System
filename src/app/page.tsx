"use client";
import Image from "next/image";
import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";
import DashboardPage from "./dashboard/page";

export default function Home() {
  return (
    <div className="h-screen">
      <Nav />
      <div className="flex">
        <SideBar />
        {/* Pages */}
        <div className="mt-20">
          <DashboardPage />
        </div>
      </div>
    </div>
  );
}

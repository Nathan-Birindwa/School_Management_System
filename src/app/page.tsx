"use client";
import Image from "next/image";
import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <div>
      <div>
        <Nav />
        <div className="w-min">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

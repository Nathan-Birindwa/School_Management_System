"use client";

import Nav from "@/components/Nav";
import SideBar from "@/components/SideBar";
import ChildCard from "@/components/ChildCard";
import pic1 from "../assets/pic1.png";

// Import specific Lucide Icons you want to use
import {
  Wallet,
  CalendarCheck,
  Award,
  DollarSign,
  ClipboardList,
  LineChart,
  Facebook,
  Twitter,
  User, // For individual child cards, maybe next to name or gender
  Calendar, // For admission date
  Hash, // For Roll and Admission ID
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Navigation */}
      <Nav />

      {/* Main layout: Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar />

        {/* Page Content */}
        <main className="flex-1 mt-20 p-6 bg-[#0d1117] overflow-y-auto">
          {/* Top Row: My Children */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* First Child Card */}
            <div className="bg-[#161b22] rounded shadow overflow-hidden">
              <ChildCard
                name="Don Balola Birindwa"
                gender="Male"
                roll="# 29044331"
                admissionId="# 123453550"
                admissionDate="23/02/2012"
                className="Primary 6"
                section="A"
                childImage={pic1}
                // You might need to adjust your ChildCard component to accept and render icons
                // For example, passing icon components as props or modifying internal structure.
                // For now, I'm just showing how you'd use them if ChildCard supports it.
                // Or you could place them directly around ChildCard if its internal structure is fixed.
              />
            </div>

            {/* Second Child Card */}
            <div className="bg-[#161b22] rounded shadow overflow-hidden">
              <ChildCard
                name="Sarah Balola Birindwa"
                gender="Female"
                roll="# 29044332"
                admissionId="# 123453551"
                admissionDate="15/03/2014"
                className="Primary 4"
                section="B"
                childImage={pic1}
              />
            </div>
          </div>
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#161b22] p-4 rounded shadow flex items-center">
              <Wallet className="w-5 h-5 text-[#e6edf3] mr-2" />{" "}
              {/* Example Icon */}
              <div>
                <h3 className="text-[#e6edf3] font-semibold mb-1">Due Fees</h3>
                <p className="text-[#7d8590] text-sm">No pending fees</p>
              </div>
            </div>
            <div className="bg-[#161b22] p-4 rounded shadow flex items-center">
              <CalendarCheck className="w-5 h-5 text-[#e6edf3] mr-2" />{" "}
              {/* Example Icon */}
              <div>
                <h3 className="text-[#e6edf3] font-semibold mb-1">
                  Upcoming Exams
                </h3>
                <p className="text-[#7d8590] text-sm">3 exams scheduled</p>
              </div>
            </div>
            <div className="bg-[#161b22] p-4 rounded shadow flex items-center">
              <Award className="w-5 h-5 text-[#e6edf3] mr-2" />{" "}
              {/* Example Icon */}
              <div>
                <h3 className="text-[#e6edf3] font-semibold mb-1">
                  Results Published
                </h3>
                <p className="text-[#7d8590] text-sm">View latest results</p>
              </div>
            </div>
            <div className="bg-[#161b22] p-4 rounded shadow flex items-center">
              <DollarSign className="w-5 h-5 text-[#e6edf3] mr-2" />{" "}
              {/* Example Icon */}
              <div>
                <h3 className="text-[#e6edf3] font-semibold mb-1">
                  Total Expenses
                </h3>
                <p className="text-[#7d8590] text-sm">$2,450 this term</p>
              </div>
            </div>
          </div>
          ---
          {/* Bottom Row: Notice + Expenses */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#161b22] p-4 rounded shadow h-64">
              <h3 className="text-[#e6edf3] font-semibold mb-4 flex items-center">
                <ClipboardList className="w-5 h-5 text-[#e6edf3] mr-2" />
                Notice Board
              </h3>
              <div className="space-y-2">
                <div className="text-[#7d8590] text-sm flex items-center">
                  • Parent-Teacher meeting on Friday
                </div>
                <div className="text-[#7d8590] text-sm flex items-center">
                  • Sports day preparations underway
                </div>
                <div className="text-[#7d8590] text-sm flex items-center">
                  • New uniform policy effective next month
                </div>
              </div>
            </div>
            <div className="bg-[#161b22] p-4 rounded shadow h-64">
              <h3 className="text-[#e6edf3] font-semibold mb-4 flex items-center">
                <LineChart className="w-5 h-5 text-[#e6edf3] mr-2" />
                All Expenses
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-[#7d8590] text-sm">
                  <span>Tuition Fee</span>
                  <span>$1,200</span>
                </div>
                <div className="flex justify-between text-[#7d8590] text-sm">
                  <span>Books & Supplies</span>
                  <span>$450</span>
                </div>
                <div className="flex justify-between text-[#7d8590] text-sm">
                  <span>Transportation</span>
                  <span>$800</span>
                </div>
              </div>
            </div>
          </div>
          ---
          {/* Footer Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-blue-600 text-white p-4 rounded shadow flex items-center">
              <Facebook className="w-5 h-5 text-white mr-2" />
              <div>
                <h3 className="font-semibold mb-1">Facebook</h3>
                <p className="text-sm opacity-90">
                  Stay connected with school updates
                </p>
              </div>
            </div>
            <div className="bg-sky-500 text-white p-4 rounded shadow flex items-center">
              <Twitter className="w-5 h-5 text-white mr-2" />
              <div>
                <h3 className="font-semibold mb-1">Twitter</h3>
                <p className="text-sm opacity-90">
                  Follow us for daily announcements
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

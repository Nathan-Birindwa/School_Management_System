import React from "react";
import {
  Home,
  Users,
  Settings,
  FileText,
  BarChart3,
  Calendar,
} from "lucide-react";

const SideBar: React.FC = () => {
  return (
    <div className="bg-[#0d1117] w-64 h-screen p-4 border-r border-[#30363d]">
      {/* Sidebar Header */}
      <div className="mb-8">
        <h2 className="text-[#e6edf3] text-lg font-semibold">Dashboard</h2>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-[#e6edf3] hover:bg-[#21262d] rounded-lg transition-colors"
        >
          <Home size={20} />
          <span>Dashboard</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-[#7d8590] hover:bg-[#21262d] hover:text-[#e6edf3] rounded-lg transition-colors"
        >
          <Users size={20} />
          <span>Users</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-[#7d8590] hover:bg-[#21262d] hover:text-[#e6edf3] rounded-lg transition-colors"
        >
          <FileText size={20} />
          <span>Documents</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-[#7d8590] hover:bg-[#21262d] hover:text-[#e6edf3] rounded-lg transition-colors"
        >
          <BarChart3 size={20} />
          <span>Analytics</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-[#7d8590] hover:bg-[#21262d] hover:text-[#e6edf3] rounded-lg transition-colors"
        >
          <Calendar size={20} />
          <span>Calendar</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 text-[#7d8590] hover:bg-[#21262d] hover:text-[#e6edf3] rounded-lg transition-colors"
        >
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="border-t border-[#30363d] pt-4">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 bg-[#21262d] rounded-full flex items-center justify-center">
              <span className="text-[#e6edf3] text-sm font-medium">A</span>
            </div>
            <div>
              <p className="text-[#e6edf3] text-sm font-medium">Admin</p>
              <p className="text-[#7d8590] text-xs">admin@portal.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

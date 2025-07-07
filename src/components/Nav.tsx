import { CircleUserRound, Bell, Search } from "lucide-react";
export default function Nav() {
  return (
    <div className=" w-screen bg-[#161b22] flex justify-between py-4 px-4">
      {/* Links */}
      <div className="text-[#e6edf3]">
        <h1 className="text-2xl font-bold">Admin Portal</h1>
      </div>
      <div className="flex mr-5 gap-9 text-[#e6edf3]">
        <div className="flex rounded-[9px] mr-10 bg-[#0d1117]">
          <input
            type="text"
            className="px-5 py-1 focus:outline-0 rounded-[9px]"
            placeholder="Search anything"
          />
          <Search className="mt-1 mr-2"></Search>
        </div>
        {/* Buttons  */}
        <button className="cursor-pointer">
          <Bell />
        </button>
        <button className="cursor-pointer">
          <CircleUserRound />
        </button>
      </div>
    </div>
  );
}

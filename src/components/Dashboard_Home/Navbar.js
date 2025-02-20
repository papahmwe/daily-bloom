"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";

const pageTitles = {
  "/dashboard": "Overview",
  "/dashboard/challenges": "Challenges",
  "/dashboard/progress": "Progress",
  "/dashboard/habitmanagement": "Habit Management",
  "/dashboard/tracking": "Tracking",
  "/dashboard/rewards": "Rewards",
  "/dashboard/profile": "Profile",
};

export default function Navbar() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  return (
    <div className="w-full h-[96px] flex justify-between items-center bg-backgroundPrimary shadow-sm px-5">
      {/* Title Section */}

      <div>
        <h3 className="font-jost font-[600] text-[32px] text-[#000000] leading-[46.24px]">
          {title}
        </h3>
      </div>

      {/* Notification Icon */}

      <div className="flex justify-center items-center gap-[30px]">
        <div className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer relative">
          <Bell className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>

        {/* User Profile */}

        <div className="w-[160px] h-[67px] flex justify-between items-center gap-[30px] py-[12px] ">
          <div className="flex gap-[30px]">
            <Image
              src="/assets/dashboard_home/Profile_Img.png"
              alt="Profile_Image"
              width={40}
              height={50}
              className="object-cover cursor-pointer"
            />
          </div>
          <div className="w-[165px] h-[67px] gap-[8px] flex flex-col justify-center items-start">
            <h3 className="font-jost font-[500] text-[16px] text-[#000000] leading-[21.68px]">
              Henery
            </h3>
            <h3 className="font-jost font-[400] text-[14px] text-[#000000] leading-[18.79px]">
              User Account
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

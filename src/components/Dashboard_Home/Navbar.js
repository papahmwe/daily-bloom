"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const pageTitles = {
  "/dashboard": "Overview",
  "/dashboard/challenges": "Challenges",
  "/dashboard/progress": "Progress",
  "/dashboard/habitmanagement": "Habit Management",
  "/dashboard/tracking": "Tracking",
  "/dashboard/rewards": "Rewards",
};

export default function Navbar() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  return (
    <div className="w-full h-[96px] flex justify-between items-center bg-backgroundPrimary px-5 absolute left-0 top-0 z-[1000] shadow-sm">
      {/* Title Section */}

      <h3 className="font-jost font-[600] text-[32px] text-[#000000] leading-[46.24px]">
        {title}
      </h3>

      {/* Notification Icon */}

      <div className="flex justify-center items-center gap-8">
        <div>
          <Image
            src="/assets/dashboard_home/Notification.png"
            alt="Notification"
            width={25}
            height={25}
            className="object-cover cursor-pointer"
          />
        </div>

        {/* User Profile */}

        <div className="w-auto h-[67px] flex justify-between items-center gap-8">
          <Image
            src="/assets/dashboard_home/Profile_Img.png"
            alt="Profile_Image"
            width={40}
            height={50}
            className="object-cover cursor-pointer"
          />

          <div className="w-auto h-[67px] flex flex-col justify-center items-start">
            <h3 className="font-jost font-[500] text-[16px] text-black leading-[21.68px]">
              Henery
            </h3>
            <h3 className="font-jost font-[400] text-[14px] text-black opacity-40 leading-[18.79px]">
              User Account
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

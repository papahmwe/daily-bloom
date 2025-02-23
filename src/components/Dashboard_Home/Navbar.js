"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> 4a72d29cb48eff20e11b65d6082357811d78b644
import { useState } from "react";
import Popup from "../Rewards/Popup";

const pageTitles = {
  "/dashboard": "Overview",
  "/dashboard/challenge": "Challenges",
  "/dashboard/progress": "Progress",
  "/dashboard/habitmanagement": "Habit Management",
  "/dashboard/tracking": "Tracking",
  "/dashboard/rewards": "Rewards",
};

export default function Navbar() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  // State for controlling the popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
<<<<<<< HEAD
    <div className="w-[calc(100vw-333px)] max-w-full h-[96px] flex justify-between items-center bg-backgroundPrimary px-10 absolute left-0 top-0 z-[100] shadow-sm">
      {/* Title Section */}
      <h3 className="font-jost font-[500] text-[30px] text-[#000000] opacity-80 tracking-wide leading-[46.24px]">
=======
    <div className="w-full h-[96px] flex justify-between items-center bg-backgroundPrimary px-10 absolute left-0 top-0 z-[100] shadow-sm">
      {/* Title Section */}
      <h3 className="font-jost font-[600] text-[32px] text-[#000000] leading-[46.24px]">
>>>>>>> 4a72d29cb48eff20e11b65d6082357811d78b644
        {title}
      </h3>

      {/* Show "About Rewards" button only on Rewards page */}
      {pathname === "/dashboard/rewards" && (
        <li
<<<<<<< HEAD
          className="border border-mainLight text-mainLight font-montserrat text-[17px] font-[600] tracking-wide px-5 py-3 rounded-[10px] list-none hover:text-backgroundPrimary hover:bg-mainLight transition-all duration-700 cursor-pointer"
=======
          className="border border-mainLight text-mainLight font-montserrat text-[20px] font-[600] leading-[24.38px] py-4 px-8 rounded-2xl list-none hover:text-backgroundPrimary hover:bg-mainLight transition-all duration-700 cursor-pointer"
>>>>>>> 4a72d29cb48eff20e11b65d6082357811d78b644
          onClick={() => setIsPopupOpen(true)}
        >
          About rewards
        </li>
      )}

      {/* Popup */}
      <Popup open={isPopupOpen} onChange={setIsPopupOpen} />

      {/* Hide notifications & user profile on Rewards page */}

      {pathname !== "/dashboard/rewards" && (
        <div className="flex justify-center items-center gap-8">
          {/* Notification Icon */}
          <Image
            src="/assets/dashboard_home/Notification.png"
            alt="Notification"
            width={25}
            height={25}
            className="object-cover cursor-pointer"
          />

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
<<<<<<< HEAD
              <h3 className="font-jost font-[500] text-[16px] text-black opacity-80 tracking-wide leading-[21.68px]">
                Henery
              </h3>
              <h3 className="font-jost font-[400] text-[14px] text-black opacity-50 tracking-wide leading-[18.79px]">
=======
              <h3 className="font-jost font-[500] text-[16px] text-black leading-[21.68px]">
                Henery
              </h3>
              <h3 className="font-jost font-[400] text-[14px] text-black opacity-40 leading-[18.79px]">
>>>>>>> 4a72d29cb48eff20e11b65d6082357811d78b644
                User Account
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

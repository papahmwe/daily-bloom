"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sideBarItemLists = [
  {
    id: 1,
    title: "Home",
    image: "/assets/dashboard_home/Home.png",
    activeImage: "/assets/dashboard_home/Home_White.png.png",
    route: "/dashboard",
  },
  {
    id: 2,
    title: "Challenges",
    image: "/assets/dashboard_home/Challenges.png",
    activeImage: "/assets/dashboard_home/Challenges_White.png",
    route: "/dashboard/challenges",
  },
  {
    id: 3,
    title: "Progress",
    image: "/assets/dashboard_home/Progress.png",
    activeImage: "/assets/dashboard_home/Progress_White.png",
    route: "/dashboard/progress",
  },
  {
    id: 4,
    title: "Habit Management",
    image: "/assets/dashboard_home/HabitManagement.png",
    activeImage: "/assets/dashboard_home/HabitManagement_White.png",
    route: "/dashboard/habitmanagement",
  },
  {
    id: 5,
    title: "Tracking",
    image: "/assets/dashboard_home/Tracking.png",
    activeImage: "/assets/dashboard_home/Tracking_White.png",
    route: "/dashboard/tracking",
  },
  {
    id: 6,
    title: "Rewards",
    image: "/assets/dashboard_home/Rewards.png",
    activeImage: "/assets/dashboard_home/Rewards_White.png",
    route: "/dashboard/rewards",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div>
      <div className="w-[333px] h-[1024px] flex flex-col justify-start items-center gap-[40px] bg-backgroundPrimary shadow-sm">
        {/* Logo */}
        <Image
          src="/assets/home/logo.png"
          alt="Logo_Images"
          width={156}
          height={105.49}
          className="mt-10"
        />

        {/* Menu */}
        <div className="w-[277px] h-[497px] flex flex-col gap-[15px]">
          {sideBarItemLists.map((sideBar, index) => {
            const isActive = pathname === sideBar.route;

            return (
              <Link
                className={`h-[48px] flex justify-start items-center cursor-pointer rounded-[10px] px-[14px] py-[16px] gap-[20px] ${
                  pathname === sideBar.route
                    ? "bg-mainSecondary"
                    : "bg-transparent"
                }`}
                key={index.toString()}
                href={sideBar.route}
              >
                <Image
                  src={isActive ? sideBar.activeImage : sideBar.image}
                  alt={sideBar.title}
                  width={17}
                  height={18}
                  className="object-cover "
                />
                <span
                  className={`font-montserrat font-[500] text-[16px] text-[#000000] leading-[24.38px] ${
                    pathname === sideBar.route
                      ? "text-backgroundPrimary"
                      : "text-[#000000]"
                  }`}
                >
                  {sideBar.title}
                </span>
              </Link>
            );
          })}

          {/* Log Out */}
          <div className=" h-[48px] flex justify-start items-center cursor-pointer rounded-[10px] px-[14px] py-[16px] gap-[20px]">
            <Image
              src="/assets/dashboard_home/LogOut.png"
              alt="LogOut"
              width={17}
              height={18}
              className="object-cover"
            />
            <h3 className="font-montserrat font-[500] text-[16px] text-[#FF0000] leading-[24.38px]">
              Log Out
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

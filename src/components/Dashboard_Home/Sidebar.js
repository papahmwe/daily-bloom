import Image from "next/image";
import Link from "next/link";

const sideBarItemLists = [
  {
    id: 1,
    title: "Home",
    image: "/assets/dashboard_home/Home_Black.png",
    route: "/dashboard",
  },
  {
    id: 2,
    title: "Challenges",
    image: "/assets/dashboard_home/Challenges.png",
    route: "/dashboard/challenges",
  },
  {
    id: 3,
    title: "Progress",
    image: "/assets/dashboard_home/Progress.png",
    route: "/dashboard/progress",
  },
  {
    id: 4,
    title: "Habit Management",
    image: "/assets/dashboard_home/HabitManagement.png",
    route: "/dashboard",
  },
  {
    id: 5,
    title: "Tracking",
    image: "/assets/dashboard_home/Tracking.png",
    route: "/dashboard",
  },
  {
    id: 6,
    title: "Rewards",
    image: "/assets/dashboard_home/Rewards.png",
    route: "/dashboard",
  },
];

export default function Sidebar() {
  return (
    <div>
      <div className="bg-backgroundPrimary flex flex-col justify-start items-center gap-[50px] w-[333px] h-[1024px] shadow-sm">
        {/* Logo */}
        <Image
          src="/assets/home/logo.png"
          alt="Logo_Images"
          width={156}
          height={105.49}
          className="mt-10"
        />

        {/* Menu */}
        <div className="w-[277px] h-[497px] flex flex-col gap-[50px]">
          {sideBarItemLists.map((sideBar, index) => {
            return (
              <Link
                className="flex justify-start items-center gap-[30px] "
                key={index.toString()}
                href={sideBar.route}
              >
                <Image
                  src={sideBar.image}
                  alt={sideBar.title}
                  width={18.75}
                  height={19.5}
                  className="object-cover"
                />
                <span className="font-montserrat font-[400] text-[20px] text-[#000000] leading-[24.38px]">
                  {sideBar.title}
                </span>
              </Link>
            );
          })}

          {/* Log Out */}
          <div className="flex justify-start items-center gap-[30px]">
            <Image
              src="/assets/dashboard_home/LogOut.png"
              alt="LogOut"
              width={18.75}
              height={19.5}
              className="object-cover"
            />
            <h3 className="font-montserrat font-[400] text-[20px] text-[#FF0000] leading-[24.38px]">
              Log Out
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

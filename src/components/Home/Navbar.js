"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = [
  { id: 1, title: "Home", route: "/" },
  { id: 2, title: "About", route: "/about" },
  { id: 3, title: "Contact", route: "/contact_us" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="w-[1440px] h-[165px] mx-auto flex justify-center items-center gap-[300px]">
      {/* Logo */}
      <div>
        <Image
          src="/assets/home/logo.png"
          alt="Nav_Logo"
          width={156}
          height={105.49}
          className="object-cover"
        />
      </div>

      {/* Menu */}
      <div className="w-[855px] h-[76px] flex justify-between items-center gap-[40px]">
        <ul className="flex justify-center items-center gap-[36px] ">
          {NavItems.map((item, index) => {
            return (
              <li
                key={index.toString()}
                className="w-[84px] h-[36px] font-jost font-[700] text-[24px] uppercase leading-[34.68px] cursor-pointer"
              >
                <Link
                  href={item.route}
                  className={`transition-all duration-700 ${
                    pathname === item.route
                      ? "text-mainPrimary"
                      : "text-[#000000]"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-[36px]">
          <button className="w-[168px] h-[52px] font-montserrat font-[600] text-[23px] text-mainPrimary hover:text-backgroundPrimary hover:bg-mainPrimary transition-all duration-700 uppercase leading-[28.04px] border outline-none border-mainPrimary rounded-[10px]">
            Sign Up
          </button>
          <button className="w-[168px] h-[52px] font-montserrat font-[600] text-[23px] text-backgroundPrimary uppercase leading-[28.04px] border outline-none bg-mainPrimary hover:text-mainPrimary hover:bg-backgroundPrimary hover:border-mainPrimary transition-all duration-700 rounded-[10px]">
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;

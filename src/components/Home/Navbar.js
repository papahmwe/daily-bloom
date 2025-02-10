"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

      {/* Navbar */}
      <div className="w-[855px] h-[76px] flex justify-between items-center gap-[40px]">
        <ul className="flex justify-center items-center gap-[36px] ">
          <li className="w-[84px] h-[36px] font-jost font-[700] text-[24px] uppercase leading-[34.68px] cursor-pointer">
            <Link
              href="/"
              className={`transition-all duration-700 ${
                pathname === "/" ? "text-mainPrimary" : "text-[#000000]"
              }`}
            >
              Home
            </Link>
          </li>
          <li className="w-[84px] h-[36px] font-jost font-[700] text-[24px] uppercase leading-[34.68px] cursor-pointer">
            <Link
              href="/about"
              className={`transition-all duration-700 ${
                pathname === "/about" ? "text-mainPrimary" : "text-[#000000]"
              }`}
            >
              About
            </Link>
          </li>
          <li className="w-[84px] h-[36px] font-jost font-[700] text-[24px] uppercase leading-[34.68px] cursor-pointer">
            <Link
              href="/contact_us"
              className={`transition-all duration-700 ${
                pathname === "/contact_us"
                  ? "text-mainPrimary"
                  : "text-[#000000]"
              }`}
            >
              Contact
            </Link>
          </li>
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

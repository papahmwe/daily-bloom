"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: 1, title: "Home", route: "/" },
  { id: 2, title: "About", route: "/about" },
  { id: 3, title: "Contact", route: "/contact_us" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-[165px] flex justify-between items-center px-10">
      <section>
        {/* Logo */}
        <Image
          src="/assets/home/logo.png"
          alt="Nav_Logo"
          width={156}
          height={105.49}
          className="object-cover"
        />
      </section>

      {/* Menu */}
      <ul className="flex justify-center items-center gap-10">
        {navItems.map((item, index) => {
          return (
            <li
              key={index.toString()}
              className={`md:text-[20px] lg:text-[24px] font-jost transition-all font-[600]
                ${
                  pathname === item.route
                    ? "text-mainPrimary"
                    : "text-[#000000]"
                }
              `}
            >
              <Link href={item.route}>{item.title.toUpperCase()}</Link>
            </li>
          );
        })}

        {/* Button */}
        <li className="md:w-[120px] lg:w-[168px] h-[52px] border-2 rounded-[10px] flex justify-center items-center border-mainPrimary md:text-[20px] lg:text-[24px] font-jost font-[600] text-mainPrimary hover:text-backgroundPrimary hover:bg-mainPrimary transition-all duration-700 cursor-pointer">
<<<<<<< HEAD
          <Link href={"/signup"}>SING UP</Link>
        </li>

        <li className="md:w-[120px] lg:w-[168px] h-[52px] border-2 rounded-[10px] flex justify-center items-center border-mainPrimary md:text-[20px] lg:text-[24px] font-jost font-[600] text-backgroundPrimary bg-mainPrimary hover:text-mainPrimary hover:bg-backgroundPrimary hover:border-mainPrimary transition-all duration-700 cursor-pointer">
          <Link href={"/login"}>LOGIN</Link>
=======
          <Link href={"/sign-up"}>SING UP</Link>
        </li>

        <li className="md:w-[120px] lg:w-[168px] h-[52px] border-2 rounded-[10px] flex justify-center items-center border-mainPrimary md:text-[20px] lg:text-[24px] font-jost font-[600] text-backgroundPrimary bg-mainPrimary hover:text-mainPrimary hover:bg-backgroundPrimary hover:border-mainPrimary transition-all duration-700 cursor-pointer">
          <Link href={"/sign-up"}>LOGIN</Link>
>>>>>>> 4a72d29cb48eff20e11b65d6082357811d78b644
        </li>
      </ul>
    </nav>
  );
}

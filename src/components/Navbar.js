import Image from "next/image";

const Nav = () => {
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
          <li className="w-[84px] h-[36px] font-jost font-[700] text-[24px] text-[#8174FF] uppercase leading-[34.68px]">
            Home
          </li>
          <li className="w-[84px] h-[36px] font-jost font-[700] text-[24px] text-[#000000] uppercase leading-[34.68px]">
            About
          </li>
          <li className="w-[84px] h-[36px] font-jost font-[700] text-[24px] text-[#000000] uppercase leading-[34.68px]">
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-[36px]">
          <button className="w-[168px] h-[52px] font-montserrat font-[600] text-[23px] text-mainPrimary uppercase leading-[28.04px] border outline-none border-mainPrimary rounded-[10px]">
            Sign Up
          </button>
          <button className="w-[168px] h-[52px] font-montserrat font-[600] text-[23px] text-backgroundPrimary uppercase leading-[28.04px] border outline-none bg-mainPrimary rounded-[10px]">
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;

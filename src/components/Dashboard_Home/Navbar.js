import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-backgroundPrimary shadow-sm w-full h-[96px] flex justify-between items-center px-5">
      <div>
        <h3 className="font-jost font-[600] text-[32px] text-[#000000] leading-[46.24px]">
          Overview
        </h3>
      </div>

      <div className="flex  justify-center items-center gap-[10px]">
        <div>
          <Image
            src="/assets/dashboard_home/Notification.png"
            alt=""
            width={23.56}
            height={23.39}
          />
        </div>
        <div className="flex justify-center items-center w-[165px] h-[67px] gap-[10px]">
          <div className="flex  gap-[10px]">
            <Image
              src="/assets/dashboard_home/Profile_Img.png"
              alt="Profile_Image"
              width={40}
              height={50}
            />
          </div>
          <div className="w-[94px] h-[43px]">
            <h3 className="font-jost font-[600] text-[15px] text-[#000000] leading-[21.68px]">
              Henery
            </h3>
            <h3 className="font-jost font-[400] text-[13px] text-[#000000] leading-[18.79px]">
              User Account
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

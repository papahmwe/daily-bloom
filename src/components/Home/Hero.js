import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="flex justify-between items-center w-[1340px] h-[593px] mx-auto">
        {/* first section*/}
        <div className="w-[547px] h-[427px] flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[25px]">
            <h1 className="w-[547px] h-[201px] font-montserrat font-[700] text-[55px] text-mainSecondary leading-[67.05px] uppercase">
              your Journey to Productivity starts here
            </h1>

            <h3 className="w-[522px] h-[80px] font-jost font-[400] text-[28px] text-[#000000] leading-[40.46px] capitalize">
              Track daily habits, visualize progress, and build a better you
            </h3>
          </div>

          <button className="w-[327px] h-[74px] font-montserrat font-[600] text-[28px] text-backgroundPrimary capitalize leading-[34.13px] border outline-none bg-mainPrimary hover:text-mainPrimary hover:bg-backgroundPrimary hover:border-mainPrimary transition-all duration-700 rounded-[10px]">
            Start tracking today
          </button>
        </div>

        {/* second section*/}
        <Image
          src="/assets/home/hero_image.png"
          alt="hero_image"
          width={778}
          height={593}
          className="object-cover"
        />
      </div>
    </div>
  );
}

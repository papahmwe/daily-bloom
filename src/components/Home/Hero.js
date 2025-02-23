import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-[593px] flex justify-between px-10">
      <div className="w-1/2 flex flex-col justify-center items-start gap-7">
        {/* Text */}
        <h1 className="xl:text-[55px] lg:text-[45px] text-[35px] font-[700] font-montserrat text-mainSecondary uppercase leading-[67px]">
          your Journey <br />
          to Productivity
          <br /> starts here
        </h1>
        <article className="xl:text-[28px] lg:text-[25px] text-[20px] text-[#000000] font-[400] font-jost capitalize leading-10">
          Track daily habits, visualize progress, and <br /> build a better you
        </article>

        {/* Button */}
        <button className="py-3 px-5 font-montserrat font-[600] text-[24px] text-backgroundPrimary capitalize leading-[34.13px] border outline-none bg-mainPrimary hover:text-mainPrimary hover:bg-backgroundPrimary hover:border-mainPrimary transition-all duration-700 rounded-[10px]">
          Start tracking today
        </button>
      </div>

      {/* Image */}
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src={"/assets/home/hero_image.png"}
          alt="hero_image"
          width={650}
          height={500}
          className="w-auto h-auto object-contain"
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import { CarouselSize } from "./Slide";

const LoginRewards = [
  {
    id: 1,
    image: "/assets/rewards/Daily-Login.svg",
    name: "Reward from daily login",
  },
  {
    id: 2,
    image: "/assets/rewards/fackbook-reward.svg",
    name: "Follow our facebook ",
  },
];

export default function RewardsMain() {
  return (
    <div className="flex flex-col gap-7">
      {/* First */}
      <div className="flex gap-5">
        {/* Left */}
        <div className=" w-1/3 h-[300px] flex flex-col justify-center items-center bg-opacity-80 bg-mainLight gap-5 rounded-[10px]">
          <div className="flex flex-col justify-center items-center ">
            <Image
              src={"/assets/rewards/User-Image.svg"}
              alt="User Image"
              width={70}
              height={70}
            />
            <h1 className="font-montserrat font-[700] text-[28px] text-backgroundPrimary tracking-wide">
              James
            </h1>
            <h3 className="font-montserrat font-[400] text-[16px] text-backgroundPrimary tracking-wide">
              james@gmail.com
            </h3>
          </div>
          <div className="flex justify-center items-center bg-backgroundPrimary px-8 py-1 rounded-[10px] gap-2">
            <Image
              src={"/assets/rewards/Fire.svg"}
              alt="Fire"
              width={40}
              height={40}
            />
            <h1 className="text-[#857BE5] text-[30px] font-montserrat font-[600] tracking-wide">
              1520
            </h1>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/3 h-[300px] flex flex-col justify-center items-center bg-opacity-80 bg-mainLight gap-5 rounded-[10px]">
          <Image
            src={"/assets/rewards/hands holding gold trophy cup.svg"}
            alt="Image"
            width={170}
            height={180}
          />
          <h3 className="text-backgroundPrimary text-[20px] font-montserrat font-[600] tracking-wide">
            “Every small step takes <br /> you closer to big rewards”
          </h3>
        </div>
      </div>

      <div className="w-[90%] flex flex-col gap-5">
        {/* Second */}
        <div className="bg-mainLight bg-opacity-80 rounded-[10px] w-[90%] h-auto px-5 py-12 ">
          <CarouselSize />
        </div>

        {/* Third */}
        <div className="bg-mainLight bg-opacity-80 rounded-[10px] w-[90%] h-auto pl-20 py-12 ">
          <div>
            <h1 className="font-montserrat font-[600] text-[30px] text-backgroundPrimary text-start tracking-wide">
              Missions
            </h1>
            <h2 className="font-montserrat font-[500] text-[16px] text-backgroundPrimary text-start tracking-wide">
              Follow us on Facebook to unlock exclusive rewards and stay updated
              with DailyBloom!
            </h2>
          </div>
          <div className="flex gap-7 mt-7">
            {LoginRewards.map((data, index) => {
              return (
                <div
                  key={index}
                  className="rounded-[10px] bg-[#FFFFFF] bg-opacity-95 shadow-inner flex justify-center items-center gap-3 px-6 py-2"
                >
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={42}
                    height={42}
                  />
                  <h2 className="font-montserrat font-[500] text-[14px] text-[#B7B0F1] tracking-wide">
                    {data.name}
                  </h2>
                  <button className="bg-[#FBE452] font-montserrat font-[600] text-[16px] text-[#000000] rounded-[10px] tracking-wide px-7 py-1 cursor-pointer hover:text-[#FBE452] hover:bg-[#000000] duration-700 transition-all ">
                    Claim
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

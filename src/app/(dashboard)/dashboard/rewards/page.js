"use client";

import Image from "next/image";
import { CarouselSize } from "@/components/Rewards/Slide";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { set } from "mongoose";

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
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Custom full-page loader component
  function CustomLoader() {
    return (
      <div className="flex justify-center items-center h-full ">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#7C5CFC]"></div>
      </div>
    );
  }

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      if (session) {
        const response = await axios.get(
          `/api/users/profile/${session.user.id}`
        );
        setUser(response.data);
        setLoading(false);
      }
    };

    const fetchRewards = async () => {
      setLoading(true);
      if (session) {
        const response = await axios.get(`/api/rewards/${session.user.id}`);
        setRewards(response.data);
        setLoading(false);
      }
    };

    fetchRewards();
    fetchUser();
  }, [session]);

  if (loading) {
    return <CustomLoader />;
  }
  return (
    <div className="flex flex-col justify-center gap-7 pr-8 ">
      {/* First */}
      <div className="flex gap-20">
        {/* Left */}
        <div className=" w-full h-[300px] flex flex-col justify-center items-center bg-opacity-80 bg-mainLight gap-5 rounded-[10px]">
          <div className="flex flex-col justify-center items-center ">
            <Image
              src={user?.image || "/assets/rewards/user.svg"}
              alt="User Image"
              width={70}
              height={70}
            />
            <h1 className="font-montserrat font-[700] text-[28px] text-backgroundPrimary tracking-wide">
              {user?.username}
            </h1>
            <h3 className="font-montserrat font-[400] text-[16px] text-backgroundPrimary tracking-wide">
              {user?.email}
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
              {user?.points || 0}
            </h1>
          </div>
        </div>

        {/* Right */}
        <div className="w-full h-[300px] flex flex-col justify-center items-center bg-opacity-80 bg-mainLight gap-5 rounded-[10px] ">
          <Image
            src={"/assets/rewards/hands holding gold trophy cup.svg"}
            alt="Image"
            width={170}
            height={180}
          />
          <h3 className="text-backgroundPrimary text-[20px] font-montserrat font-[600] tracking-wide px-5 text-center">
            “Every small step takes <br /> you closer to big rewards”
          </h3>
        </div>
      </div>

      <div className=" flex flex-col gap-5">
        {rewards.challenges && rewards.challenges.length > 0 && (
          <div className="bg-mainLight bg-opacity-80 rounded-[10px]  h-auto  py-12 ">
            <CarouselSize
              rewards={rewards.challenges}
              loading={loading}
              setLoading={setLoading}
            />
          </div>
        )}

        <div className="bg-mainLight bg-opacity-80 rounded-[10px]  h-auto pl-20 py-12 ">
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

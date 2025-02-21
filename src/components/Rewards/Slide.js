"use client";

import * as React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/Rewards/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RewardsData = [
  {
    id: 1,
    name: "Yoga",
    time: "15",
    timeType: " mins",
    image: "/assets/Progress/Yoga.svg",
    claimText: "Claim",
  },
  {
    id: 2,
    name: "Meditate",
    time: "15",
    timeType: " mins",
    image: "/assets/Progress/Drinking.svg",
    claimText: "Claim",
  },
  {
    id: 3,
    name: "Jogging",
    time: "15",
    timeType: " mins",
    image: "/assets/Progress/Reading.svg",
    claimText: "Claim",
  },
  {
    id: 4,
    name: "Stretching",
    time: "15",
    timeType: " mins",
    image: "/assets/Progress/Workout.svg",
    claimText: "Claim",
  },
  {
    id: 5,
    name: "Yoga",
    time: "15",
    timeType: " mins",
    image: "/assets/Progress/Yoga.svg",
    claimText: "Claim",
  },
  {
    id: 6,
    name: "Meditate",
    time: "15",
    timeType: " mins",
    image: "/assets/Progress/Drinking.svg",
    claimText: "Claim",
  },
  {
    id: 7,
    name: "Jogging",
    time: "15",
    timeType: " mins",
    image: "/assets/Progress/Reading.svg",
    claimText: "Claim",
  },
  {
    id: 8,
    name: "Stretching",
    time: "15",
    timeType: " mins",
    image: "/assets/Progress/Workout.svg",
    claimText: "Claim",
  },
  {
    id: 9,
    name: "Yoga",
    time: "15",
    timeType: " mins",
    image: "/assets/Progress/Yoga.svg",
    claimText: "Claim",
  },
  {
    id: 10,
    name: "Meditate",
    time: "15",
    timeType: " mins",
    image: "/assets/Progress/Drinking.svg",
    claimText: "Claim",
  },
];

export function CarouselSize() {
  const [chunkedRewards, setChunkedRewards] = useState([]);

  useEffect(() => {
    const chunkSize = 4;
    const newChunks = [];

    for (let i = 0; i < RewardsData.length; i += chunkSize) {
      newChunks.push(RewardsData.slice(i, i + chunkSize));
    }

    setChunkedRewards(newChunks);
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="w-[90%] h-auto mx-auto"
    >
      <CarouselContent>
        {chunkedRewards.map((chunk, chunkIndex) => (
          <CarouselItem
            key={chunkIndex}
            className="flex justify-start items-center gap-4"
          >
            {chunk.map((reward, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-montserrat font-[600] text-[22px] text-[#000000] text-center tracking-wide opacity-80">
                        {reward.name}
                      </h3>
                      <h3 className="font-montserrat font-[600] text-[18px] text-[#FBE452] text-center tracking-wide">
                        {reward.time}
                        <span className=" text-[#000000]">
                          {reward.timeType}
                        </span>
                      </h3>
                    </div>
                    <Image
                      src={reward.image}
                      alt={reward.name}
                      width={100}
                      height={100}
                    />
                    <button className="bg-[#FBE452] font-montserrat font-[600] text-[16px] text-[#000000] rounded-[10px] tracking-wide px-7 py-1 cursor-pointer hover:text-[#FBE452] hover:bg-[#000000] duration-700 transition-all ">
                      {reward.claimText}
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

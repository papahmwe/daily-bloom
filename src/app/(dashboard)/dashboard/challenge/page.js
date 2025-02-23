"use client";

import Popup from "@/components/Challenge/Popup";
import Image from "next/image";
import { useState } from "react";

const Datas = [
  {
    id: 1,
    name: "Practice English podcast for 30 minutes",
    image: "/assets/challenge_images/challenge-eg-1.svg",
    time: "30 mins",
    points: "20 points",
  },
  {
    id: 2,
    name: "Visit Museum or an exhibition",
    image: "/assets/challenge_images/challenge-eg-2.svg",
    time: "50 mins",
    points: "20 points",
  },
  {
    id: 3,
    name: "Write a journal about my Day",
    image: "/assets/challenge_images/challenge-eg-3.svg",
    time: "15 mins",
    points: "20 points",
  },
];

const ChallengesIdeas = [
  {
    id: 1,
    name: "Yoga",
    time: "30 mins",
    image: "/assets/challenge_images/Yoga.svg",
  },
  {
    id: 2,
    name: "Read Books",
    time: "40 mins",
    image: "/assets/challenge_images/Reading-books.svg",
  },
  {
    id: 3,
    name: "Meditate ",
    time: "20 mins",
    image: "/assets/challenge_images/Meditate.svg",
  },
  {
    id: 4,
    name: "Brainstorm ideas",
    time: "15 mins",
    image: "/assets/challenge_images/Brainstorm-ideas.svg",
  },
  {
    id: 5,
    name: "Workout",
    time: "30 mins",
    image: "/assets/challenge_images/Workout.svg",
  },
  {
    id: 6,
    name: "Cycling",
    time: "45 mins",
    image: "/assets/challenge_images/Cycling.svg",
  },
  {
    id: 7,
    name: "Make To-do List",
    time: "10 mins",
    image: "/assets/challenge_images/MakeTo-doList.svg",
  },
  {
    id: 8,
    name: "Devotional",
    time: "50 mins",
    image: "/assets/challenge_images/Devotional.svg",
  },
  {
    id: 9,
    name: "Tidy Up",
    time: "20 mins",
    image: "/assets/challenge_images/TidyUp.svg",
  },
];

export default function Challenge() {
  const [isOpen, setIsOpen] = useState(false);
  const [challenges, setChallenges] = useState(["hi"]);

  return (
    <div className="flex flex-col justify-start gap-[50px]">
      <div className="flex flex-col gap-[30px]">
        {/* Title */}
        <h1 className="font-montserrat font-[600] text-[24px] opacity-80 text-[#000000] leading-[32.91px]">
          Create your own habit that you want to challenge.
        </h1>

        {/* Data */}
        {challenges.length > 0 ? (
          <div className="flex justify-start items-center gap-5">
            {Datas.map((challenge, index) => (
              <div
                key={index}
                className="w-1/4 h-[240px] flex flex-col justify-center items-center bg-mainLight hover:bg-mainPrimary bg-opacity-50 hover:bg-opacity-60 transition-all ease-in-out duration-1000 cursor-pointer rounded-[10px] border border-mainSecondary p-3"
              >
                <div className="flex justify-center items-center gap-5 w-full h-[45px]">
                  <h3 className="text-[#000000] opacity-80 text-[15px] font-montserrat font-[600] tracking-wide ">
                    {challenge.name}
                  </h3>
                  <Image
                    src={"/assets/challenge_images/Delete.svg"}
                    alt="Image"
                    width={15}
                    height={17}
                  />
                </div>
                <Image
                  src={challenge.image}
                  alt={challenge.name}
                  width={80}
                  height={80}
                  className=" w-[90px] h-[90px] mt-2 mb-2"
                />
                <div className="flex justify-between items-center gap-5 w-full h-[40px]">
                  <div className="flex justify-start items-center gap-2">
                    <Image
                      src={"/assets/challenge_images/Clock.svg"}
                      alt="Image"
                      width={15}
                      height={15}
                    />
                    <h3 className="text-[#636363] text-[14px] font-montserrat font-[600] tracking-wide">
                      {challenge.time}
                    </h3>
                  </div>
                  <h3 className="text-[#000000] opacity-80 text-[14px] font-montserrat font-[600] tracking-wide">
                    {challenge.points}
                  </h3>
                </div>
              </div>
            ))}
            <div
              className="bg-mainLight hover:bg-mainPrimary bg-opacity-50 hover:bg-opacity-60 transition-all ease-in-out duration-1000 p-3 rounded-full cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <Image
                src={"/assets/challenge_images/Plus.svg"}
                alt="Plus"
                width={20}
                height={20}
                className="opacity-80 object-contain"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-[30px]">
            {/* No Data */}

            <div className="flex justify-start items-center gap-9">
              {/* Left */}
              <div className="w-1/4 h-[230px] flex flex-col justify-center items-center bg-[#D8D8D8] rounded-[10px] p-2 gap-4">
                <Image
                  src={"/assets/challenge_images/ChallengeDefault.svg"}
                  alt="Image"
                  width={110}
                  height={110}
                />
                <div className="flex flex-col justify-center items-center gap-1">
                  <h3 className="text-[#333333] opacity-95 text-[16px] font-montserrat font-[600] tracking-wide text-center">
                    Start to create good habit.
                  </h3>
                  <h3 className="text-[#878787] text-[14px] font-montserrat font-[600] tracking-wide text-center">
                    Set challenges that matter to you <br /> and stay on course
                    towards.
                  </h3>
                </div>
              </div>

              {/* Right */}
              <div
                className="bg-[#D8D8D8] p-3 rounded-full cursor-pointer"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <Image
                  src={"/assets/challenge_images/Plus.svg"}
                  alt="Plus"
                  width={20}
                  height={20}
                  className="opacity-80 object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Show Popup when isOpen is true */}
      {isOpen && <Popup open={isOpen} onChange={() => setIsOpen(false)} />}

      {/* Second Section */}
      <div className="flex flex-col justify-start gap-[50px]">
        {/* Title */}
        <h1 className="font-montserrat font-[600] text-[24px] opacity-80 text-[#000000] leading-[32.91px]">
          Challenges Ideas For you
        </h1>

        <div className="w-[90%] grid grid-cols-3 gap-5">
          {ChallengesIdeas.map((data, index) => (
            <div
              key={index}
              className="w-[300px] h-[220px] object-cover rounded-[10px] flex flex-col justify-between p-4 cursor-pointer transition-transform duration-700 ease-in-out hover:scale-105"
              style={{
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="">
                <h1 className="font-montserrat font-[500] text-[18px] text-backgroundPrimary leading-[32.91px]">
                  {data.name}
                </h1>
                <div className="flex justify-start items-center gap-2">
                  <Image
                    src={"/assets/challenge_images/White-clock.svg"}
                    alt="Image"
                    width={15}
                    height={15}
                  />
                  <h3 className="text-backgroundPrimary text-[14px] font-montserrat font-[400] tracking-wide">
                    {data.time}
                  </h3>
                </div>
              </div>

              <div className="flex justify-end items-end">
                <span className="text-backgroundPrimary bg-backgroundSecondary bg-opacity-50 px-3 py-2 rounded-[10px] text-[14px] font-montserrat font-[500] tracking-wide ">
                  Reward - 20 points
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

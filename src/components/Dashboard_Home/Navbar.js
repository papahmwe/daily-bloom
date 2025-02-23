"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Popup from "../Rewards/Popup";

const pageTitles = {
  "/dashboard": "Overview",
  "/dashboard/challenge": "Challenges",
  "/dashboard/progress": "Progress",
  "/dashboard/habitmanagement": "Habit Management",
  "/dashboard/tracking": "Tracking",
  "/dashboard/rewards": "Rewards",
};

const messages = [
  {
    id: 1,
    text: "Take a deep breath and relax for a moment.",
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 2,
    text: "Remember to stretch and take a short walk!",
    time: new Date(Date.now() - 1 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 3,
    text: "Hydration is key—drink some water now.",
    time: new Date(Date.now() - 2 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 4,
    text: "Small steps lead to big changes. Keep going!",
    time: new Date(Date.now() - 3 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 5,
    text: "Take a break, you've earned it!",
    time: new Date(Date.now() - 4 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 6,
    text: "You are capable of amazing things.",
    time: new Date(Date.now() - 5 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 7,
    text: "Smile! It’s a brand new day full of opportunities.",
    time: new Date(Date.now() - 6 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 8,
    text: "Believe in yourself, you're doing great.",
    time: new Date(Date.now() - 7 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 9,
    text: "Your hard work will pay off—stay focused!",
    time: new Date(Date.now() - 8 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 10,
    text: "Kindness goes a long way. Spread some today!",
    time: new Date(Date.now() - 9 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 11,
    text: "Take care of your mind and body. They need you!",
    time: new Date(Date.now() - 10 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 12,
    text: "Progress is progress, no matter how small.",
    time: new Date(Date.now() - 11 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 13,
    text: "Be patient with yourself; growth takes time.",
    time: new Date(Date.now() - 12 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 14,
    text: "Don't forget to fuel your body with good food!",
    time: new Date(Date.now() - 13 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 15,
    text: "You are stronger than you think.",
    time: new Date(Date.now() - 14 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 16,
    text: "Challenges make you stronger—embrace them!",
    time: new Date(Date.now() - 15 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 17,
    text: "A little self-care goes a long way!",
    time: new Date(Date.now() - 16 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 18,
    text: "Take it one step at a time. You got this!",
    time: new Date(Date.now() - 17 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  {
    id: 19,
    text: "Celebrate your small wins today!",
    time: new Date(Date.now() - 18 * 60000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
];
export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="w-[calc(100vw-333px)] max-w-full h-[96px] flex justify-between items-center bg-backgroundPrimary px-10 absolute left-0 top-0 z-[100] shadow-sm ">
      {/* Title Section */}
      <h3 className="font-jost font-[500] text-[30px] text-[#000000] opacity-80 tracking-wide leading-[46.24px]">
        {title}
      </h3>

      {/* Show "About Rewards" button only on Rewards page */}
      {pathname === "/dashboard/rewards" && (
        <li
          className="border border-mainLight text-mainLight font-montserrat text-[17px] font-[600] tracking-wide px-5 py-3 rounded-[10px] list-none hover:text-backgroundPrimary hover:bg-mainLight transition-all duration-700 cursor-pointer"
          onClick={() => setIsPopupOpen(true)}
        >
          About rewards
        </li>
      )}

      {/* Popup */}
      <Popup open={isPopupOpen} onChange={setIsPopupOpen} />

      {pathname !== "/dashboard/rewards" && (
        <div className="flex justify-end items-center gap-6 ">
          <div className="w-auto h-[67px] flex justify-between items-center gap-6">
            <Image
              src="/assets/dashboard_home/Profile_Img.png"
              alt="Profile_Image"
              width={30}
              height={30}
              className="object-cover cursor-pointer"
            />

            <div className="w-auto h-[67px] flex flex-col justify-center items-start">
              <h3 className="font-jost font-[500] text-[16px] text-black opacity-80 tracking-wide leading-[21.68px]">
                Henery
              </h3>
              <h3 className="font-jost font-[400] text-[14px] text-black opacity-50 tracking-wide leading-[18.79px]">
                User Account
              </h3>
            </div>
          </div>

          {/* Notification */}
          <div
            className="cursor-pointer flex justify-center items-center "
            onClick={() => setShowNotifications(true)}
          >
            <div className="flex justify-center">
              <Image
                src="/assets/dashboard_home/Notification.png"
                alt="Notification"
                width={25}
                height={25}
                className="object-cover"
              />
            </div>
          </div>

          {/* Notification Popup */}
          <div
            className={`absolute top-0 right-0 max-h-[100vh] bg-backgroundPrimary z-50 w-[40%] h-auto transition-all duration-200 ease-linear ${
              showNotifications ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="bg-backgroundPrimary flex justify-between items-center w-[100%] h-[96px] px-10 border-b border-b-black border-opacity-50">
              <span className="text-[#000000] opacity-80 text-[22px] tracking-wide font-jost font-[500]">
                Notifications
              </span>

              <button onClick={() => setShowNotifications(false)}>
                <Image
                  src={"/assets/rewards/rewards-icon.svg"}
                  alt="Image"
                  width={10}
                  height={10}
                  className="bg-mainLight rounded-full w-7 h-7 p-2 hover:bg-mainSecondary transition-all duration-700"
                />
              </button>
            </div>
            <div className="overflow-y-auto scrollbar-hide w-full max-h-[calc(100vh-96px)]">
              {messages.map((message, index) => {
                return (
                  <div
                    key={index}
                    className=" flex justify-start items-start gap-3 border-b border-b-black border-opacity-10 px-10 py-5 "
                  >
                    <div className=" bg-mainLight rounded-full w-[6.5px] h-[6.5px] mt-2"></div>

                    <div className="flex flex-col justify-start items-start w-10/12 gap-1">
                      <p className="font-jost font-[400] text-[16px] text-black opacity-80 tracking-wide">
                        {message.text}
                      </p>
                      <p className="font-jost font-[400] text-[14px] text-black opacity-50 tracking-wide ">
                        {message.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

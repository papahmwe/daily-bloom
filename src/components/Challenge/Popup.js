import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";

import { useState } from "react";

import Image from "next/image";
import TimeDropdown from "./TimeDropdown ";

const Dates = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Popup({ open, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  if (!open) return null;

  const handleSwitchChange = (checked) => {
    setIsChecked(checked);
  };

  return (
    <div className="w-[100vw] h-[100vh] absolute top-0 left-[-333px] z-[1000]">
      {/* Popup overlay */}
      <div
        className="w-full h-full bg-[#8F8F8F80] "
        onClick={() => onChange(!open)}
      />

      {/* Popup box */}
      <div className="w-[500px] h-[550px] bg-backgroundPrimary rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8">
        {/* For content */}
        <div className="space-y-7">
          <input
            type="text"
            placeholder="Challenge Name"
            className="cursor-pointer font-montserrat font-[500] text-[16px] text-[#868686] border border-mainPrimary outline-none rounded-[10px] p-3 w-full tracking-wide"
          />
          <div className="flex gap-3">
            <TimeDropdown />

            <input
              type="text"
              placeholder="Duration"
              className="cursor-pointer font-montserrat font-[500] text-[16px] text-[#868686] border border-mainPrimary outline-none rounded-[10px] p-3 w-1/2 tracking-wide"
            />
          </div>

          <div>
            <h3 className="font-montserrat font-[500] text-[16px] text-[#868686] tracking-wide">
              On these Days
            </h3>
            <div className="w-full flex justify-between items-center ">
              {Dates.map((data, index) => {
                return (
                  <div key={index}>
                    <button className="border outline-none border-mainPrimary w-12 h-12 p-2 self-center rounded-[10px] font-montserrat font-[500] text-[14px] text-[#868686] mt-3 tracking-wide">
                      {data}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h3 className="font-montserrat font-[500] text-[16px] text-[#868686] tracking-wide">
              Switch the notification
            </h3>
            <Switch
              checked={isChecked}
              onCheckedChange={handleSwitchChange}
              style={{
                backgroundColor: isChecked ? "#6859FF" : "#868686",
              }}
            ></Switch>
          </div>

          <div className="border border-mainPrimary outline-none rounded-[10px] w-full h-auto p-5 flex flex-col justify-center items-center gap-3 cursor-pointer">
            <Image
              src={"/assets/challenge_images/Upload.svg"}
              alt="Image"
              width={25}
              height={25}
            />
            <h3 className="font-montserrat font-[500] text-[15px] text-[#868686] tracking-wide">
              Tap to select or upload image
            </h3>
          </div>

          <div className="flex justify-center items-center gap-5">
            <button
              className="font-montserrat font-[600] text-[18px] text-[#000000] opacity-80 tracking-wide bg-[#E1E1E1] rounded-[10px] w-32 h-12"
              onClick={() => onChange(!open)}
            >
              Cancel
            </button>

            <button
              className="font-montserrat font-[600] text-[18px] text-backgroundPrimary opacity-80 tracking-wide bg-mainPrimary rounded-[10px] w-32 h-12"
              onClick={() => {
                onChange(!open);
                toast("Challenge Created! 🎉", {
                  duration: 5000,
                  style: {
                    backgroundColor: "#8778FB",
                    color: "#FFFFFF",
                    letterSpacing: "0.025rem",
                    borderRadius: "10px",
                    outline: "none",
                    border: "none",
                    padding: " 18px",
                    fontSize: "16px",
                    fontFamily: "Montserrat, sans-serif",
                  },
                });
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

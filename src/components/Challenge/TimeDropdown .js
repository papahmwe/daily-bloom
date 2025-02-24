import { useState } from "react";
import Image from "next/image";

const TimeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAMPM, setSelectedAMPM] = useState("AM");
  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("00");

  const handleSelect = (value, type) => {
    if (type === "hour") {
      setSelectedHour(value);
    }
    if (type === "minute") {
      setSelectedMinute(value);
    }
  };

  const toggleAMPM = () => {
    setSelectedAMPM((prev) => (prev === "AM" ? "PM" : "AM"));
  };

  const hours = Array.from({ length: 12 }, (_, index) =>
    (index + 1).toString()
  );
  const minutes = Array.from({ length: 60 }, (_, index) =>
    index.toString().padStart(2, "0")
  );

  return (
    <div className="relative w-1/2">
      {/* Dropdown Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="ccursor-pointer font-montserrat font-[500] text-[16px] text-[#868686] border border-mainPrimary outline-none rounded-[10px] p-3 flex justify-between items-center tracking-wide"
      >
        <span>
          {selectedHour === "12" &&
          selectedMinute === "00" &&
          selectedAMPM === "AM"
            ? "Time"
            : `${selectedHour}:${selectedMinute} ${selectedAMPM}`}
        </span>

        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <Image
            src={"/assets/challenge_images/DropDown.svg"}
            alt="Dropdown Icon"
            width={12}
            height={6}
          />
        </span>
      </div>

      {/* Time Picker Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 left-0 z-10 bg-backgroundPrimary border border-mainPrimary outline-none rounded-[10px] shadow-lg w-full p-2">
          <div className="flex items-center space-x-2">
            {/* Hour Scroll */}
            <div className="relative w-1/3">
              <div className="max-h-32 overflow-y-auto scrollbar-hide">
                {hours.map((hour, index) => (
                  <div
                    key={index}
                    className="p-2 text-center text-lg cursor-pointer"
                    onClick={() => handleSelect(hour, "hour")}
                  >
                    {hour}
                  </div>
                ))}
              </div>
            </div>

            {/* Minute Scroll */}
            <div className="relative w-1/3">
              <div className="max-h-32 overflow-y-auto scrollbar-hide">
                {minutes.map((minute, index) => (
                  <div
                    key={index}
                    className="p-2 text-center text-lg cursor-pointer"
                    onClick={() => handleSelect(minute, "minute")}
                  >
                    {minute}
                  </div>
                ))}
              </div>
            </div>

            {/* AM/PM Toggle */}
            <div className="flex flex-col w-1/3">
              <button
                className={`p-2 text-lg text-center ${
                  selectedAMPM === "AM"
                    ? "bg-mainLight bg-opacity-50 rounded-[10px]"
                    : ""
                }`}
                onClick={toggleAMPM}
              >
                AM
              </button>
              <button
                className={`p-2 text-lg text-center ${
                  selectedAMPM === "PM"
                    ? "bg-mainLight bg-opacity-50 rounded-[10px]"
                    : ""
                }`}
                onClick={toggleAMPM}
              >
                PM
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeDropdown;

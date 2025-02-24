import { useState } from "react";
import Image from "next/image";

const TimeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAMPM, setSelectedAMPM] = useState("AM");
  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("00");

  // Handle time selection
  const handleSelect = (value, type) => {
    if (type === "hour") setSelectedHour(value);
    if (type === "minute") setSelectedMinute(value);
  };

  // Toggle AM/PM
  const toggleAMPM = (currentValue) => {
    setSelectedAMPM(currentValue);
  };

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  return (
    <div className="relative w-1/2">
      {/* Dropdown Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer font-montserrat font-medium text-lg text-gray-600 border border-mainPrimary rounded-lg p-3 flex justify-between items-center"
      >
        <span>
          {selectedHour === "12" &&
          selectedMinute === "00" &&
          selectedAMPM === "AM"
            ? "Time"
            : `${selectedHour}:${selectedMinute} ${selectedAMPM}`}
        </span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <Image
            src="/assets/challenge_images/DropDown.svg"
            alt="Dropdown Icon"
            width={12}
            height={6}
          />
        </span>
      </div>

      {/* Time Picker Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 left-0 z-10 bg-white border border-mainPrimary rounded-lg shadow-lg w-full p-2">
          <div className="flex items-center space-x-2">
            {/* Hour Scroll */}
            <div className="w-1/3 overflow-y-auto max-h-32 scrollbar-hide">
              {hours.map((hour) => (
                <div
                  key={hour}
                  className="p-2 text-center text-lg cursor-pointer hover:bg-gray-200 rounded-lg"
                  onClick={() => handleSelect(hour, "hour")}
                >
                  {hour}
                </div>
              ))}
            </div>

            {/* Minute Scroll */}
            <div className="w-1/3 overflow-y-auto max-h-32 scrollbar-hide">
              {minutes.map((minute) => (
                <div
                  key={minute}
                  className="p-2 text-center text-lg cursor-pointer hover:bg-gray-200 rounded-lg"
                  onClick={() => handleSelect(minute, "minute")}
                >
                  {minute}
                </div>
              ))}
            </div>

            {/* AM/PM Toggle */}
            <div className="flex flex-col w-1/3">
              <button
                className={`p-2 text-lg ${
                  selectedAMPM === "AM"
                    ? "bg-mainLight bg-opacity-50 rounded-lg"
                    : ""
                }`}
                type="button"
                onClick={() => toggleAMPM("AM")}
              >
                AM
              </button>
              <button
                className={`p-2 text-lg ${
                  selectedAMPM === "PM"
                    ? "bg-mainLight bg-opacity-50 rounded-lg"
                    : ""
                }`}
                type="button"
                onClick={() => toggleAMPM("PM")}
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

"use client";
import { Award, X } from "lucide-react";
export function AchievementDialog(prop) {
  const { isOpen_notification, setIsOpen_notification } = prop;
  return (
    <div
      className={`fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center p-4 ${
        !isOpen_notification ? "hidden" : ""
      }`}>
      <div className="sm:max-w-md p-0 relative overflow-hidden bg-white rounded-lg shadow-2xl">
        <button
          onClick={() => setIsOpen_notification(false)}
          className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
          <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
        </button>

        <div className="text-center p-8 space-y-8 bg-white">
          <div className="relative mx-auto w-36 h-36">
            <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 animate-pulse scale-110" />
            <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg">
              <Award className="w-20 h-20 text-white drop-shadow-md" />
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-[#8678FB]-900 uppercase">
              YOU HAVE GOT ACHIEVEMENT
            </h2>
            <h3 className="text-4xl font-bold text-[#8678FB] ">Workout</h3>
            <p className="text-xl text-gray-600">90 Days built a habit</p>
          </div>

          <div className="text-4xl font-bold text-yellow-500 ">+150 Points</div>
        </div>

        <div className="bg-[#8678FB] p-8 text-center text-white relative before:absolute before:content-[''] before:w-[100%] before:h-16 before:bg-white before:-top-8 before:left-1/2 before:-translate-x-1/2 before:rounded-[50%] mt-[-10]">
          <h4 className="text-3xl font-bold mb-3 drop-shadow-md mt-10">
            Congratulations!
          </h4>
          <p className="text-xl mb-8 opacity-90">
            You have got this achievement completely.
          </p>
          <button
            className="bg-gradient-to-r from-yellow-100 to-yellow-200 hover:from-yellow-200 hover:to-yellow-300 text-[#8678FB] font-bold text-xl px-10 py-4 rounded-full shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            onClick={() => console.log("Collect Rewards")}>
            Collect Rewards
          </button>
        </div>
      </div>
    </div>
  );
}
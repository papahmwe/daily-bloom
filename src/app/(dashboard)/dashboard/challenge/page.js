import Image from "next/image";
import { SectionIcon, Trash2 } from "lucide-react";
import {Plus} from "lucide-react";


export default function Challenge() {
  return(
    <div className="p-5 bg-gray-200 min-h-screen">
      <h1 className="text-[22px] font-medium font-['Montserrat']">Creater Your Own Habit that you want to Challenge.</h1>
      {/* Card Section */}
      <div className="p-6 flex gap-6 justify-between items-stretch">
      {/* Podcast Card */}
        <div className="bg-[#d3cff7] rounded-[20px] border border-[#6859ff] flex flex-col flex-grow p-6">
          <div className="flex justify-between items-start">
            <div className="text-sm font-semibold font-['Montserrat']">
              Practice English Podcast for 30 minutes.
            </div>
            <button className="p-2 text-red-600 rounded-lg hover:text-white">
            <Trash2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-center mt-auto">
            <Image src="/assets/challenge_images/podcast.png" alt="Podcast" width={150} height={150} />
          </div>
          <div className="flex justify-between mt-auto">
            <div className="p-4 text-xs font-semibold font-['Montserrat']">50 points</div>
            <button className="px-6 py-2 bg-white rounded-[10px] hover:bg-black hover:text-white text-xs font-semibold">
              Due Today
            </button>
          </div>
        </div>

      {/* Museum Card */}
        <div className="bg-[#d3cff7] rounded-[20px] border border-[#6859ff] flex flex-col flex-grow p-6">
          <div className="flex justify-between items-start">
            <div className="text-sm font-semibold font-['Montserrat']">Visit a Museum or Exhibition</div>
            <button className="p-2 text-red-600 rounded-lg hover:text-white">
            <Trash2 className="w-5 h-5" />
            </button>
            </div>
          <div className="flex justify-center mt-auto">
            <Image src="/assets/challenge_images/museum.png" alt="Museum" width={150} height={150} />
          </div>
          <div className="flex justify-between mt-auto">
            <div className="p-4 text-xs font-semibold font-['Montserrat']">50 points</div>
            <button className="px-6 py-2 bg-white rounded-[10px] hover:bg-black hover:text-white text-xs font-semibold">
              Due on 28
            </button>
          </div>
        </div>

      {/* Journal Card */}
        <div className="bg-[#d3cff7] rounded-[20px] border border-[#6859ff] flex flex-col flex-grow p-6">
          <div className="flex justify-between items-start">
            <div className="text-sm font-semibold font-['Montserrat']">Write a Journal about My Day</div>
            <button className="p-2 text-red-600 rounded-lg hover:text-white">
            <Trash2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-center mt-auto">
            <Image src="/assets/challenge_images/journal.png" alt="Journal" width={150} height={150} />
          </div>
          <div className="flex justify-between mt-auto">
            <div className="p-4 text-xs font-semibold font-['Montserrat']">50 points</div>
            <button className="px-6 py-2 bg-white rounded-[10px] hover:bg-black hover:text-white text-xs font-semibold">
              Due Today
            </button>
          </div>
        </div>
      {/* Plus (+) Add Button */}
        <div className="mt-20">
          <button className="w-16 h-16 bg-[#6859ff] text-white rounded-full flex items-center justify-center hover:bg-[#543de5] transition shadow-lg">
          <Plus className="w-8 h-8" />
          </button>
        </div>
      </div>
      {/* Challenge Ideas */}
      <h1 className="font-['Montserrat'] text-[22px] font-bold">Challenge Ideas For You</h1>
      <section className="p-6 flex">
        <div className="flex flex-col">
          <Image src="/assets/challenge_images/Yoga.jpg" alt="Yoga" width={150} height={150} />
          <p>Yoga</p>
        </div>
      </section>
    </div>
  );
}
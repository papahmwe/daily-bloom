import Image from "next/image";
import { Trash2 } from "lucide-react";


export default function Challenge() {
  return(
    <div className="p-5 bg-gray-200 min-h-screen">
      <h1 className="text-[22px] font-medium font-['Montserrat']">Creater Your Own Habit that you want to Challenge.</h1>
      {/* Card Section */}
      <div className="p-6 flex justify-between">
        {/* Podcast Card Section */}
        <div className="bg-[#d3cff7] rounded-[20px] border border-[#6859ff] flex flex-col">
          <div className="flex">
            <div className="p-6 text-sm font-semibold font-['Montserrat']">Practice English Podcast for 30 minutes.</div>
            <button className="p-2 mr-6 text-red-600 rounded-lg hover:text-white">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          
          <div className="ml-20">
            <Image
              src="/assets/challenge_images/podcast.png"
              alt="Podcast"
              width={150}
              height={150}
              // className="text-center"
            />
          </div>

          <div className="flex justify-between">
            <div className="p-4 text-xs font-semibold font-['Montserrat']">50 points</div>
            <button className="px-6 py-2 justify-center h-10 text-black text-center bg-white rounded-[10px] hover:text-white hover:bg-black mr-6 text-xs font-semibold font-['Montserrat']">
              Due Today
            </button>
          </div>
        </div>
        
         {/* Museum Card Section */}
         <div className="bg-[#d3cff7] rounded-[20px] border border-[#6859ff] flex flex-col">
          <div className="flex">
            <div className="p-6 text-sm font-semibold font-['Montserrat']">Visit Mueseum or an exhibition</div>
            <button className="p-2 mr-6 text-red-600 rounded-lg hover:text-white">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          
          <div className="ml-20">
            <Image
              src="/assets/challenge_images/museum.png"
              alt="Podcast"
              width={150}
              height={150}
              // className="text-center"
            />
          </div>

          <div className="flex justify-between">
            <div className="p-4 text-xs font-semibold font-['Montserrat']">50 points</div>
            <button className="px-6 py-2 justify-center h-10 text-black text-center bg-white rounded-[10px] hover:text-white hover:bg-black mr-6 text-xs font-semibold font-['Montserrat']">
              Due on 28
            </button>
          </div>
        </div>

       {/* Journel Card Section */}
       <div className="bg-[#d3cff7] rounded-[20px] border border-[#6859ff] flex flex-col">
          <div className="flex">
            <div className="p-6 text-sm font-semibold font-['Montserrat']">Write a Journal about My Day</div>
            <button className="p-2 mr-6 text-red-600 rounded-lg hover:text-white">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          
          <div className="ml-20">
            <Image
              src="/assets/challenge_images/journal.png"
              alt="Podcast"
              width={150}
              height={200}
              // className="text-center"
            />
          </div>

          <div className="flex justify-between">
            <div className="p-4 text-xs font-semibold font-['Montserrat']">50 points</div>
            <button className="px-6 py-2 justify-center h-10 text-black text-center bg-white rounded-[10px] hover:text-white hover:bg-black mr-6 text-xs font-semibold font-['Montserrat']">
              Due Today
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
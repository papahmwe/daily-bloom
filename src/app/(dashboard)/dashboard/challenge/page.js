"use client";
import { useRouter } from "next/navigation";  // Use this for the App Router instead
import { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Trash2 } from "lucide-react";


export default function Challenge() {
  const [challenges, setChallenges] = useState([]);
  const router = useRouter();

  // Fetch challenges from Firebase
  useEffect(() => {
    async function fetchChallenges() {
      const querySnapshot = await getDocs(collection(db, "challenges"));
      const challengeData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChallenges(challengeData);
    }

    fetchChallenges();
  }, []);

  // Navigate to the challenge creation page
  const handleAddChallenge = () => {
    router.push("/create-challenge"); // Assuming you have a route for challenge creation
  };

  return(
    <div className="-200 min-h-screen">
      <h1 className="text-[22px] font-medium font-['Montserrat']">Creater Your Own Habit that you want to Challenge.</h1>

      {/* Empty State Card Section */}
      <div className="p-6 flex gap-6 items-stretch">
        <div className="bg-[#d7d7d7;] rounded-[20px] border border-[#6859ff] flex flex-col p-6 mt-10">
          <div className="flex justify-center mt-auto">
            <Image src="/assets/challenge_images/empty.png" alt="Podcast" width={100} height={100} />
          </div>
          <h1 className="text-center font-semibold mt-2">Start to create a good habit.</h1>
          <p className="text-center text-sm mt-2">Set challenges that matter to you <br></br>and stay on course towards.</p>
        </div>
        {/* Plus (+) Add Button */}
        <div className="mt-20">
          <button className="w-16 h-16 bg-[#6859ff] text-white rounded-full flex items-center justify-center hover:bg-[#543de5] transition shadow-lg">
          <Plus className="w-8 h-8" />
          </button>
        </div>
      </div>
      
      {/* With Data Card Section */}
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
      <h1 className="pl-6 font-['Montserrat'] text-[22px] font-bold">Challenge Ideas For You</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-6">
      {/* Challenge Card Template */}
      {[
        { image: "/assets/challenge_images/Yoga.jpg", title: "Yoga", duration: "30 mins" },
        { image: "/assets/challenge_images/reading.jpg", title: "Read Books", duration: "40     mins" },
        { image: "/assets/challenge_images/meditate.jpg", title: "Meditate", duration: "20    mins" },
        { image: "/assets/challenge_images/brain.jpg", title: "Brainstorm Ideas", duration:     "15 mins" },
        { image: "/assets/challenge_images/workout.jpg", title: "Workout", duration: "30    mins" },
        { image: "/assets/challenge_images/cycling.jpg", title: "Cycling", duration: "45    mins" },
        { image: "/assets/challenge_images/tdl.jpg", title: "Make To-Do List", duration:     "10 mins" },
        { image: "/assets/challenge_images/devotional.jpg", title: "Devotional", duration:    "50 mins" },
        { image: "/assets/challenge_images/tidy.jpg", title: "Tidy Up", duration: "20     mins" }
      ].map((challenge, index) => (
        <div key={index} className="relative flex flex-col w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={challenge.image}
            alt={challenge.title}
            width={300}
            height={250}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-start justify-between p-3">
            <div>
              <p className="text-white text-sm font-semibold">{challenge.title}</p>
              <p className="text-white text-sm font-semibold">{challenge.duration}</p>
            </div>
            <p className="text-white text-sm font-semibold p-1 flex">Reward - 20 points</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
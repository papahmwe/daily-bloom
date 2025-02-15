import Image from "next/image";
import PieChart from "@/components/HomePieChart";

// components/HomePage.jsx
export default function DashboarHomePage() {
  return (
    <div className="p-6 bg-gray-200 max-h-screen">
      {/* Card Section */}
      <div className="flex justify-between mb-3 ml-10 mr-0">
        <div className="bg-white rounded-[20px] p-6 flex justify-start items-center space-x-6 shadow-lg">

        {/* Left: Text Content */}
          <div className="flex flex-col mr-20">
            <h2 className="text-black text-xl font-semibold font-['Montserrat']">
            Congratulations, Henery!
            </h2>
            <p className="text-black font-['Montserrat'] mt-2">
            You have done <span className="font-semibold">72% more habits</span> today.
            <br></br>
            Check your total habit progress in your dashboard.
            </p>
          </div>
        {/* Right: Image */}
          <div className="flex-shrink ml-20">
            <Image
              src="/assets/dashboard images/man.png"
              alt="Man"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="px-10 flex justify-end">
          <div className="bg-[#b0a7f8] rounded-[20px] px-[12px] py-[22px] gap-[30px]    inline-flex flex-col justify-start items-center h-[160px] mr-10">
            <div className="text-black text-xl font-medium font-['Jost'] text-center">Upcoming Habit</div>
            <div className="text-black text-[26px] font-medium font-['Jost']">10</div>
          </div>
          <div className="bg-[#b0a7f8] rounded-[20px] px-[22px] py-[22px] gap-[30px] inline-flex flex-col justify-start items-center h-[160px]">
            <div className="text-black text-xl font-medium font-['Jost'] text-center">Total Habit</div>
            <div className="text-black text-[26px] font-medium font-['Jost']">37</div>
          </div>
        </div>
      </div>

{/* Recent Habits Section */}
    <h2 className="text-xl font-bold mt-10 mb-4 ml-10 font-[Jost]">Recent Habits</h2>
    <div className="bg-white ml-10 mr-10">
        <table className="w-full text-center border-collapse mr-0">
          <thead>
            <tr className="bg-[#b0a7f8]">
              <th className="p-3 text-lg font-bold font-[Jost] text-black">No.</th>
              <th className="p-3 text-lg font-bold font-[Jost] text-black">Habit Name</th>
              <th className="p-3 text-lg font-bold font-[Jost] text-black">Start Date</th>
              <th className="p-3 text-lg font-bold font-[Jost] text-black">End Date</th>
              <th className="p-3 text-lg font-bold font-[Jost] text-black">Category</th>
              <th className="p-3 text-lg font-bold font-[Jost] text-black">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example of dynamic data rows */}
            <tr>
              <td className="p-3 text-black font-[Jost] font-normal">1</td>
              <td className="p-3 text-black font-[Jost] font-normal">Play Games</td>
              <td className="p-3 text-black font-[Jost] font-normal">2th Jan, 2025</td>
              <td className="p-3 text-black font-[Jost] font-normal">3th Jan, 2025</td>
              <td className="p-3 text-black font-[Jost] font-normal">Relax</td>
              <td className="p-3 text-black font-[Jost] font-normal">Completed</td>
            </tr>
            <tr>
              <td className="p-3 text-black font-[Jost] font-normal">2</td>
              <td className="p-3 text-black font-[Jost] font-normal">Yoga</td>
              <td className="p-3 text-black font-[Jost] font-normal">6th Jan, 2025</td>
              <td className="p-3 text-black font-[Jost] font-normal">8th Jan, 2025</td>
              <td className="p-3 text-black font-[Jost] font-normal">Exercise</td>
              <td className="p-3 text-black font-[Jost] font-normal">In Progress</td>
            </tr>
            <tr>
              <td className="p-3 text-black font-[Jost] font-normal">3</td>
              <td className="p-3 text-black font-[Jost] font-normal">Water Intake</td>
              <td className="p-3 text-black font-[Jost] font-normal">9th Jan, 2025</td>
              <td className="p-3 text-black font-[Jost] font-normal">12th Jan, 2025</td>
              <td className="p-3 text-black font-[Jost] font-normal">Hydration</td>
              <td className="p-3 text-black font-[Jost] font-normal">Uncompleted</td>
            </tr>
          </tbody>
          
        </table>
        <div className="flex justify-between mt-5"> 
              <p className="font-[Jost] ml-5">Showing Pairs of 1-3</p>
              <button className="px-10 py-2 bg-[#6859ff] rounded-[10px] text-white mr-5 mb-5">Next</button>
        </div>
      </div>
      <div className="m-10 flex flex-col-reverse justify-normal">
        <div>
        <PieChart />
        </div>
      </div>
    </div>
  );
}
"use client";

// import DonutChart from "@/components/Dashboard_Progress/DonutPieWithData";
import DonutChart from "@/components/Dashboard_Home/HomePieChart"

export default function Data() {
  const firstData = [
    { name: "completed", value: 50, fill: "#f1e6b9" },
    { name: "active", value: 50, fill: "#9409ff" },
  ];
  const secondData = [
    { name: "consistency", value: 50, fill: "#ff7f50" },
    { name: "skipped", value: 50, fill: "#55efc4" },
  ];
  const thirdData = [
    { name: "on time", value: 50, fill: "#74b9ff" },
    { name: "missed", value: 50, fill: "#fa1111" },
  ];

  // const monthlyData = [
  //   { name: "Lifestyle", value: 40, fill: "#FAA1D2" },
  //   { name: "Health", value: 40, fill: "#90CDFC" },
  // ];

  const percentage = 50;

  return (
    <div className=" flex justify-start gap-[20px] ">
      {/* First Card Section  */}
      <div className="w-[330px] flex flex-col items-center p-5 bg-white rounded-2xl
        shadow-md text-center mr-10 mt-10">
        {/* Title Centered */}
        <h3 className="text-lg font-semibold mb-4">Progress</h3>

        {/* Content Container */}
        <div className="flex justify-between items-center w-full">
          {/* Donut Chart Centered */}
          <div className="flex-1 flex justify-center">
          <DonutChart data={firstData} percentage={percentage} />
          </div>

          {/* Legend on the Right */}
          <div className="flex flex-col justify-center items-start gap-2">
          {firstData.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full"
            style={{ backgroundColor: entry.fill }} // Legend color
            ></div>
            <span className="font-jost text-sm text-black">{entry.name}</span>
          </div>
          ))}
          </div>
        </div>
      </div>

      {/* Second Card Section*/}
      <div className="w-[330px] flex flex-col items-center p-5 bg-white rounded-2xl
        shadow-md text-center mr-10 mt-10">
        {/* Title Centered */}
        <h3 className="text-lg font-semibold mb-4">Consistency</h3>

        {/* Content Container */}
        <div className="flex justify-between items-center w-full">
          {/* Donut Chart Centered */}
          <div className="flex-1 flex justify-center">
          <DonutChart data={secondData} percentage={percentage} />
          </div>

          {/* Legend on the Right */}
          <div className="flex flex-col justify-center items-start gap-2">
          {secondData.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full"
            style={{ backgroundColor: entry.fill }} // Legend color
            ></div>
            <span className="font-jost text-sm text-black">{entry.name}</span>
          </div>
          ))}
          </div>
        </div>
      </div>

      {/* Third Card Section*/}
      <div className="w-[330px] flex flex-col items-center p-5 bg-white rounded-2xl
        shadow-md text-center mr-10 mt-10">
        {/* Title Centered */}
        <h3 className="text-lg font-semibold mb-4">Habit Completion</h3>

        {/* Content Container */}
        <div className="flex justify-between items-center w-full">
          {/* Donut Chart Centered */}
          <div className="flex-1 flex justify-center">
          <DonutChart data={thirdData} percentage={percentage} />
          </div>

          {/* Legend on the Right */}
          <div className="flex flex-col justify-center items-start gap-2">
          {thirdData.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full"
            style={{ backgroundColor: entry.fill }} // Legend color
            ></div>
            <span className="font-jost text-sm text-black">{entry.name}</span>
          </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

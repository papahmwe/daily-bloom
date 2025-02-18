"use client";

import Image from "next/image";

import DonutChart from "@/components/Dashboard_Progress/DonutPieWithData";

export default function Data() {
  const goalData = [
    { name: "Remaining", value: 20, fill: "#E2E8F0" },
    { name: "Completed", value: 80, fill: "#FAA1D2" },
  ];

  const monthlyData = [
    { name: "Lifestyle", value: 40, fill: "#FAA1D2" },
    { name: "Health", value: 40, fill: "#90CDFC" },
    { name: "Education", value: 20, fill: "#93FC90" },
  ];

  
  const percentage = 80;

  return (
    <div className=" flex flex-col justify-start gap-[50px] ">
      {/* Progress Section */}
      <div className=" flex flex-col gap-[30px] ">
        <h1 className="font-montserrat font-[700] text-[27px] text-[#000000] leading-[32.91px]">
          The progress you&apos;ve already made.
        </h1>

        <div className="w-[660px] h-[269px] flex justify-start items-center gap-[40px] ">
          <div className="flex justify-start items-center gap-[80px] ">
            {/* First Donut Chart */}
            <DonutChart data={goalData} percentage={percentage} />

            {/* Second Donut Chart */}
            <DonutChart data={monthlyData} percentage={"This Month"} />
          </div>

          {/* Legend on the Right */}
          <div className="flex flex-col justify-center items-start gap-[10px] ">
            {monthlyData.map((entry, index) => (
              <div
                key={entry.name}
                className="flex justify-center items-center gap-[8px]"
              >
                <div
                  className="w-[20px] h-[20px] rounded-full"
                  style={{ backgroundColor: entry.fill }} // Use the color defined in the data
                ></div>
                <span className="font-jost font-[400] text-[16px] text-[#000000] leading-[17.34px]">
                  {entry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
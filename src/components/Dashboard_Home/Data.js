"use client";

import DonutChart from "@/components/Dashboard_Home/HomeDataChart";

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

  const percentage = 50;

  return (
    <div className="flex flex-wrap justify-start p-5 mt-10">
      {/* Card Component */}
      {[{ title: "Progress", data: firstData }, { title: "Consistency", data: secondData }, { title: "Habit Completion", data: thirdData }].map((item, index) => (
        <div
          key={index}
          className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center p-5 bg-white rounded-2xl shadow-md text-center ml-5"
        >
          {/* Title */}
          <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

          {/* Content */}
          <div className="flex flex-col items-center">
            {/* Donut Chart */}
            <div className="flex justify-center mb-4">
              <DonutChart data={item.data} percentage={percentage} />
            </div>

            {/* Legend */}
            <div className="flex flex-col justify-center items-start gap-2">
              {item.data.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: entry.fill }}
                  ></div>
                  <span className="font-jost text-sm text-black">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

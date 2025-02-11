"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Radius } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {
  const data = {
    labels: ["Completed", "Active"],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ["#9409ff", "#f1e6b9"],
        borderWidth: 1,
        // borderRadius:20,
        cutout: "50%", // Makes it a donut chart
      },
    ],
  };
  const data1 = {
    labels: ["consistency", "skipped"],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ["#55efc4", "#f1e6b9"],
        borderWidth: 1,
        borderRadius:20,
        cutout: "50%",
      },
    ],
  };
  const data2 = {
    labels: ["on time", "missed"],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ["#74b9ff", "#fb1212"],
        borderWidth: 1,
        borderRadius:20,
        cutout: "50%",
      },
    ],
  };

  return (
    <div className="flex justify-between">
      {/* First Pie Chart */}
      <div className="p-3 bg-white rounded-lg shadow-md text-center mr-10">
        <h3 className="text-lg font-semibold text-gray-700 font-[Jost]">Progress</h3>
        <p className="font-[Jost]">50%</p>
        <div className="w-56 mx-auto">
          <Doughnut data={data} />
        </div>
      </div>

      {/* Second Pie Chart */}
      <div className="p-3 bg-white rounded-lg shadow-md text-center mr-10">
        <h3 className="text-lg font-semibold text-gray-700 font-[Jost]">Consistency</h3>
        <p className="font-[Jost]">50%</p>
        <div className="w-56 mx-auto">
          <Doughnut data={data1} />
        </div>
      </div>

      {/* Third Pie Chart */}
      <div className="p-3 bg-white rounded-lg shadow-md text-center">
        <h3 className="text-lg font-semibold text-gray-700 font-[Jost]">Habit Completion</h3>
        <p className="font-[Jost]">50%</p>
        <div className="w-56 mx-auto">
          <Doughnut data={data2} />
        </div>
      </div>

    </div>
  );
}

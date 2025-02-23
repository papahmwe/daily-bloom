"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import Data from "@/components/Dashboard_Home/Data";
import WithoutData from "@/components/Dashboard_Home/HomeWithoutDataChart";

// components/HomePage.jsx
export default function DashboarHomePage() {
  // // Habit Section
  const [upcomingHabit, setUpcomingHabit] = useState(0);
  const [totalHabit, setTotalHabit] = useState(0);
  const [completedPercentage, setCompletedPercentage] = useState(0);

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    // setData("1");
  }, []);

  // Recent Habits Section
  const [habits, setHabits] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);


  useEffect(() => {
    async function fetchHabitData() {
      try {
        const response = await fetch("/api/habits"); // Update with your API endpoint
        const data = await response.json();
        setUpcomingHabit(data.upcomingHabit);
        setTotalHabit(data.totalHabit);
        setCompletedPercentage(data.completedPercentage);
      } catch (error) {
        console.log("Error fetching habit data:", error);
      }
    }

    fetchHabitData();
  }, []);

  useEffect(() => {
    async function fetchHabits() {
      try {
        const response = await fetch(`/api/habits?page=${page}&limit=3`);
        const data = await response.json();

        console.log(data);

        if (data.habits.length === 0) {
          setHasMore(false); // No more habits available
        } else {
          setHabits((prev) => [...prev, ...data.habits]); // Append new data
        }
      } catch (error) {
        console.log("Error fetching habits:", error);
      }
    }

    fetchHabits();
  }, [page]);

  return (
    <div>
      {/* Card Section */}
      <div className="flex justify-around mb-3 r-0">
        <div className="bg-white rounded-[20px] p-6 flex justify-start items-center space-x-6 shadow-lg">
        {/* Left: Text Content */}
          <div className="flex flex-col mr-20">
            {completedPercentage === 0 || !completedPercentage ? (
             // Welcome message for first-time users with no data
              <>
            <h2 className="text-black text-xl font-semibold font-['Montserrat']">
            Welcome, Henry!
            </h2>
            <p className="text-black font-['Montserrat'] mt-2">
              Let's get started on building great habits today!
            <br />
              Track your habits and see your progress here.
            </p>
            </>
            ) : (
            // Congratulations message when data exists
            <>
           <h2 className="text-black text-xl font-semibold font-['Montserrat']">
              Congratulations, Henry!
            </h2>
            <p className="text-black font-['Montserrat'] mt-2">
              You have done <span className="font-semibold">{completedPercentage} more habits</span> today.
              <br />
              Check your total habit progress in your dashboard.
            </p>
            </>
            )}
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
            <div className="text-black text-xl font-medium font-['Jost'] text-center">
              Upcoming Habit
            </div>
            <div className="text-black text-[26px] font-medium font-['Jost']">
              {upcomingHabit}
            </div>
          </div>
          <div className="bg-[#b0a7f8] rounded-[20px] px-[22px] py-[22px] gap-[30px] inline-flex flex-col justify-start items-center h-[160px]">
            <div className="text-black text-xl font-medium font-['Jost'] text-center">
              Total Habit
            </div>
            <div className="text-black text-[26px] font-medium font-['Jost']">
              {totalHabit}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Habits Section */}
      <h2 className="text-xl font-bold mt-10 mb-4 font-[Jost]">
        Recent Habits
      </h2>
      <div className="bg-white mr-10">
        <table className="w-full text-center border-collapse mr-0">
          <thead>
            <tr className="bg-[#b0a7f8]">
              <th className="p-3 text-lg font-bold font-[Jost] text-black">
                No.
              </th>
              <th className="p-3 text-lg font-bold font-[Jost] text-black">
                Habit Name
              </th>
              <th className="p-3 text-lg font-bold font-[Jost] text-black">
                Start Date
              </th>
              <th className="p-3 text-lg font-bold font-[Jost] text-black">
                End Date
              </th>
              <th className="p-3 text-lg font-bold font-[Jost] text-black">
                Category
              </th>
              <th className="p-3 text-lg font-bold font-[Jost] text-black">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {habits.map((habit, index) => (
              <tr key={habit.id}>
                <td className="p-3 text-black font-[Jost] font-normal">
                  {index + 1}
                </td>
                <td className="p-3 text-black font-[Jost] font-normal">
                  {habit.name}
                </td>
                <td className="p-3 text-black font-[Jost] font-normal">
                  {habit.startDate}
                </td>
                <td className="p-3 text-black font-[Jost] font-normal">
                  {habit.endDate}
                </td>
                <td className="p-3 text-black font-[Jost] font-normal">
                  {habit.category}
                </td>
                <td className="p-3 text-black font-[Jost] font-normal">
                  {habit.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-between mt-5">
          <p className="font-[Jost] ml-5">Showing {habits.length} Habits</p>
          {hasMore && (
            <button
              onClick={() => setPage(page + 1)}
              className="px-10 py-2 bg-[#6859ff] rounded-[10px] text-white mr-5 mb-5"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* Pie Chart Section */}
      <div>
        {/* Conditional Rendering Based on Data */}
        {data && data.length > 0 ? <Data /> : <WithoutData />}
      </div>
    </div>
  );
}

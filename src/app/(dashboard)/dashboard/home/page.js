"use client";

import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import Data from "@/components/Dashboard_Home/Data";
import WithoutData from "@/components/Dashboard_Home/HomeWithoutDataChart";

const data = [
  "No.",
  "Habit Name",
  "Start Date",
  "End Date",
  "Category",
  "Status",
];

export default function DashboardHomePage() {
  // Habit Section
  const [upcomingHabit, setUpcomingHabit] = useState(0);
  const [totalHabit, setTotalHabit] = useState(0);
  const [failedHabit, setFailedHabit] = useState(0);
  const [completedHabit, setCompletedHabit] = useState(0);
  const [ongoingHabit, setOngoingHabit] = useState(0);
  const [completedPercentage, setCompletedPercentage] = useState(0);

  // Recent Habits Section
  const [habits, setHabits] = useState([]);
  const [page, setPage] = useState(1);
  const habitsPerPage = 3;
  const totalPages = Math.ceil(habits.length / habitsPerPage);

  const { data: session } = useSession();
  const userId = session?.user.id;

  if (!session) {
    redirect("/");
  }

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/home/${userId}`);
        console.log(res.data);
        setHabits(res.data.habits);
        setUpcomingHabit(res.data.upcomingHabits);
        setTotalHabit(res.data.totalHabits);
        setFailedHabit(res.data.failedHabits);
        setCompletedHabit(res.data.completedHabits);
        setOngoingHabit(res.data.onGoingHabits);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDashboardData();
  }, [userId]);

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  // Determine the habits to display for the current page
  const indexOfLastHabit = page * habitsPerPage;
  const indexOfFirstHabit = indexOfLastHabit - habitsPerPage;
  const currentHabits = habits.slice(indexOfFirstHabit, indexOfLastHabit);

  return (
    <div className="w-[90%] h-auto flex flex-col justify-start items-center gap-12">
      {/* Card Section */}
      <div className="flex gap-7 w-full">
        <div className="bg-backgroundPrimary rounded-[10px] flex justify-center items-center shadow-inner w-[60%] h-40">
          {/* Left: Text Content */}
          <div className="flex justify-start items-center gap-5">
            {completedPercentage === 0 || !completedPercentage ? (
              <div>
                <h2 className="text-black text-[24px] font-[600] font-montserrat tracking-wide mb-3">
                  Welcome {session.user.username}
                </h2>
                <div>
                  <p className="text-black font-montserrat opacity-80 text-[15px] font-[500] tracking-wide">
                    Let&apos;s get started on building great habits today!
                  </p>
                  <p> Track your habits and see your progress here.</p>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-black font-montserrat opacity-80 text-[15px] font-[500]">
                  Congratulations, {session.user.username}!
                </h2>
                <p className="text-black font-montserrat opacity-80 text-[15px] font-[500]">
                  You have done
                  <span className="">{completedPercentage} more habits</span>
                  today.
                  <br />
                  Check your total habit progress in your dashboard.
                </p>
              </div>
            )}
            {/* Right: Image */}
            <div>
              <Image
                src="/assets/dashboard images/man.png"
                alt="Man"
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" flex justify-end w-[40%] gap-5">
          <div className="bg-mainLight hover:bg-mainPrimary duration-700 transition-all rounded-[10px] w-[50%] h-40 flex flex-col justify-center items-center space-y-12">
            <div className="text-black text-[18px] font-[600] font-jost tracking-wide opacity-80">
              Upcoming Habit
            </div>
            <div className="text-black text-[18px] font-[600] font-jost tracking-wide opacity-80">
              {upcomingHabit}
            </div>
          </div>
          <div className="bg-mainLight hover:bg-mainPrimary duration-700 transition-all rounded-[10px] w-[50%] h-40 flex flex-col justify-center items-center space-y-12 ">
            <div className="text-black text-[18px] font-[600] font-jost tracking-wide opacity-80">
              Total Habit
            </div>
            <div className="text-black text-[18px] font-[600] font-jost tracking-wide opacity-80">
              {totalHabit}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Habits Section */}
      <div className="w-full ">
        <h2 className="text-black text-[24px] font-[600] font-jost opacity-80 tracking-wide mb-5">
          Recent Habits
        </h2>
        <div className="bg-backgroundPrimary ">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-mainLight ">
                {data.map((data, index) => {
                  return (
                    <th
                      key={index}
                      className="text-black text-[18px] font-[500] font-jost opacity-80 tracking-wide p-3"
                    >
                      {data}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {currentHabits.map((habit, index) => (
                <tr key={habit.id}>
                  <td className="p-3 text-black text-[16px] font-[400] font-jost opacity-80 tracking-wide">
                    {index + 1 + indexOfFirstHabit}
                  </td>
                  <td className="p-3 text-black text-[16px] font-[400] font-jost opacity-80 tracking-wide">
                    {habit.name}
                  </td>
                  <td className="p-3 text-black text-[16px] font-[400] font-jost opacity-80 tracking-wide">
                    {formatDate(habit.startDate)}
                  </td>
                  <td className="p-3 text-black text-[16px] font-[400] font-jost opacity-80 tracking-wide">
                    {formatDate(habit.endDate)}
                  </td>
                  <td className="p-3 text-black text-[16px] font-[400] font-jost opacity-80 tracking-wide">
                    {habit.category}
                  </td>
                  <td className="p-3 text-black text-[16px] font-[400] font-jost opacity-80 tracking-wide">
                    {habit.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex justify-between mt-5">
            <p className=" text-black text-[16px] font-[500] font-jost opacity-80 tracking-wide ml-5">
              Showing {currentHabits.length} of {habits.length} Habits
            </p>
            <div className="flex space-x-4 mr-5 mb-5">
              {page > 1 && (
                <button
                  onClick={() => setPage(page - 1)}
                  className="px-8 py-2 bg-mainPrimary hover:bg-mainSecondary duration-700 transition-all rounded-[10px] text-backgroundPrimary text-[16px] font-[500] font-jost text-opacity-80 tracking-wide"
                >
                  Previous
                </button>
              )}
              {page < totalPages && (
                <button
                  onClick={() => setPage(page + 1)}
                  className="px-8 py-2 bg-mainPrimary hover:bg-mainSecondary duration-700 transition-all rounded-[10px] text-backgroundPrimary text-[16px] font-[500] font-jost text-opacity-80 tracking-wide"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="w-full">
        {habits && habits.length > 0 ? (
          <Data
            totalHabits={totalHabit}
            upcomingHabits={upcomingHabit}
            failedHabits={failedHabit}
            completedHabits={completedHabit}
            ongoingHabits={ongoingHabit}
          />
        ) : (
          <WithoutData />
        )}
      </div>
    </div>
  );
}

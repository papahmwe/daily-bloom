"use client";

import { useEffect, useState } from "react";

import Data from "@/components/Dashboard_Progress/Data";
import WithoutData from "@/components/Dashboard_Progress/WithoutData";

export default function ProgressPage() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   setData("take a rest");
  // }, []);

  return (
    <div>
      {/* Conditional Rendering Based on Data */}
      {data && data.length > 0 ? <Data /> : <WithoutData />}
    </div>
  );
}

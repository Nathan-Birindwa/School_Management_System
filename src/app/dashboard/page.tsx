"use client";
import { BarChart } from "@/components/Chart";
const DashboardPage = () => {
  const data = [
    { name: "Term one", score: 10 },
    { name: "Term two", score: 3 },
    { name: "Term three", score: 2 },
    { name: "Behaviour", score: 2 },
  ];

  return (
    <main className="p-6 ">
      <h1 className="text-xl text-[#e6edf3] font-bold mb-4">
        Student Perfomence
      </h1>
      <BarChart data={data} />
    </main>
  );
};

export default DashboardPage;

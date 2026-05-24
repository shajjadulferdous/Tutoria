"use client";

import TutorCard from "@/components/TutorCard";
import { Spinner } from "@heroui/react";
import React, { useEffect, useState } from "react";

const TutorPage = () => {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isLoading , setisLoading] = useState(false);

    useEffect(() => {
        const getTutors = async () => {
        setisLoading(true);
        try {
            const query = new URLSearchParams();
            if (search) {
            query.append("search", search);
            }
            if (selectedDate) {
            query.append("startDate", selectedDate);
            }
            const res = await fetch(
               `${process.env.NEXT_PUBLIC_API_URL}/tutoria?${query.toString()}`
            );

            if (!res.ok) {
               throw new Error("Failed to fetch tutors");
            }
            const data = await res.json();
            setTutors(data);
        } catch (error) {
            console.error("Error fetching tutors:", error);
        }
        finally{
            setisLoading(false);
        }

        };
        getTutors();
    }, [search, selectedDate]);

  return (
    <div className="w-11/12 mx-auto my-10">


      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-[#35858E]/10 border border-[#35858E]/20 text-[#35858E] text-sm font-semibold rounded-full px-5 py-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#35858E] animate-pulse" />
          Find Tutors Faster
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Discover Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#35858E] to-cyan-600">
            Perfect Tutor
          </span>
        </h1>

        <p className="text-slate-500 mt-4 max-w-xl">
          Search tutors by name and filter based on registration date.
        </p>
      </div>


      <div className=" rounded-3xl p-6  border-gray-100 flex flex-col md:flex-row gap-4 mb-10">

        <input
          type="text"
          placeholder="Search tutor by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input w-full outline-none border border-gray-200 focus:border-[#35858E] rounded-xl px-4 py-2"
        />

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="input outline-none border border-gray-200 focus:border-[#35858E] rounded-xl px-4 py-2"
        />
      </div>

      {
        isLoading ? <div className="flex h-[60vh] items-center justify-center"> <Spinner className="text-[#35858E]" size="xl" /></div> :<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.length > 0 ? (
          tutors.map((tutor) => (      
            <TutorCard key={tutor._id} tutor={tutor} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <h2 className="text-2xl font-bold text-gray-700">
              No Tutors Found
            </h2>
            <p className="text-gray-500 mt-2">
              Try another search or date filter.
            </p>
          </div>
        )}
      </div>
      }
    </div>
  );
};

export default TutorPage;
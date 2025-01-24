"use client";
import { CollegeContext } from "@/context/CollegContext";
import Link from "next/link";
import React, { useContext, useState } from "react";

const TopCities = () => {
  const [startIndex, setStartIndex] = useState(0);
  const citiesPerPage = 5;
  const { setSelectedCity } = useContext(CollegeContext);

  const cities = [
    { name: "Kolkata", img: "./cities/kolkata.png" },
    { name: "Pune" },
    { name: "Bangalore", img: "./cities/banglore.png" },
    { name: "Mumbai", img: "./cities/mumbai.png" },
    { name: "Jaipur", img: "./cities/jaipur.png" },
    { name: "Gurgaon", img: "./cities/gurgaon.png" },
    { name: "Delhi" },
    { name: "Chennai" },
    { name: "Hyderabad" },
    { name: "Ahmedabad" },
  ];

  const handleNext = () => {
    if (startIndex + citiesPerPage < cities.length) {
      setStartIndex(startIndex + citiesPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - citiesPerPage >= 0) {
      setStartIndex(startIndex - citiesPerPage);
    }
  };

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
  };

  const displayedCities = cities.slice(startIndex, startIndex + citiesPerPage);

  while (displayedCities.length < citiesPerPage) {
    displayedCities.push(null);
  }

  return (
    <div className="pb-8">
      <div className="text-center mt-4 sm:mt-8">
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
          Top Cities
        </p>
      </div>

      <div className="flex sm:flex-row justify-center items-center mb-4 gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`arrow-button ${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Carousel Items */}
        <div className="flex flex-wrap gap-4 justify-center items-center mx-4 mt-5 mb-5">
          {displayedCities.map((city, index) =>
            city ? (
              <Link href={`/colleges?city=${city.name}`} key={index}>
                <button
                  onClick={() => handleCityClick(city.name)}
                  className="h-24 w-36 sm:h-28 sm:w-52 bg-gray-200 border border-black rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-slate-300 transition-all"
                >
                  <img
                    src={
                      city.img ||
                      (index % 2 === 0
                        ? "./cities/default_city1.svg"
                        : "../cities/default_city2.svg")
                    }
                    alt={city.name}
                    className="h-12 sm:h-14 rounded-lg"
                  />
                  <span className="hover:underline text-gray-800 text-sm sm:text-base font-medium hover:text-orange-600 mt-2">
                    {city.name}
                  </span>
                </button>
              </Link>
            ) : (
              <div
                key={index}
                className="h-24 w-36 sm:h-28 sm:w-52 bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400">Coming Soon</span>
              </div>
            )
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={startIndex + citiesPerPage >= cities.length}
          className={`arrow-button ${
            startIndex + citiesPerPage >= cities.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <hr />
    </div>
  );
};

export default TopCities;

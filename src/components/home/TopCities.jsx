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
    { name: "Pune"},
    { name: "Bangalore", img: "./cities/banglore.png" },
    { name: "Mumbai", img: "./cities/mumbai.png" },
    { name: "Jaipur", img: "./cities/jaipur.png" },
    { name: "Gurgaon", img: "./cities/gurgaon.png" },
    { name: "Delhi",  },
    { name: "Chennai", },
    { name: "Hyderabad",},
    { name: "Ahmedabad", },
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

  // Fill remaining slots with placeholders
  while (displayedCities.length < citiesPerPage) {
    displayedCities.push(null);
  }

  return (
    <div className="text-center pb-8">
      <div className="text-left ml-32 mt-8">
        <p className="text-2xl font-semibold">Top Cities</p>
      </div>

      <div className="flex justify-center items-center mb-4">
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
        <div className="flex gap-4 justify-center items-center mx-4 mt-5 mb-5">
          {displayedCities.map((city, index) =>
            city ? (
              <Link href={`/colleges?city=${city.name}`} key={index}>
                <button
                  onClick={() => handleCityClick(city.name)}
                  className="h-28 w-52 bg-gray-200 border border-black rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-slate-300 transition-all"
                >
                  <img
                    src={
                      city.img ||
                      (index % 2 === 0
                        ? "./cities/default_city1.svg"
                        : "../cities/default_city2.svg")
                    }
                    alt={city.name}
                    className="h-14 rounded-lg"
                  />
                  <span className="hover:underline text-gray-800 font-medium hover:text-orange-600 mt-2">
                    {city.name}
                  </span>
                </button>
              </Link>
            ) : (
              <div
                key={index}
                className="h-28 w-52 bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center"
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

// "use client";
// import { CollegeContext } from "@/context/CollegContext";
// import Link from "next/link";
// import React, { useContext, useState } from "react";

// const TopCities = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const citiesPerPage = 5;

//   const { setSelectedCity } = useContext(CollegeContext);

//   const cities = [
//     { name: "Kolkata", img: "./cities/kolkata.png" },
//     { name: "Pune", img: "./cities/pune.JPG" },
//     { name: "Bangalore", img: "./cities/banglore.png" },
//     { name: "Mumbai", img: "./cities/mumbai.png" },
//     { name: "Jaipur", img: "./cities/jaipur.png" },
//     { name: "Gurgaon", img: "./cities/gurgaon.png" }
//   ];
// // const cities = [
// //   { name: "Kolkata", img: "./cities/kolkata.png" },
// //   { name: "Pune", img: "./cities/pune.JPG" },
// //   { name: "Bangalore", img: "./cities/banglore.png" },
// //   { name: "Mumbai", img: "./cities/mumbai.png" },
// //   { name: "Jaipur", img: "./cities/jaipur.png" },
// //   { name: "Gurgaon", img: "./cities/gurgaon.png" },
// //   { name: "Delhi", img: "./cities/delhi.jpg" },
// //   { name: "Chennai", img: "./cities/chennai.png" },
// //   { name: "Hyderabad", img: "./cities/hyderabad.png" },
// //   { name: "Ahmedabad", img: "./cities/ahmedabad.png" },
// // ];
//   const handleNext = () => {
//     if (startIndex + citiesPerPage < cities.length) {
//       setStartIndex(startIndex + citiesPerPage);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex - citiesPerPage >= 0) {
//       setStartIndex(startIndex - citiesPerPage);
//     }
//   };

//   const handleCityClick = (cityName) => {
//     setSelectedCity(cityName);
//   };

//   const displayedCities = cities.slice(startIndex, startIndex + citiesPerPage);

//   // Fill remaining slots with placeholders to maintain structure
//   while (displayedCities.length < citiesPerPage) {
//     displayedCities.push(null);
//   }

//   return (
//     <div>
//       <div className="text-left ml-32 mt-8">
//         <p className="text-2xl font-semibold">Top Cities</p>
//       </div>

//       <div className="flex justify-center items-center mb-4">
//         {/* Previous Button */}
//         <button
//           onClick={handlePrev}
//           disabled={startIndex === 0}
//           className={`arrow-button ${startIndex === 0 ? "disabled" : ""}`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         {/* Carousel Items */}
//         <div className="flex gap-4 justify-center items-center mx-4">
//           {displayedCities.map((city, index) =>
//             city && city.img ? (
//               <Link href={`/colleges?city=${city.name}`} key={index}>
//                 <button
//                   onClick={() => handleCityClick(city.name)}
//                   className="h-28 w-44 border border-black rounded-lg flex flex-col items-center justify-center"
//                 >
//                   <img
//                     src={city.img}
//                     alt={city.name}
//                     className="h-16 rounded-lg"
//                   />
//                   <span className="hover:underline text-gray-800 font-medium hover:text-orange-600 mt-2">
//                     {city.name}
//                   </span>
//                 </button>
//               </Link>
//             ) : (
//               // Placeholder for empty slots or missing images
//               <div
//                 key={index}
//                 className="h-28 w-44 border border-gray-300 rounded-lg flex items-center justify-center"
//               >
//                 <span className="text-gray-400">Coming Soon</span>
//               </div>
//             )
//           )}
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={handleNext}
//           disabled={startIndex + citiesPerPage >= cities.length}
//           className={`arrow-button ${
//             startIndex + citiesPerPage >= cities.length ? "disabled" : ""
//           }`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>

//       <hr />
//     </div>
//   );
// };

// export default TopCities;

// "use client";
// import { CollegeContext } from "@/context/CollegContext";
// import Link from "next/link";
// import React, { useContext, useState } from "react";

// const TopCities = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const citiesPerPage = 6; // Number of cities displayed at a time
//   const stepSize = 3; // Number of cities to step forward/backward

//   const { selectedCity, setSelectedCity } = useContext(CollegeContext);

//   const cities = [
//     { name: "Kolkata", img: "./cities/kolkata.png" },
//     { name: "Pune", img: "./cities/pune.JPG" },
//     { name: "Bangalore", img: "./cities/banglore.png" },
//     { name: "Mumbai", img: "./cities/mumbai.png" },
//     { name: "Jaipur", img: "./cities/jaipur.png" },
//     { name: "Gurgaon", img: "./cities/gurgaon.png" },
//   ];

//   const handleNext = () => {
//     setStartIndex((prevIndex) => (prevIndex + stepSize) % cities.length);
//   };

//   const handlePrev = () => {
//     setStartIndex(
//       (prevIndex) => (prevIndex - stepSize + cities.length) % cities.length
//     );
//   };

//   const handleCityClick = (cityName) => {
//     setSelectedCity(cityName);
//   };

//   const getDisplayedCities = () => {
//     const endIndex = startIndex + citiesPerPage;
//     const visibleCities = cities.slice(startIndex, endIndex);
//     if (visibleCities.length < citiesPerPage) {
//       // Fill remaining slots with cities from the start of the list
//       const additionalCities = cities.slice(
//         0,
//         citiesPerPage - visibleCities.length
//       );
//       return [...visibleCities, ...additionalCities];
//     }
//     return visibleCities;
//   };

//   return (
//     <div>
//       <div className="text-left ml-32 mt-8">
//         <p className="text-2xl font-semibold">Top Cities</p>
//       </div>

//       <div className="flex justify-center mb-4">
//         <button
//           onClick={handlePrev}
//           className={`arrow-button ${startIndex === 0 ? "disabled" : ""}`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         <div className="mb-8 mt-8 flex flex-wrap justify-center gap-4">
//           {getDisplayedCities().map((city, index) => (
//             <Link href={`/colleges?city=${city.name}`} key={index}>
//               <button
//                 onClick={() => handleCityClick(city.name)}
//                 className="h-28 w-44 border border-black rounded-lg flex flex-col items-center justify-center"
//               >
//                 <img
//                   src={city.img}
//                   alt={city.name}
//                   className="h-16 rounded-lg"
//                 />
//                 <span className="hover:underline text-gray-800 font-medium hover:text-orange-600 mt-2">
//                   {city.name}
//                 </span>
//               </button>
//             </Link>
//           ))}
//         </div>

//         <button
//           onClick={handleNext}
//           className={`arrow-button ${
//             startIndex + citiesPerPage >= cities.length ? "disabled" : ""
//           }`}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>

//       <hr />
//     </div>
//   );
// };

// export default TopCities;

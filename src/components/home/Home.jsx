"use client";
import React, { useState, useEffect, useContext } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { SearchContext } from "@/context/SearchContext";
import { redirect } from "next/navigation";

// Import images
import barch_image from "../../assets/barch-min.jpg";
import bpharma from "../../assets/bpharma-min.jpg";
import bca from "../../assets/bca-min.jpg";
import bebtech from "../../assets/bebtech-min.jpg";
import bsc from "../../assets/bsc-min.jpg";

// Image and option arrays
const BackgroundImages = [barch_image, bpharma, bca, bebtech, bsc];
const Options = [
  { text: "B. Arch", img: "./agri.png", link: "#" },
  { text: "B. Pharm", img: "./Pharma.png", link: "#" },
  { text: "BCA", img: "./BCA.png", link: "#" },
  { text: "BE/B. Tech", img: "./Btech.png", link: "#" },
  { text: "B. Sc", img: "./BSC.png", link: "#" },
];

export default function Home() {
  const [redirectUrl, setRedirectUrl] = useState(null);
  const [search, setSearch] = useState("");
  const { setSearchTerm } = useContext(SearchContext);
  const [bgIndex, setBgIndex] = useState(0);
  const [optionIndex, setOptionIndex] = useState(0);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setSearchTerm(search);
    setRedirectUrl("/colleges");
  };

  useEffect(() => {
    if (redirectUrl) {
      redirect(redirectUrl); // Redirect on state change
    }
  }, [redirectUrl]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % BackgroundImages.length);
      setOptionIndex((prevIndex) => (prevIndex + 1) % Options.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div
        id="image"
        className="relative h-[36.3rem] bg-cover bg-center bg-[rgba(0,0,0,0.4)] bg-blend-darken"
        style={{ backgroundImage: `url(${BackgroundImages[bgIndex].src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex flex-col items-start justify-center h-full px-4 md:px-24">
          <div className="text-white text-left">
            <div id="passion" className="text-gray-800 mt-6">
              <div className="text-3xl lg:text-5xl md:text-4xl tracking-[0.1px] font-sans animate-type border-r-4 whitespace-nowrap overflow-hidden">
                <span className="text-white">FOLLOW YOUR </span>
                <span className="text-orange-600">PASSION</span>
              </div>
            </div>

            <p className="text-lg font-medium mb-4">
              Science Technology Engineering Mathematics (STEM)
            </p>

            <div className="relative mb-6">
              <form className="w-full flex">
                <div className="input+svg">
                  <input
                    type="text"
                    id="search"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Search for colleges, courses, exams, QnAs...."
                    className="text-black px-4 py-3 md:py-4 pl-12 h-10 md:h-12 w-full md:w-96 border border-gray-500 rounded-2xl"
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleSearchClick}
                  className="bg-orange-600 text-white px-4 py-3 md:py-4 ml-2 rounded-2xl"
                >
                  <IoArrowForwardOutline />
                </button>
              </form>
            </div>

            <div className="options-container hidden lg:block absolute top-0 right-0 mt-40 mr-4 md:mr-36">
              {Options.map((option, index) => (
                <div
                  key={index}
                  className={`text-left text-lg md:text-3xl font-sans font-semibold text-gray-800 mb-2 mr-40 ${optionIndex === index ? "font-bold text-orange-600" : "text-white"}`}
                >
                  {option.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

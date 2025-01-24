"use client";
import React, { useState, useEffect, useContext } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { SearchContext } from "@/context/SearchContext";
import { redirect } from "next/navigation";
import Image from "next/image";

// Import images
import barch_image from "../../assets/barch-min.jpg";
import bpharma from "../../assets/bpharma-min.jpg";
import bca from "../../assets/bca-min.jpg";
import bebtech from "../../assets/bebtech-min.jpg";
import bsc from "../../assets/bsc-min.jpg";

// Image and option arrays
const BackgroundImages = [barch_image, bpharma, bca, bebtech, bsc];

const Options = [
  {
    text: "B.Arch",
    img: "./programs/barch.png",
    course: "Architecture",
    link: "#",
  },
  {
    text: "B.Pharm",
    img: "./programs/bphram.png",
    course: "Pharmacy",
    link: "#",
  },
  {
    text: "BCA",
    img: "./programs/bca.png",
    course: "BCA",
    link: "#",
    link: "#",
  },
  {
    text: "BE/B.Tech",
    img: "./programs/be-btech.png",
    course: "Engineering",
    link: "#",
  },
  { text: "B.Sc", img: "./programs/bsc.png", course: "Science", link: "#" },
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
    <div className=" pb-8">
      {/* Programs Section */}
      <div className=" text-center  mt-8">
        <div className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
          Explore Programs
        </div>
        <div className="flex flex-wrap gap-4 justify-center mx-4">
          {Options.map((option, index) => (
            <div
              key={index}
              className="h-24 w-36 sm:h-28 sm:w-52 bg-gray-200 border border-black rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-slate-300 transition-all"
            >
              <img
                src={option.img}
                alt={option.text}
                className="h-12 sm:h-14 rounded-lg"
              />
              <span className="hover:underline text-gray-800 text-sm sm:text-base font-medium hover:text-orange-600 mt-2">
                {option.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

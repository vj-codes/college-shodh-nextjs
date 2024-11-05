"use client"
import React, { useState } from "react";
import MyModal from "../Modals/Modal";
import Link from "next/link";


const Options = [
  { text: "B. Arch", img: "./programs/barch.png", link: "#" },
  { text: "B. Pharm", img: "./programs/bphram.png", link: "#" },
  { text: "BCA", img: "./programs/bca.png", link: "#" },
  { text: "BE/B. Tech", img: "./programs/be-btech.png", link: "#" },
  { text: "B. Sc", img: "./programs/bsc.png", link: "#" },
];

const Programs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("BSc"); // Default to BSc

  const closeModal = (e) => {
    setShowModal(false);    
    if (e.name){
      redirectCourse(e.name);
    }    
    e.stopPropagation();
  }
  const openModal = (type) => {
    setShowModal(true);
    setSelectedType(type);    
  };

  const redirectCourse = (course) => {
    window.location.href = `/colleges?course=${course}`
  }


  return (
    <div className="text-center pb-8">
      <div>
        <p className="text-2xl font-system-ui p-4 mt-4 text-gray-800 bg-neutral-200">
          Discover Bachelor's Program in Science, Technology, Engineering and
          Mathematics
        </p>
      </div>

      <div className="text-left ml-32 mt-8">
        <p className="font-bold text-xl">Explore Programs</p>
      </div>

      <div className="mt-5 mb-5 flex flex-wrap justify-center gap-4">
        {Options.map((option, index) => (
          <Link href={option.link} key={index}>
            <button
              className="h-28 w-52 bg-gray-200 border border-black rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-slate-300 transition-all"
              onClick={ () => {

                if(option.text === "B. Sc" || option.text === "BE/B. Tech"){
                    openModal(option.text === "B. Sc" ? "BSc" : "BE/B. Tech")
                }
                else{
                  redirectCourse(option.text)
                }

              }}
            >
              <img
                src={option.img}
                alt={option.text}
                className="h-14 rounded-lg"
              />
              <span className="hover:underline text-gray-800 font-medium hover:text-orange-600 mt-2">
                {option.text}
              </span>
            </button>
          </Link>
        ))}
      </div>
      <hr />
      {showModal && <MyModal closeModal={closeModal} type={selectedType} />}
    </div>
  );
};

export default Programs;

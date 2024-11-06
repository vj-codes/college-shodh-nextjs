"use client"
import React from "react";
import Button from "@mui/material/Button";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function CollegeCard({ college }) {
  return (
    <div
      id="college-card"
      key={college._id}
      className="border-b lg:w-[70%] w-full border-gray-300 border rounded-lg p-2 pl-6 pr-6 mb-5 mr-32 ml-20 hover:shadow-2xl transition-shadow"
    >
      <h1 className="text-xl font-bold text-gray-900 text-left">
        {college.college_name}
      </h1>

      <div className="flex flex-wrap">
        <div className="w-1/2">
          <p
            className="text-sm text-gray-600 mb-2 text-left flex items-center
                    "
          >
            <IoLocationOutline className="text-orange-500 size-5 mr-1" />
            <i> {college.address} </i>
            {/* &nbsp;
                      {college.university} */}
          </p>

          <p className="text-sm text-gray-600 mb-1 text-left flex items-center">
            <FaRegBuilding className="text-orange-500 size-5 mr-2" />{" "}
            <b> Dept: {college.dept} </b>
          </p>
          <p className="text-sm text-gray-600 mb-1 text-left flex items-center">
            <PiStudentFill className="text-orange-500 size-5 mr-2" /> Student
            Intake: {college.intake}
          </p>
          <p className="text-sm text-gray-600 mb-1 text-left flex items-center">
            <FaPeopleGroup className="text-orange-500 size-5 mr-2" /> Faculty
            Count: {college.faculty}
          </p>

          <div className="text-sm text-gray-600 mb-1 text-left flex items-center ">
            <IoNewspaperOutline className="text-orange-500 mr-1" /> Admission
            Criteria:
            <p>{college.admission_criteria}</p>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-sm text-blue-400 font-bold mb-1 text-left">
            NIRF Rank: {college.nirf}
          </p>
          <p className="text-sm text-blue-400 font-bold mb-1 text-left">
            NBA: {college.nba}
          </p>
          <p className="text-sm text-blue-400 font-bold mb-1 text-left">
            NAAC: {college.naac}
          </p>
        </div>

        <hr className="w-full mb-2" />

        <div>
          <p className="text-sm text-gray-600 mb-1 text-left flex items-center">
            <FaPhoneAlt className="mr-2 text-orange-400 size-4" />{" "}
            {college.contact}
          </p>
          <p className="text-sm text-gray-600 mb-1 text-left flex items-center">
            <MdEmail className="mr-2 text-orange-400 size-5" /> {college.email}
          </p>
        </div>

        <div className="flex justify-end mt-2 ml-auto mb-1">
          <Link href={college.website} target="_blank" rel="noopener noreferrer">
            <Button variant="contained" className="text-blue-800">
              Know more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

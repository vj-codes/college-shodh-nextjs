"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import SearchIcon from "@mui/icons-material/Search";
import Ranking from "@/components/Colleges/Ranking";
import Pagination from "@/components/Colleges/Pagination";
import CollegeCard from "@/components/Colleges/CollegeCard";
import MyModal from "@/components/Modals/Modal";
import Link from "next/link";

const Options = [
  { text: "B. Arch", course: "Architecture", link: "#" },
  { text: "B. Pharm", course: "Pharmacy", link: "#" },
  { text: "BCA", course: "BCA", link: "#" },
  { text: "BE/B. Tech", course: "Engineering", link: "#" },
  { text: "B. Sc", course: "Science", link: "#" },
];

function Colleges() {

  // Get the query from the URL
  const query = new URLSearchParams(window.location.search);
  let courseparam = query.get("course") || "";
  const cityparam = query.get("city") || "";
  console.log(courseparam, cityparam);

  if (courseparam == "B. Arch") {
    courseparam = "Architecture";
  }
  if (courseparam == "B. Pharm") {
    courseparam = "Pharmacy";
  }

  const searchQuery = query.get("search") || "";

  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState(searchQuery);
  const [filterNaac, setFilterNaac] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState(cityparam);
  const [selectedCourse, setSelectedCourse] = useState(courseparam);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const collegesPerPage = 10;

  const fetchAllColleges = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:3000/api/colleges"
      );
      setColleges(response.data || []);
    } catch (error) {
      console.error("Error fetching all colleges:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch colleges with filters
  const fetchFilteredColleges = async () => {
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/api/colleges", {
        search,
        naac: filterNaac,
        state: selectedState,
        city: selectedCity,
        course: selectedCourse,
        page: currentPage,
        limit: collegesPerPage,
      });

      setColleges(response.data || []);
    } catch (error) {
      console.error("Error fetching filtered colleges:", error);
    } finally {
      setLoading(false);
    }
  };

  // Use effect to fetch data
  useEffect(() => {
    if (!search && !filterNaac && !selectedState && !selectedCity && !selectedCourse) {
      console.log("Fetching all colleges");
      fetchAllColleges();
    } else {
      console.log("Fetching filtered colleges");
      fetchFilteredColleges();
    }
  }, [search, filterNaac, selectedState, selectedCity, selectedCourse, currentPage]);



  const handleNaacFilter = (event) => {
    setFilterNaac(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    const sortedColleges = [...colleges].sort((a, b) => {
      if (event.target.value === "lowToHigh") {
        return a.nirf - b.nirf;
      } else if (event.target.value === "highToLow") {
        return b.nirf - a.nirf;
      }
      return 0;
    });
    setColleges(sortedColleges);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const handleCourseChange = (course) => {
    setSelectedCourse(course.name);
    setCurrentPage(1); // Reset to the first page when course changes
  };

  const filteredColleges = colleges.filter((college) => {
    const isStateMatch = selectedState
      ? college.address.toLowerCase().includes(selectedState.toLowerCase())
      : true;
    const isCityMatch = selectedCity
      ? college.address.toLowerCase().includes(selectedCity.toLowerCase())
      : true;
    const isCourseMatch = selectedCourse
      ? college.dept &&
      college.dept.toLowerCase().includes(selectedCourse.toLowerCase())
      : true;
    return (
      (search === "" ||
        college.college_name.toLowerCase().includes(search.toLowerCase())) &&
      (!filterNaac || college.naac === filterNaac) &&
      isStateMatch &&
      isCityMatch &&
      isCourseMatch
    );
  });

  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
  const displayedColleges = filteredColleges.slice(
    (currentPage - 1) * collegesPerPage,
    currentPage * collegesPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // modal
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("BSc"); // Default to BSc

  const closeModal = (course) => {
    setShowModal(false);
    if (course) {
      handleCourseChange(course);
    }
  };
  const openModal = (type) => {
    setShowModal(true);
    setSelectedType(type);
  };

  const override = {
    display: "block",
    margin: "100px auto 100px auto",
    borderWidth: "8px", // Adjust the border width to make the ring thicker
    // marginTop: "-300px",
  };

  const [openFilters, setOpenFilters] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-evenly mt-5">
        <div className="relative">
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => {
              // Add query to the URL
              window.history.pushState(
                "",
                "",
                `/colleges?search=${e.target.value}&city=${selectedCity}`
              );
              setSearch(e.target.value);
            }}
            placeholder="Search college"
            className="p-2 h-11 w-96 mb-5 border border-black-400 rounded-2xl focus:outline-none focus:border-blue-600 text-center pl-10"
          />
          <SearchIcon className="absolute left-3 top-3 text-gray-400" />
        </div>
        <p className="md:mt-3 text-blue-700 font-bold font-sans text-xl">
          Total Colleges Found: {filteredColleges.length}
        </p>
      </div>

      {/* buttons */}
      <div className="flex flex-col items-center">
        <div className="mt-5 mb-5 btn-container md:flex justify-center gap-x-8 grid grid-cols-3">
          {Options.map((option, index) => (
            <Link href={option.link} key={index}>
              <button
                className="h-12 w-32 bg-[#569df4] border border-black-100 rounded-md hover:drop-shadow-lg"
                onClick={() => {
                  if (option.text === "B. Sc" || option.text === "BE/B. Tech") {
                    openModal(option.text === "B. Sc" ? "BSc" : "BE/B. Tech");
                  } else {
                    handleCourseChange({ name: option.course });
                  }
                }}
              >
                <span className="hover:underline text-white font-medium">
                  {option.text}
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>

      <h1 className="font-bold text-gray-500 font-mono flex justify-center">
        Following Your Passion in {selectedCourse}
      </h1>

      <div className="flex w-full justify-between">
        {/*
      lg:w-1/2 w-full md:ml-4 lg:ml-32 mt-4 mb-4 hidden md:block
       */}
        <div
          className={
            `
        z-[1000] md:z-0 overflow-auto
        w-full md:static
        fixed top-0 bottom-0 left-0 right-0
        py-64 md:py-0
        bg-[rgba(0,0,0,0.5)] md:bg-transparent
        md:w-1/3
        md:ml-4 lg:ml-32
        md:my-4
        ` + (openFilters ? "block" : "hidden md:block")
          }
        >
          <Ranking
            filterNaac={filterNaac}
            handleNaacFilter={handleNaacFilter}
            sortOrder={sortOrder}
            handleSortChange={handleSortChange}
            onStateChange={handleStateChange}
            openFilters={openFilters}
            setOpenFilters={setOpenFilters}
          />
        </div>

        {/*  Filter modal for mobile view */}
        {/* {openFilters && (
          <div className="w-full fixed md:hidden top-0 bottom-0 left-0 right-0 py-64 bg-[rgba(0,0,0,0.5)] z-[1000] overflow-auto">
            <Ranking
              filterNaac={filterNaac}
              handleNaacFilter={handleNaacFilter}
              sortOrder={sortOrder}
              handleSortChange={handleSortChange}
              onStateChange={handleStateChange}
              openFilters={openFilters}
              setOpenFilters={setOpenFilters}
            />
          </div>
        )} */}

        <div className="w-full pl-10 flex flex-col mt-3 items-center">
          <button
            className="bg-blue-500 text-white p-2 rounded-md md:w-[70%] w-full mr-12 mb-4 hover:bg-blue-700 md:hidden"
            onClick={() => setOpenFilters(!openFilters)}
          >
            Filters
          </button>

          {loading ? (
            <div className="flex justify-center items-center h-full w-full">
              <HashLoader
                size={100}
                color={"orange"}
                loading={loading}
                cssOverride={override}
              />
            </div>
          ) : (
            displayedColleges.map((college) => (
              <CollegeCard key={college._id} college={college} />
            ))
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        {showModal && <MyModal closeModal={closeModal} type={selectedType} />}
      </div>
    </>
  );
}

export default Colleges;
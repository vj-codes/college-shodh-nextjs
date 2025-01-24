"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import SearchIcon from "@mui/icons-material/Search";
import Ranking from "@/components/Colleges/Ranking";
import Pagination from "@/components/Colleges/Pagination";
import CollegeCard from "@/components/Colleges/CollegeCard";
import MyModal from "@/components/Modals/Modal";
import useDebounce from "../hooks/useDebounce";
import { SearchContext } from "@/context/SearchContext";
import { CollegeContext } from "@/context/CollegContext";
import { ApiConfig } from "@/config/ApiConfig";


const Options = [
  { text: "B. Arch", course: "Architecture", link: "#" },
  { text: "B. Pharm", course: "Pharmacy", link: "#" },
  { text: "BCA", course: "BCA", link: "#" },
  { text: "BE/B. Tech", course: "Engineering", link: "#" },
  { text: "B. Sc", course: "Science", link: "#" },
];

function Colleges() {
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("BSc");
  const [colleges, setColleges] = useState([]);
  const [totalCollegeCount, setTotalCollegeCount] = useState(0)
  const [search, setSearch] = useState("");
  const [filterNaac, setFilterNaac] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [openFilters, setOpenFilters] = useState(false);

  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { selectedCity, setSelectedCity, selectedCourse, setSelectedCourse } = useContext(CollegeContext);

  // Debounced search term to optimize API calls
  const debouncedSearchTerm = useDebounce(search, 500);

  // Fetch all colleges
  const fetchAllColleges = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        ApiConfig.colleges
      );
      setColleges(response.data.colleges || []);
      setTotalPages(response.data.pagination.totalPages)
      // console.log(response)
    } catch (error) {
      console.error("Error fetching all colleges:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch filtered colleges based on selected filters
  const fetchFilteredColleges = async () => {
    setLoading(true);

    try {
      const response = await axios.post(ApiConfig.colleges, {
        search: search,
        course: selectedCourse,
        naac: filterNaac,
        state: selectedState,
        city: selectedCity,
        page: currentPage,
        limit: 10,
      });
      setColleges(response.data.colleges || []);
      setTotalPages(response.data.pagination.totalPages)
      setTotalCollegeCount(response.data.pagination.total)
    } catch (error) {
      console.error("Error fetching filtered colleges:", error);
    } finally {
      setLoading(false);
    }
  };

  // Use effect to fetch data
  useEffect(() => {
    fetchFilteredColleges();
  }, [debouncedSearchTerm, filterNaac, selectedState, selectedCity, selectedCourse, currentPage]);

  // useEffect(() => {
  //   fetchAllColleges();
  // }, [])

  useEffect(() => {
    setSearch(searchTerm)
  }, [searchTerm])

  // Handle changes in filters and sorting
  const handleNaacFilter = (event) => {
    setFilterNaac(event.target.value);
    setCurrentPage(1);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setCurrentPage(1);
  };

  const handleCourseChange = (course) => {
    console.log(selectedCourse, " ", course)
    if (selectedCourse === course.name) {
      setSelectedCourse("");
      console.log("heee")
    } else {
      setSelectedCourse(course.name);
      setCurrentPage(1);
      console.log("seee")
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchFilteredColleges();
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

  const handleOnSearch = (e) => {
    setSearch(e.target.value)
  }


  return (
    <>
      <div className="flex flex-col  items-center justify-center mt-5">
        <div className="flex justify-center items-center w-full px-4">
          <input
            type="text"
            id="search"
            value={search}
            onChange={handleOnSearch}
            placeholder="Search college"
            className="relative p-2 max-w-2xl w-full border border-black-400 rounded-lg focus:outline-none focus:border-blue-600 text-center "
          />
          <SearchIcon className=" -ml-8 z-10  text-gray-400" />
        </div>
        <p className="md:mt-3 text-blue-600 font-bold font-sans text-xl">
          Total Colleges Found:  {totalCollegeCount} 
        </p>
      </div>

      {/* buttons */}
      <div className="flex flex-col items-center">
      <div className="mt-5 mb-5 mx-auto btn-container grid grid-cols-3 gap-2 px-2 md:flex md:justify-center md:gap-x-4 md:gap-y-2">
  {Options.map((option, index) => (
    <button
      key={index}
      className={`h-12 w-32 border border-black-100 rounded-md hover:drop-shadow-lg ${
        selectedCourse === option.course ? 'bg-orange-600' : 'bg-[#1976D2]'
      }`}
      onClick={() => {
        if (option.text === "B. Sc" || option.text === "BE/B. Tech") {
          openModal(option.text === "B. Sc" ? "BSc" : "BE/B. Tech");
        } else {
          handleCourseChange({ name: option.course });
        }
      }}
    >
      <p className="flex justify-center items-center gap-x-2 hover:underline text-white font-medium">
        {option.text}
      </p>
    </button>
  ))}
</div>

      </div>

      <h1 className="text-xl font-bold text-black flex justify-center font-mono">
        {selectedCourse ? (
          <> 
          <p className="w-full text-center text-xl px-2">
            Follow Your Passion in:
            <span className="text-orange-600 underline">{selectedCourse}</span>
          </p>
          </>
        ) : (
          "Follow Your Passion"
        )}
      </h1>

      <div className="flex w-full justify-between gap-4">
  {/* Filter Section */}
  <div
  className={
    `
    z-[1000] md:z-0 overflow-auto
    w-full md:w-1/4
    md:ml-4 lg:ml-32
    md:my-4
    fixed md:relative
    bg-[rgba(0,0,0,0.5)] md:bg-transparent
    md:h-screen
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

  {/* College Cards Section */}
  <div className="w-full md:w-3/4 flex flex-col mt-3">
    <button
      className="bg-blue-500 text-white p-2 rounded-md md:w-[70%] w-[95%] mx-auto mb-4 hover:bg-blue-700 md:hidden"
      onClick={() => setOpenFilters(!openFilters)}
    >
      Filters
    </button>

    {loading ? (
      <div className="flex justify-center items-start h-full w-full pt-20">
        <HashLoader
          size={100}
          color={"orange"}
          loading={loading}
          cssOverride={override}
        />
      </div>
    ) : (
      !loading &&
      Array.isArray(colleges) &&
      colleges.length > 0 ? (
        colleges.map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))
      ) : (
        <div className="flex justify-center items-start w-full pt-20">
          <p className="text-center text-gray-500">No colleges found</p>
        </div>
      )
    )}
    {totalPages > 0 && (
      <div className="w-full flex justify-center items-center p-8 pr-8 md:pr-32">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    )}
  </div>
</div>

    </>
  );
}

export default Colleges;

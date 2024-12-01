// "use client"
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";
import { naacOptions, statesWithCitiesIndia, statesWithCitiesIndiaArray } from "@/data/collegeData";

// Ranking component is used to display and manage filters for colleges based on various criteria.
function Ranking({
  filterNaac,
  handleNaacFilter,
  sortOrder,
  handleSortChange,
  onStateChange,
  onNbaFilter,
  openFilters,
  setOpenFilters

}) {
  // State variables for managing user selections.
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [nirfRanking, setNirfRanking] = useState([0, 200]);
  const [nbaAccreditation, setNbaAccreditation] = useState("");

   // Handles changes in the state filter.
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    onStateChange(event.target.value);
  };

  // Handles changes in the NIRF ranking slider.
  const handleSliderChange = (event, newValue) => {
    setNirfRanking(newValue);
    handleSortChange(newValue);
  };
  
  // Handles changes in the city filter.
  const handleCityChange = (event) => {
    const city = event.target.value;
    const state = getStateByCity(city);
    setSelectedCity(city);
    onStateChange(city);
    if (state) {
      setSelectedState(state);
    }
  };
  
  // Handles changes in the NBA accreditation filter.
  const handleNbaChange = (event) => {
    setNbaAccreditation(event.target.value);
    onNbaFilter(event.target.value);
  };

  // Clears all selected filters.
  const handleClearFilter = () => {
    setSelectedState("");
    setSelectedCity("");
    setNirfRanking([0, 200]);
    setNbaAccreditation("");
    handleNaacFilter({ target: { value: "" } });
    onStateChange("");
    onNbaFilter("");
  }

  const nbaOptions = ["Accredited"];

  // Helper function to retrieve the state corresponding to a city.
  function getStateByCity(city) {
    for (const [state, cities] of Object.entries(statesWithCitiesIndia)) {
      if (cities.includes(city)) {
        return state;
      }
    }
    return null; // If city is not found in any state
  }

  const formControlLabelStyle = {
    display: "flex",
    justifyContent: "flex-start",
  };

  return (
    <Grid container direction="column"
      className="outer-box bg-white border border-[rgb(213,211,211)] text-[rgb(17,17,27)] w-[200px] p-[10px] rounded-[10px]">
      <Grid item className="Inner-Topic flex justify-between">
        <h5 className="Apply-Filter  font-bold mb-1 ">Apply Filter</h5>
        {openFilters !== null &&
          <button
            className="md:hidden font-bold bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              if (openFilters) {
                setOpenFilters(!openFilters)
              }
            }}
          >
            X
          </button>}
      </Grid>

       {/* State filter section */}
      <Grid item className="Inner-Topic">
        <hr />
        <h4 className="font-bold mb-1 sub-topic text-left">State</h4>
        <hr />
      </Grid>
      <div className="scrollable-container max-h-[300px] overflow-y-auto">
        {statesWithCitiesIndiaArray.map((states) => (
          <Grid className="" item key={states.state}>
            <FormControlLabel className="Check-Box p-0 m-0 h-[25px]"
              control={
                <Checkbox
                  checked={selectedState === states.state}
                  onChange={handleStateChange}
                  value={states.state}
                />
              }
              label={states.state}
              style={formControlLabelStyle}
            />
          </Grid>
        ))}
      </div>

      {/* City filter section */}
      <Grid item className="Inner-Topic">
        <hr />
        <h4 className="font-bold mb-2 sub-topic">Select City</h4>
        <hr />
      </Grid>
      <div className="scrollable-container max-h-[300px] overflow-y-auto">
        {statesWithCitiesIndiaArray.map((state, index) => (
          <Grid item key={index}>
            {state.cities.map((city) => (


              <FormControlLabel className="Check-Box p-0 m-0 h-[25px]"
                control={
                  <Checkbox

                    checked={selectedCity === city}
                    onChange={handleCityChange}
                    value={city}
                  />
                }
                label={city}
                style={formControlLabelStyle}
              />
            ))
            }
          </Grid>
        ))}
      </div>

      {/* NAAC rating filter section */}
      <Grid>
        <hr />
        <h2 className="font-bold mb-2 sub-topic">NAAC Rating</h2>
        <hr />
      </Grid>

      <div className="scrollable-container max-h-[300px] overflow-y-auto">
        {naacOptions.map((option) => (
          <Grid item key={option}>
            <FormControlLabel className="Check-Box p-0 m-0 h-[25px]"

              control={
                <Checkbox
                  checked={filterNaac === option}
                  onChange={handleNaacFilter}
                  value={option}
                />
              }
              label={option}
              style={formControlLabelStyle}
            />
          </Grid>
        ))}
      </div>

      {/* NIRF ranking filter section */}
      <Grid item className="Inner-Topic">
        <hr />
        <h2 className="font-bold mb-2 sub-topic">NIRF Ranking</h2>
        <hr />
      </Grid>
      <Grid item>
        <Slider
          value={nirfRanking}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={0}
          max={200}
          step={1}
        />
      </Grid>

      {/* NBA accreditation filter section */}
      <Grid item className="Inner-Topic">
        <hr />
        <h2 className="font-bold mb-2 sub-topic">NBA Accreditation</h2>
        <hr />
      </Grid>
      <div className="scrollable-container max-h-[300px] overflow-y-auto">
        {nbaOptions.map((option) => (
          <Grid item key={option}>
            <FormControlLabel className="Check-Box p-0"

              control={
                <Checkbox
                  checked={nbaAccreditation === option}
                  onChange={handleNbaChange}
                  value={option}
                />
              }
              label={option}
              style={formControlLabelStyle}
            />
          </Grid>
        ))}
      </div>

      {/* Clear Filters button */}
      <button
        className="clear-filter-btn font-bold mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={handleClearFilter}
      >Clear Filters</button>
    </Grid>
  );
}

export default Ranking;



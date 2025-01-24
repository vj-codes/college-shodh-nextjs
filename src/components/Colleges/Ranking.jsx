import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { useState, useEffect } from "react";
import { naacOptions, statesWithCitiesIndia, statesWithCitiesIndiaArray } from "@/data/collegeData";

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

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [nirfRanking, setNirfRanking] = useState([0, 200]);
  const [nbaAccreditation, setNbaAccreditation] = useState("");

  const handleStateChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedState === selectedValue) {
      setSelectedState("");
      onStateChange("");
      setSelectedCity("");
    } else {
      setSelectedState(selectedValue);
      onStateChange(selectedValue);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setNirfRanking(newValue);
    handleSortChange(newValue);
  };

  const handleCityChange = (event) => {
    const city = event.target.value;

    if (selectedCity === city) {
      setSelectedCity("");
      onStateChange(""); 
    } else {
      
      const state = getStateByCity(city);
      setSelectedCity(city);
      onStateChange(city);
      if (state) {
        setSelectedState(state);
      }
    }
  };


  const handleClearFilter = () => {
    setSelectedState("");
    setSelectedCity("");
    setNirfRanking([0, 200]);
    setNbaAccreditation("");
    handleNaacFilter({ target: { value: "" } });
    onStateChange("");
    onNbaFilter("");
  };

  const nbaOptions = ["Accredited"];

  function getStateByCity(city) {
    for (const [state, cities] of Object.entries(statesWithCitiesIndia)) {
      if (cities.includes(city)) {
        return state;
      }
    }
    return null; 
  }

  const formControlLabelStyle = {
    display: "flex",
    justifyContent: "flex-start",
  };

  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); 
    const handleResize = () => {
      if (mediaQuery.matches) {
        setOpenFilters(false); 
      }
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [setOpenFilters]);

  return (
    <>
      {/* Desktop view filter */}
      <Grid
        container
        direction="column"
        className="outer-box  bg-white border border-[rgb(213,211,211)] text-[rgb(17,17,27)] w-[240px] p-[20px] rounded-[10px] hidden md:flex"
      >
        <Grid item className="Inner-Topic flex justify-between ">
          <h5 className="Apply-Filter font-bold mb-1">Apply Filter</h5>
        </Grid>

        <Grid item className="Inner-Topic">
          <hr />
          <h4 className="font-bold mb-1 sub-topic text-left">State</h4>
          <hr />
        </Grid>

        <div className="scrollable-container max-h-[250px] overflow-y-auto">
          {statesWithCitiesIndiaArray.map((states) => (
            <Grid item key={states.state}>
              <FormControlLabel
                className="Check-Box p-0 m-0 h-[25px]"
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

        <Grid item className="Inner-Topic">
          <hr />
          <h4 className="font-bold mb-2 sub-topic">Select City</h4>
          <hr />
        </Grid>

        <div className="scrollable-container max-h-[300px] overflow-y-auto">
          {selectedState ? (
            statesWithCitiesIndia[selectedState]?.map((city) => (
              <Grid item key={city}>
                <FormControlLabel
                  className="Check-Box p-0 m-0 h-[25px]"
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
              </Grid>
            ))
          ) : (
            <p className="text-gray-500 italic">Please select a state to see its cities.</p>
          )}
        </div>

        <Grid>
          <hr />
          <h2 className="font-bold mb-2 sub-topic">NAAC Rating</h2>
          <hr />
        </Grid>

        <div className="scrollable-container max-h-[300px] overflow-y-auto">
          {naacOptions.map((option) => (
            <Grid item key={option}>
              <FormControlLabel
                className="Check-Box p-0 m-0 h-[25px]"
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
       
        <button
          className="clear-filter-btn font-bold mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleClearFilter}
        >
          Clear Filters
        </button>
      </Grid>

      {/* Mobile view pop-up */}
      {openFilters && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setOpenFilters(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg relative w-full sm:max-w-md md:max-w-lg"
            onClick={(e) => e.stopPropagation()}
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Grid container direction="column">
              <Grid item className="Inner-Topic flex justify-between">
                <h5 className="Apply-Filter font-bold mb-1">Apply Filter</h5>
                <button
                  className="font-bold bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => setOpenFilters(false)}
                >
                  X
                </button>
              </Grid>

              <Grid item className="Inner-Topic">
                <hr />
                <h4 className="font-bold mb-1 sub-topic text-left">State</h4>
                <hr />
              </Grid>
              <div className="scrollable-container max-h-[300px] overflow-y-auto">
                {statesWithCitiesIndiaArray.map((states) => (
                  <Grid item key={states.state}>
                    <FormControlLabel
                      className="Check-Box p-0 m-0 h-[25px]"
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

              <Grid item className="Inner-Topic">
                <hr />
                <h4 className="font-bold mb-2 sub-topic">Select City</h4>
                <hr />
              </Grid>
              <div className="scrollable-container max-h-[300px] overflow-y-auto">
                {selectedState ? (
                  statesWithCitiesIndia[selectedState]?.map((city) => (
                    <Grid item key={city}>
                      <FormControlLabel
                        className="Check-Box p-0 m-0 h-[25px]"
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
                    </Grid>
                  ))
                ) : (
                  <p className="text-gray-500 italic">Please select a state to see its cities.</p>
                )}
              </div>

              <Grid>
                <hr />
                <h2 className="font-bold mb-2 sub-topic">NAAC Rating</h2>
                <hr />
              </Grid>

              <div className="scrollable-container max-h-[300px] overflow-y-auto">
                {naacOptions.map((option) => (
                  <Grid item key={option}>
                    <FormControlLabel
                      className="Check-Box p-0 m-0 h-[25px]"
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

              <button
                className="clear-filter-btn font-bold mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={handleClearFilter}
              >
                Clear Filters
              </button>
            </Grid>
          </div>
        </div>
      )}
    </>
  );
}

export default Ranking;

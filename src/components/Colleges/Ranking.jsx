"use client"
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
// import "../../styles/Colleges/Ranking.css"; 

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
    setSelectedState(event.target.value);
    onStateChange(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setNirfRanking(newValue);
    handleSortChange(newValue);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    onStateChange(event.target.value);
  };

  const handleNbaChange = (event) => {
    setNbaAccreditation(event.target.value);
    onNbaFilter(event.target.value);
  };

  const naacOptions = [
    "NAAC A",
    "NAAC A+",
    "NAAC A++",
    "NAAC B",
    "NAAC B+",
    "NAAC B++",
    "NAAC C",
    "NAAC D",
  ];
  const stateOptions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Goa",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  const cityOptions = [
    "Kurukshetra",
    "Mumbai",
    "Chennai",
    "Delhi",
    "Hyderabad",
    "Bengaluru",
    "Jaipur",
    "Ahemdabad",
    "Kolkata",
    "Indore",
  ];

  const nbaOptions = ["Accredited"];

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
          if(openFilters){
            setOpenFilters(!openFilters)
          }
        }}
        >
          X
        </button>}
      </Grid>

      <Grid item className="Inner-Topic">
        <hr />
        <h4 className="font-bold mb-2 sub-topic">Select City</h4>
        <hr/>
      </Grid>
      <div className="scrollable-container max-h-[300px] overflow-y-auto">
        {cityOptions.map((city) => (
          <Grid item key={city}>
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
          </Grid>
        ))}
      </div>

      <Grid item className="Inner-Topic">
        <hr />
        <h4 className="font-bold mb-1 sub-topic text-left">Top State</h4>
        <hr/>
      </Grid>
      <div className="scrollable-container max-h-[300px] overflow-y-auto">
        {stateOptions.map((state) => (
          <Grid className="" item key={state}>
            <FormControlLabel className="Check-Box p-0 m-0 h-[25px]"
              control={
                <Checkbox
                  checked={selectedState === state}
                  onChange={handleStateChange}
                  value={state}
                />
              }
              label={state}
              style={formControlLabelStyle}
            />
          </Grid>
        ))}
      </div>

      <Grid>
        <hr />
        <h2 className="font-bold mb-2 sub-topic">NAAC Rating</h2>
        <hr/>
      </Grid>
      <div className="scrollable-container max-h-[300px] overflow-y-auto">
        {naacOptions.map((option) => (
          <Grid item key={option}>
            <FormControlLabel className="Check-Box p-0 m-0 h-[25px]"

              control={
                <Checkbox
                  checked={filterNaac === option}
                  onChange={ handleNaacFilter}
                  value={option}
                />
              }
              label={option}
              style={formControlLabelStyle}
            />
          </Grid>
        ))}
      </div>

      <Grid item className="Inner-Topic">
        <hr />
        <h2 className="font-bold mb-2 sub-topic">NIRF Ranking</h2>
        <hr/>
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

      <Grid item className="Inner-Topic">
        <hr />
        <h2 className="font-bold mb-2 sub-topic">NBA Accreditation</h2>
        <hr/>
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
      <button
        className="clear-filter-btn font-bold mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => {
          setSelectedState("");
          setSelectedCity("");
          setNirfRanking([0, 200]);
          setNbaAccreditation("");
          handleNaacFilter({target:{value:""}});
          onStateChange("");
          onNbaFilter("");
        }}
      >Clear Filters</button>
    </Grid>
  );
}

export default Ranking;


// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Slider from "@mui/material/Slider";
// import "./Ranking.css"; // Import the CSS file

// function Ranking({
//   filterNaac,
//   handleNaacFilter,
//   sortOrder,
//   handleSortChange,
//   onStateChange,
//   onNbaFilter,
// }) {
//   const [selectedStates, setSelectedStates] = useState([]);
//   const [selectedCities, setSelectedCities] = useState([]);
//   const [nirfRanking, setNirfRanking] = useState([0, 200]);
//   const [nbaAccreditations, setNbaAccreditations] = useState([]);

//   const handleStateChange = (event) => {
//     const value = event.target.value;
//     setSelectedStates((prevSelected) =>
//       prevSelected.includes(value)
//         ? prevSelected.filter((state) => state !== value)
//         : [...prevSelected, value]
//     );
//     onStateChange(value);
//   };

//   const handleCityChange = (event) => {
//     const value = event.target.value;
//     setSelectedCities((prevSelected) =>
//       prevSelected.includes(value)
//         ? prevSelected.filter((city) => city !== value)
//         : [...prevSelected, value]
//     );
//     onStateChange(value);
//   };

//   const handleNbaChange = (event) => {
//     const value = event.target.value;
//     setNbaAccreditations((prevSelected) =>
//       prevSelected.includes(value)
//         ? prevSelected.filter((nba) => nba !== value)
//         : [...prevSelected, value]
//     );
//     onNbaFilter(value);
//   };

//   const handleSliderChange = (event, newValue) => {
//     setNirfRanking(newValue);
//     handleSortChange(newValue);
//   };

//   const naacOptions = [
//     "NAAC A",
//     "NAAC A+",
//     "NAAC A++",
//     "NAAC B",
//     "NAAC B+",
//     "NAAC B++",
//     "NAAC C",
//     "NAAC D",
//   ];
//   const stateOptions = [
//     "Andhra Pradesh",
//     "Arunachal Pradesh",
//     "Assam",
//     "Bihar",
//     "Chhattisgarh",
//     "Gujarat",
//     "Haryana",
//     "Himachal Pradesh",
//     "Jammu and Kashmir",
//     "Goa",
//     "Jharkhand",
//     "Karnataka",
//     "Kerala",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Sikkim",
//     "Tamil Nadu",
//     "Telangana",
//     "Tripura",
//     "Uttarakhand",
//     "Uttar Pradesh",
//     "West Bengal",
//     "Andaman and Nicobar Islands",
//     "Chandigarh",
//     "Dadra and Nagar Haveli",
//     "Daman and Diu",
//     "Delhi",
//     "Lakshadweep",
//     "Puducherry",
//   ];
//   const cityOptions = [
//     "Kurukshetra",
//     "Mumbai",
//     "Chennai",
//     "Delhi",
//     "Hyderabad",
//     "Bengaluru",
//     "Jaipur",
//     "Ahemdabad",
//     "Kolkata",
//     "Indore",
//   ];

//   const nbaOptions = ["Accredited"];

//   const formControlLabelStyle = {
//     display: "flex",
//     justifyContent: "flex-start",
//   };

//   return (
//     <Grid container direction="column" className="outer-box">
//       <Grid item className="Inner-Topic">
//         <h5 className="Apply-Filter font-bold mb-1">Apply Filter</h5>
//       </Grid>

//       <Grid item className="Inner-Topic">
//         <hr />
//         <h4 className="font-bold mb-2 sub-topic">Select City</h4>
//         <hr />
//       </Grid>
//       <div className="scrollable-container">
//         {cityOptions.map((city) => (
//           <Grid item key={city}>
//             <FormControlLabel
//               className="Check-Box p-0"
//               control={
//                 <Checkbox
//                   checked={selectedCities.includes(city)}
//                   onChange={handleCityChange}
//                   value={city}
//                 />
//               }
//               label={city}
//               style={formControlLabelStyle}
//             />
//           </Grid>
//         ))}
//       </div>

//       <Grid item className="Inner-Topic">
//         <hr />
//         <h4 className="font-bold mb-1 sub-topic">Top State</h4>
//         <hr />
//       </Grid>
//       <div className="scrollable-container">
//         {stateOptions.map((state) => (
//           <Grid className="mb-0" item key={state}>
//             <FormControlLabel
//               className="Check-Box p-0"
//               control={
//                 <Checkbox
//                   checked={selectedStates.includes(state)}
//                   onChange={handleStateChange}
//                   value={state}
//                 />
//               }
//               label={state}
//               style={formControlLabelStyle}
//             />
//           </Grid>
//         ))}
//       </div>

//       <Grid>
//         <hr />
//         <h2 className="font-bold mb-2 sub-topic">NAAC Rating</h2>
//         <hr />
//       </Grid>
//       <div className="scrollable-container">
//         {naacOptions.map((option) => (
//           <Grid item key={option}>
//             <FormControlLabel
//               className="Check-Box p-0"
//               control={
//                 <Checkbox
//                   checked={filterNaac === option}
//                   onChange={handleNaacFilter}
//                   value={option}
//                 />
//               }
//               label={option}
//               style={formControlLabelStyle}
//             />
//           </Grid>
//         ))}
//       </div>

//       <Grid item className="Inner-Topic">
//         <hr />
//         <h2 className="font-bold mb-2 sub-topic">NIRF Ranking</h2>
//         <hr />
//       </Grid>
//       <Grid item>
//         <Slider
//           value={nirfRanking}
//           onChange={handleSliderChange}
//           valueLabelDisplay="auto"
//           min={0}
//           max={200}
//           step={1}
//         />
//       </Grid>

//       <Grid item className="Inner-Topic">
//         <hr />
//         <h2 className="font-bold mb-2 sub-topic">NBA Accreditation</h2>
//         <hr />
//       </Grid>
//       <div className="scrollable-container">
//         {nbaOptions.map((option) => (
//           <Grid item key={option}>
//             <FormControlLabel
//               className="Check-Box p-0"
//               control={
//                 <Checkbox
//                   checked={nbaAccreditations.includes(option)}
//                   onChange={handleNbaChange}
//                   value={option}
//                 />
//               }
//               label={option}
//               style={formControlLabelStyle}
//             />
//           </Grid>
//         ))}
//       </div>
//     </Grid>
//   );
// }

// export default Ranking;

"use client"
import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function State({ onStateChange }) {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    onStateChange(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    onStateChange(event.target.value);
  };

  return (
    <div className=" w-auto border border-black-800 rounded-lg p-10 ml-20 mr-16 mb-5">
      <div>
        <h1 className="font-semibold mb-2">Filter</h1>
        <hr />
        {/* State Filter */}
        <Select
          value={selectedState}
          onChange={handleStateChange}
          displayEmpty
          inputProps={{ 'aria-label': 'State Filter' }}
          className='mt-4'
        >
          <MenuItem value="" disabled>
            Select State
          </MenuItem>
          <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
          <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
          <MenuItem value="Assam">Assam</MenuItem>
          <MenuItem value="Bihar">Bihar</MenuItem>
          <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
          <MenuItem value="Gujarat">Gujarat</MenuItem>
          <MenuItem value="Haryana">Haryana</MenuItem>
          <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
          <MenuItem value="Jammu and Kashmir">Jammu & Kashmir</MenuItem>
          <MenuItem value="Goa">Goa</MenuItem>
          <MenuItem value="Jharkhand">Jharkhand</MenuItem>
          <MenuItem value="Karnataka">Karnataka</MenuItem>
          <MenuItem value="Kerala">Kerala</MenuItem>
          <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
          <MenuItem value="Maharashtra">Maharashtra</MenuItem>
          <MenuItem value="Manipur">Manipur</MenuItem>
          <MenuItem value="Meghalaya">Meghalaya</MenuItem>
          <MenuItem value="Mizoram">Mizoram</MenuItem>
          <MenuItem value="Nagaland">Nagaland</MenuItem>
          <MenuItem value="Odisha">Odisha</MenuItem>
          <MenuItem value="Punjab">Punjab</MenuItem>
          <MenuItem value="Rajasthan">Rajasthan</MenuItem>
          <MenuItem value="Sikkim">Sikkim</MenuItem>
          <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
          <MenuItem value="Telangana">Telangana</MenuItem>
          <MenuItem value="Tripura">Tripura</MenuItem>
          <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
          <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
          <MenuItem value="West Bengal">West Bengal</MenuItem>
          {/* <MenuItem value="Andaman & Nicobar">Andaman & Nicobar</MenuItem> */}
          <MenuItem value="Chandigarh">Chandigarh</MenuItem>
          <MenuItem value="Dadra and Nagar Haveli">Dadra & Nagar Haveli</MenuItem>
          <MenuItem value="Daman and Diu">Daman and Diu</MenuItem>
          <MenuItem value="Delhi">Delhi</MenuItem>
          <MenuItem value="Lakshadweep">Lakshadweep</MenuItem>
          <MenuItem value="Puducherry">Puducherry</MenuItem>
        </Select>
      </div>

      <div className='mb-4 mt-4'>
        <Select
          value={selectedCity}
          onChange={handleCityChange}
          displayEmpty
          inputProps={{ 'aria-label': 'State Filter' }}
        >
          <MenuItem value="" disabled>
            Cities
          </MenuItem>
          <MenuItem value="kr">Kurukshetra</MenuItem>
          <MenuItem value="Mu">Mumbai</MenuItem>
          <MenuItem value="Ch">Chennai</MenuItem>
          <MenuItem value="Dl">Delhi</MenuItem>
          <MenuItem value="Hy">Hyderabad</MenuItem>
          <MenuItem value="GA">Bengaluru</MenuItem>
          <MenuItem value="HR">Jaipur</MenuItem>
          <MenuItem value="HP">Ahemdabad</MenuItem>
          <MenuItem value="JK">Kolkata</MenuItem>
          <MenuItem value="GA">Indore</MenuItem>
        </Select>
      </div>



      {/* <hr /> */}
      <hr />
      <p className="p-2">Affliation</p>
      <div className="w-44">
        <select>
          <option value="Pune">2 Year</option>
          <option value="Mumbai">3 year</option>
          <option value="Kolkata">4 Year</option>
          <option value="Chennai">5 Year</option>
        </select>
      </div>

      <hr />
      <hr />
      <p className="p-2">Fees Per Year</p>
      <div className="w-44">
        <select>
          <option value="Pune">0-25k</option>
          <option value="Mumbai">25-50k</option>
          <option value="Kolkata">50-75k</option>
          <option value="Chennai">75k-1L</option>
          <option value="Chennai">1-2L</option>
          <option value="Chennai">Above 2l</option>
        </select>
      </div>
      <hr />
      <hr />
      <p className="p-2">Duration</p>
      <div className="w-44">
        <select>
          <option value="Pune">2 Year</option>
          <option value="Mumbai">3 year</option>
          <option value="Kolkata">4 Year</option>
          <option value="Chennai">5 Year</option>
        </select>
      </div>
      <hr />

    </div>

  );
}

export default State;


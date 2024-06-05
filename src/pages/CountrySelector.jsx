import React, { useState } from "react";
import countries from "../utils/countries";
function CountrySelector() {
   const [activeCountry, setActiveCountry] = useState(countries[0]);
   function handleSelectCountry(e) {
      console.log(e.target.value);
      const activCountryValue = e.target.value;
      // set Active Country here
      setActiveCountry((oldActiveCountry) => {
         return countries.find(country => country.value === activCountryValue);
      });
   }
   return (
      <div>
         <h1>Country Selector</h1>
         <hr />
         <label htmlFor="country">Country:</label>
         <select
            value={activeCountry.value}
            name="country"
            onChange={handleSelectCountry}>
            {countries.map((country) => {
               return <option value={country.value}>{country.name} </option>;
            })}
         </select>

         <label htmlFor="city">City:</label>
         <select
            name="city"
            onChange={null}>
            {activeCountry.cites.map((city) => {
               return <option value={city}>{city} </option>;
            })}
         </select>



      </div>
   );
}

export default CountrySelector;
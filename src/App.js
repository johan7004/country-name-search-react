import "./App.css";
import { useState } from "react";
import CountryCards from "./components/country-cards/country-cards";
import SearchBox from "./components/search-box/search-box";

const countries = require("./data/data.json");

function App() {
  const [filteredCountry, setFilteredCountry] = useState(null);

  function handleSearch(value) {
    const inputText = value.split(" ");

    const capitalizedWords = inputText.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );

    const capitalizedText = capitalizedWords.join(" ");

    const filterCountry = countries.filter((countryValue) => {
      // filter and set state of returned array
      return (
        countryValue.country_name.includes(capitalizedText) ||
        countryValue.place_name.includes(capitalizedText)
      );
    });
    setFilteredCountry(filterCountry);
  }
  return (
    <div className="App">
      <h1>Search Country</h1>
      <SearchBox
        onSearch={handleSearch}
        placeHolder="Enter valid Country or Place Name"
      ></SearchBox>

      <div className="result__container">
        {!filteredCountry || !filteredCountry.length
          ? countries.map((data, i) => {
              return (
                <CountryCards
                  key={i}
                  countryName={data.country_name}
                  placeName={data.place_name}
                  MonthName={data.month_name}
                  minTemp={data.min_temperature}
                  maxTemp={data.max_temperature}
                  chanceOfRain={data.chance_of_rain}
                  precipitation={data.precipitation}
                  rainyDays={data.rainy_days}
                  sunshineHours={data.sunshine_hours}
                ></CountryCards>
              );
            })
          : filteredCountry.map((data, i) => {
              return (
                <CountryCards
                  key={i}
                  countryName={data.country_name}
                  placeName={data.place_name}
                  MonthName={data.month_name}
                  minTemp={data.min_temperature}
                  maxTemp={data.max_temperature}
                  chanceOfRain={data.chance_of_rain}
                  precipitation={data.precipitation}
                  rainyDays={data.rainy_days}
                  sunshineHours={data.sunshine_hours}
                ></CountryCards>
              );
            })}
      </div>
    </div>
  );
}

export default App;

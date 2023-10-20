import React from "react";
import "./country-cards.css";

function CountryCards({
  countryName,
  placeName,
  MonthName,
  minTemp,
  maxTemp,
  chanceOfRain,
  precipitation,
  rainyDays,
  sunshineHours,
}) {
  return (
    <div className="cards__container">
      <ul className="card-details__container">
        <li className="card-details__list">Country name: {countryName}</li>
        <li className="card-details__list">Place name: "Sukhumi",</li>
        <li className="card-details__list">Month name: "december"</li>
        <li className="card-details__list">Min temperature": "4"</li>
        <li className="card-details__list">Max temperature: "12"</li>
        <li className="card-details__list">Chance of rain: "53%"</li>
        <li className="card-details__list">Precipitation": "109mm"</li>
        <li className="card-details__list">Rainy Days": "16"</li>
        <li className="card-details__list">Sunshine Hours": ""</li>
      </ul>
    </div>
  );
}

export default CountryCards;

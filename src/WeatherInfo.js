import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>{" "}
      <div>
        <FormattedDate date={props.data.date} />
      </div>
      <div className="text-capitalize">{props.data.description}</div>
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units"> °C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} meter/sec</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

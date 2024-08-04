import React from "react";

export default function WeatherForecastDay(props) {
  function formatForecastDay() {
    let forecastDate = new Date(props.data.time * 1000);
    let forecastDay = forecastDate.getDay();
    let forcastDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let forcastWeekDay = forcastDays[forecastDay];

    return forcastWeekDay;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{formatForecastDay()}</div>
      <div>
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}

import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Wexford" />
        <footer>
          This project was created by Nataliia Opanasiuk and is{" "}
          <a
            href="https://github.com/NataliiaOpanasiuk/react-weather-app3"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href=" https://react-app-on.netlify.app/ "
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

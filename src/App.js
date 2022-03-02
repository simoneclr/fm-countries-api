import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import CountriesDashboard from "./components/CountriesDashboard";
import CountryPage from "./components/CountryPage";

const THEMES = {
  light: "light-theme",
  dark: "dark-theme"
}

function App() {

  // State variable to controle the theme switcher
  const [theme, setTheme] = useState(THEMES.light)

  const handleThemeChange = (e) => {
    // If the toggle is ckecked, enable dark theme; otherwise, enable light
    let updatedTheme = e.target.checked ? THEMES.dark : THEMES.light

    setTheme(updatedTheme)
  }

  return (
    <div className={"app " + theme}>
      <header className="app-header">
        <h1 className="app-title">Where in the World?</h1>

        <label className="theme-toggle">
          <span className="toggle-label">Dark Mode</span>

          <span className="toggle-control">
            <input type="checkbox" name="theme" id="theme-toggle"
              checked={theme === THEMES.dark} onChange={handleThemeChange}/>
            <span className="toggle-slider"></span>
          </span>          
        </label>
      </header>

      <section className="app-content">
        <Router>
          <Routes>
            <Route path="/country/:countryId" element={<CountryPage/>}/>

            <Route path="/" element={<CountriesDashboard/>} />
          </Routes>
        </Router>
      </section>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/simoneclr">Simone Calciolari</a>.
      </footer>
    </div>
  );
}

export default App;

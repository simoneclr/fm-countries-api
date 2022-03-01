import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import CountriesDashboard from "./components/CountriesDashboard";
import CountryPage from "./components/CountryPage";

function App() {
  return (
    <div className="app light-theme">
      <header className="app-header">
        <h1 className="app-title">Where in the World?</h1>
      </header>

      <Router>
        <Routes>
          <Route path="/country/:countryId" element={<CountryPage/>}/>

          <Route path="/" element={<CountriesDashboard/>} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;

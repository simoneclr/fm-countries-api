import React from "react";

import CountriesDashboard from "./components/CountriesDashboard";

function App() {
  return (
    <div className="app light-theme">
      <header className="app-header">
        <h1 className="app-title">Where in the World?</h1>
      </header>

      <CountriesDashboard/>
    </div>
  );
}

export default App;

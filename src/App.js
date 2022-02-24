import React, { useEffect } from "react";

import countriesService from "./services/countriesService";

function App() {
  useEffect(()=> {
    countriesService.getAll()
      .then(data => {
        console.log(data.size)
      })
      .catch(console.error)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Where in the World?</h1>
      </header>
    </div>
  );
}

export default App;

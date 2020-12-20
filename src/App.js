import { useState, useEffect } from 'react';
import { getStarShips } from './services/sw-api';
import  StarShipCard  from './Components/StarShipCard';

import './App.css';

function App() {

  const [starShipData, setStarShipData] = useState({
    count: 0 ,
    next: null,
    previous: null,
    results: []
  });

  async function getAppData() {
    const data = await getStarShips();
    setStarShipData(data);
    console.log(data);
  }
  

  useEffect(() => {
    getAppData();
  }, []);

console.log(starShipData);
  return (
    <div className="App">
      <header className= 'App-header'>
       <h1>React Star Wars</h1>
      </header>
      {starShipData.results.map((ship, idx) => (
        <StarShipCard key={idx} ship={ship} />
        ))}
        {/* <p>{starShipData.results[0].name}</p> */}
        
    </div>
  );
}

export default App;

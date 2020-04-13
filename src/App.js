import React, { useContext } from 'react';
import "bootswatch/dist/darkly/bootstrap.min.css";
import Stats from './components/stat'
import Graph from './components/graph'
import CovidState from './context/state'



function App(props) {


  //covidContext.getData()
  return (
    <CovidState>
    <div className="App">
      <Stats></Stats>
      <Graph></Graph>
    </div>
  </CovidState>
  );
}

export default App;

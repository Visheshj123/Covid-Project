import React, { Fragment, useContext,  } from 'react';
import "bootswatch/dist/darkly/bootstrap.min.css";
import Stats from './components/stat'
import Graph from './components/graph'
import CovidState from './context/state'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'



function App(props) {


  //covidContext.getData()
  return (
    <CovidState>
      <Router>
        <Switch>
          <Route exact path='/' render={props => <Fragment>
              <Navbar></Navbar>
            <Stats></Stats>
            <Graph></Graph>
          </Fragment>}></Route>
        </Switch>
    </Router>
  </CovidState>
  );
}

export default App;

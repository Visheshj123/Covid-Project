import React, { Fragment, useContext,  } from 'react';
import "bootswatch/dist/darkly/bootstrap.min.css";
import Stats from './components/stat'
import Graph from './components/graph'
import CovidState from './context/state'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App(props) {


  //covidContext.getData()
  return (
    <CovidState>
      <Router>
        <Switch>
          <Route exact path='/' render={props => <Fragment>
            <Stats></Stats>
            <Graph></Graph>
          </Fragment>}></Route>
        </Switch>
    </Router>
  </CovidState>
  );
}

export default App;

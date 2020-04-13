import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import covidReducer from './reducer'
import CovidContext from './covidContext'
import {COVID_DATA, ALL_DATA} from './types'


const CovidState = (porps) => {

  const initialState = {
    country: null,
    total_cases: null,
    new_cases: null,
    total_deaths: null,
    new_deaths: null,
    all_cases: []
  }
  const [state, dispatch] = useReducer(covidReducer, initialState)

  const getData = async () => {
    const res = await axios.get('https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=USA',
      {
        headers: {
          "x-rapidapi-host": "coronavirus-monitor-v2.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      })

      dispatch({type: COVID_DATA, payload: res.data.stat_by_country[res.data.stat_by_country.length - 1]})
      dispatch({type:ALL_DATA, payload: res.data.stat_by_country})
      //console.log(res.data.stat_by_country)

  }


return(
  <CovidContext.Provider value={{
    getData,
    data: state
  }}>
      {porps.children}
  </CovidContext.Provider>
)}

export default CovidState

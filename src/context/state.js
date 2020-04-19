import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import covidReducer from './reducer'
import CovidContext from './covidContext'
import {COVID_DATA, ALL_DATA, GRAPHDATA, REMOVE_GRAPH_DATA} from './types'


const CovidState = (porps) => {

  const initialState = {
    country: null,
    total_cases: null,
    new_cases: null,
    total_deaths: null,
    new_deaths: null,
    all_cases: [],
    graphing_arr: []
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

      //reformat Date for each element
      let formatedArr = res.data.stat_by_country.map(entry => {
        entry.record_date = new Date(entry.record_date).toDateString()
        return entry ;
      })

      //Delete Duplicates, get latest post of each date
      let uniqueArr = formatedArr.filter(element => {
          if(formatedArr[formatedArr.indexOf(element) + 1]){
        return element.record_date != formatedArr[formatedArr.indexOf(element) + 1].record_date
        }
      })



      dispatch({type: COVID_DATA, payload: { data: uniqueArr[uniqueArr.length - 1], country: res.data.country}})
      dispatch({type:ALL_DATA, payload: uniqueArr})
      //console.log(res.data.stat_by_country)

  }

  const getGraphData = (e) => {
    e.preventDefault()

    let key, value;
    let temp = {type: "spline", name: e.target[0].name, showInLegend: true, dataPoints: []}
    state.all_cases.forEach(stat => {
      let entries = Object.entries(stat)
      for ([key, value] of entries){
        if (key == e.target[0].id){
          value = value.replace(/[, ]+/g, "")
          temp['dataPoints'].push({y:parseInt(value), label: stat['record_date']})
        }
      }
    })
  //dispatch to change graphing arr
    dispatch({type:GRAPHDATA, payload: temp})
  }

  const removeGraphData = e => {
    e.preventDefault()
    dispatch({type:REMOVE_GRAPH_DATA, payload: e.target[0].name})
  }


return(
  <CovidContext.Provider value={{
    getData,
    data: state,
    getGraphData,
    graphData: state.graphing_arr,
    removeGraphData
  }}>
      {porps.children}
  </CovidContext.Provider>
)}

export default CovidState

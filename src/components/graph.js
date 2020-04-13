import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import CanvasJSReact from '../canvasjs.react'
import CovidContext from '../context/covidContext'
var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Graph = (props) => {

  //TODO: Use momentJS to format the dates, earse all duplicates, set this as the new state 

  //TODO: Might want to set local state with each field holding the seperate line graphs you want



  const covidContext = useContext(CovidContext)
  let total_cases_arr = []

  covidContext.data.all_cases.forEach((data) => {
    let {total_cases, record_date} = data
    total_cases = total_cases.replace(/[, ]+/g, "")
    total_cases_arr.push({y: parseInt(total_cases), label: record_date})
  })



  const options = {
      animationEnabled: true,
      theme: "dark1",
      title: {
        text: "Trends of COVID"
      },
      axisY: {
        title: "Cases",
        includeZero: false
      },
      toolTip: {
        shared: true
      },
      data: [{
        type: "spline",
        name: "total cases",
        showInLegend: true,
        dataPoints: total_cases_arr
      }]
  }
  return (
    <div>
    <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
    </div>
  )
}

export default Graph

import React,{useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import CanvasJSReact from '../canvasjs.react'
import CovidContext from '../context/covidContext'
var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Graph = (props) => {



  const covidContext = useContext(CovidContext)
  console.log(covidContext.graphData[0])


  /*covidContext.data.all_cases.forEach((data) => {
    let entries = Object.entries(data)
        let key, value;
        for ([key, value] of entries) {
          if(value != null){
            data[key] = data[key].replace(/[,]+/g, "")
            //console.log(data[key])
          }

        }

    //TODO: For each element in data object array, set the object.values = transformed values

    //TODO: Change the color scheme to teal



  })*/

  /*covidContext.data.all_cases.forEach((data) => {
    let {total_cases, new_cases, total_deaths, new_deaths, record_date} = data

    //TODO: For each element in data object array, set the object.values = transformed values

    //TODO: Change the color scheme to teal

    total_cases = total_cases.replace(/[, ]+/g, "")
    total_cases_arr.push({y: parseInt(total_cases), label: record_date})

  })*/



  const options = {
      animationEnabled: true,
      backgroundColor: "#222",
      title: {
        fontColor: "white",
        text: "Trends of COVID"
      },
      axisY: {
        title: "Cases",
        includeZero: false,
        titleFontColor: "white"
      },
      toolTip: {
        shared: true
      },
      data: [{
        type: "spline",
        name: "total cases",
        showInLegend: true,
        dataPoints: [{
          x:0, y: 5
        }]
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

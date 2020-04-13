import React from 'react'
import PropTypes from 'prop-types'
import CanvasJSReact from '../canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = (props) => {

  const options = {
      animationEnabled: true,
      theme: "dark2",
      title: {
        text: "Trends of COVID"
      }
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

import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import CovidContext from '../context/covidContext'

const Stat = (props) => {
  const covidContext = useContext(CovidContext)
  useEffect(() => {
    covidContext.getData()
  },[])
   const { country, total_cases, new_cases, total_deaths, new_deaths } = covidContext.data
  return (
    <div className="container mt-3">
  <div className="row">
    <div className="col-sm">
    <div className="card border-danger mb-3">
        <div className="card-body">
          <h4 className="card-title mx-auto text-danger text-center font-weight-bold">Total Cases</h4>
          <p className="card-text text-center"> {total_cases}</p>
        </div>
      </div>

    </div>
    <div className="col-sm">
      <div className="card border-warning mb-3">
        <div className="card-body">
          <h4 className="card-title mx-auto text-warning text-center font-weight-bold">New Cases</h4>
          <p className="card-text text-center">{new_cases}</p>
        </div>
      </div>
    </div>
    <div className="col-sm">
      <div className="card border-light mb-3" >
        <div className="card-body">
          <h4 className="card-title mx-auto text-muted text-center font-weight-bold">Total Deaths</h4>
          <p className="card-text text-center">{total_deaths}</p>
        </div>
      </div>
    </div>

    <div className="col-sm">
      <div className="card border-info mb-3">
        <div className="card-body">
          <h4 className="card-title mx-auto text-primary text-center font-weight-bold">New Deaths</h4>
          <p className="card-text text-center">{new_deaths}</p>
        </div>
      </div>
    </div>


  </div>
</div>
  )
}

export default Stat

import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import CovidContext from '../context/covidContext'

const Stat = (props) => {
  const covidContext = useContext(CovidContext)
  useEffect(() => {
    covidContext.getData()
  },[])

   const { country, total_cases, new_cases, total_deaths, new_deaths } = covidContext.data
   const { getGraphData } = covidContext

   const onClick = e => {
     e.preventDefault()

     getGraphData(e)
   }


  return (
    <div className='container'>
      <div className="row">

    <div className="col-sm">
      <div className="card-body">
        <form onSubmit={onClick}>
          <input type="text" value={total_cases} name='Total Cases' hidden/>
          <button type="submit" className="btn btn-outline-success mb-3">
            <h4 className="card-title mx-auto text-center font-weight-bold" name="New Deaths">Total Cases</h4>
            <p className="card-text text-center">{total_cases}</p>
          </button>
        </form>
      </div>
    </div>

    <div className="col-sm">
      <div className="card-body">
        <form onSubmit={onClick}>
          <input type="text" value={new_cases} name='New Cases' hidden/>
          <button type="submit" className="btn btn-outline-success mb-3">
            <h4 className="card-title mx-auto text-center font-weight-bold" name="New Deaths">New Cases</h4>
            <p className="card-text text-center">{new_cases}</p>
          </button>
        </form>
      </div>
    </div>

    <div className="col-sm">
      <div className="card-body">
        <form onSubmit={onClick}>
          <input type="text" value={total_deaths} name='Total Deaths' hidden/>
          <button type="submit" className="btn btn-outline-success mb-3">
            <h4 className="card-title mx-auto text-center font-weight-bold" name="New Deaths">Total Deaths</h4>
            <p className="card-text text-center">{total_deaths}</p>
          </button>
        </form>
      </div>
    </div>



<div className="col-sm">
  <div className="card-body">
    <form onSubmit={onClick}>
      <input type="text" value={new_deaths} name='New Deaths' id='new_deaths' hidden/>
      <button type="submit" className="btn btn-outline-success mb-3">
        <h4 className="card-title mx-auto text-center font-weight-bold" name="New Deaths">New Deaths</h4>
        <p className="card-text text-center">{new_deaths}</p>
      </button>
    </form>
  </div>
</div>

</div>
</div>





  )
}

export default Stat

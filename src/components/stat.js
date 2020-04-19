import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CovidContext from '../context/covidContext'

const Stat = (props) => {

  const [totalCases, setTotalCases] = useState()
  const [newCases, setNewCases] = useState()
  const [totalDeaths, setTotalDeaths] = useState()
  const [newDeaths, setNewDeaths] = useState()

  const covidContext = useContext(CovidContext)
  useEffect(() => {
    covidContext.getData()
     const { country, total_cases, new_cases, total_deaths, new_deaths } = covidContext.data
     setTotalDeaths(total_deaths)
     setNewDeaths(new_deaths)
     setTotalCases(total_cases)
     setNewCases(new_cases)
  },[])



   const { country, total_cases, new_cases, total_deaths, new_deaths } = covidContext.data
   const { getGraphData, graphData, removeGraphData } = covidContext

   const onClick = e => {
     e.preventDefault()

     //if already in graphing_arr, then call remove, else call getGraphData
     if(graphData.length > 0 && graphData.some(data => data.name == e.target[0].name)) {
       removeGraphData(e)
     } else{
       getGraphData(e)
     }
   }


  return (
    <div className='container'>
      <div className="row">

    <div className="col-sm">
      <div className="card-body">
        <form onSubmit={onClick}>
          <input type="text" value={totalCases || ''}  name='Total Cases' id='total_cases' hidden readOnly/>
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
          <input type="text" value={newCases || ''}  name='New Cases' id='new_cases' hidden readOnly/>
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
          <input type="text" value={totalDeaths || ''}  name='Total Deaths' id='total_deaths' hidden readOnly/>
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
          <input type="text" value={newDeaths || ''} name='New Deaths' id='new_deaths' hidden readOnly/>
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

/*const formStyle = {
  .btn {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}


.success {
  border-color: #4CAF50;
  color: green;
}
}*/

export default Stat

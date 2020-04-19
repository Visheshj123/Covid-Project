import React from 'react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">
      <a href="#" className="navbar-brand">Covid App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>



      <div className="collapse navbar-collapse" id="navbarColor01">

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

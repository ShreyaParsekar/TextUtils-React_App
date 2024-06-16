import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

 
  

  return (
    <div >
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border border-white` }>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/features">{props.aboutFeatures}</Link>
        </li>  
      </ul>
    </div>
    <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode } type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
</div>
  </div>
  
</nav>

    </div>
  )
}


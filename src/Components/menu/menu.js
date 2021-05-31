import React from 'react'
import './menu.css'
import search from '../../Assets/search.svg'
import logo from '../../Assets/fanconvo.png'
export default class Menu extends React.Component{

    render(){
        return(
            <div className="menu font-face-poppins">


<nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logo" src={logo}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link " aria-current="page" href="#">Sign up</a>
        <a className="nav-link" href="#">Login</a>
      </div>
    </div>
  </div>
</nav>
<nav className="navbar navbar-dark">
  <div className="container-fluid ">
    <form className="d-flex srccont">
    <label for="search" className="form-label srclbl font-face-poppins">Search new talent</label>

      <input className="form-control me-2 searchinput" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success btnsvg" type="submit"><img src={search} className="svg"></img> </button>
    </form>
  </div>
</nav>
            </div>
        )
    }
}
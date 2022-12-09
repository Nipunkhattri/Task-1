import React from 'react'
// import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const handleclick = () =>{
    const home =document.querySelector(".homeall");
    home.classList.add("blur");
    const sign =document.querySelector(".sign");
    sign.classList.remove("display");
    home.classList.add("fixed")
    // home.classList.add("overflow")

  }
  const classTogglenav = () =>{
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  return (

    <div>
      <>
      {/* <div className="nav">
        <div className="head">
            <h1>ATG.WORLD</h1>
        </div>
        <div className="text">
        <i class="fas fa-search"></i>
            <input type="text" placeholder='Search for your favorite groups in ATG'/>
        </div>
        <div className="account " >
          <p onClick={handleclick} style={{
            "cursor":"pointer"
          }}>Create account.<span>It's free</span></p>
        </div>
      </div> */}
      <div class="nav Navbar">
      <div class="Navbar__Link Navbar__Link-brand">
      ATG.WORLD
    </div>
    <div onClick={classTogglenav} class="Navbar__Link Navbar__Link-toggle">
      <i class="fas fa-bars"></i>
    </div>
  {/* <nav class="Navbar__Items">
    <div class="Navbar__Link">
    Article
    </div>
    <div class="Navbar__Link">
    Event
    </div>
    <div class="Navbar__Link">
    Education
    </div>
  </nav> */}
  <div className="text">
        <i class="fas fa-search"></i>
            <input type="text" placeholder='Search for your favorite groups in ATG'/>
        </div>
  <nav class="Navbar__Items Navbar__Items--right " style={{
    "marginLeft":"0px"
  }}>
  <div className="account " >
          <p onClick={handleclick} style={{
            "cursor":"pointer"
          }}>Create account.<span>It's free</span></p>
        </div>
  </nav>
</div>
      </>
    </div>
  )
}

export default Navbar

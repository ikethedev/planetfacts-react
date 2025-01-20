import { useState } from "react";
import './topbar.css'
function Topbar(props) {
  const { planetData, handlePlanetClick, openMenu, setOpenMenu } = props;
  console.log(props)
  const handleMobileMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  console.log("Received props:", planetData);

  return (
    
    <nav className="nav">
      <h1 className="logo">The Planets</h1>
      <img
        src="../assets/icon-hamburger.svg"
        alt="Mobile hamburger menu"
        className="mobile__menu-icon"
        onClick={handleMobileMenuClick}
      />

     
      <ul onClick={handleMobileMenuClick} className={`mobile__menu planet__names ${openMenu ? "" : "hide"}`}>
        
          {planetData.map((planet) => (
        
            <div key={planet.name} id={planet.name} onClick={handlePlanetClick} className="planet">
                <div className="planet__bullet" style={{backgroundColor: `#${planet.color}`}}>

                </div>
                <a className="planet__options" href={`#${planet.name.toLowerCase()}`}>{planet.name}</a>
            </div>
          ))}

      </ul>
    </nav>
  );
}

export default Topbar;

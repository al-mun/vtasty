import React, { useState } from "react"
import { GiHamburgerMenu} from "react-icons/gi"
import Aside from "./Aside"

const Nav = () =>{

    const [showLinks, setShowLinks] = useState(true)

    //set state of setShowLinks to false
    const toggleLinks =()=>{
      setShowLinks(!showLinks)
    }

    return(

      <nav className="nav" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <button className="nav-btn" id="nav-btn" onClick={toggleLinks}>
              <GiHamburgerMenu/>
            </button>
          </div>
          <ul className="nav-links">
            <a><h5 onClick={toggleLinks}>Contact</h5></a>
          </ul>
        </div>
        <Aside toggleLinks={toggleLinks} showLinks={showLinks}/>

      </nav>
    )
}

export default Nav;
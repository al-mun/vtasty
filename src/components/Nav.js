import React, { useState } from "react"
import { Link } from "react-router-dom"
import { GiHamburgerMenu} from "react-icons/gi"
import {MdEmail} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"

const Nav = () =>{

    const [showLinks, setShowLinks] = useState(false)

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
            {/* <Link to="/"><li>home</li></Link>
            <Link to="/about"><li>about</li></Link>
            <Link to="/projects"><li>projects</li></Link>
            <Link to="/contact"><li>contact</li></Link> */}
          </ul>
        </div>

        <aside className={`${showLinks ? "sidebar show-sidebar": "sidebar"}`}>
        <div>
          <button className="close-btn" id="close-btn" onClick={toggleLinks}>
            <FaTimes/>
          </button>
          <ul className="sidebar-links">
            {/* <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/contact">contact</Link></li> */}
          </ul>
          <h3>Contact</h3>
          <ul className="social-icons-centered hero-icons">
              <li>
                  <a href="https://www.linkedin.com/in/alejandro-munoz-429350115" target="_blank" className="social-icon">
                    <FaLinkedin/>
                  </a>
                </li>
                <li>
                  <a href="mailto:alejandro@munoza.com" className="social-icon">
                    <MdEmail/>                         
                  </a>
                </li>
          </ul>
        </div>
      </aside>
      </nav>
    )
}

export default Nav;
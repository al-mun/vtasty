import {React} from "react";
import {MdEmail} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"

const Aside = (props)=>{

    return(
        <aside className={`${props.showLinks ? "sidebar show-sidebar": "sidebar"}`}>
        <div>
          <button className="close-btn" id="close-btn" onClick={props.toggleLinks}>
            <FaTimes/>
          </button>
          <ul className="sidebar-links">
          </ul>
          
          <ul className="social-icons-centered hero-icons">
              <li>
                  <a href="https://www.linkedin.com/in/al-mun" target="_blank" className="social-icon" rel="noreferrer">
                    <FaLinkedin/>
                  </a>
                </li>
                <li>
                  <a href="mailto:almunz93@gmail.com" className="social-icon">
                    <MdEmail/>                         
                  </a>
                </li>
                
          </ul>
          <h3>Contact</h3>
        </div>
      </aside>


    )
}

export default Aside;
import React from "react"



const hero = ()=>{
    return(
        <header>
            <div className="hero">
                <h2>VTasty Recipe App</h2>
                <img src="images/fishtacohero.jpg" className="hero-photo" alt="hero"/>
            </div>
            <h2 className="hero-info">Welcome to Vtasty, a place for simple recipes.</h2>
        </header>
    )
}

export default hero



import React from "react";
import './herobanner.png'

function HeroBanner() {
    return(
        <div className="banner">
            <div>
                <h2>
                    &lt;Hero<br/>Banner/&gt;
                </h2>
                <h3>A space for people that code or want to learn.</h3> 
            </div>
            <img alt="hero banner's code" src={require("./herobanner.png")}/>
        </div>
    );
}

export default HeroBanner;
import React from "react";
import Navbar from "./Navbar";
import SectionOneAboutOur from "./AbourOur/sectionOneAboutOur";
import SectionTwooAboutOur from "./AbourOur/sectionTwooAboutOur";
import Footer from "./footer";
import "../App.css"

function AboutOur() {
    return(
        <div>
            <Navbar/>
            <SectionOneAboutOur/>
            <SectionTwooAboutOur/>
            <Footer/>
        </div>
    )
}

export default AboutOur;
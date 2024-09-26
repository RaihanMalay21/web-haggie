import React,{ useRef } from "react";
import Navbar from "./Navbar";
import SectionOne from "./Main/sectionOne";
import SectionTwo from "./Main/sectionTwo";
import SectionThree from "./Main/sectionThree";
import SectionFour from "./Main/sectionFour";
import Footer from "./footer";

function Main() {
    const sectionTwoRef = useRef(null);

    return(
        <div>
            <Navbar sectionTwoRef={sectionTwoRef}/>
            <SectionOne sectionTwoRef={sectionTwoRef}/>
            <SectionTwo ref={sectionTwoRef}/>
            <SectionThree/>
            <SectionFour/>
            <Footer/>
        </div>
    )
}

export default Main;
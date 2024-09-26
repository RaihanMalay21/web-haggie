import React from "react";
import Navbar from "./Navbar";
import SectionOneKD from "./kenapaHaggie/sectionOne-KD";
import SectionTwoKD from "./kenapaHaggie/sectionTwo-KD";
import SectionThreeKD from "./kenapaHaggie/sectionThree-KD";
import SectionFourKD from "./kenapaHaggie/sectionFour-KD";
import Footer from "./footer";

function WhyDelegation() {
    return(
        <div>
            <Navbar/>
            <SectionOneKD/>
            <SectionTwoKD/>
            <SectionThreeKD/>
            <SectionFourKD/>
            <Footer/>
        </div>
    )
}

export default WhyDelegation;
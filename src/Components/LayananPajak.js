import React from "react";
import Navbar from "./Navbar";
import SectionOneLP from "./Product/layanan-pajak/sectionOne-LP";
import SectionTwooLP from "./Product/layanan-pajak/sectionTwoo-LP";
import SectionThreeLP from "./Product/layanan-pajak/sectionThree-LP";
import SectionFourLP from "./Product/layanan-pajak/sectionFour-LP";
import SectionFiveLP from "./Product/layanan-pajak/sectionFive-LP";
import Footer from "./footer";

function LayananPajak() {
     return(
        <div>
            <Navbar/>
            <SectionOneLP/>
            <SectionTwooLP/>
            <SectionThreeLP/>
            <SectionFourLP/>
            <SectionFiveLP/>
            <Footer/>
        </div>
     )
}

export default LayananPajak;
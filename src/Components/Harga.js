import React from "react";
import Navbar from "./Navbar";
import SectionOneHarga from "./Harga/sectionOne-Harga";
import SectionTwoHarga from "./Harga/sectionTwo-Harga";
import SectionThreeHarga from "./Harga/sectionThree-Harga";
import SectionFourHarga from "./Harga/sectionFour-Harga";
import Footer from "./footer"


function Harga() {
    return(
        <div>
            <Navbar/>
            <SectionOneHarga/>
            <SectionTwoHarga/>
            <SectionThreeHarga/>
            <SectionFourHarga/>
            <Footer/>
        </div>
    )
}

export default Harga;
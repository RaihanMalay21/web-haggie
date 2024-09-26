import React,{ useRef } from "react";
import Navbar from "./Navbar";
import SectionOneLK from "./Product/laporan-keuangan/sectionOne-LK";
import SectionTwooLK from "./Product/laporan-keuangan/sectionTwoo-LK";
import Footer from "./footer";

function LaporanKeuangan() {
    const sectionOneLKRef = useRef(null);
    return(
        <div>
            <Navbar/>
            <SectionOneLK ref={sectionOneLKRef}/>
            <SectionTwooLK/>
            <Footer/>
        </div>
    )
}

export default LaporanKeuangan;
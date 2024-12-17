import React from "react";
import "../../App.css";
import { OpenWhatshapp } from "../helper/whatshapp";

function SectionOne({ sectionTwoRef }) {
    
    const handleLearnMoreClick = () => {
        if (sectionTwoRef.current) {
            sectionTwoRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error('sectionTwoRef is not set');
        }
    };

    return(
        <div>
            <div class="container-sectionOne">
                <img src={require("../../images/main-bg.jpg")} className="Background-Image-main-page"/>
                <div class="content-sectionOne">
                    <h1>Seperti memiliki akuntan pribadi yang menyusun laporan keuangan Anda, namun dengan biaya yang lebih rendah.</h1>
                    <p>Finfast adalah Layanan jasa akuntansi yang menawarkan solusi akuntansi yang disesuaikan dengan kebutuhan bisnis Anda, sehingga Anda dapat meningkatkan efisiensi operasional.</p>
                    <div class="buttons-sectionOne">
                        <button class="contact-button" onClick={ OpenWhatshapp }>Hubungi Kami</button>
                        <button class="learn-more-button" onClick={ handleLearnMoreClick }>Pelajari Lebih Lanjut</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne;
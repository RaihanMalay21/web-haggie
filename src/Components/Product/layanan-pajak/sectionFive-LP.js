import "../../../App.css"

function SectionFiveLP() {
    return(
        <div className="container-sectionFiveLP"> 
            <div className="container-fill-sectionFiveLP">
                <h2>Kata pemilik umkm tentang layanan pajak ZOFI</h2>
                <div className="container-box-sectionFiveLP" style={{ backgroundColor: 'white'}}>
                    <img src={require("../../../images/umkm-review.jpg")}/>
                    <p style={{ fontSize: "1.2rem"}}>“Enaknya dengan ZOFI, urusan keuangan dan pajak bisa autopilot”</p>
                    <p>Raihan Malay</p>
                </div>
            </div>
        </div>
    )
}

export default SectionFiveLP;
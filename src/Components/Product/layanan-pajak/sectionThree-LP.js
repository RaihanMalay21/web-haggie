import "../../../App.css"

function SectionTreeLP() {
    return(
        <div className="container-sectionThreeLP">
            <div className="container-fill-sectionThreeLP">
                <h2>Langkah Mudah Memperoleh Layanan Pajak Profesional</h2>
                <div className="container-body-sectionThreeLP">
                    <div className="container-box-sectionThreeLP">
                        <img src={require("../../../images/LP-4.png")}/>
                        <h5>Ceritakan bisnis Anda dan kebutuhan layanan pajaknya</h5>
                    </div>
                    <div className="container-box-sectionThreeLP">
                        <img src={require("../../../images/LP-5.png")}/>
                        <h5>Pilih layanan pajak sesuai dengan kebutuhan Anda</h5>
                    </div>
                    <div className="container-box-sectionThreeLP">
                        <img src={require("../../../images/LP-6.png")}/>
                        <h5>Lengkapi data dan kami mulai bekerja</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTreeLP;
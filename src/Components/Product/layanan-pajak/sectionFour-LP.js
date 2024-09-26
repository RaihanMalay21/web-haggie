import "../../../App.css"

function SectionFourLP() {
    return(
        <div className="container-sectionFourLP">
            <div className="container-fill-sectionFourLP">
                <h2>Kenapa Harus ZOFI?</h2>
                <div className="container-box-sectionFourLP">
                    <div className="fill-box-sectionFourLP">
                        <img src={require("../../../images/LP-7.png")} />
                        <h5>Lebih Murah</h5>
                        <p>Harga mulai dari Rp900 ribu, lebih terjangkau daripada hire karyawan atau konsultan pajak lain</p>
                    </div>
                    <div className="fill-box-sectionFourLP">
                        <img src={require("../../../images/LP-8.png")} />
                        <h5>Lebih Efesien</h5>
                        <p>Tidak perlu koordinasi dua layanan terpisah karena ZOFI yang akan handle pembukuan dan pajakmu</p>
                    </div>
                </div>
                <div className="container-box-sectionFourLP" style={{ marginTop: '2rem'}}>
                    <div className="fill-box-sectionFourLP">
                        <img src={require("../../../images/LP-9.png")} />
                        <h5>Prefesional</h5>
                        <p>Nikmati layanan pajak dari profesional berpengalaman handle perpajakan</p>
                    </div>
                    <div className="fill-box-sectionFourLP">
                        <img src={require("../../../images/LP-10.jpg")} />
                        <h5>Hemat Waktu</h5>
                        <p>Tidak perlu luangkan waktu untuk belajar, menghitung, dan lapor pajak</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFourLP;
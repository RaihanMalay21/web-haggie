import "../../App.css"

function SectionThreeHarga() {
    return (
        <div className="container-sectionThreeHarga">
            <div className="container-head-sectionThreeHarga">
                <div className="container-head-sectionThreeHarga-fillHead">
                    <h2>Tambahan Layanan Pajak</h2>
                    <p>Hitung dan lapor pajak lebih mudah dengan harga bersahabat</p>
                </div>
                <div className="container-head-sectionThreeHarga-fillend">
                    <h2>Badan Hukum, (PT atau CV)</h2>
                    <div className="Badan-Hukum-pt-cv">
                        <div className="fill-Badan-Hukum-pt-cv">
                            <img src={require("../../images/tax1.png")}/>
                            <h2 style={{fontSize: '1.4rem'}}>PPh Bulanan</h2>
                            <p>Mulai Rp900 ribu/bulan</p>
                        </div>
                        <div  className="fill-Badan-Hukum-pt-cv">
                            <img src={require("../../images/tax2.png")}/>
                            <h2 style={{fontSize: '1.4rem'}}>PPh Tahunan</h2>
                            <p>Mulai Rp1,8 juta/tulan</p>
                        </div>
                        <div className="fill-Badan-Hukum-pt-cv">
                            <img src={require("../../images/tax3.png")}/>
                            <h2 style={{fontSize: '1.4rem'}}>PPN</h2>
                            <p>Mulai Rp1 juta/bulan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-body-sectionThreeHarga">
                <h2>Pribadi atau Perorangan</h2>
                <div className="container-body-sectionThreeHarga-fill-body">
                    <div id="box-pribadi-atau-perorangan" className="box-pribadi-atau-perorangan">
                        <img src={require("../../images/pphbulanan.png")}/>
                        <h2 style={{fontSize: '1.4rem'}}>PPh Bulanan</h2>
                        <ul style={{ fontSize: '1.2rem'}}>
                            <li>Dengan Pembukaan, mulai dari Rp190 ribu /bulan</li>
                            <li>Tanpa Pembukaan, mulai dari Rp900 ribu /bulan</li>
                        </ul>
                    </div>
                    <div className="box-pribadi-atau-perorangan">
                        <img src={require("../../images/pphtahunan.png")}/>
                        <h2 style={{fontSize: '1.4rem'}}>PPh Tahunan</h2>
                        <p style={{ fontSize: '1.2rem'}}>Mulai Rp1,2 juta/bulan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThreeHarga;
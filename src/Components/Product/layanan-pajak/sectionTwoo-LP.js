import "../../../App.css"

function SectionTwooLP() {
    return(
        <div className="conatiner-sectionTwooLp">
            <div className="container-fill-sectionTwooLP">
                <div className="container-head-sectionTwooLP">
                    <h2>Layanan Pajak ZOFI untuk UMKM</h2>
                    <p>Konsultasikan Kebutuhanmu, ZOFI siap bantu</p>
                </div>
                <div className="container-body-sectionTwooLP">
                    <div className="box-sectionTwooLP">
                        <img src={require("../../../images/LP-1.png")}/>
                        <h4>SPT PPh Badan</h4>
                        <p>Konsultasi, hitung, dan pelaporan SPT PPh 21, PPh 23, PPh 4(2), dan PPh final UMKM secara bulanan dan tahunan</p>
                    </div>
                    <div className="box-sectionTwooLP">
                        <img src={require("../../../images/LP-2.png")}/>
                        <h4>SPT PPh Pribadi</h4>
                        <p>Hitung dan pelaporan SPT PPh tahunan dan bulanan pribadi</p>
                    </div>
                    <div className="box-sectionTwooLP">
                        <img src={require("../../../images/LP-3.png")}/>
                        <h4>SPT PPN</h4>
                        <p>Hitung dan lapor SPT PPN. Cek kesesuaian invoice dan faktur pajak penjualan dan pembelian</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwooLP;
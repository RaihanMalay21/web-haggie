import "../../../App.css"
import { OpenWhatshapp } from "../../helper/whatshapp";

function SectionOneLP() {
    return(
        <div className="container-sectionOneLP">
            <div className="container-fill-sectionOneLP">
                <div className="container-title-sectionOneLP">
                    <h2>Layanan pajak untuk bisnis UMKM?</h2>
                    <p>Pilihlah ZOFI! Dengan harga yang bersahabat bagi UMKM, Anda dapatkan layanan pajak yang komprehensif!</p>
                    <button onClick={ OpenWhatshapp }>KLAIM DISKON 25%</button>
                </div>
                <div className="container-image-sectionOneLP">
                    <img src={require("../../../images/taxs.png")} alt="Layanan Pajak"/>
                </div>
            </div>
        </div>
    )
}

export default SectionOneLP;
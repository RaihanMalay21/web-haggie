import "../../App.css"
import { OpenWhatshapp } from "../helper/whatshapp";

function SectionFourHarga() {
    return(
        <div className="container-sectionFourHarga">
            <div className="container-fill-sectionFourHarga">
                <div className="container-fill-sectionFourHarga-left" style={{ textAlign: 'center'}}>
                    <h2>Mau tanya-tanya tentang Finfast?</h2>
                    <p style={{ fontSize: "1.5rem"}}>Kami siap membantu</p>
                    <div className="buttons-sectionFour">
                        <button className="btn btn-demo" style={{ backgroundColor: "#1c5d99", color: "white", padding: "15px 40px", marginTop: "1.5rem"}} onClick={OpenWhatshapp}>HUBUNGI KAMI</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFourHarga;
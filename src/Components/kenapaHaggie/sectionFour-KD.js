import "../../App.css";
import { useNavigate } from "react-router-dom";

function SectionFourKD() {
    const navigate = useNavigate();

    const handleforwardLP = () => {
        navigate("/Zofi/produk/laporan/keuangan")
    }
    return(
        <div className="container-sectionFourKD">
            <div class="info-section-sectionFourKD">
                <div class="info-text-sectionFourKD" style={{width: '100%'}}>
                    <h2>Apa saja jenis laporan yang di berikan oleh ZOFI?</h2>
                    <a class="btn-sectionFourKD" onClick={handleforwardLP}>PELAJARI LEBIH LANJUT</a>
                </div>
                <div class="info-image-sectionFourKD" style={{width: '0'}}>
                </div>
            </div>
        </div>
    )
}

export default SectionFourKD;
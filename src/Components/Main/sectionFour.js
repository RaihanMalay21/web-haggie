import "../../App.css";
import { useNavigate  } from "react-router-dom";

function SectionFour() {
    const navigate =  useNavigate();

    const handleForwordLP = () => {
        navigate("/produk/laporan/keuangan")
    }

    return(
        <div className="container-sectionFour">
            <div className="container-main-sectionFour">
                <div className="container-judul-sectionFour">
                    <h2>Apa saja laporan yang diberikan?</h2>
                </div>
                <div className="container-fill-sectionFour">
                    <div class="text-content-sectionFour">
                        <p>Laporan keuangan standar yang terdiri dari:</p>
                        <ul class="report-list-sectionFour">
                            <li><td>01.</td><td style={{ textAlign: 'start' }}>Neraca</td></li>
                            <li><td>02.</td><td style={{ textAlign: 'start' }}>Neraca Detail</td></li>
                            <li><td>03.</td><td style={{ textAlign: 'start' }}>Laba Rugi</td></li>
                            <li><td>04.</td><td style={{ textAlign: 'start' }}>Laba Rugi Detail</td></li>
                            <li><td>05.</td><td style={{ textAlign: 'start' }}>Laba Rugi Bulanan</td></li>
                            <li><td>06.</td><td style={{ textAlign: 'start' }}>Arus Kas</td></li>
                        </ul>
                        <p>Ditambah dengan analisis bisnis seperti:</p>
                        <ul class="report-list-sectionFour">
                            <li><td>07.</td><td style={{ textAlign: 'start' }}>Analisis Bagi Hasil</td></li>
                            <li><td>08.</td><td style={{ textAlign: 'start' }}>Analisis Target Penjualan</td></li>
                            <li><td>09.</td><td style={{ textAlign: 'start' }}>Analisis Break Even Point</td></li>
                            <li><td>10.</td><td style={{ textAlign: 'start' }}>Analisis Payback Period</td></li>
                            <li><td>11.</td><td style={{ textAlign: 'start' }}>Analisis Return On Investment</td></li>
                        </ul>
                        <p>Tambahan Laporan Pendukung Seperti:</p>
                        <ul class="report-list-sectionFour">
                            <li><td>12.</td><td style={{ textAlign: 'start' }}>Buku Besar</td></li>
                            <li><td>13.</td><td style={{ textAlign: 'start' }}>Daftar Aset</td></li>
                        </ul>
                    </div>
                </div>
                <div class="buttons-sectionFour">
                        <button class="sectionTwo-contact-button" onClick={handleForwordLP}>PELAJARI LEBIH LANJUT</button>
                </div>
            </div>
        </div>
    )
}

export default SectionFour;
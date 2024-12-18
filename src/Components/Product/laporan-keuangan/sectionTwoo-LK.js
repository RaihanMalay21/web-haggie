import "../../../App.css"
import React,{ useState } from "react";
import ImageItem from "./ImageItem";
import ImageOverlay from "./ImageOverlay";

function SectionTwooLK() {
    const [overlayImgSrc, setOverlayImgSrc] = useState('');
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [initialIndex, setInitialIndex] = useState(0);

    const images = [
        { src: '../../../images/LK-1.jpeg', alt: 'Highlight Laporan Keuangan' },
        { src: '../../../images/3_LabaRugi_001.png', alt: 'Laporan Laba rugi' },
        { src: '../../../images/4_LabaRugi Detail_001.png', alt: 'Laporan Laba rugi detail' },
        { src: '../../../images/5. Laba Rugi Bulanan_001.png', alt: 'Laporan Laba rugi bulanan' },
        { src: '../../../images/1_Neraca_001.png', alt: 'Laporan Neraca' },
        { src: '../../../images/2_Neraca Detail_001.png', alt: 'Laporan Neraca detail' },
        { src: '../../../images/6. Arus Kas_001.png', alt: 'Laporan Arus Kas' }
        // Tambahkan gambar lain di sini
    ];

    const handleImageClick = (index, src) => {
        setInitialIndex(index);
        setOverlayImgSrc(src);
        setIsOverlayOpen(true);
    };

    const closeOverlay = () => {
        setIsOverlayOpen(false);
    };

    return(
        <div className="container-sectionTwooLK">
            <div className="container-fill-sectionTwooLK">
                <div className="container-fill-sectionTwooLK-1">
                    <div className="header-sectionTwooLK" style={{ textAlign: 'center'}}>Laporan Keuangaan</div>
                    <div className="container-box-sectionTwooLK">
                        <div class="content-sectionTwooLK">
                            <div class="header-sectionTwooLK">Neraca</div>
                            <p>Kekayaan dan stabilitas keuangan bisnis Anda melalui laporan yang merinci dengan jelas aset, kewajiban, dan nilai bersih perusahaan.</p>
                        </div>
                        <div className="content-img-sectionTwooLK">
                            <a target="_blank" onClick={(e) => {e.preventDefault(); handleImageClick(0, 0)}}>
                                <img src={require("../../../images/1_Neraca_001.png")} alt="Highlight Laporan Keuangan"/>
                                <div className="buttons-open-img-sectionTwoLK">
                                    <a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="#1c5d99" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                        Klik gambar untuk memperbesar
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="container-box-sectionTwooLK">
                        <div class="content-sectionTwooLK">
                            <div class="header-sectionTwooLK">Neraca Detail</div>
                            <p>Kekayaan dan stabilitas keuangan bisnis Anda melalui laporan yang merinci dengan jelas aset, kewajiban, dan nilai bersih perusahaan.</p>
                        </div>
                        <div className="content-img-sectionTwooLK">
                            <a target="_blank" onClick={(e) => {e.preventDefault(); handleImageClick(1, 1)}}>
                                <img src={require("../../../images/2_Neraca Detail_001.png")} alt="Highlight Laporan Keuangan"/>
                                <div className="buttons-open-img-sectionTwoLK">
                                    <a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="#1c5d99" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                        Klik gambar untuk memperbesar
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="container-box-sectionTwooLK">
                        <div class="content-sectionTwooLK">
                            <div class="header-sectionTwooLK">Laporan Laba Rugi</div>
                            <p>Kinerja keuangan bisnis Anda dengan detail pendapatan, biaya, dan laba bersih dalam satu tampilan yang ringkas.</p>
                        </div>
                        <div className="content-img-sectionTwooLK">
                            <a href="path_to_image" target="_blank" onClick={(e) => {e.preventDefault(); handleImageClick(2, 2)}}>
                                <img src={require("../../../images/3_LabaRugi_001.png")} alt="Highlight Laporan Keuangan"/>
                                <div className="buttons-open-img-sectionTwoLK">
                                    <a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="#1c5d99" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                        Klik gambar untuk memperbesar
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="container-box-sectionTwooLK">
                        <div class="content-sectionTwooLK">
                            <div class="header-sectionTwooLK">Laporan Laba Rugi Detail</div>
                            <p>Kinerja keuangan bisnis Anda dengan detail pendapatan, biaya, dan laba bersih dalam satu tampilan yang ringkas.</p>
                        </div>
                        <div className="content-img-sectionTwooLK">
                            <a href="path_to_image" target="_blank" onClick={(e) => {e.preventDefault(); handleImageClick(3, 3)}}>
                                <img src={require("../../../images/4_LabaRugi Detail_001.png")} alt="Highlight Laporan Keuangan"/>
                                <div className="buttons-open-img-sectionTwoLK">
                                    <a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="#1c5d99" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                        Klik gambar untuk memperbesar
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="container-box-sectionTwooLK">
                        <div class="content-sectionTwooLK">
                            <div class="header-sectionTwooLK">Laporan Laba Rugi Bulanan</div>
                            <p>Kinerja keuangan bisnis Anda dengan detail pendapatan, biaya, dan laba bersih dalam satu tampilan yang ringkas.</p>
                        </div>
                        <div className="content-img-sectionTwooLK">
                            <a href="path_to_image" target="_blank" onClick={(e) => {e.preventDefault(); handleImageClick(4, 4)}}>
                                <img src={require("../../../images/5. Laba Rugi Bulanan_001.png")} alt="Highlight Laporan Keuangan"/>
                                <div className="buttons-open-img-sectionTwoLK">
                                    <a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="#1c5d99" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                        Klik gambar untuk memperbesar
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="container-box-sectionTwooLK">
                        <div class="content-sectionTwooLK">
                            <div class="header-sectionTwooLK">Arus Kas</div>
                            <p>Aliran kas bisnis Anda melalui laporan yang memberikan gambaran detail tentang pemasukan dan pengeluaran untuk mendukung pengambilan keputusan bisnis yang cerdas.</p>
                        </div>
                        <div className="content-img-sectionTwooLK">
                            <a target="_blank" onClick={(e) => {e.preventDefault(); handleImageClick(5, 5)}}>
                                <img src={require("../../../images/6. Arus Kas_001.png")} alt="Highlight Laporan Keuangan"/>
                                <div className="buttons-open-img-sectionTwoLK">
                                    <a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="#1c5d99" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                        Klik gambar untuk memperbesar
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fill-sectionTwooLK-2" style={{ marginTop: '3.5rem'}}>
                    <div className="header-sectionTwooLK" style={{ textAlign: 'center'}}>Analisis Bisnis</div>
                    <div className="container-box-sectionTwooLK">
                        <div class="content-sectionTwooLK">
                            <div class="header-sectionTwooLK">Analisis bagi Hasil</div>
                            <p>Optimalkan pembagian keuntungan bisnis dengan menganalisis kontribusi dan risiko masing-masing pihak untuk mencapai hasil yang adil dan menguntungkan semua pihak yang terlibat.</p>
                        </div>
                        <div className="content-img-sectionTwooLK">
                            <a onClick={(e) => {e.preventDefault(); handleImageClick(0, 6)}} target="_blank">
                                <img src={require("../../../images/7. Analisa Bagi Hasil_001.png")} alt="Highlight Laporan Keuangan"/>
                                <div className="buttons-open-img-sectionTwoLK">
                                    <a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="#1c5d99" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                        Klik gambar untuk memperbesar
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="container-box-sectionTwooLK">
                        <div class="content-sectionTwooLK">
                            <div class="header-sectionTwooLK">Analisis Target Penjualan</div>
                            <p>Tingkatkan strategi penjualan dengan menganalisis pencapaian target, mengidentifikasi peluang pertumbuhan, dan mengoptimalkan kinerja tim penjualan untuk mencapai hasil yang maksimal.</p>
                        </div>
                        <div className="content-img-sectionTwooLK">
                            <a onClick={(e) => {e.preventDefault(); handleImageClick(1, 7)}} target="_blank">
                                <img src={require("../../../images/8. Analisa Target Penjualan_001.png")} alt="Highlight Laporan Keuangan"/>
                                <div className="buttons-open-img-sectionTwoLK">
                                    <a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="#1c5d99" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                        Klik gambar untuk memperbesar
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="container-box-sectionTwooLK">
                        <div class="content-sectionTwooLK">
                            <div class="header-sectionTwooLK">Analisis Break Even Point</div>
                            <p>Identifikasi titik impas bisnis Anda dengan menganalisis hubungan antara biaya, harga, dan volume penjualan untuk menentukan kapan investasi mulai menghasilkan keuntungan.</p>
                        </div>
                        <div className="content-img-sectionTwooLK">
                            <a onClick={(e) => {e.preventDefault(); handleImageClick(2, 8)}} target="_blank">
                                <img src={require("../../../images/9. Analisa Break Even Point_001.png")} alt="Highlight Laporan Keuangan"/>
                                <div className="buttons-open-img-sectionTwoLK">
                                    <a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="#1c5d99" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                        Klik gambar untuk memperbesar
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="container-box-sectionTwooLK">
                        <div class="content-sectionTwooLK">
                            <div class="header-sectionTwooLK">Analisis Payback Period</div>
                            <p>Evaluasi waktu yang diperlukan untuk mengembalikan investasi awal dengan menganalisis arus kas dan menentukan periode pengembalian modal yang paling efisien.</p>
                        </div>
                        <div className="content-img-sectionTwooLK">
                            <a onClick={(e) => {e.preventDefault(); handleImageClick(3, 9)}} target="_blank">
                                <img src={require("../../../images/10. Analisa Payback Period_001.png")} alt="Highlight Laporan Keuangan"/>
                                <div className="buttons-open-img-sectionTwoLK">
                                    <a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="#1c5d99" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                        Klik gambar untuk memperbesar
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="container-box-sectionTwooLK">
                        <div class="content-sectionTwooLK">
                            <div class="header-sectionTwooLK">Analisis Return On Evestment</div>
                            <p>Ukurlah efektivitas dan profitabilitas investasi Anda dengan menganalisis rasio pengembalian yang diperoleh dibandingkan dengan biaya yang diinvestasikan.</p>
                        </div>
                        <div className="content-img-sectionTwooLK">
                            <a onClick={(e) => {e.preventDefault(); handleImageClick(4, 10)}} target="_blank">
                                <img src={require("../../../images/11. Analisa Return on Investment_001.png")} alt="Highlight Laporan Keuangan"/>
                                <div className="buttons-open-img-sectionTwoLK">
                                    <a>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="#1c5d99" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                        </span>
                                        Klik gambar untuk memperbesar
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fill-sectionTwooLK-3">
                    <div className="header-sectionTwooLK" style={{ textAlign: 'center'}}>Laporan Pendukung</div>
                    <div className="contant-of-sectionEnd-LK">
                        <div className="container-box-sectionEndFill">
                            <div class="content-sectionEndFill" style={{ width: '100%'}}>
                                <div class="header-sectionTwooLK" style={{ margin: '10px 0'}}>Daftar Aset</div>
                                <p>Inventaris lengkap dari semua aset yang dimiliki oleh bisnis Anda, termasuk properti, peralatan, dan sumber daya lain yang digunakan untuk operasional dan mendukung pertumbuhan bisnis.</p>
                            </div>
                            <div className="content-img-sectionTwooLK" style={{ width: '0%'}}></div>
                        </div>
                        <div className="container-box-sectionEndFill">
                            <div class="content-sectionEndFill" style={{ width: '100%'}}>
                                <div class="header-sectionTwooLK">Buku Besar</div>
                                <p>Aliran kas bisnis Anda melalui laporan yang memberikan gambaran detail tentang pemasukan dan pengeluaran untuk mendukung pengambilan keputusan bisnis yang cerdas.</p>
                            </div>
                            <div className="content-img-sectionTwooLK" style={{ width: '0%'}}></div>
                        </div>
                    </div>
                </div>
            </div>
            {isOverlayOpen && <ImageOverlay src={overlayImgSrc} initialIndex={initialIndex} onClose={closeOverlay} />}
        </div>
    )
}

export default SectionTwooLK;
import "../../App.css"
import React,{} from "react";
import { OpenWhatshapp } from "../helper/whatshapp";

const SectionTwo = React.forwardRef((_, ref) => {

    return(
            <div ref={ref} className="container-sectionTwo">
                <div class="container1-sectionTwo">
                    <h2>Keuntungan Menggunakan Layanan Finfast?</h2>
                    <div class="sectionTwo-cards">
                        <div className="sectionTwo-fill-card">
                            <div class="sectionTwo-card">
                                <img src={require("../../images/main-2.png")} alt="Keuangannya masih fluktuatif"/>
                                <div class="sectionTwo-card-desc">
                                    <h3>Menghemat Waktu dan Biaya</h3>
                                    <p>Mempekerjakan seorang akuntan dapat menghabiskan banyak waktu dan biaya, terutama jika tidak tersedia anggaran yang cukup untuk merekrutnya. Kami hadir untuk memberikan solusi akuntansi yang efisien dan terjangkau untuk mendukung keberhasilan bisnis Anda.</p>
                                </div>
                            </div>
                        </div>
                        <div className="sectionTwo-fill-card">
                            <div class="sectionTwo-card">
                                <img src={require("../../images/main-3.png")} alt="Perlu laporan akurat"/>
                                <div class="sectionTwo-card-desc">
                                    <h3>Efisiensi Operasional</h3>
                                    <p>Dengan mengelola tugas-tugas keuangan dan akuntansi, perusahaan dapat meningkatkan efisiensi operasional dan fokus pada inti bisnis mereka tanpa terganggu oleh kompleksitas administrasi keuangan.</p>
                                </div>
                            </div>
                        </div>
                        <div className="sectionTwo-fill-card">
                            <div class="sectionTwo-card">
                                <img src={require("../../images/main-4.png")} alt="Belum ada budget untuk hire Akuntan"/>
                                <div class="sectionTwo-card-desc">
                                    <h3>Analisis dan Laporan Keuangan</h3>
                                    <p>Kami menyediakan analisis mendalam tentang kinerja keuangan perusahaan, memberikan wawasan yang penting untuk evaluasi strategis dan pengambilan keputusan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container2-sectionTwo">
                    <div className="conatiner2-fill-sectionTwo">
                        <h2>Dipercaya oleh 100+ pebisnis skala kecil dan menengah.</h2>
                        {/* <div class="carousel">
                            <div class="carousel-inner">
                                <img src={require("../../images/umkm1.jpg")} alt="Nongkrong Coffee"/>
                                <img src={require("../../images/umkm2.jpg")} alt="Ray's"/>
                                <img src={require("../../images/umkm3.jpg")} alt="Saho" />
                                <img src={require("../../images/umkm4.jpg")} alt="Tropical Point"/>
                                <img src={require("../../images/umkm5.jpg")} alt="Fitbreak"/>
                                <img src={require("../../images/umkm6.jpg")} alt="Diponegoro"/> 
                                <img src={require("../../images/umkm7.jpg")} alt="W.K. Poniran"/>
                                <img src={require("../../images/umkm8.png")} alt="W.K. Poniran"/>
                                <img src={require("../../images/umkm9.png")} alt="W.K. Poniran"/>
                                <img src={require("../../images/umkm10.png")} alt="W.K. Poniran"/>
                                <img src={require("../../images/umkm11.png")} alt="W.K. Poniran"/>
                                <img src={require("../../images/umkm12.png")} alt="W.K. Poniran"/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
    )
})

export default SectionTwo;
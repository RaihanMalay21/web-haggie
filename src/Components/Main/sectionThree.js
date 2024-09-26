import "../../App.css"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function SectionThree() {
    return (
        <div className="container-sectionThree">
            <div class="container-fill-sectionThree">
                <h2>Cara kerja ZOFI</h2>
                <p>Dapatkan laporan keuangan yang akurat hanya dengan 3 langkah sederhana!</p>
                <div class="card-container-sectionThree">
                    <div class="card-sectionThree">
                        <div class="card-number-sectionThree">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill=" #1c5d99" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z"/>
                            </svg>
                        </div>
                        <div class="card-icon-sectionThree">
                            <img src={require("../../images/main-5.png")} alt="Report"/>
                        </div>
                        <div class="card-content-sectionThree">
                            <p>Berikan akses sekali ke akun POS, pengiriman online, atau e-commerce.</p>
                        </div>
                    </div>
                    <div class="card-sectionThree">
                        <div class="card-number-sectionThree">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill=" #1c5d99" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/>
                            </svg>
                        </div>
                        <div class="card-icon-sectionThree">
                            <img src={require("../../images/caraKerja2.png")} alt="Telegram Icon"/>
                        </div>
                        <div class="card-content-sectionThree">
                            <p>Mohon admin Anda untuk mengunggah file-file transaksi ke dalam grup Telegram:</p>
                            <div className="card-tittle-sectionThree" style={{ textAlign: 'center'}}>
                                <ol type="a">
                                    <li>Nota belanja harian</li>
                                    <li>Mutasi rekening mingguan</li>
                                    <li>Stock opname bulanan</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="card-sectionThree">
                        <div class="card-number-sectionThree">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#1c5d99" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/>
                            </svg>
                        </div>
                        <div class="card-icon-sectionThree">
                            <img src={require("../../images/main-7.png")} alt="Report Icon"/>
                        </div>
                        <div class="card-content-sectionThree">
                            <p>Tim kami akan merapikan data-data tersebut serta memasukkan dan mengelolanya. Hasilnya akan tersedia dalam format PDF.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree;
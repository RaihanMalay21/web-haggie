import "../../App.css";

function SectionTwoKD() {
    return(
        <div class="container-sectionTwoKD">
            <div style={{ margin: "5rem 0"}}>
                <div className="container-sectionTwoKD-head">
                    <h2>Perbandingan Finfast dengan solusi laporan keuangan lainnya</h2>
                    <p style={{ margin: "1.5rem 0"}}>*Layar smartphone geser tabel untuk lihat perbandingan</p>
                </div>
                <div class="table-container-sectionTwoKD">
                    <table>
                        <thead>
                            <tr className="head-table-sectionTwoKD">
                                <th>Solusi Laporan Keuangan</th>
                                <th>Detail dan Akurasi</th>
                                <th>Kemudahan</th>
                                <th>Kustomisasi</th>
                                <th>Biaya</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="desc-table-sectionTwoKD">Membandingkan saldo rekening pada akhir setiap bulan tanpa menghasilkan laporan keuangan.</td>
                                <td class="red">
                                    <div className="icon-text">
                                        <p>Tidak detail, Hanya memberikan informasi apakah saldo mengalami penurunan atau kenaikan</p>
                                    </div>
                                </td>
                                <td class="green">
                                    <div className="icon-text">
                                        <p>Cukup periksa rekening</p>
                                    </div>
                                </td>
                                <td class="red">
                                    <div className="icon-text">
                                        <p>Tidak ada kustomisasi</p>
                                    </div>
                                </td>
                                <td class="green">
                                    <div className="icon-text">
                                        <p>Tanpa biaya</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="desc-table-sectionTwoKD">Pembukuan Sendiri (menggunakan excel atau software akuntansi)</td>
                                <td class="orange">
                                    <div className="icon-text">
                                        <p>Umumnya, ketepatan laporan dapat terganggu jika pemilik usaha tidak memiliki pemahaman mendalam dalam bidang akuntansi</p>
                                    </div>
                                </td>
                                <td class="red">
                                    <div className="icon-text">
                                        <p>
                                        Dibutuhkan waktu untuk memasukkan dan mempelajari akuntansi</p>
                                    </div>
                                </td>
                                <td class="green">
                                    <div className="icon-text">
                                        <p>Bisa kustom sesuai keinginan</p>
                                    </div>
                                </td>
                                <td class="green">
                                    <div className="icon-text">
                                        <p>Tidak ada biaya, atau biaya yang sangat kecil (untuk langganan software)</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="desc-table-sectionTwoKD">Tim Akuntansi Internal</td>
                                <td class="green">
                                    <div className="icon-text">
                                        <p>Laporan yang komprehensif dan tepat</p>
                                    </div>
                                </td>
                                <td class="orange">
                                    <div className="icon-text">
                                        <p>
                                        Memberikan laporan memang lebih mudah karena cukup menyediakan data. Namun, merekrut dan melatih staf serta mengganti mereka jika ada yang keluar membutuhkan upaya yang signifikan</p>
                                    </div>
                                </td>
                                <td class="green">
                                    <div className="icon-text">
                                        <p>Bisa kustom sesuai keinginan</p>
                                    </div>
                                </td>
                                <td class="red">
                                    <div className="icon-text">
                                        <p>
                                        Gaji untuk seorang akuntan berkisar sekitar 5 juta per bulan, dan akan lebih tinggi jika diperlukan beberapa orang sekaligus dengan supervisor</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="desc-table-sectionTwoKD">Finfast</td>
                                <td class="green">
                                    <div className="icon-text">
                                        <p>Laporan detail dan akurat</p>
                                    </div>
                                </td>
                                <td class="green">
                                    <div className="icon-text">
                                        <p>Cukup upload file, laporan jadi</p>
                                    </div>
                                </td>
                                <td class="orange">
                                    <div className="icon-text">
                                        <p>Kustomisasi terbatas, belum semua bidang usaha terfasilitasi</p>
                                    </div>
                                </td>
                                <td class="orange">
                                    <div className="icon-text">
                                        <p>Diperlukan biaya yang lebih tinggi, Namun jauh lebih murah dari pada menggaji akuntan internal</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SectionTwoKD;
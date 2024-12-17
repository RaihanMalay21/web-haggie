import "../../App.css";

function SectionThreeKD() {
    return(
        <div className="container-sectionThreeKD">
            <div className="container-head-sectionThreeKD">
                <h1>Finfast solusi yang paling cocok untuk bisnis skala kecil-menengah yang mengalami fluktuasi keuangan atau masih dalam fase kerugian</h1>
                <h2>Solusi laporan keuangan yang paling sesuai dengan segmen bisnis yang bersangkutan:</h2>
                <p>*Layar smartphone geser tabel untuk lihat perbandingan</p>
            </div>
            <div class="table-container-sectionThreeKD">
                <table>
                    <thead className="head-table-sectionThreeKD">
                        <tr>
                            <th></th>
                            <th colspan="3">Skala Bisnis</th>
                        </tr>
                        <tr>
                            <th style={{width: "25%"}}>Kondisi Keuangan</th>
                            <th style={{width: "25%"}}>Mikro</th>
                            <th  style={{width: "25%"}}>Kecil-Menengah</th>
                            <th  style={{width: "25%"}}>Besar</th>
                        </tr>
                    </thead>
                    <tbody className="body-table-sectionThreeKD">
                        <tr>
                            <td>
                                <p style={{ fontWeight: 'bold'}}>Fluktuatif atau Rugi </p>
                                <p> Diperlukan informasi keuangan yang terperinci dan akurat untuk mengidentifikasi kebocoran</p>
                            </td>
                            <td><p>Pembukuan sendiri</p></td>
                            <td class="highlight"><p>Finfast</p></td>
                            <td><p>Akuntan Internal</p></td>
                        </tr>
                        <tr>
                            <td>
                                <p style={{ fontWeight: 'bold'}}>Profitable dan stabil</p>
                                <p>Pembukuan Sendiri (menggunakan spreadsheet atau software akuntansi)</p>
                            </td>
                            <td><p>Cek saldo rekening</p></td>
                            <td><p>Pembukuan sendiri</p></td>
                            <td><p>Akuntan Internal</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SectionThreeKD;
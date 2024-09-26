import "../../App.css"
import React,{ useState } from "react";

function SectionTwoHarga() {
    const [box12Mounts, setBox12Mounts] = useState(true);
    const [box3Mounts, setBox3Mounts] = useState(false);
    const [box6Mounts, setBox6Mounts] = useState(false);

    const handleBox12Mounts = () => {
        setBox12Mounts(true);
        setBox6Mounts(false);
        setBox3Mounts(false);
    }

    const handleBox6Mounts = () => {
        setBox12Mounts(false);
        setBox6Mounts(true);
        setBox3Mounts(false);
    }

    const handleBox3Mounts = () => {
        setBox12Mounts(false);
        setBox6Mounts(false);
        setBox3Mounts(true);
    }

    const style = {
        mostSelected: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '20px',
            padding: '5px 10px',
            backgroundColor: 'green',
            color: 'white',
            borderRadius: '5px'
        }
    }

    return(
        <div className="container-sectionTwoHarga">
            <div className="container-fill-sectionTwoHarga">
                <div className="container-head-sectionTwoHarga">
                    <h2>Pilihan Paket yang Tepat untuk Anda</h2>
                    <div className="buttons-choise-harga">
                        <button style={{ marginRight: '15px', backgroundColor: box12Mounts ? '#1c5d99' : '#f0f4f7', color: box12Mounts ? '#fff' : '#1c5d99'}} onClick={handleBox12Mounts}>12 Bulanan</button>
                        <button style={{  marginRight: '15px', backgroundColor: box6Mounts ? '#1c5d99' : '#f0f4f7', color: box6Mounts ? '#fff' : '#1c5d99'}} onClick={handleBox6Mounts}>6 Bulanan</button>
                        <button style={{  backgroundColor: box3Mounts ? '#1c5d99' : '#f0f4f7', color: box3Mounts ? '#fff' : '#1c5d99'}} onClick={handleBox3Mounts}>3 Bulanan</button>
                    </div>
                </div>
                <div className="container-body-sectionTwoHarga">
                    <div className="box-harga-left" style={{ border: box12Mounts ? "2px solid green" : "2px solid #1c5d99"}}>
                        { box12Mounts && 
                            <div style={style.mostSelected}>
                                <h8>most selected</h8>
                            </div>
                        }
                        <div className="box-harga-head">
                            <h2>Asisten Keuangan</h2>
                            <p>Harga berdasarkan omzet bulanan, mulai Dari</p>
                            { box12Mounts && (
                                <div>
                                    <h2 style={{ display: 'flex'}}>Rp862,500<p style={{marginTop: '12px', fontSize: '1.2rem' }}>/bulan</p></h2>
                                    <p className="hemat" style={{ color: box12Mounts ? 'red' : 'initial' }}>Hemat 25%</p>
                                </div>
                            )}
                            { box6Mounts && (
                                <div>
                                    <h2 style={{ display: 'flex'}}>Rp1,000,000<p style={{marginTop: '12px', fontSize: '1.2rem' }}>/bulan</p></h2>
                                    <p className="hemat" style={{ color: box6Mounts ? 'red' : 'initial' }}>Hemat 10%</p>
                                </div>
                            )}
                            { box3Mounts && (
                                <div>
                                    <h2 style={{ display: 'flex'}}>Rp1,150,000<p style={{marginTop: '12px', fontSize: '1.2rem' }}>/bulan</p></h2>
                                </div>
                            )}
                            <p>Untuk semua jenis usaha yang mulai scale up</p>
                        </div>
                        <div className="box-harga-body">
                            <h3>Laporan Keuangan</h3>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Neraca
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Neraca Detail
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Laba Rugi
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Laba Rugi Detail
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Laba Rugi Bulanan
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Arus Kas
                            </p>
                        </div>
                        <div className="box-harga-end">
                            <h3>Analisis Bisnis</h3>
                            <p>Analisis Bagi Hasil, Analisis Target Penjualan, Analisis Break Even Point, Analisis Payback Period, dan Analisis Return On Evestment</p>
                        </div>
                        <div className="box-harga-end" style={{marginTop: "25px"}}>
                            <h3>Laporan Pendukung</h3>
                            <p>Daftar Aset dan Buku Besar</p>
                        </div>
                    </div>
                    {/* <div className="box-harga-right">
                        <div className="box-harga-head">
                            <h2>Manajer Keuangaan</h2>
                            <p>Harga berdasarkan omzet bulanan, mulai Dari</p>
                            { box12Mounts && (
                                <div>
                                    <h2 style={{ display: 'flex'}}>Rp1,350,000<p style={{ marginTop: '12px', fontSize: '1.2rem' }}>/bulan</p></h2>
                                    <p className="hemat">Hemat 25%</p>
                                </div>
                            )}
                            { box3Mounts && (
                                <div>
                                    <h2 style={{ display: 'flex'}}>Rp1,800,000<p style={{ marginTop: '12px', fontSize: '1.2rem' }}>/bulan</p></h2>
                                </div>
                            )}
                            <p>Untuk semua jenis usaha yang ingin analisis lebih mendalam</p>
                        </div>
                        <div className="box-harga-body">
                            <h3>Laporan Keuangan</h3>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#1c5d99" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Neraca
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#1c5d99" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Neraca Detail
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#1c5d99" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Laba Rugi
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#1c5d99" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Laba Rugi Detail
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#1c5d99" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Laba Rugi Bulanan
                            </p>
                            <p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#1c5d99" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                    </svg>
                                </span>
                                Arus Kas
                            </p>
                        </div>
                        <div className="box-harga-end">
                            <h3>Analisis Bisnis</h3>
                            <p>Semua analisis bisnis pada paket Asisten Keuangan ditambah HPP real per menu, menu engineering, kontrol pemakaian bahan baku, pareto bahan baku, BEP, Payback period, dan ROI</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SectionTwoHarga;
import React from "react";
import Navbar from "../Navbar";
import Footer from "../footer";


export const PageLayananAudit = () => {
    const style = {
        section: {
            font: 'arial, sans-serif'
        },
        sectionOne: {
            backgroundColor: 'rgb(9, 76, 79)',
            width: '100%',
            paddingTop: '15vh',
            textAlign: 'center'
        },
        sectionOneFill: {
            width: '80%',
            margin: 'auto',
            paddingBottom: '7.5vh'
        },
        parentText: {
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            borderRadius: '5px',
            backgroundColor: '#f0f4f7',
            padding: '20px',
            boxShadow: '1.5px 3px 8px rgba(169, 169, 169, 0.8)',
            zIndex: '100'
        },
        Text : {
            fontSize: '18px',
            marginTop: '20px',
            margin: '0 2rem',
            marginTop: '20px',
            color: '#333',
            textAlign: 'center',
        }
    }
    return(
        <div>
            <Navbar/>
            <div style={style.section}>
                <div style={style.sectionOne}>
                    <div style={style.sectionOneFill}>
                        <h2 style={{ color: 'white'}}>Mengapa Memilih Layanan General Audit Kami?</h2>
                        <p style={{color: 'white', fontSize: '19px', marginTop: '10px'}}>Kami memahami bahwa transparansi dan akuntabilitas adalah kunci dalam menjalankan bisnis yang sukses. Oleh karena itu, kami menawarkan layanan general audit yang dirancang untuk memberikan Anda gambaran menyeluruh tentang kesehatan keuangan perusahaan Anda. Dengan audit yang komprehensif, kami membantu Anda mengidentifikasi area yang memerlukan perbaikan dan memastikan bahwa laporan keuangan Anda sesuai dengan standar akuntansi yang berlaku.
                        </p>
                    </div>
                </div>
                <div className="container-fill-sectionTwooLK">
                    <div className="container-fill-sectionTwooLK-1">
                        <div className="header-sectionTwooLK" style={{ textAlign: 'center'}}>Keunggulan Layanan Kami</div>
                        <div className="container-box-sectionTwooLK">
                            <div class="content-sectionTwooLK" style={{width: '100%', textAlign: 'center'}}>
                                <div class="header-sectionTwooLK" style={{ fontSize: '25px' }}>Audit Menyeluruh</div>
                                <p>Kami melakukan audit yang mendalam dan menyeluruh untuk memastikan semua aspek keuangan perusahaan Anda diperiksa dengan teliti.</p>
                            </div>
                            <div className="content-img-sectionTwooLK" style={{width:'0%'}}></div>
                        </div>
                        <div className="container-box-sectionTwooLK">
                            <div class="content-sectionTwooLK" style={{width: '100%', textAlign: 'center'}}>
                                <div class="header-sectionTwooLK" style={{ fontSize: '25px' }}>Tim Profesional</div>
                                <p>Tim kami terdiri dari auditor berpengalaman yang memiliki sertifikasi dan keahlian dalam berbagai bidang akuntansi dan keuangan.</p>
                            </div>
                            <div className="content-img-sectionTwooLK" style={{width:'0%'}}></div>
                        </div>
                        <div className="container-box-sectionTwooLK">
                            <div class="content-sectionTwooLK" style={{width: '100%', textAlign: 'center'}}>
                                <div class="header-sectionTwooLK" style={{ fontSize: '25px' }}>Laporan yang Jelas dan Terperinci</div>
                                <p>Kami menyediakan laporan audit yang mudah dipahami dan mencakup semua temuan serta rekomendasi untuk perbaikan.</p>
                            </div>
                            <div className="content-img-sectionTwooLK" style={{width:'0%'}}></div>
                        </div>
                        <div className="container-box-sectionTwooLK">
                            <div class="content-sectionTwooLK" style={{width: '100%', textAlign: 'center'}}>
                                <div class="header-sectionTwooLK" style={{ fontSize: '25px' }}>Kepatuhan terhadap Standar</div>
                                <p>Kami memastikan bahwa audit yang kami lakukan sesuai dengan standar akuntansi yang berlaku, seperti PSAK dan IFRS.</p>
                            </div>
                            <div className="content-img-sectionTwooLK" style={{width:'0%'}}></div>
                        </div>
                    </div>
                </div>
                <div className="container-fill-sectionTwooLK">
                    <div className="header-sectionTwooLK" style={{ textAlign: 'center'}}>Keunggulan Layanan Kami</div>
                    <div style={style.parentText}> 
                        <div style={style.Text}>
                            <p>Untuk memberikan layanan audit yang terbaik, kami telah menjalin kemitraan dengan beberapa kantor akuntan publik. Dengan dukungan dari para ahli ini, kami dapat memastikan bahwa proses audit berjalan lancar dan hasilnya dapat diandalkan. Kemitraan ini juga memungkinkan kami untuk memberikan layanan yang lebih komprehensif dan sesuai dengan kebutuhan spesifik perusahaan Anda.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fill-sectionTwooLK" style={{marginBottom: '10vh'}}>
                    <div className="header-sectionTwooLK" style={{ textAlign: 'center'}}>Hubungi Kami</div>
                    <div style={style.parentText}>
                        <div style={style.Text}>
                            <p>Jika Anda tertarik untuk mengetahui lebih lanjut tentang layanan general audit kami atau ingin menjadwalkan konsultasi, jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda mencapai transparansi dan akuntabilitas yang lebih baik dalam bisnis Anda.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}
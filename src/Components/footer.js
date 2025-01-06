import React from 'react';
import '../App.css'; // Make sure the path to your CSS file is correct
import { useNavigate } from 'react-router-dom';
import { OpenWhatshapp } from './helper/whatshapp';

function Footer() {
    const navigate = useNavigate()

    const handleNavigate = (path) => {
        navigate(path)
    }
    return (
        <footer>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-section logo-section">
                        <img src={require('../images/Logo FF 2.1.png')} alt="Haggie Logo" className="logo" style={{ marginBottom: '2rem'}} />
                        {/* <p style={{ fontSize: '16px'}}>Pusing bikin laporan keuangan bisnis? Zona Finance aja!</p> */}
                    </div>
                    <div className="footer-section">
                        <h4 style={{ fontWeight: 'bold'}}>Bantuan Pengguna</h4>
                        <ul>
                            <li><a onClick={() => handleNavigate("/why")}>Kenapa Finfast?</a></li>
                            <li><a onClick={() => handleNavigate("/kontak")}>Kontak</a></li>
                            <li><a onClick={OpenWhatshapp}>Hubungi Kami</a></li>
                            {/* <li><a onClick={() => handleNavigate("/Haggie.Acc/kontak")}>Blog</a></li> */}
                        </ul>
                    </div>
                    {/* <div className="footer-section">
                        <h4>Haggie</h4>
                        <address>
                            MTH Square Ground Floor (GF) A4, <br />
                            Jl. Letjen M.T. Haryono Kav. 10, <br />
                            Desa/Kelurahan Bidara Cina, <br />
                            Kec. Jatinegara Jakarta Timur, <br />
                            DKI Jakarta 13330 <br />
                            Indonesia <br />
                            (021) 58905002 <br />
                            0812 2200 3011 <br />
                        </address>
                    </div> */}
                    <div className="footer-section">
                        <h4 className="h4-sosial-media-footer" style={{ fontWeight: 'bold'}}>Ikuti Kami</h4>
                        <ul className="social-media-footer">
                            <li>
                                <a href="https://www.instagram.com/finfast.id" target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <img className='image-footer-social-media' src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="https:// www.tiktok.com/@finfast.id?_t=8sdqcVMkILP&_r=1" target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <img className='image-footer-social-media'  src='https://cdn-icons-png.flaticon.com/512/3046/3046121.png'/>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://adm.finfast@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <span>
                                    <img className='image-footer-social-media'  src='https://cdn-icons-png.flaticon.com/512/732/732200.png'/>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.link/4fk8qj">
                                    <span>
                                    <img className='image-footer-social-media' src='https://cdn-icons-png.flaticon.com/512/733/733585.png'/>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Finfast. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

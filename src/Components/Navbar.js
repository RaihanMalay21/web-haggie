import React,{ useState, useEffect } from 'react';
import '../App.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { OpenWhatshapp } from './helper/whatshapp';

const Navbar = ({ sectionTwoRef }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuProduct, setIsMenuProduct] = useState(false);
    const [isMenuResource, setIsMenuResource] = useState(false);
    const [ isScrolled, setIsScrolled ] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const menuProduct = () => {
        setIsMenuProduct(!isMenuProduct);
        setIsMenuResource(false);
    } 

    const menuResource = () => {
        setIsMenuResource(!isMenuResource);
        setIsMenuProduct(false);
    }
 
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // handle navigate 
    const HandleNavigate = (path) => {
        navigate(path);
    }

    useEffect(() => {
        const handleScroll = () => {

            if (sectionTwoRef.current) {
                // Change based on the height of sectionOne
                if (sectionTwoRef.current && window.scrollY > sectionTwoRef.current.offsetTop - 120) { // Adjust offset as needed
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            } else {
                setIsScrolled(false);
            }

        };

        
        if (location.pathname === "/Zofi") {
            window.addEventListener('scroll', handleScroll);
        }
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const currentLocation = location.pathname;
        if (currentLocation !== ("/Zofi" || "/zofi")) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }, [location.pathname]);

    return (
        <div>
            <nav className={isScrolled ? 'navbar-scrolled' : 'navbar'}>
                <div className="fiil-navbar">
                    <div className="navbar-logo">
                        <a style={{ color: "#1c5d99", fontSize: "2rem", width: "100%"}} onClick={() => HandleNavigate('/Zofi')}>{ isScrolled ? <img src={require("../images/Logo_ZF_2.png")}/> : null}</a>
                    </div>
                    <div className={ isScrolled ? `navbar-menu ${isMenuOpen ? 'open' : ''}` : `navbar-menu ${isMenuOpen ? 'notScrolled': ''}`}>
                        <ul>
                            <li><a onClick={() => HandleNavigate('/Zofi/whyZofi')}>Kenapa Zofi?</a></li>
                            <li>
                                <a onClick={menuProduct}>Produk
                                    <svg className='arrow' style={{ alignItems: 'center', paddingBottom: '2px'}} width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 8.5L12 15L17.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </a>
                                { isMenuProduct && (
                                <div className={ isMenuOpen ? 'dropdown-menu-product-hamburgerMenu' :'dropdown-menu-product'} style={ isScrolled ? {backgroundColor: 'white'}: {}}>    
                                    <li><a onClick={() => HandleNavigate('/Zofi/produk/laporan/keuangan')}>Laporan Keuangaan</a></li>
                                    <li><a onClick={() => HandleNavigate('/Zofi/produk/layanan/pajak')}>Layanan Pajak</a></li>
                                    <li><a onClick={() => HandleNavigate('/Zofi/produk/layanan/audit')}>Layanan Audit</a></li>
                                </div>
                                )}
                            </li>
                            <li><a onClick={() => HandleNavigate('/Zofi/harga')}>Harga</a></li>
                            {/* <li><a>Blog</a></li> */}
                            <li><a onClick={() => HandleNavigate('/Zofi/tentang/kami')}>Tentang Kami</a></li>
                            <li><a onClick={() => HandleNavigate('/Zofi/kontak')}>Kontak</a></li>
                        </ul>
                    </div>
                    <div className="navbar-buttons">
                        <a onClick={OpenWhatshapp} className="btn btn-demo">Login Demo</a>
                        <a onClick={OpenWhatshapp} className="btn btn-contact">Hubungi Kami</a>
                    </div>
                    <div className="navbar-toggle" onClick={toggleMenu} style={ isScrolled ? {color: 'black'}: {color: 'white'}}>
                        ☰
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
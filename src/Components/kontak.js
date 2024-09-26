import "../App.css"
import Navbar from "./Navbar";
import SectionOneContact from "./Kontak/sectionOne-kontak";
// import SectionTwooContact from "./Kontak/sectionTwo-kontak";
import Footer from "./footer";

function Kontak() {
    return(
        <div>
            <Navbar/>
            <SectionOneContact/>
            {/* <SectionTwooContact/> */}
            <Footer/>
        </div>
    )
}

export default Kontak;

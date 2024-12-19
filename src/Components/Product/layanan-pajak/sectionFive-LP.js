import { useState } from "react";
import "../../../App.css";
import img1 from "../../../images/Logo DT.png";
import img2 from "../../../images/Logo MC.png";
import img3 from "../../../images/Logo MS.png";

function SectionFiveLP() {
    const [isIndex, setIndex] = useState(0);
    const reviews = [
        {
          image: img1, 
          comment: "“Dengan Finfast, saya tidak perlu lagi pusing mengurus laporan keuangan setiap bulan!”",
          name: "Devtex"
        },
        {
          image: img2, 
          comment: "“Sangat membantu UMKM seperti saya dalam pengelolaan pajak dan keuangan.”",
          name: "Collection"
        },
        {
          image: img3, 
          comment: "“Proses keuangan jadi lebih mudah, cepat, dan aman dengan Finfast.”",
          name: "Mandi Shop"
        }
      ];

      const handelCommentLeft = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
      };

      const handleCommentRight = () => {
        setIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1 ));
      };

    return(
        <div className="container-sectionFiveLP"> 
            <div className="container-fill-sectionFiveLP">
                <h2>Kata pemilik umkm tentang layanan pajak Finfast</h2>
                <div className="container-box-sectionFiveLP" style={{ backgroundColor: 'white'}}>
                    <div style={{ alignContent: 'center'}}>
                        <svg className="svg-icon"  onClick={() => handelCommentLeft()} style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                        </svg>
                    </div>
                    <div className="content-comment-lp">
                        <img src={reviews[isIndex].image}/>
                        <p style={{ fontSize: "1.2rem"}}>{reviews[isIndex].comment}</p>
                        <p>{reviews[isIndex].name}</p>
                    </div>
                    <div style={{ alignContent: 'center'}}>
                        <svg className="svg-icon"  style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path onClick={() => handleCommentRight()} d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFiveLP;
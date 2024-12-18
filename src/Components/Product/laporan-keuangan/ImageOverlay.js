import React, { useState } from 'react';
import '../../../App.css';
import LK1 from "../../../images/1_Neraca_001.png";
import LK2 from "../../../images/2_Neraca Detail_001.png";
import LK3 from "../../../images/3_LabaRugi_001.png";
import LK4 from "../../../images/4_LabaRugi Detail_001.png";
import LK5 from "../../../images/5. Laba Rugi Bulanan_001.png";
import LK6 from "../../../images/6. Arus Kas_001.png"
import AB1 from "../../../images/7. Analisa Bagi Hasil_001.png";
import AB2 from "../../../images/8. Analisa Target Penjualan_001.png";
import AB3 from "../../../images/9. Analisa Break Even Point_001.png";
import AB4 from "../../../images/10. Analisa Payback Period_001.png";
import AB5 from "../../../images/11. Analisa Return on Investment_001.png";
// import AB5 from "../../../images/analisisbisnis5.jpg";
// import AB6 from "../../../images/analisisbisnis6.jpg";
// import AB7 from "../../../images/analisisbisnis7.jpg";
// import AB8 from "../../../images/analisisbisnis8.jpg";
// import AB9 from "../../../images/analisisbisnis9.jpg";

const allImages = {
  LK: [LK1, LK2, LK3, LK4, LK5, LK6],
  AB: [AB1, AB2, AB3, AB4, AB5],
};

function ImageOverlay({ src, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  let imagesToShow = allImages.AB;  // default to AB images
  if (src >= 0 && src <= 5) {
    imagesToShow = allImages.LK;
  }


  const changeImage = (index) => {
    if (index >= imagesToShow.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(imagesToShow.length - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="overlay" style={{zIndex: "9999"}}>
      <span className="close" onClick={onClose}>&times;</span>
      <div className="container-main-overlay">
        <div className="overlay-content">
          <button className="prev" onClick={() => changeImage(currentIndex - 1)}>&#10094;</button>
          <div className="slider">
            <img id="mainImage" src={imagesToShow[currentIndex]} alt="Overlay"/>
          </div>
          <button className="next" onClick={() => changeImage(currentIndex + 1)}>&#10095;</button>
        </div>
        <div className="thumbnails">
            {imagesToShow.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  onClick={() => changeImage(index)}
                  alt={`Thumbnail ${index + 1}`}
                  className={index === currentIndex ? 'active-thumbnail' : ''}
                />
            ))}
          </div>
      </div>
    </div>
  );
}

export default ImageOverlay;

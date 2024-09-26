import React from 'react';
import '../../../App.css';

function ImageItem({ image, onClick }) {
  return (
    <a href="#" className="image-link" onClick={(e) => { e.preventDefault(); onClick(image.src); }}>
      <img src={require(image.src)} alt={image.alt} />
      <div className="buttons-open-img-sectionTwooLK">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22.5" height="22.5" fill="green" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </span>
        Klik gambar untuk memperbesar
      </div>
    </a>
  );
}

export default ImageItem;

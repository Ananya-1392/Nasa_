import React from 'react';

const images = [
    './icons/DSC_0949.JPG',
    // './icons/DSC_0957.jpg',
    // './icons/DSC_0959.jpg',
    './icons/DSC_0966.JPG',
];

const Gallery = () => {
    return (
        <div className="gallery">
            {images.map((imageSrc, index) => (
                <div key={index} className="card">
                    <img src={imageSrc} alt={`Image ${index}`} className="card-image" />
                </div>
            ))}
        </div>
    );
};

export default Gallery;

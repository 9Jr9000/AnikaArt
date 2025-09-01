import React from 'react';

const Gallery = ({ artworks }) => {
    return (
        <div className="gallery">
            {artworks.map((artwork, index) => (
                <div key={index} className="gallery-item">
                    <img src={artwork.image} alt={artwork.title} />
                    <h3>{artwork.title}</h3>
                    <p>{artwork.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Gallery;
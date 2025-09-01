// This file contains the JavaScript code for the website. It handles interactivity and dynamic content on the webpage.

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // Function to fetch and display artwork
    function loadArtwork() {
        // Sample artwork data
        const artworks = [
            { title: 'Red Eye', image: 'C:\Users\Jr\GitHub\AnikaArt\art-portfolio\src\scripts\Anika.jpg' },
            { title: 'Menu', image: 'path/to/image2.jpg' },
            { title: 'IDK testing', image: 'path/to/image3.jpg' },
            { title: 'Art 4', image: 'path/to/image3.jpg' },
        ];

        artworks.forEach(art => {
            const artElement = document.createElement('div');
            artElement.classList.add('art-item');
            artElement.innerHTML = `
                <img src="${art.image}" alt="${art.title}">
                <h3>${art.title}</h3>
            `;
            gallery.appendChild(artElement);
        });
    }

    loadArtwork();
});
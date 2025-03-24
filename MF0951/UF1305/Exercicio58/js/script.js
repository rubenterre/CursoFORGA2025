const albums = [
    { src: "./assets/caratulas/albums/Acoustica.jpg", category: "albums", title: "Still Loving You" },
    { src: "./assets/caratulas/albums/Blackout.jpg", category: "compilation", title: "Best of Scorpions" },
    { src: "./assets/caratulas/albums/comeblack-scorpions.jpg", category: "albums", title: "Comeblack Scorpions" },
    { src: "./assets/caratulas/albums/AnimalMagnetism.jpg", category: "albums", title: "Animal Magnetism" },
    { src: "./assets/caratulas/albums/CrazyWorld.jpg", category: "albums", title: "Crazy World" },
    { src: "./assets/caratulas/albums/EyeIIEye.jpg", category: "albums", title: "Eyell Eye" },
    { src: "./assets/caratulas/albums/FaceTheHeat.jpg", category: "albums", title: "Face the heat" },
    { src: "./assets/caratulas/albums/LoveAtFirstSting.jpg", category: "albums", title: "Love The First Sting" },
    { src: "./assets/caratulas/albums/Lovedrive.jpg", category: "albums", title: "Lovedrive" },
    { src: "./assets/caratulas/albums/MomentOfGlory.jpg", category: "albums", title: "Moment of glory" },
    { src: "./assets/caratulas/albums/PureInstinct.jpg", category: "albums", title: "Pure Instinct" },
    { src: "./assets/caratulas/albums/ReturnToForever.jpg", category: "albums", title: "Return to forever" },
    { src: "./assets/caratulas/albums/RockBeliever.jpg", category: "albums", title: "Rock Believer" },
    { src: "./assets/caratulas/albums/SavageAmusement.jpg", category: "albums", title: "Savage Amusement" },
    { src: "./assets/caratulas/albums/scorpions-humanity-hour.jpg", category: "albums", title: "Scorpions Humanity Hour" },
    { src: "./assets/caratulas/albums/StingInTheTail.jpg", category: "albums", title: "Sting in the tail" },
    { src: "./assets/caratulas/compilations/BEST.jpg", category: "compilations", title: "BEST" },
    { src: "./assets/caratulas/compilations/Millennium.jpg", category: "compilations", title: "Millennium" },
    { src: "./assets/caratulas/dvd/Live2011GetYourStingandBlackout.jpg", category: "dvd", title: "Live 2011 - Get Your Sting and Blackout" },
    { src: "./assets/caratulas/dvd/MOSCOW.jpg", category: "dvd", title: "Moscow" },
    { src: "./assets/caratulas/dvd/MTV-Unplugged-Live-In-Athens.jpg", category: "dvd", title: "MTV Unplugged Live In Athens" },
    { src: "./assets/caratulas/dvd/SCORPIONS_Unbreakable.jpg", category: "dvd", title: "SCORPIONS Unbreakable" },
    { src: "./assets/caratulas/dvd/scorpionsliveatwacken.jpg", category: "dvd", title: "Scorpions - Live at Wacken" },
    { src: "./assets/caratulas/dvd/UNBREAKABLE.jpg", category: "dvd", title: "Scorpions - Unbreakable" }
  ];

  
const gallery = document.getElementById('gallery');
const filterButtons = document.querySelectorAll('.filter-btn');

function createAlbumElement(album) {
  const albumElement = document.createElement('div');
  albumElement.className = `album-item ${album.category}`;
  albumElement.innerHTML = `
    <img src="${album.src}" alt="${album.title}">
    <p class="album-title" >${album.title}</p>
  `;
  return albumElement;
}

function displayAlbums(filter = 'all') {
  gallery.innerHTML = '';
  albums.forEach(album => {
    if (filter === 'all' || album.category === filter) {
      gallery.appendChild(createAlbumElement(album));
    }
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    displayAlbums(button.getAttribute('data-filter'));
  });
});


displayAlbums();

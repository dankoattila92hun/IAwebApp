// Kereső mező és kereső gomb constructor deklarálása
const searchInput = document.querySelector('.form-control');
const searchBtn = document.querySelector('.search-btn');

// Alapértelmezett tulajdonságban a kereső beviteli mező rejtett állapotú
searchInput.style.display = 'none';

// A kereső gomb megkattintásával kinyitja a kereső beviteli mezőt és láthatóvá teszi a felhasználó számára
searchBtn.addEventListener('click', function() {
  if (searchInput.style.display === 'none') {
    searchInput.style.display = 'block';
  } else {
    searchInput.style.display = 'none';
  }
});


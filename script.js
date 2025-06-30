const korEl = document.getElementById('kor');
const arEl = document.getElementById('ar');
const enEl = document.getElementById('en');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playBtn = document.getElementById('playBtn');
const favBtn = document.getElementById('favBtn');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const favoritesList = document.getElementById('favorites-list');

let currentIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

function updatePhrase() {
  const phrase = phrases[currentIndex];
  korEl.textContent = phrase.kor;
  arEl.textContent = phrase.ar;
  enEl.textContent = phrase.en;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === phrases.length - 1;

  // شريط التقدم
  progressText.textContent = `${currentIndex + 1} / ${phrases.length}`;
  const percentage = ((currentIndex + 1) / phrases.length) * 100;
  progressFill.style.width = `${percentage}%`;

  // تحديث حالة زر المفضلة
  const isFav = favorites.some(f => f.kor === phrase.kor);
  favBtn.textContent = isFav ? '⭐️' : '☆';
}

function playAudio() {
  const phrase = phrases[currentIndex].kor;
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(phrase);
    const voices = window.speechSynthesis.getVoices();
    const koVoice = voices.find(v => v.lang.startsWith('ko'));
    if (koVoice) utterance.voice = koVoice;
    else utterance.lang = 'ko-KR';
    speechSynthesis.speak(utterance);
  } else {
    alert('الميزة غير مدعومة في متصفحك');
  }
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updatePhrase();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < phrases.length - 1)
    currentIndex++;
    updatePhrase();
  }
});

playBtn.addEventListener('click', playAudio);

favBtn.addEventListener('click', () => {
  const phrase = phrases[currentIndex];
  const index = favorites.findIndex(f => f.kor === phrase.kor);

  if (index === -1) {
    favorites.push(phrase);
  } else {
    favorites.splice(index, 1);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderFavorites();
  updatePhrase();
});

function renderFavorites() {
  favoritesList.innerHTML = '';
  favorites.forEach(fav => {
    const li = document.createElement('li');
    li.textContent = `${fav.kor} - ${fav.ar}`;
    favoritesList.appendChild(li);
  });
}

window.onload = () => {
  updatePhrase();
  renderFavorites();
};

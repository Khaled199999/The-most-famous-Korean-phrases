const phrases = [
  { kor: "안녕하세요", ar: "مرحباً (تحية رسمية)", en: "Hello (formal greeting)" },
  { kor: "감사합니다", ar: "شكراً", en: "Thank you" },
  { kor: "죄송합니다", ar: "آسف", en: "Sorry" },
  { kor: "네", ar: "نعم", en: "Yes" },
  { kor: "아니요", ar: "لا", en: "No" },
  { kor: "잘 지내세요?", ar: "هل أنت بخير؟", en: "How are you?" },
  { kor: "이름이 뭐예요?", ar: "ما اسمك؟", en: "What is your name?" },
  { kor: "저는 ... 입니다", ar: "أنا ...", en: "I am ..." },
  { kor: "어디에 가요?", ar: "إلى أين تذهب؟", en: "Where are you going?" },
  { kor: "얼마예요?", ar: "كم الثمن؟", en: "How much is it?" },
  { kor: "화장실 어디에 있어요?", ar: "أين الحمام؟", en: "Where is the bathroom?" },
  { kor: "도와주세요!", ar: "ساعدني!", en: "Help me!" },
  { kor: "이해하지 못해요", ar: "لا أفهم", en: "I don't understand" },
  { kor: "천천히 말해 주세요", ar: "تحدث ببطء من فضلك", en: "Please speak slowly" },
  { kor: "한국어를 배워요", ar: "أنا أتعلم الكورية", en: "I am learning Korean" },
  { kor: "좋은 하루 보내세요", ar: "أتمنى لك يوماً سعيداً", en: "Have a good day" },
  { kor: "잘 자요", ar: "تصبح على خير", en: "Good night" },
  { kor: "밥 먹었어요?", ar: "هل أكلت؟", en: "Have you eaten?" },
  { kor: "친구가 많아요", ar: "لدي الكثير من الأصدقاء", en: "I have many friends" },
  { kor: "사진 찍어 주세요", ar: "من فضلك، التقط صورة", en: "Please take a picture" },

  { kor: "지금 몇 시예요?", ar: "كم الساعة الآن؟", en: "What time is it now?" },
  { kor: "밖에 비가 와요", ar: "إنها تمطر في الخارج", en: "It's raining outside" },
  { kor: "오늘 날씨 어때요?", ar: "كيف الطقس اليوم؟", en: "How is the weather today?" },
  { kor: "영화를 보고 싶어요", ar: "أريد أن أشاهد فيلمًا", en: "I want to watch a movie" },
  { kor: "음식을 좋아해요", ar: "أحب الطعام", en: "I like food" },
  { kor: "커피 마실래요?", ar: "هل تريد أن تشرب قهوة؟", en: "Do you want to drink coffee?" },
  { kor: "집에 가요", ar: "أنا ذاهب إلى البيت", en: "I'm going home" },
  { kor: "병원에 가야 해요", ar: "يجب أن أذهب إلى المستشفى", en: "I need to go to the hospital" },
  { kor: "전화번호가 뭐예요?", ar: "ما رقم هاتفك؟", en: "What is your phone number?" },
  { kor: "축하합니다!", ar: "مبروك!", en: "Congratulations!" },

  { kor: "생일 축하해요", ar: "عيد ميلاد سعيد", en: "Happy birthday" },
  { kor: "지금 어디에 있어요?", ar: "أين أنت الآن؟", en: "Where are you now?" },
  { kor: "음악을 좋아해요", ar: "أحب الموسيقى", en: "I like music" },
  { kor: "내일 만나요", ar: "أراك غداً", en: "See you tomorrow" },
  { kor: "무슨 일이에요?", ar: "ما المشكلة؟", en: "What's the matter?" },
  { kor: "열심히 공부해요", ar: "ادرس بجد", en: "Study hard" },
  { kor: "도서관에 가요", ar: "أنا ذاهب إلى المكتبة", en: "I am going to the library" },
  { kor: "운동하러 가요", ar: "أنا ذاهب للتمرين", en: "I'm going to exercise" },
  { kor: "친구를 만나고 싶어요", ar: "أريد لقاء الأصدقاء", en: "I want to meet friends" },
  { kor: "한국 음식이 맛있어요", ar: "الطعام الكوري لذيذ", en: "Korean food is delicious" },

  { kor: "여기 앉아도 돼요?", ar: "هل يمكنني الجلوس هنا؟", en: "Can I sit here?" },
  { kor: "조용히 해 주세요", ar: "من فضلك، كن هادئاً", en: "Please be quiet" },
  { kor: "사진을 보고 싶어요", ar: "أريد رؤية الصور", en: "I want to see the photos" },
  { kor: "영어 할 수 있어요?", ar: "هل تستطيع التحدث بالإنجليزية؟", en: "Can you speak English?" },
  { kor: "계산서 주세요", ar: "من فضلك، الحساب", en: "Please give me the bill" },
  { kor: "이거 맛있어요", ar: "هذا لذيذ", en: "This is delicious" },
  { kor: "어디서 왔어요?", ar: "من أين أنت؟", en: "Where are you from?" },
  { kor: "좋아요", ar: "جيد", en: "Good" },
  { kor: "싫어요", ar: "لا أحب", en: "I don't like" },
  { kor: "괜찮아요", ar: "لا بأس", en: "It's okay" },

  { kor: "도와줄게요", ar: "سأساعدك", en: "I will help you" },
  { kor: "얼마나 걸려요?", ar: "كم يستغرق؟", en: "How long does it take?" },
  { kor: "문 좀 열어 주세요", ar: "من فضلك، افتح الباب", en: "Please open the door" },
  { kor: "문 좀 닫아 주세요", ar: "من فضلك، أغلق الباب", en: "Please close the door" },
  { kor: "길을 잃었어요", ar: "لقد ضعت", en: "I am lost" },
  { kor: "택시 불러 주세요", ar: "من فضلك، استدعي تاكسي", en: "Please call a taxi" },
  { kor: "얼굴이 예뻐요", ar: "وجهك جميل", en: "Your face is pretty" },
  { kor: "몸이 아파요", ar: "أنا مريض", en: "I feel sick" },
  { kor: "조심하세요", ar: "احذر", en: "Be careful" },
  { kor: "즐거운 여행 되세요", ar: "رحلة سعيدة", en: "Have a pleasant trip" },

  { kor: "이해했어요", ar: "فهمت", en: "I understood" },
  { kor: "무슨 뜻이에요?", ar: "ماذا يعني هذا؟", en: "What does it mean?" },
  { kor: "천천히 하세요", ar: "افعلها ببطء", en: "Take your time" },
  { kor: "힘내세요", ar: "تشجع", en: "Cheer up" },
  { kor: "배고파요", ar: "أنا جائع", en: "I am hungry" },
  { kor: "목말라요", ar: "أنا عطشان", en: "I am thirsty" },
  { kor: "너무 좋아요", ar: "إنه جيد جداً", en: "It's very good" },
  { kor: "화이팅!", ar: "حظاً موفقاً!", en: "Fighting!" },
  { kor: "기다려 주세요", ar: "انتظر من فضلك", en: "Please wait" },
  { kor: "문제가 있어요", ar: "هناك مشكلة", en: "There is a problem" },

  { kor: "약을 먹었어요?", ar: "هل تناولت الدواء؟", en: "Did you take medicine?" },
  { kor: "빨리 와 주세요", ar: "تعال بسرعة من فضلك", en: "Please come quickly" },
  { kor: "휴대전화가 어디에 있어요?", ar: "أين هاتفك المحمول؟", en: "Where is your phone?" },
  { kor: "컴퓨터가 고장 났어요", ar: "الحاسوب معطل", en: "The computer is broken" },
  { kor: "공부를 시작해요", ar: "سأبدأ الدراسة", en: "I will start studying" },
  { kor: "새해 복 많이 받으세요", ar: "سنة جديدة سعيدة", en: "Happy New Year" },
  { kor: "결혼 축하해요", ar: "مبروك على الزواج", en: "Congratulations on your wedding" },
  { kor: "즐거운 하루 보내세요", ar: "أتمنى لك يوماً سعيداً", en: "Have a nice day" },
  { kor: "이해하지 못했어요", ar: "لم أفهم", en: "I didn't understand" },
  { kor: "여기서 사진 찍으면 안 돼요", ar: "لا يمكنك التصوير هنا", en: "You can't take pictures here" },

  { kor: "기분이 좋아요", ar: "أشعر بحالة جيدة", en: "I feel good" },
  { kor: "내일 약속 있어요", ar: "لدي موعد غداً", en: "I have an appointment tomorrow" },
  { kor: "도착했어요", ar: "وصلت", en: "I have arrived" },
  { kor: "이름을 다시 한 번 말해 주세요", ar: "قل اسمك مرة أخرى من فضلك", en: "Please say your name again" },
  { kor: "집이 어디에 있어요?", ar: "أين هو منزلك؟", en: "Where is your house?" },
  { kor: "차 조심하세요", ar: "احترس من السيارات", en: "Be careful of cars" },
  { kor: "음식 주문할게요", ar: "سأطلب الطعام", en: "I will order food" },
  { kor: "버스 정류장이 어디에 있어요?", ar: "أين موقف الحافلات؟", en: "Where is the bus stop?" },
  { kor: "요금은 얼마예요?", ar: "كم هي التكلفة؟", en: "How much is the fare?" },
  { kor: "도와주세요", ar: "ساعدني", en: "Help me" },

  { kor: "여권을 보여 주세요", ar: "أرني جواز السفر من فضلك", en: "Please show your passport" },
  { kor: "문을 열어 주세요", ar: "من فضلك افتح الباب", en: "Please open the door" },
  { kor: "왼쪽으로 가세요", ar: "اذهب إلى اليسار", en: "Go to the left" },
  { kor: "오른쪽으로 가세요", ar: "اذهب إلى اليمين", en: "Go to the right" },
  { kor: "직진하세요", ar: "سر إلى الأمام", en: "Go straight" },
  { kor: "어디에 있어요?", ar: "أين هو؟", en: "Where is it?" },
  { kor: "이것 주세요", ar: "أريد هذا", en: "I want this" },
  { kor: "얼마예요?", ar: "كم الثمن؟", en: "How much is it?" },
  { kor: "이것 맛있어요", ar: "هذا لذيذ", en: "This is delicious" },
  { kor: "화장실 어디에 있어요?", ar: "أين الحمام؟", en: "Where is the bathroom?" },

  { kor: "문제가 있으면 말해 주세요", ar: "إذا كان هناك مشكلة، قل لي", en: "If there is a problem, tell me" },
  { kor: "잘 자요", ar: "تصبح على خير", en: "Good night" },
  { kor: "오늘은 몇 월 며칠이에요?", ar: "ما تاريخ اليوم؟", en: "What is today's date?" },
  { kor: "생일 축하해요", ar: "عيد ميلاد سعيد", en: "Happy birthday" },
  { kor: "좋은 아침이에요", ar: "صباح الخير", en: "Good morning" },
  { kor: "안녕히 계세요", ar: "وداعاً (عندما ترحل)", en: "Goodbye (when you leave)" },
  { kor: "안녕히 가세요", ar: "وداعاً (عندما يبقى الآخرون)", en: "Goodbye (when others leave)" },
  { kor: "도와줘서 고마워요", ar: "شكراً لمساعدتك", en: "Thank you for helping me" },
  { kor: "다시 한번 말해 주세요", ar: "من فضلك قلها مرة أخرى", en: "Please say it again" },
  { kor: "무슨 뜻이에요?", ar: "ماذا يعني هذا؟", en: "What does this mean?" },

  { kor: "여기 앉으세요", ar: "اجلس هنا", en: "Sit here" },
  { kor: "사진 찍자!", ar: "لنأخذ صورة!", en: "Let's take a picture!" },
  { kor: "이것은 뭐예요?", ar: "ما هذا؟", en: "What is this?" },
  { kor: "조금 더 주세요", ar: "أعطني المزيد قليلاً", en: "Give me a little more" },
  { kor: "다이어트 중이에요", ar: "أنا أتبع حمية", en: "I am on a diet" },
  { kor: "배가 고파요", ar: "أنا جائع", en: "I am hungry" },
  { kor: "배가 불러요", ar: "أنا شبعان", en: "I am full" },
  { kor: "날씨가 좋아요", ar: "الطقس جميل", en: "The weather is nice" },
  { kor: "조심하세요", ar: "كن حذراً", en: "Be careful" },
  { kor: "곧 만나요", ar: "أراك قريباً", en: "See you soon" },

  { kor: "비가 와요", ar: "تمطر", en: "It's raining" },
  { kor: "눈이 와요", ar: "ثلج", en: "It's snowing" },
  { kor: "더워요", ar: "الجو حار", en: "It's hot" },
  { kor: "추워요", ar: "الجو بارد", en: "It's cold" },
  { kor: "기분이 안 좋아요", ar: "لا أشعر أنني بخير", en: "I don't feel well" },
  { kor: "맛있게 드세요", ar: "بالهناء والشفاء", en: "Enjoy your meal" },
  { kor: "천천히 하세요", ar: "خذ وقتك", en: "Take your time" },
  { kor: "시간이 없어요", ar: "لا يوجد وقت", en: "I don't have time" },
  { kor: "곧 돌아올게요", ar: "سأعود قريباً", en: "I'll be back soon" },
  { kor: "기다려 줘서 고마워요", ar: "شكراً لصبرك", en: "Thank you for waiting" }
];

let currentIndex = 0;
const korEl = document.getElementById('kor');
const arEl = document.getElementById('ar');
const enEl = document.getElementById('en');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playBtn = document.getElementById('playBtn');

function updatePhrase() {
  const phrase = phrases[currentIndex];
  korEl.textContent = phrase.kor;
  arEl.textContent = phrase.ar;
  enEl.textContent = phrase.en;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === phrases.length - 1;
}

function playAudio() {
  const phrase = phrases[currentIndex].kor;
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = 'ko-KR';
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
  if (currentIndex < phrases.length - 1) {
    currentIndex++;
    updatePhrase();
  }
});

playBtn.addEventListener('click', () => {
  playAudio();
});

// عرض أول جملة عند تحميل الصفحة
updatePhrase();

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

  // تحديث شريط التقدم
  progressText.textContent = `${currentIndex + 1} / ${phrases.length}`;
  const percentage = ((currentIndex + 1) / phrases.length) * 100;
  progressFill.style.width = `${percentage}%`;
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
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updatePhrase();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < phrases.length - 1) {
    currentIndex++;
    updatePhrase();
  }
});

playBtn.addEventListener('click', () => {
  playAudio();
});

favBtn.addEventListener('click', () => {
  const phrase = phrases[currentIndex];
  if (!favorites.some(f => f.kor === phrase.kor)) {
    favorites.push(phrase);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
  }
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


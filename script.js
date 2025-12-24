/*********************************
 * 📝 편지 데이터 (10개 더미)
 *********************************/
const letters = [
  {
    type: "letter",
    nickname: "윗니닝",
    content: "안녕 윗니들아 벌써 윗니들이랑 보내는 두번째 크리스마스야🎄 시간이 너무 빨라서 정말 믿겨가 안돼… 윗니 위시랑 함께한 일년이 이렇게 빠르다니 너무 재밌어서 그런거겠지?! 빠르긴 했지만 돌아보면 추억 진짜 한가득이다 내년에도 잘 부탁해🩷💚 나 윗달이 너무 좋아서 오래오래 있고 싶어 올해도 수고 많았고 내년엔 더 좋은 일들만 가득했으면 좋겠다 윗니들아 사랑혀 앞니도 사랑훼🦷🫶🪽"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 2",
    content: "따뜻한 연말 보내세요. 항상 응원합니다 💌"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 3",
    content: "함께해서 행복한 한 해였어요! ❄️"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 4",
    content: "새해 복 많이 받으세요~ 🎁"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 5",
    content: "올해도 함께해줘서 고마워요 🌟"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 6",
    content: "소중한 추억들 감사합니다 🎄"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 7",
    content: "언제나 행복하길 바라요 💚"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 8",
    content: "따뜻한 겨울 되세요! ❄️"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 9",
    content: "행복한 크리스마스 보내요 🎅"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 10",
    content: "내년에도 함께해요! 🎄"
  }
];

/*********************************
 * 🎁 스티커 데이터
 *********************************/
const stickers = [
  // 유튜브 링크 있는 선물 스티커들
  { 
    type: "sticker",
    img: "assets/sticker-gift.png", 
    link: "https://www.youtube.com/watch?v=DITu2nhnbtk" 
  },
  { 
    type: "sticker",
    img: "assets/sticker-gift.png", 
    link: "https://www.youtube.com/watch?v=n1q3XgM9_cQ" 
  },
  { 
    type: "sticker",
    img: "assets/sticker-gift.png", 
    link: "https://www.youtube.com/watch?v=OMbQlLCmw84" 
  },
  { 
    type: "sticker",
    img: "assets/sticker-gift.png", 
    link: "https://www.youtube.com/watch?v=YfiZORcr8uw" 
  },
  { 
    type: "sticker",
    img: "assets/sticker-gift.png", 
    link: "https://www.youtube.com/shorts/0ztMa7rtkO4" 
  },
  
  // 그냥 장식용 스티커들 (링크 없음)
  { 
    type: "sticker",
    img: "assets/sticker-tree.png" 
  },
  { 
    type: "sticker",
    img: "assets/sticker-snowman.png" 
  },
  { 
    type: "sticker",
    img: "assets/sticker-star.png" 
  }
];

/*********************************
 * 🎲 편지와 스티커 랜덤 섞기
 *********************************/
const items = [...letters];

// 스티커를 랜덤 위치에 삽입
stickers.forEach(sticker => {
  const randomIndex = Math.floor(Math.random() * (items.length + 1));
  items.splice(randomIndex, 0, sticker);
});

/*********************************
 * 🎨 아이템 렌더링
 *********************************/
const grid = document.getElementById("grid");
const overlay = document.getElementById("overlay");

items.forEach(item => {
  const el = document.createElement("div");
  el.className = "item";

  if (item.type === "letter") {
    // 편지 봉투
    el.style.backgroundImage = "url('assets/envelope.png')";
    el.onclick = () => openLetter(item, el);
  } 
  else if (item.type === "sticker") {
    // 스티커
    el.style.backgroundImage = `url('${item.img}')`;
    
    // 링크가 있으면 클릭 시 새 탭에서 열기
    if (item.link) {
      el.onclick = () => window.open(item.link, "_blank");
      el.style.cursor = "pointer";
    } else {
      el.style.cursor = "default";
    }
  }

  grid.appendChild(el);
});

/*********************************
 * 💌 편지 열기/닫기
 *********************************/
function openLetter(letter, element) {
  document.getElementById("nickname").textContent = letter.nickname;
  document.getElementById("content").textContent = letter.content;
  overlay.classList.remove("hidden");
  
  // 읽은 편지 표시
  element.classList.add("read");
}

function closeLetter() {
  overlay.classList.add("hidden");
}

// 닫기 버튼 클릭
document.getElementById("closeBtn").onclick = (e) => {
  e.stopPropagation();
  closeLetter();
};

// 배경 클릭해도 닫기
overlay.onclick = (e) => {
  if (e.target === overlay) {
    closeLetter();
  }
};

/*********************************
 * ⏳ 로딩 화면 처리
 *********************************/
setTimeout(() => {
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
}, 2600);

/*********************************
 * ❄️ 눈 효과
 *********************************/
const snowContainer = document.getElementById("snow");
for (let i = 0; i < 50; i++) {
  const snowflake = document.createElement("span");
  snowflake.textContent = "❄";
  snowflake.style.left = Math.random() * 100 + "vw";
  snowflake.style.animationDuration = (5 + Math.random() * 5) + "s";
  snowflake.style.animationDelay = Math.random() * 3 + "s";
  snowflake.style.fontSize = (10 + Math.random() * 6) + "px";
  snowContainer.appendChild(snowflake);
}



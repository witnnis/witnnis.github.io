/*********************************
 * 1️편지 데이터 (더미 10개)
 *********************************/

const letters = [
  {
    type: "letter",
    nickname: "익명 시즈니 1",
    content: "첫 번째 더미 편지입니다 🎄"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 2",
    content: "두 번째 더미 편지입니다 💌"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 3",
    content: "세 번째 더미 편지입니다 ❄️"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 4",
    content: "네 번째 더미 편지입니다 🎁"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 5",
    content: "다섯 번째 더미 편지입니다 🌟"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 6",
    content: "여섯 번째 더미 편지입니다 🎄"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 7",
    content: "일곱 번째 더미 편지입니다 💚"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 8",
    content: "여덟 번째 더미 편지입니다 ❄️"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 9",
    content: "아홉 번째 더미 편지입니다 🎅"
  },
  {
    type: "letter",
    nickname: "익명 시즈니 10",
    content: "열 번째 더미 편지입니다 🎄"
  }
];

/*********************************
 * 2️스티커 정의
 *********************************/

const stickers = [
  { img: "assets/sticker-gift.png", link: "https://www.youtube.com/watch?v=DITu2nhnbtk" },
  { img: "assets/sticker-gift.png", link: "https://www.youtube.com/watch?v=n1q3XgM9_cQ" },
  { img: "assets/sticker-gift.png", link: "https://www.youtube.com/watch?v=OMbQlLCmw84" },
  { img: "assets/sticker-gift.png", link: "https://www.youtube.com/watch?v=YfiZORcr8uw" },
  { img: "assets/sticker-gift.png", link: "https://www.youtube.com/shorts/0ztMa7rtkO4" },

  { img: "assets/sticker-tree.png" },
  { img: "assets/sticker-star.png" }
];

/*********************************
 * 3️편지 + 스티커 섞기
 *********************************/

const items = [...letters];

stickers.forEach(sticker => {
  const index = Math.floor(Math.random() * items.length);
  items.splice(index, 0, {
    type: "sticker",
    ...sticker
  });
});

/*********************************
 * 4️렌더링
 *********************************/

const grid = document.getElementById("grid");
const overlay = document.getElementById("overlay");

items.forEach(item => {
  const el = document.createElement("div");
  el.className = "item";

  if (item.type === "letter") {
    el.style.backgroundImage = "url('assets/envelope.png')";
    el.onclick = () => openLetter(item);
  }

  if (item.type === "sticker") {
    el.style.backgroundImage = `url('${item.img}')`;
    if (item.link) {
      el.onclick = () => window.open(item.link, "_blank");
    }
  }

  grid.appendChild(el);
});

/*********************************
 * 5️편지 열기 / 닫기
 *********************************/

function openLetter(letter) {
  document.getElementById("nickname").textContent = letter.nickname;
  document.getElementById("content").textContent = letter.content;
  overlay.classList.remove("hidden");
}

document.getElementById("closeBtn").onclick = closeLetter;
overlay.onclick = e => {
  if (e.target === overlay) closeLetter();
};

function closeLetter() {
  overlay.classList.add("hidden");
}

/*********************************
 * 6️로딩 처리
 *********************************/

setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
}, 2600);

/*********************************
 * 7️눈 효과
 *********************************/

for (let i = 0; i < 40; i++) {
  const s = document.createElement("span");
  s.textContent = "❄";
  s.style.left = Math.random() * 100 + "vw";
  s.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.getElementById("snow").appendChild(s);
}

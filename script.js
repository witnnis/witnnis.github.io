/***********************
 * 편지 + 스티커 데이터
 ***********************/
const items = [
  { type: "letter", nickname: "익명1", content: "첫 번째 편지 🎄" },
  { type: "letter", nickname: "익명2", content: "두 번째 편지 💌" },
  { type: "letter", nickname: "익명3", content: "세 번째 편지 ❄️" },
  { type: "letter", nickname: "익명4", content: "네 번째 편지 🎁" },
  { type: "letter", nickname: "익명5", content: "다섯 번째 편지 🌟" },

  { type: "sticker", img: "sticker-tree.png" },
  { type: "sticker", img: "sticker-snowman.png" },
  { type: "sticker", img: "sticker-star.png", link: "https://www.youtube.com/watch?v=DITu2nhnbtk" },
  { type: "sticker", img: "sticker-gift.png", link: "https://www.youtube.com/watch?v=n1q3XgM9_cQ" }
];

/***********************
 * 렌더링
 ***********************/
const grid = document.getElementById("grid");
const overlay = document.getElementById("overlay");

items.forEach(item => {
  const el = document.createElement("div");
  el.className = "item";

  if (item.type === "letter") {
    el.style.backgroundImage = "url('assets/envelope.png')";
    el.onclick = () => openLetter(item, el);
  } else {
    el.style.backgroundImage = `url('assets/${item.img}')`;
    if (item.link) {
      el.onclick = () => window.open(item.link, "_blank");
    }
  }

  grid.appendChild(el);
});

/***********************
 * 편지 열기 / 닫기
 ***********************/
function openLetter(letter, el) {
  document.getElementById("nickname").textContent = letter.nickname;
  document.getElementById("content").textContent = letter.content;
  overlay.classList.remove("hidden");
  el.classList.add("read");
}

function closeLetter() {
  overlay.classList.add("hidden");
}

document.getElementById("closeBtn").onclick = closeLetter;
overlay.onclick = e => {
  if (e.target === overlay) closeLetter();
};

/***********************
 * 로딩
 ***********************/
setTimeout(() => {
  const loading = document.getElementById("loading");
  const main = document.getElementById("main");
  
  if (loading) loading.classList.add("hidden");
  if (main) main.classList.remove("hidden");
  
  console.log("로딩 완료!"); // 디버깅용
}, 1800);

/***********************
 * 눈 생성
 ***********************/
const snow = document.getElementById("snow");
for (let i = 0; i < 40; i++) {
  const s = document.createElement("span");
  s.textContent = "❄";
  s.style.left = Math.random() * 100 + "vw";
  s.style.animationDuration = 5 + Math.random() * 5 + "s";
  snow.appendChild(s);
}

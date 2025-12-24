/*********************************
 * 1️⃣ 편지 데이터 (더미 10개)
 *********************************/

const letters = [
  { nickname: "익명 1", content: "첫 번째 편지 🎄" },
  { nickname: "익명 2", content: "두 번째 편지 💌" },
  { nickname: "익명 3", content: "세 번째 편지 ❄️" },
  { nickname: "익명 4", content: "네 번째 편지 🎁" },
  { nickname: "익명 5", content: "다섯 번째 편지 🌟" },
  { nickname: "익명 6", content: "여섯 번째 편지 🎄" },
  { nickname: "익명 7", content: "일곱 번째 편지 💚" },
  { nickname: "익명 8", content: "여덟 번째 편지 ❄️" },
  { nickname: "익명 9", content: "아홉 번째 편지 🎅" },
  { nickname: "익명 10", content: "열 번째 편지 🎄" }
];

/*********************************
 * 2️⃣ 렌더링
 *********************************/

const grid = document.getElementById("grid");
const overlay = document.getElementById("overlay");
const box = document.querySelector(".letter-box");

letters.forEach((letter, i) => {
  const el = document.createElement("div");
  el.className = "item";
  el.style.backgroundImage = "url('assets/envelope.png')";

  el.onclick = () => openLetter(letter, el);
  grid.appendChild(el);
});

/*********************************
 * 3️⃣ 열기 / 닫기
 *********************************/

function openLetter(letter, el) {
  document.getElementById("nickname").textContent = letter.nickname;
  document.getElementById("content").textContent = letter.content;

  overlay.classList.remove("hidden");
  box.classList.remove("closing");

  el.classList.add("read");
}

function closeLetter() {
  box.classList.add("closing");
  setTimeout(() => {
    overlay.classList.add("hidden");
    box.classList.remove("closing");
  }, 350);
}

document.getElementById("closeBtn").onclick = closeLetter;
overlay.onclick = e => {
  if (e.target === overlay) closeLetter();
};

/*********************************
 * 4️⃣ 로딩 → 메인
 *********************************/

setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
}, 2600);

/*********************************
 * 5️⃣ 눈 효과
 *********************************/

for (let i = 0; i < 40; i++) {
  const s = document.createElement("span");
  s.textContent = "❄";
  s.style.left = Math.random() * 100 + "vw";
  s.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.getElementById("snow").appendChild(s);
}

const letters = [
  { nickname: "익명1", content: "첫 번째 편지 🎄" },
  { nickname: "익명2", content: "두 번째 편지 💌" },
  { nickname: "익명3", content: "세 번째 편지 ❄️" }
];

const grid = document.getElementById("grid");
const overlay = document.getElementById("overlay");

letters.forEach(letter => {
  const el = document.createElement("div");
  el.className = "item";
  el.onclick = () => {
    document.getElementById("nickname").textContent = letter.nickname;
    document.getElementById("content").textContent = letter.content;
    overlay.classList.remove("hidden");
  };
  grid.appendChild(el);
});

document.getElementById("closeBtn").onclick = () => {
  overlay.classList.add("hidden");
};

overlay.onclick = e => {
  if (e.target === overlay) overlay.classList.add("hidden");
};

setTimeout(() => {
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
}, 1500);

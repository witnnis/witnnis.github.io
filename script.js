/*********************************
 * 📝 편지 데이터 (10개 더미)
 *********************************/
const letters = [
  {
    type: "letter",
    nickname: "윗니닝",
    content: "안녕 윗니들아<br>
벌써 윗니들이랑 보내는 두번째 크리스마스야🎄 시간이 너무 빨라서 정말 믿겨가 안돼…
윗니 위시랑 함께한 일년이 이렇게 빠르다니 너무 재밌어서 그런거겠지?!
빠르긴 했지만 돌아보면 추억 진짜 한가득이다
내년에도 잘 부탁해🩷💚 나 윗달이 너무 좋아서 오래오래 있고 싶어 
올해도 수고 많았고 내년엔 더 좋은 일들만 가득했으면 좋겠다
윗니들아 사랑혀 앞니도 사랑훼🦷🫶🪽"
  },
  {
    type: "letter",
    nickname: "윗느아아아앙시",
    content: "등갈비에 리본 다는 거 멋지다고 생각하면 겨드랑이 들어.
한 해 동안 고생 많으셧구ㅎㅎㅎ
제가 아로 시작해서 랑으로 끝나는 단어 합니다~~~~~~~
다가오는 26년도 행으로 시작해서 복으로 끝나는 단어 하시길 바라구~~~~ (중략)

더 많은 이야기를 듣고 싶으면 위시달글로 찾아오세요.
마지막으로
크리스마스 선물로다가 첫줄에서부터 들고있던 겨드랑이 내가 꼬옥 안아드릴게요ㅎㅎㅎ
(너무 영광이어가지고 눈물 흘리지 않앗길.."
  },
  {
    type: "letter",
    nickname: "독고윗니",
    content: "윗니들 덕분에 올 한해 힘든 시간에 오래 빠져있지않고 잘 버틸 수 있었어. 너무 고마워. 앞으로 계속해서 더 많은 시간을 쌓아가고싶어. 다들 너무 사랑해. 즐거운 크리스마스 보내~♡"
  },
  {
    type: "letter",
    nickname: "아랫니",
    content: "옛부터 우정은 다음 생에도 이어지는 우연같은 인연이라 하였지 나는 윗니들과 다음 생에도 이전 생에도 인연이 될거야 이번 년도 너무 고생많았어 우리 다음 해에도 우정 변치말고 사랑으로 대하자 나도 그럴게"
  },
  {
    type: "letter",
    nickname: "위시랑 윗니랑",
    content: "위시 메리크리스마스 🎄 
윗니들 메리크리스마스 🎄 

윗니들이 올해를 건강하고 행복하게 보냈길 바래
나한테 올해는 위시를 좋아하게 되고, 윗니들을 알게 되서 행복한 해였어
위시 좋아하는 사람들끼리 모여서 수다떠니까 너무 재밌더라고
내 덕메는 윗니들이야 윗달 달리길 잘했어 (방구 얘기할 땐 초딩들같긴하지만)
우리 내년에도 행복하게 위시하자
🪽💜❤️🩵💚💛🩷🪽"
  },
  {
    type: "letter",
    nickname: "윗달사랑꽉껴♡",
    content: "윗달 윗니들 덕분에 위시 덕질이 알차고 행복해♡ 앞으로도 계속 함께할 수 있으면 좋겠어♡
      요즘 현생 바빠져서 달집 못해 여러 이벤트 참여 못하고 있는데 그래도 언제나 윗달 생각하고 윗니들 보고 싶어하는 거
      알아줬으면♡ 그리고 게임..! 난 엔시티존만 겨우 가끔 들어가서 하는데 엔시티존 같이 하자!!!!
        서로 하트 날려주자♡ 위시만큼이나 윗니들 사랑해♡ 아.. 아닌가? 윗니들을 더 사랑하는가?♡"
  },
  {
    type: "letter",
    nickname: "니윗보바",
    content: "윗니들아 맨날 놀아줘서 고마워 우리 앞으로도 재미있게 사이좋게 지내면서 위시 얘기 하자 사.. 사.. 사쿠야"
  },
  {
    type: "letter",
    nickname: "쾡누가우리윗니",
    content: "윗니들아 사랑해
할머니 돼도 윗달하자
메리크리스마스🎄💚"
  },
  {
    type: "letter",
    nickname: "햄님!!",
    content: "나는 올해가 너무 힘든 해였는데 윗니들 만나서 그나마 즐거울 수 있는 한해가 된 것 같아!! ♡
      누군가와 덕질을 함께 한다는 건 생각한 것보다 즐거움이 큰 것 같아 앞으로도 함께 위시 좋아해요 햄님들!!💦
      크리스마스 잘 보내시고 한살은 제 선물입니다!!"
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




const allCards = [//  GROUP 1 — EMILY COLLECTION (pink) 
  { name: "Emily Card 1", group: "Emily Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073712856_acd8c53e28_n.jpg", background: "pink" }, { name: "Emily Card 2", group: "Emily Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/54739650405_9052a5c9f6_n.jpg", background: "pink" }, { name: "Emily Card 3", group: "Emily Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073712821_945cda4304_n.jpg", background: "pink" }, { name: "Emily Card 4", group: "Emily Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074070485_faee8a10e6.jpg", background: "pink" }, { name: "Emily Card 5", group: "Emily Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073904518_35de7888d6_n.jpg", background: "pink" }, { name: "Emily Rare 6", group: "Emily Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55072800217_ffb5ccba6e_n.jpg", background: "pink" }, { name: "Emily Rare 7", group: "Emily Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55073904368_f8eaa361f2.jpg", background: "pink" }, { name: "Emily Rare 8", group: "Emily Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55074070775_38e87c2103_z.jpg", background: "pink" }, { name: "Emily Rare 9", group: "Emily Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55077676787_e7ba0aa0b9_n.jpg", background: "pink" }, { name: "Emily Epic 10", group: "Emily Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55072800182_36047cc1e9_m.jpg", background: "pink" }, { name: "Emily Epic 11", group: "Emily Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55073972874_11a521f04a_m.jpg", background: "pink" }, { name: "Emily Legendary 12", group: "Emily Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/55074070360_60b687dac4_m.jpg", background: "pink" },// GROUP 2 — THE K‑POP COLLECTION (purple) // ----------------------------------- 
  { name: "K‑Pop Card 13", group: "The K-Pop Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073925563_b54ac6c1bc_w.jpg", background: "purple" }, { name: "K‑Pop Card 14", group: "The K-Pop Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072825202_59c80f525b_w.jpg", background: "purple" }, { name: "K‑Pop Card 15", group: "The K-Pop Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073925548_30a8b18dfc.jpg", background: "purple" }, { name: "K‑Pop Rare 16", group: "The K-Pop Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55073904303_df0b99067f_z.jpg", background: "purple" }, { name: "K‑Pop Rare 17", group: "The K-Pop Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55074070340_6aff6709f1_n.jpg", background: "purple" }, { name: "K‑Pop Epic 18", group: "The K-Pop Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/54834501876_76c5e902e0_n.jpg", background: "purple" }, { name: "K‑Pop Legendary 19", group: "The K-Pop Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/55073709526_f3d58a7c4f_n.jpg", background: "purple", featured: true }, // ----------------------------------- // GROUP 3 — FAMILY COLLECTION (yellow) // ----------------------------------- 
  { name: "Family Card 20", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072770027_132a8b5c2b_n.jpg", background: "yellow" }, { name: "Family Card 21", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073963474_76a92ac1c9.jpg", background: "yellow" }, { name: "Family Card 22", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074066030_07aae56713_w.jpg", background: "yellow" }, { name: "Family Card 23", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072804282_520cc6b793_z.jpg", background: "yellow" }, { name: "Family Card 24", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073709881_b4e6bc201c_w.jpg", background: "yellow" }, { name: "Family Card 25", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072807707_212d059685_w.jpg", background: "yellow" }, { name: "Family Rare 26", group: "Family Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55072800272_a9b9a2acaf_n.jpg", background: "yellow" }, { name: "Family Rare 27", group: "Family Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55074074430_73abf1a374_n.jpg", background: "yellow" }, { name: "Family Rare 28", group: "Family Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/54844452101_85decef6bf_n.jpg", background: "yellow" }, { name: "Family Rare 29", group: "Family Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55074051129_864a0c8d60_n.jpg", background: "yellow" }, { name: "Family Epic 30", group: "Family Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55072804512_900abb89d1_n.jpg", background: "yellow" }, { name: "Family Epic 31", group: "Family Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/54844452106_c0733a56c5_n.jpg", background: "yellow" }, { name: "Family Epic 32", group: "Family Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55073705541_f7c5f26ac9_n.jpg", background: "yellow" }, { name: "Family Legendary 33", group: "Family Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/55073868538_209ba86775_n.jpg", background: "yellow" }, // ----------------------------------- // GROUP 4 — FUN COLLECTION (black) // ----------------------------------- 
  { name: "Fun Card 34", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074070595_0c0dd5f5ca_w.jpg", background: "black" }, { name: "Fun Card 35", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073963399_f568915d4c_n.jpg", background: "black" }, { name: "Fun Card 36", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073709671_20289f6e33_n.jpg", background: "black" }, { name: "Fun Card 37", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074074135_d683c24530_n.jpg", background: "black" }, { name: "Fun Card 38", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072800237_36804a8530_n.jpg", background: "black" }, { name: "Fun Card 39", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55030666682_e25bbe287d_q.jpg", background: "black" }, { name: "Fun Card 40", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/54739525544_6f311f073c_m.jpg", background: "black" }, { name: "Fun Rare 41", group: "Fun Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/54739295981_fe3b8aa81c_n.jpg", background: "black" }, { name: "Fun Rare 42", group: "Fun Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55073900268_e3a20cec69_n.jpg", background: "black" }, { name: "Fun Rare 43", group: "Fun Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/54808689458_ab110d8586_n.jpg", background: "black" }, { name: "Fun Rare 44", group: "Fun Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55073925593_5a72a752e5_n.jpg", background: "black" }, { name: "Fun Epic 45", group: "Fun Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55073959159_0c9bfeab18_n.jpg", background: "black" }, { name: "Fun Epic 46", group: "Fun Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55073900233_644a2f57b2_n.jpg", background: "black" }, { name: "Fun Legendary 47", group: "Fun Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/55073705556_52b79376d6_n.jpg", background: "black" },
// ----------------------------------- // GROUP 5 — THE ART COLLECTION (green) // ----------------------------------- 
  { name: "Art Card 48", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073908283_3ef5ef2a22_n.jpg", background: "green" }, { name: "Art Card 49", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074074425_41dc1dea97_w.jpg", background: "green" }, { name: "Art Card 50", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074070725_1fcbb236e8_m.jpg", background: "green" }, { name: "Art Card 51", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072804422_76c85b7698_m.jpg", background: "green" }, { name: "Art Card 52", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073963564_67f616a7d1_m.jpg", background: "green" }, { name: "Art Card 53", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072807922_3e2cf39318_m.jpg", background: "green" }, { name: "Art Rare 54", group: "The Art Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55073709706_7cb104f42c_n.jpg", background: "green" }, { name: "Art Rare 55", group: "The Art Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/54975714697_ebbaf4c88d_n.jpg", background: "green" }, { name: "Art Epic 56", group: "The Art Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/54976899835_f12e44ed31_n.jpg", background: "green" }, { name: "Art Legendary 57", group: "The Art Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/54976850069_bfb4bdffb7_n.jpg", background: "green" }, // ----------------------------------- // GROUP 6 — THE SASSYBYTE COLLECTION (teal) // ----------------------------------- 
  { name: "SassyByte Card 58", group: "The SassyByte Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/54933128268_85c08c2d2b_n.jpg", background: "teal" }, { name: "SassyByte Card 59", group: "The SassyByte Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/54910741408_b7a6b78cd1_z.jpg", background: "teal" }, { name: "SassyByte Card 60", group: "The SassyByte Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/54925827607_61bfd16b96_n.jpg", background: "teal" }, { name: "SassyByte Rare 61", group: "The SassyByte Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55054696521_740978314c_n.jpg", background: "teal" }, { name: "SassyByte Rare 62", group: "The SassyByte Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/54947528408_1f3c94b9fa_m.jpg", background: "teal" }, { name: "SassyByte Epic 63", group: "The SassyByte Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/54872148709_fa26b0553f_n.jpg", background: "teal" }, { name: "SassyByte Epic 64", group: "The SassyByte Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/54926662471_dec9f5b1e3_z.jpg", background: "teal" }, { name: "SassyByte Legendary 65", group: "The SassyByte Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/54926694766_7e1d744da1_w.jpg", background: "teal" }];


   

const imageMap = {
  photo_1: "https://live.staticflickr.com/65535/55073712856_acd8c53e28_n.jpg",
  photo_2: "https://live.staticflickr.com/65535/54739650405_9052a5c9f6_n.jpg",
  photo_3: "https://live.staticflickr.com/65535/55073712821_945cda4304_n.jpg",
  photo_4: "https://live.staticflickr.com/65535/55074070485_faee8a10e6.jpg",
  photo_5: "https://live.staticflickr.com/65535/55073904518_35de7888d6_n.jpg",
  photo_6: "https://live.staticflickr.com/65535/55072800217_ffb5ccba6e_n.jpg",
  photo_7: "https://live.staticflickr.com/65535/55073904368_f8eaa361f2.jpg", 
  photo_8: "https://live.staticflickr.com/65535/55074070775_38e87c2103_z.jpg",
  photo_9: "https://live.staticflickr.com/65535/55077676787_e7ba0aa0b9_n.jpg",
  photo_10: "https://live.staticflickr.com/65535/55072800182_36047cc1e9_m.jpg",
  photo_11: "https://live.staticflickr.com/65535/55073972874_11a521f04a_m.jpg",
  photo_12: "https://live.staticflickr.com/65535/55074070360_60b687dac4_m.jpg",
  photo_13: "https://live.staticflickr.com/65535/55073925563_b54ac6c1bc_w.jpg",
  photo_14: "https://live.staticflickr.com/65535/55072825202_59c80f525b_w.jpg", 
  photo_15: "https://live.staticflickr.com/65535/55073925548_30a8b18dfc.jpg",
  photo_16: "https://live.staticflickr.com/65535/55073904303_df0b99067f_z.jpg",
  photo_17: "https://live.staticflickr.com/65535/55074070340_6aff6709f1_n.jpg",
  photo_18: "https://live.staticflickr.com/65535/54834501876_76c5e902e0_n.jpg",
  photo_19: "https://live.staticflickr.com/65535/55073709526_f3d58a7c4f_n.jpg",
  photo_20: "https://live.staticflickr.com/65535/55072770027_132a8b5c2b_n.jpg",
  photo_21: "https://live.staticflickr.com/65535/55073963474_76a92ac1c9.jpg",
  photo_22: "https://live.staticflickr.com/65535/55074066030_07aae56713_w.jpg",
  photo_23: "https://live.staticflickr.com/65535/55072804282_520cc6b793_z.jpg",
  photo_24: "https://live.staticflickr.com/65535/55073709881_b4e6bc201c_w.jpg", 
  photo_25: "https://live.staticflickr.com/65535/55072807707_212d059685_w.jpg",
  photo_26: "https://live.staticflickr.com/65535/55072800272_a9b9a2acaf_n.jpg", 
  photo_27: "https://live.staticflickr.com/65535/55074074430_73abf1a374_n.jpg", 
  photo_28: "https://live.staticflickr.com/65535/54844452101_85decef6bf_n.jpg",
  photo_29: "https://live.staticflickr.com/65535/55074051129_864a0c8d60_n.jpg",
  photo_30: "https://live.staticflickr.com/65535/55072804512_900abb89d1_n.jpg",
  photo_31: "https://live.staticflickr.com/65535/54844452106_c0733a56c5_n.jpg",
  photo_32: "https://live.staticflickr.com/65535/55073705541_f7c5f26ac9_n.jpg",
  photo_33: "https://live.staticflickr.com/65535/55073868538_209ba86775_n.jpg",
  photo_34: "https://live.staticflickr.com/65535/55074070595_0c0dd5f5ca_w.jpg",
  photo_35: "https://live.staticflickr.com/65535/55073963399_f568915d4c_n.jpg",
  photo_36: "https://live.staticflickr.com/65535/55073709671_20289f6e33_n.jpg",
  photo_37: "https://live.staticflickr.com/65535/55074074135_d683c24530_n.jpg",
  photo_38: "https://live.staticflickr.com/65535/55072800237_36804a8530_n.jpg",
  photo_39: "https://live.staticflickr.com/65535/55030666682_e25bbe287d_q.jpg",
  photo_40: "https://live.staticflickr.com/65535/55073904563_60eeeb2eda_n.jpg",
  photo_41: "https://live.staticflickr.com/65535/54739295981_fe3b8aa81c_n.jpg",
  photo_42: "https://live.staticflickr.com/65535/55073900268_e3a20cec69_n.jpg",
  photo_43: "https://live.staticflickr.com/65535/54808689458_ab110d8586_n.jpg",
  photo_44: "https://live.staticflickr.com/65535/55073925593_5a72a752e5_n.jpg",
  photo_45: "https://live.staticflickr.com/65535/55073959159_0c9bfeab18_n.jpg",
  photo_46: "https://live.staticflickr.com/65535/55073900233_644a2f57b2_n.jpg",
  photo_47: "https://live.staticflickr.com/65535/55073705556_52b79376d6_n.jpg",
  photo_48: "https://live.staticflickr.com/65535/55073908283_3ef5ef2a22_n.jpg", 
  photo_49: "https://live.staticflickr.com/65535/55074074425_41dc1dea97_w.jpg",
  photo_50: "https://live.staticflickr.com/65535/55074070725_1fcbb236e8_m.jpg",
  photo_51: "https://live.staticflickr.com/65535/55072804422_76c85b7698_m.jpg", 
  photo_52: "https://live.staticflickr.com/65535/55073963564_67f616a7d1_m.jpg",
  photo_53: "https://live.staticflickr.com/65535/55072807922_3e2cf39318_m.jpg",
  photo_54: "https://live.staticflickr.com/65535/55073709706_7cb104f42c_n.jpg",
  photo_55: "https://live.staticflickr.com/65535/54975714697_ebbaf4c88d_n.jpg",
  photo_56: "https://live.staticflickr.com/65535/54976899835_f12e44ed31_n.jpg", 
  photo_57: "https://live.staticflickr.com/65535/54976850069_bfb4bdffb7_n.jpg",
  photo_58: "https://live.staticflickr.com/65535/54933128268_85c08c2d2b_n.jpg",
  photo_59: "https://live.staticflickr.com/65535/54910741408_b7a6b78cd1_z.jpg",
  photo_60: "https://live.staticflickr.com/65535/54925827607_61bfd16b96_n.jpg",
  photo_61: "https://live.staticflickr.com/65535/55054696521_740978314c_n.jpg",
  photo_62: "https://live.staticflickr.com/65535/54947528408_1f3c94b9fa_m.jpg",
  photo_63: "https://live.staticflickr.com/65535/54872148709_fa26b0553f_n.jpg",
  photo_64: "https://live.staticflickr.com/65535/54926662471_dec9f5b1e3_z.jpg",
  photo_65: "https://live.staticflickr.com/65535/54926694766_7e1d744da1_w.jpg"
  
};
// ---------------------------------------------------------
// GLOBAL STATE
// ---------------------------------------------------------
const collected = {};              // group -> count unlocked
const unlockedCards = new Set();   // card.name of unlocked

// ---------------------------------------------------------
// LEGENDARY PARTICLE BURST
// ---------------------------------------------------------
function playLegendaryParticles() {
  const canvas = document.getElementById("legendaryCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const particles = [];
  const colors = ["gold", "#ffdd55", "#fff2b3", "#ffe680"];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 8,
      speedY: (Math.random() - 0.5) * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 60 + Math.random() * 20
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    if (particles.some(p => p.life > 0)) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

// ---------------------------------------------------------
// LEGENDARY REVEAL
// ---------------------------------------------------------
function showLegendaryReveal(card) {
  const legendaryOverlay = document.getElementById("legendaryReveal");
  const nameEl = document.getElementById("legendaryName");
  const sound = document.getElementById("legendarySound");

  if (!legendaryOverlay || !nameEl) return;

  nameEl.textContent = card.name;
  legendaryOverlay.style.display = "flex";

  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }

  playLegendaryParticles();
}

let pendingCardEl = null;
let pendingCorrectAnswer = null;

document.getElementById("closeLegendary")?.addEventListener("click", () => {
  const legendaryOverlay = document.getElementById("legendaryReveal");
  if (legendaryOverlay) legendaryOverlay.style.display = "none";
  pendingCardEl = null;
  pendingCorrectAnswer = null;
});

// ---------------------------------------------------------
// QUESTION SYSTEM
// ---------------------------------------------------------
const questionOverlay = document.getElementById("questionOverlay");
const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");
const cancelQuestion = document.getElementById("cancelQuestion");
const questionError = document.getElementById("questionError");

function getDifficultyForRarity(rarity) {
  switch (rarity.toLowerCase()) {
    case "common": return 10;
    case "rare": return 20;
    case "epic": return 50;
    case "legendary": return 100;
    default: return 10;
  }
}

function generateQuestion(rarity) {
  const max = getDifficultyForRarity(rarity);
  const a = Math.floor(Math.random() * max) + 1;
  const b = Math.floor(Math.random() * max) + 1;

  let op = "+";
  if (rarity.toLowerCase() === "rare") op = Math.random() < 0.5 ? "+" : "-";
  if (rarity.toLowerCase() === "epic") op = Math.random() < 0.5 ? "+" : "×";
  if (rarity.toLowerCase() === "legendary") op = ["+", "-", "×"][Math.floor(Math.random() * 3)];

  let question = "";
  let answer = 0;

  if (op === "+") {
    question = `${a} + ${b}`;
    answer = a + b;
  } else if (op === "-") {
    const big = Math.max(a, b);
    const small = Math.min(a, b);
    question = `${big} - ${small}`;
    answer = big - small;
  } else {
    const aa = Math.floor(Math.random() * 10) + 1;
    const bb = Math.floor(Math.random() * 10) + 1;
    question = `${aa} × ${bb}`;
    answer = aa * bb;
  }

  return { question, answer };
}

function askQuestionForCard(cardEl, rarity) {
  const { question, answer } = generateQuestion(rarity);
  pendingCardEl = cardEl;
  pendingCorrectAnswer = answer;

  if (!questionOverlay) return;

  questionText.textContent = question;
  answerInput.value = "";
  questionError.textContent = "";
  questionOverlay.style.display = "flex";
  answerInput.focus();
}

// ---------------------------------------------------------
// GROUP STATUS + PROGRESS
// ---------------------------------------------------------
const groupStatusEl = document.getElementById("groupStatus");

function updateProgressBar(group) {
  const total = allCards.filter(c => c.group === group).length;
  const got = collected[group] || 0;
  const percent = (got / total) * 100;

  const id = "progress-" + group.replace(/\s+/g, '');
  const bar = document.getElementById(id);
  if (bar) bar.style.width = percent + "%";
}

function showGroupComplete(group) {
  const overlay = document.getElementById("groupCompleteOverlay");
  const nameEl = document.getElementById("completeGroupName");
  if (!overlay || !nameEl) return;

  nameEl.textContent = `${group} Completed!`;
  overlay.style.display = "flex";
}

document.getElementById("closeGroupComplete")?.addEventListener("click", () => {
  const overlay = document.getElementById("groupCompleteOverlay");
  if (overlay) overlay.style.display = "none";
});

function updateGroupStatus(card) {
  const group = card.group;
  if (!collected[group]) collected[group] = 0;
  collected[group]++;

  const totalInGroup = allCards.filter(c => c.group === group).length;
  const left = totalInGroup - collected[group];

  if (groupStatusEl) {
    groupStatusEl.textContent = `${left} card${left !== 1 ? "s" : ""} left in ${group}`;
  }

  updateProgressBar(group);

  if (left === 0) {
    showGroupComplete(group);
  }
}

// ---------------------------------------------------------
// PROGRESS BARS INIT
// ---------------------------------------------------------
function createProgressBars() {
  const container = document.getElementById("progressBars");
  if (!container) return;

  container.innerHTML = "";
  const groups = [...new Set(allCards.map(c => c.group))];

  groups.forEach(group => {
    const div = document.createElement("div");
    div.classList.add("progress-wrapper");

    div.innerHTML = `
      <div class="progress-label">${group}</div>
      <div class="progress-bar">
        <div class="progress-fill" id="progress-${group.replace(/\s+/g, '')}"></div>
      </div>
    `;

    container.appendChild(div);
  });
}

createProgressBars();

// ---------------------------------------------------------
// BINDER VIEW
// ---------------------------------------------------------
function openBinder() {
  const overlay = document.getElementById("binderOverlay");
  const content = document.getElementById("binderContent");
  if (!overlay || !content) return;

  content.innerHTML = "";

  const groups = [...new Set(allCards.map(c => c.group))];

  groups.forEach(group => {
    const title = document.createElement("h2");
    title.classList.add("binder-group-title");
    title.textContent = group;
    content.appendChild(title);

    const grid = document.createElement("div");
    grid.classList.add("binder-grid");

    const cardsInGroup = allCards.filter(c => c.group === group);

    cardsInGroup.forEach(card => {
      const cardEl = document.createElement("div");
      cardEl.classList.add("binder-card");

      const img = document.createElement("img");
      img.src = card.image;

      const isUnlocked = unlockedCards.has(card.name);

      if (!isUnlocked) {
        img.classList.add("binder-locked");
      } else if (card.justUnlocked) {
        cardEl.classList.add("binder-new");
        card.justUnlocked = false;
      }

      cardEl.appendChild(img);
      grid.appendChild(cardEl);
    });

    content.appendChild(grid);
  });

  overlay.style.display = "block";
}

function closeBinder() {
  const overlay = document.getElementById("binderOverlay");
  if (overlay) overlay.style.display = "none";
}

document.getElementById("openBinderBtn")?.addEventListener("click", openBinder);
document.getElementById("closeBinderBtn")?.addEventListener("click", closeBinder);

// ---------------------------------------------------------
// RANDOM CARD DRAW (ONE AT A TIME)
// ---------------------------------------------------------
const slot = document.getElementById("singleCardSlot");
const nextBtn = document.getElementById("nextCardBtn");

function drawRandomCard() {
  if (!slot) return;
  const card = allCards[Math.floor(Math.random() * allCards.length)];

  const cardEl = document.createElement("div");
  cardEl.classList.add("card", "pop-in");
  cardEl.classList.add(card.rarity.toLowerCase());
  cardEl.classList.add("bg-" + card.background);

  if (card.featured) {
    cardEl.classList.add("featured-card");
  }

  cardEl.cardData = card;

  cardEl.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${card.image}" alt="${card.name}">
      </div>
      <div class="card-back">${card.rarity}</div>
    </div>
  `;

  cardEl.addEventListener("click", () => {
    if (!cardEl.classList.contains("flipped")) {
      askQuestionForCard(cardEl, card.rarity);
    }
  });

  slot.innerHTML = "";
  slot.appendChild(cardEl);
}

nextBtn?.addEventListener("click", drawRandomCard);
drawRandomCard();

// ---------------------------------------------------------
// ANSWER HANDLERS
// ---------------------------------------------------------
submitAnswer?.addEventListener("click", () => {
  const userVal = parseInt(answerInput.value, 10);
  if (isNaN(userVal)) {
    questionError.textContent = "Please enter a number.";
    return;
  }

  if (userVal === pendingCorrectAnswer) {
    if (pendingCardEl) {
      pendingCardEl.classList.add("flipped");
      const cardData = pendingCardEl.cardData;

      unlockedCards.add(cardData.name);
      cardData.justUnlocked = true;
      updateGroupStatus(cardData);

      if (cardData.rarity.toLowerCase() === "legendary") {
        showLegendaryReveal(cardData);
      }
    }

    if (questionOverlay) questionOverlay.style.display = "none";
    pendingCardEl = null;
    pendingCorrectAnswer = null;
  } else {
    questionError.textContent = "Try again!";
  }
});

cancelQuestion?.addEventListener("click", () => {
  if (questionOverlay) questionOverlay.style.display = "none";
  pendingCardEl = null;
  pendingCorrectAnswer = null;
});

answerInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submitAnswer.click();
  }
});

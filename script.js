// ---------------------------------------------------------
// CARD DATABASE
// ---------------------------------------------------------
const allCards = [
  // GROUP 1 — EMILY COLLECTION (pink)
  { name: "Emily Card 1", group: "Emily Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073712856_acd8c53e28_n.jpg", background: "pink" },
  { name: "Emily Card 2", group: "Emily Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/54739650405_9052a5c9f6_n.jpg", background: "pink" },
  { name: "Emily Card 3", group: "Emily Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073712821_945cda4304_n.jpg", background: "pink" },
  { name: "Emily Card 4", group: "Emily Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074070485_faee8a10e6.jpg", background: "pink" },
  { name: "Emily Card 5", group: "Emily Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073904518_35de7888d6_n.jpg", background: "pink" },
  { name: "Emily Rare 6", group: "Emily Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55072800217_ffb5ccba6e_n.jpg", background: "pink" },
  { name: "Emily Rare 7", group: "Emily Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55073904368_f8eaa361f2.jpg", background: "pink" },
  { name: "Emily Rare 8", group: "Emily Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55074070775_38e87c2103_z.jpg", background: "pink" },
  { name: "Emily Rare 9", group: "Emily Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55077676787_e7ba0aa0b9_n.jpg", background: "pink" },
  { name: "Emily Epic 10", group: "Emily Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55072800182_36047cc1e9_m.jpg", background: "pink" },
  { name: "Emily Epic 11", group: "Emily Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55073972874_11a521f04a_m.jpg", background: "pink" },
  { name: "Emily Legendary 12", group: "Emily Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/55074070360_60b687dac4_m.jpg", background: "pink" },

  // GROUP 2 — THE K‑POP COLLECTION (purple)
  { name: "K‑Pop Card 13", group: "The K-Pop Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073925563_b54ac6c1bc_w.jpg", background: "purple" },
  { name: "K‑Pop Card 14", group: "The K-Pop Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072825202_59c80f525b_w.jpg", background: "purple" },
  { name: "K‑Pop Card 15", group: "The K-Pop Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073925548_30a8b18dfc.jpg", background: "purple" },
  { name: "K‑Pop Rare 16", group: "The K-Pop Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55073904303_df0b99067f_z.jpg", background: "purple" },
  { name: "K‑Pop Rare 17", group: "The K-Pop Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55074070340_6aff6709f1_n.jpg", background: "purple" },
  { name: "K‑Pop Epic 18", group: "The K-Pop Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/54834501876_76c5e902e0_n.jpg", background: "purple" },
  { name: "K‑Pop Legendary 19", group: "The K-Pop Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/55073709526_f3d58a7c4f_n.jpg", background: "purple", featured: true },

  // GROUP 3 — FAMILY COLLECTION (yellow)
  { name: "Family Card 20", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072770027_132a8b5c2b_n.jpg", background: "yellow" },
  { name: "Family Card 21", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073963474_76a92ac1c9.jpg", background: "yellow" },
  { name: "Family Card 22", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074066030_07aae56713_w.jpg", background: "yellow" },
  { name: "Family Card 23", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072804282_520cc6b793_z.jpg", background: "yellow" },
  { name: "Family Card 24", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073709881_b4e6bc201c_w.jpg", background: "yellow" },
  { name: "Family Card 25", group: "Family Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072807707_212d059685_w.jpg", background: "yellow" },
  { name: "Family Rare 26", group: "Family Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55072800272_a9b9a2acaf_n.jpg", background: "yellow" },
  { name: "Family Rare 27", group: "Family Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55074074430_73abf1a374_n.jpg", background: "yellow" },
  { name: "Family Rare 28", group: "Family Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/54844452101_85decef6bf_n.jpg", background: "yellow" },
  { name: "Family Rare 29", group: "Family Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55074051129_864a0c8d60_n.jpg", background: "yellow" },
  { name: "Family Epic 30", group: "Family Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55072804512_900abb89d1_n.jpg", background: "yellow" },
  { name: "Family Epic 31", group: "Family Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/54844452106_c0733a56c5_n.jpg", background: "yellow" },
  { name: "Family Epic 32", group: "Family Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55073705541_f7c5f26ac9_n.jpg", background: "yellow" },
  { name: "Family Legendary 33", group: "Family Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/55073868538_209ba86775_n.jpg", background: "yellow" },

  // GROUP 4 — FUN COLLECTION (black)
  { name: "Fun Card 34", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074070595_0c0dd5f5ca_w.jpg", background: "black" },
  { name: "Fun Card 35", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073963399_f568915d4c_n.jpg", background: "black" },
  { name: "Fun Card 36", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073709671_20289f6e33_n.jpg", background: "black" },
  { name: "Fun Card 37", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074074135_d683c24530_n.jpg", background: "black" },
  { name: "Fun Card 38", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072800237_36804a8530_n.jpg", background: "black" },
  { name: "Fun Card 39", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55030666682_e25bbe287d_q.jpg", background: "black" },
  { name: "Fun Card 40", group: "Fun Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073904563_60eeeb2eda_n.jpg", background: "black" },
  { name: "Fun Rare 41", group: "Fun Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/54739295981_fe3b8aa81c_n.jpg", background: "black" },
  { name: "Fun Rare 42", group: "Fun Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55073900268_e3a20cec69_n.jpg", background: "black" },
  { name: "Fun Rare 43", group: "Fun Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/54808689458_ab110d8586_n.jpg", background: "black" },
  { name: "Fun Rare 44", group: "Fun Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55073925593_5a72a752e5_n.jpg", background: "black" },
  { name: "Fun Epic 45", group: "Fun Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55073959159_0c9bfeab18_n.jpg", background: "black" },
  { name: "Fun Epic 46", group: "Fun Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/55073900233_644a2f57b2_n.jpg", background: "black" },
  { name: "Fun Legendary 47", group: "Fun Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/55073705556_52b79376d6_n.jpg", background: "black" },

  // GROUP 5 — THE ART COLLECTION (green)
  { name: "Art Card 48", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073908283_3ef5ef2a22_n.jpg", background: "green" },
  { name: "Art Card 49", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074074425_41dc1dea97_w.jpg", background: "green" },
  { name: "Art Card 50", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55074070725_1fcbb236e8_m.jpg", background: "green" },
  { name: "Art Card 51", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072804422_76c85b7698_m.jpg", background: "green" },
  { name: "Art Card 52", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55073963564_67f616a7d1_m.jpg", background: "green" },
  { name: "Art Card 53", group: "The Art Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/55072807922_3e2cf39318_m.jpg", background: "green" },
  { name: "Art Rare 54", group: "The Art Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55073709706_7cb104f42c_n.jpg", background: "green" },
  { name: "Art Rare 55", group: "The Art Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/54975714697_ebbaf4c88d_n.jpg", background: "green" },
  { name: "Art Epic 56", group: "The Art Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/54976899835_f12e44ed31_n.jpg", background: "green" },
  { name: "Art Legendary 57", group: "The Art Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/54976850069_bfb4bdffb7_n.jpg", background: "green" },

  // GROUP 6 — THE SASSYBYTE COLLECTION (teal)
  { name: "SassyByte Card 58", group: "The SassyByte Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/54933128268_85c08c2d2b_n.jpg", background: "teal" },
  { name: "SassyByte Card 59", group: "The SassyByte Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/54910741408_b7a6b78cd1_z.jpg", background: "teal" },
  { name: "SassyByte Card 60", group: "The SassyByte Collection", rarity: "Common", image: "https://live.staticflickr.com/65535/54925827607_61bfd16b96_n.jpg", background: "teal" },
  { name: "SassyByte Rare 61", group: "The SassyByte Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/55054696521_740978314c_n.jpg", background: "teal" },
  { name: "SassyByte Rare 62", group: "The SassyByte Collection", rarity: "Rare", image: "https://live.staticflickr.com/65535/54947528408_1f3c94b9fa_m.jpg", background: "teal" },
  { name: "SassyByte Epic 63", group: "The SassyByte Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/54872148709_fa26b0553f_n.jpg", background: "teal" },
  { name: "SassyByte Epic 64", group: "The SassyByte Collection", rarity: "Epic", image: "https://live.staticflickr.com/65535/54926662471_dec9f5b1e3_z.jpg", background: "teal" },
  { name: "SassyByte Legendary 65", group: "The SassyByte Collection", rarity: "Legendary", image: "https://live.staticflickr.com/65535/54926694766_7e1d744da1_w.jpg", background: "teal" }
];

// ---------------------------------------------------------
// GLOBAL STATE
// ---------------------------------------------------------
const collected = {};
const unlockedCards = new Set();

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

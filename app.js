import countries from "./data.js";

const tillar = countries.reduce((acc, curVal) => {
  if (curVal.languages && typeof curVal.languages === "object") {
    const languages = Object.keys(curVal.languages);
    languages.forEach((tilNomi) => {
      acc[tilNomi] = (acc[tilNomi] || 0) + 1;
    });
  }
  return acc;
}, {});

// Tillarga ko'ra sanash natijasini massivi sifatida olish va eng ko'p tillarni olish
const top5Tillar = Object.entries(tillar)
  .sort((a, b) => b[1] - a[1]) // Sanash asosida kamaytirish tartibida
  .slice(0, 5) // Faqat birinchi 5 ta tilni olish
  .map(([tilNomi, soni]) => `${tilNomi}: ${soni}`); // Natijalarni formatlash

console.log(top5Tillar);

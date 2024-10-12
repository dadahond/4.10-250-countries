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

const top5Tillar = Object.entries(tillar)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 5)
  .map(([tilNomi, soni]) => `${tilNomi}: ${soni}`);

console.log(top5Tillar);

// Imtihon masalalari

// 1-masala function hosil qiling. u n sonini qabul qiladi function bizga 1dan n sonigacha bolgan sonlar yegindisini hisoblab qaytarsin  n>1

// let hisoblab = (n) => {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// };

// console.log(hisoblab(5));

// >================================================================

// 2-masala funcion hosil qiling getRandom nomli ikkita parametr qabul qiladi. shular orasidagi random son qaytarin  ichida avval qaysi biri max qaysi biri min ekanigini aniqlab olsin

// function getRandom(a, b) {
//   let min = Math.min(a, b);
//   let max = Math.max(a, b);

//   let result = Math.floor(Math.random() * (max - min + 1)) + min;

//   return result;
// }

// console.log(getRandom(10, 1));
// console.log(getRandom(50, 100));

// >===================================================================

// 3 masala function uchun xonalik son qabul qiladi. maslan 111 => qaytarsin "bir yuz o'n bir"  swtich blan

// function sonniSozdaAyt(n) {
//   if (n < 100 || n > 999) return "Faqat uch xonali son kiriting!";

//   let yuzlar = Math.floor(n / 100);
//   let onlar = Math.floor((n % 100) / 10);
//   let birlar = n % 10;

//   let natija = "";

//   switch (yuzlar) {
//     case 1:
//       natija += "bir yuz ";
//       break;
//     case 2:
//       natija += "ikki yuz ";
//       break;
//     case 3:
//       natija += "uch yuz ";
//       break;
//     case 4:
//       natija += "to'rt yuz ";
//       break;
//     case 5:
//       natija += "besh yuz ";
//       break;
//     case 6:
//       natija += "olti yuz ";
//       break;
//     case 7:
//       natija += "yetti yuz ";
//       break;
//     case 8:
//       natija += "sakkiz yuz ";
//       break;
//     case 9:
//       natija += "to'qqiz yuz ";
//       break;
//   }

//   switch (onlar) {
//     case 1:
//       natija += "o'n ";
//       break;
//     case 2:
//       natija += "yigirmata ";
//       break;
//     case 3:
//       natija += "o'ttiz ";
//       break;
//     case 4:
//       natija += "qirq ";
//       break;
//     case 5:
//       natija += "ellik ";
//       break;
//     case 6:
//       natija += "oltmish ";
//       break;
//     case 7:
//       natija += "yetmish ";
//       break;
//     case 8:
//       natija += "sakkizon ";
//       break;
//     case 9:
//       natija += "to'qson ";
//       break;
//   }

//   switch (birlar) {
//     case 1:
//       natija += "bir";
//       break;
//     case 2:
//       natija += "ikki";
//       break;
//     case 3:
//       natija += "uch";
//       break;
//     case 4:
//       natija += "to'rt";
//       break;
//     case 5:
//       natija += "besh";
//       break;
//     case 6:
//       natija += "olti";
//       break;
//     case 7:
//       natija += "yetti";
//       break;
//     case 8:
//       natija += "sakkiz";
//       break;
//     case 9:
//       natija += "to'qqiz";
//       break;
//   }

//   return natija.trim();
// }

// console.log(sonniSozdaAyt(542));
// console.log(sonniSozdaAyt(105));

// >===============================================================

// 4-masala function xosil qiling sonning polindrome ekanligini aniqlasin bunda istalgan honalik son bolishi mumkin => true yoki false qaytarsin  while bilan  ishlansin

// function isPalindrome(n) {
//   if (n < 0) return false;

//   let original = n;
//   let reversed = 0;

//   while (n > 0) {
//     let lastDigit = n % 10;

//     reversed = reversed * 10 + lastDigit;

//     n = Math.floor(n / 10);
//   }

//   return original === reversed;
// }

// console.log(isPalindrome(121));
// console.log(isPalindrome(55555));

// >===========================================================

// 5 function son qabul qiladi uni tub yoki tub emasligini aniqlab qaytarsin.

// let tubson = (tub) => (tub % 2 == 0 ? "Tub son emas" : "Tub son ");
// console.log(tubson(20));
// console.log(tubson(3));

// =============================================================================

// 6 function hosil qiling u Math.sign() methodini vazifasini bajarsin ichida Math.sign() ishlatilinmasin

// const mySign = (n) => {
//   return n > 0 ? 1 : n < 0 ? -1 : 0;
// };

// console.log(mySign(15));
// console.log(mySign(-7));
// console.log(mySign(0));

// >================================================================================

// 7 function hosil qiling u Math.pow() ni vazifasini bajarsin ichida Math.pow ishlatilinmasin.

// let sonDarja = (son) => {
//   return son ** 2;
// };

// console.log(sonDarja(15));

// >===================================================================================

//8-masala Birinchi harfni katta qilish  shunday function yozing soznign birinchi harfini katta harf qilib bersin unda charAt() toUpperCase() va slice() methodlaridan togri foydalaning

// function sozRefresh(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }

// console.log(sozRefresh("SHahRIBonu"));
// ======================================

// 9  function tuzing unga string va harf beriladi. o'sha harf  stringda necha marta qatnashganini qaytarsin.

// function LetterInText(str, letter) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(LetterInText("it's fantastiv game for class", "a"));
// =======================================

// 10 kabisa yilini aniqlaydigan function hosil qiling.
// Kabisa yili â€” Grigoriy taqvimida 366 kundan iborat boâ€˜lib, fevral oyiga bir kun (29-fevral) qoâ€˜shiladigan yildir. Bu yil har toâ€˜rt yilda bir marta keladi, oâ€˜rtacha quyosh yili va kalendar yili oâ€˜rtasidagi farqni (taxminan 6 soat) tuzatish uchun xizmat qiladi. 4 ga qoldiqsiz boâ€˜linadigan yillar odatda kabisa yili hisoblanadi.
// Wikipedia
// Wikipedia
//  +2
// Kabisa yilini aniqlash qoidalari:
// 4 ga boâ€˜linadigan yillar: Agar yil raqami 4 ga boâ€˜linsa, u kabisa yili hisoblanadi (masalan, 2024, 2028, 2032).
// 100 ga boâ€˜linadigan yillar (istisno): Agar yil 100 ga boâ€˜linsa, lekin 400 ga boâ€˜linmasa, u kabisa yili boâ€˜lmaydi (masalan, 1700, 1800, 1900, 2100).
// 400 ga boâ€˜linadigan yillar: Agar yil 400 ga boâ€˜linsa, u kabisa yili hisoblanadi (masalan, 2000, 2400)

// function isKabisa(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return "Kabisa yil";
//   } else {
//     return "Kabisa emas";
//   }
// }

// console.log(isKabisa(2024));
// console.log(isKabisa(1900));

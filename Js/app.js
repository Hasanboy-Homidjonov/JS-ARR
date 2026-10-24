const numbers = [
  12, 7, 23, 4, 11, 18,
  5, 29, 10, 3, 16
];

const students = [
  { id: 1, name: "Ali", score: 75 },
  { id: 2, name: "Vali", score: 45 },
  { id: 3, name: "Sardor", score: 92 },
  { id: 4, name: "Madina", score: 60 },
  { id: 5, name: "Malika", score: 88 },
  { id: 6, name: "Aziz", score: 52 },
  { id: 7, name: "Zarina", score: 97 },
  { id: 8, name: "Jasur", score: 34 }
];

const products = [
  { id: 1, name: "Laptop", price: 8500000, stock: 12 },
  { id: 2, name: "Mouse", price: 150000, stock: 5 },
  { id: 3, name: "Keyboard", price: 350000, stock: 8 },
  { id: 4, name: "Monitor", price: 2200000, stock: 15 },
  { id: 5, name: "Headphones", price: 450000, stock: 3 }
];

// ----------------------------------------------------






// 1
// Tub sonlarni ajratish
// ARRAY
// numbers arrayidan faqat tub sonlarni ajratib olib, ularni yangi array ko‘rinishida qaytaradigan function yozing.

// 💡 Misol: [2, 4, 5, 9, 11] berilsa, natija [2, 5, 11] bo‘ladi. Tub son faqat 1 ga va o‘ziga qoldiqsiz bo‘linadi.


// ----------------Misol yechilishi---------------------

// const TubNum = arr => {
//     let arr1 = [];
//     for (let i of arr) {
//         if (i <= 1) continue;
//         let tubMi = true;
//         for (let k = 2; k <= Math.sqrt(i); k++){
//             if (i % k === 0) {
//                 tubMi = false;
//                 break;
//             }
//         }
//         if (tubMi) {
//             arr1.push(i);
//         }
//     }
//     return arr1;
// }
// console.log(TubNum(numbers));


// ==========================================

// 2
// Imtihondan o‘tgan talabalar
// FILTER
// students arrayidan bali 60 yoki undan yuqori bo‘lgan talabalarni ajratib, yangi array qaytaradigan function yozing.

// 💡 Shart: score >= 60. 60 ball olgan talaba ham natijaga kiritilishi kerak.


// -------------------Misol yechilish------------------

// const imtihondanOtgan = arr => {
//     let otganlar = [];
//     for (let i of arr) {
//         if (i.score >= 60) {
//             otganlar.push(i);
//         }
//     }
//     return otganlar;
// }
// console.log(imtihondanOtgan(students));

// =============================================


// 3
// Sonlar ko‘paytmasi
// REDUCE / LOOP
// numbers arrayidagi barcha sonlarni bir-biriga ko‘paytirib, yakuniy natijani qaytaradigan function yozing.

// 💡 Misol: [2, 3, 4] berilsa, natija 24 bo‘ladi.


// ----------------Misolni ishlanishi-----------------

// const numbers = [
//   12, 7, 23, 4, 11, 18,
//   5, 29, 10, 3, 16
// ];

// function kopaytmaArr(arr) {
//     let count = 1;
//     for (let i of arr) {
//         count *= i;
//     }
//     return count;
// }

// console.log(kopaytmaArr(numbers));

// =============================================
// Omborda kam qolgan mahsulotlar
// products arrayidan ombordagi soni 10 tadan kam bo‘lgan mahsulotlarni tanlab, yangi array qaytaradigan function yozing.

// 💡 Shart: stock < 10. Aynan 10 ta mahsulot qolgan bo‘lsa, uni qo‘shmang.


// ----------Misolni ishlanilishi-----------


// const ondanKammi = arr => {
//   let array = [];
//   for (let i of arr) {
//     if (i.stock < 10) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// console.log(ondanKammi(products));


// ==========================================

// 5. ID orqali mahsulotni topish
// Function bitta id qabul qilsin. U products arrayidan shu ID ga mos mahsulotni topib qaytarsin.

// 💡 Misol: 3 yuborilsa, Keyboard mahsuloti qaytadi. ID topilmasa, undefined qaytishi mumkin.


// ----------Misolni ishlanlishi--------------------

// const idTop = (arr,ID) => {
//   for (let i of arr) {
//     if (i.id === ID) {
//       return i;
//     }
//   }
//   return undefined;
// }
// console.log(idTop(products,5));


// =======================================


// 6
// Eng yuqori ball olgan talaba
// students arrayidan eng katta score qiymatiga ega talabani topib, uning objectini qaytaradigan function yozing.

// 💡 Kutilgan natija: Zarina, chunki uning bali 97 — arraydagi eng yuqori ball.

// -------Misolni ishlanishi---------------------

// const engBalanBal = arr => {
//   if (arr.length === 0) return undefined;
//   let max = arr[0];
//   for (let i of arr) {
//     if (max.score <= i.score) {
//       max = i;
//     }
//   }
//   return max;
// }
// console.log(engBalanBal(students));

// =================================

// 7
// Yangi talaba qo‘shish
// Yangi talaba objectini qabul qilib, uni students arrayiga qo‘shadigan function yozing. Qo‘shilgandan keyin yangilangan arrayni qaytaring.

// 💡 Yangi talaba: { id: 9, name: "Kamola", score: 81 }. Objectda id, name va score bo‘lishi kerak.

// -------------Misolni ishlanilishi-----------------

// const OdamQosh = (arr,newPerson) => {
//   arr.push(newPerson)
//   return arr;
// }
// const yangiTalaba = { id: 9, name:"Hasanboy", score:100 };
// console.log(OdamQosh(students,yangiTalaba));


// //=========================================

// 8
// Qimmat mahsulotlarni ajratish
// products arrayidan narxi 500 000 so‘mdan yuqori bo‘lgan mahsulotlarni tanlab, yangi array qaytaradigan function yozing.

// 💡 Shart: price > 500000. Narxi aynan 500 000 so‘m bo‘lgan mahsulot kiritilmaydi.

// -------------------Misolni ishlanishi---------------

// const beshYuzdanKattalar = arr => {
//   let array = [];
//   for (let i of arr) {
//     if (i.price > 500000) {
//       array.push(i);
//     }
//   }
//   return array;
// }
// console.log(beshYuzdanKattalar(products));

// ===============================================

// 9
// Har bir talabaning balini oshirish
// Har bir talabaning score qiymatiga 10 ball qo‘shib, yangi array qaytaradigan function yozing. Asl students arrayi o‘zgarmasligi kerak.

// 💡 Misol: 75 ball 85 ga, 45 ball esa 55 ga aylanadi. Yangi arraydagi har bir talaba objectini alohida yarating.

// -----------Misolni ishlanishi-----------------

// function BalQosh(arr) {
//   let array = [];
//   for (let i of arr) {
//     let yangiBal;
//     if (i.score <= 90) {
//       yangiBal = i.score + 10;
//     }
//     else {
//       yangiBal = 100;
//     }
//     let yangiTalaba = {
//       id: i.id,
//       name: i.name,
//       score: yangiBal
//     }
//     array.push(yangiTalaba)
//   }
//   return array;
// }
// console.log(students);
// console.log(BalQosh(students));
// =============================================

// Barcha mahsulotlarning umumiy qiymati
// Har bir mahsulot uchun narxini ombordagi soniga ko‘paytiring. Keyin barcha mahsulotlar qiymatini qo‘shib, umumiy summani qaytaradigan function yozing.

// 💡 Hisoblash: har bir mahsulot uchun price * stock, so‘ng barcha natijalarni jamlang.

// --------------Misoni ishlanishi------------------

// function summaHisoblash(arr) {
//   let summa = 0;
//   for (let i of arr) {
//     summa += i.price * i.stock;
//   }
//   return summa;
// }
// console.log(summaHisoblash(products));

// =====================================


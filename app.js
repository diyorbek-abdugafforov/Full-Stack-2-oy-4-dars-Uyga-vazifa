// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
// va ularning yig’indisini qaytarib bersin.
// decloration usulida

// function sum(x,y) {
//     return x+y;
// }

// console.log(sum(3,2));
// console.log(sum(-3,-6));
// console.log(sum(7,3));


// =======================================================================

// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga
// o’girib beradigan funksiya yasang.
// expression usulida

// const toSekunds=function (minutes){
//     return minutes*60;
// }

// console.log(toSekunds(5));
// console.log(toSekunds(3));
// console.log(toSekunds(2));



// ===============================================================================


// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.
// arrow function usulida

// const nextInteger=int=>{
//     return int+1
// } 

// console.log(nextInteger(0));
// console.log(nextInteger(9));
// console.log(nextInteger(-3));



// ============================================================================

// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2
// decloration usulida

// function uchburchakYuzi(asos, balandlik) {
//     return (asos*balandlik)/2;
// }

// console.log(uchburchakYuzi(3,2));
// console.log(uchburchakYuzi(7,4));
// console.log(uchburchakYuzi(10,10));


// ===============================================================================


// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling.
// expression usulida

// const ageToDays=function (age) {
//     return age*365;
    
// }

// console.log(ageToDays(65));
// console.log(ageToDays(0));
// console.log(ageToDays(20));

// ====================================================================================


// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing.
// arrow function usulida

// const Kub=son=> {
//     return son**3;
// }

// console.log(Kub(3));
// console.log(Kub(5));
// console.log(Kub(10));


// ====================================================================================


// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya
// yasang.
//decloration usulida

// function firstElement(arr) {
//     return arr[0];
// }

// console.log(firstElement([1, 2, 3]));
// console.log(firstElement([80, 5, 100]));
// console.log(firstElement([-500, 0, 50]));

// =======================================================================================


// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.
//expression usulida

// const power=function (x,y) {
//     return x*y;
// }
// console.log(power(230,10));
// console.log(power(110,3));
// console.log(power(480,20));


// ==================================================================================

// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang.
//arrow function usulida

// const hourToSekunds=hour=>{
//     return hour*3600;
// }

// console.log(hourToSekunds(2));
// console.log(hourToSekunds(10));
// console.log(hourToSekunds(24));

// ===================================================================================

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1
// decloration usulida

// function uchinchiTomon(tomon1, tomon2) {
//     return (tomon1+tomon2)-1;
// }

// console.log(uchinchiTomon(8,10));
// console.log(uchinchiTomon(5,7));
// console.log(uchinchiTomon(9,2));

// ===================================================================================

// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang.
// expression usulida

// const qoldiq=function (son1,son2) {
//     return son1%son2;
// }

// console.log(qoldiq(1,3));
// console.log(qoldiq(3,4));
// console.log(qoldiq(-9,45));
// console.log(qoldiq(5,5));


// =======================================================================================

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni
// arrow function usulida

// const turtburchakYuzi=(boyi, eni)=>{
//     return boyi*eni;
// }

// console.log(turtburchakYuzi(6,7));
// console.log(turtburchakYuzi(20,10));
// console.log(turtburchakYuzi(2,9));

// ===================================================================================

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.
// decloration usulida

// function stringQoshish(a) {
//     return "Something" +" "+a;
// } 

// console.log(stringQoshish("is better than nothing"));
// console.log(stringQoshish("Bob Jane"));
// console.log(stringQoshish("something"));

// ===================================================================================

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna:
// kvadrat(5) ᔍ 25
// kvadrat(9) ᔍ 81
// kvadrat(100) ᔍ 10000
//expression usulida

// const kvadrat=function (son) {
//     return son**2;
// }

// console.log(kvadrat(5));
// console.log(kvadrat(9));
// console.log(kvadrat(100));

// =================================================================================

// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.
// arrow function usulida

// const noldan=raqam=>{
//     if(raqam<=0) {
//         return true;
//     } else{
//        return false; 
//     } 
// }

// console.log(noldan(5));
// console.log(noldan(0));
// console.log(noldan(-2));

// ======================================================================================

// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180
// decloration usulda

// function ichkiBurchaklar(n) {
//     return (n-2)*180;
// }

// console.log(ichkiBurchaklar(3));
// console.log(ichkiBurchaklar(4));
// console.log(ichkiBurchaklar(6));

// ======================================================================================

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang
// expression usulida

// const ochkolar=function (x,y) {
//     return 2*x+3*y;
// }

// console.log(ochkolar(1,1));
// console.log(ochkolar(7,5));
// console.log(ochkolar(38,8));

// ===========================================================================================

// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// Namuna:
// nameString("Mubashir") ᔍ "MubashirEdabit"
// nameString("Matt") ᔍ "MattEdabit"
// nameString("javaScript") ᔍ "javaScriptEdabit"
// arrow function usulida

// const concat=soz=>{
//     return soz+"Edabit"
// }

// console.log(concat("Mubashir"));
// console.log(concat("Matt"));
// console.log(concat("javaScript"));

// =============================================================================================

// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.
// decloration usulida 

// function ikkitaSon(x,y) {
//     if((x+y)<100){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(ikkitaSon(22,15));
// console.log(ikkitaSon(83,34));
// console.log(ikkitaSon(3,77));

// ===========================================================================================

// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:
// printArray(1) ᔍ [1]
// printArray(3) ᔍ [1, 2, 3]
// printArray(6) ᔍ [1, 2, 3, 4, 5, 6]
// expression usulda

// const array=function (x) {
//     for(let i=1;i<=x;i++){
//         console.log(i);
//     }
    
// }
// console.log("===========================");
// array(1)
// console.log("===========================");
// array(3)
// console.log("===========================");
// array(6)
// console.log("===========================");

// =================================================================================================























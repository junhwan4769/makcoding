/*
  배열: Array
  연관된 값들을 하나의 그룹으로 묶어서 나열한 구조  
*/
const fruits = ["🍇","🍓","🍉","🥝","🍊"]
console.log(fruits[0]); // 🍇 
console.log(fruits[1]); // 🍓 
console.log(fruits[2]); // 🍉


//for(변수선언및초기화; 조건식; 증감연산자){
for(let i = 0; i < fruits.length; i = i + 1){
  console.log(fruits[i]);
}
//console.log(fruits[3]); // 🥝
//console.log(fruits[4]); // 🍊
// for(변수선언및초기화;조건식;증감연산자){
let i = 0 
for(let i = 0; i < 3; i = i + 1){

} // end of for 
// for문 안에서 선언한 변수는 for문 밖에서 사용 불가능하다. 
// for문 밖에서 선언한 변수는 for1.js 전역에서 접근이 가능하다. 
// 변수선언시 let을 생략했어도 프로그램이 중단되지 않았다. 
// 
console.log(i);
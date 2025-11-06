// //함수 선언시 function 예약어를 사용하면 
// //함수도 호이스팅이 일어남

// function router(){
//   console.log('router호출');
// }

// other(router)
// // 자바스크립트에서는 함수 안에서 또 다른 함수 구현이 가능하다. 
// // 자바스크립트에서는 함수 호출시 파라미터 자리에 함수를 넘길 수 있다. 
// // 함수도 마치 참조형처럼 사용할 수 있다. 
// function other(router){
//   console.log('other호출');
// function router2() {
//   console.log('router2');
//   }
//   router2()
// }

// const x = 1; //초기화 생략불가, 반드시 값을 주어야한다.
// let y; //초기화 생략가능. 
// console.log(y);

// function work(){
//   return 1
// }

// function work2(){
  
// }

// console.log(work());
// console.log(work2());

// 함수로 묶어내면 재사용이 가능하다
// 리턴타입은 언제 사용하나요?
const student = {
  html: 80,
  css: 70,
  javascript: 90
}
// student 학생의 중간고사 성적 총점을 구하는 함수를 선언하시오.
function total(){
  const tot = student.html + student.css + student.javascript
  // console.log(tot); 
  return tot
}
const tot = total()
console.log(tot);
//위에서 계산된 총점을 사용하여 평균을 구하는 함수를 선언하시오 
//계산된 평균값을 굳이 함수 밖에서 출력하시오 
function average(){
  const avg = tot / 3
  return avg
}
const avg = average()

console.log(`평균은 ${avg} 입니다.`);


// router()

//window.addEventListener('hashchange', router)

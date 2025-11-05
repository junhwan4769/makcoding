/*
= 하나면 대입연산자입니다.
-> 오른쪽에 있는 값을 왼쪽 변수에 대입해주세요 
== 오른쪽 값과 왼쪽 값이 같니? -> 반환값이 false 혹은 true -> 선택
-> 단 타입은 따지지 않는다. 
=== 세 개이면 두 개일때와 다른 점은 타입까지도 같은 지를 비교합니다. 
*/

if(1==="1"){ // number vs string
  // true일때만 실행기회를 갖는다. 
  console.log('같다');
}else{
  // if문 조건식에 결과가 거짓일때 실행 기회를 갖는다.
  console.log('다르다');
}

//논리 비교 
const a = 1 
const b = 2 
console.log(a == b); //false
console.log(a != b); //true

console.log(a >= b);
console.log(1 >= 2); // false
console.log(a <= b);
console.log(1 <= 2); // true
// boolean - true or false 
// if문이나 for문 조건식에 들어가니까... 

// 거짓
// 1) false
// 2) 0 - 0이 아닌 것들은 모두 true다.  
// 3) null
// 4) undefined 
// 5) NaN (Not a Number)
// 6)'' 빈문자열 
// if(500) console.log('참');
// if(0) {
//   console.log('거짓'); 
// }else{
//   console.log('참');
// }
// if(NaN){
//   console.log('거짓');
// }else{
//   console.log('참');
// }
// if(null){
//   console.log('거짓');
// }else{
//   console.log('null은 false입니다.');
// }
// if(undefined){
//   console.log('거짓');
// }else{
//   console.log('undefined은 false입니다.');
// }
// if(''){
//   console.log('싱글 쿼테이션 안에 띄어쓰기를 하면 참이다');
// }else{
//   console.log('빈 문자열은 false입니다.');
// }

// NaN(Not a Number)
console.log(typeof "1");
console.log(typeof 1);
console.log(2 +"3");
console.log(2 + parseInt("3"));
console.log(2 + parseInt("안녕"));
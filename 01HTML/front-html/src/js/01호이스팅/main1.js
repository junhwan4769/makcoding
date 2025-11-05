// const text ='hello'
// 호이스팅 때문에 선언이 끌어올려져서 오류가 안남
// 변수: 특정 데이터 값을 임시로 저장하는 공간 
// 특정값을 자주 사용해야 할때 
// 반복적인 구문(값)이 여러 코드에 걸쳐서 빈번히 쓰일때 
// ES5 - var -> 호이스팅 이슈 발생함
// ES6(ECMAScript 2015) - let, const, arrow function 
// 명명규칙 - 숫자로 시작 불가, 특수문자(_ , $), 예약어 불가, 대소문자

//console.log(text);

//var text = 'hello' //레거시 
//console.log(text);

//let j 
//console.log(j);

// 함수 호이스팅 
func1() //함수 호출이다 

function func1(){
  console.log(('func1'));
}

// func2() 화살표 함수는 호이스팅이 발동하지 않는다 - 에러가 난다 
const func2 = () => { // 화살표 함수, arrow function
  console.log('func2');
}
func2()

// func3()
const func3 = function(){
  console.log('func3');
}
func3()

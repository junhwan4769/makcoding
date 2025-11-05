// function methodA(){//파라미터가 없는 함수
//   console.log('파라미터가 없는 함수 호출');
// }

// function methodA(x=0){//파라미터가 하나 있는 함수
//   console.log('파라미터가 하나 있는 함수 호출');
// }

// function methodA(x, y){//파라미터가 두 개 있는 함수
//   console.log('파라미터가 두 개 있는 함수 호출');
// }

// methodA()
// methodA(2)
// methodA(1,2)

/* 
하나의 파일에 같은 이름의 함수가 여러개 있으면 구분할 수 없다.
맨 마지막에 선언된 함수가 호출되었다. 
즉 파라미터의 갯수를 다르게 주더라도 변화가 없다. 
*/

function deptDetail(param){
  console.log(param);
}
//insert here - deptdetail 함수를 호출하시오 
// deptDetail() 
// deptDetail(null) 
// deptDetail(1)
// deptDetail(1,5)
// deptDetail(true)
// deptDetail([]) // 배열 
// deptDetail(typeof []); //object
// deptDetail({}) 
// deptDetail(typeof {}); //객체 - 참조형 변수
// 출력되는 값을 설명하라 

// 리턴값
function add(x){ //변수 x는 함수가 호출될 때 초기화 된다.
  console.log('add호출, x='+x);
}
function minus(x, y=0){ // 파라미터 자리에 변수 초기화 가능하다
  console.log('minus호출- x:'+ x +', y: ' +y);
  return x-y
}

add(1)
// minus(1, 10) //두번째 파라미터는 호출시 값을 지정하지 않으면 0을 출력하지만 
             // 만일 호출시 파라미터 값을 채우면 10이 출력된다.  
//원시형 타입은 한 번에 하나의 값만 담긴다. 
minus(1) //파라미터가 한 개이면 디폴트값이 있는 변수는 0이 출력됨

const r1 = add(1)
console.log(r1);
const r2 = minus(1,2)
console.log(r2);

/*
함수
- 자주 쓰는 실행코드들을 블록({,지변성격})단위로 묶어서 패키징 해놓은 상태
:그런데 파라미터로 함수를 넘길 수 있다(주의, 다른점)
- 자주 쓰는 코드들을 기능단위로 재사용하기 위함
- 함수 선언 : function예약어를 이용 자주 쓸 코드를 묶음
- 함수 호출 : 정의된 함수를 호출해야 기능이 실행됨

함수 종류
1. 선언적 함수: 이름을 가짐
:자바스크립트 파일을 읽을 때 선언적 함수를 가장 먼저 읽어줌
:선언적 함수 호출 위치가 자유로움
2. 익명 함수 : 함수의 이름이 없는 형태 - 콜백함수
:자체만으로 호출 불가
: 변수에 익명함수를 대입 또는 특정 이벤트 객체에 대입하는 형태로 호출함
3. 대입함수 : 변수에 익명함수가 대입된 형태
4. 즉시실행함수 : 카카오 API - 지도 서비스 코드
*/
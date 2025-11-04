//func1.js 
// 함수에는 제공되는 함수가 있고 사용자가 정의하는 함수도 있다. 
// 사용자가 정의한 함수이다.
// 파라미터가 없는 함수이다. 또한 리턴타입도 없는 함수이다. 
// 함수 구현이다. 
function 함수이름(){
  //실행부 또는 처리부
  console.log('함수이름 호출 성공');
}

// 함수호출은 좌중괄호 우중괄호가 없다 
함수이름() //함수호출 

// 파라미터가 1개인 함수 구현하기 
// 파라미터에는 메시지를 담을 것이다. 

function 함수1(msg){ //msg도 변수 이름이다
  console.log(msg); //변수 msg를 호출하였다
  //초기화는 언제 되는거야? -> 
}

함수1("어디로갈까")
// 함수의 파라미터 자리는 n개가 올 수도 있다. 

function hap(i, j){
  let tot = i + j 
  console.log(`i+j=${i+j}`);
}

hap(1,"2")

function 로그인(아이디, 비밀번호){
  console.log(`당신이 입력한 아이디는 ${아이디}이고 비번은 ${비밀번호} 입니다.`);
} //end of 로그인

로그인("test", "123")
로그인("🍓", "123")

// 리턴 사용하기 
// 파라미터로 두 숫자를 입력받아서 그 계산 결과를 
// 다른 곳에서 재사용해야한다면 리턴을 활용하시오. 

function hap2(i, j){
  let tot = i + j 
  //계산한 결과를 함수 내부에서 사용하지 않고 
  //굳이 외부에서 사용하고 싶다면 리턴을 사용한다
  return tot
}

const account = hap2(1,2)
console.log(account); //3출력이 된다

//만일 우리반 친구들의 html중간고사 성적의 평균을 구해야 한다면...

function avg(총점){//총점의 값은 avg함수가 호출될때 결정된다
  console.log(총점); //50, 100
}//end of avg

avg(50)
avg(100)

// return 예약어를 사용했다. 
function hap3(i, j){
  console.log(i); //hap3(2,3) -> 2출력
  console.log(j); // 3출역
  return i + j // 5 반환된다 - 이 함수를 호출하는 곳에서 사용이 가능함
}

hap3(2,3)
const result = hap3(2,3)
console.log(result);

//return 예약어가 없다.
function hap5(i, j){
  console.log(i+j)
  i + j 
}

const result2 = hap5(2,3)
console.log(result2);

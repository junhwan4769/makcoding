// 원시형 타입 - 호출하면 값이 출력된다. 
// const a = 1
// const isOk = false 
// const msg = "오늘 스터디할까?"

// 참조형 타입 
// const dept = {
//   deptno: 10,
//   dname: '영업부', 
//   loc: '부산'
// }

// console.log(dept);
// console.log(typeof dept);

//insert here 
// console.log(dept.dname);
// console.log(dept['dname']);
// console.log(dept["dname"]);
// console.log(dept.loc);
// console.log(dept.name);
// console.log(dept["age"]);


// studentA에 다른 객체를 치환(재정의)하는 것은 불가능하지만
// studentA가 참조형이므로 studentA주소번지로 name 또는 age
// 값을 재정의하는 것은 가능하다. 
const studentA = {
  name:"나신입",
  age: 30
}

const studentB = {
  name:"나초보",
  age: 20,
  parent: studentA //객체 속성에 참조형도 올 수 있다. 
}


const students = [studentA, studentB] 

console.log(`studentA.name : ${studentA.name}`);
console.log(`studentA["name"] : ${studentA["name"]}`);
console.log(`student[0].name : ${students[0].name}`); 
console.log(`student[0]['name'] : ${students[0]['name']}`);
console.log(`studentB.parent.name : ${studentB.parent.name}`); //나신입
console.log(`studentB.parent.name : ${studentB['parent']['name']}`); //나신입

console.log("==========================================================");

console.log(`studentB.name : ${studentB.name}`);
console.log(`studentB["name"] : ${studentB["name"]}`);
console.log(`student[1].name : ${students[1].name}`);
students[1]['name'] = "나일등"
console.log(`student[1]['name'] : ${students[1]['name']}`);


/*
  자료형(Data Type)
  자료형의 종류

  1. 원시형 자료(primative type) : 특정 값이 메모리에 저장(값만)
    - 문자형([Object String]) slice(8,-1)
    - 숫자형(Number)
    - 논리형(Boolean : true, false)
    - undefined : 변수를 선언하고 그 값을 초기화 하지 않으면 undefined저장됨(에러 원인되니까...)

  2. 참조형 자료(reference type)
  : 값이 위치하고 있는 참조 주소값만 메모리에 저장(관련된 내장함수까지 같이 참조됨:기억)
    - null(Object) :  명시적으로 특정 변수의 값을 비워둘 때
      const myCar;
      const myCar = new Car()
    - array(Object) : 연관된 값들을 그룹으로 묶어 관리함 - []
    - 객체  - {} : Object 데이터를 key라는 인덱싱을 통해 자료를 구조적으로 묶어 놓은 형태

*/
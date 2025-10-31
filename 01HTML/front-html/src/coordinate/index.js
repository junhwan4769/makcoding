let vertical = document.querySelector(".vertical");
let horizontal = document.querySelector(".horizontal");
let target = document.querySelector(".target");
let label = document.querySelector(".label");
console.log(target); // 이제 null이 아니어야 합니다 (요소가 존재하면 HTMLImageElement 출력)

document.addEventListener("mousemove", function(event){ //익명함수- 콜백함수
  console.log('mousemove');
  let x = event.clientX
  let y = event.clientY
  console.log(`x = ${x} y = ${y}`);
  let px = event.pageX
  let py = event.pageY
  console.log(`px = ${px} py = ${py}`);
});

/* 
// pageX 와 clientX의 차이점은? 
pageX와 clientX는 둘 다 마우스의 x좌표를 나타내지만 기준이 다르다. 
좌표기준 : clientX - 브라우저 화면 (뷰포트), pageX - 전체문서(document)
스크롤 영향 : clientX는 없다 ,   pageX는 있다
0, 0 기준점:  clientX는 브라우저 왼쪽 위 모서리, pageX는 스크롤을 포함 HTMl문서 맨위 
clientX는 화면 위치 계산, pageX는 문서 전체 내 위치 계산 

clientX는 스크롤을 내리더라도 좌표가 그대로 유지 
pageX는 화면을 아래로 스크롤하면 pageX와 pageY값도 함께 커진다. 
*/
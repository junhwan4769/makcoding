let vertical = document.querySelector(".vertical"); //수직선
let horizontal = document.querySelector(".horizontal"); //수평선
let target = document.querySelector(".target"); //이미지
let label = document.querySelector(".label"); //좌표값을 출력할 태그 가리킴 

// load 이벤트는 리소스와 그것에 의존하는 리소스들이 로딩이 완료되면 발동합니다. 
// - > 인터셉트해서 무언가 처리가 가능하다 
window.addEventListener('load', function(){ //익명함수- 콜백함수
  let targetRect = target.getBoundingClientRect()
  let targetWidth = targetRect.width / 2
  let targetHeight = targetRect.height / 2
  document.addEventListener('mousemove', function(event){
    let x = event.clientX
    let y = event.clientY
    console.log(`${x} ${y}`);
    //수직선 좌표값 이동하기 
    vertical.style.left = `${x}px`
    //수평선 좌표값 이동하기
    horizontal.style.top = `${y}px`
    //아래는 타겟이미지 좌표값 이동하기 
    target.style.left = `${x}px`
    target.style.top = `${y}px`
    //좌표 숫자
    label.style.left = `${x}px`
    label.style.top = `${y}px`
    label.innerHTML = `${x}px, ${y}px` 
  }) //////////////// end of onMousemove
}) //////////////// end of onload

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
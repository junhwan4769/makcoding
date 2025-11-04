//step3에서는 화살표 이미지 추가해서 페이지 맨 위로 한번에 이동하기 
// 이유: 스크롤 관련 이벤트나 API 사용할 경우가 꽤 있다. 
const arrowUp = document.querySelector(".arrow-up")
arrowUp.addEventListener('click', function(){
  window.scrollTo({top: 0, behavior:'smooth'})
})
window.addEventListener('scroll', function(){
 //scrollY - 현재 스크롤 위치 (화면 상단부터 아래로 떨어진 거리)를 나타낸다
 //window.innerHeight는 현재 브라우저 창의 높이를 나타낸다. 
 //2로 나눈 것은 스크롤 높이가 창 높이의 절반보다 많이 내려간다면...
  if(window.scrollY > window.innerHeight / 2){
    //맨위로 올라가는 화살표를 보여줘 -> visible:opacity 1 */
    /*
  <button class="arrow-up visible">
  </button>
    */
    arrowUp.classList.add("visible") 
  } //end of if
  else{//스크롤이 절반보다 적게 내려갔다면...
      arrowUp.classList.remove("visible")
  }
})

const HOME_HEIGHT = document.querySelector('#home').clientHeight; // HOME 섹션의 높이를 기준으로 설정

window.addEventListener('scroll', function(){
  // 스크롤 위치가 HOME 섹션의 높이보다 크면 (즉, HOME을 벗어나면)
  if(window.scrollY > HOME_HEIGHT / 2){ // 보통 HOME 높이의 절반 정도를 기준으로 사용
    arrowUp.classList.add('visible'); // visible 클래스 추가 (버튼 보임)
  } else {
    arrowUp.classList.remove('visible'); // visible 클래스 제거 (버튼 숨김)
  }
})

// navbar 메뉴 클릭시 해당 섹션으로 이동하기 구현 
// 이벤트 위임으로 처리해보세요 -> .navber_menu = 메뉴들의 부모요소 (ul)
// 부모 하나에만 클릭 이벤트를 걸어놓고 실제로는 안쪽의 li가 클릭되었는지 검사하는 방식을 사용 -> 이벤트 위임
// 메뉴 항목이 더 추가되어도 이벤트 핸들러를 다시 등록할 필요가 없다. 
// -> 성능 관리 면에서 이점이 있다. 
// li 태그 하나하나 주지 말고 ul태그에 처리해줘
// 
const navbarMenu = document.querySelector(".navbar_menu") 
console.log(navbarMenu); //null이 출력된다

/*
다음은 파라미터로 섹션 정보를 주면 scrollIntoView 함수를 호출하여 
스크롤을 이동해주는 함수입니다. 
부수적으로 behavior 속성을 smooth로 정의하면 해당 섹션으로 
부드럽게 스크롤 해준다. 
*/

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({behavior: 'smooth'})
} //end of scrollIntoView

navbarMenu.addEventListener('click', function(event){
  // 여기서 이벤트 발동 시 처리할 코드를 작성한다
  console.log(event.target);
  console.log(event.target.dataset.link); //home, about etc..
  
  // 아래 변수에 담기는 값은 #home or #about , #notice, #program, #contact
  const link = event.target.dataset.link
  // if문 안에서 return을 만나면 함수를 빠져 나간다. 
  // 그 다음에 있는 코드는 실행 기회를 갖지 못한다. 
  if(link == null) return; //함수를 빠져나가줘

  // 클릭된 섹션으로 이동하기 함수 호출 
  scrollIntoView(link)
}) // end of click event

// 버거 아이콘 클릭 시 
const navbarToggleBtn = document.querySelector(".burger_toggle-btn")
navbarToggleBtn.addEventListener('click', function(){
  console.log('버거아이콘 클릭');
  navbarMenu.classList.toggle('open')
})

// 화면 크기가 변경시 768px보다 커지면 open클래스 제거함
window.addEventListener('resize', function(){
  console.log(this.window.innerWidth);
  if(this.window.innerWidth > 768){
    navbarMenu.classList.remove("open")
  }
})
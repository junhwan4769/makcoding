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
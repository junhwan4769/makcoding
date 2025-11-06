//첫 번째 화면에서는 뉴스 제목 10개 출력하기
const container = document.querySelector('#root')
//두 번째 화면을 작성하기 - 상세내용 출력
const content = document.createElement('div')
/*
<div>
  <h1>사용자가 클릭한 제목에 대응하는 제목</h1>
<div>
*/
const xhr = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json" 

/*
양은 늘어나도 복잡도가 증가되지 않도록 코딩을 하자. 
실제로 네트워크를 통해서 데이터를 가져오고 그것을 자바스크립트 객체로 변환하는
코드가 없어지고 대신 getData 함수에게 모두 위임하였다. 
getData가 동작하는데 필요한 url만 넘겨주는 코드로 대체되었기 때문에 사용하는 쪽에서는
코드가 단순해졌다. 
네트워크 사용이 많아지더라도 부담없이 코드를 계속 늘려도 양은 늘어나지만
복잡도가 늘어나는 일은 없을 것이다. 
이런 류의 개선을 리펙토링이라고 말한다.
리펙토링은 UI를 개선하는 리펙토링도 있지만 UI 즉 최종적인 결과물은 변화가 거의 보이지 
않지만 내부적인 개선도 많이 일어날 수 있는 개선 활동들도 있다는 것을 체험해 보았다.  
*/

function getData(url){
  xhr.open('GET', url, false)
  xhr.send()
  return JSON.parse(xhr.response)
} // end of getData


const newsData = getData(NEWS_URL)
console.log(newsData.length); //10
window.addEventListener('hashchange', function(){
  // 콜백함수 영역 - 이벤트 감지되면 자동 호출됨 - 익명함수 
  const id = location.hash.substring(1)
  //console.log(id); //123456789

  //insert here 
  const newsDetail = getData(CONTENT_URL.replace("@id", id))
  //console.log(newsDetail);

  const title = this.document.createElement('h1')
  console.log(newsDetail.title); // 사용자가 클릭한 제목에 대응되는 제목
  title.innerHTML = newsDetail.title
  //<div> <h1> 사용자가 클릭한 제목 </h1> </div>
  content.appendChild(title)
}); //end of addEventlistener

const ul = document.createElement("ul")
for(let i = 0; i < 10; i = i + 1){
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = `#${newsData[i].id}`
  a.innerHTML= `${newsData[i].title}(${newsData[i].comments_count})`
  a.addEventListener('click', function(){
    console.log('a태그 클릭 성공');
  })
  // DOM API 사용하면 위계가 잘 안보인다 
  li.appendChild(a)
  ul.appendChild(li)
}

container.appendChild(ul)
//원천은 하나인데 두개의 사용처가 생김 
container.appendChild(content)

/*
여기까지의 문제점
HTML의 구조가 이 코드만 봐서는 알기가 힘들다 
함수로 div만들고 ul, a, li도 만들었기 때문에 
태그들의 구조, 위계, 위치 즉 어떤게 부모 요소이고 
어떤게 자식요소인지 명확하게 보이지 않는다.

어떻게 하면 이런 문제를 개선할 수 있을까요?
DOM API를 이용해서 UI의 구조가 잘 드러나지 않는 문제점들을
가장 쉽게 해결하는 방법은 DOM API자체를 최대한 사용하지 않는 것입니다. 

그러면 DOM API를 사용하지 말고 어떻게 만들지라고 하면
바로 문자열만을 가지고 UI를 만드는 방식입니다.
*/
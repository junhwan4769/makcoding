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
  const div = document.createElement('div')
  div.innerHTML = `
    <li>
      <a href = "#${newsData[i].id}">
        ${newsData[i].title}(${newsData[i].comments_count}
      </a>
    </li>
  `
  // ul태그는 왜 문자열에 포함하지 않았나 - ul태그는 for문 안에서
  // 여러개가 만들어진다. 
  // ul태그 아래에는 div태그는 필요없고 li태그가 와야하니까 
  // div태그 아래 0번째로 접근하는 방법과 firstElementChild하는 
  // 두 가지 방법이 있다. 
  // ul.appendChild(div.children[0])
  ul.appendChild(div.firstElementChild)

  // 이 코드로 실행한면 li태그마다 불필요한 div가 li갯수만큼 생성된다.
  // ul.appendChild(div)
}

container.appendChild(ul)
//원천은 하나인데 두개의 사용처가 생김 
container.appendChild(content)


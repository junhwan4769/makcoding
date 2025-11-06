//첫 번째 화면에서는 뉴스 제목 10개 출력하기
const container = document.querySelector("#root");
//두 번째 화면을 작성하기 - 상세내용 출력
const content = document.createElement("div");
/*
<div>
  <h1>사용자가 클릭한 제목에 대응하는 제목</h1>
<div>
*/
const xhr = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.response); // text/plain -> object -> HTMLElement
} // end of getData

// 현재는 상세보기가 hashchange 이벤트에 묶여있다. 
// 그래서 라우팅 처리시 재사용이 어렵다. 
// 라우팅 처리를 위해서는 상세보기 처리도 함수 밖으로 빼낸다
// 리턴타입이 필요할까 아닐까?
function getNewsDetail(){//파라미터가 필요 있다 vs 없다
 //id -> https://api.hnpwa.com/v0/item/45816879.json
 //id -> https://api.hnpwa.com/v0/item/@id.json
  const id = location.hash.substring(1) //#123456789 -> #은 제거한다.
  const newsContent = getData(CONTENT_URL.replace("@id", id))
  const title = document.createElement("h1")
  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div>
      <a href="#">목록으로</a>
    </div>
  `
}

//해커뉴스 목록 가져오기 
function getNewsList() {
  const newsData = getData(NEWS_URL)
  const newsList = []
  newsList.push('<ul>')
  for (let i = 0; i < 10; i = i + 1) {
    const div = document.createElement('div')
    newsList.push(`
      <li>
        <a href = "#${newsData[i].id}">
          ${newsData[i].title}(${newsData[i].comments_count}
        </a>
      </li>      
    `)
  }// end of for
  newsList.push('</ul>')
  console.log(newsList);
  console.log(typeof newsList.join("")); // string 출력
  container.innerHTML = newsList.join("")
}//// end of getNewsList

//라우터에서 화면 전환하는 함수를 구현한다. - router
function router(){
  // -> http://localhost:5500/src/news/step6/news.html
  const hash = location.hash //#12345678
  if(hash == ""){//해시값이 없으면 목록 보기
    getNewsList()
  }else{//해시값이 있으면 상세 보기 
    getNewsDetail()
  }
} //end of router 

// 아래 이벤트는 목록에서 사용자가 제목을 클릭했을때 감지가 된다. 
// 그런데 목록을 처리하는 코드를 getNewsList()에 묶어 두었다.
// 그래서 최초 한 번은 호출을 해주어야 하겠다. 
window.addEventListener("hashchange", router); // end of addEventListener
router()
// 나는 아직  getNewsList()를 호출하지 않았다. 
// insert here
// getNewsList()
// getNewsDetail(45830770)
// container.appendChild(ul);
//원천은 하나인데 두개의 사용처가 생김
// container.appendChild(content);

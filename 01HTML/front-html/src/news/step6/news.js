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

window.addEventListener("hashchange", function () {
  // 콜백함수 영역 - 이벤트 감지되면 자동 호출됨 - 익명함수
  const id = location.hash.substring(1);
  //console.log(id); //123456789

  //insert here
  const newsDetail = getData(CONTENT_URL.replace("@id", id));
  //console.log(newsDetail);

  const title = this.document.createElement("h1");
  console.log(newsDetail.title); // 사용자가 클릭한 제목에 대응되는 제목
  title.innerHTML = newsDetail.title;
  //<div> <h1> 사용자가 클릭한 제목 </h1> </div>
  content.appendChild(title)
}); //end of addEventlistener

// 나는 아직  getNewsList()를 호출하지 않았다. 
// insert here
getNewsList()
// container.appendChild(ul);
//원천은 하나인데 두개의 사용처가 생김
container.appendChild(content);

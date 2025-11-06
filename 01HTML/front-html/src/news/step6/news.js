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

/* 
아래 함수 호출이 없으면 화면에 아무것도 출력되지 않는다.
왜냐하면 목록을 가져오는 코드를 getNewsList 함수에 묶어 두었기 때문임
이 함수를 호출하는 라우터 함수를 구현해 보았다.
라우터를 동작하는 방식은 화면이 전환되어야 할때 라우터가 판단해서 
해당하는 화면으로 전환시킨다. 
그런데 지금 화면이 전환되어야 할 때라는 건 뭘까?
기존 step5의 hashchange가 바뀌는걸 화면의 전환을 위한 트리거로서 사용하고 있었다. 
그런데 지금 hashchange 에는 뭐가 걸려있냐면 getNewsDetail이 걸려있다.  
즉 해시가 바뀌면 무조건 글 상세내용을 보는거야. 이런식으로 되어있다. 
그러나 화면이 여러개 있으면 해시가 바뀌면 글 내용을 보여줄 수도 있고 
글 목록을 보여줄 수도 있고 이렇게 되면 해시의 종류가 많아질 것이다. 
페이지의 종류가 많아질 테니까... 
바로 이 해시를 router한테 주면 된다. 
바로 이 hashchange가 일어났을때 동작하는 함수를 기존의 getNewsDetail가 아니라 
라우터한테 주면 라우터가 해시가 바뀔 때마다 동작하게 되고 그럼 그 라우터 안에서 
어떤 해시냐에 따라서 글목록을 보여줄 때도 있고 글 내용을 보여줄 때도 있게 된다.
다음엔 이 방식으로 페이징 처리를 할 것이다. 

트리거는 화면을 바꿔야 한다는 신호를 라우터에게 보내는 것을 말한다.
즉 어떤 일이 발생하면 라우터 함수를 호출하게 만드는 이벤트나 조건을 말한다.
우리는 SPA를 해시기반으로 만들고 있으니까 URL의 #값이 바뀌는 순간이 화면전환할때이다. 


*/

router()


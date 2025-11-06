const container = document.querySelector('#root')
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
  console.log(id); //123456789

  //insert here 
  const newsDetail = getData(CONTENT_URL.replace("@id", id))
  console.log(newsDetail);
  
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
//insert here
//container.appendchild(content)
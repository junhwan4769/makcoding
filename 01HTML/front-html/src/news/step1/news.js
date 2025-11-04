//비동기 통신 객체 생성하기 
//객체의 구성요소는 속성과 함수로 이루어 짐
//open()와 send() 사용하려고 객체를 생성하였다. 
const xhr = new XMLHttpRequest()

//해커 뉴스 서버에서 데이터셋을 불러오기 위한 URL
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"

//@param1 - GET방식(Restful API Rest API)
//@param2 - 해커뉴스 URL값(문자열)
//@param3 - 불리언(false or true) - 해커뉴스에서 응답을 받아올때까지 기다림
xhr.open("GET", NEWS_URL, true)
xhr.send() //실제로 해커뉴스 서버에 요청이 전달됨
console.log(xhr.response);
// 0(ready) -> 1 -> 2 -> 3 -> 4
// 응답으로 받아오는 데이터셋이 배열이다 
const ul = document.createElement("ul")
for(let i = 0; i < 10; i = i + 1){
  const li = document.createElement("li")
  li.innerHTML= "해커뉴스읽어온 제목10번"
  ul.appendChild(li)
}
document.querySelector("#root").appendChild(ul)
console.log(xhr.response);
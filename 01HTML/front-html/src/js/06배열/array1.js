// array1.js
// const colors = [] //array
// console.log(typeof colors); //object
// colors.push('black') // 배열의 첫번째 원소에 'black' 담김
// console.log(colors); 
// console.log(colors[0]);
// colors.push('gray')
// colors.push('navy')
// console.log(colors);
// const tags = ['<div>', '<h2>', 'hello', '</h2>', '</div>']
// console.log(tags);
// console.log(tags.join("#"));
// console.log(tags.join("|"));
// console.log(tags.join(""));
// console.log(typeof tags.join(""));

const datas = [
  {'name': '이순신', 'age': 30}, 
  {'name': '강감찬', 'age': 29}, 
  {'name': '김유신', 'age': 28}]
// 배열을 string으로 변경해주는 API가 있다. JSON.stringify(object) -> string
// 함수 -> 파라미터와 리턴타입을 결정할 수 있다. -> 함수를 설계할 수 있다. 
// JSON.parse(string) -> object로 바꿔준다
console.log(JSON.stringify(datas));
console.log(JSON.parse(JSON.stringify(datas)));
console.log(JSON.parse('[{"name": "이순신", "age": 30}]'));

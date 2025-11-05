// json1.js

const json = '{"isOk":true, "name":"스쿼트", "count":3}';

console.log(typeof json) //string

const obj = JSON.parse(json);
console.log(typeof obj); //object
console.log(obj);

// obj가 Object타입이라서 .연산자 뒤에 name을 붙일 수 있다. 
console.log(obj.name);

// json이 string타입이라서 .연산자 뒤에 name을 붙이면 undefined가 출력된다. 
console.log(json.name); //undefined

let root
console.log(root);
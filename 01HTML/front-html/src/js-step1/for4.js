const food1 = {name: "🍙", price: 100}
const food2 = {name: "🍌", price: 200}
const food3 = {name: "🥛", price: 150}

console.log(food1.name+","+food1.price);
console.log(`${food2.name}, ${food2.price}`);
console.log(`${food3.name}, ${food3.price}`);

const foods = [food1, food2, food3]

for(let i = 0; i < foods.length; i = i + 1){
  console.log(`${foods[i].name} ${foods[i].price}`); // 🍙 🍌 🥛
}
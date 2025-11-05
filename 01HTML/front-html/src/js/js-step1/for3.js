let items = [
  {id: 1, name: "벤치프레스", count: 0},
  {id: 2, name: "랫플다운", count: 0},
  {id: 3, name: "스쿼트", count: 0},
]

for(let i = 0; i < 3; i = i + 1){
  //console.log(items);
  //console.log(items[0]); // {id: 1, name: "벤치프레스", count: 0}
  //console.log(items[0].name); //벤치프레스
  //console.log(items[1].name); //랫플다운
  console.log(`id:${items[i].id}, name:${items[i].name}, count:${items[i].count}`);
}
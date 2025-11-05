const colors = ["black", "gray", "navy"] //array, 배열 

//colors 배열의 주소 번지와 colors[0] 주소가 같다. 
//배열은 아이템을 참조할때 인덱스를 사용한다. 
console.log(colors[2]); //navy
console.log(colors[0]); //black

for(let i = 0; i < 3; i = i + 1){
  console.log(colors[i]);
}

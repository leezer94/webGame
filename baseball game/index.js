// Selector
const input = document.querySelector('#input')
const form = document.querySelector('#form')
const logs = document.querySelector('.logs')

const numbers = [];     //[1,2,3,4,5,6,7,8,9]
const result = [];
//Function
for(let i=0; i < 9; i++){
    numbers.push(i + 1)
}

for(let i=0; i < 4; i++){ 
    const index = Math.floor(Math.random()* numbers.length);     //numbers.length 로 해줘야 길이가 작아져도 일일히 바꾸지 않아도 된다.
    result.push(numbers[index]) // index 가 3 일시 실제로 뽑히는 숫자는 numbers 의 숫자 4
    numbers.splice(index,1)     // 뽑힌숫자는 numbers[] 에서 지워준다.
}
console.log(result)

//Event


// console.log(Math.floor(Math.random()*9+1))
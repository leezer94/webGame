// Selector
const input = document.querySelector('#input')
const form = document.querySelector('#form')
const logs = document.querySelector('.logs')

const numbers = [];     //[1,2,3,4,5,6,7,8,9]
const result = [];
const tries = [];

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

function checkInput(input){     // 검사하는 코드 (따로 분리해주는 것이 가독성이 좋음)
    if(input.length !== 4){
        return alert('4자리 숫자를 입력해 주세요.')
    }
    if(new Set(input).size !== 4) {
        return alert('중복된 숫자가 없는지 확인해 주세요.')
    }
    if(tries.includes(input)) {
        return alert('이미 시도했던 값 입니다.')
    }
    return true;
}
//Event
form.addEventListener('submit', (e) => {
    e.preventDefault() // 기본동작 prevent(refresh)
    const value = input.value;  //  입력값 value 변수에 저장해준다.  same as e.target[0].value;
    input.value = '';            // 지워준다
    const valid = checkInput(value);    // 함수로 value 를 보내준다.
    if(valid) {
        tries.push(value);
        console.log(tries)
    }else {

    }

})




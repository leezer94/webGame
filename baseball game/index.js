// Selector
const input = document.querySelector('#input')
const form = document.querySelector('#form')
const logs = document.querySelector('.logs')

const numbers = [];     //[1,2,3,4,5,6,7,8,9]
const result = [];
const tries = []; // 입력값을 기록

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

function defeated() {
    const message = document.createTextNode(`패배! 정답은 ${result.join('')}`) // 추가할 문구
    logs.appendChild(message); // 추가할 대상(logs)
}
//Event
let outCount = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault() // 기본동작 prevent(refresh)
    const value = input.value;  //  입력값 value 변수에 저장해준다.  same as e.target[0].value;
    
    input.value = '';            // 지워준다
    const valid = checkInput(value);    // 함수로 value 를 보내준다.
    if(!valid) {
        return;
    }
    if(result.join('') === value){      // 사용자 입력 밸류와 결과값.join('')이 같으면 홈런! 
        logs.textContent = '홈런!';
        return;
    }
    if(tries.length >= 9){  //시도 10 번 이상시 패배 ( 10 번째에 홈런시 tries.length === 9)
       defeated();
        return;
    }
    // 스트라이크 볼 갯수 검사
    let strikeCount = 0;
    let ballCount = 0;
    // result 3146 value: 1234
    for(let i=0; i < result.length; i++){   // ex) [3,1,4,6] length = 4
        const index = value.indexOf(result[i]);
        if(index > -1){ //일치하는 숫자 발견   (index 가 없으면 -1 출력) 즉 true;
            if(index === i){    // 자릿수도 같음;
                strikeCount += 1;
            }else { // 숫자만 같음
                ballCount += 1;
            }
        }
    }
    if(strikeCount === 0 && ballCount === 0){
        outCount ++;
        logs.append(`${value} : 아웃!`, document.createElement('br'))
    }else {
        logs.append(`${value} : ${strikeCount} 스트라이크 ${ballCount} 볼`, document.createElement('br'))
         // append 로 여러개 동시에 append 가능(문자열, 등등)
    }
    if(outCount === 3){
        defeated();
        return;
    }
    console.log(outCount)
    console.log(strikeCount)
    console.log(ballCount)
    tries.push(value);
});




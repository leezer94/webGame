// // prompt 는 String 으로 출력하기 때문에 숫자값 받을시  parseInt ( 10 진법 )
// console.log(`number : ${number}`)
// alert(number)
// const yesOrNo = confirm('맞나요?')

//Selector
const number = parseInt(prompt('몇 명이 참가하나요 ?'),10)

const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order')
let word;   // 제시어
let newWord;   // 새로 입력한 단어


// Event Listener
$button.addEventListener('click', () => {
    if(!word){
        word = newWord;
        $word.textContent = word;
        $input.value = '';
        const order = Number($order.textContent); // 현재 순서
        if(order + 1 > number) {
            $order.textContent = 1;
        }else {
            $order.textContent = order + 1
        }


    }else {
        if(newWord[0] === word[-1] ){
            word === newWord;
            $word.textContent = word;
            $input.value = '';
            const order = Number($order.textContent); // 현재 순서
            if(order + 1 > number) {
                $order.textContent = 1;
            }else {
                $order.textContent = order + 1
            }
        }else {

        }
    }
})

$input.addEventListener('input',(event) => {
    newWord = event.target.value;

})

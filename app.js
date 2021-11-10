
//Selector
const number = parseInt(prompt('몇 명이 참가하나요 ?'),10)
if(number){
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order')
let word;   // 제시어
let newWord;   // 새로 입력한 단어


// Event Listener

$button.addEventListener('click', () => {
    if(!word || (word[word.length -1] === newWord[0] && newWord.length === 3)){
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
        alert('단어가 올바르지 않습니다.')
        }
        $input.value=''
        $input.focus();
    })

$input.addEventListener('input',(event) => {
    newWord = event.target.value;

})
}

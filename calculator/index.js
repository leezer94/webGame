let numOne = '';
let operator = '';
let numTwo = '';
// Selector
const $operator = document.querySelector('#operator')
const $result = document.querySelector('#result')
const onClickNumber = (e) => {   //고차원 함수 ( higher order function)
        if(!operator){
        numTwo += e.target.textContent;
        $result.value += e.target.textContent;
        return;
        }
        if(!numTwo){
            $result.value = ''
        }
        numOne += e.target.textContent;
        $result.value += e.target.textContent;
    };

const onClickOperator = (e) => {
    if(numOne) {
        operator += e.target.textContent;
        $operator.value += e.target.textContent;
        
    }else {
        alert('숫자를 먼저 입력 하십니오.')
    }
}


// Event
document.querySelector('#num-0').addEventListener('click',onClickNumber)
document.querySelector('#num-1').addEventListener('click',onClickNumber)
document.querySelector('#num-2').addEventListener('click',onClickNumber)
document.querySelector('#num-3').addEventListener('click',onClickNumber)
document.querySelector('#num-4').addEventListener('click',onClickNumber)
document.querySelector('#num-5').addEventListener('click',onClickNumber)
document.querySelector('#num-6').addEventListener('click',onClickNumber)
document.querySelector('#num-7').addEventListener('click',onClickNumber)
document.querySelector('#num-8').addEventListener('click',onClickNumber)
document.querySelector('#num-9').addEventListener('click',onClickNumber)
document.querySelector('#plus').addEventListener('click',onClickOperator)
document.querySelector('#minus').addEventListener('click',onClickOperator)
document.querySelector('#divide').addEventListener('click',onClickOperator)
document.querySelector('#multiply').addEventListener('click',onClickOperator)
document.querySelector('#calculate').addEventListener('click',onClickOperator)
document.querySelector('#clear').addEventListener('click',onClickOperator)
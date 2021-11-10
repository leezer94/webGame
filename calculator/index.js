let numOne = '';
let operator = '';
let numTwo = '';
let numThree = 1;
    // numThree = -numThree
    // console.log(numThree)
// Selector

const $operator = document.querySelector('#operator')
const $result = document.querySelector('#result')

//Function
const onClickNumber = (e) => {   //고차원 함수 ( higher order function)
        if(!numOne){
            if(e.target.value === '-'){
                numOne = -numOne
            }
        }
        if(!operator){
        numOne += e.target.textContent;
        $result.value += e.target.textContent;
        
        return;
        }
        if(!numTwo){
            $result.value = ''
        }
        numTwo += e.target.textContent;
        $result.value += e.target.textContent;
    };

const onClickOperator = (op) => (e) => {
    

    numOne = Number(numOne);
    numTwo = Number(numTwo);
    if(numTwo){
    if(e.target.value === '-'){
        $result.value = -numOne
    }
}
    if(numTwo){
        switch(operator){
            case '+' :
                $result.value = numOne + numTwo;
                break;
            case '-' :
                $result.value = numOne - numTwo;
                
                break;
            case '*' :
                $result.value = numOne * numTwo;
                
                break;
            case '/' :
                $result.value = numOne / numTwo;
                
                break;
             default : 
             break;    
        }
    }
    
    
    $operator.value = '';
    numOne = $result.value;
    numTwo = ''
    if(!numOne){
        if( operator === '-'){
           
        } 
    }else if(numOne) {
        operator = op;
        $operator.value = op;
    }else {
        alert('숫자를 먼저 입력하세요.')
        
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
document.querySelector('#plus').addEventListener('click',onClickOperator('+'))
document.querySelector('#minus').addEventListener('click',onClickOperator('-'))
document.querySelector('#divide').addEventListener('click',onClickOperator('/'))
document.querySelector('#multiply').addEventListener('click',onClickOperator('*'))
document.querySelector('#calculate').addEventListener('click',() => {
    numOne = parseInt(numOne);
    numTwo = parseInt(numTwo);
    if(numTwo){
       switch(operator){
           case '+' :
               $result.value = numOne + numTwo;
               break;
           case '-' :
               $result.value = numOne - numTwo;
               
               break;
           case '*' :
               $result.value = numOne * numTwo;
               
               break;
           case '/' :
               $result.value = numOne / numTwo;
               
               break;
            default : 
            break;    
       } 
       $operator.value = '';
       numOne = result.value;
       operator = ''
       numTwo = ''
    } else {
        alert('숫자를 먼저 입력하십시오.')
    }
})
document.querySelector('#clear').addEventListener('click',() => {
    $result.value = ''
    $operator.value = ''
    numOne = ''
    numTwo = ''
    operator = ''
})
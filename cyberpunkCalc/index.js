const history = document.getElementById("history");
const result = document.getElementById("result")

//configuração do observador
let config = { attributes: true, childList: true, characterData: true };

let numbers = [];
let operations = [];

let numberString = "";
let historyString = "";

let numbers_count = numbers.length;

function setNumber(n){
    if(n != '-')
        numberString = numberString + n; 
    else{
        if(numberString[0] != '-')
            numberString = n + numberString;
        else 
            numberString = numberString.replace('-','');
    }
    console.log(numberString);
}

function setOperation (o){
    if(numberString){
        operations.push(o);
        numbers.push(parseInt(numberString));
        numberString = "";
        history.innerText = numbers[numbers_count];
        console.log(operations)
        console.log(numbers)
    }
}
let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      calculate()
    });    
  });
   
  observer.observe(history, config);

function calculate(){
    for(let i = 0; i < numbers_count; i++){
        if(operations[i - 1] == '*') {
            numbers[i-1] = numbers[i - 1] *  numbers[i];

            console.log("multiplicação: " + numbers[i-1]);

            numbers.splice(i,1);
            operations.splice((i-1),1);
            i = 0;
            console.log("numbers: " + numbers);
            console.log("operations: " + operations);
        }
        else if(operations[i - 1] == '/') {
            numbers[i-1] = numbers[i - 1] / numbers[i];
            console.log("divisão: " + numbers[i-1])
            numbers.splice(i,1);
            operations.splice((i-1),1);
            i = 0;
            console.log("numbers: " + numbers);
            console.log("operations: " + operations);
        }
        
    }
    for(let i = 0; i < numbers_count; i++) {
        if(operations[i - 1] == '+') {
            numbers[i - 1] = numbers[i - 1] + numbers[i];
            console.log("soma: " + numbers[i-1])
            numbers.splice(i,1);
            operations.splice((i-1),1); 
            i = 0;
            console.log("numbers: " + numbers);
            console.log("operations: " + operations);
        }
        else if(operations[i - 1] == '-') {
            numbers[i - 1] = numbers[i - 1] - numbers[i];
            console.log("subtração: " + numbers[i - 1])
            numbers.splice(i,1);
            operations.splice((i-1),1); 
            i = 0;
            console.log("numbers: " + numbers);
            console.log("operations: " + operations);
        }
    }
    console.log(numbers[0].toFixed(2))
}

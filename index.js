const result = document.getElementById("result");
const calButton = document.getElementById("calButton");


var operators = {
    '+': function(a,b) {return a + b},
    '-': function(a,b) {return a - b},
    '/': function(a,b) {return a / b},
    '*': function(a,b) {return a * b},

};



const calculate = () => {
    const getOperation = document.getElementById("userİnputOperation").value;
    const inputNum1 = Number(document.getElementById("userİnputNum1").value);
    const inputNum2 = Number(document.getElementById("userİnputNum2").value);
    
    if(getOperation == "+"){
        result.innerHTML = operators['+'](inputNum1,inputNum2);
    }else if (getOperation == "-"){
        result.innerHTML = operators['-'](inputNum1,inputNum2);
    }
    else if (getOperation == "/"){
        result.innerHTML = operators['/'](inputNum1,inputNum2);
    }else if (getOperation == "*"){
        result.innerHTML = operators['*'](inputNum1,inputNum2);
    }else{
        result.innerHTML = "Wrong Operation Try Again."
    }
};

calButton.addEventListener("click",calculate);







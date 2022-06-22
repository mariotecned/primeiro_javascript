let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
    if (count > 0) {
        document.getElementById("currentNumber").style.color = "black";
    }
    if (count > 10) {
        document.getElementById("adicionar").disabled = true;
    } else {
	    CURRENT_NUMBER.innerHTML = count;        
    }
}

function decrement() {
	count--;
    if (count < 0) {
        document.getElementById("currentNumber").style.color = "red";
    }
    CURRENT_NUMBER.innerHTML = count;        
}

const ADICIONAR = document.getElementById("adicionar");
ADICIONAR.addEventListener("click", increment)

const SUBTRAIR = document.getElementById("subtrair");
SUBTRAIR.addEventListener("click", decrement);
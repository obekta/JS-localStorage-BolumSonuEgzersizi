// cesitli degiskenlerle id'lere ulasildi

let counter = 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter
// bu kısım yazılmazsa, counter html'de verilen ilk değerinden başlar 

increaseDOM.addEventListener("click", clickIncrease)

function clickIncrease() {
    console.log(this.id)
    counterDOM.innerHTML = ++counter 
    // counterDOM.innerHTML = counter += şeklinde de yazılabilirdi
}

decreaseDOM.addEventListener("click", clickDecrease)

function clickDecrease() {
    console.log(this.id)
    counterDOM.innerHTML = --counter 
    // counterDOM.innerHTML = counter -= şeklinde de yazılabilirdi
}
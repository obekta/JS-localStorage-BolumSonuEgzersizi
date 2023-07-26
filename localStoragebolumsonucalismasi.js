// cesitli degiskenlerle id'lere ulasildi

let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter
// bu kısım yazılmazsa, counter html'de verilen ilk değerinden başlar 

increaseDOM.addEventListener("click", clickFuncInc)


function clickFuncInc() {
    console.log(this)
    counter += 1    
    localStorage.setItem("counter", counter)
    counterDOM.innerHTML = counter
}

decreaseDOM.addEventListener("click", clickFuncDec)

function clickFuncDec() {
    console.log(this)
    counter -= 1 
    localStorage.setItem("counter", counter)
    counterDOM.innerHTML = counter
}



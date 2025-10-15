document.getElementById("incrementBtn").addEventListener("click", incrementCounter);

document.getElementById("decrementBtn").addEventListener("click", decrementCounter);

document.getElementById("resetBtn").addEventListener("click", resetCounter);
let counterDisplay = document.getElementById("counterDisplay")
let countervalue = 0;

function updatecounterDisplay(){
    counterDisplay.textContent = countervalue
}

function incrementCounter(){
    countervalue++;
    updatecounterDisplay();
}

function decrementCounter(){
    countervalue--;
    updatecounterDisplay();
}

function resetCounter(){
    countervalue= 0;
    updatecounterDisplay();
}
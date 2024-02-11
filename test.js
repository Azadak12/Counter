var counter = 0;
function updateCounter(){
    document.getElementById("counter"). textContent = counter;
}
function increment (){
    counter++
    updateCounter();
}
function decrement(){
    if(counter > 0){
        counter--
    }
    updateCounter();
}
function reset(){
    counter =0;
    updateCounter();
}


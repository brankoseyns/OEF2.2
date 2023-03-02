document.addEventListener("DOMContentLoaded", init);
function init() {
    document.querySelector("form").addEventListener("submit",
        processForm);
}
function processForm(e) {
    e.preventDefault();

    const number = document.querySelector("#number").value;

    const para = document.querySelector("p");

    if (number < 0){
        para.innerHTML = "getal is kleiner dan nul";
        para.className = "negative";
    }
    else if (number == 0){ 
        para.innerHTML = "getal is gelijk aan nul";
        para.className = "neutral";
    } else {
        para.innerHTML = "getal is groter dan nul";
        para.className = "positive";
    }
}
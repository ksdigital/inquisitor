function individuals() {
    document.getElementById("cards-2").setAttribute("style", "display: none");
    document.getElementById("cards-3").setAttribute("style", "display: none");
    document.getElementById("cards-1").setAttribute("style", "display: flex");
}
    
function legal() {
    document.getElementById("cards-1").setAttribute("style", "display: none");
    document.getElementById("cards-3").setAttribute("style", "display: none");
    document.getElementById("cards-2").setAttribute("style", "display: flex");
}

function other() {
    document.getElementById("cards-1").setAttribute("style", "display: none");
    document.getElementById("cards-2").setAttribute("style", "display: none");
    document.getElementById("cards-3").setAttribute("style", "display: flex");
}
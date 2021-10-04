function changeText() {
    var el = document.getElementById("btn-hover-text");
    el.innerHTML = "Hello Team";
}

function resetToDefault() {
    var el = document.getElementById("btn-hover-text");
    el.innerHTML = "Hover Me";
}

function showAlert() {
    alert("You are clicked!");
    console.log("you are logged");
}
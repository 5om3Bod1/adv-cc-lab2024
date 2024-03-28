document.addEventListener("DOMContentLoaded",function(){
    
    let newResult = localStorage.getItem("result")

    if (newResult == "front"){
        document.querySelector("#new-message").innerHTML = "You chose front!";
    } else if (newResult == "back") {
        document.querySelector("new-message").innerHTML = "You chose back!";
    }
})
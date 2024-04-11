document.addEventListener("DOMContentLoaded",function(){

    let questions = document.querySelectorAll('.box');
    for (var i = questions.length - 1; i >= 0; i--){
        questions[i].addEventListener('change', function(){
            localStorage.setItem("dice", this.value)
        })
    }

})
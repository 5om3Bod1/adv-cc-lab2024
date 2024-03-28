document.addEventListener("DOMContentLoaded",function(){

    let questions = document.querySelectorAll('.question');
    for (var i = questions.length - 1; i >= 0; i--){
        radios[i].addEventListener('change', function(){
            localStorage.setItem("result", this.value)
        })
    }
})
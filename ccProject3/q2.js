document.addEventListener("DOMContentLoaded",function(){

    let questions = document.querySelectorAll('.q2');
    for (var i = questions.length - 1; i >= 0; i--){
        questions[i].addEventListener('change', function(){
            localStorage.setItem("result2", this.value)
        })
    }
})
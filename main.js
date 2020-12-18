const btn1 = document.querySelector(".question1-button")
const btn2 = document.querySelector(".question2-button")
const btn3 = document.querySelector(".question3-button")
const btn4 = document.querySelector(".question4-button")
const btn5 = document.querySelector(".question5-button")

const btn = document.getElementsByClassName("btn")
const question = document.getElementsByClassName("question")
const a = document.getElementsByClassName("answer")
const p = document.querySelector("p")
const mb = document.querySelector(".mailbox")

const a1 = document.querySelector(".answer1")
const a2 = document.querySelector(".answer2")
const a3 = document.querySelector(".answer3")
const a4 = document.querySelector(".answer4")
const a5 = document.querySelector(".answer5")

var q1 = document.getElementById("q1")
var q2 = document.getElementById("q2")
var q3 = document.getElementById("q3")
var q4 = document.getElementById("q4")
var q5 = document.getElementById("q5")


btn1.addEventListener("click", onClick1)
btn2.addEventListener("click", onClick2)
btn3.addEventListener("click", onClick3)
btn4.addEventListener("click", onClick4)
btn5.addEventListener("click", onClick5)

q1.addEventListener("click", onClick1)
q2.addEventListener("click", onClick2)
q3.addEventListener("click", onClick3)
q4.addEventListener("click", onClick4)
q5.addEventListener("click", onClick5)



function onClick1(e){
    e.preventDefault();
    var q1true = true

    if (q2true = true){
        q2.classList.remove("question1")
        btn2.classList.remove("rotate")
        a2.classList.remove("display")
    }
    if (q3true = true){
        q3.classList.remove("question1")
        btn3.classList.remove("rotate")
        a3.classList.remove("display")
    }
    if (q4true = true){
        q4.classList.remove("question1")
        btn4.classList.remove("rotate")
        a4.classList.remove("display")
    }
    if (q5true = true){
        q5.classList.remove("question1")
        btn5.classList.remove("rotate")
        a5.classList.remove("display")
    }

    q1.classList.toggle("question1")

    btn1.classList.toggle("rotate")
    a1.classList.toggle("display")

    q1true = !q1true
}


function onClick2(e){
    e.preventDefault();
    var q2true = true

    if (q1true = true){
        q1.classList.remove("question1")
        btn1.classList.remove("rotate")
        a1.classList.remove("display")
    }
    if (q3true = true){
        q3.classList.remove("question1")
        btn3.classList.remove("rotate")
        a3.classList.remove("display")
    }
    if (q4true = true){
        q4.classList.remove("question1")
        btn4.classList.remove("rotate")
        a4.classList.remove("display")
    }
    if (q5true = true){
        q5.classList.remove("question1")
        btn5.classList.remove("rotate")
        a5.classList.remove("display")
    }
    q2.classList.toggle("question1")

    btn2.classList.toggle("rotate")
    a2.classList.toggle("display")
    q2true = !q2true
}
function onClick3(e){
    e.preventDefault();
    var q3true = true

    if (q1true = true){
        q1.classList.remove("question1")
        btn1.classList.remove("rotate")
        a1.classList.remove("display")
    }
    if (q2true = true){
        q2.classList.remove("question1")
        btn2.classList.remove("rotate")
        a2.classList.remove("display")
    }
    if (q4true = true){
        q4.classList.remove("question1")
        btn4.classList.remove("rotate")
        a4.classList.remove("display")
    }
    if (q5true = true){
        q5.classList.remove("question1")
        btn5.classList.remove("rotate")
        a5.classList.remove("display")
    }

    q3.classList.toggle("question1")

    btn3.classList.toggle("rotate")
    a3.classList.toggle("display")
    q3true = !q3true
}
function onClick4(e){
    e.preventDefault();
    var q4true = true

    if (q1true = true){
        q1.classList.remove("question1")
        btn1.classList.remove("rotate")
        a1.classList.remove("display")
    }
    if (q2true = true){
        q2.classList.remove("question1")
        btn2.classList.remove("rotate")
        a2.classList.remove("display")
    }
    if (q3true = true){
        q3.classList.remove("question1")
        btn3.classList.remove("rotate")
        a3.classList.remove("display")
    }
    if (q5true = true){
        q5.classList.remove("question1")
        btn5.classList.remove("rotate")
        a5.classList.remove("display")
    }

    q4.classList.toggle("question1")

    btn4.classList.toggle("rotate")
    a4.classList.toggle("display")
    q4true = !q4true
}
function onClick5(e){

    e.preventDefault();
    var q5true = true

    if (q1true = true){
        q1.classList.remove("question1")
        btn1.classList.remove("rotate")
        a1.classList.remove("display")
    }
    if (q2true = true){
        q2.classList.remove("question1")
        btn2.classList.remove("rotate")
        a2.classList.remove("display")
    }
    if (q3true = true){
        q3.classList.remove("question1")
        btn3.classList.remove("rotate")
        a3.classList.remove("display")
    }
    if (q4true = true){
        q4.classList.remove("question1")
        btn4.classList.remove("rotate")
        a4.classList.remove("display")
    }

    q5.classList.toggle("question1")

    btn5.classList.toggle("rotate")
    a5.classList.toggle("display")
    q5true = !q5true

}


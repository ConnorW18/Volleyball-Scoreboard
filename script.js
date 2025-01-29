const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scoreVal1;
let scoreVal2;


// Click Score Functions
add1.addEventListener("click", function(){
    scoreVal1 = document.getElementById("score1").value;
    scoreVal1++;
    score1.value = scoreVal1;

    serve1.style.borderColor = color1;
    who = "t1";
    serve2.style.borderColor = "transparent";
})

add2.addEventListener("click", function(){
    scoreVal2 = document.getElementById("score2").value;
    scoreVal2++;
    score2.value = scoreVal2;

    serve2.style.borderColor = color2;
    who = "t2";
    serve1.style.borderColor = "transparent";
})

sub1.addEventListener("click", function(){
    scoreVal1 = document.getElementById("score1").value;
    scoreVal1--;
    score1.value = scoreVal1;
})

sub2.addEventListener("click", function(){
    scoreVal2 = document.getElementById("score2").value;
    scoreVal2--;
    score2.value = scoreVal2;
})

// Arrow Key Score Functions
document.addEventListener("keydown", function(event){
    if(event.key === "ArrowUp"){
    scoreVal1 = document.getElementById("score1").value;
    scoreVal1++;
    score1.value = scoreVal1;

    serve1.style.borderColor = color1;
    who = "t1";
    serve2.style.borderColor = "transparent";
    }
})

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowRight"){
    scoreVal2 = document.getElementById("score2").value;
    scoreVal2++;
    score2.value = scoreVal2;

    serve2.style.borderColor = color2;
    who = "t2";
    serve1.style.borderColor = "transparent";
    }
})

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowDown"){
    scoreVal1 = document.getElementById("score1").value;
    scoreVal1--;
    score1.value = scoreVal1;
    }
})

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowLeft"){
    scoreVal2 = document.getElementById("score2").value;
    scoreVal2--;
    score2.value = scoreVal2;
    }
})


const serve1 = document.getElementById("serve-img-1");
const serve2 = document.getElementById("serve-img-2");
let who = "t1";
let color1 = "rgb(255, 121, 121)";
let color2 = "rgb(64, 169, 255)"

// Serve Keeper Function

serve1.addEventListener("click", function(){
    if (who == "t1"){
        return
    } else {
        serve1.style.borderColor = color1;
        who = "t1";
        serve2.style.borderColor = "transparent";
    }
})

serve2.addEventListener("click", function(){
    if (who == "t2"){
        return
    } else {
        serve2.style.borderColor = color2;
        who = "t2";
        serve1.style.borderColor = "transparent";
    }
})

const setNumber = document.getElementById("set-num");
let setNumberVal;

// Set Keeper Function

document.addEventListener("keydown", function(event){
    if(event.key === "w"){
        setNumberVal = document.getElementById("set-num").value
        setNumberVal++;
        setNumber.value = setNumberVal;
    }
})

document.addEventListener("keydown", function(event){
    if(event.key === "s"){
        setNumberVal = document.getElementById("set-num").value
        setNumberVal--;
        setNumber.value = setNumberVal;
    }
})

const reset = document.getElementById("reset");

//Reset Score Function

reset.addEventListener("click", function(){
    scoreVal1 = 0;
    scoreVal2 = 0;
    score1.value = scoreVal1;
    score2.value = scoreVal2;

    serve1.style.borderColor = color1;
    who = "t1";
    serve2.style.borderColor = "transparent";
})

let whistleAudio = document.getElementById("whistle");
const whistleBtn = document.getElementById("whistle-btn");

//Whistle Function

whistleBtn.addEventListener("click", function(){
    whistleAudio.play();

    setTimeout(() => {
        whistleAudio.pause();
        whistleAudio.currentTime = 0;
    }, 1000);
})
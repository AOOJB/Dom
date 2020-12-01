const randomBtn = document.querySelector('.buttonrandom');
const resetBtn = document.querySelector('.buttonreset');
const startTimer = document.querySelector('.btnstarttim');
const stopTimer = document.querySelector('.btnstoptim')
var timer;

randomBtn.addEventListener('click', random);
resetBtn.addEventListener('click', reset);
startTimer.addEventListener('click', timerstart);
stopTimer.addEventListener('click', timerstop);

function random(){
    let a = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);
    let rgbcolor = `rgb(${a},${b},${c})`.toString();
    document.body.style.background = rgbcolor;
}

function reset(){
    document.body.style.background = '#505050';
}

function timerstart(){
    timer = setInterval(random, 300);
}

function timerstop(){
    clearInterval(timer);
}
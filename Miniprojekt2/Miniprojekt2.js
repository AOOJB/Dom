function redminus(){
    rednummer--;
    document.getElementById('redtext').innerHTML = `Red: ${rednummer}`;
}
function redplus(){
    rednummer++;
    document.getElementById('redtext').innerHTML = `Red: ${rednummer}`;
}

function greenminus(){
    greennummer--;
    document.getElementById('greentext').innerHTML = `Green: ${greennummer}`;
}
function greenplus(){
    greennummer++;
    document.getElementById('greentext').innerHTML = `Green: ${greennummer}`;
}

function blueminus(){
    bluenummer--;
    document.getElementById('bluetext').innerHTML = `Blue: ${bluenummer}`;
}
function blueplus(){
    bluenummer++;
    document.getElementById('bluetext').innerHTML = `Blue: ${bluenummer}`;
}



var rednummer = 0;
const btnredminus = document.querySelector('.redminus');
const btnredplus = document.querySelector('.redplus');
btnredminus.addEventListener('click', redminus);
btnredplus.addEventListener('click', redplus);

var greennummer = 0;
const btngreenminus = document.querySelector('.greenminus');
const btngreenplus = document.querySelector('.greenplus');
btngreenminus.addEventListener('click', greenminus);
btngreenplus.addEventListener('click', greenplus);

var bluenummer = 0;
const btnblueminus = document.querySelector('.blueminus');
const btnblueplus = document.querySelector('.blueplus');
btnblueminus.addEventListener('click', blueminus);
btnblueplus.addEventListener('click', blueplus);


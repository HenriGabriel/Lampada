const turnOn = document.getElementById ('ligar');
const turnOff = document.getElementById ('desligar');
const lamp = document.getElementById ('lamp');

function islampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!islampBroken () ) {
    lamp.src = './img/ligada.jpeg';
}
}

function lampOff () {
    if (!islampBroken () ) {
    lamp.src = './img/desligada.jpeg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener ('click',lampOn );
turnOff.addEventListener ('click',lampOff);
//lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
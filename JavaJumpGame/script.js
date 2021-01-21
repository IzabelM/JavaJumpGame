const boar = document.querySelector('.boar');

const background= document.querySelector('.background');

let isJumping = false;

let position= 0;

function handleKeyUp(event) {

if (event.keyCode === 32 ) {

if(!isJumping) {

jump();

}

}

}

function jump() {

isJumping = true;

let upInterval = setInterval(() =>{

if (position >=150){

clearInterval(upInterval);



//descendo

let downInterval = setInterval(()=> {

if (position<= 0) {

clearInterval(downInterval);

isJumping = false;

} else {

position -= 20;

boar.style.bottom = position + 'px';

}

} , 20);

} else {

//subindo

position += 20;

boar.style.bottom = position + 'px';

}

} , 20);

}

function createCoffee() {

const coffee = document.createElement('div');

let coffeePosition=1000;

let randomTime = Math.random() * 6000;



coffee.classList.add('coffee');

coffee.style.left = 1000 + 'px';

background.appendChild(coffee);



let leftInterval = setInterval(() => {

if(coffeePosition < -60) {

clearInterval(leftInterval);

background.removeChild(coffee);   

}else if (coffeePosition > 0 && coffeePosition< 60 && position < 60) {

//game over

clearInterval(leftInterval);

document.body.innerHTML = '<h1 class = "game-over"> Fim de jogo</h1>';

} else {

coffeePosition -=10;

coffee.style.left = coffeePosition + 'px';

}

}, 20);

setTimeout(createCoffee, randomTime);

}

createCoffee();

document.addEventListener('keyup', handleKeyUp);


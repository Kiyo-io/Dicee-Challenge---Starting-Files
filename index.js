var randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber2);
// document.querySelector("img").setAttribute("src", "images/dice1.png");
// document.querySelector(".img2").setAttribute("src", "images/dice5.png");

// Successfully deeveloped a working function to change html src img depending on result of random number generated
function leftDice(randomNumber1) {
  if (randomNumber1 === 1) {
    document.querySelector("img").setAttribute("src", "images/dice1.png");
  }
  if (randomNumber1 === 2) {
    document.querySelector("img").setAttribute("src", "images/dice2.png");
  }
  if (randomNumber1 === 3) {
    document.querySelector("img").setAttribute("src", "images/dice3.png");
  }
  if (randomNumber1 === 4) {
    document.querySelector("img").setAttribute("src", "images/dice4.png");
  }
  if (randomNumber1 === 5) {
    document.querySelector("img").setAttribute("src", "images/dice5.png");
  }
  if (randomNumber1 === 6) {
    document.querySelector("img").setAttribute("src", "images/dice6.png");
  }
}
// Calling Function
leftDice(randomNumber1);

function rightDice(randomNumber2) {
  if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  }
  if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  }
  if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  }
  if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  }
  if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  }
  if (randomNumber2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }
}
// Calling Function
rightDice(randomNumber2);

function diceRoll(randomNumber1, randomNumber2) {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🥳";
  } else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw! Roll again! 🧐";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🥳";
  }
}
diceRoll(randomNumber1, randomNumber2);

// document.querySelector("h1").innerHTML = "Player 1 Wins! 🥳";

// document.querySelector("h1").innerHTML = "Player 2 Wins! 🥳";

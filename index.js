var randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);

// document.querySelector("img").setAttribute("src", "images/dice1.png");
document.querySelector(".img2").setAttribute("src", "images/dice5.png");

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

leftDice(randomNumber1);

document.querySelector("h1").innerHTML = "Player 1 Wins! 🥳";

document.querySelector("h1").innerHTML = "Player 2 Wins! 🥳";

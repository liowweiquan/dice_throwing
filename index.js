
var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);

var randomNumber1File = "images/dice"+randomNumber1+".png"

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomNumber1File);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6)+1);

var randomNumber2File = "images/dice"+randomNumber2+".png"

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomNumber2File);


if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Both Players Draw";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 wins";
}
else{document.querySelector("h1").innerText = "Player 2 wins";}

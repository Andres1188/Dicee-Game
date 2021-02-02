var n = Math.floor(Math.random() * 6) + 1;//random number 1 - 6
var randomImage = "images/dice" + n + ".png";//random image images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage);

//-----------------//


var m = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + m + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);//se simplifican las dos ultimas lineas que en el anterior

if(n>m){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if (m > n) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
  document.querySelector("h1").innerHTML = "It's a Draw";
}

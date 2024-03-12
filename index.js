var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image = "dice" + randomNumber1 + ".png";
var newImage = document.querySelectorAll("img")[0];
newImage.setAttribute("src", image);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = "dice" + randomNumber2 + ".png";
var newImage2 = document.querySelectorAll("img")[ 1];
newImage2.setAttribute("src", image2);

if(randomNumber1 > randomNumber2)

{
    console.log(document.querySelector("h1").innerHTML="🥇  Player 1 wins");
  
}
 else if(randomNumber2 > randomNumber1)

{
    console.log(document.querySelector("h1").innerHTML="🥇  Player 2 wins");
}
if(randomNumber1 === randomNumber2)

{
    console.log(document.querySelector("h1").innerHTML="🤩  Draw");
}
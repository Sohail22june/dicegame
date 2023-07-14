var randomnumber1=Math.floor(Math.random()*6)+1;
var imageSourceNumber="dice"+randomnumber1+".jpg";
var image1= document.querySelectorAll("img")[0].setAttribute("src", imageSourceNumber);


var randomnumber2=Math.floor(Math.random()*6)+1;
var imageSourceNumber="dice"+randomnumber2+".jpg";
var image1= document.querySelectorAll("img")[1].setAttribute("src", imageSourceNumber);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="🚩 player1 wins!" ;
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="player2 wins!  🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw! Try again";
}




var randomnumber1=Math.floor(Math.random()*6)+1;
var val="dice"+randomnumber1+".png";
var ans="images/"+val;
document.querySelectorAll("img")[0].setAttribute("src",ans);
var randomnumber2=Math.floor(Math.random()*6)+1;
var val2="dice"+randomnumber2+".png";
var ans2="images/"+val2;
document.querySelectorAll("img")[1].setAttribute("src",ans2);
if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML ="player 1 wins";
}
else if(randomnumber2>randomnumber1){
  document.querySelector("h1").innerHTML  ="player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "match drawn";
}

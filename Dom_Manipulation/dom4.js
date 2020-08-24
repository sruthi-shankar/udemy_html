var b1=document.querySelector("#b1");
var b2=document.querySelector("#b2");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var p1score=0;
var winningscore=5;
boolean gameover;


b1.addEventListener("click",function(){
  
    if(winniningscore==5)
    {
    p1score++ ;
    p1display.textContent=p1score++; 
    }
    else{
        console.log("gameover")
    }
 
})

b2.addEventListener("click",function(){
    p1score++;
    p2display.textContent=p1score++;
 })
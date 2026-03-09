let scale = 1;
let clickCount = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* YES CLICK */

yesBtn.addEventListener("click", function(e){

if(clickCount < 2){

scale += 0.3;
noBtn.style.transform = "scale(" + scale + ")";
clickCount++;

}
else{

moveYes(); // move if user clicks after 2 times

}

});


/* MOVE YES BUTTON FUNCTION */

function moveYes(){

yesBtn.style.position = "absolute";

let x = Math.random() * (window.innerWidth - 120);
let y = Math.random() * (window.innerHeight - 60);

yesBtn.style.left = x + "px";
yesBtn.style.top = y + "px";

}


/* CURSOR NEAR YES */

yesBtn.addEventListener("mouseenter", function(){

if(clickCount >= 2){
moveYes();
}

});


/* NO BUTTON FINAL PAGE */

noBtn.addEventListener("click", function(){

document.getElementById("mainPage").style.display = "none";
document.getElementById("finalPage").style.display = "flex";

});
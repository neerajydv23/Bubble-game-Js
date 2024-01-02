var timer=60;
var hitnum;
var score=0;

function makeBubbles(){
    document.querySelector(".btm").innerHTML = " " ;
    for(var i=1; i<176; i++){
        var rn = Math.floor(Math.random()*10);
        document.querySelector(".btm").innerHTML += `<div class="bubble">${rn}</div>` ;
    }
}
function handleTimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerdiv").textContent = `${timer}`
        }
        else{
            document.querySelector(".btm").innerHTML = "Game Over"
        }
    },1000)
}
function getNewHit(){
   hitnum= Math.floor(Math.random()*10);
   document.querySelector("#hitdiv").textContent=hitnum;
}
function increaseScore(){
    score+=10
    document.querySelector("#scorediv").textContent=score;
}
function handleBubbleClick(){
    document.querySelector(".btm").addEventListener("click",function(dets){
        if( Number(dets.target.textContent) === hitnum){
            increaseScore();
            getNewHit();
            makeBubbles();
        }
    })
}

makeBubbles();
handleBubbleClick();
handleTimer();
getNewHit();

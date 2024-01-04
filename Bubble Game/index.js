var timer = 120;
var num = 0;
var score = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
    num = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = num;
}
function makeBubble(){
    let clutter = "";
    for(let i=1; i<120; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
document.querySelector(".bottom").innerHTML = clutter;
}
function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".bottom").innerHTML = `<h1>Game Over</h1>`
        }
        
    }, 1000);
}

document.querySelector(".bottom").addEventListener('click', function(dets){
    var clickednum = Number(dets.target.textContent);
    console.log(Number.isInteger(clickednum));
    console.log(clickednum);
    if(clickednum === num)
    {
        increaseScore();
        makeBubble();
        getNewHit();
    } else if(clickednum != num && score > 0 && clickednum < 11){
        score -= 10;
        document.querySelector("#scoreval").textContent = score;
    }
})

runTimer();
makeBubble();
getNewHit();
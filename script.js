function bubbleMaker() {
  var bb = "";
  for (i = 1; i <= 70; i++) {
    bb += ` <div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = bb;
}
var timer = 60;
function runTimer() {
  var timerval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timerval);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}
var hitrn = 0;
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}
var score = 0;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNumber = Number(dets.target.textContent);
  if (hitrn === clickedNumber) {
    increaseScore();
    bubbleMaker();
    getNewHit();
  }
});

bubbleMaker();
runTimer();
getNewHit();

const secBtn = document.querySelector(".second");
let countNum = 0;

secBtn.addEventListener("click", () => {
  countNum += 10;
  secBtn.textContent = countNum;

  const startBtn = document.querySelector(".start");
  const startImg = document.querySelector(".start>img");
  startBtn.style.backgroundColor = "#5180FF";
  startBtn.style.color = "#fff";
  startImg.src = "images/icon-start.svg";

  const resetBtn = document.querySelector(".reset");
  const resetImg = document.querySelector(".reset>img");
  resetBtn.style.backgroundColor = "#FB7099";
  resetBtn.style.color = "#fff";
  resetImg.src = "images/icon-reset.svg";

  startBtn.addEventListener("click", () => {
    const startTxt = document.querySelector(".start>span");
    startBtn.style.backgroundColor = "#15C2B8";
    startTxt.textContent = "PAUSE";
    startImg.src = "images/icon-stop.svg";

    let startCount = setInterval(() => {
      --countNum;
      if (countNum < 10 && countNum > 0) {
        secBtn.textContent = `0${countNum}`;
      }
      if (countNum === 0) {
        countNum = 0;
        secBtn.textContent = `0${countNum}`;
        startBtn.style.backgroundColor = "#5180FF";
        startTxt.textContent = "START";
        startImg.src = "images/icon-start.svg";
        alert("Finish");
        clearInterval(startCount);
      }
    }, 1000);
    if (countNum === 0) {
    }
  });
});

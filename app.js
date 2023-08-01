const alphabet = document.querySelectorAll(".alphabet");

function animStart() {
  for (let i = 0; i < 7; i++) {
    setTimeout(function () {
      alphabet[i].style.opacity = `1`;
    }, (i + 1) * 200);
    setTimeout(function () {
      alphabet[i].style.transform = `translateX(0)`;
    }, (i + 1) * 300);
  }
}

function animFinish() {
  for (let j = 6; j > -1; j--) {
    setTimeout(function () {
      alphabet[j].style.transform = `translateX(600px)`;
    }, (j + 1) * 300);
    setTimeout(function () {
      alphabet[j].style.opacity = "0";
    }, (j + 1) * 310);
    setTimeout(function () {
      alphabet[j].style.transform = `translateX(-600px)`;
    }, (j + 1) * 385);
  }
}
setTimeout(animStart, 1000);
setTimeout(animFinish, 3500);
setInterval(function () {
  setTimeout(animStart, 1000);
  setTimeout(animFinish, 3500);
}, 4500);

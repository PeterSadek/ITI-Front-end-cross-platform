var topImage = document.getElementById("top");
var leftImage = document.getElementById("left");
var rightImage = document.getElementById("right");
var container = document.getElementById("container");
var goBtn = document.getElementById("goBtn");
var resetBtn = document.getElementById("resetBtn");
var leftinfo = document.getElementById("leftinfo");
var rightinfo = document.getElementById("rightinfo");
var interval;
var clicked = false;

leftinfo.innerText = "<img src='images/icon1.gif'' style=left: 0px/>";
rightinfo.innerText = "<img src='images/icon2.gif'' style=left: 353px/>";

goBtn.onclick = function () {
  clicked = !clicked;
  var imageWidth = 47;
  var direction = 1;
  var direction1 = -1;
  var direction2 = 1;

  if (clicked) {
    goBtn.innerHTML = "Stop";
    function moveImage() {
      var currentPosition = leftImage.offsetLeft;
      var newPosition = currentPosition + 10 * direction;
      if (
        newPosition >= container.clientWidth - imageWidth ||
        newPosition <= 0
      ) {
        direction = -direction;
      }
      leftImage.style.left = newPosition + "px";
      leftinfo.innerText =
        "<img src='images/icon1.gif'' style=left: " +
        leftImage.offsetLeft +
        "px" +
        "/>";
    }

    function moveImage2() {
      var currentPosition2 = rightImage.offsetLeft;
      var newPosition2 = currentPosition2 + 10 * direction1;
      if (
        newPosition2 >= container.clientWidth - imageWidth ||
        newPosition2 <= 0
      ) {
        direction1 = -direction1;
      }
      rightImage.style.left = newPosition2 + "px";
      rightinfo.innerText =
        "<img src='images/icon2.gif'' style=left: " +
        rightImage.offsetLeft +
        "px" +
        "/>";
    }

    function moveImage3() {
      var currentPosition3 = topImage.offsetTop;
      var newPosition3 = currentPosition3 + 10 * direction2;
      if (
        newPosition3 >= container.clientHeight - imageWidth ||
        newPosition3 <= 0
      ) {
        direction2 = -direction2;
      }
      topImage.style.top = newPosition3 + "px";
    }

    interval = setInterval(function () {
      moveImage();
      moveImage3();
      moveImage2();
    }, 50);
  } else {
    clearInterval(interval);
    goBtn.innerHTML = "Go";
  }
};

resetBtn.onclick = function () {
  clearInterval(interval);
  topImage.style.top = 0;
  rightImage.style.left = "353px";
  leftImage.style.left = 0;

  clicked = !clicked;
  goBtn.innerHTML = "Go";

  leftinfo.innerText = "<img src='images/icon1.gif'' style=left: 0px/>";
  rightinfo.innerText = "<img src='images/icon2.gif'' style=left: 353px/>";
};

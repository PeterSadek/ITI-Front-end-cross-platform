var selectedImgage = document.getElementById("msgImage");
var userMsg = document.getElementById("userMsg");
var closeButton = document.getElementById("closeWindow");

var checkedVal = getCookie("checked");
if (checkedVal === "card1") {
  selectedImgage.src = "./images/gws.jpg";
} else if (checkedVal === "card2") {
  selectedImgage.src = "./images/gws2.jpg";
} else if (checkedVal === "card3") {
  selectedImgage.src = "./images/gwsf.jpg";
} else if (checkedVal === "card4") {
  selectedImgage.src = "./images/gwsf2.jpg";
} else if (checkedVal === "card5") {
  selectedImgage.src = "./images/gwsf2.png";
} else if (checkedVal === "card6") {
  selectedImgage.src = "./images/gwsf3.jpg";
}

var inputMsg = getCookie("message");
userMsg.innerHTML = inputMsg;

closeButton.onclick = function () {
  window.close();
};

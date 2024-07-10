var genButton = document.getElementById("btn");
var cards = document.querySelectorAll('input[name="cards"]');
var message = document.getElementById("message");
var images = document.images;
var card = document.getElementsByClassName("card");
var checked;

genButton.onclick = function () {
  for (var item in cards) {
    if (cards[item].checked) {
      checked = cards[item].value;
      console.log(cards[item].parentElement);
    }
  }
  setCookie("checked", checked);

  setCookie("message", message.value);
  open("message.html");
};

//// red border
// var selected;
// for (var item in cards) {
//   (function (index) {
//     cards[index].onchange = function () {
//       if (selected) {
//         selected.style.border = "";
//       }
//       selected = cards[index].parentElement;
//       selected.style.border = "5px solid red";
//     };
//   })(item);
// }

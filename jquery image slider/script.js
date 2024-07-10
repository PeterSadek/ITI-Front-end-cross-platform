$(".images").click(function (e) {
  e.stopPropagation();
  $("#overlay").css("display", "block");

  $("<button id='previous' class='btn'></button>")
    .text("previous")
    .appendTo("#popout");

  $("<button id='next' class='btn'></button>").text("next").appendTo("#popout");

  let current = $(this);
  $("#inner img").each(function () {
    var sliderImage = $(this);
    if (current.attr("src") === sliderImage.attr("src")) {
      sliderImage.attr("class", "active");
    }
  });

  $("#next").click(function (e) {
    e.stopPropagation();
    var sliderImage = $(".active");
    var nextImage = sliderImage.next();

    if (nextImage.length) {
      sliderImage.removeClass("active");
      nextImage.addClass("active");
    }
  });

  $("#previous").click(function (e) {
    e.stopPropagation();
    var sliderImage = $(".active");
    var prevImage = sliderImage.prev();

    if (prevImage.length) {
      sliderImage.removeClass("active");
      prevImage.addClass("active");
    }
  });
});
$("#overlay").click(backToNormal);

function backToNormal(e) {
  e.stopPropagation();
  $("#overlay").css("display", "none");
  $("#inner img").attr("class", "");
  $(".btn").remove();
}

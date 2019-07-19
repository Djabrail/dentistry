import $ from "jquery";
import popper from "popper.js";
import "slick-carousel";

$(function() {
  $("body").css("color", "blue");
});

$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  arrows: false
});

$(".menu__icon").click(function(e) {
  $(".menu").toggleClass("menu__active");
  e.preventDefault();
});

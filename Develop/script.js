console.log("hello");
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
});

var timesOfDay = [8, 9, 10, 11, 12, 13, 14, 15, 16];
var currentTime = Number(moment().hours());
console.log(currentTime);

$(".time-block").each(function () {
  var timeBlock = Number($(this).getAttribute("id"));
  if (currentTime > timeBlock) {
    $(this).addClass("past");
  }
});

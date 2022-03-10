console.log("hello");
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
});

var currentTime = Number(moment().hours());
console.log(currentTime);

$(".time-block").each(function () {
  var timeBlock = Number($(this).attr("id").replace(/time/, ""));
  console.log(timeBlock);

  if (currentTime === timeBlock) {
    $(this).addClass("present");
  } else if (currentTime < timeBlock) {
    $(this).addClass("future");
  } else if (currentTime < timeBlock) {
    $(this).addClass("past");
  }
});

saveBtn = $(".save-btn");
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  saveBtn.on("click", function (event) {
    console.log(this.s);
    userInput = $(this).siblings("input").val();
    console.log(userInput);
    event.preventDefault();
  });
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

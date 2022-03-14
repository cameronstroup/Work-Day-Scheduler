saveBtn = $(".save-btn");
$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  saveBtn.on("click", function (event) {
    console.log(this);
    userInput = $(this).parent().siblings(".change").children("input").val();
    console.log(userInput);
    var times = $(this).parent().attr("id"); // taken the change from the parent html id attribute
    console.log(times);
    localStorage.setItem(times, userInput);
    event.preventDefault();
  });
  $('input[name="8-in"]').val(localStorage.getItem("8"));
  $('input[name="9-in"]').val(localStorage.getItem("9"));
  $('input[name="10-in"]').val(localStorage.getItem("10"));
  $('input[name="11-in"]').val(localStorage.getItem("11"));
  $('input[name="12-in"]').val(localStorage.getItem("12"));
  $('input[name="1-in"]').val(localStorage.getItem("1"));
  $('input[name="2-in"]').val(localStorage.getItem("2"));
  $('input[name="3-in"]').val(localStorage.getItem("3"));
  $('input[name="4-in"]').val(localStorage.getItem("4"));
  $('input[name="5-in"]').val(localStorage.getItem("5"));
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

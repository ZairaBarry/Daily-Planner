$(document).ready(function () {

  // code to  display the current date in the header of the page.
  var presentDate = dayjs().format('MMM D, YYYY, hh:mm:ss a')
  var currentHour = dayjs().hour()
  $('#currentDay').text(presentDate);

})


//code to apply the past, present, or future class to each time block and display color accordingly
$('.description').each(function () {
  var rowHour = $(this).attr('id')
  if (parseInt(rowHour) === parseInt(currentHour)) {
    $(this).addClass("present")
  } else if (parseInt(rowHour) < parseInt(currentHour)) {
    $(this).addClass("past")
  } else {
    $(this).addClass("future")
  }

});


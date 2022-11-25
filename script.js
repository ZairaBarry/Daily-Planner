$(document).ready(function () {

  // code to  display the current date in the header of the page.
  var presentDate = dayjs().format('MMM D, YYYY, hh:mm:ss a')
  var currentHour = dayjs().hour()
  $('#currentDay').text(presentDate);

})
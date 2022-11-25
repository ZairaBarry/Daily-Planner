$(document).ready(function () {

  // code to  display the current date in the header of the page.
  var presentDate = dayjs().format('MMM D, YYYY, hh:mm:ss a')
  $('#currentDay').text(presentDate);

});


//code to apply the past, present, or future class to each time block and display color accordingly
$('.description').each(function () {
  var rowHour = $(this).attr('id')
  var currentHour = dayjs().hour()
  if (parseInt(rowHour) === parseInt(currentHour)) {
    $(this).addClass("present")
  } else if (parseInt(rowHour) < parseInt(currentHour)) {
    $(this).addClass("past")
  } else {
    $(this).addClass("future")
  };


  // function to save the input into local storage and to  get any user input that was saved in localStorage and set  the values of the corresponding textarea elements
  $('.saveBtn').on('click', function () {
    var notes = $(this).siblings('.description').val();
    var notesId = $(this).attr('id');
    localStorage.setItem(notesId, notes);
  })

  $('#8').val(localStorage.getItem('8am'));
  for (let i = 8; i < 18; i++) {
    $(`#${i}`).val(localStorage.getItem(`${i}hour`))
  }


});


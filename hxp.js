$(document).ready(function() {
	$('.button').on('click', function() {
  $('h4').toggleClass('hide');
  $('.button2').toggleClass('hide');
  $(this).toggleClass('hide');
   $('p').toggleClass('hide');
});
	$('.button2').on('click', function () {
  $('h4').toggleClass('hide');
    $(this).toggleClass('hide');
  $('.button').toggleClass('hide');
  $('p').toggleClass('hide');
	})
})	

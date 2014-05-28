$(document).ready(function() {
  function hide() {
     $('h4').toggleClass('hide');
     $('.button').toggleClass('hide');
     $('.button2').toggleClass('hide');
     $('p').toggleClass('hide');
  };
	$('.button').on('click', hide);
	$('.button2').on('click', hide);
})	

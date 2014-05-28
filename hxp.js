$(document).ready(function() {
  function hidey() {
     $('h4').toggleClass('hide');
     $('.button').toggleClass('hide');
     $('.button2').toggleClass('hide');
     $('p').toggleClass('hide');
  };
	$('.button').on('click', hidey);
	$('.button2').on('click', hidey);

})	

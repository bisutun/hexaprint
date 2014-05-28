$(document).ready(function() {
  function hide() {
     $('h4').toggleClass('hide');
     $('.button').toggleClass('hide');
     $('.button2').toggleClass('hide');
     $('p').toggleClass('hide');
  };
	$(this).on('click', hide);
})	

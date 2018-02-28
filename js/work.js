$('.wrapper li').on('click', function(){
  $('.wrapper li').toggleClass('plier');
	$(this).toggleClass('active');
});

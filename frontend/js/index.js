$(window).scroll(function() {
  if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
  {
      $('.navbar').addClass('bg-light');
      $('#logo').show();
  } else {
      $('.navbar').removeClass('bg-light');
      $('#logo').hide();
  }
});

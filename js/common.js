script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"


    $(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
          $('#topNubex').fadeIn();
        } else {
          $('#topNubex').fadeOut();
        }
      });
      $('#topNubex').click(function() {
        $('body,html').animate({
          scrollTop: 0
        }, 700);
      });
    });
 
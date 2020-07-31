$(function () {


    $(".nav-link").each(function(){
      if ($(this).prop('href') == window.location.href)
      {
        $(this).addClass('text-link');
      }
    });


    $("#facebook-icon").mouseover(function () {
        this.src= "./assets/icons/facebook.png";
        $(this).css('width', '30px');
   }).mouseout(function () {
        this.src= "./assets/icons/facebook-hover.png";
        $(this).css('width', '25px');
    });

    $("#instagram-icon").mouseover(function () {
        this.src= "./assets/icons/instagram.png";
        $(this).css('width', '30px');
    }).mouseout(function () {
      this.src= "./assets/icons/instagram-hover.png";
      $(this).css('width', '25px');
    });

    $("#twitter-icon").mouseover(function () {
        this.src= "./assets/icons/twitter.png";
        $(this).css('width', '30px');
    }).mouseout(function () {
        this.src= "./assets/icons/twitter-hover.png";
        $(this).css('width', '25px');
    });

    $("#youtube-icon").mouseover(function () {
        this.src= "./assets/icons/youtube.png";
        $(this).css('width', '30px');
    }).mouseout(function () {
        this.src= "./assets/icons/youtube-hover.png";
        $(this).css('width', '25px');
    });

    $('[data-toggle="tooltip"]').tooltip();

    var stop = $("#section2").offset().top-400;
      $(window).scroll(function() {
          if ($(window).scrollTop() > stop ) {
              $(window).off("scroll");
              $('.count').each(function () {
                  var $this = $(this);
                  jQuery({ Counter: 0 }).animate({ Counter: $this.attr("data") }, {
                      duration: 1000,
                      easing: 'swing',
                      step: function () {
                          $this.text(Math.ceil(this.Counter));
                      }
                  });
              });
          }
      });
})

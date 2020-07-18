$(function () {


    $(".nav-link").each(function(){
                if ($(this).prop('href') == window.location.href)
                {
                  $(this).addClass('text-link');
                }
            });


    $("#facebook-icon") .mouseover(function () {
      this.src= "./assets/icons/facebook.png"
    }).mouseout(function () {
      this.src= "./assets/icons/facebook-hover.png"
    });

    $("#instagram-icon") .mouseover(function () {
       this.src= "./assets/icons/instagram.png"
    }).mouseout(function () {
        this.src= "./assets/icons/instagram-hover.png"
    });

    $("#twitter-icon") .mouseover(function () {
       this.src= "./assets/icons/twitter.png"
    }).mouseout(function () {
        this.src= "./assets/icons/twitter-hover.png"
    });

    $("#youtube-icon") .mouseover(function () {
       this.src= "./assets/icons/youtube.png"
    }).mouseout(function () {
        this.src= "./assets/icons/youtube-hover.png"
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

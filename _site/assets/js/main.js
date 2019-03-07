$(document).ready(function() {
    // run function on initial page load
    clickableDiv();
    about();

    // run function on resize of the window
    $(window).resize(function() {
      about();
    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

function clickableDiv() {
  $('.day').click(function() {
    window.location = $(this).find("a").attr("href");
  });
}
function about() {
  var sH = $('#stripe').outerHeight();
  var wH = $(window).outerHeight();
  var bottom = wH - sH;
  var wW = $(window).outerWidth();
  if (wW <= 1400) {
    $('#stripe').click(function() {
      $('#stripe').toggleClass('clicked');
      $('#up').toggleClass('hidden');
      $('#down').toggleClass('hidden');
      if ($('#stripe').hasClass('clicked')) {
        $('#stripe').css('bottom', bottom);
        $('main').css('margin-top', (sH + 50));
      } else {
        $('#stripe').css('bottom', 'calc(100vh - 20px)');
        $('main').css('margin-top', '50px');
      }
    });
  } else {
    $('#stripe').click(function() {
      $('#stripe').toggleClass('clicked');
      $('#left').toggleClass('hidden');
      $('#right').toggleClass('hidden');
      if ($('#stripe').hasClass('clicked')) {
        $('main').css('left', '500px');
      } else {
        $('main').css('left', '0');
      }
    });
  }
}

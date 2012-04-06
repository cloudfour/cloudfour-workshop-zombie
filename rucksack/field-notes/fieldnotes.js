$(document).ready(function() {
  $("section[id^='snippet']").add("section[id^='some-details']").each(function() {
    $(this).find('h3 a, h4 a, h5 a').attr('href', '');
    $(this).children('section').hide();
    $(this).addClass('snippet');
    $(this).find('h3:first, h3 a:first, h4:first, h4 a:first, h2:first, h2 a:first').click(function(event) {
      event.preventDefault();
      $(this).parents('.snippet').children('section').toggle();
      $(this).parents('.snippet').toggleClass('open');
    });
  });
});
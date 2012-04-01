$(document).ready(function() {
  $("section[id^='snippet']").add("section[id^='some-details']").each(function() {
    $(this).children('section').hide();
    $(this).addClass('snippet');
    $(this).click(function() {
      $(this).children('section').toggle();
      $(this).toggleClass('open');
    });
  });
});
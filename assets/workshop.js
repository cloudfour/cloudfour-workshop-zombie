$(document).ready(function() {
  
  var newWindow,
  $speakerWindow,
  slaveWindow = function() {
    $speakerWindow = $(newWindow.document.documentElement);
  },
  showNotes = function() {
    var $nowSlide = $('div.slide:visible'),
            speakerNotes = $nowSlide.find('[id^="speaker"]').html();
    if(speakerNotes && $speakerWindow) {
      speakerNotes = '<h1>' + $('div.slide:visible').find('h1').html() + '</h1>' + speakerNotes;
      $speakerWindow.find('body').html(speakerNotes);
      $speakerWindow.find('a').attr('target', 'workshop'); // Open all links from speaker notes in an external, but reused, window
      $speakerWindow.find('a[title*="Field Notes"]').attr('target', 'fieldnotes');
    }
  };
  
  $('body').one('click', function(e) {
    newWindow = window.open('../assets/speakernotes.html','Speaker Notes');
    setTimeout(slaveWindow, 1500);
  });
  $('body').bind('keyup click', function() {
    var waitASec = setTimeout(showNotes, 400);
  });
});

$(document).ready(function() {
  
  var newWindow,
  $speakerWindow,
  slaveWindow = function() {
    $speakerWindow = $(newWindow.document.documentElement);
  },
  showNotes = function() {
    var $nowSlide = $('div.slide:visible'),
        speakerNotes;
    if($speakerWindow) {
      speakerNotes = $nowSlide.find('[id^="speaker"]').html();
      if (!speakerNotes) {
        speakerNotes = '[No speaker notes]';
      }
      speakerNotes = '<h1>' + $('div.slide:visible').find('h1').html() + '</h1>' + speakerNotes;
      $speakerWindow.find('body').html(speakerNotes);
      $speakerWindow.find('a').attr('target', 'workshop'); // Open all links from speaker notes in an external, but reused, window
      $speakerWindow.find('a[title*="Field Notes"]').attr('target', 'fieldnotes');
    }
  };
  
  if ($('body').find('[id^="speaker"]').length) {
    $('body').one('click', function(e) {
      newWindow = window.open('../assets/speakernotes.html','Speaker Notes', 'width=800,height=600,status=no,toolbar=no');
      setTimeout(slaveWindow, 1500);
    });
    $('body').bind('keyup click', function() {
      var waitASec = setTimeout(showNotes, 400);
    });
  }
});

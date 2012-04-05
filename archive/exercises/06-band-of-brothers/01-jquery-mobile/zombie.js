window.zombieManager = (function() {
  var zombies       = new Array();
  var zombie_icons  = { // Each killing method has a corresponding icon.
    'nukes'         : 'z2.png',
    'conflagration' : 'z5.png',
    'tank'          : 'z7.png',
    'trickery'      : 'z11.png',
    'poison'        : 'z13.png',
    'corrosive'     : 'z8.png',
    'dismemberment' : 'z14.png'
  },
  resetZombies = function() {  // Wipe out the zombies and start over
    zombies = new Array();
    $('li.zombie').remove();
    $('#zombielist').listview('refresh');
  },
  showZombies = function() { // Refresh/show <ul> of zombies nabbed
    for(var i = 0; i < zombies.length; i++) {
      var zombieWhen = new Date(zombies[i].when);
      // Formatting the date-time using the format JS library
      // Generate a unique-ish ID for the Zombie based on the datetime
      // it was nabbed.
      var zombieID   = 'zombie-' + zombieWhen.format('mdyhis');
      // If there isn't already a row for this Zombie ID
      if (!$("#" + zombieID).length) {
        // Create a new <li> element and populate it with info about the zombie
        var $zombieRow = $('<li></li>').addClass('zombie').attr('id', zombieID);
        // Add an appropriate icon image for the killing method
        if (zombies[i].how && zombie_icons[zombies[i].how]) {
          $zombieImg = $("<img>").attr(
            { src :  'icons/' + zombie_icons[zombies[i].how],
              alt :  'How it died'
            });
          $zombieRow.append($zombieImg);
        }
        $zombieRow.append( 
          '<h3>Zombie Nabbed!</h3><p><strong>' 
          + zombieWhen.format('m/d/y H:i') 
          + '</strong></p>'
        );
        if (zombies[i].where && zombies[i].where.coords) { // If there is location information, add it.
          var coords = zombies[i].where.coords;
          $zombieRow.append('<p>Coordinates: ' 
          + coords.latitude + ', ' 
          + coords.longitude + '</p>');
        }
        $('#zombielist').prepend($zombieRow); // Prepend the new <li> to the beginning of #zombielist 
      }
    }
    // Add a reset button if one is not there already (and there is 
    // at least one zombie)
    if (zombies && zombies.length && !$('#zombie-reset').length) {
      $startOver = $('<button>Reset my Zombies</button>').attr('id', 'zombie-reset');
      $('#zombielist').after($startOver);
      // Assign click handler to reset the zombie list
      $('#zombie-reset').button().click(function() {
        resetZombies();
      });
    }
    // Refresh the listview for #zombielist because we've (likely)
    // altered the list.
    $('#zombielist').listview('refresh');
  };
  
  // Return object literal with two available methods (init and addZombie)
  return {
    // Add a new zombie to the list of zombies
    addZombie     : function(zombieWhen, zombieWhere, zombieHow) {
      zombies[zombies.length] = {
        when      : zombieWhen.valueOf(),
        where     : zombieWhere,
        how       : zombieHow
      };
      showZombies();
    }
  }
}());

$("#nab-zombie").live('pageinit', function() {
  var geoHappy = geo_position_js.init(); // Is Geolocation supported?
  $("#got-one").click(function() {   // Click handler for the "Got One" button
    var now = new Date();
    var how = $("#how-zombie").val();
    if (geoHappy) { // Get position data if supported
      geo_position_js.getCurrentPosition(function(position) {
        zombieManager.addZombie(now, position, how);
      }, function(error) {
        console.log("Geolocation error: " + error.message)
        zombieManager.addZombie(now, null, how);
      });
    } else { // It's also OK to add a zombie w/o location data
      zombieManager.addZombie(now, null, how);
    }
  });
});


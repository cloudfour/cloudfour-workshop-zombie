window.zombieManager = (function() {
  var zombies       = new Array();
  var zombieChair   = Lawnchair({name: 'zombies'}, function() {});
  // Each killing method has a corresponding icon. Here we map them.
  var zombie_icons  = {
    'nukes'         : 'z2.png',
    'conflagration' : 'z5.png',
    'tank'          : 'z7.png',
    'trickery'      : 'z11.png',
    'poison'        : 'z13.png',
    'corrosive'     : 'z8.png',
    'dismemberment' : 'z14.png'
  };
  // Wipe out the zombies and start over
  var resetZombies = function() {
    zombies = new Array();
    $('li.zombie').remove();
    zombieChair.nuke();
    $('#zombielist').listview('refresh');
  };
  
  // Refresh/show <ul> of zombies nabbed
  var showZombies = function() {
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
        // If there is location information, add it.
        if (zombies[i].where && zombies[i].where.coords) {
          var coords = zombies[i].where.coords;
          $zombieRow.append('<p>Coordinates: ' 
          + coords.latitude + ', ' 
          + coords.longitude + '</p>');
        }
        // Prepend the new <li> to the beginning of #zombielist
        $('#zombielist').prepend($zombieRow);
        
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
    // altered the list. TODO: Use variable instead of ID here.
    $('#zombielist').listview('refresh');
  };
  
  // Return object literal with two available methods (init and addZombie)
  return {
    init          : function() {
      zombieChair.get('zombies', function(zombiesOnIce) {
        if (zombiesOnIce) {
          zombies = zombiesOnIce.value;
        }
      });
      showZombies();
    },
    // Add a new zombie to the list of zombies
    addZombie     : function(zombieWhen, zombieWhere, zombieHow) {
      zombies[zombies.length] = {
        when      : zombieWhen.valueOf(),
        where     : zombieWhere,
        how       : zombieHow
      };
      zombieChair.save({key: 'zombies', value : zombies });
      showZombies();
    }
  }
}());

// TODO: Crap. Should this be pagecreate?
$("#nab-zombie").live('pageinit', function() {
  zombieManager.init();
  // Is Geolocation supported?
  var geoHappy = geo_position_js.init();
  // Click handler for the "Got One" button
  $("#got-one").click(function() {
    var now = new Date();
    var how = $("#how-zombie").val();
    // Get position data if supported
    if (geoHappy) {
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


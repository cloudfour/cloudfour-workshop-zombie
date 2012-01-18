window.zombieManager = function() {
  var zombies       = new Array();
  var zombieChair   = Lawnchair({name: 'zombies'}, function() {});
  var zombie_icons  = {
    'nukes'         : 'z2.png',
    'conflagration' : 'z5.png',
    'tank'          : 'z7.png',
    'trickery'      : 'z11.png',
    'poison'        : 'z13.png',
    'corrosive'     : 'z8.png',
    'dismemberment' : 'z14.png'
  };
  var $zombieList = $('#zombielist');

  var resetZombies = function() {
    zombies = new Array();
    zombieChair.nuke();
    $('li.zombie').remove();
    $zombieList.listview('refresh');
  };
  
  var showZombies = function() {
    for(var i = 0; i < zombies.length; i++) {
      var zombieWhen = new Date(zombies[i].when);
      var zombieID   = 'zombie-' + zombieWhen.format('mdyhis');
      if (!$("#" + zombieID).length) {
        var $zombieRow = $('<li></li>').addClass('zombie').attr('id', zombieID);
        if (zombies[i].how && zombie_icons[zombies[i].how]) {
          $zombieImg = $("<img>").attr(
            { src :  'icons/' + zombie_icons[zombies[i].how],
              alt :  'How it died'
            });
          $zombieRow.append($zombieImg);
        }
        $zombieRow.append( 
          '<h3>Zombie Nabbed!</h3><p><strong>' + zombieWhen.format('m/d/y H:i') + '</strong></p>'
        );
        if (zombies[i].where && zombies[i].where.coords) {
          var coords = zombies[i].where.coords;
          $zombieRow.append('<p>Coordinates: ' + coords.latitude + ', ' + coords.longitude + '</p>');
        }
        $('#zombielist').prepend($zombieRow);
        
      }
    }
    if (zombies && zombies.length && !$('#zombie-reset').length) {
      $startOver = $('<button>Reset my Zombies</button>').attr('id', 'zombie-reset');
      $('#zombielist').after($startOver);
      $('#zombie-reset').button().click(function() {
        resetZombies();
      });
    }
    $('#zombielist').listview('refresh');
  };
  
  return {
    init          : function() {
      zombieChair.get('zombies', function(zombiesOnIce) {
        if (zombiesOnIce) {
          zombies = zombiesOnIce.value;
        }
      });
      showZombies();
    },
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
}();

$("#nab-zombie").live('pageinit', function() {

  zombieManager.init();
  
  var geoHappy = false;
  $("#got-one").click(function() {
    var now = new Date();
    var how = $("#how-zombie").val();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        zombieManager.addZombie(now, position, how);
      }, function(error) {
        zombieManager.addZombie(now, null, how);
      });
    } else {
      zombieManager.addZombie(now, null, how);
    }
  });
  var $viewportMeta = $('meta[name="viewport"]');
  $('input, select, textarea').bind('focus blur', function(event) {
    $viewportMeta.attr('content', 'width=device-width,initial-scale=1,maximum-scale=' + (event.type == 'blur' ? 10 : 1));
  });
});


(function($){

  $.extend({
    playSound: function(sound){
      return $("<embed src='./resources/"+ sound +".mp3' hidden='true' autostart='true' loop='false' class='playSound'>"
       + "</audio>")
      .appendTo('body');
    }
  });

})(jQuery);
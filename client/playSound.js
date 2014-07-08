(function($){

  $.extend({
    playSound: function(sound){
      $('audio').on('ended',function(){
        this.remove()
      })
      if(sound === undefined){
        return;
      }
      return $("<audio id='player' hidden='true' autoplay='autoplay'  controls='controls'>" + "<source src='./resources/" + sound  +".mp3'/>"
       + "</audio>")
      .appendTo('body');
    }
  });

})(jQuery);
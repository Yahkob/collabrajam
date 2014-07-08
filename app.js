$(function(){

var keyClicks = function(){
  $('div').click(function(e){
    console.log(this.id)
    $.playSound(this.id);
  })
};

keyClicks()

});
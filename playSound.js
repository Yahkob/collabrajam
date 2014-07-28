var playSound = function(sound){
  var audioElement = "<audio id='player' hidden='true' autoplay='autoplay'  controls='controls'>" + "<source src='./resources/" + sound  +".mp3'/>" + "</audio>";
  if(player.length > 1){
    _.each(player,function(i){
      i.addEventListener('ended', function(){
        i.remove();
      }, false);
    });
  }
  if(sound === undefined){
    return;
  }
  return document.body.insertAdjacentHTML('beforeend',audioElement);
  };
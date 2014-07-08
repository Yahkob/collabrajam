var keyBinding = function(){
  var keys = {
    20:'c',
    81:'cS',
    65:'d',
    87:'dS',
    83:'e',
    68:'f',
    82:'fS',
    70:'g',
    84:'gS',
    71:'a',
    89:'aS',
    72:'b',
    74:'c2',
    73:'c2S',
    75:'d2',
    79:'d2S',
    76:'e2',
    186:'f2',
    219:'f2S',
    222:'g2',
    221:'g2S',
    13:'a2',
    220:'a2S',
    16:'b2',
    77:'kick',
    78:'kick2',
    66:'snare',
    67:'china',
    88:'hihat'
  };
  $(document).keydown(function(e) {
    var currentCode = keys[e.keyCode];
    var $selectedClass = $('#' + currentCode);
    if(!$selectedClass.attr('class')){
      $.playSound(currentCode);
      return;
    }
    var className = $selectedClass.attr('class').substr(0,9);
    $.playSound(currentCode);
    return _.contains(className,'white-key') ?
    $selectedClass.toggleClass('whiteOnKey') : $selectedClass.toggleClass('blackOnKey');
  });

  $(document).keyup(function(e){
    var currentCode = keys[e.keyCode];
    var $selectedClass = $('#' + currentCode);
    if(!$selectedClass.attr('class')){
      return;
    }
    var className = $selectedClass.attr('class').substr(0,9);
    _.contains(className,'white-key') ?
    $selectedClass.toggleClass('whiteOnKey') : $selectedClass.toggleClass('blackOnKey');
  });
};

var keyClicks = function(){
  $('div').click(function(e){
    $.playSound(this.id);
  });
};

$('.playSynth').click(function(e){
  $('.playDrums, .playSynth, .both').hide();
  $('.home, .piano').show(this);
});

$('.playDrums').click(function(e){
  $('.both, .playDrums, .playSynth').hide()
  $('.drums, .home').show(this)
});

$('.both').click(function(e){
  $('.playDrums, .playSynth, .both').hide();
  $('.drums, .piano, .home').show(this);
});

$('.home').click(function(e){
  $('.playDrums, .playSynth, .both').show();
  $('.home, .drums, .piano').hide();
});

var init = function(){

  keyBinding();
  keyClicks();
  $('.home').hide();
  $('.piano').hide();
  $('.drums').hide();
};

$(function(){
  init();
});
$(function(){
var keyBinding = function(){
  [20, 81, 65, 87, 83, 68, 82, 70, 84, 71, 89, 72, 74, 73, 75, 79, 76, 186, 219, 222, 221, 13, 220]
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
      $.playSound(currentCode)
      return;
    }
    var className = $selectedClass.attr('class').substr(0,9);
    console.log('drum')
    $.playSound(currentCode)
    if(className === 'white-key'){
      $selectedClass.toggleClass('whiteOnKey')
    }
    if(className === 'black-key'){
      $selectedClass.toggleClass('blackOnKey')
    }


  });

  $(document).keyup(function(e){
    var currentCode = keys[e.keyCode];
    var $selectedClass = $('#' + currentCode)
    if(!$selectedClass.attr('class')){
      return;
    }
    var className = $selectedClass.attr('class').substr(0,9)
    if(className === 'white-key'){
      $selectedClass.toggleClass('whiteOnKey')
    }
    if(className === 'black-key'){
      $selectedClass.toggleClass('blackOnKey')
    }
  })
}

var keyClicks = function(){
  $('div').click(function(e){
    console.log(this.id)
    $.playSound(this.id);
  })
};

keyBinding()
keyClicks()

});
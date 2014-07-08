$(function(){
var keyBinding = function(){
  var keys = {
    81:'c',
    87:'cS',
    69:'d',
    82:'dS',
    84:'e',
    89:'f',
    85:'fS',
    73:'g',
    79:'gS',
    80:'a',
    219:'aS',
    65:'b',
    83:'c2',
    68:'c2S',
    70:'d2',
    71:'d2S',
    72:'e2',
    74:'f2',
    75:'f2S',
    76:'g2',
    186:'g2S',
    222:'a2',
    90:'a2S',
    88:'b2'
  };

  $(document).keydown(function(e) {
    var currentCode = keys[e.keyCode];
    console.log(currentCode)
    if(currentCode === undefined){
      console.error('Not a registered key')
      return;
    }
    var $selectedClass = $('#' + currentCode);
    var className = $selectedClass.attr('class').substr(0,9)
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
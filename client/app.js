var pubnub = PUBNUB.init({
  publish_key   : 'pub-c-c428a047-ae49-4deb-b1fe-59e809d16826',
  subscribe_key : 'sub-c-d3fc022c-06ec-11e4-a71e-02ee2ddab7fe'
});

var outerWindow = this;
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

  document.addEventListener('keydown', function(e) {
    var currentCode = keys[e.keyCode];
      if(!currentCode){
        return;
      }
      else{
        pubnub.publish({
          channel : "collabraJam",
          message : currentCode
        });
      }
      var currentId = document.querySelector('#' + currentCode);
      if(currentId.parentElement.className.split(" ")[0] === "drums"){
        currentId.className += 'drum-hit';
        return;
      }
      if(currentId.className.split(" ").length === 1){
        return currentId.className === 'white-key' ?
        currentId.className += ' whiteOnKey' :
        currentId.className += ' blackOnKey';
      }
  });

  document.addEventListener('keyup', function(e){
    var currentCode = keys[e.keyCode];
    if(!currentCode){
      return;
    }
    var currentId = document.querySelector('#' + currentCode);
      if(currentId.parentElement.className.split(" ")[0] === "drums"){
        currentId.className = "";
        return;
      }
      return _.contains(currentId.className,'whiteOnKey') ?
      currentId.className = 'white-key' :
      currentId.className = 'black-key';
  });
};

var keyClicks = function(){
  _.each(document.querySelectorAll('div'), function(insturment){
    insturment.addEventListener('click', function(e){
      pubnub.publish({
        channel : "collabraJam",
        message : this.id
      });
    });
  });
};
  
var options = document.querySelectorAll('.select');
var home = document.body.querySelector('#home');
var insturments = document.body.querySelectorAll('.both');
var toggleElement = function(currentTarget, elements, visibility){
  _.each(elements,function(element){
    element.style.display = visibility;
  });
  if(currentTarget){
    home.style.display = "inline";
    _.each(document.querySelectorAll('.' + currentTarget.id),function(insturment){
      insturment.style.display = "block";
    });
  }
};
_.each(options, function(element){
  element.addEventListener('click', function(e){
    toggleElement(this, options, 'none');
  });
});

  home.addEventListener('click', function(e){
    home.style.display = 'none';
    toggleElement(null, options, 'block');
    toggleElement(null, insturments, 'none');
});

var init = function(){
  if(document.readyState !== 'complete'){
    setTimeout(init,123);
  }
  else{
    console.log('ready');
    pubnub.subscribe({
      channel : "collabraJam",
      message : function(key){
        playSound(key);
      }
    });
    keyBinding();
    keyClicks();
  }
};  
init();
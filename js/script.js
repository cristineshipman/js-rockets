var timer = null;
var changeState = function (state) {
  document.body.className = 'body-state' + state;

  if (state == 2) {
      timer = setInterval(function (){
          document.getElementById('countdown').innerHTML = 9;
    }, 1000);

  };
}

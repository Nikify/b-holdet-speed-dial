window.addEventListener('load', function () { 
    init();
});

  function init(){
    document.getElementById("bg-img").src = "wallpapers/" + getRandomInt(14) + ".jpg";
    setTimeout(function(){
      document.getElementById("bg-img").style.opacity = 0.3;
      document.getElementById("banner").style.opacity = 1;
      document.getElementById("gradient").style.opacity = 1;
      document.getElementById("icon-container").style.top = "calc(50% - (200px/2))";
      document.getElementById("icon-container").style.opacity = 1;
    }, 200);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
document.addEventListener("DOMContentLoaded", function(){
  var audio = document.getElementById("audio");

  window.addEventListener('load', function() {
    document.getElementById("playBtn").style.display = "none";
})
  document.getElementById("playBtn").addEventListener("click", function(){
    audio.play();
    console.log("playBtn");
    document.getElementById("playBtn").style.display = "none";
    document.getElementById("pauseBtn").style.display = "inline";

  }, false);
  
  document.getElementById("pauseBtn").addEventListener("click", function(){
    audio.pause();
    console.log("pauseBtn");
    document.getElementById("pauseBtn").style.display = "none";
    document.getElementById("playBtn").style.display = "inline";
  }, false);
  
  document.getElementById("volume").addEventListener("mousemove", function(){
    var volume = document.getElementById("volume").value;
    audio.volume = volume;
    console.log(volume);
  }, false);

  
}, false);


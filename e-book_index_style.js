window.addEventListener('load', function () {
    
    let counter = 0;
    setInterval(() => {
        if (counter == 3) {
            clearInterval();
            document.getElementById("loading_start").style.opacity = "0";
            document.getElementById("loading_start").style.zIndex = "-10000";
        }
        else {
            counter += 1;
        }
    }, 1000)
})

var existaudio = null;
var div_audio = document.getElementById("audio");
var div_stop = document.getElementById("stop");
var audio = document.createElement("audio");
function playAudio() {
    if(!existaudio){
        audio.src = "BG.mp3";
        audio.play();
        audio.loop = true;
        div_audio.appendChild(audio);
        existaudio = div_audio;
        div_stop.style.opacity = 1;
    } else {
        div_audio.appendChild(audio);
        div_stop.style.opacity = 1;
    }
    audio.play();
}

function stopAudio() {
  div_audio.removeChild(audio);
  div_stop.style.opacity = 0;
  existaudio = null;
}

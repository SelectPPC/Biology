// When the user clicks on div, open the popup
function popup(id) {
    var popup = document.getElementById("myPopup" + id);
    popup.classList.toggle("show");
}

// audio on mouce click
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}


function onVideoClick(theLink) {
    document.getElementById("video_pop").innerHTML = "<video autoplay controls loop id=\"the_Video\"><source src=\""+theLink+"\" type=\"video/webm\"></video>";
    document.getElementById("video_pop").style.display="block";
} 

function onPopClick() {
    document.getElementById("video_pop").style.display="none";
    document.getElementById("video_pop").innerHTML = ""; 
}
function playlabwork(){
    var audiolabwork = document.getElementById("audiolabwork");
    audiolabwork.play();
}
function pauselabwork(){
    var audiolabwork = document.getElementById("audiolabwork");
    audiolabwork.pause();
}
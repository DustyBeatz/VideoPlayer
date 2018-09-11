doucment.addEventListener("DOMContentLoaded" , function() { startPlayer(); }, false);
var player;

function startPlayer()
{
    player = document.getElementById('videoPlayer');
    player.controls = false;

}

function play_vid()
{
    player.play();
}

function pause_vid()
{
    player.pause();
}

function change_vol()
{
    player.volume=document.getElemtsById("change_vol").value;
}
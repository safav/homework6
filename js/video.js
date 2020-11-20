var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML=video.volume;
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector('#slower').addEventListener("click",function(){
	video.playbackRate = video.playbackRate - 0.1;
	console.log("Slower "+ video.playbackRate);
});
document.querySelector('#faster').addEventListener("click", function () {
	video.playbackRate = video.playbackRate + 0.1;
	console.log("Faster" + video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function () {
	if (video.currentTime + 5 > video.duration){
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 5;
	}
	console.log("Skip Ahead "+ video.currentTime); 
	video.play();
});

document.querySelector('#mute').addEventListener("click", function () {
	if (video.muted == true ){
		video.muted = false;
		document.querySelector('#mute').innerHTML='unmuted';
	}
	else{ 
		video.muted = true;
		document.querySelector('#mute').innerHTML='muted';
	}
	
});

document.querySelector('#volumeSlider').addEventListener("change", function () {
	video.volume = document.querySelector('#volumeSlider').value;
	document.querySelector('#volume').innerHTML=video.volum;
});

document.querySelector('#old').addEventListener("click", function () {
	video.classList.add("oldTime");
});


document.querySelector('#original').addEventListener("click", function () {
	video.classList.remove("oldTime");
});

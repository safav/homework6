var video;

window.addEventListener("load", function () {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
	console.log("Pause Video");
});

document.querySelector('#slower').addEventListener("click", function () {
	video.playbackRate = video.playbackRate - 0.1;
	console.log("New speed is " + video.playbackRate);
});
document.querySelector('#faster').addEventListener("click", function () {
	video.playbackRate = video.playbackRate + 0.1;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function () {
	if (video.currentTime + 5 > video.duration) {
		console.log("Going back to beginning");
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 5;
	}
	console.log(video.currentTime);
	console.log("Current location " + video.currentTime);
	video.play();
});

document.querySelector('#mute').addEventListener("click", function () {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'Unmute';
	}
	else {
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Mute';
	}

});

document.querySelector('#volumeSlider').addEventListener("change", function () {
	video.volume = document.querySelector('#volumeSlider').value / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
	console.log(video.volume);
});

document.querySelector('#old').addEventListener("click", function () {
	video.classList.add("oldTime");
});


document.querySelector('#original').addEventListener("click", function () {
	video.classList.remove("oldTime");
});

function saltarVideo(){
    document.getElementById("video").classList.add("active");
    document.getElementById("saltar_video").classList.add("active");
}

document.getElementById("video").onclick = function(){
	saltarVideo();
}
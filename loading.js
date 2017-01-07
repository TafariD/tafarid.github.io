function hideloader(){
	setTimeout(function () {
		document.getElementById("loading_box").style.display = "none";
		document.getElementById("loading").style.display = "none";
	}, 5000);
}
/*
$(window).load(function() {
   document.getElementById("loading").style.display = "none";
});*/
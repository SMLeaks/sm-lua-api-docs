window.addEventListener("beforeunload", () => { 
	sessionStorage.setItem("scroll", document.querySelector("#menu").scrollTop);
});
window.addEventListener("load", () => {
	var scroll = sessionStorage.getItem("scroll")
	if(scroll)
		document.querySelector("#menu").scrollTop = scroll;
});

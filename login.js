
var loginform = document.getElementById("login");
var regform = document.getElementById("reg");
var indicator = document.getElementById("indicator");

function register(){
	regform.style.transform ="translateX(0px)";
	loginform.style.transform ="translateX(0px)";
	indicator.style.transform ="translateX(100px)";
}

function login(){
	regform.style.transform ="translateX(300px)";
	loginform.style.transform ="translateX(300px)";
	indicator.style.transform ="translateX(0px)";
}
	
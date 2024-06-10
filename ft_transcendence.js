let	about_form_enabled = false;
let	home_form_enabled = true;
let	login_form_enabled = false;

function click()
{
	console.log("click!");
}

function closeAbout()
{
	document.getElementById("about").style.display = "none";
	document.getElementById("about-button").style.color = "";
	document.getElementById("about-button").style.backgroundColor = "";
	about_form_enabled = false;
}

function closeHome()
{
	document.getElementById("content").style.filter = "brightness(50%)";
	document.getElementById("home-button").style.color = "";
	document.getElementById("home-button").style.backgroundColor = "";
	home_form_enabled = false;
}

function closeLogin()
{
	document.getElementById("login").style.display = "none";
	document.getElementById("login-button").style.color = "";
	document.getElementById("login-button").style.backgroundColor = "";
	login_form_enabled = false;
}

function openAbout()
{
	about_form_enabled = true;
	closeLogin();
	closeHome();
	document.getElementById("about-button").style.color = "black";
	document.getElementById("about-button").style.backgroundColor = "white";
	document.getElementById("about").style.display = "block";
}

function openHome()
{
	home_form_enabled = true;
	closeAbout();
	closeLogin();
	document.getElementById("content").style.filter = "";
	document.getElementById("home-button").style.color = "black";
	document.getElementById("home-button").style.backgroundColor = "white";
}

function openLogin()
{
	login_form_enabled = true;
	closeAbout();
	closeHome();
	document.getElementById("login-button").style.color = "black";
	document.getElementById("login-button").style.backgroundColor = "white";
	document.getElementById("login").style.display = "block";
}

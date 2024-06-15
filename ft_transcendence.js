let	about_form_enabled = false;
let	home_form_enabled = true;
let	login_form_enabled = false;
let	signup_form_enabled = false;

window.onload = function start()
{
	openHome();
}

function click()
{
	console.log("click!");
}

function closeAbout()
{
	document.getElementById("about-button").style.backgroundColor = "";
	document.getElementById("about-button").style.setProperty("--bs-border-color", "");
	document.getElementById("about").style.boxShadow = "";
	document.getElementById("about").style.transform = "translate(100vw, -50%)";
	about_form_enabled = false;
}

function closeHome()
{
	document.getElementById("home-button").style.backgroundColor = "";
	document.getElementById("home-button").style.setProperty("--bs-border-color", "");
	document.getElementById("toolbar").style.pointerEvents = "none";
	document.getElementById("content-body").style.pointerEvents = "none";
	home_form_enabled = false;
}

function closeLogin()
{
	document.getElementById("login-button").style.backgroundColor = "";
	document.getElementById("login-button").style.setProperty("--bs-border-color", "");
	document.getElementById("login").style.boxShadow = "";
	document.getElementById("login").style.transform = "translate(100vw, -50%)";
	login_form_enabled = false;
}

function closeSignup()
{
	document.getElementById("signup").style.transform = "translate(100vw, -50%)";
	signup_form_enabled = false;
}

function openAbout()
{
	about_form_enabled = true;
	closeLogin();
	closeHome();
	closeSignup();
	document.getElementById("about-button").style.backgroundColor = "#c5c9cb";
	document.getElementById("about-button").style.setProperty("--bs-border-color", "#bbbcbd");
	document.getElementById("about").style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 0px 0px 1000vmax";
	document.getElementById("about").style.transition = "transform 0.25s ease-out, box-shadow 0.25s ease-out";
	document.getElementById("about").style.transform = "translate(-50%, -50%)";
}

function openHome()
{
	home_form_enabled = true;
	closeAbout();
	closeLogin();
	closeSignup();
	document.getElementById("home-button").style.backgroundColor = "#c5c9cb";
	document.getElementById("home-button").style.setProperty("--bs-border-color", "#bbbcbd");
	document.getElementById("content-body").style.pointerEvents = "";
	document.getElementById("toolbar").style.pointerEvents = "";
}

function openLogin()
{
	login_form_enabled = true;
	closeAbout();
	closeHome();
	closeSignup();
	document.getElementById("login-button").style.backgroundColor = "#c5c9cb";
	document.getElementById("login-button").style.setProperty("--bs-border-color", "#bbbcbd");
	document.getElementById("login").style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 0px 0px 1000vmax";
	document.getElementById("login").style.transition = "transform 0.25s ease-out, box-shadow 0.25s ease-out";
	document.getElementById("login").style.transform = "translate(-50%, -50%)";
}

function openSignup()
{
	signup_form_enabled = true;
	closeAbout();
	closeHome();
	closeLogin();
	document.getElementById("login-button").style.backgroundColor = "#c5c9cb";
	document.getElementById("login-button").style.setProperty("--bs-border-color", "#bbbcbd");
	document.getElementById("login").style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 0px 0px 1000vmax";
	document.getElementById("signup").style.transition = "transform 0.25s ease-out";
	document.getElementById("signup").style.transform = "translate(-50%, -50%)";
}

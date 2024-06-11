let	about_form_enabled = false;
let	home_form_enabled = true;
let	login_form_enabled = false;
let	signup_form_enabled = false;

function click()
{
	console.log("click!");
}

function closeAbout()
{
	document.getElementById("about").style.transform = "translate(100vw, -50%)";
	document.getElementById("about-button").style.color = "";
	document.getElementById("about-button").style.backgroundColor = "";
	about_form_enabled = false;
}

function closeHome()
{
	document.getElementById("content").style.filter = "brightness(50%)";
	document.getElementById("content-body").style.pointerEvents = "none";
	document.getElementById("home-button").style.color = "";
	document.getElementById("home-button").style.backgroundColor = "";
	home_form_enabled = false;
}

function closeLogin()
{
	document.getElementById("login").style.transform = "translate(100vw, -50%)";
	document.getElementById("login-button").style.color = "";
	document.getElementById("login-button").style.backgroundColor = "";
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
	document.getElementById("about-button").style.color = "black";
	document.getElementById("about-button").style.backgroundColor = "white";
	document.getElementById("about").style.transition = "transform 0.25s ease-out";
	document.getElementById("about").style.transform = "translate(-50%, -50%)";
}

function openHome()
{
	home_form_enabled = true;
	closeAbout();
	closeLogin();
	closeSignup();
	document.getElementById("content").style.filter = "";
	document.getElementById("content-body").style.pointerEvents = "";
	document.getElementById("home-button").style.color = "black";
	document.getElementById("home-button").style.backgroundColor = "white";
}

function openLogin()
{
	login_form_enabled = true;
	closeAbout();
	closeHome();
	closeSignup();
	document.getElementById("login-button").style.color = "black";
	document.getElementById("login-button").style.backgroundColor = "white";
	document.getElementById("login").style.transition = "transform 0.25s ease-out";
	document.getElementById("login").style.transform = "translate(-50%, -50%)";
}

function openSignup()
{
	signup_form_enabled = true;
	closeAbout();
	closeHome();
	closeLogin();
	document.getElementById("login-button").style.color = "black";
	document.getElementById("login-button").style.backgroundColor = "white";
	document.getElementById("signup").style.transition = "transform 0.25s ease-out";
	document.getElementById("signup").style.transform = "translate(-50%, -50%)";
}

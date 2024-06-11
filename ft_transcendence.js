let	about_form_enabled = false;
let	home_form_enabled = true;
let	login_form_enabled = false;
let	signup_form_enabled = false;
let	active_tab;

function click()
{
	console.log("click!");
}

function closeAbout()
{
	document.getElementById("about-button").style.backgroundColor = "";
	document.getElementById("about-button").style.borderColor = "";
	document.getElementById("about").style.transform = "translate(100vw, -50%)";
	about_form_enabled = false;
}

function closeHome()
{
	document.getElementById("home-button").style.backgroundColor = "";
	document.getElementById("home-button").style.borderColor = "";
	document.getElementById("content").style.filter = "brightness(50%)";
	document.getElementById("toolbar").style.filter = "brightness(50%)";
	document.getElementById("toolbar").style.pointerEvents = "none";
	document.getElementById("content-body").style.pointerEvents = "none";
	home_form_enabled = false;
}

function closeLogin()
{
	document.getElementById("login-button").style.backgroundColor = "";
	document.getElementById("login-button").style.borderColor = "";
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
	active_tab = 1;
	closeLogin();
	closeHome();
	closeSignup();
	document.getElementById("about-button").style.backgroundColor = "#c5c9cb";
	document.getElementById("about-button").style.borderColor = "#bbbcbd";
	document.getElementById("about").style.transition = "transform 0.25s ease-out";
	document.getElementById("about").style.transform = "translate(-50%, -50%)";
}

function openHome()
{
	home_form_enabled = true;
	closeAbout();
	closeLogin();
	closeSignup();
	document.getElementById("home-button").style.backgroundColor = "#c5c9cb";
	document.getElementById("home-button").style.borderColor = "#bbbcbd";
	document.getElementById("content").style.filter = "";
	document.getElementById("content-body").style.pointerEvents = "";
	document.getElementById("toolbar").style.filter = "";
	document.getElementById("toolbar").style.pointerEvents = "";
}

function openLogin()
{
	login_form_enabled = true;
	closeAbout();
	closeHome();
	closeSignup();
	document.getElementById("login-button").style.backgroundColor = "#c5c9cb";
	document.getElementById("login-button").style.borderColor = "#bbbcbd";
	document.getElementById("login").style.transition = "transform 0.25s ease-out";
	document.getElementById("login").style.transform = "translate(-50%, -50%)";
}

function openSignup()
{
	signup_form_enabled = true;
	closeAbout();
	closeHome();
	closeLogin();
	document.getElementById("login-button").style.backgroundColor = "#c5c9cb";
	document.getElementById("login-button").style.borderColor = "#bbbcbd";
	document.getElementById("signup").style.transition = "transform 0.25s ease-out";
	document.getElementById("signup").style.transform = "translate(-50%, -50%)";
}

function switchTab(nb)
{
	document.getElementById("tab" + active_tab).classList.remove("active");
	document.getElementById("tab-body" + active_tab).classList.remove("active");
	active_tab = nb;
	document.getElementById("tab" + active_tab).classList.add("active");
	document.getElementById("tab-body" + active_tab).classList.add("active");
}

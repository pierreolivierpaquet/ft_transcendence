let	about_form_enabled = false;
let	login_form_enabled = false;

function closeAbout()
{
	document.getElementById("about").style.display = "none";
	document.getElementById("about-button").style.color = "";
	document.getElementById("about-button").style.backgroundColor = "";
	about_form_enabled = false;
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
	about_form_enabled = !about_form_enabled;
	if (about_form_enabled == true)
	{
		closeLogin();
		document.getElementById("about-button").style.color = "black";
		document.getElementById("about-button").style.backgroundColor = "white";
		document.getElementById("about").style.display = "block";
	}
	else
		closeAbout();
}

function openLogin()
{
	login_form_enabled = !login_form_enabled;
	if (login_form_enabled == true)
	{
		closeAbout();
		document.getElementById("login-button").style.color = "black";
		document.getElementById("login-button").style.backgroundColor = "white";
		document.getElementById("login").style.display = "block";
	}
	else
		closeLogin();
}

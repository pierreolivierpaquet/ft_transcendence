let avocado_list = document.getElementById("avocado-list");
let banner = document.querySelector("#avocado-banner");
let avocado_name = document.getElementsByClassName("avocado-name");
const addForm = document.forms["add-form"];
const addBtn = document.getElementById("add-btn");
const CSRF_TOKEN = document.querySelector('[name=csrfmiddlewaretoken]').value;

// General functions

const render_avocados = (avocado_list, data) => {
	const p_data = JSON.parse(data);
	p_data.forEach((avocado) => {
		avocado_list.children[1].innerHTML +=`
			<li>
				<span class="avocado-name">${avocado.fields.name}</span>
				<span class="delete">delete</span>
			</li>
		`;
	});
};

const add_new_avocado = (avocado_list, data) => {
	const p_data = JSON.parse(data);
	const new_name = p_data[0].fields.name;
	avocado_list.children[1].innerHTML +=`
		<li>
			<span class="avocado-name">${new_name}</span>
			<span class="delete">delete</span>
		</li>
	`;
};

// fetch functions

const add_user = async (addForm) => {
	const response = await fetch('/contact/', {
		headers: {
			"Content-Type": "application/json",
			"X-CSRFToken": CSRF_TOKEN, 
		},
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify({'name': addForm.querySelector('input[type="text"]').value }),
	});
	if (response.status !== 200) {
		throw new Error('nope, u suck to post');
	}
	const data = await response.json();
	return data;
};

const get_users = async () => {
	const response = await fetch('/contact/', {
		headers: {
			"Content-Type": "application/json",
			"X-CSRFToken": CSRF_TOKEN, 
		},
		method: 'GETALL',
	});
	if (response.status !== 200) {
		throw new Error('nope, u suck to get');
	}
	const data = await response.json();
	return data;
};

const remove_user = async (li) => {
	const response = await fetch('/contact/', {
		headers: {
			"Content-Type": "application/json",
			"X-CSRFToken": CSRF_TOKEN, 
		},
		method: 'DELETE',
		body: JSON.stringify({'name': li.children[0].textContent }),
	});
	if (response.status !== 200) {
		throw new Error('nope, u suck to remove');
	}
};

// On load

get_users()
	.then(data => render_avocados(avocado_list, data))
	.catch (err => console.log('error:', err.message));

// Events listener

addForm.addEventListener("submit", function(e) {
	e.preventDefault();
	const new_avocado = addForm.querySelector('input[type="text"]').value;
	if (new_avocado == "") {
		return ;
	}
	add_user(addForm)
		.then(data => add_new_avocado(avocado_list, data))
		.catch (err => console.log('error:', err.message));
	addForm.reset();
});

addBtn.addEventListener("click", function(e) {
	e.preventDefault();
	const new_avocado = addForm.querySelector('input[type="text"]').value;
	if (new_avocado == "") {
		return ;
	}
	add_user(addForm)
		.then(data => add_new_avocado(avocado_list, data))
		.catch (err => console.log('error:', err.message));
	addForm.reset();
});

avocado_list.addEventListener("click", function(e) {
	e.preventDefault();
	let no_error = 1;
	const li = e.target.parentElement;

	remove_user(li)
		.catch (err => {
			no_error = 0;
			console.log('error:', err.message)
		});

	if (e.target.className == "delete" && no_error === 1) {
		const li = e.target.parentElement;
		li.parentNode.removeChild(li);
	};
});

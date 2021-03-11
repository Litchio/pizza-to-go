"using strict";

window.onload = function () {

	document.querySelector(".header").style.display = "block";
	document.querySelector(".welcome").style.display = "none";
	warenkorb();
	petTemplate();
	summe();


	var input = document.querySelector("#pwd");
	input.addEventListener("keyup",
		function () {
			var passwd = input.value;
			checkPassword(passwd);
		},
		false);

}


function showRegistration() {
	document.querySelector("#registration").style.display = "block";
	document.querySelector("#anmeldung").style.display = "none";
	document.querySelector("#app").style.display = "none";
	document.querySelector("#showinfo").style.display = "none";
	document.querySelector(".aside_r").style.display = "none";
	document.querySelector("#bestellDetails").style.display = "none";
	document.querySelector("#payment").style.display = "none";
	document.querySelector("#orderOk").style.display = "none";



	// document.getElementById("registration").style.display = "block";
}

function hideAnmeldung() {
	document.querySelector("#anmeldung").style.display = "none";
	document.querySelector("#app").style.display = "block";
	// document.getElementById("registration").style.display = "none";
	document.querySelector(".aside_r").style.display = "block";
}

function showAnmeldung() {
	document.querySelector("#orderOk").style.display = "none";
	document.querySelector("#anmeldung").style.display = "block";
	document.querySelector("#registration").style.display = "none";
	document.querySelector("#app").style.display = "none";
	document.querySelector("#bestellDetails").style.display = "none";
	document.querySelector("#showinfo").style.display = "none";
	document.querySelector(".aside_r").style.display = "none";
	document.querySelector("#payment").style.display = "none";

	// document.getElementById("registration").style.display = "block";
}

function hideRegistration() {
	document.querySelector("#registration").style.display = "none";
	document.querySelector("#app").style.display = "block";
	document.querySelector(".aside_r").style.display = "block";
	// document.getElementById("registration").style.display = "none";
}


// Vorname prüfen
var nameOk = false;
var straßeOk = false;
var emailOk = false;
var straßeNrOk = false;
var plzOk = false;
var userOk = false;
var passwdOk = false;





function checkIfAllOk() {
	let allOk = nameOk && emailOk && straßeOk && straßeNrOk && plzOk && userOk && passwdOk;
	if (allOk) {
		document.querySelector("#btn").disabled = false;
	}
	else {
		document.querySelector("#btn").disabled = true;
	}
}


// Password 



function checkPassword(passwd) {

	var len = passwd.length;
	var regExHasNumber = /\d/;
	var regExHasUpperCase = /[A-Z]/;
	var regExHasLowerCase = /[a-z]/;
	var regExHasSpecialSign = /[!?§$%&#*+-.]/;
	var hasNumber = regExHasNumber.test(passwd);
	var hasUpperCase = regExHasUpperCase.test(passwd);
	var hasLowerCase = regExHasLowerCase.test(passwd);
	var hasSpecialSign = regExHasSpecialSign.test(passwd);
	var size = 0;
	if (len >= 5) {
		passwdOk = true;
		size += 5;
		if (hasNumber) size += 5;
		if (hasUpperCase) size += 10;
		if (hasLowerCase) size += 5;
		if (hasSpecialSign) size += 10;

		if (len >= 7 && hasNumber && hasUpperCase && hasLowerCase && hasSpecialSign) size += 20;
	}
	else passwdOk = false;
	var c = document.querySelector("#pwdCanvas");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0, 0, 155, 20);
	var grd = ctx.createLinearGradient(0, 0, size * 10, 0);
	grd.addColorStop(0, "green");
	grd.addColorStop(1, "red");
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, 155, 20);

	checkIfAllOk();

}	// ende Password


// Straße

function checkStraßeOnFocus() {
	document.querySelector("#errorStraße").innerHTML = "";
}

function checkStraßeOnBlur() {
	if (document.querySelector("#street").value.length == 0)
		return;

	if (straßeOk == false) {
		document.querySelector("#errorStraße").innerHTML = "Format des Straßes ist falsch";
		// document.querySelector("#vrn").style.border = " solid 3px red";
	}
}

function checkStraße() {
	let nameInput = document.querySelector("#street").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[a-zäöüßA-ZÄÖÜ]{4,}$/;
	if (nameRegEx.test(nameInput) == false) {
		straßeOk = false;
	}
	else {
		straßeOk = true;
	}
	checkIfAllOk();
}

// ende Straße

// StraßeNr

function checkStraßeNrOnFocus() {
	document.querySelector("#errorStraßeNr").innerHTML = "";
}

function checkStraßeNrOnBlur() {
	if (document.querySelector("#streetNr").value.length == 0)
		return;

	if (straßeNrOk == false) {
		document.querySelector("#errorStraßeNr").innerHTML = "Format des StraßeNr ist falsch";
		// document.querySelector("#vrn").style.border = " solid 3px red";
	}
}

function checkStraßeNr() {
	let nameInput = document.querySelector("#streetNr").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[1-9]{1,}$/;
	if (nameRegEx.test(nameInput) == false) {
		straßeNrOk = false;
	}
	else {
		straßeNrOk = true;
	}
	checkIfAllOk();
}

// ende StraßeNr

function checkVornameOnFocus() {
	document.querySelector("#errorVorname").innerHTML = "";
}

function checkVornameOnBlur() {
	if (document.querySelector("#vrn").value.length == 0)
		return;

	if (nameOk == false) {
		document.querySelector("#errorVorname").innerHTML = "Format des Vornamens ist falsch";
		// document.querySelector("#vrn").style.border = " solid 3px red";
	}
}

function checkVorname() {
	let nameInput = document.querySelector("#vrn").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[A-ZÄÖÜ][a-zäöüßA-ZÄÖÜ]*[a-zäöüß]$/;
	if (nameRegEx.test(nameInput) == false) {
		nameOk = false;
	}
	else {
		nameOk = true;
	}
	checkIfAllOk();
}

// nachname


function checkNachnameOnFocus() {
	document.querySelector("#errorNachname").innerHTML = "";
}

function checkNachnameOnBlur() {
	if (document.querySelector("#nhn").value.length == 0)
		return;

	if (nameOk == false) {
		document.querySelector("#errorNachname").innerHTML = "Format des Nachnamens ist falsch";
	}
}

function checkNachname() {
	let nameInput = document.querySelector("#nhn").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[A-ZÄÖÜ][a-zäöüßA-ZÄÖÜ]*[a-zäöüß]$/;
	if (nameRegEx.test(nameInput) == false) {
		nameOk = false;
	}
	else {
		nameOk = true;
	}
	checkIfAllOk();
}


// Email

function checkEmailOnFocus() {
	document.querySelector("#errorEmail").innerHTML = "";
}

function checkEmailOnBlur() {
	if (document.querySelector("#email").value.length == 0)
		return;

	if (emailOk == false) {
		document.querySelector("#errorEmail").innerHTML = "Format der E-Mail-Adresse ist falsch";
	}
}

function checkEmail() {
	emailOk = false;

	let emailInput = document.querySelector("#email").value;
	if (emailInput.length === 0)
		return;

	let emailRegEx = /^[a-zäöüßA-ZÄÖÜ][a-zäöüßA-ZÄÖÜ0-1]{3,}@[a-zäöüßA-ZÄÖÜ]+\.[a-zäöüßA-ZÄÖÜ]{2,}$/;

	if (emailRegEx.test(emailInput) == false) {
		emailOk = false;
	}
	else {
		emailOk = true;
	}

	checkIfAllOk();
}

// PZL


function getPlzFromEscher() {
	plzOk = false;

	let value = document.querySelector('#plz').value;
	if (value.length != 5) {

		let divElement = document.querySelector("#ort");
		while (divElement.firstChild) {
			divElement.removeChild(divElement.firstChild);
		}

	}
	if (value.length == 5) {



		let url = 'http://escher.informatik.hs-kl.de/PlzService/ort?plz=' + value;

		fetch(url)
			.then((response) => response.text())
			.then((data) => {


				data.trim().slice(0, -1).split(";").forEach(ort => {
					console.log(ort);
					let liElement = document.createElement("option");
					liElement.innerHTML = ort.slice(6);
					document.querySelector("#ort").append(liElement);
				});

				if (document.querySelector("#ort").value.length != 0) plzOk = true;
			})
			.catch((error) => console.error(error));



	}

	// if (document.querySelector('#plz').value.length == 5 &&  plzOk = true;

	checkIfAllOk();

}


function checkPlzOnFocus() {
	document.querySelector("#errorPlz").innerHTML = "";
}

function checkPlzOnBlur() {
	if (document.querySelector("#plz").value.length == 0)
		return;

	if (document.querySelector("#plz").value.length != 0 && document.querySelector("#ort").value.length == 0) {
		document.querySelector("#errorPlz").innerHTML = "Format der PLZ ist falsch";
		//  plzOk = false;		
	}

	// else plzOk = true;
}
// BenutzerName

function checkUserOnFocus() {
	document.querySelector("#errorUser").innerHTML = "";
}

function checkUserOnBlur() {
	if (document.querySelector("#user").value.length == 0)
		return;

	if (userOk == false) {
		document.querySelector("#errorUser").innerHTML = "Format des Benutzernames ist falsch";
		// document.querySelector("#vrn").style.border = " solid 3px red";
	}
}

function checkUser() {
	let nameInput = document.querySelector("#user").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[a-zäöüßA-ZÄÖÜ][a-zäöüßA-ZÄÖÜ1-9]{4,}$/;
	if (nameRegEx.test(nameInput) == false) {
		userOk = false;
	}
	else {
		userOk = true;
	}
	checkIfAllOk();
}

// ende BenutzerName

var pizzaId = "";
function petTemplate() {
	fetch('http://localhost:9080/pizza-to-go-server/app/pizzas/all', {
		method: 'get',
		headers: {
			'Content-type': 'application/json'
		}
	})

		.then(response => response.json())
		.then(data => {
			var pizzaList = "";
			data.forEach(com => {

				pizzaId = com.id;
				pizzaList += '<div class="animal"><img class="pet-photo" src="'
					+ com.imagePath + '"> <h2 class="pet-name">' + com.name + ' </h2>  <p id="description2"> '
					+ com.description + '</p>  <p><span id="price"><strong >Preis:  </strong><i id= "preis_default' + com.id + '">'
					+ com.prices.classic + '</i> €</span><span id="preis3"><a id="mehrInfo" onclick="showInfos('
					+ com.id + ')">Mehr Infos <i class="fas fa-info-circle"></i></a><button type="button" class="hinzufuegen" id="hinzufuegen" onclick="hinzufuegen1('
					+ com.id + ')" ><i class="fas fa-cart-plus"></i></button>  </span> </p></div >';
			});
			document.querySelector("#app").innerHTML = pizzaList;

		})
		.catch(error => console.error('Error:', error));

}



//

var array = [];
var w = 0;

function hinzufuegen(id) {

	var a = 1;
	fetch('http://localhost:9080/pizza-to-go-server/app/pizzas/all/' + id, {
		method: 'get',
		headers: {
			'Content-type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(data => {
			var size = document.getElementById("size").value;
			if (orderExist(id, size, array)) {

				var idx = indexOfOrder(id, size, array);
				array[idx].Pizza_anzahl += anzahlPizza[index(anzahlPizza, "i", id)].a;
				array[idx].Pizza_summe = array[idx].Pizza_preis * array[idx].Pizza_anzahl;

				// w++;
				warenkorb();
				summe();
			}

			else {

				beilage = [];

				var x = document.getElementById('preis_size').innerHTML;
				var size = document.getElementById("size").value;
				suppl.forEach(element => {

					beilage.push({
						pizza_id: element.pizza_id,
						supplement_id: element.supplement_id,
						imagePath: element.imagePath,
						name: element.name,
						price: element.price

					});
				});

				array.push({
					pizza_id: data.id,
					pizza_name: data.name,
					pizza_description : data.description,
					pizza_img : data.imagePath,
					pizza_sup: beilage,
					Pizza_preis: x,
					Pizza_summe: x * anzahlPizza[index(anzahlPizza, "i", id)].a,
					Pizza_anzahl: anzahlPizza[index(anzahlPizza, "i", id)].a,
					pizza_size: size,
				});

				w++;
				warenkorb();
				summe();
			}
			showWarenkorb(array);

		})
		.catch(error => console.error('Error:', error));

}


//
function hinzufuegen1(id) {

	var a = 1;
	fetch('http://localhost:9080/pizza-to-go-server/app/pizzas/all/' + id, {
		method: 'get',
		headers: {
			'Content-type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(data => {
			var size = "classic";
			if (orderExist1(id, size, array)) {

				var idx = indexOfOrder1(id, size, array);
				array[idx].Pizza_anzahl++;
				array[idx].Pizza_summe = array[idx].Pizza_preis * array[idx].Pizza_anzahl;



				// w++;
				warenkorb();
				summe();

			}



			else {

				beilage = [];

				var x = document.getElementById('preis_default' + id).innerHTML;

				array.push({
					pizza_id: data.id,
					pizza_name: data.name,
					pizza_sup: beilage,
					pizza_description : data.description,
					pizza_img : data.imagePath,
					Pizza_preis: x,
					Pizza_summe: x * 1,
					Pizza_anzahl: 1,
					pizza_size: "classic",


				});

				w++;
				warenkorb();
				summe();

			}

			showWarenkorb(array);

		}).catch(error => console.error('Error:', error));

}

//


function löschen(e) {

	w--;
	warenkorb();

	if (e > -1) {
		array.splice(e, 1);
	}

	summe();

	console.log(array);

	bestelldetail();
	showWarenkorb(array);

}

var suppl = [];

function showAktuelleZutaten(id) {

	var sup = "";

	suppl.forEach(e => {

		if (id == e.pizza_id) {


			sup += '<table class="suppl"><tr><td><i class="fas fa-minus-circle" onclick="suppl_löschen(' + e.supplement_id + ',' + e.pizza_id + ')"></i></td></tr><tr><td><img  class="photo_zutaten" src="'
				+ e.imagePath + '"></td><tr><td> <strong >'
				+ e.name + '</strong></td> </tr></tr><tr><td>' + e.price + ' €</td></tr></table>';

		}
	});

	document.querySelector("#aktuelleZutaten").innerHTML = sup;

}


function suppl_löschen(s_id, p_id) {

	suppl.forEach(com => {

		if (p_id == com.pizza_id && s_id == com.supplement_id) {

			const i = suppl.indexOf(com);
			document.getElementById("preis_size").innerText = (parseFloat(document.getElementById("preis_size").innerText) - com.price).toFixed(2);

			if (i > -1) {
				suppl.splice(i, 1);
			}

		}

	});


	showAktuelleZutaten(p_id);


}
function suppl_hinzufügen(s_id, p_id) {

	var sum = 0;
	suppl.forEach(e => {

		if (e.pizza_id == p_id) {
			sum++;

		}
	});

	if (sum == 3) {
		window.alert("Es sind nur maximal 3 auswählbare Zutaten für dieses Produkt möglich.");
		console.log(sum);
	}

	else {

		fetch('http://localhost:9080/pizza-to-go-server/app/supp/' + s_id, {
			method: 'get',
			headers: {
				'Content-type': 'application/json'
			}
		})

			.then(response => response.json())
			.then(data => {

				suppl.push({
					pizza_id: p_id,
					supplement_id: s_id,
					imagePath: data.imagePath,
					name: data.name,
					price: data.price

				});
				document.getElementById("preis_size").innerText = (parseFloat(document.getElementById("preis_size").innerText) + data.price).toFixed(2);
				showAktuelleZutaten(p_id);

			})

			.catch(error => console.error('Error:', error));

	}


}
var anzahlPizza = [];
function showInfos(id) {

	anzahlPizza.push({
		i: id,
		a: 1,
	});
	document.querySelector("#app").style.display = "none";
	document.querySelector("#bestellDetails").style.display = "none";
	document.querySelector("#showinfo").style.display = "block";
	document.querySelector("#orderOk").style.display = "none";
	// document.querySelector("#supplement").style.display = "block";
	var supplementTable = "";


	const fetchSupplemet = fetch('http://localhost:9080/pizza-to-go-server/app/supp');
	const fetchPizzas = fetch('http://localhost:9080/pizza-to-go-server/app/pizzas/all/' + id);

	Promise.all([fetchPizzas, fetchSupplemet]).then(values => {
		return Promise.all(values.map(r => r.json()));

	}).then(([pizzas, supplement]) => {


		supplement.forEach(e => {
			if(e.id<=10)
			{supplementTable += '<table class="suppl" onclick="suppl_hinzufügen(' + e.id + ',' + id + ')" ><tr><td style="height:50px;"><img  class="photo_zutaten" src="'
				+ e.imagePath + '"></td><tr><td> <strong >'
				+ e.name + '</strong></td> </tr></tr><tr><td>' + e.price + ' €</td></tr></table>';}
		});


		document.querySelector("#showinfo").innerHTML = '<div class="mehrinfos"	style="margin:0px 0 15px 15px"> <h1 style="margin:15px">' + pizzas.name + '</h1>'
			+ '<hr style="height:1px;border-width:0;color:gray;background-color:gray; margin-left: 15px; margin-right: 15px; margin-bottom: 30px;"></hr>'
			+ '<table  style="margin:15px"><tr><td rowspan="5" id="td_img">'
			+ '<img class="photo" src="'
			+ pizzas.imagePath + '"></td><tr><td style="vertical-align: top;text-align: left; "><h3>BESCHREIBUNG</h3><p class="description"> '
			+ pizzas.description + '</p></td> </tr></tr>'
			+ '<tr><td style="vertical-align: top;text-align: left; padding-left:0px"><strong >AKTUELLE GRÖSSE  </strong><br> <select id="size" onchange="myFunction(' + id + ')">'
			+ '<option value="classic">Classic(25cm)</option>'
			+ '<option value="medium">Medium(28cm)</option>'
			+ '<option value="large">Large(32cm)</option>'
			+ '</select> </td></tr>'

			+ '<tr><td style="vertical-align: top;text-align: left; padding-left:0px"><br><strong>SUMME: </strong> <i id="preis_size">' + (pizzas.prices.classic + summe_belege(pizzas.id)) + '</i> €</td></tr>'

			+ '<tr><td style="vertical-align: top;text-align: left; padding-left:0px"><br><strong >ANZAHL</strong> '
			+ '<i class="fas fa-minus" onclick="minusPizza(' + pizzas.id + ')"></i> '
			+ '<input type="text" id="anzahl_input_info' + pizzas.id + '" style="width: 25px; height: 20px; text-align: center;" value =" ' + anzahlPizza[index(anzahlPizza, "i", id)].a + '"disabled /> '
			+ '<i class="fas fa-plus" onclick="plusPizza(' + pizzas.id + ')"></i>'

			+ ' </td></tr></table>'
			+ '<p>AKTUELLE ZUTATEN (Klicke <i class="fas fa-minus-circle"></i> zum entfernen)</p>'
			+ '<div id="aktuelleZutaten"></div>'
			+ '<p>ZUTATEN HINZUFÜGEN (Klicke zum hinzufügen)</p>'


			+ supplementTable

			+ ' <span id="info_zurück" style= " : 100"><a id="hideinfo" onclick="hideInfos()"><i class="fas fa-hand-point-left"></i> Zurück</a><button type="button" class="hinzufuegen1" id="hinzufuegen" onclick="hinzufuegen('
			+ pizzas.id + ')" ><i class="fas fa-cart-plus"></i></button>  </span>'

			+ '</div >';



	}).catch(error => console.error('Error:', error));

	showAktuelleZutaten(id);
}


var sup = "";
function showWarenkorb(array) {
	var warenkorb = "";

	array.forEach(com => {
		sup = "";

		com.pizza_sup.forEach(e => {

			sup += '<li>' + e.name + '</li>';

		});

		var e = indexOfOrderBySupplement(com.pizza_id, com.pizza_size, com.pizza_sup);
		warenkorb += '<div class="showWarenkorb"> <h4 class="name" style="margin :10px;">'
			+ com.pizza_name + ' (' + com.pizza_size + ') </h4>'
			+ '<ul>' + sup + '</ul>'
			+ '<h4 class="anzahl">'

			+ '<button type="button" class="minus"onclick="minus(' + e + ')"><i class="fas fa-minus">'
			+ '</i></button> <input type="text" id="anzahl_input' + e + '" style="width: 30px; height: 30px; text-align: center;" value="' + com.Pizza_anzahl + '" disabled /> '
			+ '<button type="button" class="plus" onclick="plus(' + e + ')"><i class="fas fa-plus"></i></button><span id="preis">Preis '
			+ '</span></h4> <span id="preis3"><span id="preis2">' + (com.Pizza_summe).toFixed(2)
			+ ' €</span> <button type="button" class="löschen" id="löschen" onclick="löschen('
			+ e + ')"><i class="far fa-trash-alt"></i></button></span></div >';
	});

	// sup = "";
	document.querySelector("#warenkorb").innerHTML = warenkorb;
}



function hideInfos() {

	suppl = [];
	document.querySelector("#showinfo").style.display = "none";
	document.querySelector("#app").style.display = "block";


	// petTemplate(pizza);
}

function warenkorb() {
	document.querySelector(".active").innerHTML = '<i class="fas fa-cart-plus"></i><sup id="sup">' + w + '</sup>';
	document.querySelector(".active1").innerHTML = '<i class="fas fa-cart-plus"></i><sup id="sup">' + w + '</sup>';

}

function summe() {

	var s = 0;
	if (array.length == 0) s = 0;
	else {
		array.forEach(element => {

			s += (element.Pizza_summe);
		});

	}

	document.querySelector("#summe_preis").innerHTML = (s).toFixed(2) + ' €';
	document.querySelector("#summe_preis1").innerHTML = '(' + array.length + ' Artikel) ' + (s).toFixed(2) + ' €';
}

function plus(e) {




	array[e].Pizza_anzahl++;
	array[e].Pizza_summe = array[e].Pizza_preis * array[e].Pizza_anzahl;


	document.querySelector("#anzahl_input" + e).value = array[e].Pizza_anzahl;
	summe();
	// w++;
	warenkorb();
	showWarenkorb(array);

}
function minus(e) {



	if (array[e].Pizza_anzahl != 1) {
		array[e].Pizza_anzahl--;
		array[e].Pizza_summe = array[e].Pizza_preis * array[e].Pizza_anzahl;



		document.querySelector("#anzahl_input" + e).value = array[e].Pizza_anzahl;
		// document.querySelector("#anzahl_input_info" + id).value = e.Pizza_anzahl;

		summe();
		// if(w!=0) w--;
		warenkorb();
		showWarenkorb(array);


	}
	else { löschen(e); }

}

function index(arr, key, val) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i][key] === val) return i;
	}
}

function myFunction(id) {

	var x = document.getElementById("size").value;

	fetch('http://localhost:9080/pizza-to-go-server/app/pizzas/all/' + id, {
		method: 'get',
		headers: {
			'Content-type': 'application/json'
		}
	})

		.then(response => response.json())
		.then(data => {

			switch (x) {
				case "classic": document.querySelector("#preis_size").innerHTML = data.prices.classic + summe_belege(id);

					break;
				case "medium": document.querySelector("#preis_size").innerHTML = data.prices.medium + summe_belege(id);

					break;

				default: document.querySelector("#preis_size").innerHTML = data.prices.large + summe_belege(id);
					break;
			}

		})

		.catch(error => console.error('Error:', error));


}

function summe_belege(id) {
	var s = 0;
	suppl.forEach(element => {

		if (id == element.pizza_id) {

			s += element.price;

		}
	});
	return s;
}

function plusPizza(id) {

	document.querySelector("#anzahl_input_info" + id).value = ++anzahlPizza[index(anzahlPizza, "i", id)].a;

}

function minusPizza(id) {

	if (anzahlPizza[index(anzahlPizza, "i", id)].a != 1)
		document.querySelector("#anzahl_input_info" + id).value = --anzahlPizza[index(anzahlPizza, "i", id)].a;

}

function supplementById(id) {

	a = [];
	suppl.forEach(element => {

		if (element.pizza_id == id) {
			a.push(element);
		}
	});

	return a;

}

function orderExist(id, size, a) {

	var b = 0;
	a.forEach(element => {
		if (element.pizza_id == id) {
			if (element.pizza_size == size) {
				if (JSON.stringify(supplementById(id)) === JSON.stringify(element.pizza_sup)) {
					b++;
				}
			}
		}

	});

	if (b != 0) return true;
	else return false;

}

function orderExist1(id, size, a) {

	var b = 0;
	a.forEach(element => {
		if (element.pizza_id == id) {
			if (element.pizza_size == size) {
				if (element.pizza_sup.length == 0) {

					b++;
				}
			}
		}

	});

	if (b != 0) return true;
	else return false;

}


function indexOfOrder(id, size, a) {

	var b = 0;
	a.forEach(element => {
		if (element.pizza_id == id) {
			if (element.pizza_size == size) {
				if (JSON.stringify(supplementById(id)) === JSON.stringify(element.pizza_sup)) {

					b = a.indexOf(element);
				}
			}
		}

	});

	return b;

}

function indexOfOrder1(id, size, a) {

	var b = 0;
	a.forEach(element => {
		if (element.pizza_id == id) {
			if (element.pizza_size == size) {
				if (element.pizza_sup.length == 0) {

					b = a.indexOf(element);
				}
			}
		}

	});

	return b;

	console.log(b);

}
function indexOfOrderBySupplement(id, size, order_sup) {

	var b = 0;
	array.forEach(element => {
		if (element.pizza_id == id) {
			if (element.pizza_size == size) {
				if (JSON.stringify(order_sup) === JSON.stringify(element.pizza_sup)) {

					b = array.indexOf(element);
				}
			}
		}

	});

	return b;

}



// Registrerung 

function register() {
	var streetNr = document.querySelector("#streetNr").value;
	var zip = document.querySelector("#plz").value;
	var city = document.querySelector("#ort").value;
	var address = document.querySelector("#street").value;

	var s = address + " " + streetNr + " " + zip + " " + city;

	console.log(s);

	let data = {
		address: s,
		firstname: document.querySelector("#vrn").value,
		lastname: document.querySelector("#nhn").value,
		username: document.querySelector("#user").value,
		password: document.querySelector("#pwd").value,
		email: document.querySelector("#email").value,


	};

	fetch('http://localhost:9080/pizza-to-go-server/app/users/add-person', {
		method: 'post',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(data)

	})
		.then(response => {
			console.log(data);
			document.querySelector("#user").value = "";
			document.querySelector("#pwd").value = "";
			document.querySelector("#willkommen").innerHTML = "Willkommen " + data.username;
			if (!response.ok) {
				document.querySelector("#accessError").innerHTML = "Benutzer existiert bereits!";
				throw Error(response.statusText);
			}
			else {

				document.querySelector(".header").style.display = "none";
				document.querySelector(".welcome").style.display = "block";
				document.querySelector(".welcome").style.display = "block";
				hideRegistration();

			}
		})
		.catch(error => console.error('Error:', error));
}


// Logout

function logout() {
	fetch('http://localhost:9080/pizza-to-go-server/app/login', {
		method: 'delete'
	})
		.then(response => {
			if (response.ok) {
				document.querySelector(".header").style.display = "block";
				document.querySelector(".welcome").style.display = "none";
				document.querySelector("#payment").style.display = "none";
				document.querySelector("#orderOk").style.display = "none";
				document.querySelector("#app").style.display = "block";
				document.querySelector(".aside_r").style.display = "block";
				löschenAll();
			}
		})
		.catch(error => console.error('Error:', error));
}

// Login

function login() {
	let data = {
		username: document.querySelector("#username").value,
		password: document.querySelector("#password").value
	};

	fetch('http://localhost:9080/pizza-to-go-server/app/login', {
		method: 'post',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			document.querySelector("#username").value = "";
			document.querySelector("#password").value = "";
			document.querySelector("#willkommen").innerHTML = "Willkommen " + data.username;

			if (!response.ok) {
				document.querySelector("#accessError1").innerHTML = "Benutzerdaten sind fehlerhaft!";
				throw Error(response.statusText);
			}
			else {
				document.querySelector(".header").style.display = "none";
				document.querySelector(".welcome").style.display = "block";
				hideAnmeldung();




			}
		})
		.catch(error => console.error('Error:', error));
}

function checkLoginOnFocus() {
	document.querySelector("#accessError1").value = "";
}


function showBestelldetail() {

	document.querySelector("#anmeldung").style.display = "none";
	document.querySelector("#registration").style.display = "none";
	document.querySelector("#app").style.display = "none";

	document.querySelector("#showinfo").style.display = "none";
	document.querySelector(".aside_r").style.display = "none";
	document.querySelector("#payment").style.display = "none";
	document.querySelector("#bestellDetails").style.display = "block";
	document.querySelector("#orderOk").style.display = "none";

	bestelldetail();
}

function hideBestellDetails() {

	document.querySelector("#bestellDetails").style.display = "none";
	document.querySelector("#payment").style.display = "none";
	document.querySelector("#app").style.display = "block";
	document.querySelector(".aside_r").style.display = "block";
	document.querySelector("#orderOk").style.display = "none";


}

function bestelldetail() {

	if (array.length == 0) document.getElementById("warenkordLeer").innerHTML = 'Dein Warenkorb ist zurzeit leer.';
	else document.getElementById("warenkordLeer").innerHTML = "";
	var warenkorb = "";

	array.forEach(com => {
		sup = "";
		if (com.pizza_sup.length == 0) sup = 'Keine Supplement';
		else {

			com.pizza_sup.forEach((e, index) => {
				if (index == 0 && com.pizza_sup.length == 1) { sup += 'Supplement: ' + e.name + '.'; }
				else if (index == 0 && com.pizza_sup.length > 1) sup += 'Supplement: ' + e.name + ', ';
				else if (index != 0 && index == com.pizza_sup.length - 1) sup += e.name + '.';
				else sup += e.name + ',';

			});
		}

		var e = indexOfOrderBySupplement(com.pizza_id, com.pizza_size, com.pizza_sup);
		warenkorb += '<hr style="height:1px;border-width:0;color:gray;background-color:gray;width: 830px;margin-left: 0px;padding-left: -15px">   <table ><tr><td style="width: 400px;"><h4 class="name">'
			+ com.Pizza_anzahl + 'x' + com.pizza_name + ' (' + com.pizza_size + ') </h4></td><td rowspan="3" style="width: 420px;  text-align: right;"><button type="button"  onclick="löschen('
			+ e + ')">Löschen</button></td></tr><tr><td style="width: 400px;;padding-bottom : 10px;">' + sup + '</td></tr><td style="width: 400px;padding-bottom : 10px;">Preis:   <strong>' + (com.Pizza_summe).toFixed(2) + ' €</strong>'
			+ '</td><tr></tr></table>'

	});

	document.querySelector("#bestellung").innerHTML = warenkorb;
}

function getIdUser() {

	var id;
	return fetch('http://localhost:9080/pizza-to-go-server/app/login/id', {
		method: 'get',
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json'
		}
	})
		.then((response) => response.json())
		.then((responseData) => {

			id = responseData;

			return id;
		})
		.catch((error) => console.error(error));
}

async function ZurKassegehen() {

	var userID = await getIdUser().then(response => { return response });

	if (typeof userID == 'undefined') {showAnmeldung(); console.log(userID);} 
	else {
		console.log(userID);
		if (array.length == 0) alert("Dein Warenkorb ist leer !!!");
		else {
			document.querySelector("#anmeldung").style.display = "none";
			document.querySelector("#registration").style.display = "none";
			document.querySelector("#app").style.display = "none";

			document.querySelector("#showinfo").style.display = "none";
			document.querySelector(".aside_r").style.display = "none";
			document.querySelector("#bestellDetails").style.display = "none";
			document.querySelector("#payment").style.display = "block";

			LieferadresseInfo(userID);
		}


	}

}
function LieferadresseInfo(Userid) {
	fetch('http://localhost:9080/pizza-to-go-server/app/users/' + Userid, {
		method: 'get',
		headers: {
			'Content-type': 'application/json'
		}
	})

		.then(response => response.json())
		.then(data => {

			document.getElementById("vrnL").value = data.firstname;
			document.getElementById("nhnL").value = data.lastname;
			var adr = data.address;
			var res = adr.split(" ");

			document.getElementById("streetL").value = res[0];
			document.getElementById("streetNrL").value = res[1];
			document.getElementById("plzL").value = res[2];
			document.getElementById("ortL").value = res[3];




		})
		.catch((error) => console.error(error));


}


// Check Formular LieferAd.

// Vorname prüfen
var nameOkL = false;
var straßeOkL = false;

var straßeNrOkL = false;
var plzOkL = false;






function checkIfAllOkL() {
	let allOkL = nameOkL && straßeOkL && straßeNrOkL && plzOkL;
	if (allOkL) {
		document.querySelector("#zahlen").disabled = false;
	}
	else {
		document.querySelector("#zahlen").disabled = true;
	}
}

// Straße

function checkStraßeOnFocusL() {
	document.querySelector("#errorStraßeL").innerHTML = "";
}

function checkStraßeOnBlurL() {
	if (document.querySelector("#streetL").value.length == 0)
		return;

	if (straßeOkL == false) {
		document.querySelector("#errorStraßeL").innerHTML = "Format des Straßes ist falsch";
		// document.querySelector("#vrn").style.border = " solid 3px red";
	}
}

function checkStraßeL() {
	let nameInput = document.querySelector("#streetL").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[a-zäöüßA-ZÄÖÜ]{4,}$/;
	if (nameRegEx.test(nameInput) == false) {
		straßeOkL = false;
	}
	else {
		straßeOkL = true;
	}
	checkIfAllOkL();
}

// ende Straße

// StraßeNr

function checkStraßeNrOnFocusL() {
	document.querySelector("#errorStraßeNrL").innerHTML = "";
}

function checkStraßeNrOnBlurL() {
	if (document.querySelector("#streetNrL").value.length == 0)
		return;

	if (straßeNrOkL == false) {
		document.querySelector("#errorStraßeNrL").innerHTML = "Format des StraßeNr ist falsch";
		// document.querySelector("#vrn").style.border = " solid 3px red";
	}
}

function checkStraßeNrL() {
	let nameInput = document.querySelector("#streetNrL").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[1-9]{1,}$/;
	if (nameRegEx.test(nameInput) == false) {
		straßeNrOkL = false;
	}
	else {
		straßeNrOkL = true;
	}
	checkIfAllOkL();
}

// ende StraßeNr

function checkVornameOnFocusL() {
	document.querySelector("#errorVornameL").innerHTML = "";
}

function checkVornameOnBlurL() {
	if (document.querySelector("#vrnL").value.length == 0)
		return;

	if (nameOkL == false) {
		document.querySelector("#errorVornameL").innerHTML = "Format des Vornamens ist falsch";
		// document.querySelector("#vrn").style.border = " solid 3px red";
	}
}

function checkVornameL() {
	let nameInput = document.querySelector("#vrnL").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[a-zäöüßA-ZÄÖÜ]*[a-zäöüß]$/;
	if (nameRegEx.test(nameInput) == false) {
		nameOkL = false;
	}
	else {
		nameOkL = true;
	}
	checkIfAllOkL();
}

// nachname


function checkNachnameOnFocusL() {
	document.querySelector("#errorNachnameL").innerHTML = "";
}

function checkNachnameOnBlurL() {
	if (document.querySelector("#nhnL").value.length == 0)
		return;

	if (nameOkL == false) {
		document.querySelector("#errorNachnameL").innerHTML = "Format des Nachnamens ist falsch";
	}
}

function checkNachnameL() {
	let nameInput = document.querySelector("#nhnL").value;
	if (nameInput.length === 0)
		return;

	let nameRegEx = /^[a-zäöüßA-ZÄÖÜ]*[a-zäöüß]$/;
	if (nameRegEx.test(nameInput) == false) {
		nameOkL = false;
	}
	else {
		nameOkL = true;
	}
	checkIfAllOkL();
}




// PZL


function getPlzFromEscherL() {
	plzOk = false;

	let value = document.querySelector('#plzL').value;
	if (value.length != 5) {

		let divElement = document.querySelector("#ortL");
		while (divElement.firstChild) {
			divElement.removeChild(divElement.firstChild);
		}

	}
	if (value.length == 5) {



		let url = 'http://escher.informatik.hs-kl.de/PlzService/ort?plz=' + value;

		fetch(url)
			.then((response) => response.text())
			.then((data) => {


				data.trim().slice(0, -1).split(";").forEach(ort => {
					console.log(ortL);
					let liElement = document.createElement("option");
					liElement.innerHTML = ort.slice(6);
					document.querySelector("#ortL").append(liElement);
				});

				if (document.querySelector("#ortL").value.length != 0) plzOkL = true;
			})
			.catch((error) => console.error(error));



	}

	// if (document.querySelector('#plz').value.length == 5 &&  plzOk = true;

	checkIfAllOkL();

}


function checkPlzOnFocusL() {
	document.querySelector("#accessErrorL").innerHTML = "";
}

function checkPlzOnBlurL() {
	if (document.querySelector("#plzL").value.length == 0)
		return;

	if (document.querySelector("#plzL").value.length != 0 && document.querySelector("#ortL").value.length == 0) {
		document.querySelector("#accessErrorL").innerHTML = "Format der PLZ ist falsch";
		//  plzOk = false;		
	}

	// else plzOk = true;
}

function TotalPrice(){

	var summe=0;
	array.forEach(element => { summe+=element.Pizza_summe; 	});

	return (summe).toFixed(2);
}



function mudaCor(id, cor){
	document.getElementById(id).style.background = cor;
}

function mostrarOcultar(status){
	if (status == "none") {
		document.getElementById("achou").style.display = "block";
	} else {
		document.getElementById("achou").style.display = "none";
	}
}

function verificaCampos(){
	var x = document.forms["cadastro"]["login"].value;
	var y = document.forms["cadastro"]["senha"].value;
	var z = document.forms["cadastro"]["confsenha"].value;
	if (x == "") {
		//document.getElementById("alerta").innerHTML = "Insira um login";
		alert("Insira um login!");
		return false;
	}
	if (y == "") {
		alert("Insira uma senha!");
		return false;
	}
	if (z == "") {
		alert("Insira a mesma senha!");
		return false;
	}
	if (y.length < 6 || y.length > 10) {
		alert("A senha deve conter entre 6 e 10 caracteres!");
		return false;
	}
	if (y !== z) {
		alert("Senhas não compatíveis!");
		return false;
	}
	return true;
}

function verificaPalindromo() {
	//if (document.forms["palindromo"]["palavra"].value == document.forms["palindromo"]["palavra"].value.split("").reverse().join("")) {
	if (document.getElementById("palindromo").value == document.getElementById("palindromo").value.split("").reverse().join("")) {
		alert("A palavra é um palíndromo!");
	} else {
		alert("A palavra não é um palíndromo!");
	}
}

function inverteNomes() {
	for (var i = 1; i < 6; i++) {
		document.getElementById("nome" + i).value = document.getElementById("nome" + i).value.split("").reverse().join("");
	}
}

function verificaSelecao(valor) {
	if (valor == 1) {
		document.forms["cadastro2"]["cpf"].style.display = "block";
		document.forms["cadastro2"]["datanasc"].style.display = "block";
		document.getElementById("labelpessoa").innerHTML = "CPF:";
		document.getElementById("labelnasc").innerHTML = "Data de Nascimento:";
		document.forms["cadastro2"]["cnpj"].style.display = "none";
	} else if (valor == 2) {
		document.forms["cadastro2"]["cnpj"].style.display = "block";
		document.getElementById("labelpessoa").innerHTML = "CNPJ:";
		document.forms["cadastro2"]["cpf"].style.display = "none";
		document.forms["cadastro2"]["datanasc"].style.display = "none";
		document.getElementById("labelnasc").innerHTML = "";
	} else {
		document.forms["cadastro2"]["cnpj"].style.display = "none";
		document.getElementById("labelpessoa").innerHTML = "";
		document.getElementById("labelnasc").innerHTML = "";
		document.forms["cadastro2"]["cpf"].style.display = "none";
		document.forms["cadastro2"]["datanasc"].style.display = "none";
	}
}

function intercalaPalavras() {
	var a = document.getElementById("palavra1").value;
	var b = document.getElementById("palavra2").value;
	var result = "";
	var cont = 0;
	var ordem = 1;

	while (result.length !== (a.length + b.length)) {
		if (ordem == 1) {
			result = result + a[cont] + b[cont];
			cont++;
			ordem++;
		} else {
			result = result + a[cont] + a[cont+1];
			result = result + b[cont] + b[cont+1];
			cont = cont + 2;
			ordem--;
		}
	}
	document.getElementById("misturado").value = result;
}
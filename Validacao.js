function alerta (message) {
	$('#alertPlaceholder').html('<div class="alert alert-danger alert-dismissible fade show" role="alert">'+message+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
}

function ValidaLogin() {
	var login = document.getElementById("email");
	var senha = document.getElementById("senha");

	//Valida Email
	if (login.value == "" || login.value.indexOf("@") < 1 || login.value.indexOf(".") < 1) {
		alerta("Email Inválido.");
		login.focus();
		return false;
	}

	//Valida Senha
	if (senha.value == "") {
		alerta("Insira sua senha.");
		senha.focus();
		return false;
	}
}

function somenteNumeros(evt){
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}

function ValidaCadastro() {
	var codigo = document.getElementById("codigo");
	var nome = document.getElementById("nome");
	var email = document.getElementById("emailcad");
	var telefone = document.getElementById("fone1");
	var cpf = document.getElementById("cpf");
	var endereco = document.getElementById("endereco");
	var radioSim = document.getElementById("radioSim");
	var radioNao = document.getElementById("radioNao");
	var senha = document.getElementById("senhacad");
	var senha2 = document.getElementById("senha2");
	var cep = document.getElementById("cep");

	var num = /[^0-9]/;


	//Valida Codigo
	if (codigo != null && codigo.value == "") {
		alert("O preenchimento do campo Código é obrigatório!");
		codigo.focus();
		return false;
	}

	// var num = /[^0-9]/;
	num.lastIndex = 0;
	if (num.test(codigo.value)) {
		alert("Não são aceitos caracteres diferentes de números neste campo!");
		codigo.focus();
		return false;
	}

	//Valida Nome
	if (nome.value == "") {
		alert("O preenchimento do campo Nome é obrigatório!");
		nome.focus();
		return false;
	}

	if (nome.value.indexOf(' ') < 0) {
		alert("É necessário fornecer o nome completo.");
		nome.focus();
		return false;
	}

	//Valida CPF
	if(cpf.value.length != 11){
		alert("Digite um CPF válido!");
		cpf.focus();s
	}

	//Valida Email
	if (email.value == "") {
		alert("O preenchimento do campo Email é obrigatório!");
		email.focus();
		return false;
	}

	if (email.value.length < 3 || email.value.indexOf(".") < 1 || email.value.indexOf("@") < 1) {
		alert("Insira um email válido!");
		email.focus();
		return false;
	}

	//Valida Endereço
	if (endereco.value == "") {
		alert("O preenchimento do campo Endereço é obrigatório!");
		endereco.focus();
		return false;
	}

	//Valida CEP
	if(cep.value == ""){
		alert("O preenchimento do campo CEP é obrigatório!");
		cep.focus();
		return false;
	}

	//Valida telefone
	num.lastIndex = 0;

	if(telefone.value == ""){
		alert("O preenchimento do campo Telefone Celular é obrigatório!");
		telefone.focus();
		return false;
	}

	if (telefone.value.length < 8 || num.test(telefone.value)) {
		alert("Insira um número de telefone válido!");
		telefone.focus();
		return false;
	}	

	//Valida Radio
	if (radioSim.checked == false && radioNao.checked == false) {
		alert("É necessário indicar se o cliente está Ativo ou Inativo!");
		return false;
	}

	//Valida Senha
	if(senha.value == "" && senha.value.length < 6){
		alert("Digite uma senha com no mínimo 6 caracteres");
		return false;
	}
	if(senha2.value == ""){
		alert("Digite a senha novamente");
		return false;
	}
	if(senha.value != senha2.value){
		alert("As duas senhas não coincidem");
		return false;
	}
}

window.onresize = function () {
	if (window.innerWidth <= 700) {
		document.getElementById("maincol").classList.add('col-12');
		document.getElementById("maincol").classList.remove('col-8');
	} else {
		document.getElementById("maincol").classList.add('col-8');
		document.getElementById("maincol").classList.remove('col-12');
	}
}

$(document).ready(function () {

	if (window.innerWidth <= 700) {
		document.getElementById("maincol").classList.add('col-12');
		document.getElementById("maincol").classList.remove('col-8');
	} else {
		document.getElementById("maincol").classList.add('col-8');
		document.getElementById("maincol").classList.remove('col-12');
	}

	$("tbody").load('carga.txt');

	$("#menu").hide();
	$("#painel ul").hide();
	$("#painel #up").hide();
	$("#painel #down").show();
	$("#barranav #menudown").show();
	$("#barranav #menuup").hide();
	$("#barranav ul").hide();

	$("#headmenu").mouseenter(function () {
		$("#menu").slideDown(500);
	});
	$("#menu").mouseleave(function () {
		$("#menu").slideUp(500);
	});

	$("#lista").click(function () {
		$("#painel ul").slideToggle();
		$("#painel #up").toggle();
		$("#painel #down").toggle();
	});

	$("#barranav").click(function () {
		$("#barranav ul").slideToggle();
		$("#barranav #menuup").toggle();
		$("#barranav #menudown").toggle();
	});

});


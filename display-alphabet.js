var arrayAlfabeto = [
											'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
											'r','s','t','u','v','x','w','y','z','1','2','3','4','5','6','7','8','9','0'
										];

var arrayLetras = [];

var posicao = 0;

document.getElementById("text1").innerHTML = arrayLetras;	
document.getElementById("text2").innerHTML = arrayAlfabeto[posicao];


function escolherLetra() {
	arrayLetras.push(arrayAlfabeto[posicao]);
	document.getElementById("text1").innerHTML = arrayLetras;
}

function apagarLetra() {
	if(arrayLetras.length > 0){
		arrayLetras.pop();		
	}

	document.getElementById("text1").innerHTML = arrayLetras;	
}

function voltarLetra() {
	if(posicao == 0){
		posicao = arrayAlfabeto.length - 1;
	}else{
		posicao--;
	}

	document.getElementById("text2").innerHTML = arrayAlfabeto[posicao];
}

function avancaLetra() {
	if(posicao < arrayAlfabeto.length - 1){
		posicao++;		
	}else{
		posicao = 0;
	}

	document.getElementById("text2").innerHTML = arrayAlfabeto[posicao];
}
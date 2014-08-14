//Asignacion por valor
//Asignacion por referencia

function Pokemon(n,v,a){
	this.grito = "Pika!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function(){
		alert(this.grito);
	}
}

var pikachu = new Pokemon("Pikachu", 100, 55);
pikachu.vida = pikachu.vida -13;
pikachu.gritar();

function inicio(){
	var ratata = new Pokemon("Ratata", 400, 2);
	ratata.vida = ratata.vida -13;
	ratata.grito = "Paredes!!!";
	nombrePokemon.innerText = ratata.nombre;
	
	datosPokemon.innerText = "\nSu vida es de: "+ratata.vida+
	"\nSu ataque es de: "+ratata.ataque+
	"\ny su grito es: " +ratata.grito;
	
	ratata.gritar();
}


var bulbasaur = new Pokemon("Bulbasaur", 90, 50);

/*Forma de crear funcion
function Pokemon(nombrePokemon,vidaPoke, ataPoke){
	var estructuraPokemon = {
		nombre: nombrePokemon,
		vida: vidaPoke,
		ataque: ataPoke,
		datos:{tipo:"Tierra",debilidad:"Fuego"}
	};
	return estructuraPokemon;
}

var pikachu = Pokemon("Pikcahu", 100, 55);
var bulbasaur = Pokemon("Bulbasaur", 90, 50);

******************************************************************/
//DOCUMENT OBJECT MODEl

//navigator, window, document
//objeto 
	//variables
	//funciones

//document.write("hola mama!");

//var pi = 3.141592564;
//pi = Math.floor(pi);//redondea al minimo
//pi = Math.ceil(pi);//redondea al siguiente número
//document.write(pi);
/*
var maxima;
var numeros = [5,23,4,5,12,24,100];
maxima = Math.max(5,23,4,5,12,24,100);
document.write(maxima);


function mostrar(pos){
	document.write(pos.coords.latitude+ "," + pos.coords.longitude);
}

navigator.geolocation.getCurrentPosition( mostrar );
*/
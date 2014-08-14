//var menu = ["Productos","Ventas","Contacto"];
//document.write(menu[2]);

//var dofa = [ ["Fortaleza","Oportunidad"], ["Debilidad","Amenaza"] ];
//document.write( dofa[0][1] );

function explosion(){
	alert("BOOM!!");
	document.write("<h1>BOOM!! Elegiste un area minada =(</h1>");

}

function ganaste(){
	document.write("Eres un ganador =)");
}

//1 = bomba 0  = no hay bomba
var campo = [ [ 1, 0, 0 ] ,
			  [ 0, 1, 0 ] ,
			  [ 1, 0, 1 ] ];

var textos = ["Cesped, Ganaste","Bomba, Explotaste"];
var x, y;

alert("Estas en un campo minado\n" +
	 "Elige una posición entre el 0 y el 2 para X y para Y");

x = prompt("Posición en X? (Entre 0 y 2)");
y = prompt("Posición en Y? (Entre 0 y 2)");


//document.write(textos[posicion]);

if(x < 3 && y < 3){
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion] + "<br />");
	if(posicion == 1 ){
		explosion();
	}else{
		ganaste();
	}
}else{
	document.write("¡Te saliste del campo!");
	explosion();
}


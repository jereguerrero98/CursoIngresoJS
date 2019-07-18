function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

while(respuesta=='si'){
	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);
	contador++;
	acumulador+=numero;
	promedio=acumulador/contador;

while(isNaN(numero)){
	numero=prompt ("Incorrecto, ingrese otro numero");
	numero=parseInt(numero);

}

respuesta=prompt("¿Desea seguir?"); }
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
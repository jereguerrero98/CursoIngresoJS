function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0; 
	 

	while (contador < 5) 
	{
		numero = prompt ("Ingrese un numero");

		numero = parseInt (numero); 
		contador++;
		while(isNaN(numero)){
			numero= prompt ("error,ingrese un numero");

		}
		
		acumulador +=numero;
	}
	
	
document.getElementById('suma').value= acumulador;
document.getElementById('promedio').value= acumulador/5;
	



}//FIN DE LA FUNCIÓN
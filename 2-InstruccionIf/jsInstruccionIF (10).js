function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroA ;

	numeroA = Math.floor((Math.random() * 10) + 1);
	alert (numeroA); 

	if (numeroA >=9 && numeroA <=10) 
	{
		alert ("EXCELENTE") ;
	}

	if (numeroA >=4 && numeroA <9) 
	{
		alert ("APROBÓ") ;
	}
	
	if (numeroA <4)
	{
		alert ("Vamos, la proxima se puede") ;
	}






}//FIN DE LA FUNCIÓN
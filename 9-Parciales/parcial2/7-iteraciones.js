//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var sexo;
	var nota;
	var totalNotas=0;//para promedio
	var notaMenor;//nota mas baja
	var cuentaVaronesMayor6//varones nota mayor a 6	

	for(var i=0;i<6;i++)
	{
		while(isNaN('f') || isNaN('m'))
		{
			sexo=prompt("Ingrese sexo. 'f' para femenino; 'm' para masculino");
		}

		while(nota<0 || nota>10)
		{
			nota=prompt("Ingrese la nota. Entre 0 y 10");
		}

		if(i==0)
		{
			totalNotas=nota;
			notaMenor=nota;
		}
		else
		{
			totalNotas=totalNotas+nota;
		}
		

	}




}


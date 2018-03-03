//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//dia maximo, dia minimo
function Mostrar()
{
	var diaMax;
	var diaMin;
	var importeMayor;
	var importeMenor;

	for(var i=1;i<8;i++)
	{

		venta=prompt("Ingrese importe del día " + i);
		parseInt(venta);
		while(isNaN(venta) || venta<=0)
		{
			venta=prompt("Inválido. Ingrese importe del día " + i);
			
		}

		if(i==1)
		{
			diaMax=i;
			diaMin=i;
			importeMayor=venta;
			importeMenor=venta;
		}
		else
		{
			if(venta>=importeMayor)
			{
				importeMayor=venta;
				diaMax=i;
			}
			else
			{
				importeMenor=venta;
				diaMin=i;
			}
		}
	}
	
	document.write("El mayor importe fue de " + importeMayor + " el día " + diaMax);
	document.write("<br>El menor importe fue de " + importeMenor + " el día " + diaMin)
}


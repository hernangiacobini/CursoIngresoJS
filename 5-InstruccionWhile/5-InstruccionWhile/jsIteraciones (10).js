function Mostrar()
{

	//declarar contadores y variables 
	
	var numero;
	var positivos=0;
	var negativos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var ceros=0;
	var pares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPosNeg;

	numero=prompt("Escriba un numero. Para terminar escriba E");
	

	while(numero!="E")
	{
		numero=parseInt(numero);
		
		//cuenta los ceros en la variable ceros
		if(numero==0)
		{
			ceros=ceros + 1;
		}
		else
		{//si no es cero evalua si es par y almacena en variable pares
			if(numero%2==0)
			{
				pares=pares + 1;
			}
			if(numero<0)
			{
				negativos=negativos + numero;
				contadorNegativos=contadorNegativos + 1;
			}
			else
			{//suma de positivos y contador de positivos
				
				positivos=positivos + numero;
				contadorPositivos=contadorPositivos + 1;
				
			}
		}
		//suma de negativos y contador de negativos
		/*if(numero<0)
		{
			negativos=negativos + numero;
			contadorNegativos=contadorNegativos + 1;
		}
		else
		{//suma de positivos y contador de positivos
			if(numero>0)
			{
				positivos=positivos + numero;
				contadorPositivos=contadorPositivos + 1;
			}
		}

*/
		numero=prompt("Escriba un numero. Para terminar escriba E");
	}
	
	promedioPositivos=positivos/contadorPositivos;
	promedioNegativos=negativos/contadorNegativos;
	diferenciaPosNeg=positivos + negativos;

	document.write("Suma de negativos: " + negativos);
	document.write("<br>Suma de positivos: " + positivos);
	document.write("<br>Cantidad de positivos: " + contadorPositivos);
	document.write("<br>Cantidad de negativos: " + contadorNegativos);
	document.write("<br>Cantidad de ceros: " + ceros);
	document.write("<br>Cantidad de numeros pares: " + pares);
	document.write("<br>Promedio de positivos: " + promedioPositivos);
	document.write("<br>Promedio de negativos: " + promedioNegativos);
	document.write("<br>Diferencia entre positivos y negativos: " + diferenciaPosNeg);




}//FIN DE LA FUNCIÓN
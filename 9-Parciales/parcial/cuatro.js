function Mostrar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1=prompt("Escriba un numero");
	numero2=prompt("Escriba un segundo numero");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	if(numero1<numero2)
	{
		resultado=numero1+numero2;
	}
	else
	{
	
		if(numero1==numero2)
		{
			resultado=numero1*numero2;
			
			/*if(resultado%2==0 && resultado!=0)
			{
				resultado=resultado + " es par";
			}*/
		}
		else
		{
			resultado=numero1-numero2;
		}
	}

	document.write(resultado)
}

function Mostrar()
{
	var dia;

	dia=prompt("Ingrese un día de la semana:");

	switch(dia)
	{
		case "sabado":
		case "domingo":
		alert("Es fin de semana");
		break;

		default:
		alert("A trabajar");
	}


	//mostrar que numero es mayor

	/*var num1=0;
	var num2=0;
	var num3=0;
	var mayor=0;

	num1=prompt("Escriba el primer numero");
	num2=prompt("Escriba el segundo numero");
	num3=prompt("Escriba el tercer numero");

	num1=parseInt(num1);
	num2=parseInt(num2);
	num3=parseInt(num3);

	if(num1>num2 && num1>num3)
	{
		mayor=num1;
	}
	else
	{
		if(num2>num1 && num2>num3)
		{
			mayor=num2;
		}
		else
		{
			mayor=num3;
		}
	}

	alert(mayor);*/
}

function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

	while(sexo!='f' && sexo!='m')
	{
		sexo=prompt("No es una letra valida. Ingrese f ó m")
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
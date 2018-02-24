function Mostrar()
{

var clave = prompt("ingrese el número clave.");

	while(clave!="utn750")
	{
		alert("Clave incorrecta. Intente nuevamente");
		clave = prompt("ingrese el número clave.");
	}

	document.write("Bienvenido!");
}//FIN DE LA FUNCIÓN

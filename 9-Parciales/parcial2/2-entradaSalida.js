//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var IVA;

	importe=prompt("Ingrese un importe:");
	importe=parseInt(importe);
	
	IVA=21/100;

	document.getElementById('importe').value=importe+importe*IVA;
}


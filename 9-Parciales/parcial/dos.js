function Mostrar()
{
	var importe;
	var IVA;

	importe=prompt("Ingrese un importe:");
	importe=parseInt(importe);
	
	IVA=21/100;

	document.getElementById('importeFinal').value=importe+importe*IVA;
}

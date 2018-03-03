//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base;
	var perimetroTriangulo;

	base=document.getElementById('lado').value;
	base=parseInt(base);

	perimetroTriangulo=base*3;

	alert(perimetroTriangulo);
	
}


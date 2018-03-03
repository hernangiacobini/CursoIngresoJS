function Mostrar()
{
	var largo;
	var ancho;
	var metrosAlambre;

	largo=document.getElementById('largo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);

	metrosAlambre=(largo*2 + ancho*2)*3;

	alert(metrosAlambre);
}

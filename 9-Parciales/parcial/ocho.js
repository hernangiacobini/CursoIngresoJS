function Mostrar()
{
/*pedir 3 datos hasta que el cliente quiera. Los datos son: nombre del animal
															peso del animal
															temperatura del habitat (-40 y +40)
Informar: nombre del animal mas pesado
		nombre del animal de la temperatura mas baja
		cantidad de temperaturas pares que se ingresaron
		promedio del peso de todos los animales
		temperatura maxima y minima*/

	var nombreAnimal;
	var pesoAnimal;
	var tempHabitat;
	var animalMasPesado;
	var nombreAnimalTempMasBaja;
	var cantTempPares;
	var promedioPeso;
	var tempMaxima;
	var tempMinima;

	nombreAnimal=prompt("Ingrese un animal. Para finalizar la carga escriba Terminar");
	
	While (nombreAnimal!="Terminar")
	{
		while(isNaN(nombreAnimal) || nombreAnimal<=0 || nombreAnimal>0)
		{
			nombreAnimal=prompt("Ingrese un animal. Para finalizar la carga escriba Terminar");
		}
		while(isNaN(pesoAnimal) || pesoAnimal<1)
		{
			pesoAnimal=prompt("Ingrese el peso del animal");
		}
		while(isNaN(tempHabitat) || tempHabitat<-40 || tempHabitat>40)
		{
			tempHabitat=prompt("Ingrese la temperatura del habitat del animal");
		}
		
	}

	

	document.write("Animal más pesado: " + animalMasPesado + "<br>");
	document.write("Animal con temperatura más baja: " + nombreAnimalTempMasBaja + "<br>");
	document.write("Cantidad de temperaturas pares: " + cantTempPares + "<br>");
	document.write("Promedio del peso de todos los animales" + promedioPeso + "<br>");
	document.write("Temperatura maxima: " + tempMaxima + "<br>");
	document.write("Temperatura mínima: " + tempMinima + "<br>");
}

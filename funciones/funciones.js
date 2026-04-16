//Crear la funcion para mostrar datos del formulario
function mostrarDatos(event){

    // Evita que se recargue la página
    event.preventDefault();

    var inicio = parseInt(document.getElementById("inicio").value); 
    var fin = parseInt(document.getElementById("fin").value);

    var rango = "";
    var total = 0;

    var primos = "";
    var totalPrimos = 0;

    // recorrer números
    for(var i = inicio; i <= fin; i++){
        rango = rango + i + " ";
        total++;

        if(esPrimo(i)){
            primos = primos + i + " ";
            totalPrimos++;
        }
    }

    // mostrar resultados
    document.getElementById("mostrar").innerHTML =
        "Rango: " + rango + "<br>" +
        "Total números: " + total + "<br>" +
        "Primos: " + primos + "<br>" +
        "Total primos: " + totalPrimos;
}


// función para saber si es primo
function esPrimo(num){

    if(num <= 1){
        return false;
    }

    for(var i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }

    return true;
}
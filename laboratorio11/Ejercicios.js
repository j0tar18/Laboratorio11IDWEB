/*3. Calcular promedio con validación. Pide 5 notas y calcula el promedio, asegurándote de que estén entre 0 y 20*/

function Ejercicio03() {
    let suma = 0;


    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt("Ingrese nota " + i + " (0-20):"));


        if (isNaN(numero) || numero < 0 || numero > 20) {
            alert("Error. Debe ingresar una nota válida entre 0 y 20.");
            i--;
            continue;
        }


        suma+=numero;
    }

    const PROMEDIO = suma/5;

    alert("El promedio de los 5 números es: " + PROMEDIO);
}

/*4. Solicita edad y muestra:
    “Niño” si < 12
    “Adolescente” si entre 12 y 17
    “Adulto” si entre 18 y 59
    “Adulto mayor” si ≥ 60*/

function Ejercicio04() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let mensaje;

    if (isNaN(edad)) {
        alert("Error. Debe ingresar un número válido.");
        return;
    }

    if (edad < 0) {
        alert("Error. La edad no puede ser negativa.");
        return;
    }

    if (edad >= 60) {
        mensaje = "Adulto mayor";
    } else if (edad >= 18) {
        mensaje = "Adulto";
    } else if (edad >= 12) {
        mensaje = "Adolescente";
    } else {
        mensaje = "Niño";
    }

    alert("Usted es un: " + mensaje);
}

/*5. Contador de números pares e impares. Pide 10 números y muestra cuántos fueron pares y cuántos impares*/

function Ejercicio05() {
    let pares = 0;
    let impares = 0;
    let mensaje = "Números: ";

    for (let i = 1; i <= 10; i++) {
        let numero = parseFloat(prompt("Ingrese número " + i + ":"));

        if (isNaN(numero)) {
            alert("Error. No ha ingresado un número.");
            i--;
            continue;
        }

        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }

        mensaje += numero + (i < 10 ? ", " : "");
    }

    alert(mensaje + "\nCantidad de números pares: " + pares + "\nCantidad de números impares: " + impares);
}

/*6. Tabla de multiplicar. El usuario ingresa un número y se muestra su tabla del 1 al 12. Programa iterativo*/

function Ejercicio06() {
    let numero = parseInt(prompt("Ingrese un número:"));
    let mensaje = "";

    if (isNaN(numero)) {
        alert("Error. Debe ingresar un número válido.");
        return;
    }

    for (let i = 1; i <= 12; i++) {
        mensaje += numero + " * " + i + " = " + (numero * i) + "\n";
    }

    alert("=== TABLA DE MULTIPLICAR DEL " + numero  + " ===\n" + mensaje);
}

/*7. Cajero automático. El usuario ingresa un monto a retirar. El programa debe indicar cuántos billetes de 100, 50, 20 y 10 se entregan. (Debe ser la menor cantidad de billetes). Programa iterativo*/

function Ejercicio07() {
    let continuar = true;
    
    while (continuar) {
        let retiro = parseInt(prompt("Ingrese el monto a retirar: "));
        
        if (isNaN(retiro)) {
            alert("Error. Debe ingresar un número válido.");
            continue;
        }

        if (retiro < 10) {
            alert("Error. El retiro mínimo es de 10.");
            continue;
        }

        if (retiro % 10 !== 0) {
            alert("Error. Solo se pueden retirar montos múltiplos de 10.");
            continue;
        }

        const BILLETES_100 = Math.floor(retiro / 100);
        retiro = retiro % 100;

        const BILLETES_50 = Math.floor(retiro / 50);
        retiro = retiro % 50;

        const BILLETES_20 = Math.floor(retiro / 20);
        retiro = retiro % 20;

        const BILLETES_10 = Math.floor(retiro / 10);

        alert("=== RETIRO EXITOSO ===\n"
            + "Billetes de 100: " + BILLETES_100
            + "\nBilletes de 50: " + BILLETES_50
            + "\nBilletes de 20: " + BILLETES_20
            + "\nBilletes de 10: " + BILLETES_10
        );

        let respuesta = prompt("¿Desea realizar otro retiro? (si/no)");
        continuar = (respuesta?.toLowerCase() === "si" || respuesta?.toLowerCase() === "s");
    }
    
    alert("Gracias por usar el cajero automático.");
}

/*8. Números primos en rango. Pide un número y muestra todos los primos entre 1 y dicho número. Programa iterativo*/

function Ejercicio08() {
    let numero = parseInt(prompt("Ingrese un número:"));
    let mensaje = "";

    if (isNaN(numero)) {
        alert("Error. Debe ingresar un número válido.");
        return;
    }

    if (numero < 2) {
        alert("Error. El número debe ser >= 2.");
        return;
    }

    for (let i = 2 ; i <= numero; i++) {
        let esPrimo = true;
        
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            mensaje += i + " ";
        }
    }

    alert("Números primos hasta " + numero + ":\n" + mensaje);
}

/*9. Suma todos los números desde 1 hasta N, pero omite los múltiplos de 5. Programa iterativo*/

function Ejercicio09() {
    let numero = parseInt(prompt("Ingrese un número:"));
    let suma = 0;

    if (isNaN(numero)) {
        alert("Error. Debe ingresar un número válido.");
        return;
    }

    for (let i = 0; i <= numero; i++) {

        if (i % 5 === 0) {
            continue;
        }

        suma += i;
    }

    alert("Suma omitiendo múltiplos de 5: " + suma);
}

/*10. Crea un menú con opciones:
    Calcular área del círculo
    Calcular área del rectángulo
    Salir
El programa debe repetir hasta que el usuario elija salir.*/

function Ejercicio10() {
    let continuar = true;
    
    while (continuar) {
        let opcion = parseInt(prompt(
            "=== MENÚ DE OPCIONES ===\n" +
            "1. Calcular área del círculo\n" +
            "2. Calcular área del rectángulo\n" +
            "3. Salir\n\n" +
            "Seleccione una opción:"
        ));
        
        switch (opcion) {
            case 1:
                let radio = parseFloat(prompt("Ingrese el radio del círculo:"));

                if (isNaN(radio) || radio <= 0) {
                    alert("Error. Ingrese un radio válido.");
                    break;
                }

                let areaCirculo = Math.PI * Math.pow(radio, 2);
                
                alert("Área del círculo: " + areaCirculo.toFixed(2));
                break;
                
            case 2:
                let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
                let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
                
                if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
                    alert("Error. Ingrese valores válidos.");
                    break;
                }
                
                let areaRectangulo = base * altura;
                alert("Área del rectángulo: " + areaRectangulo.toFixed(2));
                break;
                
            case 3:
                alert("¡Saliendo...");
                continuar = false;
                break;
                
            default:
                alert("Opción inválida. Por favor seleccione 1, 2 o 3.");
        }
    }
}

/*11. Verificación de número Armstrong. Programa iterativo
Un número de n dígitos es Armstrong si la suma de sus dígitos elevados a n da el mismo número
Ejemplo: 153 → 1³ + 5³ + 3³ = 153.*/

function Ejercicio11() {
    let numero = parseInt(prompt("Ingrese un número:"));
    let original = numero;
    let suma = 0;
    let longitud = String(numero).length;

    if (isNaN(numero)) {
        alert("Error. Debe ingresar un número válido.");
        return;
    }

    if (numero < 0) {
        alert("Error. El número no puede ser negativo.");
        return;
    }
    
    while (numero > 0) {
        let digito = numero % 10;
        suma += digito ** longitud;
        numero = Math.floor(numero/10);
    }

    if (suma === original) {
        alert(original + " es un número Armstrong.");
    } else {
        alert(original + " no es un número Armstrong.");
    }
}

/*12. Menú con múltiples opciones. Crea un menú tipo consola con las siguientes opciones:
    Calcular estadísticas de N notas
        Promedio
        Valor máximo
        Valor mínimo
        Cantidad de pares e impares
        Cuántos están por encima del promedio
    Contar números pares e impares en un rango
    Generar una tabla de multiplicar
    Salir
Debe repetirse hasta que el usuario elija la opción “Salir”.*/

function Ejercicio12() {
    let continuar = true;

    while (continuar) {
        let opcion = parseInt(prompt(
            "=== MENÚ DE OPCIONES ===\n" +
            "1. Calcular estadísticas de notas\n" +
            "2. Contar números pares e impares en un rango\n" +
            "3. Generar una tabla de multiplicar\n" +
            "4. Salir\n\n" +
            "Seleccione una opción:"
        ));
        
        switch (opcion) {
            case 1:
                let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));
                
                if (isNaN(cantidadNotas) || cantidadNotas <= 0) {
                    alert("Error. Ingrese un número válido mayor a 0.");
                    break;
                }

                let notas = [];

                for (let i = 1; i <= cantidadNotas; i++) {
                    let nota = parseFloat(prompt(`Ingrese la nota ${i} (0-20):`));

                    if (isNaN(nota) || nota < 0 || nota > 20) {
                        alert("Error. Ingrese una nota válida entre 0 y 20.");
                        i--;
                        continue;
                    }

                    notas.push(nota);
                }

                let opcion2 = parseInt(prompt(
                    "=== ESTADÍSTICAS DE NOTAS ===\n" +
                    "1. Calcular promedio\n" + 
                    "2. Valor máximo\n" +
                    "3. Valor mínimo\n" + 
                    "4. Cantidad de números pares e impares\n" +
                    "5. Alumnos encima del promedio\n" +
                    "6. Salir de opción 1\n\n" +
                    "Seleccione una opción:"
                ));

                switch (opcion2) {
                    case 1:
                        let suma = 0;
                        for (let nota of notas) {
                            suma += nota;
                        }
                        let promedio = suma / cantidadNotas;
                        alert(`El promedio es: ${promedio.toFixed(2)}`);
                        break;

                    case 2:
                        let mayor = notas[0];
                        for (let nota of notas) {
                            if (nota > mayor) mayor = nota;
                        }
                        alert(`El valor máximo es: ${mayor}`);
                        break;

                    case 3:
                        let menor = notas[0];
                        for (let nota of notas) {
                            if (nota < menor) menor = nota;
                        }
                        alert(`El valor mínimo es: ${menor}`);
                        break;

                    case 4:
                        let pares = 0;
                        let impares = 0;
                        for (let nota of notas) {
                            if (nota % 2 === 0) pares++;
                            else impares++;
                        }
                        alert(`Notas pares: ${pares}\nNotas impares: ${impares}`);
                        break;

                    case 5:
                        let sumaTotal = 0;
                        for (let nota of notas) {
                            sumaTotal += nota;
                        }
                        let promedioTotal = sumaTotal / cantidadNotas;
                        let encimaPromedio = 0;
                        for (let nota of notas) {
                            if (nota > promedioTotal) encimaPromedio++;
                        }
                        alert(`Promedio: ${promedioTotal.toFixed(2)}\nAlumnos encima del promedio: ${encimaPromedio}`);
                        break;

                    case 6:
                        alert("Saliendo de la opción 1...");
                        break;

                    default:
                        alert("Opción no válida");
                }
                break;

            case 2:
                let num1 = parseInt(prompt("Ingrese el primer número del rango (a):"));
                let num2 = parseInt(prompt("Ingrese el segundo número del rango (b):"));

                if (isNaN(num1) || isNaN(num2)) {
                    alert("Error. Ingrese números válidos.");
                    break;
                }

                let a = Math.min(num1, num2);
                let b = Math.max(num1, num2);
                
                let par = 0;
                let impar = 0;

                for (let i = a; i <= b; i++) {
                    if (i % 2 === 0) par++;
                    else impar++;
                }
                
                alert(
                    `Rango [${a}, ${b}]\n` + 
                    `Cantidad de números pares: ${par}\n` +
                    `Cantidad de números impares: ${impar}`
                );
                break;
            
            case 3:
                let num = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));

                if (isNaN(num)) {
                    alert("Error. Número no válido.");
                    break;
                }

                let tabla = `=== TABLA DE MULTIPLICAR DEL ${num} ===\n`;
                for (let i = 1; i <= 12; i++) {
                    tabla += `${num} x ${i} = ${num * i}\n`;
                }
                
                alert(tabla);
                break;

            case 4:
                alert("Saliendo...");
                continuar = false;
                break;

            default:
                alert("Opción no válida. Por favor seleccione entre 1 y 4.");
        }
    }
}

/*13. Un supermercado desea una app que simule un carrito de compras muy simple
El usuario puede agregar productos uno por uno, indicando sólo su precio, hasta que decida no continuar
Al terminar, mostrar:
    El total parcial a pagar
    Si el total supera 100, mostrar el mensaje "Tiene un descuento del 10%" y aplicar el descuento
    Si el total está entre 50 y 100, mostrar "Gana un cupón de 5%" y aplicar el descuento
    Si el total es menor que 50, mostrar "No aplica descuento"
    Finalmente, mostrar el total final a pagar*/

function Ejercicio13() {
    let continuar = true;
    let sumaPrecios = 0;
    let mensaje = ``;

    while (continuar) {
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));

        if (isNaN(precio) || precio <= 0) {
            alert("Error. Debe ingresar un número positivo.");
            continue;
        }

        sumaPrecios += precio;

        let seguir = prompt("¿Desea continuar agregando productos? (Sí/No)").toLowerCase();

        if (seguir === "si" || seguir === "sí") {
            continuar = true;
        } else {
            continuar = false;
        }
    }
    
    let precioOriginal = sumaPrecios;
    
    if (sumaPrecios > 100) {
        sumaPrecios *= 0.9;
        mensaje = `Tiene un descuento del 10%\nPrecio original: $${precioOriginal.toFixed(2)}\nPrecio con descuento: $${sumaPrecios.toFixed(2)}`;
    } else if (sumaPrecios >= 50) {
        sumaPrecios *= 0.95;
        mensaje = `Gana un cupón del 5%\nPrecio original: $${precioOriginal.toFixed(2)}\nPrecio con descuento: $${sumaPrecios.toFixed(2)}`;
    } else {
        mensaje = `No aplica descuento\nPrecio original: $${precioOriginal.toFixed(2)}`;
    }

    alert(mensaje);
}

/*14. Mismo ejercicio anterior, pero con un límite en su presupuesto. La app no deberá permitir que se pase del presupuesto y no
deberá considerar el último producto*/

function Ejercicio14() {
    let continuar = true;
    let sumaPrecios = 0;
    let mensaje = ``;
    let presupuesto = parseFloat(prompt("Ingrese su presupuesto:"));

    if (isNaN(presupuesto) || presupuesto <= 0) {
        alert("Error. El presupuesto debe ser positivo.");
        return;
    }

    let presupuestoRestante = presupuesto;

    while (continuar) {
        let precio = parseFloat(prompt("Ingrese el precio del producto:"));

        if (isNaN(precio) || precio <= 0) {
            alert("Error. Debe ingresar un número positivo.");
            continue;
        }

        if (precio > presupuestoRestante) {
            alert(`El producto excede su presupuesto restante de $${presupuestoRestante.toFixed(2)}. No se agregará este producto.`);
            break;
        }

        sumaPrecios += precio;
        presupuestoRestante -= precio;

        let seguir = prompt("¿Desea continuar agregando productos? (Sí/No)").toLowerCase();

        if (seguir === "si" || seguir === "sí") {
            continuar = true;
        } else {
            continuar = false;
        }
    }
    
    let precioOriginal = sumaPrecios;
    
    if (sumaPrecios > 100) {
        sumaPrecios *= 0.9;
        mensaje = `Tiene un descuento del 10%\nPrecio original: $${precioOriginal.toFixed(2)}\nPrecio con descuento: $${sumaPrecios.toFixed(2)}\nPresupuesto restante: $${presupuestoRestante.toFixed(2)}`;
    } else if (sumaPrecios >= 50) {
        sumaPrecios *= 0.95;
        mensaje = `Gana un cupón del 5%\nPrecio original: $${precioOriginal.toFixed(2)}\nPrecio con descuento: $${sumaPrecios.toFixed(2)}\nPresupuesto restante: $${presupuestoRestante.toFixed(2)}`;
    } else {
        mensaje = `No aplica descuento\nPrecio total: $${precioOriginal.toFixed(2)}\nPresupuesto restante: $${presupuestoRestante.toFixed(2)}`;
    }

    alert(mensaje);
}

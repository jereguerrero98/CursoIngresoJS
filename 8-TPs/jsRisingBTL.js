/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadocivil;
    var sueldobruto;
    var legajo;
    var nacionalidad;

    edad=prompt("Ingrese edad");
    while(edad >=18&&edad <=90||isNaN(edad))
{
    alert("Valor de edad incorrecta");
}

while(sexo !="f" && sexo != "m")
{
    alert("Valor de sexo incorrecto");
    sexo=prompt("Ingrese el sexo");
    sexo=sexo.toLowerCase();
}

while(estadocivil>1||estadocivil<4 && isNaN(estadocivil))
{
    alert("Valor de estado civil incorrecto");
    estadocivil=prompt("Ingrese estado civil");
    estadocivil=estadocivil.toLowerCase();
}

while(sueldobruto>8000)
{ 
    alert("Valor de sueldro bruto incorrecto");
    sueldobruto=prompt("Ingrese sueldo bruto");
}

legajo=prompt(legajo);

while(isNaN(legajo)){

}

white(nacionalidad!=A && nacionalidad!=E && nacionalidad!=N)
{ 
    alert("Valor de nacionalidad incorrecto");
    nacionalidad=prompt("Ingrese nacionalidad");
    nacionalidad=nacionalidad.toLowerCase();
    }



}

document.getElementById("Edad").value=edad;
document.getElementById("Sexo").value=edad;
document.getElementById("estadoCivil").value=estadocivil;
document.getElementById("Legajo").value=legajo;
document.getElementById("Nacionalidad").value=nacionalidad;

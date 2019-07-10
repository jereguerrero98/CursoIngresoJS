function mostrar()
{
//tomo la edad  

    var edad; 
    var ecivil;
    
    edad=document.getElementById("edad").value; 

    ecivil=document.getElementById("estadoCivil").value;

    if(edad < 18 && ecivil != "Soltero") 
    
    alert ('Es muy pequeño para NO ser soltero.');

}

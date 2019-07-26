function mostrar()
{
    {
        var planeta;
    
        planeta=prompt("Ingrese un planeta del sistema solar");
    
        switch(planeta)
        {
            case "mercurio":
                alert("acá hace más calor");
            break;
            case "venus":
                alert("acá hace más calor");
            break;
            case "tierra":
                alert("acá vivimos");
            break;
            case "marte":
                alert("acá hace más frio");
            break;
            case "júpiter":
                alert("acá hace más frio");
            break;
            case "saturno":
                alert("acá hace más frio");
            break;
            case "urano":
                alert("acá hace más frio");
            break;
            case "neptuno":
                alert("acá hace más frio");
            break;
            case "plutón":
                alert("acá hace más frio");
            break;
            default:
                alert("el nombre del planeta ingresado es incorrecto");
            break;
        }
    }
}

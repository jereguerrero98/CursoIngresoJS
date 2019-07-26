function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio=prompt("Ingrese el precio");
    descuento=prompt("Ingrese el porcentaje de descuento");

    precio=parseFloat(precio);
    precio=parseFloat(precio);

    precioFinal=precio*(1-(descuento/100));

    document.getElementById('elPrecioFinal').value=precioFinal;
}

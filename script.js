let btncantidad = document.getElementById('botonCompra');
btncantidad.addEventListener('click', calculoValor);


function calculoValor() {
    let cantidad = Number(document.querySelector('#cantiCompra').value);
    const valorCompu = 820000;
    let total = valorCompu * cantidad;



    document.getElementById('valor').value = total;
    let totaldesc = 0;
    let desc = 0;

    const desc15 = 0.15;
    const desc25 = 0.25;
    const desc35 = 0.35;

    if (total >= 1640000 && total <= 3280000) {
        desc = total * desc15;
        document.getElementById('descuento').value = desc;

        totaldesc = total - desc;


        document.getElementById('totdesc').value = totaldesc;
        alert('El descuento es de 15$')
    }
    else
        if (total > 3280000 && total <= 6560000) {
            desc = total * desc25;
            document.getElementById('descuento').value = desc;

            totaldesc = total - (total * desc25);


            document.getElementById('totdesc').value = totaldesc;
            alert('El descuento es de 25$')

        }
        else
            if (total > 6560000 && total <= 9840000) {
                desc = total * desc35;
                document.getElementById('descuento').value = desc;

                totaldesc = total - (total * desc35);


                document.getElementById('totdesc').value = totaldesc;
                alert('El descuento es de 35$')

            }
            else
                if (total >= 9840000) {
                    alert('Lo lamentamos no hay descuento en este caso')

                }

}
function calcularEstetica() {
    let peso = parseInt(document.getElementById("peso").value);
    let servicio = parseInt(document.getElementById("servicio").value);

    let total = peso * 5 + servicio;

    document.getElementById("resultado").innerText =
        "Total: $" + total;
}

function calcularPension() {
    let dias = parseInt(document.getElementById("dias").value);
    let tipo = parseInt(document.getElementById("tipo").value);

    let total = dias * tipo;

    document.getElementById("resultado").innerText =
        "Total: $" + total;
}

function calcularCompra() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let producto = parseInt(document.getElementById("producto").value);

    let total = cantidad * producto;

    document.getElementById("resultado").innerText =
        "Total: $" + total;
}

function agendarCita() {
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;

    document.getElementById("resultado").innerText =
        "Cita agendada para " + nombre + " el día " + fecha;
}
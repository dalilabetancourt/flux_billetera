//deposit.html//

//Gestinal saldo//

$(document).ready(function () {

  let saldoActual = 400;

  $("#depositbtn").on("click", function () {
    let monto = Number($("#monto").val());

    if (monto <= 0 || isNaN(monto)) {
      alert("Ingresa un monto valido");
      return;
    }

    saldoActual += monto;
    $("#saldo").text("$" + saldoActual);
    $("#monto").val("");
  });

  $("#retirarbtn").on("click", function () {
    let monto = Number($("#monto").val());

    if (monto <= 0 || isNaN(monto)) {
      alert("Ingresa un monto valido");
      return;
    }

    if (monto > saldoActual) {
      alert("Saldo insuficiente");
      return;
    }

    saldoActual -= monto;
    $("#saldo").text("$" + saldoActual);
    $("#monto").val("");
  });

});


//Eventos en botones//

$(document).ready(function () {

  $("#depositbtn").click(function () {
    $("#alert-container").html(
      "<div class='alert alert-success'>Realizar deposito</div>"
    );
  });

  $("#retirarbtn").click(function () {
    $("#alert-container").html(
      "<div class='alert alert-warning'>Retirar deposito</div>"
    );
  });

});
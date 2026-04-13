document.addEventListener("DOMContentLoaded", function () {

 /// index.html validacíon de correo
  let form = document.getElementById("loginForm");
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");
  let mensajeP = document.getElementById("mensaje");

  let email_correcto = "admi@gmail.com";  //credenciales//
  let password_correcta = "1234";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = emailInput.value;
    let password = passwordInput.value;

    if (email === email_correcto && password === password_correcta) {
      mensajeP.textContent = "Inicio de sesion exitoso";
      mensajeP.style.color = "green";

      window.location.href = "menu.html";
    } else {
      mensajeP.textContent = "Credenciales incorrectas";
      mensajeP.style.color = "red";
    }
  });

});



///MENU PRINCIPAL//

let btnDeposit =document.getElementById("btn-deposit");
let btnSend= document.getElementById("btn-send");
let btnTrasactions = document.getElementById("btn-trasactions");

// Boton depositar//

if (btnDeposit) {
btnDeposit.addEventListener("click", function (e) {
  e.preventDefault();

  alert ("Redirigiendo a Depositar");

  window.location.href ="deposit.html"
})};

//Enviar Dinero//

if(btnSend){
btnSend.addEventListener("click", function(e){
  e.preventDefault();
  alert("Redirigiendo a Trasferir")
  window.location.href = "sendmoney.html"
})};

//Boton Transacciones/

if(btnTrasactions){
btnTrasactions.addEventListener("click", function(e) {
e.preventDefault();
alert("Mostrando ultimos movimientos")
window.location.href= "transactions.html"

  
})}



///sendmoney ///


(function () {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');

    }, false);
  });
})();

//sendemoney//

let btnGdatos = document.getElementById ("btnGdatos")
if(btnGdatos){
btnGdatos.addEventListener("click", function(e){
  e.preventDefault();
  alert("Datos guardados")
  window.location.href= "transactions.html"
})};    
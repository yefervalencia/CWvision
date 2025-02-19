function capturar() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "") {
    alert("El nombre es obligatorio");
    document.getElementById("name").focus();
  } else if (email == "") {
    alert("el email es obligatorio");
    document.getElementById("email").focus();
  } else if (message == "") {
    alert("el mensaje es obligatoria");
    document.getElementById("message").focus();
  } else {
    alert("gracias por tu mensaje");
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);
  }
}

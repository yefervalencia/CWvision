function capturar(){
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  if(email==""){
    alert("el email es obligatorio");
    document.getElementById("email").focus();
  }else if(password==""){
    alert("la contrasena es obligatoria");
    document.getElementById("password").focus();
  }else{
    alert("el usuario se logeo satisfactoreamente");
    console.log("user: "+email);
    console.log("password: "+password);
  }

}
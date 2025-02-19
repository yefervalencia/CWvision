function capturar(){
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  var verifyPassword=document.getElementById("verifyPassword").value;
  var role=document.getElementById("role").value;
  if(name==""){
    alert("El nombre es obligatorio");
    document.getElementById("name").focus();
  }else if(email==""){
    alert("el email es obligatorio");
    document.getElementById("email").focus();
  }else if(password==""){
    alert("la contrasena es obligatoria");
    document.getElementById("password").focus();
  }else if(verifyPassword==""){
    alert("la verificacion de la contrasena es obligatoria");
    document.getElementById("verifyPassword").focus();
  }else if(role==""){
    alert("El role es obligatorio");
    document.getElementById("role").focus();
  }else if(password != verifyPassword){
    alert("la contrasena y su verificacion son diferentes");
  }else{
    alert("el usuario se registro satisfactoreamente");
    console.log("nombre: "+name);
    console.log("email: "+email);
    console.log("password: "+password);
    console.log("verify password: "+verifyPassword);
    console.log("role: "+role);
  }
}
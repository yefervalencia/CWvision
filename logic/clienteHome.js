document.addEventListener("DOMContentLoaded", function () {
    // Mostrar alerta de bienvenida
    Swal.fire({
      title: "Bienvenido a CWvision",
      text: "Explora el progreso de tu proyecto en tiempo real.",
      icon: "success",
      confirmButtonText: "Continuar",
      confirmButtonColor: "#A61414",
    });
  
    // Animación de la barra de progreso
    const progressFill = document.getElementById("progress-fill");
    progressFill.style.width = "0%";
    setTimeout(() => {
      progressFill.style.width = "75%";
    }, 500);
  });
  
  // Función para desplazarse a una sección específica
  function goToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }
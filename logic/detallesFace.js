document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const phase = urlParams.get("phase");
  
    const phaseData = {
      "Demolición": {
        title: "Demolición",
        status: "Completado",
        start: "01/01/2025",
        end: "15/01/2025",
        description: "Retiro de estructuras antiguas.",
        images: [
          "./images/imagenbase.png",
          "./images/imagenbase.png",
          "./images/imagenbase.png",
        ],
      },
      "Instalación Eléctrica": {
        title: "Instalación Eléctrica",
        status: "En progreso",
        start: "16/01/2025",
        end: "28/02/2025",
        description: "Cableado y conexión eléctrica.",
        images: [
          "./images/imagenbase.png",
          "./images/imagenbase.png",
          "./images/imagenbase.png",
        ],
      },
      "Pintura": {
        title: "Pintura",
        status: "Pendiente",
        start: "01/03/2025",
        end: "15/03/2025",
        description: "Aplicación de pintura interior y exterior.",
        images: [
          "./images/imagenbase.png",
          "./images/imagenbase.png",
          "./images/imagenbase.png",
        ],
      },
    };
  
    if (phase && phaseData[phase]) {
      // Actualizar detalles de la fase
      document.getElementById("phase-title").textContent = phaseData[phase].title;
      document.getElementById("phase-status").textContent = phaseData[phase].status;
      document.getElementById("phase-start").textContent = phaseData[phase].start;
      document.getElementById("phase-end").textContent = phaseData[phase].end;
      document.getElementById("phase-description").textContent = phaseData[phase].description;
  
      // Cargar imágenes de la galería
      const imageGrid = document.getElementById("clear-grid");
      phaseData[phase].images.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = `Imagen de ${phaseData[phase].title}`;
        imageGrid.appendChild(imgElement);
      });
    } else {
      // Redirigir si no se encuentra la fase
      window.location.href = "../index.html";
    }
  });
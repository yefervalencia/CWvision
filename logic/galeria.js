document.addEventListener("DOMContentLoaded", function () {
    // Mostrar alerta de bienvenida
    Swal.fire({
      title: "Galería de Progreso",
      text: "Explora todas las imágenes de tu proyecto.",
      icon: "info",
      confirmButtonColor: "#A61414",
    });
  
    // Cargar galería inicial
    loadGallery("all");
  });
  
  const galleryData = {
    "Demolición": [
      { src: "./images/imagenbase.png", desc: "Demolición - 10/01/2025" },
      { src: "./images/imagenbase.png", desc: "Demolición - 12/01/2025" },
    ],
    "Instalación Eléctrica": [
      { src: "./images/imagenbase.png", desc: "Instalación Eléctrica - 20/01/2025" },
      { src: "./images/imagenbase.png", desc: "Instalación Eléctrica - 22/01/2025" },
    ],
    "Pintura": [
      { src: "./images/imagenbase.png", desc: "Preparación Pintura - 25/02/2025" },
      { src: "./images/imagenbase.png", desc: "Aplicación Pintura - 28/02/2025" },
    ],
  };
  
  function loadGallery(filter) {
    const galleryList = document.getElementById("gallery-list");
    galleryList.innerHTML = "";
  
    for (const phase in galleryData) {
      if (filter === "all" || filter === phase) {
        galleryData[phase].forEach((item) => {
          const card = document.createElement("div");
          card.className = "card";
          card.onclick = () => enlargeImage(item.desc, item.src);
  
          const img = document.createElement("img");
          img.src = item.src;
          img.alt = item.desc;
  
          const desc = document.createElement("p");
          desc.textContent = item.desc;
  
          card.appendChild(img);
          card.appendChild(desc);
          galleryList.appendChild(card);
        });
      }
    }
  }
  
  function filterGallery() {
    const filter = document.getElementById("filter-phase").value;
    loadGallery(filter);
  }
  
  function enlargeImage(description, src) {
    Swal.fire({
      title: description,
      imageUrl: src,
      imageWidth: "80%",
      imageAlt: description,
      confirmButtonColor: "#A61414",
    });
  }
document.addEventListener("DOMContentLoaded", function () {
    // Mostrar alerta de bienvenida
    Swal.fire({
      title: "Historial de Cambios",
      text: "Consulta el registro de actualizaciones de tu proyecto.",
      icon: "info",
      confirmButtonColor: "#A61414",
    });
  
    // Cargar historial inicial
    loadHistory("all");
  });
  
  const historyData = {
    "Demolición": [
      { change: "Fase iniciada", by: "Juan Pérez", desc: "Inicio de demolición de paredes", date: "01/01/2025 08:00", img: "./images/imagenbase.png" },
      { change: "Demolición completada", by: "Juan Pérez", desc: "Retiro de estructuras antiguas", date: "15/01/2025 17:00", img: "./images/imagenbase.png" },
    ],
    "Instalación Eléctrica": [
      { change: "Cableado instalado", by: "Ana Gómez", desc: "Instalación de cables principales", date: "18/01/2025 14:30", img: "./images/imagenbase.png" },
      { change: "Pruebas eléctricas", by: "Ana Gómez", desc: "Verificación de circuitos", date: "25/01/2025 10:00", img: "./images/imagenbase.png" },
    ],
    "Pintura": [],
  };
  
  function loadHistory(filter) {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";
  
    for (const phase in historyData) {
      if (filter === "all" || filter === phase) {
        historyData[phase].forEach((item) => {
          const card = document.createElement("div");
          card.className = "card";
  
          const img = document.createElement("img");
          img.src = item.img;
          img.alt = `Imagen de ${item.change}`;
          img.style.width = "100px";
          img.style.borderRadius = "8px";
          img.style.marginBottom = "10px";
  
          const change = document.createElement("p");
          change.innerHTML = `<strong>Cambio:</strong> ${item.change}`;
  
          const by = document.createElement("p");
          by.innerHTML = `<strong>Responsable:</strong> ${item.by}`;
  
          const desc = document.createElement("p");
          desc.innerHTML = `<strong>Descripción:</strong> ${item.desc}`;
  
          const date = document.createElement("p");
          date.innerHTML = `<strong>Fecha:</strong> ${item.date}`;
  
          card.appendChild(img);
          card.appendChild(change);
          card.appendChild(by);
          card.appendChild(desc);
          card.appendChild(date);
          historyList.appendChild(card);
        });
      }
    }
  }
  
  function filterHistory() {
    const filter = document.getElementById("filter-phase").value;
    loadHistory(filter);
  }
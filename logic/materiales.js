document.addEventListener("DOMContentLoaded", function () {
    // Mostrar alerta de bienvenida
    Swal.fire({
      title: "Materiales Utilizados",
      text: "Revisa los materiales empleados en tu proyecto.",
      icon: "info",
      confirmButtonColor: "#A61414",
    });
  
    // Cargar materiales iniciales
    loadMaterials("all");
  });
  
  const materialsData = {
    "Demolición": [
      { name: "Martillo", qty: "5", desc: "Martillos para demolición", date: "05/01/2025", icon: "./images/imagenbase.png" },
      { name: "Casco de Seguridad", qty: "10", desc: "Cascos para protección", date: "05/01/2025", icon: "./images/imagenbase.png" },
    ],
    "Instalación Eléctrica": [
      { name: "Cable Eléctrico", qty: "100m", desc: "Cable de cobre 12 AWG", date: "18/01/2025", icon: "./images/imagenbase.png" },
      { name: "Interruptores", qty: "15", desc: "Interruptores de luz", date: "18/01/2025", icon: "./images/imagenbase.png" },
    ],
    "Pintura": [
      { name: "Pintura Blanca", qty: "20L", desc: "Pintura acrílica blanca", date: "25/02/2025", icon: "./images/imagenbase.png" },
      { name: "Rodillos", qty: "8", desc: "Rodillos para pintura", date: "25/02/2025", icon: "./images/imagenbase.png" },
    ],
  };
  
  function loadMaterials(filter) {
    const materialList = document.getElementById("material-list");
    materialList.innerHTML = "";
  
    for (const phase in materialsData) {
      if (filter === "all" || filter === phase) {
        materialsData[phase].forEach((item) => {
          const card = document.createElement("div");
          card.className = "card";
  
          const img = document.createElement("img");
          img.src = item.icon;
          img.alt = item.name;
          img.className = "material-icon";
  
          const name = document.createElement("h3");
          name.textContent = item.name;
  
          const qty = document.createElement("p");
          qty.innerHTML = `<strong>Cantidad:</strong> ${item.qty}`;
  
          const desc = document.createElement("p");
          desc.innerHTML = `<strong>Descripción:</strong> ${item.desc}`;
  
          const date = document.createElement("p");
          date.innerHTML = `<strong>Fecha:</strong> ${item.date}`;
  
          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(qty);
          card.appendChild(desc);
          card.appendChild(date);
          materialList.appendChild(card);
        });
      }
    }
  }
  
  function filterMaterials() {
    const filter = document.getElementById("filter-phase").value;
    loadMaterials(filter);
  }
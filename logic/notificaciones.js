document.addEventListener("DOMContentLoaded", function () {
    // Mostrar alerta de bienvenida
    Swal.fire({
      title: "Notificaciones",
      text: "Revisa las actualizaciones importantes de tu proyecto.",
      icon: "info",
      confirmButtonColor: "#A61414",
    });
  
    // Cargar notificaciones
    loadNotifications();
  });
  
  const notificationsData = [
    {
      type: "urgent",
      message: "Nueva Fase Iniciada - Instalación Eléctrica comenzó el 16/01/2025.",
      read: false,
    },
    {
      type: "info",
      message: "Material Agregado - Cable Eléctrico añadido el 18/01/2025.",
      read: false,
    },
    {
      type: "success",
      message: "Fase Completada - Demolición finalizó el 15/01/2025.",
      read: true,
    },
  ];
  
  function loadNotifications() {
    const notificationList = document.getElementById("notification-list");
    notificationList.innerHTML = "";
  
    notificationsData.forEach((notification) => {
      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("data-read", notification.read);
  
      const icon = document.createElement("span");
      icon.className = `notification-icon ${notification.type}`;
      icon.textContent = notification.type === "urgent" ? "!" : notification.type === "info" ? "i" : "✔";
  
      const message = document.createElement("p");
      message.innerHTML = `<strong>${notification.type === "urgent" ? "Urgente" : notification.type === "info" ? "Información" : "Éxito"}</strong> - ${notification.message}`;
  
      card.appendChild(icon);
      card.appendChild(message);
  
      if (!notification.read) {
        const button = document.createElement("button");
        button.textContent = "Marcar como Leída";
        button.onclick = () => markAsRead(card);
        card.appendChild(button);
      }
  
      notificationList.appendChild(card);
    });
  }
  
  function markAsRead(card) {
    card.setAttribute("data-read", "true");
    const button = card.querySelector("button");
    if (button) button.remove();
    card.style.opacity = "0.7";
  }
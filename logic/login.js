const url = "http://localhost:3000/api/v1";

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("roleSelector").value;

  // Verifica que los campos no estén vacíos
  if (!email || !password || !role) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  fetch(`${url}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, role }),
  })
    .then((response) => {
      console.log("Respuesta del servidor:", response); // Depuración
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Datos recibidos:", data); // Depuración
      if (data.error) {
        alert(data.error);
      } else {
        alert("Login successful");
        if (role === "gestor") {
          window.location.href = "GestorScreens/home.html";
        } else {
          window.location.href = "clienteHome.html";
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error al conectar con el servidor. Verifica tu conexión o intenta más tarde.");
    });
}
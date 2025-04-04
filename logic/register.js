const url = 'http://localhost:3000/api/v1';

function showRoleSpecificFields() {
  const role = document.getElementById('role').value;
  const clientFields = document.getElementById('clientFields');
  const gestorFields = document.getElementById('gestorFields');

  if (role === 'client') {
    clientFields.style.display = 'block';
    gestorFields.style.display = 'none';
  } else if (role === 'gestor') {
    clientFields.style.display = 'none';
    gestorFields.style.display = 'block';
  } else {
    clientFields.style.display = 'none';
    gestorFields.style.display = 'none';
  }
}

function capturar() {
  const role = document.getElementById('role').value;
  const cedula = document.getElementById('cc').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const verifyPassword = document.getElementById('verifyPassword').value;

  // Verifica que las contraseñas coincidan
  if (password !== verifyPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Crea el objeto base con los datos comunes
  let data = {
    cc: cedula,
    name: name,
    email: email,
    password: password,
    role_id: role === 'client' ? 3 : 2 // Asumiendo que 3 es para clientes y 2 para gestores
  };

  // Agrega los campos específicos según el rol
  if (role === 'client') {
    data.phone = document.getElementById('clientPhone').value;
    data.address = document.getElementById('clientAddress').value;
  } else if (role === 'gestor') {
    data.phone = document.getElementById('gestorPhone').value;
    data.company_name = document.getElementById('companyName').value;
  }

  console.log("Datos a enviar:", data); // Depuración

  // Envía la solicitud al backend
  fetch(`${url}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(errorData => {
          throw new Error(errorData.error || 'Error en la solicitud');
        });
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        alert('Registro exitoso');
        window.location.href = 'login.html';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al registrar. Verifica los datos e intenta nuevamente.');
    });
}
class GestorNavbar extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback(){
    this.style();
    this.render();
  }
  style(){
    this.innerHTML =`
    <style>
      .navbar {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px 40px;
}

.image {
  flex: 1;
}

.image img {
  width: 158px;
  height: 128px;
  aspect-ratio: 79/64;
}

.buttons {
  display: flex;
  gap: 20px;
  margin-right: 100px;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 51px;
  border-radius: 4px;
  border: 1px solid #A61414;
  background: #FFF;
  color: #A61414;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: #A61414;
  color: #FFF;
}

@media screen and (max-width: 768px) {
  .navbar {
      flex-direction: column;
      align-items: center;
      height: auto;
  }

  .image {
      margin-bottom: 30px;
      text-align: center;
  }

  .buttons {
      flex-direction: column;
      gap: 30px;
      margin-right: 0;
  }
}

      </style>
    `
  }
  render(){
    this.innerHTML += `
    <nav class="navbar">
        <div class="image">
            <img src="../../images/logo.png" alt="Logo">
        </div>
        <div class="buttons">
            <a href="../../GestorScreens/home.html" class="nav-button">Obras Asignadas</a>
            <a href="../../GestorScreens/loadImages.html" class="nav-button">Gestionar Equipos</a>
            <a href="../../GestorScreens/history.html" class="nav-button">Reportes</a>
            <a href="../../index.html" class="nav-button">Cerrar sesion</a>
        </div>
    </nav>
    `
  }
}

customElements.define('gestor-navbar', GestorNavbar)

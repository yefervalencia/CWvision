class NavigationBarCliente extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.style();
      this.render();
    }
  
    style() {
      this.innerHTML = `
        <style>
          nav {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f2f2f2;
          }
  
          nav .image {
            width: 15%;
            height: auto;
            margin: auto 10px;
          }
  
          nav .image img {
            width: 158px;
            height: 128px;
            flex-shrink: 0;
            aspect-ratio: 79/64;
            align-self: flex-start;
          }
  
          nav .buttons {
            width: 65%;
            height: auto;
            margin: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
  
          nav .auth {
            width: 20%;
            height: auto;
            margin: 10px 10px;
            display: flex;
            gap: 24px;
            justify-content: flex-end;
            align-items: center;
          }
  
          nav .auth .login {
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: #A61414;
            text-decoration: none;
          }
  
          nav .auth .login:hover {
            text-decoration: underline;
          }
  
          nav button {
            display: flex;
            width: 140px;
            height: 51px;
            padding: 17px 30px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            flex-shrink: 0;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            border-radius: 4px;
            border: 1px solid #A61414;
            background: #FFF;
            color: #A61414;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
          }
  
          nav button a {
            color: #A61414;
            text-decoration: none;
            transition: all 0.3s ease;
          }
  
          nav button:hover {
            background: #A61414;
            color: #FFF;
          }
  
          nav button:hover a {
            color: #FFF;
          }
  
          nav .auth button {
            height: 56px;
            padding: 17px 30px;
            background: #A61414;
            color: #FFF;
            border: none;
          }
  
          nav .auth button a {
            color: #FFF;
          }
  
          nav .auth button:hover {
            background: #FFF;
            color: #A61414;
            border: 1px solid #A61414;
          }
  
          nav .auth button:hover a {
            color: #A61414;
          }
        </style>
      `;
    }
  
    render() {
      this.innerHTML += `
        <nav>
          <div class="image">
            <img src="./images/logo.png" alt="logo CWvision">
          </div>
          <div class="buttons">
            <button><a href="clienteHome.html">Home</a></button>
            <button><a href="galeria.html">Galería</a></button>
            <button><a href="materiales.html">Materiales</a></button>
            <button><a href="notificaciones.html">Notificaciones</a></button>
            <button><a href="historial.html">Historial</a></button>
          </div>
          <div class="auth">
            <a href="login.html" class="login">Cerrar Sesión</a>
            <button><a href="clienteHome.html">Mi Proyecto</a></button>
          </div>
        </nav>
      `;
    }
  }
  
  customElements.define('navigation-bar-cliente', NavigationBarCliente);
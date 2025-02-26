class FootPage extends HTMLElement {
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
      .footer-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: auto;
      }
      .footer-container div {
        flex: 1;
        margin: 10px;
      }
      .footer-container h2 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      .footer-container p, .footer-container ul {
        font-size: 14px;
        list-style: none;
        padding: 0;
      }
      .footer-container ul li {
        margin: 5px 0;
      }
      .footer-container a {
        color: white;
        text-decoration: none;
      }
      .footer-container a:hover {
        text-decoration: underline;
      }
      .footer-container img {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
    </style>
    `;
  }


  render() {
    this.innerHTML += `
    <div class="footer-container">
      <div class="about">
        <h2>Sobre Nosotros</h2>
        <p>
          Facilitamos el control visual de remodelaciones y obras de
          construcción, permitiendo a los clientes ver imágenes del proceso,
          materiales utilizados y avances detallados.
        </p>
      </div>
      <div class="developers">
        <h2>Desarrolladores</h2>
        <ul>
          <li>
            <img src="../../images/git-icon.png" alt="GitHub" />
            <a href="#">Dev 1</a>
          </li>
          <li>
            <img src="../../images/git-icon.png" alt="GitHub" />
            <a href="#">Dev 2</a>
          </li>
        </ul>
        <p>
          <img src="../../images/colombia-icon.png" alt="Colombia" /> +57 123 456
          7890 | +57 987 654 3210
        </p>
      </div>
      <div class="social">
        <h2>Síguenos</h2>
        <ul>
          <li>
            <a href="#"
              ><img src="../../images/tiktik-icon.png" alt="TikTok" />@CWvision</a
            >
          </li>
          <li>
            <a href="#"
              ><img
                src="../../images/instagran-icon.png"
                alt="Instagram"
              />@CWvision</a
            >
          </li>
          <li>
            <a href="#"
              ><img
                src="../../images/facebook-icon.png"
                alt="Facebook"
              />@CWvision</a
            >
          </li>
        </ul>
      </div>
    </div>
    `;
  }
}

customElements.define('foot-page', FootPage)

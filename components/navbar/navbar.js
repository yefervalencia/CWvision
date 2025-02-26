class NavigationBar extends HTMLElement{
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
      nav{
        width: 100%;
        height:100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f2f2f2;


        .image{
          width: 15%;
          height: auto;
          margin: auto 10px;
          img{
          width: 158px;
            height: 128px;
            flex-shrink: 0;
            aspect-ratio: 79/64;
            align-self: flex-start;
          }
        }
        .buttons{
          width: 65%;
          height: auto;
          margin: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .auth{
          width: 20%;
          height: auto;
          margin: 10px 10px;
          display: flex;
          gap: 24px;
          justify-content: flex-end;
          display: inline-flex;
          align-items: center;

          .login {
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: #A61414;
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
          
          button{
            display: flex;
            height: 56px;
            padding: 17px 30px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 4px;
            background: #A61414;
            color: #FFF;
            text-align: center;
            transition: all 0.3s ease; 
            &:hover {
              background: #FFF;
              color: #A61414;
            }
            a{
              color: #FFF;
              text-decoration: none;
              transition: all 0.3s ease; 
              &:hover{
                color: #A61414;
              }
            }
          }
        }
        button{
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
            background: var(--White-background, #FFF);
            a{
              color: #A61414;
              text-decoration: none;
              transition: all 0.3s ease; 
              &:hover{
                color: #FFF;
              }
            }
            color: #A61414;
            text-align: center;
            transition: all 0.3s ease; 
            &:hover {
              background: #A61414;
              color: #FFF;
            }
          }
        }
      </style>
    `
  }
  render(){
    this.innerHTML += `
    <nav>
      <div class="image">
      <img src="./images/logo.png" alt="logo CWvision">
      </div>
      <div class="buttons">
        <button><a href="index.html">Home</a></button>
        <button><a href="aboutUs.html">About Us</a></button>
        <button><a href="contactUs.html">Contact Us</a></button>
        <button><a href="FAQ.html">FAQ</a></button>
      </div>
      <div class="auth">
        <a href="login.html" class="login">Login</a>
        <button><a href="register.html">Get started</a></button>
      </div>
    </nav>
    `
  }
}

customElements.define('navigation-bar', NavigationBar)

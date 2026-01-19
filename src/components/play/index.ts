// IMPORTS CORRECTOS PARA PARCEL
const piedraImg = require("url:../../assets/images/piedra.jpg");
const papelImg = require("url:../../assets/images/papel.jpg");
const tijeraImg = require("url:../../assets/images/tijera.jpg");

class MyPlay extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });

  constructor() {
    super();
    this.render();
  }
  static get observedAttributes() {
    return ["play", "dimmed", "enlarged", "clickable", "rotate", "size"];
  }

  attributeChangedCallback(name: String, oldValue: String, newValue: String) {
    if (
      name === "play" ||
      name === "dimmed" ||
      name === "enlarged" ||
      name === "clickable"
    ) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const play = this.getAttribute("play") || "piedra";
    const dimmed = this.hasAttribute("dimmed");
    const enlarged = this.hasAttribute("enlarged");
    const clickable = this.hasAttribute("clickable");
    const scale = this.getAttribute("scale") || "1.0";
    const rotate = this.hasAttribute("rotate")? "rotate(180deg)" : "rotate(0deg)";

    const playImages: any = {
      piedra: piedraImg,
      papel: papelImg,
      tijera: tijeraImg,
    };

    this.shadow.innerHTML = `
      <style>
        .my-play {
          transition: all 0.3s ease;
          display: inline-block;
        }
        .dimmed {
          opacity: 0.5;
        }
        .enlarged {
          transform: scale(1.2);
        }

        .jugada-container {
          width: 80px; /* Ajusta al tamaño que necesites */
          height: 80px; /* Ajusta al tamaño que necesites */
          underflow: hidden; /* Oculta lo que sobresale */
          position: relative; /* para que bottom funcione bien */
          transform: ${rotate};
        }

        .jugada {
          position: absolute; /* Permite mover la imagen dentro del contenedor */
          bottom: 0; /* Alinea la imagen al fondo del contenedor */
          transition: transform 0.3s ease; /* Transición suave para la animación */
        }

        img {
          
          transform: scale(${scale});
        }
          
      </style>

      <div class='my-play ${dimmed ? "dimmed" : ""} jugada-container 
      ${enlarged ? "enlarged" : ""} scale'> 
        <img src="${playImages[play]}" alt="${play}" class = "jugada"/>
      </div>
    `;

    if (clickable) {
      this.addEventListener("click", () => {
        const img = this.shadow.querySelector(".jugada");
        img.style.transform = "translateY(-50px)"; // Ajusta la cantidad que sube
        this.dispatchEvent(
          new CustomEvent("play-selected", { detail: play, bubbles: true })
        ); // Emitir evento
      });
    }
  }
}

customElements.define("my-play", MyPlay);

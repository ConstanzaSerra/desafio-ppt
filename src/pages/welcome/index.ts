import "../../components/play/index";
import "../../components/button/index";
import "./index.css";

export function initWelcome(params: any) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class = "welcome">
        <div class = "text">Piedra Papel <span>ó</span> Tijera
        </div>
        <my-button width = 250>Empezar</my-button>
        <div class = "plays">
          <my-play play="piedra"></my-play>
          <my-play play="papel"></my-play>
          <my-play play="tijera"></my-play>
        </div>    
    </div>    
  `;

  const button = div.querySelector("my-button");

  button?.addEventListener("click", (e) => {
    e.preventDefault();
    params.goTo("/play");
  });

  return div;
}

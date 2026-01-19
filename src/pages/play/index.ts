import "../../components/play/index";
import "../../components/button/index";
import "./index.css";

export function initPlay(params: any) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class = "play">
        <div class = "textPlay">Presioná jugar
        y elegí: piedra, papel o tijera antes 
        de que pasen los 3 segundos.
        </div>
        <my-button width = 250>¡Jugar!</my-button>
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
    params.goTo("/count");
  });

  return div;
}

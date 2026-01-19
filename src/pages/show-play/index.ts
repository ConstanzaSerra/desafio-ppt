import { state } from "../../state";
import "./index.css";

export function initShowPlay(params: any) {
  const div = document.createElement("div");

  // Obtener el estado actual
  const currentState = state.getState();
  const myPlay = currentState.currentGame.myPlay;
  const computerPlay = currentState.currentGame.computerPlay;

  div.innerHTML = `
    <div class="plays-made">
    <div class="computerPlay">        
      <my-play play="${computerPlay}" rotate scale = 1.6></my-play>
    </div>
      <div class="myplay">        
        <my-play play="${myPlay}" scale = 1.6></my-play>
      </div>
    </div>
  `;

  //se guarda el resultado en el historial
  state.pushToHistory({myPlay, computerPlay})

  // Esperar 1 segundo y luego cambiar de página
  setTimeout(() => {
    params.goTo("/result");
  }, 1000);

  return div;
}

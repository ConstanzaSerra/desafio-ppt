import "../../components/star/index";
import { state } from "../../state";
import "./index.css";

export function initShowResult(params: any) {

  const currentState = state.getState();
  //se recupera el resultado obtenido en el paso anterior
  const result = state.result(
    currentState.currentGame.myPlay,
    currentState.currentGame.computerPlay
  );
  //se recuperan el total de partidas ganadas por cada jugador (usuario y maquina)
  const history = state.gamesWonByPlayer();

  const div = document.createElement("div");
  div.classList.add("result-containter");
  
    // Cambiar el color de fondo según el resultado
  if (result === "win") {
    document.body.style.backgroundColor = "#888949E5"; // Color para ganar
  } else if (result === "lose") {
    document.body.style.backgroundColor = "#894949E5"; // Color para perder
  } else {
    document.body.style.backgroundColor = "lightgrey"; // Color para empate
  }

  div.innerHTML = `
        <div class = "result-star">
            <my-star result = ${result}></my-star>
        </div>
                 
          <div class = "results-table">
            <div class = "score">Score</div>
            <div class = "score__values">
              <div>Vos: <span class="number">${history.countUsuario}</span></div>
              <div>Máquina: <span class="number">${history.countMaquina}</span></div>
            </div>

          
        </div>
        <div class = "result-button">
          <my-button width = 200 >Volver a jugar</my-button>
        </div>
    `;

  const button = div.querySelector("my-button");

  button?.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.style.backgroundColor = "";
    params.goTo("/welcome");
  });

  return div;
}

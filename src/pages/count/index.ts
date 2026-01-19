import "../../components/counter/index";
import { state } from "../../state";
import "./index.css";

export function initCount(params: any) {
  const div = document.createElement("div");
  div.classList.add("count");
  div.innerHTML = `    
    <countdown-timer></countdown-timer>
    <div class = "plays">
      <my-play play="piedra" clickable></my-play>
      <my-play play="papel" clickable></my-play>
      <my-play play="tijera" clickable></my-play>
    </div>       
  `;

  const plays = div.querySelectorAll("my-play");
  let selectedPlay = null;

  plays.forEach((play) => {
    play.addEventListener("play-selected", (event) => {
      selectedPlay = event.detail;
      console.log("Jugada desde el contador: ", selectedPlay);

      plays.forEach((p) => {
        if (p.getAttribute("play") !== selectedPlay) {
          p.setAttribute("dimmed", ""); // Agregar el atributo dimmed
        } else {
          p.removeAttribute("dimmed"); // Quitar el atributo dimmed del seleccionado
        }
      });
    });
  });

  const counter = div.querySelector("countdown-timer");
  counter?.addEventListener("animationend", () => {
    if (selectedPlay) {
      // Guardar la jugada del jugador en el estado
      state.setMove(selectedPlay);      

      params.goTo("/showplay"); // Avanzar a la página siguente si hay jugada seleccionada
    } else {
      params.goTo("/play"); // Volver a la página de inicio si no se seleccionó jugada
    }
  });

  return div;
}

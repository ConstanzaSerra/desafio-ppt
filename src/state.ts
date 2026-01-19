type Jugada = "piedra" | "papel" | "tijera";
type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};

const state = {
  data: {
    currentGame: { computerPlay: "" as Jugada, myPlay: "" as Jugada },
    history: [] as Game[],
  },

  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    console.log("Jugada desde el state: ", move);
    // Guardar la jugada del jugador
    this.setComputerMove(); // Llamar al método para calcular la jugada de la máquina
    this.setState(currentState); // Actualizar el estado
  },

  setComputerMove() {
    const moves: Jugada[] = ["piedra", "papel", "tijera"];
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    const currentState = this.getState();
    currentState.currentGame.computerPlay = randomMove; // Guardar la jugada de la máquina
    console.log("Jugada de la maquina: ", randomMove);
    this.setState(currentState); // Actualizar el estado
    console.log("Estado luego de definir jugada de la máquina: ", currentState);
  },

  pushToHistory(play: Game) {
    const currentState = this.getState();
    currentState.history.push(play); // Agregar la jugada al historial
    this.setState(currentState); // Actualizar el estado
  },

  result(myPlay: Jugada, computerPlay: Jugada) {
    if (myPlay === computerPlay) {
      return "draw";
    } else if (
      (myPlay === "tijera" && computerPlay === "papel") ||
      (myPlay === "piedra" && computerPlay === "tijera") ||
      (myPlay === "papel" && computerPlay === "piedra")
    ) {
      return "win";
    } else {
      return "lose";
    }
  },

  gamesWonByPlayer() {
    let countUsuario = 0;
    let countMaquina = 0;
    const currentState = this.getState();
    currentState.history.forEach((p) => {
      if (this.result(p.myPlay, p.computerPlay) == "win") {
        countUsuario++;
      } else if (this.result(p.myPlay, p.computerPlay) == "lose") {
        countMaquina++;
      }
    });

    return {countUsuario, countMaquina}
  },

  getState() {
    return this.data; // Método para obtener el estado actual
  },

  setState(newState: typeof this.data) {
    this.data = newState; // Método para establecer un nuevo estado
  },
};

export { state };

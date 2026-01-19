class e extends HTMLElement{static get observedAttributes(){return["time"]}constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.time=3,this.interval=null,this.render()}connectedCallback(){this.startCountdown()}attributeChangedCallback(e,t,a){"time"===e&&(this.time=parseInt(a),this.render())}startCountdown(){this.interval=setInterval(()=>{this.time>2?(this.time--,this.render()):(clearInterval(this.interval),this.dispatchEvent(new CustomEvent("animationend",{bubbles:!0})))},1e3)}render(){this.shadow.innerHTML=`
      <style>
        .container {
          position: relative;
          width: 120px;
          height: 120px;
        }

        svg {
          transform: rotate(-90deg);
        }

        .circle-bg {
          fill: none;
          stroke: #ddd;
          stroke-width: 10;
        }

        .circle-progress {
          fill: none;
          stroke: black;
          stroke-width: 10;
          stroke-dasharray: 314;
          stroke-dashoffset: 314;
          animation: draw 1s linear forwards;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        .number {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 36px;
          font-family: 'Odibee Sans', cursive;
          color: black;
        }
      </style>

      <div class="container">
        <svg width="120" height="120">
          <circle class="circle-bg" cx="60" cy="60" r="50" />
          <circle class="circle-progress" cx="60" cy="60" r="50" />
        </svg>
        <div class="number">${this.time}</div>
      </div>
    `}}customElements.define("countdown-timer",e);let t={data:{currentGame:{computerPlay:"",myPlay:""},history:[]},setMove(e){let t=this.getState();t.currentGame.myPlay=e,console.log("Jugada desde el state: ",e),this.setComputerMove(),this.setState(t)},setComputerMove(){let e=["piedra","papel","tijera"],t=e[Math.floor(Math.random()*e.length)],a=this.getState();a.currentGame.computerPlay=t,console.log("Jugada de la maquina: ",t),this.setState(a),console.log("Estado luego de definir jugada de la máquina: ",a)},pushToHistory(e){let t=this.getState();t.history.push(e),this.setState(t)},result:(e,t)=>e===t?"draw":"tijera"===e&&"papel"===t||"piedra"===e&&"tijera"===t||"papel"===e&&"piedra"===t?"win":"lose",gamesWonByPlayer(){let e=0,t=0;return this.getState().history.forEach(a=>{"win"==this.result(a.myPlay,a.computerPlay)?e++:"lose"==this.result(a.myPlay,a.computerPlay)&&t++}),{countUsuario:e,countMaquina:t}},getState(){return this.data},setState(e){this.data=e}};var a={};a=import.meta.resolve("ey0wk");var s={};s=import.meta.resolve("hAkpW");var r={};r=import.meta.resolve("4k1oe");class l extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["play","dimmed","enlarged","clickable","rotate","size"]}attributeChangedCallback(e,t,a){("play"===e||"dimmed"===e||"enlarged"===e||"clickable"===e)&&this.render()}connectedCallback(){this.render()}render(){let e=this.getAttribute("play")||"piedra",t=this.hasAttribute("dimmed"),l=this.hasAttribute("enlarged"),o=this.hasAttribute("clickable"),i=this.getAttribute("scale")||"1.0",n=this.hasAttribute("rotate")?"rotate(180deg)":"rotate(0deg)",d={piedra:a,papel:s,tijera:r};this.shadow.innerHTML=`
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
          width: 80px; /* Ajusta al tama\xf1o que necesites */
          height: 80px; /* Ajusta al tama\xf1o que necesites */
          underflow: hidden; /* Oculta lo que sobresale */
          position: relative; /* para que bottom funcione bien */
          transform: ${n};
        }

        .jugada {
          position: absolute; /* Permite mover la imagen dentro del contenedor */
          bottom: 0; /* Alinea la imagen al fondo del contenedor */
          transition: transform 0.3s ease; /* Transici\xf3n suave para la animaci\xf3n */
        }

        img {
          
          transform: scale(${i});
        }
          
      </style>

      <div class='my-play ${t?"dimmed":""} jugada-container 
      ${l?"enlarged":""} scale'> 
        <img src="${d[e]}" alt="${e}" class = "jugada"/>
      </div>
    `,o&&this.addEventListener("click",()=>{this.shadow.querySelector(".jugada").style.transform="translateY(-50px)",this.dispatchEvent(new CustomEvent("play-selected",{detail:e,bubbles:!0}))})}}customElements.define("my-play",l);class o extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["width"]}connectedCallback(){this.render()}render(){let e=this.getAttribute("width")||"140px";this.shadow.innerHTML=`
        <style>
            button {
                background-color: #006CFC;                
                width: ${e}px;
                height: 50px;
                display: block;
                border-width: 10px;  
                border-radius: 10px;
                border-color: #001997;
                font-size: 25px;     
                font-family: 'Odibee Sans', cursive; /* agreg\xe1 la fuente */
                color: white; /* para que se vea bien */     
                padding: 0;
                margin: 0;               
            }

            .slot {
                font-size: 45px;    
            }

        </style>

        <button>
           <slot></slot>
        </button>
    `}}customElements.define("my-button",o);var i={};i=import.meta.resolve("bCZTE");var n={};n=import.meta.resolve("eZByL");var d={};d=import.meta.resolve("iwPDY");class c extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["result"]}connectedCallback(){this.render()}render(){let e=this.getAttribute("result");console.log("Resultado desde el custom element: ",e);let t={win:i,lose:n,draw:d};this.shadow.innerHTML=`
        <style>
            img{
                width: 200px;       
                height: 200px;       
            }

        </style>
            <img src="${t[e]}" alt="${e}" class = "img-result"/>
    `}}function u(e){let t=document.createElement("div");t.innerHTML=`
    <div class = "welcome">
        <div class = "text">Piedra Papel <span>\xf3</span> Tijera
        </div>
        <my-button width = 250>Empezar</my-button>
        <div class = "plays">
          <my-play play="piedra"></my-play>
          <my-play play="papel"></my-play>
          <my-play play="tijera"></my-play>
        </div>    
    </div>    
  `;let a=t.querySelector("my-button");return a?.addEventListener("click",t=>{t.preventDefault(),e.goTo("/play")}),t}customElements.define("my-star",c);let m=[{path:/\//,component:u},{path:/\/welcome/,component:u},{path:/\/play/,component:function(e){let t=document.createElement("div");t.innerHTML=`
    <div class = "play">
        <div class = "textPlay">Presion\xe1 jugar
        y eleg\xed: piedra, papel o tijera antes 
        de que pasen los 3 segundos.
        </div>
        <my-button width = 250>\xa1Jugar!</my-button>
        <div class = "plays">
          <my-play play="piedra"></my-play>
          <my-play play="papel"></my-play>
          <my-play play="tijera"></my-play>
        </div>    
    </div>  
  `;let a=t.querySelector("my-button");return a?.addEventListener("click",t=>{t.preventDefault(),e.goTo("/count")}),t}},{path:/\/count/,component:function(e){let a=document.createElement("div");a.classList.add("count"),a.innerHTML=`    
    <countdown-timer></countdown-timer>
    <div class = "plays">
      <my-play play="piedra" clickable></my-play>
      <my-play play="papel" clickable></my-play>
      <my-play play="tijera" clickable></my-play>
    </div>       
  `;let s=a.querySelectorAll("my-play"),r=null;s.forEach(e=>{e.addEventListener("play-selected",e=>{console.log("Jugada desde el contador: ",r=e.detail),s.forEach(e=>{e.getAttribute("play")!==r?e.setAttribute("dimmed",""):e.removeAttribute("dimmed")})})});let l=a.querySelector("countdown-timer");return l?.addEventListener("animationend",()=>{r?(t.setMove(r),e.goTo("/showplay")):e.goTo("/play")}),a}},{path:/\/showplay/,component:function(e){let a=document.createElement("div"),s=t.getState(),r=s.currentGame.myPlay,l=s.currentGame.computerPlay;return a.innerHTML=`
    <div class="plays-made">
    <div class="computerPlay">        
      <my-play play="${l}" rotate scale = 1.6></my-play>
    </div>
      <div class="myplay">        
        <my-play play="${r}" scale = 1.6></my-play>
      </div>
    </div>
  `,t.pushToHistory({myPlay:r,computerPlay:l}),setTimeout(()=>{e.goTo("/result")},1e3),a}},{path:/\/result/,component:function(e){let a=t.getState(),s=t.result(a.currentGame.myPlay,a.currentGame.computerPlay),r=t.gamesWonByPlayer(),l=document.createElement("div");l.classList.add("result-containter"),"win"===s?document.body.style.backgroundColor="#888949E5":"lose"===s?document.body.style.backgroundColor="#894949E5":document.body.style.backgroundColor="lightgrey",l.innerHTML=`
        <div class = "result-star">
            <my-star result = ${s}></my-star>
        </div>
                 
          <div class = "results-table">
            <div class = "score">Score</div>
            <div class = "score__values">
              <div>Vos: <span class="number">${r.countUsuario}</span></div>
              <div>M\xe1quina: <span class="number">${r.countMaquina}</span></div>
            </div>

          
        </div>
        <div class = "result-button">
          <my-button width = 200 >Volver a jugar</my-button>
        </div>
    `;let o=l.querySelector("my-button");return o?.addEventListener("click",t=>{t.preventDefault(),document.body.style.backgroundColor="",e.goTo("/welcome")}),l}}];!function(e){let t,a;function s(e){history.pushState({},"",e),r(e)}function r(t){for(let a of(console.log("Handling route:",t),m))if(a.path.test(t)){let t=a.component({goTo:s});e.firstChild&&e.firstChild.remove(),e.appendChild(t)}console.warn("No route found for:",t)}let l=(t=window.location.pathname,a="/desafio-ppt",t.startsWith(a)?t.replace(a,"")||"/":t||"/");r(l),window.onpopstate=()=>{r(l)}}(document.querySelector(".root"));
//# sourceMappingURL=58-desafio-ppt.098d6528.js.map

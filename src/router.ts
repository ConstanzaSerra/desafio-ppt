import { initCount } from "./pages/count";
import { initPlay } from "./pages/play";
import { initShowPlay } from "./pages/show-play";
import { initShowResult } from "./pages/show-results";
import { initWelcome } from "./pages/welcome/index";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/play/,
    component: initPlay,
  },
{
    path: /\/count/,
    component: initCount,
  },
  {
    path: /\/showplay/,
    component: initShowPlay,
  },
    {
    path: /\/result/,
    component: initShowResult,
  },

];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo });
        if (container.firstChild) container.firstChild.remove();
        container.appendChild(el);
      }
    }
  }

  const initialPath = getCleanPathFromURL();//location.pathname === "/" ? "/welcome" : location.pathname;

  // Llamar al inicio con la ruta actual
  handleRoute(initialPath);

  // Escuchar cambios en el historial (back/forward)
  window.onpopstate = () => {
    handleRoute(initialPath);
  };

  return { goTo };
}


function getCleanPathFromURL() {
  // lógica para obtener el path de la URL y limpiarlo
  const fullPath = window.location.pathname;
  
  //Define el basepath segun el entorno
  const basepath = '/desafio-ppt'; //Cambia esto segun el entorno

  //Verifica si el fullPath comienza con el basePath
  if(fullPath.startsWith(basepath)) {
    return fullPath.replace(basepath, '') || '/'; //Devuelve '/' si el path queda vacío
  }
}
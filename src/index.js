import cache from './cache';
import { clear, draw, redrawAll, flow } from './draw';
import { injectFonts } from './inject-css';
import css from './css/main.scss'; /* eslint no-unused-vars: 0 */
import injectSVG from './inject-svg';
import Overlay from './components/Overlay.svelte';

document.addEventListener('DOMContentLoaded', () => {
  const overlay = new Overlay({
    target: document.querySelector('body'),
  });

  overlay.show(document.querySelector('button'));
});

// Run on module load
init();

window.CoachmarkCache = cache;

export default {
  // Add a coachmark
  add(name, config = {}) {
    if (!(typeof name === 'string')) {
      config = name;
      name = Math.random().toString(36).substr(2);
    }

    if (!config.text) {
      console.log('No text specified');
      return;
    }

    cache(`mark.${name}`, config);
  },
  // Show a coachmark given a name
  show(name) {
    clear();
    draw(name);
  },
  cache: () => cache.cache,
  draw,
  redrawAll,
  flow,
};

function init() {
  document.addEventListener('DOMContentLoaded', () => {
    // injectCSS();
    injectFonts();
    injectSVG();
    addListeners();
  });
}

function addListeners() {
  window.addEventListener('resize', () => {
    requestAnimationFrame(() => {
      redrawAll();
    });
  });
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { setupScrollAnimations } from './utils/scrollAnimations';
import { initCustomFP } from './utils/customfp';  // ⬅️ Asegúrate de importar esto

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Ejecuta todo al cargar la página completamente
window.addEventListener('load', () => {
  setupScrollAnimations();

  // Activar navegación tipo fullpage
  initCustomFP('.fp-wrapper', {
    delay: 1000,
    loop: false,
    updateHash: true,
    disableBelow: 768  // ⬅️ Evita bloquear el scroll en móviles
  });
});

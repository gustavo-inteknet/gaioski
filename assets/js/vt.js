// Chegando pela troca de idioma (view transition), pula a animação de entrada.
addEventListener('pagereveal', (e) => { if (e.viewTransition) document.documentElement.classList.add('vt'); });

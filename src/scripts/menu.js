const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('aside');

// Escuchamos en todo el documento para que sobreviva a las transiciones de <ClientRouter />
document.addEventListener('click', (event) => {
  // Comprobamos si el elemento clickeado (o su contenedor) es el botón .menu
  const menu = event.target.closest('.menu');
  if (!menu) return; // Si no es el menú, no hacemos nada

  const sidebar = document.querySelector('aside');
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  
  menu.setAttribute('aria-expanded', `${!isExpanded}`);
  sidebar?.classList.toggle('active');
});
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
const sidebar = document.querySelector('aside');

menu?.addEventListener('click', () => {
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', `${!isExpanded}`);
  
  // Alterna la clase 'active' para mostrar/ocultar el menú
  //navLinks?.classList.toggle('active');
  sidebar?.classList.toggle('active');
});
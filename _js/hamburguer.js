
function clickMenu(){
    itens.style.display = 'block'; 
}
 
    
function closeMenu(){
    itens.style.display = 'none'; 
}


    
function adjustMenuDisplay() {
    var menuHeader = document.querySelector('.menu_header');
    var screenWidth = window.innerWidth;
  
    if (screenWidth > 700) {
      menuHeader.style.display = 'flex';
    } else {
      menuHeader.style.display = 'none';
    }
  }
  
  // Chama a função quando a página é carregada
  window.addEventListener('load', adjustMenuDisplay);
  
  // Chama a função quando a janela é redimensionada
  window.addEventListener('resize', adjustMenuDisplay);
  
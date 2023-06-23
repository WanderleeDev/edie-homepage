const Header = () => { 

  const data = [
    {li: 'Home'},
    {li: 'Services'},
    {li: 'Our Works'},
    {li: 'Clients'},
    {li: 'Contact'}
  ];

  const tempContainer = `
    <header class="header">
      <img src="../../../public/assets/svg/edie.svg" alt="logo" class="header-logo">
      <nav class="header-nav">
        <ul class="navList">
          ${
            data.map(d => {
              return(`
                <li class="navList-item">
                <a href="#" class="navList-link">${d.li}</a>
                </li>
              `)
            }).join('')
          }
        </ul>
      </nav>
      <div class="header-containerBtn">
        <button class="btn" aria-label="Cerrar barra de navegación">
          <img src="../../../public/assets/svg/close.svg" alt="logo cerrar menu">
        </button>
        <button class="btn" aria-label="Abrir barra de navegación">
          <img src="../../../public/assets/svg/menu.svg" alt="logo abrir menu">
        </button>
      </div>      
    </header>  
  `;

  return tempContainer.trim();
}

export default Header;
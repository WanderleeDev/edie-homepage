import logo from '/src/img/edie.svg'
import closeSvg from '/src/img/close.svg'
import menuSvg from '/src/img/menu.svg'

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
      <img src=${logo} alt="logo" class="header-logo">
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
          <img src=${closeSvg} alt="logo cerrar menu">
        </button>
        <button class="btn" aria-label="Abrir barra de navegación">
          <img src=${menuSvg} alt="logo abrir menu">
        </button>
      </div>      
    </header>  
  `;

  return tempContainer.trim();
}

export default Header;
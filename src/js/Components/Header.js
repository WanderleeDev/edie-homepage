import logo from '/src/img/edie.svg';

const Header = () => { 
  const data = [
    {
      li: 'Home',
      link: "home"
    },
    {
      li: 'Services',
      link: "services"
    },
    {
      li: 'Our Works',
      link: 'ourWorks'
    },
    {
      li: 'Clients',
      link: "clients"
    },
    {
      li:  'Contact',
      link: "contact"
    }
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
                <a href="#${d.link}" class="navList-link">${d.li}</a>
                </li>
              `)
            }).join('')
          }
        </ul>
      </nav>
      <div class="header-containerBtn">
        <button class="btn btn-close" aria-label="Cerrar barra de navegación">
        𝘅
        </button>
        <button class="btn btn-open" aria-label="Abrir barra de navegación">
        ☲
        </button>
      </div>      
    </header>  
  `;

  return tempContainer.trim();
}

export default Header;
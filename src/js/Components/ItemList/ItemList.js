const ItemList = (link, text) => {
  const tempContainer = `
    <li class="list-item">
      <a class="list-link" rel=”noreferrer noopener” href="#${link}">${text}</a>
    </li>
  `;

  return tempContainer.trim();
}

export default ItemList;
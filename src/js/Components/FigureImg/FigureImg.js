import '../../../scss/components/figureImg.scss';

const FigureImg = (img, title, description) => {
  const tempContainer = `
  <figure class="cardDesign">
    <img class="cardDesign-img" src=${img} alt="image stock">
    <figcaption class="cardDesign-content">
      <h3 class="cardDesign-title">${title}</h3>
      <span class="cardDesign-info">${description}</span>
    </figcaption>
  </figure>
  `;

  return tempContainer.trim();
}

export default FigureImg;
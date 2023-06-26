import '../../../scss/components/card.scss';

const Card = (title,img) => {
  const tempContainer = `
  <div class="card">
    <div class="card-imgContainer">
      <img class="card-img" src=${img} alt="logo" loading="lazy">
    </div>
    <h3 class="card-title">
      ${title}
    </h3>
    <p class="card-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
    </p>
    <button class="card-btn">
      Get started
    </button>
  </div>
  `;

  return tempContainer.trim();
};

export default Card;
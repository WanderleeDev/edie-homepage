import banner from '/src/img/heroImage.jpg';
import '../../../scss/components/imgBanner.scss';



const ImgBanner = `
  <div class="banner">
    <img loading="lazy" class="banner-img" src=${banner} alt="banner">
  </div>
`;

export default ImgBanner.trim(); 

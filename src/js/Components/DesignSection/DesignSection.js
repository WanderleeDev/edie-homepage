import FigureImg from "../FigureImg/FigureImg";
import '../../../scss/components/designSection.scss';
import img1 from '../../../img/smarthome.jpg';
import img2 from '../../../img/onboard.png';
import img3 from '../../../img/booking.png';
import img4 from '../../../img/juice-product.png';

const data = [
  {
    img: img1,
    title: 'Full stack application',
    description: 'Smart home dashboard'
  },
  {
    img: img2,
    title: 'UX/UI design',
    description: 'Onboard application'
  },
  {
    img: img3,
    title: 'Mobile application',
    description: 'Booking system'
  },
  {
    img: img4,
    title: 'Front End applicati on',
    description: 'Juice product homepage'
  }
];

const DesingSection = () => {
  const tempContainer = `
  <section id="ourWorks" class="designSection">
    <h2 class="designSection-title">
      Good design means good business
    </h2>
    <div class="designSection-container">
      ${
        data.map((d) => {
          const {img, title, description} = d;
          return(`
            ${
              FigureImg(img, title, description)
            }
          `)
        }).join('')
      }
    </div>
    <div class="designSection-seeMore">
      <a rel=”noreferrer noopener” class="designSection-link" href="#">see more</a>
      <span class="designSection-icon">🠐</span>
    </div>
  </section>
  `;

  return tempContainer.trim();
}

export default DesingSection;
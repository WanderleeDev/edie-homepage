import Card from "../Card/Card.js";
import pen from "../../../img/pen.svg";
import bracket from "../../../img/brackets.svg";
import storage from "../../../img/storage.svg";
import '../../../scss/components/cardSection.scss';

const dataCard = [
  {
    title: 'UI/UX Design',
    img: pen
  },
  {
    title: 'Front End',
    img: bracket
  },
  {
    title: 'Back End',
    img: storage
  }
];

const ServicesSection = () => {

  const tempContainer = `
    <section class="cardSection">
      <h2 class="cardSection-title">
      We offer high demand services  
      </h2>
      <div class="cardSection-container">
        ${
          dataCard.map((data)=>{
            const {title, img} = data;
            return(`
              ${Card(title, img)}
            `)
          }).join('')
        }
      </div>
    </section>
  `;

  return tempContainer.trim();
}

export default ServicesSection;
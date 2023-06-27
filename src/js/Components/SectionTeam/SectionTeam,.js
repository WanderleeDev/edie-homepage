import '../../../scss/components/sectionTeam.scss';
import person1 from '../../../img/person1.png';
import person2 from '../../../img/person2.png';
import person3 from '../../../img/person3.png';
import person4 from '../../../img/person4.png';

const images = [
  {
    img: person1
  },
  {
    img: person2
  },
  {
    img: person3
  }
];

const SectionTeam = () => {
  const tempContainer = `
  <section id="clients" class="team">
    <div class="team-data">
      <span class="team-span">Meet the team</span>
      <h2 class="team-title">
        We are chilled and a laidback team
      </h2>
      <p class="team-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div class="team-imgContainer">
      ${
        images.map((i) => `<img class="team-img" loading="lazy" src=${i.img} alt="person image">`).join('')
      }
    </div>
    <div class="subSection">
      <p class="subSection-text">
        “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”    
      </p>
      <div class="subSection-containerImg">
        <img class="subSection-img" loading="lazy" src=${person4} alt="photo person">
        <span class="subSection-personName">Carlos Tran</span>
        <span class="subSection-extraData">The Decorate Gatsby</span>
      </div>
    </div>
  </section>
  `;

  return tempContainer.trim();
}

export default SectionTeam;
import '../../../scss/components/firstSection.scss';
import MainTitle from "../Maintitle/MainTitle.js";
import ImgBanner from '../ImgBanner/ImgBanner';
import FirstContentSection from '../FirstContentSection/FirstContentSection.js';
import InputMail from '../InputMail/InputMail';

const FirstSection = () => {
  const tempContainer = `
    <section id="home" class="firstSection">
      ${MainTitle}
      ${ImgBanner}
      ${FirstContentSection}
      ${InputMail}
    </section>
  `;

  return tempContainer.trim();
}

export default FirstSection;

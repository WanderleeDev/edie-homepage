import InputMail from "./InputMail/InputMail";
import ItemList from "./ItemList/ItemList";
import SocialIcon from "./SocialIcon/SocialIcon";
import instagram from '../../img/instagram.svg';
import linkedin from '../../img/linkedin.svg';
import logo from '../../img/edd.svg';
import twitter from '../../img/twitter.svg';
import '../../scss/components/footer.scss';

const listData = [
  {
    link: "",
    text: 'Home'
  },
  {
    link: "",
    text: 'Services'
  },
  {
    link: "",
    text: 'Our Works'
  },
  {
    link: "",
    text: 'Clients'
  },
  {
    link: "",
    text: 'Contact'
  }
];

const socialIconData = [
  {
    img:instagram
  },
  {
    img:linkedin
  },
  {
    img:twitter
  }
];

const Footer = () => {
  const tempContainer = `
  <footer class="footer">
    <ul class="list">
      ${
        listData.map((list) => {
          const { link, text } = list;
          return(`
            ${ItemList(link, text)}
          `)
        }).join('')
      }
    </ul>

    <div class="socialMedia">
      <p class="socialMedia-logo">Edie</p>
      <div class="socialMedia-iconContainer">
      ${
        socialIconData.map((icon) => SocialIcon(icon.img)
        ).join('')
      }
      </div>
    </div>
    <div class="footer-mail">
      ${InputMail}
    </div>
    <div class="footer-info">
      <p class="footer-copy">
        created by <a class="footer-link" href="">username</a> - devChallenges.io
      </p>
    </div>
  </footer>
  `;
  return tempContainer.trim();
}

export default Footer;
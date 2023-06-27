import '../../../scss/components/socialIcon.scss';

const SocialIcon = (img) => {
    return (`
    <a class="socialMedia-link" href="#" rel=”noreferrer noopener”>
      <img class="socialMedia-icon" src="${img}" alt="social media icon">
    </a>
    `)
}

export default SocialIcon
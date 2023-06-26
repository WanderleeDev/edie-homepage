import FirstSection from "./FirstSection/FirstSection.js";
import ServicesSection from "./ServicesSection/ServicesSection.js";
import DesignSection from "./DesignSection/DesignSection.js";

const Main = () => {



  const tempContainer= `
    ${FirstSection()}
    ${ServicesSection()}
    ${DesignSection()}
  `;

  return tempContainer.trim();
}

export default Main;
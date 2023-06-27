import FirstSection from "./FirstSection/FirstSection.js";
import ServicesSection from "./ServicesSection/ServicesSection.js";
import DesignSection from "./DesignSection/DesignSection.js";
import SectionTeam from "./SectionTeam/SectionTeam,.js";

const Main = () => {
  const tempContainer= `
    ${FirstSection()}
    ${ServicesSection()}
    ${DesignSection()}
    ${SectionTeam()}
  `;

  return tempContainer.trim();
}

export default Main;
import addBlock from "./utils/addBlock.js";
import appearNavBar from "./utils/appearNavBar.js";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import '../scss/style.scss';



addBlock(Header(),'body', 'afterbegin');
addBlock(Main(),'#app', 'beforeend');
addBlock(Footer(),'#app', 'afterend');
appearNavBar();
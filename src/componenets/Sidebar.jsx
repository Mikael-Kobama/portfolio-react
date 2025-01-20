import Avatar from "../img/eu.jpg";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetWorks from "./SocialNetWorks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Mikael Kobama" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetWorks />
      <InformationContainer />
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;

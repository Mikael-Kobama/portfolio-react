import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/kobama-mikael/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/Mikael-Kobama",
  },
  { name: "instagram", icon: <FaInstagram />, link: "#" },
];

const SocialNetWorks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetWorks;

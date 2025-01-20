import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
} from "react-icons/di";
import "../styles/components/technologiescontainer.sass"; // Importando o CSS
import technologies from "../data/technologiesData"; // Importando os dados das tecnologias

const iconMap = {
  html: <DiHtml5 />,
  css: <DiCss3 />,
  js: <DiJsBadge />,
  node: <DiNodejsSmall />,
  react: <DiReact />,
  mongodb: <DiMongodb />,
  tailwind: <DiCss3 />, // Usando o ícone CSS para o Tailwind CSS
};

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {iconMap[tech.id]} {/* Usando o ícone correspondente */}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;

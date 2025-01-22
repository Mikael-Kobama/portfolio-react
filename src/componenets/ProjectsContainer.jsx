const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Já desenvolvi diversos projetos práticos que ajudaram a consolidar meus
        conhecimentos e aprimorar minhas habilidades. Alguns desses projetos
        incluem versões do famoso To-Do List e recriações de interfaces de
        aplicativos conhecidos, usando Sass e Tailwind CSS para garantir um
        design responsivo e de alta qualidade. Também criei aplicações com
        React, utilizando Axios e fetch API para integração com servidores e
        desenvolvi soluções completas com Node.js e MongoDB, criando tanto o
        front-end quanto o back-end de forma integrada.
      </p>
      <a
        href="https://github.com/Mikael-Kobama?tab=repositories"
        className="btn"
      >
        Ver Projetos
      </a>
    </section>
  );
};

export default ProjectsContainer;

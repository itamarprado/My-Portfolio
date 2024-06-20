import { FaHtml5, FaCss3, FaReact, FaAngular, FaFigma } from "react-icons/fa";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-5 pb-8">
        <div className="w-[1px] h-12 mb-2 bg-white self-center"></div>
        <div className="self-center">
          <p className="text-sm leading-3 text-center">See my</p>
          <h1 className="text-2xl">Projects</h1>
        </div>
      </div>
      <ProjectCard
        title="Portfolio"
        desc="This project is my portfolio to show my projects and my knowledge to the public!"
        skills={[<FaHtml5 key={0} />, <FaCss3 key={1} />, <FaReact key={2} />]}
        imgUrl={
          "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/10/Como-Fazer-Um-Portfolio-Digital-1.webp"
        }
      />
      <ProjectCard
        title="E-commerce"
        desc="An e-commerce"
        skills={[<FaHtml5 key={0} />, <FaFigma key={1} />, <FaAngular key={2} />]}
        imgUrl={
          "https://blog.ideiamais.com.br/wp-content/uploads/2019/03/processo-ecommerce-750x410.jpg"
        }
      />
    </div>
  );
};
export default Projects;

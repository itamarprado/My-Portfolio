import ProjectCard from "../ProjectCard/ProjectCard";
import data from "../../data/projectsData";

const Projects = () => {
  return (
    <div id="Projects" className="flex justify-center w-full px-5 pb-10">
      <div className="flex flex-col w-full max-w-5xl">
        <div className="flex flex-col px-5 pb-8">
          <div className="w-[1px] h-12 mb-2 bg-white self-center"></div>
          <div className="self-center">
            <p className="text-sm leading-3 text-center">See my</p>
            <h1 className="text-2xl">Projects</h1>
          </div>
        </div>
        <div className="flex flex-wrap">
          {data.map((project) => {
            return <ProjectCard
                    id={project.id}
                    title={project.title}
                    desc={project.desc}
                    skills={project.skills}
                    imgUrl={project.imgUrl}
                    dev={project.dev}
                    key={project.id}
                    />
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;

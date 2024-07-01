import data from "../../data/projectsData";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";


const ProjectDescription = () => {
  const projectData = data[0]

  let skillsUsed = []
  projectData.skills.map((skill) => {skillsUsed.push([skill.id, skill.icon, skill.skillName])})

  return (
    <div className="flex flex-col sm:flex-col justify-center items-center py-[120px] px-5">
      <div className="max-w-5xl">
        <h1 className="text-4xl">{projectData.title}</h1>
        <div className="flex flex-col w-full gap-5">
          <div className="sm:w-3/4">
            <p className="text-base mt-5">{projectData.desc}</p>
          </div>
          {/* Resume */}
          <div className="flex flex-wrap gap-10 w-full">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">My Role</h1>
              <p className="text-base pt-1">{projectData.detailedInfo.myRole}</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Type</h1>
              <p className="text-base pt-1">{projectData.detailedInfo.projectType}</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Techs</h1>
              <div className="flex flex-row pt-1 gap-3 flex-wrap">
                {skillsUsed.map((skill) => {
                  return (
                    <div className="flex flex-row gap-1" key={skill[0]}>
                      <img src={skill[1]} className="w-6" />
                      <p>{skill[2]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex gap-5 pt-2">
            <a
              href={projectData.gitHubUrl}
              className="flex items-center gap-2 px-3 py-2 bg-neutral-700 rounded-lg"
              target="_blank"
            >
              See on Github <FaGithub size={20} />
            </a>
            <a
              href={projectData.webUrl}
              className="flex items-center gap-2 px-3 py-2 bg-neutral-700 rounded-lg"
              target="_blank"
            >
              See on Web <MdArrowOutward size={20} />
            </a>
          </div>
          {/* Detailed Information */}
          <div className="pt-5">
            <h1 className="text-base text-sky-400">Overview</h1>
            <h1 className="text-xl pb-3">{projectData.detailedInfo.sections.overview.objective.title}</h1>
            <p className="sm:max-w-[80%]">{projectData.detailedInfo.sections.overview.objective.content}</p>
            <h1 className="text-xl pb-3 pt-10">{projectData.detailedInfo.sections.overview.targetAudience.title}</h1>
            <p className="sm:max-w-[80%]">{projectData.detailedInfo.sections.overview.targetAudience.content}</p>
          </div>
          <div className="pt-5">
            <h1 className="text-base text-sky-400">Design</h1>
            <h1 className="text-xl pb-3">{projectData.detailedInfo.sections.design.wireframe.title}</h1>
            <img
              src={projectData.detailedInfo.sections.design.wireframe.img}
              alt="Wireframe"
              className="sm:w-3/4 border-[1px] rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDescription;

import data from "../../data/projectsData";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll'

const menuSize = 64

const ProjectDescription = () => {
  const navigate = useNavigate()
  
  const handleNavigation = () => {
      navigate("/");
      setTimeout(() => {
        scroll.scrollTo(document.getElementById("Projects").offsetTop - menuSize)
      }, 100);
  }

  const { id } = useParams();
  const projectData = data.find((x) => x.id === parseInt(id));

  const { title, desc, detailedInfo, gitHubUrl, webUrl, skills } = projectData;

  return (
    <div className="flex flex-col items-center py-20 md:py-[120px] px-5">
      <div className="w-full max-w-5xl">
        <Link to="/" onClick={handleNavigation} className="flex w-max items-center gap-2 py-2 text-neutral-300 hover:text-blue-400">
          <IoMdArrowRoundBack size={25} className="text-blue-400"/>
          Go back
        </Link>
        <h1 className="text-4xl">{title}</h1>
        <div className="flex flex-col w-full gap-5">
          <div className="sm:w-3/4">
            <p className="text-base mt-5">{desc}</p>
          </div>
          {/* Resume */}
          <div className="flex flex-wrap gap-10 w-full">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">My Role</h1>
              <p className="text-base pt-1">{detailedInfo.myRole}</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Type</h1>
              <p className="text-base pt-1">{detailedInfo.projectType}</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">Techs</h1>
              <div className="flex flex-row pt-1 gap-3 flex-wrap">
                {skills.map((skill) => {
                  return (
                    <div className="flex flex-row gap-1" key={skill.id}>
                      <img src={skill.icon} className="w-6" />
                      <p>{skill.skillName}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex gap-5 pt-2">
            <a
              href={gitHubUrl}
              className="flex items-center gap-2 px-3 py-2 bg-neutral-700 rounded-lg"
              target="_blank"
            >
              See on Github <FaGithub size={20} />
            </a>
            <a
              href={webUrl}
              className="flex items-center gap-2 px-3 py-2 bg-neutral-700 rounded-lg"
              target="_blank"
            >
              See on Web <MdArrowOutward size={20} />
            </a>
          </div>
          {/* Detailed Information */}
          <div className="pt-5">
            <h1 className="text-base text-sky-400">Overview</h1>
            <h1 className="text-xl pb-3">
              {detailedInfo.sections.overview.objective.title}
            </h1>
            <p className="sm:max-w-[80%]">
              {detailedInfo.sections.overview.objective.content}
            </p>
            <h1 className="text-xl pb-3 pt-10">
              {detailedInfo.sections.overview.targetAudience.title}
            </h1>
            <p className="sm:max-w-[80%]">
              {detailedInfo.sections.overview.targetAudience.content}
            </p>
          </div>
          <div className="pt-5">
            <h1 className="text-base text-sky-400">Design</h1>
            <h1 className="text-xl pb-3">
              {detailedInfo.sections.design.wireframe.title}
            </h1>
            <img
              src={detailedInfo.sections.design.wireframe.img}
              alt={detailedInfo.sections.design.wireframe.alt}
              className="sm:w-3/4 border-[1px] rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDescription;

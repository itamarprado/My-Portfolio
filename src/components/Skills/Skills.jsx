// Import skills data from another file
import { hardSkills, softSkills } from '../../data/skillsData'

const Skills = () => {
  return (
    <div id="Skills" className="flex flex-col items-center justify-center w-full px-5 bg-neutral-900 pt-10">
      <div className="w-full max-w-5xl pb-2 flex flex-col">
        {/* Description */}
        <h1 className="w-max text-3xl font-bold bg-gradient-to-r from-blue-700 via-blue-500-500 to-cyan-300 bg-[length:80%_6px] bg-left-bottom bg-no-repeat pb-[6px]">
          Skills
        </h1>
        <div className="flex flex-col sm:flex-row w-full pt-5 gap-5">
          {/* Hard Skills */}
          <div className="w-full md:max-w-[50%] border-[1px] border-neutral-700 rounded-2xl p-5 bg-neutral-800">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 w-full">
              {hardSkills.map((skill) => {
                return (
                  <div className="flex flex-col items-center justify-center" key={skill.id}>
                    <img src={skill.img} alt="hard-skill-image" className="w-8"/>
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Soft Skills */}
          <div className="w-full md:max-w-[50%] border-[1px] border-neutral-700 rounded-2xl p-5 bg-neutral-800">
            <div className="flex flex-wrap h-full items-center justify-center gap-x-8 gap-y-4 w-full">
              {softSkills.map((skill) => {
                return (
                  <div className="flex flex-col items-center justify-center w-full flex-1" key={skill.id}>
                    <img src={skill.icon} alt="" className="w-full max-w-8"/>
                    <span>{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1px] h-12 mt-5 bg-white self-center"></div>
    </div>
  );
};
export default Skills;

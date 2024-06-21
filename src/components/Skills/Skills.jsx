import SkillScroll from "../SkillScroll/SkillScroll"

const Skills = () => {
  return (
    <div className="pb-2 px-5 flex flex-col">
        {/* Description */}
        
        <h1 className="w-max text-3xl font-bold bg-gradient-to-r from-blue-700 via-blue-500-500 to-cyan-300 bg-[length:80%_6px] bg-left-bottom bg-no-repeat pb-[6px]">Skills</h1>
        <p className="py-3">Here are some hard-skills that I&apos;ve acquired during my journey.</p>
        {/* Infinite scroll */}
        <SkillScroll />
        <div className="w-[1px] h-8 bg-white self-center mt-5 mb-2 ">
        </div>
        <div className="flex self-center rounded-md">
          <a className="text-xs items-center justify-center px-3 py-1 shadow-[0px_0px_3px_1px] shadow-blue-500 rounded-md cursor-pointer hover:shadow-[0px_0px_20px_2px] hover:shadow-blue-500 hover:bg-blue-100 hover:bg-opacity-5 duration-200">Click here to see other skills</a>
        </div>
    </div>
  )
}
export default Skills
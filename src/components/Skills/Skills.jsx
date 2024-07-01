// import SkillScroll from "../SkillScroll/SkillScroll"

const hardSkills = [
  {
    id: 1,
    name: "HTML5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id: 2,
    name: "CSS3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id: 3,
    name: "Javascript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 6,
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    id: 7,
    name: "Github",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    id: 8,
    name: "Databases",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  },
  {
    id: 9,
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: 10,
    name: "Angular",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
  },
];

// TO DO: Complete the skill layout changes until 28/06
const softSkills = [
  {
    id: 11,
    name: "Communication",
    icon: "/icons/comm.png"
  },
  {
    id: 12,
    name: "Problem Solving",
    icon: "/icons/problem-solving.png"
  },
  {
    id: 13,
    name: "Adaptability",
    icon: "/icons/adaptability.png"
  },
  {
    id: 14,
    name: "Never-end learning",
    icon: "/icons/never-end-learning.png"
  },

]

const Skills = () => {
  return (
    <div id="Skills" className="flex justify-center w-full px-5">
      <div className="w-full max-w-5xl pb-2 flex flex-col">
        {/* Description */}
        <h1 className="w-max text-3xl font-bold bg-gradient-to-r from-blue-700 via-blue-500-500 to-cyan-300 bg-[length:80%_6px] bg-left-bottom bg-no-repeat pb-[6px]">
          Skills
        </h1>
        <div className="flex flex-col sm:flex-row w-full pt-5 gap-5">
          {/* Hard Skills */}
          <div className="w-full md:max-w-[50%] border-[1px] border-neutral-700 rounded-2xl p-5">
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
          <div className="w-full md:max-w-[50%] border-[1px] border-neutral-700 rounded-2xl p-5">
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
    </div>
  );
};
export default Skills;

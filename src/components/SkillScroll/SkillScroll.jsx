import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaGit,
  FaJs,
  FaGithub,
  FaDatabase,
  FaSass,
  FaAngular
} from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    name: "CSS3",
    icon: <FaCss3 />,
  },
  {
    id: 3,
    name: "Javascript",
    icon: <FaJs />,
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact />,
  },
  {
    id: 5,
    name: "Git",
    icon: <FaGit />,
  },
  {
    id: 6,
    name: "Github",
    icon: <FaGithub />,
  },
  {
    id: 7,
    name: "Databases",
    icon: <FaDatabase />,
  },
  {
    id: 8,
    name: "Sass",
    icon: <FaSass />,
  },
  {
    id: 9,
    name: "Angular",
    icon: <FaAngular />,
  },
];

const SkillScroll = () => {
  return (
    <div className="overflow-x-hidden whitespace-nowrap hover:pause">
      {/* Icons */}
      <div className="inline-flex animate-infinite-scroll">
        {data.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-1 items-center mx-4 hover:text-blue-400">
            <div className="text-4xl">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="inline-flex animate-infinite-scroll">
        {data.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-1 items-center mx-4 hover:text-blue-400">
            <div className="text-4xl">{skill.icon}</div>
            <p className="">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="inline-flex animate-infinite-scroll">
        {data.map((skill) => (
          <div key={skill.id} className="flex flex-col gap-1 items-center mx-4 hover:text-blue-400">
            <div className="text-4xl">{skill.icon}</div>
            <p className="">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillScroll;

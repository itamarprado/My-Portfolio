import { Link } from "react-router-dom";

const ProjectCard = ({id, title, desc, skills, imgUrl }) => {
  const skillsUsed = [];
  skills.map((skill) => skillsUsed.push([skill.id, skill.icon]));

  return (
    <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3 p-4 ">
      <Link to={`/${id}`} className="w-full h-52 opacity-70 cursor-pointer duration-300 hover:scale-[103%] hover:opacity-100">
        <img src={imgUrl} alt="" className="w-full h-full object-cover" />
      </Link>
      <div className="h-auto">
        <div className="flex text-2xl justify-between text-blue-300 pb-1 cursor-pointer w-max">
          {title}
        </div>
        <div className="flex text-2xl pb-1 gap-2">
          {skillsUsed.map((icon) => {
            return <img src={icon[1]} className="max-w-6" key={icon[0]} />;
          })}
        </div>
        <div className="font-light">{desc.length > 70 ? desc.substring(0,100) + "..." : desc}</div>
      </div>
    </div>
  );
};
export default ProjectCard;

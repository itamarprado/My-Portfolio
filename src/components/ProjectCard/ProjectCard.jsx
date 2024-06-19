const ProjectCard = ({title, desc, skills, imgUrl}) => {
  return (
    <div className="flex flex-col items-centes w-full px-5 mb-10">
        <div className="w-full">
            <img src={imgUrl} alt="" />
        </div>
        <div className="flex text-2xl justify-between text-blue-300 pb-1">
            {title}
        </div>
        <div className="flex text-2xl pb-1">
            {skills}
        </div>
        <div className="font-light">
            {desc}
        </div>
    </div>
  )
}
export default ProjectCard
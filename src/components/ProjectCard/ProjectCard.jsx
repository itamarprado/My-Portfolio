const ProjectCard = ({title, desc, skills, imgUrl}) => {
  return (
    <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3  p-4">
        <div className="w-full h-52">
            <img src={imgUrl} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="h-auto">
            <div className="flex text-2xl justify-between text-blue-300 pb-1">
                {title}
            </div>
            <div className="flex text-2xl pb-1 gap-2">
                {skills.map((skill, index) => {
                    return <img src={skill} className="max-w-6" key={index}/>
                })}
            </div>
            <div className="font-light">
                {desc}
            </div>
        </div>
    </div>
  )
}
export default ProjectCard
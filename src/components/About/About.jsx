const About = () => {
  return (
    <div className="py-10 px-5 flex flex-col">
      {/* Arrow lines */}
      <div className="mt-5 flex flex-col w-full h-auto relative items-center animate-bounce-slow">
        <span
          className="bg-white w-12 h-12 -mb-8"
          style={{
            clipPath: "polygon(2px 0, 24px 28px, 46px 0, 48px 0, 24px 30px, 0 0)",
          }}
        ></span>
        <span
          className="bg-white w-12 h-12"
          style={{
            clipPath: "polygon(2px 0, 24px 28px, 46px 0, 48px 0, 24px 30px, 0 0)",
          }}
        ></span>
      </div>

      <h1 className="w-max text-3xl font-bold bg-gradient-to-r from-blue-700 via-blue-500-500 to-cyan-300 bg-[length:50%_6px] bg-left-bottom bg-no-repeat pb-[6px]">About me</h1>
      <p className="py-3">
        Hello! My name is <span className="text-blue-300">Itamar</span> and I&apos;m a front-end developer, with a passion for building interfaces. I love learning new technologies and frameworks. </p> 
        <p>I study <span className="font-bold"><span className="text-blue-400">&lt;</span>Systems Analysis and Development<span className="text-blue-400">&gt;</span></span> and apply my knowledges to <span className="border-b-2 border-blue-500">web-development</span>, <span className="border-b-2 border-blue-500">automation</span>, <span className="border-b-2 border-blue-500">system development</span> etc.
        </p>
        <p className="pt-3">I also work as a freelancer with my experience obtained by building solo projects to create my portfolio and improve my skills</p>
    </div>
  );
};
export default About;

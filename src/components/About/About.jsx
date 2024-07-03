const About = () => {
  return (
    <div id="About" className="flex justify-center w-full px-5 py-10">
      <div className="w-full max-w-5xl flex flex-col items-center sm:flex-row">
        <div className="py-10 flex flex-col sm:w-1/2">
            <h1 className="w-max text-3xl font-bold bg-gradient-to-r from-blue-700 via-blue-500-500 to-cyan-300 bg-[length:50%_6px] bg-left-bottom bg-no-repeat pb-[6px]">About me</h1>
            <p className="py-3">
              My name is <span className="text-blue-300">Itamar</span> and I&apos;m a front-end developer, with a passion for building interfaces. I love learning new technologies and frameworks. </p> 
              <p>I study <span className="font-bold"><span className="text-blue-400">&lt;</span>Systems Analysis and Development<span className="text-blue-400">&gt;</span></span> and apply my knowledges to <span className="border-b-2 border-blue-500">web-development</span>, <span className="border-b-2 border-blue-500">automation</span>, <span className="border-b-2 border-blue-500">system development</span> etc.
              </p>
              <p className="pt-3">I also work as a freelancer with my experience obtained by building solo projects to create my portfolio and improve my skills</p>
        </div>
        <div className="flex sm:justify-end sm:w-1/2">
          <img src="./images/sticker.png" alt="My Bitmoji doing rock mimic" className="max-h-96"/>
        </div>
      </div>
    </div>
  );
};
export default About;

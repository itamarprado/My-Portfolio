import Menu from "../components/Menu/Menu";
import Presentation from "../components/Presentation/Presentation";
import About from "../components/About/About";
import Skills from './../components/Skills/Skills';
import Projects from './../components/Projects/Projects';
import Contact from './../components/Contact/Contact';
import Footer from './../components/Footer/Footer';

const Home = () => {
    
  return (
    <>
      <Menu />
      <Presentation />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;

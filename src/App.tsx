import { useRef } from "react";
import Nav from "@/mycomp/Nav";
import Home from "@/mycomp/Home";
import About from "@/mycomp/About";
import Projects from "@/mycomp/Projects";
import Contact from "./mycomp/Contact";
import Footer from "./mycomp/Footer";
function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    }
  };

  return (
    <div>
      <Nav
        onHomeClick={() => scrollToRef(homeRef)}
        onAboutClick={() => scrollToRef(aboutRef)}
        onProjectsClick={() => scrollToRef(projectsRef)}
        onContactClick={() => scrollToRef(contactRef)}
      />
      <div>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

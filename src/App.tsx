import Nav from "@/mycomp/Nav";
import Home from "@/mycomp/Home";
import About from "@/mycomp/About";
import Projects from "@/mycomp/Projects";
import Contact from "./mycomp/Contact";
import Footer from "./mycomp/Footer";
function App() {
  return (
    <div>
      <Nav />
      <div>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import Nav from "@/mycomp/Nav";
import Home from "@/mycomp/Home";
import About from "@/mycomp/About";
import Projects from "@/mycomp/Projects";
function App() {
  return (
    <div className="flex flex-col">
      <Nav />
      <div>
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;

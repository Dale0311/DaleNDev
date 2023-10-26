import Nav from "@/mycomp/Nav";
import Home from "@/mycomp/Home";
import About from "@/mycomp/About";
function App() {
  return (
    <div className="flex flex-col">
      <Nav />
      <div>
        <Home />
        <About />
      </div>
    </div>
  );
}

export default App;

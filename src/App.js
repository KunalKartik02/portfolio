import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Table from "./components/table";
import Education from "./components/education";

function App() {
  return (
    <div className="container">
      <Navbar />
      <About />
      {/* <Education /> */}
      <br></br>
      <Skills />
      <br></br>
      <Table />
    </div>
  );
}

export default App;

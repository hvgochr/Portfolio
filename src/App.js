import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualifications from "./components/qualifications/Qualifications";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import ProjectDetails from "./components/work/details/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={
            <>
              <Home />
              <About />
              <Skills />
              <Qualifications />
              <Work />
              <Contact />
            </>
          } />
          <Route exact path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
        <ScrollUp />
      </div>
    </Router>
  );
}


export default App;
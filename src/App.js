import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { StoreProvider } from "./utils/GlobalState";
import Nav from "./components/NavBar/index";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Denis from "./images/DA-lowres.jpg";

function App() {
  return (
    <Router>
      {/* <StoreProvider> */}
      <Nav />
      <div className="App">
        <section className="hero home-dev__hero is-medium is-bold ">
          <div className="hero-head">
            <a className="row level-left" to="/Home">
              <img src={Denis} alt="portrait" style={{ zIndex: "-1" }}></img>
              <div className="title is-1 hero-body">
                Welcome to my Portfolio Page!
              </div>
            </a>
          </div>
        </section>
        {/* <Home></Home> */}

        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/AboutMe" element={<AboutMe />} />
        </Routes>
        <Footer />
        {/* </StoreProvider> */}
      </div>
    </Router>
  );
}

export default App;

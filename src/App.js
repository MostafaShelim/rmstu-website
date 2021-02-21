import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Adminastratioin from "./components/Adminastration/Adminastration";
import Departments from "./components/Departments/Departments";
import Institutes from "./components/Institutes/Institutes";
import Faculties from "./components/Faculties/Faculties";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Admission from "./components/Admission/Admission";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import Research from "./components/Research/Research";
import WebMail from "./components/WebMail/WebMail";
import Notice from "./components/Notice/Notice";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/"><Main></Main></Route>
          <Route path="/departments"><Departments></Departments></Route>
          <Route path="/institutes"><Institutes></Institutes></Route>
          <Route path="/faculties"><Faculties></Faculties></Route>
          <Route path="/adminastration"><Adminastratioin></Adminastratioin></Route>
          <Route path="/about"><About></About></Route>
          <Route path="/admission"><Admission></Admission></Route>
          <Route path="/contact"><Contact></Contact></Route>
          <Route path="/gallery"><Gallery></Gallery></Route>
          <Route path="/research"><Research></Research></Route>
          <Route path="/webmail"><WebMail></WebMail></Route>
          <Route path='/notice'><Notice></Notice></Route>
          {/* <Route path="/departments:"><Departments></Departments></Route> */}
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;

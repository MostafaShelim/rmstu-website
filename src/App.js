import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

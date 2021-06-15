import Navbar from './Navbar';
import Carousel from './Carousel';
import AboutPizza from './AboutPizza';
import PizzaStore from './PizzaStore';
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <AboutPizza/>
     <PizzaStore/>
     <Footer/>
    </div>
  );
}

export default App;

import NavBar from './COMPONENTS/NavBar/NavBar';
import Home from './COMPONENTS/Home/Home';
import About from './COMPONENTS/About/About';
import Footer from './COMPONENTS/Footer/Footer';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home home='LEARN NOW! BUILD THE WEB YOU DREAM OF' />
        <About about1 about2 about3 about4 />
        <Footer/>
 
    </div>
  );
}

export default App;

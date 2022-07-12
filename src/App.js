
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Gender from './components/Gender/Gender';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Menu/>
      <Hero/>
      <Features/>
      <Gender/>
    </div>
  );
}

export default App;

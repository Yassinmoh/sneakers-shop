
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Gender from './components/Gender/Gender';
import Footer from './components/Footer/Footer';
// import Product from './components/SingleProduct/Product';
// import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Hero/>
      <Features/>
      <Gender/>
      {/* <Product/> */}
      {/* <Products/> */}
    </div>
  );
}

export default App;

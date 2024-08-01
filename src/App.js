import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/index'
import About from './Pages/About/index'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Distribution from './Pages/Distribution';
import Career from './Pages/Career'
import Contact from './Pages/contact'
import Electro from './Pages/Electro'
import Surgical from './Pages/Surgical'
import Pharma from './Pages/Pharma'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/distribution" element={<Distribution />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/electro" element={<Electro />} />
          <Route exact path="/surgical" element={<Surgical />} />
          <Route exact path="/pharma" element={<Pharma />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
  );
}

export default App;

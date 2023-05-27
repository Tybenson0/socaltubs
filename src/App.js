import NavBar from './Nav';
import Home from './Home';
import About from './About';
import { Porcelain, Glass, Vanity } from './Services';
import Gallery from './Gallery';
import LocationsServiced from './LocationsServiced';
import Quote from './Quote';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <section className='min-w-screen h-screen'>
      <Router>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services1" element={<Porcelain />} />
            <Route path="/services2" element={<Glass />} />
            <Route path="/services3" element={<Vanity />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/LocationsServiced" element={<LocationsServiced />} />
            <Route path="/Quote" element={<Quote />} />
        </Routes>
      </Router>
    </section >
  );
}

export default App;

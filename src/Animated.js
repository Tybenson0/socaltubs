
import Home from './Home';
import About from './About';
import { Porcelain, Glass, Vanity } from './Services';
import Gallery from './Gallery';
import {SantaClarita, AntelopeValley, Surrounding} from './LocationsServiced';
import Contact from './Contact';import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"

function Animated(props) {
    const location = useLocation();
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services1" element={<Porcelain />} />
            <Route path="/services2" element={<Glass />} />
            <Route path="/services3" element={<Vanity />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/SantaClarita" element={<SantaClarita />} />
            <Route path="/AntelopeValley" element={<AntelopeValley />} />
            <Route path="/Surrounding" element={<Surrounding />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
        </AnimatePresence>
    );
}

export default Animated;
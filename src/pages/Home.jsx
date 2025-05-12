import { useEffect } from 'react';
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Header from "../components/Header";
import Footer from "../components/Footer"
import '../styles/customfp.css';
import { initCustomFP } from '../utils/customfp';

function Home() {
    useEffect(() => {
        initCustomFP('.fp-wrapper', {
            delay: 1000,
            loop: false,
            updateHash: false
        });
    }, []);

    return (
        <div className="fp-container">
            {/* Header fijo fuera del sistema de scroll */}
            <Header />

            {/* Secciones scrollables */}
            <div className="fp-wrapper">
                <div className="fp-section"><Section1 /></div>
                <div className="fp-section"><Section2 /></div>
                <div className="fp-section"><Section3 /></div>
                <div className="fp-section"><Section4 /></div>
            </div>

            {/* Flechas de navegación */}
            <div className="fp-arrows">
                <button className="arrow up" onClick={() => window.customFP.prev()}>&uarr;</button>
                <button className="arrow down" onClick={() => window.customFP.next()}>&darr;</button>
            </div>

            {/* Footer fuera del scroll también */}
            <Footer />
        </div>
    );
}

export default Home;

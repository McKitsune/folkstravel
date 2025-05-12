import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Header from './components/Header';
import Footer from './components/Footer';
import Nosotros from './pages/Nosotros';
import Experiencias from './pages/Experiencias';
import CoffeXp from "./pages/CoffeXp";
import AdventuresXp from "./pages/AdventuresXp";
import NatureXp from './pages/NatureXp';
import DiscoveringXp from './pages/DiscoveringXp';
import BikingXp from './pages/BikingXp';
import OthersXp from "./pages/OthersXp";
import "./i18n";
import { useTranslation } from 'react-i18next';


function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <Header /> {/* ✅ Siempre visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/coffeexp" element={<CoffeXp />} />
        <Route path='/adventuresxp' element={<AdventuresXp />} />
        <Route path='/naturexp' element={<NatureXp />} />
        <Route path='/discoveringxp' element={<DiscoveringXp />} />
        <Route path='/bikingxp' element={<BikingXp />} />
        <Route path='/othersxp' element={<OthersXp />} />
        
      </Routes>
      <Footer /> {/* ✅ Siempre visible */}
    </Router>
  );
}

export default App;

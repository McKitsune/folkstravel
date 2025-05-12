import '../styles/Header.css';
import logolarge from '../assets/logos/logolarge.svg';
import logo from '../assets/logos/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaYoutube, FaFacebookF, FaSearch } from 'react-icons/fa';

function Header() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

    // Función para cambiar el idioma
    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setIsMenuOpen(false); // Cierra el menú después de seleccionar un idioma
    };

    return (
        <header className="header">
            <div className="logo">
                <picture>
                    {/* Usar srcSet para cambiar entre imágenes dependiendo del tamaño de la pantalla */}
                    <source srcSet={logolarge} media="(min-width: 768px)" />
                    <source srcSet={logo} media="(max-width: 768px)" />
                    <Link to="/">
                        <img src={logolarge} alt={t('logoAlt')} />
                    </Link>
                </picture>
                <button className="menu-toggle1" onClick={() => document.body.classList.toggle('menu-open')}>
                    ☰
                </button>
            </div>

            <div className="nav-glass">
                <nav className="nav-links">
                    <Link to="/">
                        <button className={location.pathname === "/" ? "active" : ""}>{t('home')}</button>
                    </Link>
                    <Link to="/experiencias">
                        <button className={location.pathname === "/experiencias" ? "active" : ""}>{t('experiences')}</button>
                    </Link>
                    <Link to="/nosotros">
                        <button className={location.pathname === "/nosotros" ? "active" : ""}>{t('aboutUs')}</button>
                    </Link>
                    <Link to="/contacto">
                        <button className={location.pathname === "/contacto" ? "active" : ""}>{t('contact')}</button>
                    </Link>
                </nav>
            </div>

            <div className="search-glass">
                <div className="social-icons">
                    <a href="https://www.instagram.com/folkstravelcolombia/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://www.youtube.com/@folkstravel5337" target="_blank" rel="noreferrer"><FaYoutube /></a>
                    <a href="https://www.facebook.com/profile.php?id=100038918559877" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                </div>

            </div>

            <div className="translate">
                {/* Botón de idioma con menú desplegable */}
                <button className="language-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    Lang
                </button>
                {/* Menú desplegable */}
                {isMenuOpen && (
                    <div className="language-dropdown">
                        <button onClick={() => handleLanguageChange('es')}>
                            {t('spanish')}
                        </button>
                        <button onClick={() => handleLanguageChange('en')}>
                            {t('english')}
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;

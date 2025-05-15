import React from 'react';
import { useTranslation } from 'react-i18next'; // Importar useTranslation
import '../styles/Experiencias.css';
import coffeeIcon from '../assets/icons/coffee.svg';
import adventuresIcon from '../assets/icons/adventures.svg';
import natureIcon from '../assets/icons/nature.svg';
import discoveringIcon from '../assets/icons/discovering.svg';
import bikeIcon from '../assets/icons/bike.svg';
import othersIcon from '../assets/icons/others.svg';
import LottieBackground from '../components/LottieBackground';
import { Link } from 'react-router-dom'; // ✅ Importar Link

// Lista de experiencias con claves para traducir
const experiences = [
    { key: 'coffeeXP', slug: 'CoffeeXp', icon: coffeeIcon },
    { key: 'adventureXP', slug: 'AdventuresXp', icon: adventuresIcon },
    { key: 'natureXP', slug: 'NatureXp', icon: natureIcon },
    { key: 'discoveringXP', slug: 'DiscoveringXp', icon: discoveringIcon },
    { key: 'bikeXP', slug: 'BikingXp', icon: bikeIcon },
    { key: 'otherXP', slug: 'OthersXp', icon: othersIcon },
];

export default function Experiencias() {
    const { t } = useTranslation(); // Usamos el hook useTranslation

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden">
            <LottieBackground />

            <div className="experiencias-section relative z-10 text-white">
                <div className="titulo">
                    <h1>{t('section2.titulo')}</h1> {/* Traducción de título */}
                    <p>
                        {t('section2.mensaje')}
                    </p>
                </div>

                <div className="experiencias-grid">
                    {experiences.map(({ key, slug, icon }) => {
                        const bgUrl = `/assets/backgrounds/${slug.toLowerCase().replace('xp', '')}.webp`;

                        return (
                            <Link
                                key={slug}
                                to={`/${slug}`} // ✅ usar `to` en lugar de `href`
                                className="experience-card"
                                style={{
                                    backgroundImage: `url(${bgUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="overlay-icon">
                                    <img src={icon} alt={`${t(`experiencias1.${key}.title`)} icon`} className="iconxp" />
                                </div>
                                <div className="label">{t(`experiencias1.${key}.title`)}</div> {/* Traducción del título de la experiencia */}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

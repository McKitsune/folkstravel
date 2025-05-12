import '../styles/Section1.css';
import ReactPlayer from 'react-player';
import folksVideo from '../assets/videos/Folks.mp4';
import logo from '../assets/logos/Logo.svg';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa useTranslation

function Section1() {
    const { t } = useTranslation();  // Usa useTranslation
    const sectionRef = useRef(null);
    const modalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [modalPos, setModalPos] = useState({ top: 0, left: 0 });

    const items = [
        { label: t('coffeeXP'), position: 'top', description: t('coffeeXPDesc'), url: '/coffeexp' },
        { label: t('adventureXP'), position: 'top-right', description: t('adventureXPDesc'), url: '/adventuresxp' },
        { label: t('bikeXP'), position: 'bottom-right', description: t('bikeXPDesc'), url: '/bikingxp' },
        { label: t('natureXP'), position: 'bottom', description: t('natureXPDesc'), url: '/naturexp' },
        { label: t('discoveringXP'), position: 'top-left', description: t('discoveringXPDesc'), url: '/discoveringxp' },
        { label: t('otherXP'), position: 'bottom-left', description: t('otherXPDesc'), url: '/othersxp' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.5 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleClick = (e, item) => {
        setActiveItem(item);

        requestAnimationFrame(() => {
            const rect = e.target.getBoundingClientRect();
            const height = modalRef.current?.offsetHeight || 150;
            const width = modalRef.current?.offsetWidth || 300;
            const left = rect.left + rect.width / 2 - width / 2;
            const top = item.position.includes('bottom')
                ? rect.top + window.scrollY - height - 12
                : rect.bottom + window.scrollY + 12;

            setModalPos({ top, left });
        });
    };

    return (
        <div className="section1" ref={sectionRef}>
            <div className="video-container">
                <ReactPlayer
                    url={folksVideo}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                />
            </div>

            <div className="overlay-dark" />

            <div className="section1-layout">
                <ul className="nav-items">
                    {items.map((item) => (
                        <li
                            key={item.label}
                            className={`nav-item ${item.position} ${isVisible ? 'visible' : ''}`}
                            onClick={(e) => handleClick(e, item)}
                        >
                            <span className="xp-text">{item.label}</span>
                        </li>
                    ))}
                </ul>

                <div className="center-logo-wrapper">
                    <img src={logo} alt={t('logoAlt')} className="center-logo" />
                </div>
            </div>

            {activeItem && (
                <div className="modal-s1" role="dialog" aria-modal="true" onClick={() => setActiveItem(null)}>
                    <div
                        className="modal-s1-content"
                        ref={modalRef}
                        style={{
                            position: 'absolute',
                            top: `${modalPos.top}px`,
                            left: `${modalPos.left}px`,
                            zIndex: 9999
                        }}
                        onClick={(e) => e.stopPropagation()}
                        aria-labelledby="modal-title"
                    >
                        <h2 id="modal-title">{activeItem.label}</h2>
                        <p>{activeItem.description}</p>
                        <Link to={activeItem.url} className="modal-link">{t('Go to Experience')}</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Section1;

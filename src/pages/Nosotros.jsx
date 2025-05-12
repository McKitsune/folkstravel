import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';  // Asegúrate de importar useTranslation
import '../styles/Nosotros.css';

function useAnimateOnScroll(className = 'visible') {
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
            }
        }, { threshold: 0.4 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return ref;
}

function Nosotros() {
    const { t } = useTranslation();  // Hook para traducción
    const bloque1 = useAnimateOnScroll();
    const bloque2 = useAnimateOnScroll();
    const bloque3 = useAnimateOnScroll();
    const bloque4 = useAnimateOnScroll();

    return (
        <div className="nosotros-wrapper">
            <section className="bloque bloque1 parallax" ref={bloque1}>
                <h1>{t('nosotros.explorarConectarSentir')}</h1>
                <p>{t('nosotros.descripcion1')}</p>
            </section>

            <section className="bloque bloque2" ref={bloque2}>
                <h2>{t('nosotros.quienesSomos')}</h2>
                <p>{t('nosotros.descripcion2')}</p>
                <p>{t('nosotros.descripcion3')}</p>
            </section>

            <section className="bloque bloque3 parallax" ref={bloque3}>
                <h2>{t('nosotros.comoViajamos')}</h2>
                <p>{t('nosotros.descripcion4')}</p>
                <p>{t('nosotros.descripcion5')}</p>
            </section>

            <section className="bloque bloque4" ref={bloque4}>
                <h2>{t('nosotros.porQueElegirnos')}</h2>
                <ul>
                    <li>✔ {t('nosotros.punto1')}</li>
                    <li>✔ {t('nosotros.punto2')}</li>
                    <li>✔ {t('nosotros.punto3')}</li>
                    <li>✔ {t('nosotros.punto4')}</li>
                </ul>
                <p className="firma">{t('nosotros.firma')}</p>
            </section>
        </div>
    );
}

export default Nosotros;

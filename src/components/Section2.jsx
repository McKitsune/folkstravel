import '../styles/Section2.css';
import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Importa useTranslation

function Section2() {
    const { t } = useTranslation();  // Usa useTranslation para obtener las traducciones

    // Usa la clave de traducción 'mensaje' en lugar de un texto estático
    const mensaje = t('mensaje'); 
    console.log(mensaje);  // Verifica si la traducción se está aplicando correctamente

    const imagenes = [
        'barranquero.webp', 'biking.webp', 'nevado.webp', 'biking2.webp', 'cabalgata.webp', 'cabalgata2.webp',
        'cacao.webp', 'cafe.webp', 'cafe2.webp', 'cesteria.webp', 'cocora.webp',
        'cocora2.webp', 'colibri.webp', 'filandia.webp', 'globo.webp', 'globo2.webp',
        'mono.webp', 'Salento.webp', 'salento2.webp', 'termales.webp'
    ];

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [texto, setTexto] = useState('');
    const [modalImg, setModalImg] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.5 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) {
            setTexto('');
            return;
        }

        setTexto(mensaje);  // Establece el mensaje traducido

    }, [isVisible, mensaje]); // Actualiza texto cuando cambia isVisible o mensaje

    const handleImageClick = (src) => {
        if (window.innerWidth <= 768) {
            setModalImg(src);
        }
    };

    const closeModal = () => {
        setModalImg(null);
    };

    return (
        <div
            className={`section2 ${modalImg ? 'section2-modal-active' : ''}`}
            ref={sectionRef}
        >
            <div className={`section2-left overflow-animate-wrap ${isVisible ? 'visible' : ''}`}>
                <p>{texto}</p>
            </div>
            <div className={`section2-right overflow-animate-wrap ${isVisible ? 'visible' : ''}`}>
                {imagenes.slice(0, 18).map((name, i) => (
                    <img
                        key={i}
                        src={`/assets/images/${name}`}
                        alt={`Imagen de galería ${i + 1}`}
                        className={`gallery-img fade-in delay-${i} ${isVisible ? 'visible' : ''}`}
                        onClick={() => handleImageClick(`/assets/images/${name}`)}
                        loading="lazy"
                    />
                ))}
            </div>

            {/* Modal de la imagen seleccionada */}
            {modalImg && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={modalImg} alt="Imagen ampliada" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Section2;

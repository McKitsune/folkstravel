import '../styles/Section3.css';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Importa useTranslation

function Section3() {
    const { t } = useTranslation();  // Usa useTranslation para obtener las traducciones

    // Definir las regiones y traducir las descripciones con i18next
    const regiones = [
        { 
            id: 'risaralda', 
            src: './assets/images/risaralda.webp', 
            nombre: 'Risaralda', 
            descripcion: t('risaralda.descripcion')  // Traducción de la descripción para Risaralda
        },
        { 
            id: 'caldas', 
            src: './assets/images/caldas.webp', 
            nombre: 'Caldas', 
            descripcion: t('caldas.descripcion')  // Traducción de la descripción para Caldas
        },
        { 
            id: 'quindio', 
            src: './assets/images/quindio.webp', 
            nombre: 'Quindío', 
            descripcion: t('quindio.descripcion')  // Traducción de la descripción para Quindío
        }
    ];

    const [activo, setActivo] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Configuración del IntersectionObserver para detectar cuando la sección es visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.5 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`section3 ${activo ? 'modal-activo' : ''}`}
        >
            <div className={`mapa-interactivo overflow-animate-wrap ${isVisible ? 'visible' : ''}`}>
                {regiones.map((region) => (
                    <img
                        key={region.id}
                        src={region.src}
                        alt={region.nombre}
                        className={`region-svg ${region.id}`}
                        onClick={() => setActivo(region.id)}  // Al hacer click en una región se activa el modal
                    />
                ))}
                <div className="map-hint-arrow arrow-top">▼</div>
                <div className="map-hint-arrow arrow-left">▶</div>
                <div className="map-hint-arrow arrow-right">◀</div>
            </div>

            {/* Mostrar el modal de la región seleccionada */}
            {activo && (
                <div
                    className="modal-region"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setActivo(null)}  // Cierra el modal al hacer clic fuera
                >
                    <div
                        className="modal-contenido"
                        onClick={(e) => e.stopPropagation()}  // Evita que el click en el contenido cierre el modal
                        aria-labelledby="titulo-modal"
                    >
                        <h2 id="titulo-modal">{regiones.find(r => r.id === activo)?.nombre}</h2>
                        <p>{regiones.find(r => r.id === activo)?.descripcion}</p>
                        <button onClick={() => setActivo(null)}>Cerrar</button>
                    </div>
                </div>
            )}

            {/* Texto adicional con animación */}
            <div className={`texto slide-animate-wrap ${isVisible ? 'visible' : ''}`}>
                <h3>
                    {t('texto1')}
                </h3>
                <h3>
                    {t('texto2')}
                </h3>
            </div>
        </div>
    );
}

export default Section3;

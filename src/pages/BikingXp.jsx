import { useEffect } from "react";
import { useTranslation } from 'react-i18next'; 
import { initCustomFP } from "../utils/customfp.js";
import { setupScrollAnimations } from "../utils/scrollAnimations.js";
import "../styles/customfp.css";
import { useNavigate } from "react-router-dom";
import '../styles/bikingXp.css';
import fondoImage from '/assets/backgrounds/biking/fondo.webp';

// Lista de experiencias de ciclismo
const bikingexperiences = [
    {
        key: 'toursEnBicicleta',
        titulo: "TOURS EN BICICLETA",
        descripcion:
            "Ciclismo en la Región Cafetera: Naturaleza, Cultura y Aventura sobre Ruedas Desde recorridos entre cultivos de café hasta travesías andinas de alta montaña, nuestras rutas en bicicleta ofrecen paisajes impresionantes, contacto con comunidades locales y gastronomía típica. Con opciones que se ajustan a todos los niveles, garantizamos una experiencia memorable en la majestuosidad natural y cultural de la región cafetera.",
        imagen: "/assets/backgrounds/biking/biking.webp",
        fondo: "#0b0b0b85",
    },
    {
        key: 'rutaDelCacique',
        titulo: "LA RUTA DEL CACIQUE",
        descripcion:
            "Quindío – Biking the Andes: Ciclismo Escénico por la Cordillera Central Recorre 24 km desde Calarcá por rutas terciarias con vistas al paisaje cafetero. Guiado por expertos, este itinerario intermedio combina belleza natural, interacción local y desafío físico. Elige entre bicicleta todoterreno de 9 cambios o eléctrica de 5 cambios para una experiencia personalizada sobre dos ruedas.",
        imagenes: [
            "/assets/backgrounds/biking/biking5.webp",
            "/assets/backgrounds/biking/biking6.webp",
            "/assets/backgrounds/biking/biking7.webp",
            "/assets/backgrounds/biking/biking8.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: 'rutaDelCaciqueFincaElParaiso', 
        titulo: "RUTA DEL CACIQUE & FINCA EL PARAÍSO",
        descripcion:
            "Ciclismo y Café: Ruta Patrimonial desde Calarcá hasta Finca El Paraíso Recorre 24 km en bicicleta por la cordillera central desde Calarcá, atravesando paisajes declarados Patrimonio Mundial por la UNESCO. La ruta culmina en una finca familiar, donde se disfruta un almuerzo típico y se vive el proceso completo del café: cultivo, cosecha, tostado y preparación. Una experiencia que une ciclismo, tradición cafetera y cultura regional.",
        imagenes: [
            "/assets/backgrounds/biking/biking1.webp",
            "/assets/backgrounds/biking/biking2.webp",
            "/assets/backgrounds/biking/biking3.webp",
            "/assets/backgrounds/biking/biking4.webp",
        ],
        fondo: "#0b0b0b85",
    },
];

const BikingXp = () => {
    const { t } = useTranslation(); 
    const navigate = useNavigate();

    useEffect(() => {
        initCustomFP(".fp-wrapper", {
            delay: 1000,
            loop: false,
            disableBelow: 768,
            debug: false,
        });
        setupScrollAnimations();
    }, []);

    return (
        <div
            className="fp-container-biking"
            style={{
                backgroundImage: `url(${fondoImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="fp-wrapper">
                {bikingexperiences.map((exp, i) => (
                    <section key={i} className="fp-section section" style={{ backgroundColor: exp.fondo }}>
                        <div className="biking-xp-section-content">
                            <div className="biking-xp-section-text">
                                <h1>{t(`bikingExperiences.${exp.key}.titulo`)}</h1> 
                                <p>{t(`bikingExperiences.${exp.key}.descripcion`)}</p> 
                                {i !== 0 && (
                                    <button onClick={() => navigate("/contacto")}>{t('bikingContact.cotizar')}</button>
                                )}
                            </div>
                            <div className="biking-xp-section-img">
                                {exp.imagenes ? (
                                    <div className="image-collage">
                                        {exp.imagenes.map((src, idx) => (
                                            <img key={idx} src={src} alt={`${exp.titulo} ${idx + 1}`} />
                                        ))}
                                    </div>
                                ) : (
                                    <img src={exp.imagen} alt={exp.titulo} />
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <div className="fp-nav">
                <ul>
                    {bikingexperiences.map((_, i) => (
                        <li key={i}>
                            <a href={`#${i}`} className={i === 0 ? "active" : ""}>Go</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="fp-arrows">
                <button className="arrow" onClick={() => window.customFP.prev()}>↑</button>
                <button className="arrow" onClick={() => window.customFP.next()}>↓</button>
            </div>
        </div>
    );
};

export default BikingXp;

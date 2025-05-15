import { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importar useTranslation
import { initCustomFP } from "../utils/customfp.js";
import { setupScrollAnimations } from "../utils/scrollAnimations.js";
import "../styles/customfp.css";
import { useNavigate } from "react-router-dom";
import "../styles/discoveringXp.css";
import fondoImage from "/assets/backgrounds/discovering/fondo.webp";

const discoveringexperiences = [
    {
        key: "descubriendoexperiencias",
        titulo: "Descubriendo Experiencias",
        descripcion:
            "Identidad y Cultura en el Paisaje Cultural Cafetero. Los colonizadores de Antioquia, Tolima, Cauca y Cundiboyacense formaron una población amable, solidaria y dedicada a su tierra. La transmisión generacional de saberes y tradiciones ha tejido la identidad campesina. Explorar esta región es sumergirse en prácticas artesanales, tradiciones culinarias y relatos únicos que enriquecen la experiencia del visitante.",
        imagen: "/assets/backgrounds/discovering/discovering.webp",
        fondo: "#0b0b0b85",
    },
    {
        key: "tourdecacao&cesteria",
        titulo: "TOUR DE CACAO & CESTERÍA",
        descripcion:
            "Tejiendo Historias: Cacao, Cultura y Cestería en El Diamante y Filandia. En la finca El Diamante (Quimbaya), los nietos del dueño nos guían entre cultivos de cacao, café y plátano, enseñándonos a elaborar chocolate y compartiendo un almuerzo en una fonda caminera. Por la tarde, en Filandia, exploramos su arquitectura antioqueña y visitamos a un artesano local, donde aprenderemos sobre la cestería y tejeremos nuestro propio recuerdo.",
        imagenes: [
            "/assets/backgrounds/discovering/cesteria/cesteria1.webp",
            "/assets/backgrounds/discovering/cesteria/cesteria2.webp",
            "/assets/backgrounds/discovering/cesteria/cesteria3.webp",
            "/assets/backgrounds/discovering/cesteria/cesteria4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "puebliandoporlacordillerasanalberto",
        titulo: "PUEBLIANDO POR LA CORDILLERA & HACIENDA SAN ALBERTO",
        descripcion:
            "Paisaje, Cultura y Café de Alta Gama. A bordo de jeeps Willys, exploramos los municipios cordilleranos de Córdoba, Pijao (ciudad slow) y Buenavista, disfrutando de vistas panorámicas. Finalizamos en la terraza San Alberto con un recorrido de dos horas y media por la ruta del café, desde la semilla hasta la taza, culminando con una degustación semiprofesional del café más premiado de Colombia.",
        imagenes: [
            "/assets/backgrounds/discovering/puebliando/puebliando_1.webp",
            "/assets/backgrounds/discovering/puebliando/puebliando_2.webp",
            "/assets/backgrounds/discovering/puebliando/puebliando_3.webp",
            "/assets/backgrounds/discovering/puebliando/puebliando.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "cascadadealcalaelcontaduroyelmico",
        titulo: "CASCADA DE ALCALÁ, EL CHONTADURO & EL MICO",
        descripcion:
            "Explora un destino no turístico en una caminata de 3 a 5 horas por el bosque subandino hacia dos majestuosas cascadas. Guiado por un experto, descubrirás la interpretación ambiental del entorno y las tradiciones locales. Una experiencia auténtica donde naturaleza e historias se entrelazan paso a paso.",
        imagenes: [
            "/assets/backgrounds/discovering/alcala/alcala.webp",
            "/assets/backgrounds/discovering/alcala/alcala_1.webp",
            "/assets/backgrounds/discovering/alcala/alcala_2.webp",
            "/assets/backgrounds/discovering/alcala/alcala_3.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "alcala&casavieja",
        titulo: "CASCADA DE ALCALÁ & CASA VIEJA TOUR DE CAFÉ",
        descripcion:
            "En una caminata de tres horas por el bosque subandino, descubrimos dos cascadas ocultas, acompañados por un guía que interpreta el entorno y las tradiciones locales. Luego, visitamos una finca cafetera privada para conocer durante dos horas el proceso completo del café colombiano, desde la semilla hasta la taza. Una combinación inolvidable de naturaleza y cultura.",
        imagenes: [
            "/assets/backgrounds/discovering/alcala/alcala5.webp",
            "/assets/backgrounds/discovering/alcala/alcala6.webp",
            "/assets/backgrounds/discovering/alcala/alcala7.webp",
            "/assets/backgrounds/discovering/alcala/alcala8.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "alcala&bosquesaman",
        titulo: "CASCADA DE ALCALÁ & CANOPY BOSQUES DEL SAMÁN",
        descripcion:
            "Explora un destino no turístico con una caminata de tres horas hacia dos cascadas en el bosque subandino, guiado por expertos locales que revelan tradiciones y secretos del entorno. Luego, vive siete vuelos de canopy durante una hora de emociones y vistas panorámicas, conectándote con la naturaleza desde tierra y aire en una experiencia única.",
        imagenes: [
            "/assets/backgrounds/discovering/canopy/canopy1.webp",
            "/assets/backgrounds/discovering/canopy/canopy2.webp",
            "/assets/backgrounds/discovering/canopy/canopy3.webp",
            "/assets/backgrounds/discovering/canopy/canopy4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "rafting",
        titulo: "RAFTING QUINDÍO",
        descripcion:
            "Recorre un río de nivel intermedio bajo, ideal para familias o amigos sin experiencia previa. Remarás entre suaves rápidos rodeado de vegetación exuberante, guiado por expertos que garantizan seguridad y diversión. Una experiencia llena de risas, trabajo en equipo y conexión con la naturaleza en el corazón del Quindío.",
        imagenes: [
            "/assets/backgrounds/discovering/rafting/rafting1.webp",
            "/assets/backgrounds/discovering/rafting/rafting2.webp",
            "/assets/backgrounds/discovering/rafting/rafting3.webp",
            "/assets/backgrounds/discovering/rafting/rafting4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "chontaduro&diamante",
        titulo: "EL CHONTADURO & FINCA EL DIAMANTE",
        descripcion:
            "Explora el bosque subandino hacia dos majestuosas cascadas con un guía experto que revela secretos del entorno y tradiciones locales. Luego, en la Finca El Diamante (Quimbaya), recorre la plantación de cacao junto a los nietos del propietario, aprendiendo sobre procesos del chocolate y prácticas sostenibles que incluyen café y plátano. Culmina con un almuerzo casero en una posada tradicional.",
        imagenes: [
            "/assets/backgrounds/discovering/chontaduro/chantaduro1.webp",
            "/assets/backgrounds/discovering/chontaduro/chantaduro2.webp",
            "/assets/backgrounds/discovering/chontaduro/chantaduro3.webp",
            "/assets/backgrounds/discovering/chontaduro/chantaduro4.webp",
        ],
        fondo: "#0b0b0b85",
    },
];

const DiscoveringXp = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

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
            className="fp-container-discovering"
            style={{
                backgroundImage: `url(${fondoImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="fp-wrapper">
                {discoveringexperiences.map((exp, i) => (
                    <section key={i} className="fp-section section" style={{ backgroundColor: exp.fondo }}>
                        <div className="discovering-xp-section-content">
                            <div className="discovering-xp-section-text">
                                <h1>{t(`discoveringExperiences.${exp.key}.titulo`)}</h1>
                                <p>{t(`discoveringExperiences.${exp.key}.descripcion`)}</p>
                                {i !== 0 && (
                                    <button onClick={() => navigate("/contacto")}>{t('discoveringContact.cotizar')}</button>
                                )}
                            </div>
                            <div className="discovering-xp-section-img">
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
                    {discoveringexperiences.map((_, i) => (
                        <li key={i}>
                            <a href={`#${i}`} className={i === 0 ? "active" : ""}>
                                {t('discoveringContact.go')}
                            </a>
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

export default DiscoveringXp;

import { useEffect } from "react";
import { useTranslation } from 'react-i18next';  // Importar useTranslation
import { initCustomFP } from "../utils/customfp.js";
import { setupScrollAnimations } from "../utils/scrollAnimations.js";
import "../styles/customfp.css";
import { useNavigate } from "react-router-dom";
import '../styles/AdventuresXp.css';
import fondoImage from '/assets/backgrounds/aventuras/fondo.webp';


const adventuresexperiences = [

    {
        key: 'adventuresXP',
        titulo: "Experiencias De Aventuras",
        descripcion:
            `Adéntrate en un escenario de nieves perpetuas, páramos, bosques alto-andinos, valles, planicies y ríos caudalosos que revelan la riqueza natural del paisaje cultural cafetero. Ofrecemos experiencias de aventura que conectan a los turistas con la naturaleza y las comunidades locales, promoviendo un turismo responsable y sostenible que deja una huella imborrable en el corazón y el espíritu..`,
        imagen: "/assets/backgrounds/aventuras/nevados/nevado.webp",
        fondo: "#0b0b0b85",
    },
    {
        key: "cabalgatareservalamaria",
        titulo: "CABALGATA RESERVA NATURAL LA MARIA",
        descripcion:
            `Los pintorescos valles esculpidos por el río Quindío proporcionan el escenario perfecto para explorar a caballo. Cruzaremos ríos, ascenderemos por las colinas andinas y contemplaremos la majestuosidad de la Cordillera Central. Atravesaremos diversos cultivos agrícolas antes de culminar nuestra experiencia en un encantador mirador, donde disfrutaremos de tradicionales snacks de la región. Únete a nosotros para descubrir la belleza natural de la región a lomos de un caballo en un recorrido que combina la aventura ecuestre con la serenidad del entorno.`,
        imagenes: [
            "/assets/backgrounds/aventuras/cabalgata/cabalgata.webp",
            "/assets/backgrounds/aventuras/cabalgata/cabalgata2.webp",
            "/assets/backgrounds/aventuras/cabalgata/cabalgata3.webp",
            "/assets/backgrounds/aventuras/cabalgata/cabalgata4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "cabalgatalamaria&fincalamorelia",
        titulo: "CABALGATA LA MARIA & FINCA LA MORELIA",
        descripcion:
            `Embárcate en una jornada completa de descubrimiento, durante cinco horas (incluyendo traslados), explorarás los pintorescos valles formados por el río Quindío a caballo durante dos horas. La experiencia culminará en un hermoso mirador con tradicionales snacks regionales. Posteriormente, en la Finca La Morelia, seremos recibidos con una exquisita taza de café, exploraremos las plantaciones, el beneficiadero, la zona de secado y el área de tostión. La experiencia finaliza con una actividad lúdica de catación de café y una demostración de barismo.`,
        imagenes: [
            "/assets/backgrounds/aventuras/cabalgata/cabalgata.webp",
            "/assets/backgrounds/aventuras/cabalgata/cabalgata4.webp",
            "/assets/backgrounds/cafe/morelia/morelia2.webp",
            "/assets/backgrounds/cafe/morelia/morelia4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "balsajeriolavieja",
        titulo: "BALSAJE RIO LA VIEJA",
        descripcion:
            `Embárcate en una experiencia inolvidable con nuestro Tour de Balsaje por el Río La Vieja, una actividad de entre 4 y 5 horas que te conecta con la naturaleza, la cultura local y la historia de la región cafetera. Navegar por sus aguas es revivir un legado de la colonización antioqueña. La travesía se realiza en balsas artesanales de guadua, guiadas por dos bogas locales expertos, quienes te llevarán a disfrutar cada instante de este recorrido auténtico. Vive la magia del Río La Vieja y lleva contigo recuerdos imborrables de esta joya natural y cultural de Colombia.`,
        imagenes: [
            "/assets/backgrounds/aventuras/lavieja/balsaje1.webp",
            "/assets/backgrounds/aventuras/lavieja/balsaje2.webp",
            "/assets/backgrounds/aventuras/lavieja/balsaje3.webp",
            "/assets/backgrounds/aventuras/lavieja/balsaje4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "fincaeldiamante&canopybosquesdelsaman",
        titulo: "FINCA EL DIAMANTE & CANOPY BOSQUE DEL SAMAN",
        descripcion:
            `La experiencia inicia en la Finca El Diamante, cerca de Quimbaya, donde los nietos del propietario nos transmitirán la pasión agrícola heredada. Caminaremos por cultivos de cacao conociendo el proceso del chocolate colombiano y la sostenibilidad de la finca con cacao, café y plátano. Al final, aprenderemos a hacer chocolate y compartiremos un almuerzo típico en una fonda caminera. Luego, en el Bosque del Samán, viviremos la experiencia de canopy con siete vuelos y puentes tibetanos, disfrutando de paisajes y cultivos que conforman el paisaje cultural cafetero.`,
        imagenes: [
            "/assets/backgrounds/aventuras/saman/saman1.webp",
            "/assets/backgrounds/aventuras/saman/saman2.webp",
            "/assets/backgrounds/cafe/diamante/cacao3.webp",
            "/assets/backgrounds/aventuras/saman/saman3.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "globoaerostatico",
        titulo: "GLOBO AEROSTÁTICO",
        descripcion:
            `Embárcate en una experiencia única: un vuelo en globo aerostático que revela la excepcional topografía del paisaje cultural cafetero. Durante 3 horas, incluidos traslados, nuestros viajeros participarán en el inflado del globo, compartiendo momentos con la tripulación y degustando café local. Al elevarse, disfrutarán de la magnífica belleza de ríos, montañas y valles en un recorrido de 30 a 60 minutos. Aunque el aterrizaje es incierto, nuestro equipo garantiza la asistencia de transporte con la opción de regresar al hotel o continuar con otra experiencia en la región. Únete y descubre el paisaje cafetero desde una perspectiva inolvidable.`,
        imagenes: [
            "/assets/backgrounds/aventuras/globo/globo3.webp",
            "/assets/backgrounds/aventuras/globo/globo4.webp",
            "/assets/backgrounds/aventuras/globo/globo5.webp",
            "/assets/backgrounds/aventuras/globo/globo.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "senderismoparquedelosvenados",
        titulo: "SENDERISMO PARQUE DE LOS NEVADOS",
        descripcion:
            `La actividad perfecta para los apasionados por la alta montaña; hacer senderismo en el nevado Santa Isabel es lograr la conexión con la naturaleza. Iniciaremos desde Pereira o Santa Rosa de Cabal, en vehículo 4x4 hasta Potosí. Antes del ingreso a Parques Nacionales, desayunamos en la finca de campesinos. El recorrido hasta el borde glaciar es de 3.5 km en ascenso, con dificultad alta por la altitud (4.000 a 4.700 msnm), el viento y el clima. Durante el trayecto se observan paisajes mágicos, flora única y posiblemente el cóndor andino. Al terminar, regresamos a Potosí para almorzar y volver al punto de inicio.`,
        imagenes: [
            "/assets/backgrounds/aventuras/nevados/nevado1.webp",
            "/assets/backgrounds/aventuras/nevados/nevado2.webp",
            "/assets/backgrounds/aventuras/nevados/nevado3.webp",
            "/assets/backgrounds/aventuras/nevados/nevado4.webp",
        ],
        fondo: "#0b0b0b85",
    },
];
const AdventuresXp = () => {
    const { t } = useTranslation(); // Usar el hook de i18next para traducción
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
            className="fp-container-adventures"
            style={{
                backgroundImage: `url(${fondoImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="fp-wrapper">
                {adventuresexperiences.map((exp, i) => (
                    <section key={i} className="fp-section section" style={{ backgroundColor: exp.fondo }}>
                        <div className="adventures-xp-section-content">
                            <div className="adventures-xp-section-text">
                                <h1>{t(`adventures.${exp.key}.titulo`)}</h1> {/* Traducción del título */}
                                <p>{t(`adventures.${exp.key}.descripcion`)}</p> {/* Traducción de descripción */}
                                {i !== 0 && (
                                    <button onClick={() => navigate("/contacto")}>{t('adventuresContact.cotizar')}</button>
                                )}
                            </div>
                            <div className="adventures-xp-section-img">
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
                    {adventuresexperiences.map((_, i) => (
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

export default AdventuresXp;
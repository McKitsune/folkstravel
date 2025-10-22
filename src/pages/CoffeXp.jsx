import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { initCustomFP } from "../utils/customfp.js";
import { setupScrollAnimations } from "../utils/scrollAnimations.js";
import "../styles/customfp.css";
import { useNavigate } from "react-router-dom";
import '../styles/CoffeeXp.css';
import fondoImage from '/assets/backgrounds/cafe/fondo.webp';

const coffeeexperiences = [
    {
        key: 'cafeExcelencia',
        titulo: "El Café de Excelencia: Desde la Semilla hasta la Taza",
        descripcion:
            `Descubre un rincón con rica historia cafetera, consolidado como epicentro del desarrollo en nuestro país...`,
        imagen: "/assets/backgrounds/cafe/expcafe.webp",
        fondo: "#0b0b0b85",
    },
    {
        key: "fincaelparaiso",
        titulo: "FINCA EL PARAÍSO",
        descripcion:
            `Ubicada en las montañas verdes de la región cafetera colombiana, la Finca "El Paraíso" es un símbolo de resiliencia y esperanza. Nacida del dolor de una familia desplazada por la violencia, estas tierras se transformaron en un nuevo comienzo. Aquí, cada grano de café es tratado con dedicación, desde la recolección hasta la post-cosecha, garantizando calidad y sabor. "El Paraíso" no solo produce uno de los mejores cafés de Colombia, sino que representa cómo la pasión puede convertir la adversidad en prosperidad.`,
        imagenes: [
            "/assets/backgrounds/cafe/paraiso/paraiso1.webp",
            "/assets/backgrounds/cafe/paraiso/paraiso2.webp",
            "/assets/backgrounds/cafe/paraiso/paraiso3.webp",
            "/assets/backgrounds/cafe/paraiso/paraiso4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "fincalamorelia",
        titulo: "FINCA LA MORELIA",
        descripcion:
            `Inmersión en el café de Finca La Morelia Pioneros en la transformación del grano desde la semilla hasta la taza, Finca La Morelia es un negocio familiar con una historia rica en el mercado local. La experiencia inicia con una cálida bienvenida y una taza de café. Luego, recorremos los cultivos, la estación de procesamiento, el área de secado y la zona de tostado. Finalizamos con una divertida catación y una demostración de barista que cierra con broche de oro esta inmersión cafetera.`,
        imagenes: [
            "/assets/backgrounds/cafe/morelia/morelia1.webp",
            "/assets/backgrounds/cafe/morelia/morelia2.webp",
            "/assets/backgrounds/cafe/morelia/morelia3.webp",
            "/assets/backgrounds/cafe/morelia/morelia4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "haciendasanalberto",
        titulo: "HACIENDA SAN ALBERTO",
        descripcion:
            `Descubre el Éxtasis Cafetero en Hacienda San Alberto Ubicada en las laderas de la cordillera central, en Buenavista, Hacienda San Alberto combina paisajes espectaculares con la tradición cafetera. La experiencia inicia con una caminata por las montañas, visitando el área de germinación, beneficio y secado del café. Luego, en la terraza, participamos en una catación semi-profesional guiada por expertos, donde aprendemos a identificar distintas calidades de café. Finalizamos con una exquisita taza y una vista inigualable, en una experiencia que une sabor y naturaleza.`,
        imagenes: [
            "/assets/backgrounds/cafe/alberto/alberto1.webp",
            "/assets/backgrounds/cafe/alberto/alberto2.webp",
            "/assets/backgrounds/cafe/alberto/alberto3.webp",
            "/assets/backgrounds/cafe/alberto/alberto4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "fincabuenosaires",
        titulo: "FINCA BUENOS AIRES",
        descripcion:
            `Finca Buenos Aires: Un Viaje Revelador del Café A solo 30 minutos de Salento, Finca Buenos Aires combina tradición, arquitectura regional y paisajes andinos únicos. En esta plantación tradicional, los visitantes disfrutan de un momento de serenidad antes de iniciar un recorrido inmersivo por el proceso del café. Caminamos entre cultivos, participamos en la cosecha, visitamos la estación de beneficio y el área de secado, y descubrimos el arte ancestral del tostado. En 1 hora y 30 minutos, esta experiencia deja recuerdos imborrables y un profundo aprecio por la cultura cafetera.`,
        imagenes: [
            "/assets/backgrounds/cafe/buenosaires/aires1.webp",
            "/assets/backgrounds/cafe/buenosaires/aires2.webp",
            "/assets/backgrounds/cafe/buenosaires/aires3.webp",
            "/assets/backgrounds/cafe/buenosaires/aires4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "fincacasavieja",
        titulo: "FINCA CASA VIEJA",
        descripcion:
            `Finca Casa Vieja: Tradición, Naturaleza y Café en Armonía: A solo 10 minutos de Quimbaya, Casa Vieja es una finca cafetera familiar donde tradición y naturaleza se entrelazan. Guiados por un miembro de la familia, recorremos las plantaciones, conocemos su filosofía ecológica y visitamos la estación de beneficio. Caminamos entre árboles frutales y heliconias, aprendemos sobre el tostado artesanal y cerramos con una exquisita taza de café, en una experiencia que celebra la esencia de Casa Vieja.`,
        imagenes: [
            "/assets/backgrounds/cafe/casa/casa1.webp",
            "/assets/backgrounds/cafe/casa/casa2.webp",
            "/assets/backgrounds/cafe/casa/casa3.webp",
            "/assets/backgrounds/cafe/casa/casa4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "haciendavenecia",
        titulo: "HACIENDA VENECIA",
        descripcion:
            `Hacienda Venecia: Un Siglo de Elegancia Cafetera: A pocos minutos de Manizales, Hacienda Venecia ofrece más de 100 años de herencia cafetera entre paisajes imponentes y tradiciones vivas. Guiados por un conocedor local, iniciamos con una introducción al mundo del café, para luego recorrer plantaciones, vivir el día a día de los recolectores y conocer la zona de procesamiento. Finalizamos contemplando la transformación del grano en café tostado. Más que un recorrido, es un viaje por la historia y la esencia de la cultura cafetera.`,
        imagenes: [
            "/assets/backgrounds/cafe/venecia/venecia1.webp",
            "/assets/backgrounds/cafe/venecia/venecia2.webp",
            "/assets/backgrounds/cafe/venecia/venecia3.webp",
            "/assets/backgrounds/cafe/venecia/venecia4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "fincaeldiamante",
        titulo: "FINCA EL DIAMANTE",
        descripcion:
            `Delicia de la Cosecha de Cacao en la Finca El Diamante: Ubicada cerca de Quimbaya, Finca El Diamante ofrece una experiencia única en torno al cacao colombiano. Guiados por los nietos del dueño, apasionados por la agricultura, iniciamos con un recorrido por la plantación de cacao, descubriendo cada etapa del proceso hasta llegar a una barra o taza de chocolate. También conoceremos prácticas sostenibles aplicadas al cacao, café y plátano. La experiencia culmina con un almuerzo casero en una encantadora posada tradicional, fusionando sabor, cultura y naturaleza en un solo viaje..`,
        imagenes: [
            "/assets/backgrounds/cafe/diamante/cacao1.webp",
            "/assets/backgrounds/cafe/diamante/cacao2.webp",
            "/assets/backgrounds/cafe/diamante/cacao3.webp",
            "/assets/backgrounds/cafe/diamante/cacao4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "jardinbotanico&fincaelparaiso",
        titulo: "JARDÍN BOTÁNICO & FINCA EL PARAÍSO",
        descripcion:
            `Una Jornada Inolvidable: Naturaleza y Café Colombiano. Vive un día completo de conexión con la naturaleza y la cultura cafetera. Iniciamos con una caminata por el Jardín Botánico y el Mariposario del Quindío, explorando colecciones de palmas, heliconias, helechos y observando cerca de 20 especies de mariposas. Luego, nos trasladamos a Finca El Paraíso, ubicada en las montañas verdes del Quindío, donde el café se cultiva con esmero y pasión. Allí conoceremos su historia de resiliencia, recorreremos el proceso del grano y cerraremos con una taza de café que encierra calidad, tradición y esperanza.`,
        imagenes: [
            "/assets/backgrounds/cafe/botanico/botanico1.webp",
            "/assets/backgrounds/cafe/botanico/botanico2.webp",
            "/assets/backgrounds/cafe/paraiso/paraiso2.webp",
            "/assets/backgrounds/cafe/paraiso/paraiso4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "haciendavenecia&citytourmanizales",
        titulo: "HACIENDA VENECIA & CITY TOUR MANIZALES",
        descripcion:
            `Del Café a Bolívar: Legado Cafetero y Esplendor Urbano Iniciamos con un experto local que nos introduce al fascinante mundo del café. Recorremos plantaciones, vivimos la experiencia de los recolectores y presenciamos el proceso completo del grano hasta el café tostado. Luego, viajamos a Manizales, donde exploramos su historia en el Monumento a los Colonizadores, la Plaza de Bolívar, el Palacio de la Gobernación, la Catedral y La Torre el Cable. Concluimos con una taza de café, cerrando un viaje que une tradición cafetera y riqueza urbana.`,
        imagenes: [
            "/assets/backgrounds/cafe/venecia/venecia5.webp",
            "/assets/backgrounds/cafe/manizales/manizales1.webp",
            "/assets/backgrounds/cafe/venecia/venecia6.webp",
            "/assets/backgrounds/cafe/manizales/manizales2.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "fincadonmanolo",
        titulo: "FINCA CAFETERA DON MANOLO",
        descripcion:
            `Finca Don Manolo: Magia Cafetera en Pereira Ubicada en Pereira y rodeada de paisajes espectaculares, la Finca Don Manolo ofrece una experiencia inmersiva en el mundo del café. Aquí, los visitantes recorren todo el proceso, desde la siembra hasta el tostado, participando en actividades interactivas que revelan los secretos del grano. Con una cálida hospitalidad y cafés excepcionales, esta finca fusiona la pasión cafetera con la belleza natural, brindando una experiencia sensorial y cultural inolvidable.`,
        imagenes: [
            "/assets/backgrounds/cafe/manolo/manolo1.webp",
            "/assets/backgrounds/cafe/manolo/manolo2.webp",
            "/assets/backgrounds/cafe/manolo/manolo3.webp",
            "/assets/backgrounds/cafe/manolo/manolo4.webp",
        ],
        fondo: "#0b0b0b85",
    },
];
const CoffeeXp = () => {
    const { t } = useTranslation();  // Esto debe ser definido
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
            className="fp-container-coffee"
            style={{
                backgroundImage: `url(${fondoImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="fp-wrapper">
                {coffeeexperiences.map((exp, i) => (
                    <section key={i} className="fp-section section" style={{ backgroundColor: exp.fondo }}>
                        <div className="coffee-xp-section-content">
                            <div className="coffee-xp-section-text">
                                <h1>{t(`coffeeExperiences.${exp.key}.titulo`)}</h1>
                                <p>{t(`coffeeExperiences.${exp.key}.descripcion`)}</p>
                                {i !== 0 && (
                                    <button onClick={() => navigate("/contacto")}>{t('coffeeContact.cotizar')}</button>
                                )}
                            </div>
                            <div className="coffee-xp-section-img">
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
                    {coffeeexperiences.map((_, i) => (
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

export default CoffeeXp;

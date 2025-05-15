import { useEffect } from "react";
import { useTranslation } from 'react-i18next'; // Asegúrate de importar useTranslation
import { initCustomFP } from "../utils/customfp.js";
import { setupScrollAnimations } from "../utils/scrollAnimations.js";
import "../styles/customfp.css";
import { useNavigate } from "react-router-dom";
import "../styles/NatureXp.css";
import fondoImage from "/assets/backgrounds/nature/fondo.webp";




const natureexperiences = [

    {
        key: "experienciasdenaturaleza",
        titulo: "Experiencias De Naturaleza",
        descripcion:
            `Explora la Magia del Paisaje Cultural Cafetero: Naturaleza, Aventura y Experiencias Únicas Descubre el tesoro natural del Paisaje Cultural Cafetero, en el corazón de los Andes Centrales, rodeado por valles interandinos, montañas nevadas del Parque Nacional Natural Los Nevados, bosques andinos, paisajes de páramo y puntos de avistamiento de aves. Sumérgete en rutas de trekking hacia lugares maravillosos y desafiantes, donde florecen orquídeas y colibríes habitan entornos únicos. En FOLKS TRAVEL diseñamos actividades adaptadas a cada viajero, desde caminatas relajadas hasta rutas de trekking exigentes, para disfrutar de la diversidad natural. Descubre la autenticidad de la naturaleza con nosotros: explora, aprende y conecta con el Paisaje Cultural Cafetero. ¡Prepárate para vivir experiencias inolvidables!`,
        imagen: "/assets/backgrounds/nature/cocora.webp",
        fondo: "#0b0b0b85",
    },
    {
        key: "salentococoraacaime",
        titulo: "SALENTO, COCORA & ACAIME",
        descripcion:
            `Una Jornada Completa de Naturaleza y Cultura El recorrido a la Reserva Natural Acaime dura aproximadamente 5 horas: exploramos el bosque andino, cruzamos puentes colgantes, antiguos caminos de arriería, observamos aves y colibríes. Luego de un descanso con bebidas locales, regresamos a Cocora. En la tarde, visitamos Salento y su arquitectura, cafés y artesanías. Una experiencia que fusiona naturaleza y cultura en una jornada de descubrimientos.`,
        imagenes: [
            "/assets/backgrounds/nature/salcoaca/salcoaca1.webp",
            "/assets/backgrounds/nature/salcoaca/salcoaca2.webp",
            "/assets/backgrounds/nature/salcoaca/salcoaca3.webp",
            "/assets/backgrounds/nature/salcoaca/salcoaca4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "salentococorafilandia",
        titulo: "SALENTO, COCORA & FILANDIA",
        descripcion:
            `Un Día Completo de Descubrimiento Exploramos el majestuoso Valle de Cocora con una caminata de dos horas y una interpretación ambiental de su valor ecológico. Luego, nos sumergimos en la magia de Salento, conectándonos con su arquitectura y artesanías. Finalizamos en Filandia, recorriendo sus calles pintorescas, visitando el mirador y disfrutando una bebida local en su acogedora plaza.`,
        imagenes: [
            "/assets/backgrounds/nature/salcofi/salcofi1.webp",
            "/assets/backgrounds/nature/salcofi/salcofi2.webp",
            "/assets/backgrounds/nature/salcofi/salcofi3.webp",
            "/assets/backgrounds/nature/salcofi/salcofi4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "salentococora",
        titulo: "SALENTO & COCORA",
        descripcion:
            `Naturaleza y Encanto Atemporal Realizamos una caminata de dos horas por el bosque de palmas de cera, desvelando la importancia de la palma de cera del Quindío, árbol nacional y la más alta del mundo. Luego regresamos a Salento, donde su arquitectura antioqueña, casas coloridas y colinas exuberantes brindan un escenario ideal para relajarse y disfrutar antes de volver al hotel. Un viaje para descubrir la esencia del Valle de Cocora y el encanto atemporal de Salento.`,
        imagenes: [
            "/assets/backgrounds/nature/salco/salco1.webp",
            "/assets/backgrounds/nature/salco/salco2.webp",
            "/assets/backgrounds/nature/salco/salco3.webp",
            "/assets/backgrounds/nature/salco/salco4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "salentococorafincaba",
        titulo: "SALENTO, COCORA & FINCA BUENOS AIRES",
        descripcion:
            `Naturaleza y Café Colombiano Disfruta una caminata de dos horas en el Valle de Cocora, admirando las palmas de cera, símbolo nacional de Colombia. Luego, relájate en Salento, entre calles adoquinadas y casas vibrantes. La jornada continúa en la finca Buenos Aires, donde vivirás el proceso del café colombiano desde la semilla hasta la catación, recorriendo campos, cosecha, beneficio y secado.`,
        imagenes: [
            "/assets/backgrounds/nature/salcoba/salcoba1.webp",
            "/assets/backgrounds/nature/salcoba/salcoba2.webp",
            "/assets/backgrounds/nature/salcoba/salcoba3.webp",
            "/assets/backgrounds/cafe/buenosaires/aires2.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "jardinbotanico",
        titulo: "JARDIN BOTANICO DEL QUINDIO",
        descripcion:
            `Naturaleza, Ciencia y Belleza Disfruta un recorrido guiado de dos horas por un bosque en recuperación, con senderos accesibles para todos. Contempla colecciones botánicas como palmas, helechos y heliconias. Visita una cabina de avistamiento de aves, un mirador del dosel del bosque, museos de insectos y mariposas, y finaliza en el mariposario con especies colombianas. Una experiencia que fusiona aventura y tranquilidad.`,
        imagenes: [
            "/assets/backgrounds/cafe/botanico/botanico5.webp",
            "/assets/backgrounds/cafe/botanico/botanico6.webp",
            "/assets/backgrounds/cafe/botanico/botanico7.webp",
            "/assets/backgrounds/cafe/botanico/botanico1.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "carbonera",
        titulo: "BOSQUES DE PALMA LA CARBONERA",
        descripcion:
            `Palmas de Cera y Paisajes Andinos Ascendemos en Jeeps Willys por los Andes, atravesando bosques montañosos hasta llegar al bosque de palmas de cera más grande del mundo. Antes de llegar a la finca, realizamos una caminata con vistas únicas de las palmas. En la finca, compartimos con los lugareños y disfrutamos un refrigerio. De regreso a Salento, almorzamos tipo picnic (no incluido) en la montaña, con opción de caminar o volver en Jeep.`,
        imagenes: [
            "/assets/backgrounds/nature/carbonera/carbonera1.webp",
            "/assets/backgrounds/nature/carbonera/carbonera2.webp",
            "/assets/backgrounds/nature/carbonera/carbonera3.webp",
            "/assets/backgrounds/nature/carbonera/carbonera4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "romeliaorquideasyaves",
        titulo: "FINCA LA ROMELIA ORQUÍDEAS Y AVES",
        descripcion:
            `Orquídeas, Aves y Hospitalidad Colombiana Durante más de treinta años, Don José y su esposa han reunido una colección de más de 840 especies de orquídeas. Los visitantes disfrutarán de sus vibrantes colores y aromas, además de explorar cultivos de aguacate y cítricos. También se podrá avistar aves y compartir un almuerzo con la cálida familia anfitriona. En Finca La Romelia, tradición, naturaleza y hospitalidad se unen en una experiencia única.`,
        imagenes: [
            "/assets/backgrounds/nature/romelia/romelia1.webp",
            "/assets/backgrounds/nature/romelia/romelia2.webp",
            "/assets/backgrounds/nature/romelia/romelia3.webp",
            "/assets/backgrounds/nature/romelia/romelia4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "termalesruizparamonevados",
        titulo: "TERMALES DEL RUIZ & PÁRAMO PARQUE DE LOS NEVADOS",
        descripcion:
            `Naturaleza, Aventura y Relajación Desde Manizales (2,100 msnm) ascendemos hasta el PNN Los Nevados (4,100 msnm) con paradas panorámicas, de aclimatación y gastronómicas. Caminamos 3 km entre frailejones y aves como colibríes y gralarias. Luego, en Termales del Ruiz, disfrutamos un baño en aguas sulfurosas y observamos de 10 a 15 especies de colibríes en jardines diseñados. Finalizamos con un almuerzo en las termas antes de regresar al hotel.`,
        imagenes: [
            "/assets/backgrounds/nature/termal/termal1.webp",
            "/assets/backgrounds/nature/termal/termal2.webp",
            "/assets/backgrounds/nature/termal/termal3.webp",
            "/assets/backgrounds/nature/termal/termal4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "reservarioblanco",
        titulo: "RESERVA NATURAL RÍO BLANCO",
        descripcion:
            `A solo 45 minutos de Manizales, Río Blanco es un ecosistema alto andino que alberga 350 especies de aves. Guiados por un experto local, exploramos los mejores puntos de observación para encontrar gralarias, loros, tangaras, saltadores enmascarados, colibríes y más. Un santuario natural donde los sonidos y colores de las aves crean una experiencia inolvidable.`,
        imagenes: [
            "/assets/backgrounds/nature/rioblanco/rioblanco1.webp",
            "/assets/backgrounds/nature/rioblanco/rioblanco2.webp",
            "/assets/backgrounds/nature/rioblanco/rioblanco3.webp",
            "/assets/backgrounds/nature/rioblanco/rioblanco4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "montezumarain",
        titulo: "RESERVA NATURAL MONTEZUMA RAINFOREST",
        descripcion:
            `A 3 horas de Pereira, en el PNN Tatamá cerca de Pueblo Rico, Montezuma ofrece una aventura de 2 a 3 días en uno de los corredores más biodiversos del mundo. Administrado por una familia resiliente tras el conflicto armado, este refugio acoge a biólogos y amantes de las aves. Observa especies chocoanas y andinas, colibríes, tangaras, atrapamoscas y más, con el majestuoso Cerro Tatamá como telón de fondo.`,
        imagenes: [
            "/assets/backgrounds/nature/montezuma/montezuma1.webp",
            "/assets/backgrounds/nature/montezuma/montezuma4.webp",
            "/assets/backgrounds/nature/montezuma/montezuma3.webp",
            "/assets/backgrounds/nature/montezuma/montezuma2.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "recintopensamientomanizales",
        titulo: "RECINTO DEL PENSAMIENTO & CITY TOUR MANIZALES",
        descripcion:
            `La jornada inicia con un paseo en teleférico en el Recinto del Pensamiento, donde colibríes, mariposas y orquídeas cautivan entre el bosque alto andino. Visitamos una renombrada estructura en guadua del arquitecto Simón Vélez. En Manizales, exploramos el Monumento a los Colonizadores, la Plaza de Bolívar, la Catedral, y finalizamos en La Torre el Cable con una experiencia de café que encapsula la esencia de la ciudad.`,
        imagenes: [
            "/assets/backgrounds/nature/pensamiento/pensamiento1.webp",
            "/assets/backgrounds/nature/pensamiento/pensamiento2.webp",
            "/assets/backgrounds/nature/pensamiento/pensamiento3.webp",
            "/assets/backgrounds/nature/pensamiento/pensamiento4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "otunfilandiacesteria",
        titulo: "OTUN QUIMBAYA, FILANDIA & CESTERIA",
        descripcion:
            `Iniciamos con una caminata en la Reserva Natural Otún Quimbaya hacia una majestuosa cascada, guiada por una interpretación ambiental del bosque andino. Luego, exploramos Filandia y su atmósfera local, visitando a un artesano en cestería tradicional. Una experiencia donde naturaleza, cultura y artesanía se entrelazan de forma inolvidable.`,
        imagenes: [
            "/assets/backgrounds/nature/quimbaya/quimbaya1.webp",
            "/assets/backgrounds/nature/quimbaya/quimbaya2.webp",
            "/assets/backgrounds/nature/quimbaya/quimbaya3.webp",
            "/assets/backgrounds/nature/quimbaya/quimbaya4.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "romeliatrasladomedellin",
        titulo: "FINCA LA ROMELIA & TRASLADO A MEDELLIN",
        descripcion:
            `A 1h30 de Pereira, visitamos la Finca La Romelia con más de 840 especies de orquídeas cultivadas por Don José y su esposa. Durante tres horas, exploramos colores, aromas, campos de aguacate y cítricos, con posibilidad de avistar aves. Culminamos con una comida familiar auténtica y emprendemos un apacible viaje por carretera hacia Medellín de 4 a 5 horas.`,
        imagenes: [
            "/assets/backgrounds/nature/romelia/romelia5.webp",
            "/assets/backgrounds/nature/romelia/romelia6.webp",
            "/assets/backgrounds/nature/romelia/romelia7.webp",
            "/assets/backgrounds/nature/romelia/romelia8.webp",
        ],
        fondo: "#0b0b0b85",
    },
    {
        key: "termalessantarosa",
        titulo: "TERMALES DE SANTA ROSA DE CABAL",
        descripcion:
            `A una hora de Pereira, descubrimos los Termales de Santa Rosa de Cabal, rodeados de Bosques Alto Andinos y una majestuosa cascada. Iniciamos con una interpretación ambiental, seguida de tiempo libre en las aguas termales. Finalizamos con una parada en Santa Rosa para disfrutar una bebida en su parque pintoresco, antes de regresar al hotel.`,
        imagenes: [
            "/assets/backgrounds/nature/termal/cabal1.webp",
            "/assets/backgrounds/nature/termal/cabal2.webp",
            "/assets/backgrounds/nature/termal/cabal3.webp",
            "/assets/backgrounds/nature/termal/cabal4.webp",
        ],
        fondo: "#0b0b0b85",
    },
];
const NatureXp = () => {
    const { t } = useTranslation();  // Asegúrate de que useTranslation está siendo llamado
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
            className="fp-container-nature"
            style={{
                backgroundImage: `url(${fondoImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="fp-wrapper">
                {natureexperiences.map((exp, i) => (
                    <section key={i} className="fp-section section" style={{ backgroundColor: exp.fondo }}>
                        <div className="nature-xp-section-content">
                            <div className="nature-xp-section-text">
                                <h1>{t(`natureExperiences.${exp.key}.titulo`)}</h1>
                                <p>{t(`natureExperiences.${exp.key}.descripcion`)}</p>
                                {i !== 0 && (
                                    <button onClick={() => navigate("/contacto")}>{t('natureContact.cotizar')}</button>
                                )}
                            </div>
                            <div className="nature-xp-section-img">
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
                    {natureexperiences.map((_, i) => (
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

export default NatureXp;
import { useTranslation } from 'react-i18next';  // Asegúrate de importar useTranslation
import "../styles/customfp.css";
import '../styles/OthersXp.css'

const OthersXp = () => {
    const { t } = useTranslation(); // Asegúrate de que useTranslation está siendo llamado

    return (
        <div className="fp-container-others">
            <h1>{t('othersXp.title')}</h1> {/* Traducción del título */}

            <button onClick={() => window.location.href = "/contacto"}>
                {t('othersXp.contactButton')} {/* Traducción del texto del botón */}
            </button>
        </div>
    );
};

export default OthersXp;

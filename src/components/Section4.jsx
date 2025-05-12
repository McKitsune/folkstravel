import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';  // Importar useTranslation
import '../styles/Section4.css';

function Section4() {
    const { t } = useTranslation(); // Usar el hook de i18next
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.5 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);

        try {
            const res = await fetch('https://folkstravel.onrender.com/api/enviarCorreo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            }
            );

            const data = await res.json();
            if (res.ok) {
                setStatus('success');
                alert(data.message);
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(data.message || 'Error en el servidor');
            }
        } catch (err) {
            console.error('Error:', err);
            setStatus('error');
            alert('Hubo un error al enviar el mensaje.');
        }
    };

    return (
        <div ref={sectionRef} className={`section4 ${isVisible ? 'visible' : ''}`}>
            <div className="overlay"></div>
            <div className="section4-content">
                <div className={`contact-intro slide-animate-wrap ${isVisible ? 'visible' : ''}`}>
                    <h1>{t('section4.titulo')}</h1>
                    <p>
                        {t('section4.subtitulo')}
                    </p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/folkstravelcolombia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon ig"></a>
                        <a href="https://www.facebook.com/profile.php?id=100038918559877" target="_blank" aria-label="Facebook" className="icon fb"></a>
                        <a href="https://www.youtube.com/@folkstravel5337" target="_blank" aria-label="YouTube" className="icon yt"></a>
                    </div>
                </div>

                <div className={`contact-form slide-animate-wrap ${isVisible ? 'visible' : ''}`}>
                    <h2>{t('section4.contactanos')}</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder={t('section4.nombre')}
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t('section4.correo')}
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder={t('section4.mensaje')}
                            rows="5"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button type="submit">{t('section4.enviar')}</button>
                        {status === 'success' && <p style={{ color: 'lightgreen' }}>{t('section4.exito')}</p>}
                        {status === 'error' && <p style={{ color: 'tomato' }}>{t('section4.error')}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Section4;

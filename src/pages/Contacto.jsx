import '../styles/Contacto.css';
import contactoImg from '/assets/images/contacto.jpeg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Contacto() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);  // 'success' | 'error' | null
    const [loading, setLoading] = useState(false); // nuevo estado

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);
        setLoading(true);  // mostrar loader

        try {
            const res = await fetch('https://folkstravel.onrender.com/api/enviarCorreo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error(data);
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        } finally {
            setLoading(false); // ocultar loader
        }
    };

    return (
        <div className="contact-wrapper">
            {/* Left Section - Texts */}
            <div className="contact-info">
                <h1>{t('contacto.contactanos')}</h1>
                <p>{t('contacto.experiencia')}</p>
                <ul>
                    <li><strong>{t('contacto.email')}:</strong> ventas@folkstravels.com</li>
                    <li><strong>{t('contacto.telefono')}:</strong> <a className='wasas' href="https://wa.me/573207282032" target="_blank">🗨️ +57 320 728 2032</a></li>
                    <li><strong>{t('contacto.direccion')}:</strong> Armenia, Quindío, Colombia</li>
                </ul>
            </div>

            {/* Right Section - Form */}
            <div className="contact-form-container">
                <div className="contact-form-bg">
                    <img src={contactoImg} alt={t('contacto.alt')} />
                </div>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input name="name" type="text" placeholder={t('contacto.nombre')} required value={formData.name} onChange={handleChange} />
                    <input name="email" type="email" placeholder={t('contacto.correo')} required value={formData.email} onChange={handleChange} />
                    <textarea name="message" rows="4" placeholder={t('contacto.mensaje')} required value={formData.message} onChange={handleChange}></textarea>
                    <button type="submit" disabled={loading}>
                        {loading ? t('contacto.enviando') : t('contacto.enviar')}
                    </button>
                    {loading && <p className="loading">{t('contacto.espere')}</p>}
                    {status === 'success' && <p className="success">{t('contacto.exito')}</p>}
                    {status === 'error' && <p className="error">{t('contacto.error')}</p>}
                </form>
            </div>
        </div>
    );
}

export default Contacto;

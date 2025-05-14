import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Section5.css';
import video1 from '../assets/videos/transp1.mp4';
import video2 from '../assets/videos/transp2.mp4';

const videos = [video1, video2];

export default function Section5() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.4 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className={`section5 ${isVisible ? 'visible' : ''}`}>
            <div className="section5-content">
                <div className="overlays5"></div>
                <div className="text-block">
                    <h2>{t('section5.titulo')}</h2>
                    <p>{t('section5.texto1')}</p>
                    <p>{t('section5.texto2')}</p>
                </div>
                <div className="videos-wrapper">
                    {videos.map((videoSrc, idx) => (
                        <video
                            key={idx}
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="carousel-video"
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
